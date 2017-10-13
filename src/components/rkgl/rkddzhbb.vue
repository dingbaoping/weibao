<template>
	<div class='rkddzhbb' id='rkddzhbb'>
		<!--出库管理综合报表-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox dc">
							<span>导出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<span>窗体样式</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tc" @click="closetag">
							<span>退出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
			</ul>
		</div>
		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">

					<!--check-->
					<el-col :span="3">
						<div class="grid-content ">
							<el-date-picker v-model="ksrq" id="ksrq" type="date" placeholder="开始日期" :picker-options="pickerOptions1" class='input_width'>
							</el-date-picker>
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content fl">
							<p class="fl">至</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-date-picker v-model="jsrq" id='jsrq' type="date" placeholder="结束日期" :picker-options="pickerOptions1" class='input_width'>
							</el-date-picker>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>审核标志:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-select v-model="shbz" placeholder="全部" class="input_width shbz">
								<el-option v-for="item in shbzlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>合作方：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable  @change="gethzfID" :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
								</el-option>
							</el-select>

						</div>
					</el-col>
				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :span="2" :offset="2">
						<div class="grid-content">

							<p>配送中心：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<!-- 配送中心列表 -->
							<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width">
								<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content yqbj">

							<p>园区 ：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content yqbj">

							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="23132" class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content djbj">

							<p>订单号:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content djbj">

							<el-input class="inline-input input_width djbh" size="small" placeholder="" v-model="ddh">
							</el-input>

						</div>
					</el-col>
					<el-col :span="4" :offset='1'>
						<div class="grid-content ">
							<el-button type="primary" @click='onSearch' class='cx fl'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							<el-button type="primary" class='close fl'><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<!--搜索框完-->
		<!--表格-->
		<div class='table'>
			<div class='button_row'>
				<!--一报表-->
				<el-tabs type="border-card" v-model="activeName" >
					<el-tab-pane label="单据列表" name='djlb' class-name="is-active" >
						<div id='table_dj'>
							<el-table :data="tableData3" height="510" border style="width: 100%" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中">
								<el-table-column type='index' prop="" label="" width="50">
									<el-table-column type="index" label="" width="50" >
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="Transport" label="运输方式" width="auto">
									<el-table-column prop="Transport" label="" width="auto"  class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="CloseMark" label="关闭标志" width="auto">
									<el-table-column  prop="CloseMark" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="CheckMark" label="审核标志" width="auto">
									<el-table-column  prop="CloseMark" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="SubmitStatus" label="提交状态" width="auto">
									<el-table-column  prop="SubmitStatus" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="Type" label="入库类型" width="auto">
									<el-table-column  prop="Type" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								
								<el-table-column prop="StorageDate" label="订单日期" width="auto">
									<el-table-column  prop="StorageDate" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="StorageID" label="单据编号" width="220">
									<el-table-column  prop="StorageID" label="" width="220" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="CloseReason" label="关闭理由" width="auto">
									<el-table-column  prop="CloseReason" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="SupplierName" label="供应商名称" width="auto">
									<el-table-column  prop="SupplierName" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="Total" label="单据金额" width="auto">
									<el-table-column  prop="Total" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="SalesMan" label="业务员" width="auto">
									<el-table-column  prop="SalesMan" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="Delivery" label="交货方式" width="auto">
									<el-table-column  prop="Delivery" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="ArrivalTime" label="预计到达时间" width="auto">
									<el-table-column  prop="ArrivalTime" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="Checker" label="审核人" width="auto">
									<el-table-column  prop="Checker" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="BillNum" label="源单号" width="auto">
									<el-table-column  prop="BillNum" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="CheckDate" label="审核日期" width="auto">
									<el-table-column  prop="CheckDate" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="CloseOperator" label="关闭人" width="auto">
									<el-table-column  prop="CloseOperator" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="ParName" label="合作方" width="auto">
									<el-table-column  prop="ParName" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="RMark" label="入库状态" width="auto">
									<el-table-column  prop="RMark" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="CloseOperatorDate" label="关闭时间" width="auto">
									<el-table-column  prop="CloseOperatorDate" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="beizhu" label="备注" width="auto">
									<el-table-column  prop="beizhu" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="Poster" label="制单人" width="auto">
									<el-table-column  prop="Poster" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								
								<el-table-column prop="Volume" label="体积" width="auto">
									<el-table-column  prop="Volume" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="Weight" label="重量" width="auto">
									<el-table-column  prop="Weight" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="PrintNum" label="打印次数" width="auto">
									<el-table-column  prop="PrintNum" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="Num" label="基本数量" width="auto">
									<el-table-column  prop="Num" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="SupportNum" label="辅助数量" width="auto">
									<el-table-column  prop="SupportNum" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="DCName" label="配送中心" width="auto">
									<el-table-column  prop="DCName" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="CreateDate" label="制单日期" width="auto">
									<el-table-column  prop="CreateDate" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="DeptName" label="部门" width="auto">
									<el-table-column  prop="DeptName" label="" width="auto" class-name="mohucha">
								  </el-table-column>
								</el-table-column>

							</el-table>
						</div>
					</el-tab-pane>
					<el-tab-pane label="流水台账" name='lstz'>
						<div id="table_ls">
							<div class='table_left'>
								<el-tree :data="lstzTree" :props="defaultLSTZ" @node-click="handleNodeClick"></el-tree>

							</div>
							<div class="table_right">
								<el-table :data="tableData4" height="510" @cell-dblclick="dbrow1" @header-click="headerc1" border style="width: 100%" v-loading.body="loading" element-loading-text="玩命加载中">
									<el-table-column type='index' prop="" label="选定框" width="50">
									  <el-table-column type='index' prop="" label="" width="50">
									  </el-table-column>
									</el-table-column>
									<el-table-column prop="ParName" label="合作方" width="auto">
										<el-table-column prop="ParName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="DeptName" label="部门" width="auto">
										<el-table-column prop="DeptName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Type" label="单据类型" width="auto">
										<el-table-column prop="Type" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="StorageID" label="单据编号" width="220">
										<el-table-column prop="StorageID" label="" width="220"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="StorageDate" label="单据日期" width="auto">
										<el-table-column prop="StorageDate" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="SupplierName" label="供应商" width="auto">
										<el-table-column prop="SupplierName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ProCode" label="商品编码" width="auto">
										<el-table-column prop="ProCode" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ProName" label="商品名称" width="auto">
										<el-table-column prop="ProName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ProMCode" label="助记码" width="auto">
										<el-table-column prop="ProMCode" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ProModel" label="规格型号" width="auto">
										<el-table-column prop="ProModel" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="SupUnit" label="辅助单位" width="auto">
										<el-table-column prop="SupUnit" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="SupNum" label="辅助数量" width="auto">
										<el-table-column prop="SupNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Unit" label="基本单位" width="auto">
										<el-table-column prop="Unit" label="" width="auto"  class-name="mohucha">
								    </el-table-column>

									</el-table-column>
									<el-table-column prop="Num" label="基本数量" width="auto">
										<el-table-column prop="Num" label="" width="auto"  class-name="mohucha">
								    </el-table-column>

									</el-table-column>
									<el-table-column prop="Price" label="价格" width="auto">
										<el-table-column prop="Price" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="SupPrice" label="辅助单价" width="auto">
										<el-table-column prop="SupPrice" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Total" label="合计金额" width="auto">
										<el-table-column prop="Total" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="BillNum" label="原单号" width="auto">
										<el-table-column prop="BillNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="SalesMan" label='业务员' width="auto">
										<el-table-column prop="SalesMan" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Remarks" label="单据备注" width="auto">
										<el-table-column prop="Remarks" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Poster" label="制单人" width="auto">
										<el-table-column prop="Poster" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Checker" label="审核人" width="auto">
										<el-table-column prop="Checker" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="CheckDate" label="审核日期" width="auto">
										<el-table-column prop="CheckDate" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Volume" label="体积" width="auto">
                    <el-table-column prop="Volume" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Weight" label="重量" width="auto">
										<el-table-column prop="Weight" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Batch" label="审核日期" width="auto">
										<el-table-column prop="Batch" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Account4" label="库存属性1" width="auto">
										<el-table-column prop="Account4" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Account5" label="库存属性2" width="auto">
										<el-table-column prop="Account5" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
								</el-table>

							</div>

						</div>
					</el-tab-pane>
					<el-tab-pane label="汇总台账" name='hztz'>
						<div id='table_hz'>
							<div class='table_left'>
								<el-tree :data="hztzTree" :props="defaultHZTZ" @node-click="handleNodeClick"></el-tree>

							</div>
							<div class="table_right">
								<el-table :data="tableData5" height="510" border style="width: 100%" @cell-dblclick="dbrow2" @header-click="headerc2" v-loading.body="loading" element-loading-text="玩命加载中">
									<el-table-column type='index' prop="" label="选定框" width="50">
										<el-table-column type="index" label="" width="auto">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ParName" label="合作方名称" width="auto">
										<el-table-column prop="ParName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="DeptName" label="部门" width="auto">
										<el-table-column prop="DeptName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ProCode" label="商品编号" width="auto">
										<el-table-column prop="ProCode" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>-->
									<el-table-column prop="ProName" label="商品名称" width="220">
										<el-table-column prop="ProName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ProModel" label="规格型号" width="auto">
										<el-table-column prop="ProModel" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Num" label="基本数量" width="auto">
										<el-table-column prop="Num" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="SupNum" label="辅助数量" width="auto">
										<el-table-column prop="SupNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="SupUnit" label="辅助单位" width="auto">
										<el-table-column prop="SupUnit" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Unit" label="基本单位" width="auto">
										<el-table-column prop="Unit" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Volume" label="体积" width="auto">
										<el-table-column prop="Volume" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Weight" label="重量" width="auto">
										<el-table-column prop="Weight" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

								</el-table>

							</div>

						</div>
					</el-tab-pane>

				</el-tabs>

			</div>

		</div>
		<div class='tongji'>
			<el-tag class='tag1'>共<span>{{ DataLength }}</span>条</el-tag>
			<el-tag class='tag2'>金额合计:<span>{{ isNaN(SumTotal) ? 0.00 : SumTotal }}</span></el-tag>
			<el-tag class='tag3'>体积合计:<span>{{ VolumeTotal }}</span></el-tag>
			<el-tag class='tag4'>重量合计:<span>{{ WeightTotal }}</span></el-tag>
		</div>
	</div>

