<template>
<!--调拨入库单 -->
	<div class="ycd">
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox bc" @click='djt_Click=true'><span>保存</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox ck"><span>选订单</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="chaxun">
			<el-row :gutter="10">
				<el-col :span='4' offset='8'>
				<div class="grid-content">
				<!--<h1>报损升溢单 </h1>-->
				</div>
				</el-col>				
			</el-row>
			<!--第一行-->
			<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>调拨出库单号：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<div class="grid-content  ">
								<el-input disabled class=" input_width " size="small" placeholder="" v-model="djbh">
								</el-input>
							</div>
						</div>
					</el-col>	
					<el-col :xs="8" :sm="8" :md="8" :lg="8">
						<h1 class="bt">调拨入库单号</h1>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>单据号：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<div class="grid-content  ">
								<el-input disabled class=" input_width " size="small" placeholder="" v-model="djbh">
								</el-input>
							</div>
						</div>
					</el-col>	
			</el-row>
				<!--第二行-->
			<el-form class="demo-ruleForm el-row">
					<el-form-item required>
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content  ">
						<p>合作方（*）：</p>
					</div>
				</el-col>
				<el-col :xs="5" :sm="5" :md="5" :lg="5">
					<div class="grid-content  one">
						<!--下拉式合作方-->
						<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
							<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.Code">
								<span style="float: left">{{ item.Code }}</span>
								<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
							</el-option>
						</el-select>
						<!--下拉式合作方结束-->
					</div>
				</el-col>
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content">
						<p>日期（*）：</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content two">
						<el-form-item prop="date1">
							<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
						</el-form-item>
					</div>	
				</el-col>
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content three">
						<p>调拨类型（*）：</p>
					</div>
				</el-col>
				<el-col :xs="5" :sm="5" :md="5" :lg="5">
					<div class="grid-content three">
						<!--调拨类型开始-->
						<el-select v-model="dbnx" placeholder="" class=" blueborder input_width">
							<el-option v-for="item in dbnxs" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left">{{ item.label }}</span>
								<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
							</el-option>
						</el-select>
						<!--调拨类型结束-->
					</div>
				</el-col>		
			</el-form-item>
				</el-form>
				<!--第三行-->
			<el-row :gutter="10" type="flex">
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content  ">
						<p>备注：</p>
					</div>
				</el-col>
				<el-col :xs="5" :sm="5" :md="5" :lg="5">
					<div class="grid-content  ">
						<el-input class=" input_width " size="small" placeholder="" v-model="djbh">
						</el-input>
					</div>
				</el-col>
			</el-row>
			<!--第四行-->
			<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content  ">
						<p>提交状态：</p>
					</div>
				</el-col>
				<el-col :xs="5" :sm="5" :md="5" :lg="5">
					<div class="grid-content  ">
						<!--提交状态开始-->
						<el-select v-model="tjzt" placeholder="" class="input_width">
							<el-option v-for="item in tjzts" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left">{{ item.label }}</span>
							</el-option>
						</el-select>
						<!--提交状态结束-->
					</div>
				</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>调出配送中心：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<div class="grid-content  ">
								<el-input disabled class=" input_width " size="small" placeholder="" v-model="djbh">
								</el-input>
							</div>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>调出园区：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<div class="grid-content  ">
								<el-input disabled class=" input_width " size="small" placeholder="" v-model="djbh">
								</el-input>
							</div>
						</div>
					</el-col>	
			</el-row>
		
			
			<!--第五行-->
			<el-row :gutter="10" type="flex">
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>调入配送中心：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<div class="grid-content  ">
								<el-input disabled class=" input_width " size="small" placeholder="" v-model="djbh">
								</el-input>
							</div>
						</div>
					</el-col>	
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>调入园区：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<div class="grid-content  ">
								<el-input disabled class=" input_width " size="small" placeholder="" v-model="djbh">
								</el-input>
							</div>
						</div>
					</el-col>	
			</el-row>
		</div>
		<!--条件查询结束-->
		<div class='table'>
			<div class='button_row'>
				<!--一报表-->
				<el-tabs type="border-card">	
					<div id='table_dj'>
						<el-table :data="ddlbs" height="250" border style="width: 100%"  @cell-dblclick="dbrow" @header-click="headerc"  v-loading.body="loading"  element-loading-text="玩命加载中">
							<el-table-column type='selection' prop="" label="选定框" width="50">
								<el-table-column  prop="TransportCmpName" label="" width="50" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="单据状态" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="配送单号" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="配送日期" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="车牌号" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="司机" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="司机电话" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="配送员1" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="配送员2" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="承运方" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="本车载重" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="本次体积" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="本车金额" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="配送费" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="操作人" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="审核人" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="审核日期" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="原应付配送费" width="150">
								<el-table-column  prop="TransportCmpName" label="" width="150" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="实际应付配送费" width="180">
								<el-table-column  prop="TransportCmpName" label="" width="180" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="应付配送费审核人" width="200">
								<el-table-column  prop="TransportCmpName" label="" width="200" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="应付配送费审核日期" width="220">
								<el-table-column  prop="TransportCmpName" label="" width="220" class-name="mohucha">
									</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="配送员" width="110">
								<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
							</el-table-column>
						</el-table>
					</div>
				</el-tabs>
			</div>
		</div>
		<!--table完-->
		<ul class='heji_ul'>
			<li><span>合计</span></li>
			<li><span>0.00</span></li>
			<li><span>辅助合计</span></li>
			<li><span>0.00</span></li>
			<li><span>数量合计</span></li>
			<li><span>0.00</span></li>
			<li><span>金额合计</span></li>
			<li><span>0.00</span></li>
		</ul>
		<div class='form-2'>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="经办人：" class='fl'>
					<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
				</el-form-item>
				<el-form-item label="制单人：" class='fl'>
					<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
				</el-form-item>
				<el-form-item label="审核人：" class='fl'>
					<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
				</el-form-item>
				<el-form-item label="审核日期：" class='fl'>
					<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
				</el-form-item>
				<el-form-item label="部门：" class='fl'>
					<el-select v-model="formInline.region" placeholder="" class='fr input_width button_w'>
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'tbrk',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ruleForm: {
					date1: '',
					date2: '',
					region: '',
				},
				tableData4: [],
				loading: false,
				hzf:'',
				backUpArr:'',
				options:'',
				peisong:'',
				yqlist:'',
				yuanqu:'',
				bumen:'',
				tjzt:'2',
				dbnx:'1',
				
				tableData3: [],
				input7: '',
				formInline: {
					date1: '',
					date2: '',
					region: '',
					
					cities:[],
					peisong:'',
					yuanqu:'',
					yqlist:[],
					hzf:'',
					options:[],
				},
				tjzts: [ // 提交状态
					{ value: '1', label: '未提交' },
					{ value: '2', label: '提交' }
				],
				dbnxs: [ // 提交状态
					{ value: '1', label: '同类调拨' },
					{ value: '2', label: '异类调拨' }
				],
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
			getCode (val) {
				if (val) { //val存在 
          this.options = this.backUpArr.filter((item) => {
            if (!!~item.Name.indexOf(val) || !!~item.Code.indexOf(val)) {
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
<style scoped>
	.ycd .el-row{
		padding-right: 20px;
	}
	.ycd .el-row p{
		padding-left: 20px;
	}
	.ycd .bt{
		text-align: center;
		font-size: 18px;
		color: #000;
		font-weight: 700;
	}
	.form-2{
		padding-bottom: 55px;
	}
	.one{
		padding-right: 5px;
	}
	.two{
		padding:0 5px;
	}
	.three{
		padding-left: 8px;
	}
</style>