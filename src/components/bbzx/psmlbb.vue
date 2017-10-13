<template>
	<!-- 配送毛利报表 -->
	<div class="psmlbb">
		<!-- 这里是导航栏部分结束 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox dc" @click='djt_Click=true'><span>导出</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox dy"><span>打印</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox yl"><span>预览</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox tc" @click="closetag"><span>退出</span></div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="chaxunkuang">
			<div class="formcx">
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-col :span="5">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="line " :span="2">
							<div class="grid-content">
								<p class="ZHI">至</p>
							</div>
						</el-col>
						<el-col :span="5">
							<el-form-item prop="date2">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="4">
							<div class="grid-content">
								<p>配送中心:</p>
							</div>
						</el-col>
						<el-col :span="7">
							<el-form-item prop="peisong">
								<!-- 配送中心列表 -->
								<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
									<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
										<span style="float: left">{{ item.DCName }}</span>
									</el-option>
								</el-select>
								<!-- 配送中心列表结束 -->
							</el-form-item>
						</el-col>
					</el-form-item>
				</el-form>
			</div>

			<div class="buttondiv">
				<span class="wrapper">
					<el-button type="primary"><i class="el-icon-search el-icon--left"></i>查询</el-button>
					<el-button type="primary"><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
				</span>
			</div>
		</div>
		<!--条件查询结束-->
		<!--配送毛利报表部分-->
		<div>
			<div class='title'>
				<h1>配送毛利表</h1></div>
			<div class='table'>
				<el-table :data="ddlbs" height="250" border style="width: 100%"  @cell-dblclick="dbrow" @header-click="headerc"  v-loading.body="loading"  element-loading-text="玩命加载中">
					<el-table-column prop="date" label="配送日期" width="110">
						<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
					</el-table-column>
					<el-table-column prop="date" label="配送号" width="110">
						<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
					</el-table-column>
					<el-table-column prop="date" label="承运公司" width="110">
						<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
					</el-table-column>
					<el-table-column prop="date" label="车牌号" width="110">
						<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
					</el-table-column>
					<el-table-column prop="date" label="司机" width="110">
						<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
					</el-table-column>
					<el-table-column prop="name" label="应收配送费" width="150">
						<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
					</el-table-column>
					<el-table-column prop="name" label="应付配送费" width="150">
						<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
					</el-table-column>
					<el-table-column prop="name" label="配送毛利" width="110">
						<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
					</el-table-column>
					
				</el-table>

			</div>

		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'fymxbb',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ruleForm: {
					date1: '',
					date2: '',

				},
				tableData: [],
				loading: false,
				peisong:'',
				cities:'',

			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			var tabdata = [];
			var len = 0;
			that.getdclist();
			//			axios.get("http://121.41.122.74:5676/Handler.ashx")
			//				.then(function(rsp) {
			//					//	that.tableData4 = rsp.data
			//					tabdata = rsp.data;
			//					len = tabdata.length;
			//					getdata(0);
			//					that.loading = false;
			//				})

			//			$.ajax({
			//				url: "http://121.41.122.74:5676/Handler.ashx",
			//
			//				success: function(reg) {
			//					
			//					for(var i=0;i<reg.length;i++){
			//						that.tableData4.push(reg[i]);
			//						console.log(i);
			//					}
			//					that.tableData4 = reg;
			//                 console.log(that.tableData4);
			//				}
			//			});

			function getdata(i) {

				var k = i + 200;
				var da = tabdata.slice(i, k);

				var d = that.tableData4;
				for(var i = 0; i < da.length; i++) {
					d.push(da[i]);
				}
				that.tableData4 = d;

				//			if(k<len){
				//				setTimeout(function(){
				//					getdata(k);
				//				},500);
				//				 
				//			}
			}

		},
		methods: {
			//表格双击（可编辑表格）
			dbrow: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标

				var jname = column.property;
				var $oldhtml = $($cell.html());
				var val = $oldhtml.html();
				$inp.val(val);
				$cell.html("").append($inp);
				$inp.focus();

				$inp.blur(function() {
					val = $inp.val();
					$oldhtml.html(val);
					$cell.html("").append($oldhtml);
					if(index != 0) {
						eval("that.tableData4[index]." + jname + "=val");
					}

					//						$inp.keydown(function() {
					//							val = $inp.val();
					//							that.fuzzyquery(jname, val);
					//						});

					//                  	console.log(that.tableData4[index]);
				});
			},
			//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加  class-name="mohucha"
			headerc: function(column, event) {
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".table")); //匹配行Th
				var $table = $($(".table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					$("tr",$table).show();//先全部展示出来
					$datath.each(function() {
						var $this = $(this);
						 
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							that.mohucha(thv, idx, $table);
						}

					});

				});
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			},
			// 获取配送中心列表
			getdclist: function() {
				var that = this;
				console.log(that);
				that.baseAjax("getdclist", {
					UserID: window.userid
				}, function(data) {
					var obj = eval('(' + data + ')');

					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.peisong = data[0].DCID;
					that.cities = data;
				});
			},

			// 获取园区列表
			getyuanqulist: function(psid) {
				var that = this;
				that.baseAjax("getparklist", {
					UserID: window.userid,
					DCID: psid
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.yqlist = data;
					that.yuanqu = data[0].ParkID;
					console.log(data);
				});

			},

			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
			},

		}

	}
</script>

<style>
	.psmlbb .el-form-item__content {
		line-height: 60px;
	}
	
	.psmlbb .el-input__icon {
		top: 17px;
	}
	
	.psmlbb .grid-content p {
		text-align: center;
		line-height: 50px;
	}
	
	.psmlbb .buttondiv button {
		padding: 6px 15px;
		margin-top: 13px;
	}
</style>