</template>

<script>
	import nicescroll from "../../../common/js_nicescroll/jquery.nicescroll.js"
	export default {
		data() {
			return {
				lstzTree: [],
				hztzTree: [],

				shbz: '2', // 审核标志
				shbzlist: [{
					value: '2',
					label: '全部'
				}, {
					value: '0',
					label: '未审核'
				}, {
					value: '1',
					label: '已审核'
				}],
				gbbz: '1', // 关闭标志
				gblist: [{
					value: '1',
					label: '全部'
				}, {
					value: '2',
					label: '未关闭'
				}, {
					value: '3',
					label: '已关闭'
				}],
				peisong: '',
				yuanqu: '全部',
				hzf: '全部',
				hzfID: '',
				DataLength: '0', // 条数
				SumTotal: '0.00',  // 金额合计
        VolumeTotal: '0.0000', // 体积合计
        WeightTotal: '0.00', // 重量合计
				options: [],
				yqlist: [],
				cities: [],
				djbh: '',
				ksrq: '',
				jsrq: '',
				rq1: "",
				rq2: '',
				ddh: '',
				tableData3: [],
				tableData4: [],
				tableData5: [],
				defaultLSTZ: {
					label: "Name",
					children: "children"
				},
				defaultHZTZ: {
					label: "Name",
					children: "children"
				},
				pickerOptions1: '',
				pickerOptions2: '',
				formInline: '',
				backUpArr: [],
				loading: false,
				hzfIDList: [],
				activeName:"djlb",
				khlist: '',
				shangjia: '',
			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			//订单日期的默认值
			var myDate = new Date();
			var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
			var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			var d = myDate.getDate(); //获取当前日(1-31)
			var today = y + "-" + m + "-" + d;
			that.ksrq = today;
			that.jsrq = today;
			// 先获取一次配送列表
			that.getdclist();

		},
		methods: {
			// 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
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
						eval("that.tableData3[index]." + jname + "=val");
					}
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
				var $datath = $("th.mohucha", $("#table_dj")); //匹配行Th
				var $table = $($("#table_dj table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

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
			// 表格双击 (可编辑表格)
			dbrow1: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
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
				});
			},
			headerc1: function(column, event) {
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $("#table_ls")); //匹配行Th
				var $table = $($("#table_ls table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

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
			headerc2: function(column, event) {
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $("#table_hz")); //匹配行Th
				var $table = $($("#table_hz table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

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
			// 表格双击 (可编辑表格)
			dbrow2: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
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
						eval("that.tableData5[index]." + jname + "=val");
					}
				});
			},
			mohucha: function(val, index, $table) {
				var v = val;
				var $trArr = $("tr", $table);
				var trlen = $trArr.length;
				for(var i = 0; i < trlen; i++) {
					var $tr = $($trArr[i]);

					var iv = $($("td .cell", $tr)[index]).html().indexOf(v); //匹配是否含有

					if(iv <= -1) {
						$tr.hide();
					}
				}
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
				// 拿到当前合作方ID
			gethzfID (val) {
				console.log(val)
        this.hzfID = val;
			},
			// 获取合作方
			gethzflist(psid) {
				var that = this;
			  var params = {
					UserID: window.userid,
					DCID: psid,
					Value: ''
				};
        $.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: "CPHH.PC.BaseInfo.Partner.GetListInDC_All"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						// console.log("全部合作方",data);
						that.options = data;
						that.backUpArr = data;
						for(let i = 0; i < data.length; i++) {
							that.hzfIDList.push(data[i].InterID);
						}
						that.getLstzTree(that.hzfIDList);
						that.getHztzTree(that.hzfIDList);
					}
				})
			},
