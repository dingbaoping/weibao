<template>
	<div class='ckddzhbb' id='rkdzhbb'>
		<!--出库管理综合报表-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox">
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
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="zdrq" placeholder="选择日期" >
								<el-option v-for="item in zdrqlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->
					<el-col :span="3" >
						<div class="grid-content ">
							<el-date-picker type="date" placeholder="选择日期"    class='zdrq' id='ksrq' v-model="ksrq"  align="right" :picker-options="pickerOptions1"></el-date-picker>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p class=''>至</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-date-picker type="date" placeholder="选择日期" v-model="jsrq"  id='jsrq' align="right" :picker-options="pickerOptions2"></el-date-picker>

						</div>
					</el-col>

					<el-col :span="2">
						<div class="grid-content ">
							<p>合作方*:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<!-- 合作方列表 -->
							<el-select v-model="hzf" default-first-option no-data-text="无数据" @change="gethzfID" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
								</el-option>
							</el-select>
							<!-- 合作方列表结束 -->

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>审核标志:</p>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="shbz" placeholder="全部" class="input_width shbz">
								<el-option v-for="item in shenghelist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>

				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">

							<p>配送中心*:</p>

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
						<div class="grid-content ">
							<p>部门 :</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-select v-model="bumen" placeholder="全部" class="input_width shbz">
								<el-option v-for="item in bmlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content djbj">

							<p>订单号:</p>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content djbj">

							<el-input class="inline-input input_width djbh" size="small" placeholder="" v-model="djbh">
							</el-input>

						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content fl">
							<el-button type="primary" @click='onSearch' class='cx fl'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							<el-button type="primary" @click.native='' class='close fl'><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
						</div>
					</el-col>

				</el-row>
			</el-form>
		</div>

		<!--搜索框完-->
		<!--表格-->
		<div class='table'>
			<div class='button_row'>
				<!--三报表-->
				<el-tabs type="border-card" v-model="activeName">
					<el-tab-pane label="入库单据" name='rkdj'>
						<div id='table_dj'>
							<div class="table_left">
								<el-tree :data="rkdjTree" :props="defaultlstz" @node-click="handleNodeClick"></el-tree>
							</div>
							<div class="table_right">
							<el-table :data="tableData3" height="510" @cell-dblclick="dbrow" @header-click="headerc" border style="width: 100%">
								<el-table-column type='selection' prop="" label="选定框" width="50">
									<el-table-column type="index" label="" width="auto">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="ParName" label="合作方" width="110">
									<el-table-column prop="ParName" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="Type" label="单据类型" width="110">
									<el-table-column prop="Type" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="DeptName" label="部门" width="110">
									<el-table-column prop="DeptName" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="Type" label="单据类型" width="110">
									<el-table-column prop="Type" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="StorageDate" label="入库日期" width="220">
									<el-table-column prop="StorageDate" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="StorageID" label="单据编号" width="110">
									<el-table-column prop="StorageID" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="SupplierName" label="供应商名称" width="auto">
									<el-table-column prop="SupplierName" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="Total" label="入库金额" width="auto">
									<el-table-column prop="Total" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="OrderID" label="订单号" width="auto">
									<el-table-column prop="OrderID" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="SalesMan" label="采购员" width="auto">
									<el-table-column prop="SalesMan" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="Remarks" label="备注" width="auto">
									<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="BillNum" label="源单号" width="auto">
									<el-table-column prop="BillNum" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="Delivery" label="交货方式" width="auto">
									<el-table-column prop="Delivery" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="Transport" label="运输方式" width="auto">
									<el-table-column prop="Transport" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="ArrivalTime" label="到货时间" width="auto">
									<el-table-column prop="ArrivalTime" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="FMark" label="付款标志" width="auto">
									<el-table-column prop="FMark" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="FAmount" label="付款金额" width="auto">
									<el-table-column prop="FAmount" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="WAmount" label="未付金额" width="auto">
									<el-table-column prop="WAmount" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="Poster" label="制单人" width="auto">
									<el-table-column prop="Poster" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="Checker" label="审核人" width="auto">
									<el-table-column prop="Checker" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="CheckMark" label="审核标志" width="auto">
									<el-table-column prop="CheckMark" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="CheckDate" label="审核日期" width="auto">
									<el-table-column prop="CheckDate" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="Weight" label="重量" width="auto">
									<el-table-column prop="Weight" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="Volume" label="体积" width="auto">
									<el-table-column prop="Volume" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="CreateDate" label="制单日期" width="auto">
									<el-table-column prop="CreateDate" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="DCName" label="配送中心" width="auto">
									<el-table-column prop="DCName" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="Num" label="基本数量" width="auto">
									<el-table-column prop="Num" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="SupportNum" label="辅助数量" width="auto">
									<el-table-column prop="SupportNum" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="IsSend" label="配车" width="auto">
									<el-table-column prop="IsSend" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="HandlingStartDate" label="装卸开始时间" width="auto">
									<el-table-column prop="HandlingStartDate" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="HandlingEndDate" label="装卸结束时间" width="auto">
									<el-table-column prop="HandlingEndDate" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="ForkliftWorker" label="叉车工" width="auto">
									<el-table-column prop="ForkliftWorker" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="Storeman" label="仓管员" width="auto">
									<el-table-column prop="Storeman" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="Driver" label="司机" width="auto">
									<el-table-column prop="Driver" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="PlateNumber" label="车牌" width="auto">
									<el-table-column prop="PlateNumber" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="DriverIDNumber" label="司机身份证" width="auto">
									<el-table-column prop="DriverIDNumber" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="DriverPhone" label="司机电话" width="auto">
									<el-table-column prop="DriverPhone" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="LoadAndUnLoadWeight" label="装卸量" width="auto">
									<el-table-column prop="LoadAndUnLoadWeight" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="CarryWeight" label="搬运量" width="auto">
									<el-table-column prop="CarryWeight" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="WorkloadRemarks" label="作业备注" width="auto">
									<el-table-column prop="WorkloadRemarks" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								
								<el-table-column prop="HandlingTeamName" label="装卸队" width="auto">
									<el-table-column prop="HandlingTeamName" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应收卸货费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应收配送搬运费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应收配送司机费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="入库费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="打包费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="装修费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="分拣费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="address" label="应付装载费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								
								<el-table-column prop="address" label="应付配送搬运费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应付卸货费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="职员提成计费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="Pay5" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="Pay6" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="车皮费用" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="到岸" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

							</el-table>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="流水台账" name='lstz'>
						<div id="table_ls">
							<div class='table_left' >
								<el-tree :data="lstzTree" :props="defaultlstz" @node-click="handleNodeClick"></el-tree>

							</div>
							<div class="table_right">
								<el-table :data="tableData4" @cell-dblclick="dbrow1" @header-click="headerc1"  height="510" border style="width: 100%">
									<el-table-column type='index' prop="" label="选定框" width="50">
										<el-table-column type="index" label="" width="50">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="ParName" label="合作方" width="110">
										<el-table-column prop="ParName" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Type" label="单据类型" width="110">
										<el-table-column prop="Type" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="DeptName" label="部门" width="110">
										<el-table-column prop="DeptName" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									
									<el-table-column prop="StorageDate" label="入库日期" width="110">
										<el-table-column prop="StorageDate" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="StorageID" label="单据编号" width="220">
										<el-table-column prop="StorageID" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="SupplierName" label="供应商名称" width="110">
										<el-table-column prop="SupplierName" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="ProCode" label="商品编号" width="auto">
										<el-table-column prop="ProCode" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="ProName" label="商品名称" width="auto">
										<el-table-column prop="ProName" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="ProModel" label="规格型号" width="auto">
										<el-table-column prop="ProModel" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="ProMCode" label="助记码" width="auto">
										<el-table-column prop="ProMCode" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
                  <el-table-column prop="SupUnit" label="辅助单位" width="auto">
										<el-table-column prop="SupUnit" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="SupNum" label="辅助数量" width="auto">
										<el-table-column prop="SupNum" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="SupPrice" label="辅助单价" width="auto">
										<el-table-column prop="SupPrice" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
                  <el-table-column prop="Unit" label="基本单位" width="auto">
										<el-table-column prop="Unit" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Num" label="基本数量" width="auto">
										<el-table-column prop="Num" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Price" label="价格" width="auto">
										<el-table-column prop="Price" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Total" label="合计金额" width="auto">
										<el-table-column prop="Total" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="StockName" label="仓位" width="auto">
										<el-table-column prop="StockName" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Batch" label='批次' width="auto">
										<el-table-column prop="Batch" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
                  <el-table-column prop="Volume" label="体积" width="auto">
										<el-table-column prop="Volume" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Weight" label="重量" width="auto">
										<el-table-column prop="Weight" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="CheckMark" label="审核标志" width="auto">
										<el-table-column prop="CheckMark" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
                  <el-table-column prop="BillNum" label="属性1" width="auto">
										<el-table-column prop="BillNum" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="BillNum" label="属性2" width="auto">
										<el-table-column prop="BillNum" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="ProductionDate" label="生产日期" width="auto">
										<el-table-column prop="ProductionDate" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="EffectiveDate" label="有效日期" width="auto">
										<el-table-column prop="EffectiveDate" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="BillNum" label="源单号" width="auto">
										<el-table-column prop="BillNum" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="SalesMan" label="采购员" width="auto">
										<el-table-column prop="SalesMan" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Remarks" label="单据备注" width="auto">
										<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="CheckMark" label="审核标志" width="auto">
										<el-table-column prop="CheckMark" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Poster" label="制单人" width="auto">
										<el-table-column prop="Poster" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Checker" label="审核人" width="auto">
										<el-table-column prop="Checker" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="CheckDate" label="审核日期" width="auto">
										<el-table-column prop="Poster" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="OrderID" label="订单号" width="auto">
										<el-table-column prop="OrderID" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="ProInterfaceID" label="商品接口编号" width="auto">
										<el-table-column prop="ProInterfaceID" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="BarCode" label="商品条码" width="auto">
										<el-table-column prop="BarCode" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Desc" label="明细备注" width="auto">
										<el-table-column prop="Desc" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
								<el-table-column prop="address" label="应收卸货费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应收配送搬运费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应收配送司机费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="入库费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="打包费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="装修费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="分拣费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="address" label="应付装载费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								
								<el-table-column prop="address" label="应付配送搬运费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应付卸货费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="职员提成计费" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="Pay5" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="Pay6" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="车皮费用" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="到岸" width="auto">
									<el-table-column prop="name" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								</el-table>

							</div>

						</div>
					</el-tab-pane>
					<el-tab-pane label="汇总台账" name='hztz'>
						<div id='table_hz'>
							<div class='table_left'>
								<el-tree :data="hztzTree" :props="defaulthztz" @node-click="handleNodeClick"></el-tree>

							</div>
							<div class="table_right">
								<el-table :data="tableData5" @cell-dblclick="dbrow2" @header-click="headerc2" height="510" border style="width: 100%">
									<el-table-column type='index' prop="" label="选定框" width="50">
										<el-table-column type="index" label="" width="50">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="ParName" label="合作方" width="110">
										<el-table-column prop="ParName" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="ProCode" label="商品编号" width="110">
										<el-table-column prop="ProCode" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="DeptName" label="部门" width="110">
										<el-table-column prop="DeptName" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									
									<el-table-column prop="ProName" label="商品名称" width="220">
										<el-table-column prop="ProName" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="ProModel" label="规格型号" width="110">
										<el-table-column prop="ProModel" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="SupUnit" label="辅助单位" width="auto">
										<el-table-column prop="SupUnit" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="SupNum" label="辅助数量" width="auto">
										<el-table-column prop="SupNum" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Unit" label="基本单位" width="auto">
										<el-table-column prop="Unit" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Num" label="基本数量" width="auto">
										<el-table-column prop="Num" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Price" label="价格" width="auto">
										<el-table-column prop="Price" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Total" label="合计金额" width="auto">
										<el-table-column prop="Total" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Volume" label="体积" width="auto">
										<el-table-column prop="Volume" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="Weight" label="重量" width="auto">
										<el-table-column prop="Weight" label="" width="auto" class-name="mohucha">
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
			<el-tag class='tag3' v-if="LS">辅助数量合计:<span>{{ SupNumTotal }}</span></el-tag>
			<el-tag class='tag3' v-if="LS">基本数量合计:<span>{{ NumTotal }}</span></el-tag>
			<el-tag class='tag3' v-if="LS">价格合计:<span>{{ PriceTotal }}</span></el-tag>
			<el-tag class='tag2'>金额合计:<span>{{ isNaN(RKJETotal) ? 0.00 : RKJETotal }}</span></el-tag>
			<el-tag class='tag3' v-if="DJ">付款金额合计:<span>{{ FKJETotal }}</span></el-tag>
			<el-tag class='tag4' v-if="DJ">未付金额合计:<span>{{ WFJETotal }}</span></el-tag>
			<el-tag class='tag5' v-if="MR">体积合计:<span>{{ VolumeTotal }}</span></el-tag>
			<el-tag class='tag6' v-if="MR">重量合计:<span>{{ WeightTotal }}</span></el-tag>
		</div>
	</div>

