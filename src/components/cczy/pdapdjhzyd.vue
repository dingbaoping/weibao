<template>
	<!-- PDA移仓调出作业单 -->
	<div class="pdaycdczyd">

		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox ctys" @click='djt_Click=true'>
							<!-- <span>窗体样式</span> -->
							<el-dropdown split-button @click="handleClick">
								窗体样式
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>保存样式</el-dropdown-item>
									<el-dropdown-item>恢复样式</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
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
			<div class="formcx ccgl-r">
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>作业单号：</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="">
								<el-input disabled class=" input_width " size="small" placeholder="" v-model="djbh">
								</el-input>
							</el-form-item>
						</el-col>
					</el-form-item>
				</el-form>
			</div>

		</div>
		<!--条件查询结束-->
		<!--表格开始-->
		<div class="table">
			<el-tabs type="border-card">
				<el-tab-pane label="作业明细">
					<el-table :data="tableData3" height="300" border style="width: 100%" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中">
						<el-table-column prop="name" label="作业单号" width="120">
							<el-table-column prop="name" label="" width="120" class-name="mohucha">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="name" label="商品编号" width="120">
							<el-table-column prop="name" label="" width="120" class-name="mohucha">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="商品名称" width="120">
							<el-table-column prop="name" label="" width="120" class-name="mohucha">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="规格型号" width="120">
							<el-table-column prop="name" label="" width="120" class-name="mohucha">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="基本单位" width="120">
							<el-table-column prop="name" label="" width="120" class-name="mohucha">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="辅助单位" width="120">
							<el-table-column prop="name" label="" width="120" class-name="mohucha">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="换算率" width="120">
							<el-table-column prop="name" label="" width="120" class-name="mohucha">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="仓位" width="120">
							<el-table-column prop="name" label="" width="120" class-name="mohucha">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="仓库" width="120">
							<el-table-column prop="name" label="" width="120" class-name="mohucha">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="盘点基本数量" width="150">
							<el-table-column prop="name" label="" width="150" class-name="mohucha">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="盘点辅助数量" width="150">
							<el-table-column prop="name" label="" width="150" class-name="mohucha">
							</el-table-column>
						</el-table-column>
					</el-table>
					<el-tab-pane</el-tab-pane>
			</el-tabs>
		</div>
		<!--表格完-->
		<!--条件查询结束-->
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

			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			var tabdata = [];
			var len = 0;
			that.getdclist();
			axios.get("http://121.41.122.74:5676/Handler.ashx")
				.then(function(rsp) {
					//	that.tableData4 = rsp.data
					tabdata = rsp.data;
					len = tabdata.length;
					getdata(0);
					that.loading = false;
				})

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
					$("tr", $table).show(); //先全部展示出来
					$datath.each(function() {
						var $this = $(this);

						var thv = $("input", $this).val() || $("div.cell", $this).html(); //获取需要匹配th的值
						thv = thv.indexOf("<input") != -1 ? "" : thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined && thv != "") {
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
					that.cities = data;
					that.peisong = data[0].DCID;
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
				// that.pszx = true; // 配送输入框禁用
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
				that.gethzflist(that.peisong);
			},
			// 获取合作方
			gethzflist(psid) {
				var that = this;
				that.baseAjax("getlistindc", {
					UserID: window.userid,
					DCID: psid
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.options = data;
					that.backUpArr = data;
					console.log(data)
				})
			},
			getCode(val) {
				if(val) { //val存在 
					this.options = this.backUpArr.filter((item) => {
						if(!!~item.Name.indexOf(val) || !!~item.Code.indexOf(val)) {
							return true
						}
					})
				} else { //val为空时，还原数组
					this.options = this.backUpArr
				}
			},
		}

	}
</script>