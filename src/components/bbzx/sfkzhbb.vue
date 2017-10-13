
<template>
	<div class="fymxbb">
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox dc" @click='djt_Click=true'><span>导出</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox dy"><span>打印</span></div></div></li>
					<li><div class="boxtab"><div class="curbox yl"><span>预览</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="chaxunkuang">
			<div class="formcx">
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-col :span="6">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="line " :span="1">
							<div class="grid-content">
								<p class="ZHI">至</p>
							</div>
						</el-col>
						<el-col :span="6">
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
								<el-select v-model="ruleForm.region" placeholder="配送中心">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
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

		<!--表格-->
		<div class="datatable">

			<el-table :data="tableData4" border v-loading.body="loading" @cell-dblclick="dbrow" @header-click="headerc" element-loading-text="玩命加载中" style="width: 100%" height="550">
				<el-table-column label="#" width="60">
					<el-table-column type="index" label="0" width="60">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="FXBH" label="费用编号" width="150">
					<el-table-column prop="FXBH" label="" width="150">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="FXMC" label="费用名称" width="120">
					<el-table-column prop="FXMC" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="JSDX" label="结算对象" width="120">
					<el-table-column prop="JSDX" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="JSDXMC" label="结算对象名称" width="150">
					<el-table-column prop="JSDXMC" label="" width="150">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="FXLX" label="费用类型" width="120">
					<el-table-column prop="FXLX" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="JFDJ" label="计费单据" width="120">
					<el-table-column prop="JFDJ" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DJBH" label="单据编号" width="120">
					<el-table-column prop="DJBH" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column sortable prop="DJRQ" label="单据日期" width="120">
					<el-table-column prop="DJRQ" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="部门名称" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="配送中心名称" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="记录日期" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="策略编号" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="策略名称" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费价格表" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费方式" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费价格" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费值" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费金额" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯价" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯区间" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯实际方式" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯计费价格" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费操作人" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="说明" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="商品编号" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="商品名称" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="分类名称" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="客户区域ID" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="客户区域名称" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费方式" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费价格" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费值" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费金额" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯价" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯区间" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯实际方式" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯计费价格" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="说明" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="园区" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="生产厂家" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="源单号" width="120">
					<el-table-column prop="zip" label="" width="120">
					</el-table-column>
				</el-table-column>
			</el-table>
		</div>
		<!--表格结束-->
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
				tableData4: [],
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
			headerc: function() {
				console.log(111);
			},
			//此方法是退出的函数
			closetag:function(){
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