</template>

<script>
	import nicescroll from "../../../common/js_nicescroll/jquery.nicescroll.js"
	export default {
		data() {
			return {
				hztzTree: [{
					Name: "商品",
					children: []
				}],
				lstzTree: [{
					Name: "商品",
					children: []
				}],
				shbz: '2', // 审核标志
				shenghelist: [{
					value: '0',
					label: '未审核'
				}, {
					value: '1',
					label: '已审核'
				}, {
					value: '2',
					label: '全部'
				}],
				DataLength: '0', // 条数
				RKJETotal: '0.00',  // 金额合计
        VolumeTotal: '0.0000', // 体积合计
        WeightTotal: '0.00', // 重量合计
        FKJETotal: '0.00', // 付款金额合计
				WFJETotal: '0.00', // 未付金额合计
				NumTotal: '0.00',  // 数量合计
        SupNumTotal: '0.00', // 辅助数量合计
				PriceTotal: '0.00', // 价格合计
				LS: false, // 流水
				DJ: false, // 单据
				MR: true, // 默认存在
				bumen: '', 
				bmlist: [{
					value: '1',
					label: '全部'
				}, ],
				peisong: '',
				yuanqu: '',
				hzf: '全部',
        hzfID: '', 
				zdrq: '1',
				zdrqlist: [ // 制单日期
					{
						value: '1',
						label: '订单日期'
					},
					{
						value: '2',
						label: '审核日期'
					},
					{
						value: '3',
						label: '制单日期'
					},
				],
				options: [],
				yqlist: [],
				cities: [],
				djbh: '',
				rq1: "",
				rq2: '',
				ksrq:'',
				jsrq:'',
				tableData3: [],
				defaulthztz: {
					label: "Name",
					children: "children"
				},
				defaultlstz: {
					label: "Name",
					children: "children"
				},
				pickerOptions1: '',
				pickerOptions2: '',
				formInline: {},
				backUpArr: [],
			
				hzfIDList: [],
				rkdjTree:[{
					Name: "商品",
					children: []
				}],
				shangjia:'',
				tableData5:[],
				tableData4:[],
				activeName:'rkdj',
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

//			setTimeout(function() {
//				that.loading = false;
//			}, 3000);
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
						that.getRkdjTree(that.hzfIDList);
					}
				})
			},
			// 获取园区列表
			getyuanqulist: function(psid) {
				var that = this;
				var params = {
					UserID: window.userid,
					DCID: psid
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: "CPHH.PC.BaseInfo.Stock.GetParkList_All"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.yqlist = data;
						that.yuanqu = data[0].ParkID; //设置园区默认
					}
				})
			},
			// 树形结构
			getLstzTree(hzfID) {
				var that = this;
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
						that.lstzTree[0].children.push(data[0]);
					});
				}
			},
			getHztzTree(hzfID) {         
				var that = this;
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
						that.hztzTree[0].children.push(data[0]);
					});
				}
			},
			//入库单据树形结构
			getRkdjTree(hzfID) {
				var that = this;
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
						that.rkdjTree[0].children.push(data[0]);
					});
				}
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
					this.options = this.backUpArr.filter((item) => {
						if(!!~item.Name.indexOf(val) || !!~item.Code.indexOf(val)) {
							return true
						}
					})
				} else { //val为空时，还原数组
					this.options = this.backUpArr
				}
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			},
			
			lstzClick(data) {
				console.log(data)
			},
			// 点击得到客户信息
			handleNodeClick(data) {
				var that = this;
				that.shangjia = data.Number;//拿到树形结构的序号
				that.hzfID = data.PartnerID; // 拿到合作方ID
				that.onSearch();//启动一次搜索
			},
			// 单据统计数据
			getTotal (data) {
				var that = this;
				var RKJETotal = 0; 
				var FKJETotal = 0;
				var WFJETotal = 0;
				var volumeTotal = 0;
				var weightTotal = 0;
        for( let i = 0; i < data.length; i++ ) {
           RKJETotal += parseFloat(data[i].Total);
           FKJETotal += parseFloat(data[i].FAmount);
           WFJETotal += parseFloat(data[i].WAmount);
           volumeTotal += data[i].Volume;
           weightTotal += parseFloat(data[i].Weight);
				} 
        that.RKJETotal = RKJETotal;
        that.FKJETotal = FKJETotal;
        that.WFJETotal = WFJETotal;
        that.VolumeTotal = volumeTotal.toFixed(6);
        that.WeightTotal = weightTotal.toFixed(2);
			},
			// 流水统计数据
			getLSTotal (data) {
				var that = this;
				var NumTotal = 0;  // 基本数量
				var SupNumTotal = 0; // 辅助数量
				var RKJETotal = 0;
				var PriceTotal = 0;
				var volumeTotal = 0;
				var weightTotal = 0;
        for( let i = 0; i < data.length; i++ ) {
           RKJETotal += parseFloat(data[i].Total);
           NumTotal += parseFloat(data[i].Num);
           SupNumTotal += parseFloat(data[i].SupNum);
           PriceTotal += parseFloat(data[i].Price);
           volumeTotal += data[i].Volume;
           weightTotal += parseFloat(data[i].Weight);
				} 
        that.RKJETotal = RKJETotal;
        that.NumTotal = NumTotal;
        that.SupNumTotal = SupNumTotal;
        that.PriceTotal = PriceTotal;
        that.VolumeTotal = volumeTotal.toFixed(6);
        that.WeightTotal = weightTotal.toFixed(2);
			},
			// 汇总统计数据
			getHZTotal (data) {
				var that = this;
				var NumTotal = 0;  // 基本数量
				var SupNumTotal = 0; // 辅助数量
				var RKJETotal = 0;
				var PriceTotal = 0;
        for( let i = 0; i < data.length; i++ ) {
           RKJETotal += parseFloat(data[i].Total);
           NumTotal += parseFloat(data[i].Num);
           SupNumTotal += parseFloat(data[i].SupNum);
           PriceTotal += parseFloat(data[i].Price);
				} 
        that.RKJETotal = RKJETotal;
        that.NumTotal = NumTotal;
        that.SupNumTotal = SupNumTotal;
        that.PriceTotal = PriceTotal;
			},
       
			
