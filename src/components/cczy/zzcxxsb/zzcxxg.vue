<template>
	<!-- 组装单-->
	<div class="zzd">
		<!-- 这里是导航栏部分结束 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox bc" @click='djt_Click=true'><span>保存</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox tc"@click="closetag"><span>退出</span></div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="chaxunkuang">
			<div>
				<!--第一部分-->
				<div class="">
					<el-row :gutter="10">
						<el-form class="demo-ruleForm">
							<el-form-item required>
								<el-col :span="2">
									<div class="grid-content">
										<p>大仓*：</p>
									</div>
								</el-col>
								<el-col class="line " :span="6">
									<div class="grid-content">
										<el-form-item prop="dacang">
											<el-select v-model="ruleForm.region" placeholder="配送中心" class='input_width'>
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</div>
								</el-col>
								<el-col :span="8">
									<h1>组装拆卸单</h1>
								</el-col>

							</el-form-item>
							</el-col>

						</el-form>
					</el-row>
					<el-row :gutter="10">
						<el-form class="demo-ruleForm">
							<el-col :span="2">
								<div class="grid-content">
									<p>合作方*：</p>
								</div>
							</el-col>
							<el-col :span="6" class="dw">
								<div class="grid-content">
									<el-form-item prop="hezuofang">
										<el-select v-model="ruleForm.region" placeholder="合作方" class="input_width">
											<el-option label="区域一" value="shanghai"></el-option>
											<el-option label="区域二" value="beijing"></el-option>
										</el-select>
									</el-form-item>
								</div>
							</el-col>
							<el-col :span="2">
								<div class="grid-content">
									<p>类型*：</p>
								</div>
							</el-col>
							<el-col :span="6" class="dw">
								<div class="grid-content">
									<el-form-item prop="leixing">
										<el-select v-model="ruleForm.region" placeholder="" class="input_width">
											<el-option label="组装" value="shanghai"></el-option>
											<el-option label="拆卸" value="beijing"></el-option>
										</el-select>
									</el-form-item>
								</div>
							</el-col>

						</el-form>
					</el-row>
					<el-row :gutter="10" class="bf-m">
						<el-form class="demo-ruleForm">
						<el-col :span="2">
							<div class="grid-content">
								<p>备注*：</p>
							</div>
						</el-col>
						<el-col :span="14">
							<div class="grid-content">

								<el-input placeholder="0" v-model="input7" class='input_width'>
								</el-input>

							</div>
						</el-col>
						</el-form>
					</el-row>
				</div>

			</div>
			<div style='width：100%' class="second">
				<!--第二部分-->
				<el-row :gutter="10" class="larst-row">
					<el-col :span="2">
						<div class="grid-content">
							<p>商品编号：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content">

							<el-input placeholder="0" v-model="input7" class="input_width">
							</el-input>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content">
							<p>商品名称：</p>
						</div>
					</el-col>

					<el-col :span="4">
						<div class="grid-content">

							<el-input placeholder="0" v-model="input7" class="input_width">
							</el-input>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content">
							<p>规格型号：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content">

							<el-input placeholder="0" v-model="input7" class="input_width">
							</el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content">
							<p>单位：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content">

							<el-input placeholder="0" v-model="input7" class="input_width">
							</el-input>

						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content">
							<p>数量*：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content">

							<el-input placeholder="0" v-model="input7" class="input_width"></el-input>
						</div>
					</el-col>
					
					<el-col :span="2">
						<div class="grid-content">
							<p>仓库*：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content">

							<el-input placeholder="0" v-model="input7" class="input_width">
							</el-input>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content">
							<p>成本价*：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content">

							<el-input placeholder="0" v-model="input7" class="input_width">
							</el-input>

						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10" class="thirdly">
					<el-col :span="2">
						<div class="grid-content">
							<p>生产日期*：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content">

							<el-input placeholder="0" v-model="input7" class="input_width">
							</el-input>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content">
							<p>有效日期*：</p>

						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content">
							<el-input placeholder="" v-model="input7" class="input_width">
							</el-input>
						</div>
					</el-col>
				</el-row>

			</div>

		</div>
		<!--条件查询结束-->
		<div class='table'>
			<el-table :data="ddlbs" height="250" border style="width: 100%"  @cell-dblclick="dbrow" @header-click="headerc"  v-loading.body="loading"  element-loading-text="玩命加载中">
				<el-table-column prop="date" label="商品编号" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="商品名称" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="规格型号" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="仓库名称" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="比例" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="辅助单位" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="辅助数量" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="基本单位" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="基本数量" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="成本价" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="生产日期" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="有效期至" width="120">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="备注" width="180">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
			</el-table>

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
				
				<el-col :xs="6" :sm="6" :md="6" :lg="6" offset="12">
					<el-form-item label="创建方式：" class='fl'>
						<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
					</el-form-item>
				</el-col>
			</el-form>
		</div>
		<div class="blue">
			<!--<el-button type="primary" class='fl'>就绪</el-button>-->
		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'zzd',
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
				tableData3: [],
				input7: '',
				formInline: {
					date1: '',
					date2: '',
					region: '',

				}
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
			}
		}

	}
</script>
<style scoped>
	.el-row {
		padding: 0 10px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	
	h1 {
		font-size: 25px;
		font-weight: 900;
		font-family: "微软雅黑";
		color: #000000;
		text-align: center;
	}
	
	.blue {
		position: absolute;
		left: 0;
		bottom: 25px;
	}
	.chaxunkuang{
		height: 270px;
		border-bottom:none ;
	}
	.dw div{
		height: 28px;
	}
	.bf-m{
		padding-top: 3px;
	}
	
	.second{
		height: 135px;
		border-top: 1px solid #e3e3e3;
		margin-top: 10px;
	}
	.larst-row{
		padding-top: 10px;
	}
	.thirdly{
		margin-top: 6px!important;
	}
	.form-2{
		padding-bottom:93px;
	}
</style>