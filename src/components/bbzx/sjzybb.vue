<template>
<!-- 上架作业报表 -->
	<div class='sjzybb' id='sjzybb'>
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox dc" @click='djt_Click=true'><span>导出</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox ctys">
						<!-- <span>窗体样式</span> -->
						<el-dropdown split-button  @click="handleClick">
							窗体样式
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>保存样式</el-dropdown-item>
								<el-dropdown-item>恢复样式</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
						</div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->
		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10" class="row-1">
					<!--check-->
					<el-col :span="3">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="line" :span="1">
							<div class="grid-content">
								<p class="sg-1">至</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="date2">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p class='fl'>配送中心:</p>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
						<!-- 配送中心列表 -->
							<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
								<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
						</div>
					</el-col>
					
					<el-col :span="4">
						<div class="grid-content ">
							<el-button type="primary" @click.native='' class='cx'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							<el-button type="primary" @click.native='' class='close'><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>

			</el-form>
			<!--form第二行-->
			
					
		</div>
		<!--搜索框完-->

		<!--表格-->
		<div class='table'>
			<div class='button_row'>
				<!--一报表-->
				<el-tabs type="border-card">
					<el-tab-pane label="操作员汇总表">
						<div id='table_dj'>
							<div class="title">
								<h1>逐日上架作业数据汇总分析</h1></div>
								
							<div class="table">
								<el-table :data="tableData6" border show-summary style="width: 100%">
									<el-table-column prop="date" label="日期" width="180">
									</el-table-column>
									<el-table-column prop="name" label="操作员">
									</el-table-column>
									<el-table-column prop="amount1" sortable label="散货">
									</el-table-column>
									<el-table-column prop="amount2" sortable label="整箱">
									</el-table-column>
									<el-table-column prop="amount3" sortable label="体积">
									</el-table-column>
									<el-table-column prop="amount4" sortable label="重量">
									</el-table-column>
								</el-table>
							</div>
							
							
							
						</div>
					</el-tab-pane>
					<!--二报表-->
					<el-tab-pane label="明细报表">
						<div id='table_dj'>
							<el-table :data="ddlbs" height="250" border style="width: 100%"  @cell-dblclick="dbrow" @header-click="headerc"  v-loading.body="loading"  element-loading-text="玩命加载中">
								<el-table-column type='selection' prop="" label="选定框" width="50">
									<el-table-column  prop="CheckMark" label="" width="50" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="操作员" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="日期" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="上架作业单号" width="150">
									<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="收货计划单号" width="150">
									<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="收货类型" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="商品编号" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="商品名称" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="规格型号" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="基本单位" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="上架数量" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="辅助单位" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="上架辅助数量" width="150">
									<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="批次" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="生产日期" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="有效期至" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="仓位" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="仓库" width="110">
									<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
								</el-table-column>
							</el-table>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'jhfxbb',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ruleForm: {
					date1: '',
					date2: '',

				},
				tableData4: [],
				tableData6: [],
				loading: false

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
			//此段JS为了模糊匹配数据用的
			fuzzyquery: function(cname, val) {
				var that = this;
				var data = that.tableData4;

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
					//		表格合计栏
			  getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
			}
		}

	}
</script>

<style scoped>
	@import url("../../../common/css/ckddzhbb/ckddzhbb.css");
	.datatable {
		width: 100%;
	}
	
	.fymxbb {
		width: 100%;
		height: 100%;
	}
	
	.buttondiv {
		margin-top: 12px;
		margin-left: 20px;
		display: table;
		float: left;
	}
	
	.formcx {
		width: 600px;
		height: 100%;
		float: left;
	}
	.row-1{
		margin: 12px 0!important;
	}
	.but-box {
		width: 100%;
		height: 40px;
		background: url(../../assets/img/gun.png) repeat-x;
	}
	
	div.boxtab {
		float: left;
		display: table;
		height: 40px;
		margin: 0 5px;
		line-height: 40px;
	}
	
	div.boxtab:hover {
		background: #efeeee;
	}
	
	div.but-box ul li {
		display: table;
		float: left;
	}
	
	.curbox {
		display: table;
		margin: 0 auto;
		padding-left: 30px;
		background: url(../../../common/img/rk/daochu.jpg) no-repeat;
		background-position: 5px 10px;
		cursor: pointer;
	}
	
	.gun {
		height: 20px;
		width: 1px;
		background: #b7b7b7;
		display: block;
		float: right;
		margin-top: 10px;
	}
	
	.ctys {
		background: url(../../../common/img/rk/chuangti.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.tc {
		background: url(../../../common/img/rk/tuichu.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.chaxunkuang {
		width: 100%;
		height: 60px;
		border: 1px solid #999;
		border-left: 0;
		border-right: 0;
	}
	.row-1{
		margin: 15px 0;
	}
	.grid-content button{
		margin-left: 20px!important;
		padding:6px 15px!important;
	}
	.left-1{
		margin-left: 0;
	}
	.title{ text-align: center;}
	.title h1{
		font-weight: 900;
		font-size:25px;
		font-family: '微软雅黑';
		color:#000000;
	}
</style>