//			点击搜索方法
			onSearch() {
				var that = this;
				var ksrq = $('#ksrq input').val();
				var jsrq = $('#jsrq input').val();

				if(that.activeName == 'rkdj') {
					var jsons = {

						StartDate: ksrq,
						EndDate: jsrq,
						Check: that.shbz,
						UserID: window.userid,
						DCID: that.peisong,
						SupTreeNumber:that.shangjia,
						
						ParID: that.hzfID || 0,
						ParkID: that.yuanqu || 0,
						StorageID:that.djbh,

					};

					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.Storage.BillReport"
						},
						timeout: 3000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var obj = eval('(' + data + ')');
							if (obj.StateCode == "100") {
								var datas = JSON.parse(obj.Datas);
								var data = datas.Data;
								
								that.tableData3 = data;
								that.DataLength = data.length;
								that.LS = false;
								that.DJ = true;
								that.MR = true;
								that.getTotal(data);
							} else {
								
							}
						}
					});
				} else if(that.activeName == 'lstz') {
					var jsons = {

						StartDate: ksrq,
						EndDate: jsrq,
						Check: that.shbz,
						UserID: window.userid,
						DCID: that.peisong,
						DeptID:that.bumen,
						StorageID:that.djbh,
						ParID: that.hzfID || 0,
						ParkID: that.yuanqu || 0,
						ProTreeNumber:that.shangjia,

					};
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.Storage.ProReport"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var obj = eval('(' + data + ')');
						
							if (obj.StateCode == "100") {
								var datas = JSON.parse(obj.Datas);
								var data = datas.Data;
								that.tableData4 = data;
								that.DataLength = data.length;
								that.DJ = false;
								that.LS = true;
								that.MR = true;
								that.getLSTotal(data);
							} else {

							}
						}
					})

				} else if(that.activeName == 'hztz') {

					var jsons = {

						StartDate: ksrq,
						EndDate: jsrq,
						Check: that.shbz,
						UserID: window.userid,
						DCID: that.peisong,

						StorageID:that.djbh,
						ParID: that.hzfID || 0,
						ParkID: that.yuanqu || 0,
						ProTreeNumber:that.shangjia,

					};
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.Storage.ProSumReport"
						},
						timeout: 3000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var obj = eval('(' + data + ')');
						  if (obj.StateCode == "100") {
								var datas = JSON.parse(obj.Datas);
								var data = datas.Data;console.log(data)
								that.tableData5 = data;
								that.DataLength = data.length;
								that.MR = false;
								that.DJ = false;
								that.LS = true;
								that.getHZTotal(data);
							} else {

							}
						}
					})

				}

			}
		}

	}
</script>

<style scoped>
	@import url("../../../common/css/ckddzhbb/ckddzhbb.css");
	.datatable {
		width: 100%;
	}
	
	.ckddzhbb .el-date-editor.el-input {
		width: 100%;
	}
	
	.ckddzhbb .table .el-tree {
		min-height: 510px;
		max-height: 510px;
		overflow: scroll;
	}
	
	.fymxbb {
		width: 100%;
		height: 100%;
	}
	
	.ckddzhbb .grid-content p {
		min-width: 80px;
		text-align: center;
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
	
	.el-tabs__nav {
		height: 35px;
		background: #35B3FD;
	}
</style>