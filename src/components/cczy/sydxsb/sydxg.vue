<template>
	<!--升溢单 -->
	<div class="ycd">
		<!-- 这里是导航栏部分结束 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox bc" @click='djt_Click=true'><span>保存</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox ck"><span>选订单</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox syt"><span>上一条</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox xyt"><span>下一条</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tc" @click="closetag"><span>退出</span></div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="chaxun">
			<!--<div class="formcx">-->
			<el-form class="demo-ruleForm">
				<!--第一行-->
				<el-form-item required>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>配送中心：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<el-select v-model="peisong" placeholder="" class=" blueborder input_width">
								<el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
									<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :xs="8" :sm="8" :md="8" :lg="8">
						&nbsp;
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>园区：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<el-select v-model="yuanqu" placeholder="" class=" blueborder input_width">
								<el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
									<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
				</el-form-item>
			</el-form>
			<!--第二行-->
			<el-row :gutter="10" type="flex">
				<el-col :xs="8" :sm="8" :md="8" :lg="8">
					<div class="grid-content  ">
						<p>&nbsp;</p>
					</div>
				</el-col>

				<el-col :xs="8" :sm="8" :md="8" :lg="8">
					<h1 class="bt">报损升溢单</h1>
				</el-col>

			</el-row>
			<!--第三行-->
			<el-row :gutter="10" type="flex">

				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content  ">
						<p>合作方（*）：</p>
					</div>
				</el-col>
				<el-col :xs="5" :sm="5" :md="5" :lg="5">
					<div class="grid-content  ">

						<el-input placeholder="请选择日期" icon="search" v-model="hzf" :on-icon-click="handleIconClick" disabled>
						</el-input>

						<!--合作方弹窗-->

					</div>
				</el-col>
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content ">
						<p>日期（*）：</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content  ">
						<el-form-item prop="date1">
							<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;" disabled></el-date-picker>
						</el-form-item>
					</div>
				</el-col>
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content  ">
						<p>调拨类型（*）：</p>
					</div>
				</el-col>
				<el-col :xs="5" :sm="5" :md="5" :lg="5">
					<div class="grid-content  ">
						<el-select v-model="yuanqu" placeholder="" class=" blueborder input_width" disabled>
							<el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left">{{ item.label }}</span>
								<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
							</el-option>
						</el-select>
					</div>
				</el-col>
			</el-row>
			<!--第四行-->

			<el-form class="demo-ruleForm">
				<el-form-item required>

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
				</el-form-item>
			</el-form>
			<!--第五行-->
			<el-form class="demo-ruleForm">
				<el-form-item required>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>提交状态：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<el-select v-model="yuanqu" placeholder="" class=" blueborder input_width">
								<el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
									<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>调拨订单号：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<el-input class=" input_width " size="small" placeholder="" v-model="djbh">
							</el-input>
						</div>
					</el-col>
				</el-form-item>
			</el-form>
		</div>
		<!--条件查询结束-->
		<div class='table'>
			<div class='button_row'>
				<!--一报表-->
				<el-tabs type="border-card">
					<div id='table_dj'>
						<el-table :data="ddlbs" height="250" border style="width: 100%" @cell-dblclick="dbrow" @header-click="headerc" >
							<el-table-column type='selection' prop="" label="选定框" width="50">
								<el-table-column prop="TransportCmpName" label="" width="50" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="商品编号" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<!--商品资料弹出框-->
							<el-table-column prop="name" label="商品名称" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="条形码" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="规格型号" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="仓位" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="基本数量" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="基本单位" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="辅助数量" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="辅助单位" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="单价" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="成本价" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="金额" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="批次" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="库存描述" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="生产日期" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="有效期至" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="备注" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
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
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<el-form-item label="经办人：" class='fl'>
						<el-select v-model="formInline.region" placeholder="" class='fr input_width button_w'>
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<el-form-item label="制单人：" class='fl'>
						<el-select v-model="formInline.region" placeholder="" class='fr input_width button_w'>
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<el-form-item label="审核人：" class='fl'>
						<el-select v-model="formInline.region" placeholder="" class='fr input_width button_w'>
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<el-form-item label="审核日期：" class='fl'>
						<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
					</el-form-item>
				</el-col>
			</el-form>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<el-form-item label="部门：" class='fl'>
						<el-select v-model="formInline.region" placeholder="" class='fr input_width button_w'>
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-col>

				<el-col :xs="6" :sm="6" :md="6" :lg="6" :offset="12">
					<el-form-item label="创建方式：" class='fl'>
						<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
					</el-form-item>
				</el-col>
			</el-form>

			<!--弹窗部分-->
			<!--合作方弹窗-->

			<el-dialog title="提示" :visible.sync="hzf_Click" size="tiny" :before-close="handleClose">
				<hzftc></hzftc>
				<span slot="footer" class="dialog-footer">
    			<el-button @click="dialogVisible = false">取 消</el-button>
   				 <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  				</span>
			</el-dialog>

		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import hzftc from './hzftc.vue'
	export default {
		name: 'syd',

		components: {
			'hzftc': hzftc,

		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ruleForm: {
					date1: '',
					date2: '',
					region: '',
				},
				tableData4: [],
				hzf_Click: false,
				tableData3: [],
				input7: '',
				formInline: {
					date1: '',
					date2: '',
					region: '',

				},
				ddlbs: [],
				djbh: '',
				types: [],
				yuanqu: '',
				peisong: '',
				cities: [],
				hzf: '',
			}
		},

		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			var tabdata = [];
			var len = 0;

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
			//合作方对应弹窗
			handleIconClick() {

				var that = this;
				that.hzf_Click = true;

			},
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			}
		}

	}
</script>
<style scoped>
	.el-row {
		padding-right: 20px;
	}
	
	.el-row p {
		padding-left: 20px;
	}
	
	.bt {
		text-align: center;
		font-size: 18px;
		color: #000;
		font-weight: 700;
	}
	
	.el-form {
		margin-right: 20px;
	}
	
	.el-form-item__content p {
		padding-left: 20px;
	}
	
	.form-2 {
		padding-bottom: 92px;
	}
</style>