//			获取树形图方法
			getLstzTree(hzfID) {
				var that = this;
				console.log(hzfID)

				for(let i = 0; i < hzfID.length; i++) {
					that.baseAjax("itemgetlist", {
						UserID: window.userid,
						ParID: hzfID[i],
						Class: '商品'
					}, function(data) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						//						console.log('ProTreeNumber'+data.Number)
						data[0].children = [];
						for(let j = 1; j < data.length; j++) {
							data[0].children.push(data[j]);
						}

						that.lstzTree.push(data[0]);

					});
				}
			},
			getHztzTree(hzfID) {
				var that = this;
				console.log(hzfID)
				for(let i = 0; i < hzfID.length; i++) {
					that.baseAjax("itemgetlist", {
						UserID: window.userid,
						ParID: hzfID[i],
						Class: '商品'
					}, function(data) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						data[0].children = [];
						for(let j = 1; j < data.length; j++) {
							data[0].children.push(data[j]);
						}

						that.hztzTree.push(data[0]);
						console.log(data)
					});
				}
			},
			// 点击得到客户信息
			handleNodeClick(data) {
				var that = this;
				that.shangjia = data.Number;//拿到树形结构的序号
				that.hzfID = data.PartnerID; // 拿到合作方ID
				that.onSearch();//启动一次搜索
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
					that.yuanqu = data[0].ParkID; //设置园区默认
				});

			},
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
				that.gethzflist(that.peisong);
			},
			// 让CodeID  也成为搜索内容
			getCode(val) {
				if(val) { //val存在 
					this.options = this.tree = this.backUpArr.filter((item) => {
						if(!!~item.Name.indexOf(val) || !!~item.Code.indexOf(val)) {
							return true
						}
					})
					if(val == "全部") {
						this.options = this.backUpArr;
						this.tree = this.backUpArr;
					}
				} else { //val为空时，还原数组
					this.hzf = "全部";
					this.options = this.backUpArr;
					this.tree = this.backUpArr;
				}
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			},
			handleNodeHZTZ(data) {
			},
			handleNodeLSTZ(data) {
			}

			,
			getTotal (data) {
				var that = this;
				var sumTotal = 0;
				var volumeTotal = 0;
				var weightTotal = 0;
        for( let i = 0; i < data.length; i++ ) {
           sumTotal += parseFloat(data[i].Total);
           volumeTotal += data[i].Volume;
           weightTotal += parseFloat(data[i].Weight);
				} 
        that.SumTotal = sumTotal;
        that.VolumeTotal = volumeTotal.toFixed(6);
        that.WeightTotal = weightTotal.toFixed(2);
			},
			//			点击搜索的方法
			onSearch() {
				var that = this;
				var ksrq = $('#ksrq input').val();
				var jsrq = $('#jsrq input').val();
				if(that.activeName == 'djlb') {
					var jsons = {
						StartDate: ksrq,
						EndDate: jsrq,
						Check: that.shbz,
						UserID: window.userid,
						DCID: that.peisong,
						
						OrderID: that.ddh,
						ParID: that.hzfID || 0,
						ParkID: that.yuanqu,
					};

					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.StorageOrder.BillReport"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
						
							that.tableData3='';
							var obj = eval('(' + data + ')');
							
							var datas = JSON.parse(obj.Datas);
							var data = datas.Data;
							that.tableData3 = data;
							that.DataLength = data.length;
							that.getTotal(data);
						}
					});
				} else if(that.activeName == 'lstz') {
					var jsons = {
						StartDate: ksrq,
						EndDate: jsrq,
						Check: that.shbz,
						UserID: window.userid,
						DCID: that.peisong,
						OrderID: that.ddh,
						ParID: that.hzfID,
						ParkID: that.yuanqu,
						ProTreeNumber:that.shangjia,

					};
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.StorageOrder.ProReport"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var obj = eval('(' + data + ')');
							that.tableData4='';
							
							var datas = JSON.parse(obj.Datas);
							var data = datas.Data;
							that.tableData4 = data;
              that.DataLength = data.length;
							that.getTotal(data);
						}
					})

				} else if(that.activeName == 'hztz') {

					var jsons = {

						StartDate: ksrq,
						EndDate: jsrq,
						Check: that.shbz,
						UserID: window.userid,
						DCID: that.peisong,

						OrderID: that.ddh,
						ParID: that.hzfID,
						ParkID: that.yuanqu,
						ProTreeNumber:that.shangjia,

					};
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.StorageOrder.ProSumReport"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							console.log(data);
							console.log(jsons);
								that.tableData5 ='';
							var obj = eval('(' + data + ')');
							var datas = JSON.parse(obj.Datas);
							var data = datas.Data;
							that.tableData5 = data;
              that.DataLength = data.length;
							that.getTotal(data);
						}
					})

				}

			}
		}

	}
</script>
<style scoped>
	.el-row {
		margin: 0 5px;
		margin-top: 5px;
		margin-bottom: 10px;
	}
	
	.rkddzhbb .grid-content {
		text-align: center;
	}
	
	.rkddzhbb .el-button--small {
		width: 80px;
	}
	
	.rkddzhbb .el-form {
		margin-bottom: 5px;
	}
	
	.rkddzhbb .el-table {
		overflow: inherit;
	}
	
	.rkddzhbb .grid-content p {
		min-width: 70px;
	}
	
	.table_left {
		width: 15%;
		float: left;
		max-height: 510px;
		overflow: scroll;
	}
	
	.table_right {
		width: 84%;
		float: right;
		overflow: hidden;
	}
	.el-tree{
		width: 220px;
	}
</style>
