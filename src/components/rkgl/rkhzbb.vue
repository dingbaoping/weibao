<template>
	<div class='rkddzhbb' id='rkddzhbb'>
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
			<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">

					<!--check-->
					<el-col :span="3">
						<div class="grid-content ">
							<el-select v-model="shbz" placeholder="入库日期" class="input_width shbz">
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-date-picker v-model="rq1" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
							</el-date-picker>
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<p class=''>至</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-date-picker v-model="rq2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions2">
							</el-date-picker>
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<p>合作方：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-select v-model="shbz" placeholder="全部" class="input_width shbz">
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>审核标志：</p>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">

							<el-select v-model="shbz" placeholder="全部" class="input_width shbz">
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>单据编号*：</p>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">

							<el-select v-model="hzf" placeholder="全部" class='hzf input_width'>
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-button type="primary" @click.native='' class='cx fl'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							<!--<el-button type="primary" @click.native='' class='close fl'><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>-->
						</div>
					</el-col>
				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<p>配送中心*：</p>
						</div>
					</el-col>
					<el-col :span="3">
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
					<el-col :span="1">
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
					<el-col :span="1">
						<div class="grid-content djbj">
							<p>部门：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content djbj">
							<el-select v-model="hzf" placeholder="全部" class='hzf input_width'>
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
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
				<el-tabs type="border-card">
					<el-tab-pane label="流水台账">
						<div id="table_ls">
							<div class='table_left'>
								<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
							</div>
							<div class="table_right">
								<el-table :data="tableData3" @header-click="headerc" @row-click="rowClick" height="470" border style="width: 100%">
									<el-table-column type='selection' prop="" label="选定框" width="50">
										<el-table-column type='selection' prop="" label="" width="50" >
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="合作方" width="110">
										<el-table-column prop="name" label="" width="110" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="单据类型" width="110">
										<el-table-column prop="name" label="" width="110" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="部门" width="110">
										<el-table-column prop="name" label="" width="110" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="入库日期" width="220">
										<el-table-column prop="address" label="" width="220" class-name="mohucha"> 
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="单据编号" width="110">
										<el-table-column prop="address" label="" width="110" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="供应商名称" width="110">
										<el-table-column prop="address" label="" width="110" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="入库金额" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="订单号" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="采购员" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="备注" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="源单号" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="交货方式" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="运输方式" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="到货时间" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="付款标志" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="付款金额" width="140">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="未付金额" width="140">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="制单人" width="140">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="审核人" width="140">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label='审核日期' width="160">
										<el-table-column prop="address" label='' width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="审核标志" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="体积" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="重量" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="制单日期" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="配送中心" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="基本数量" width="100">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助数量" width="100">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="配车" width="100">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="装卸开始时间" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>

									<el-table-column prop="name" label="装卸结束时间" width="110">
										<el-table-column prop="name" label="" width="110" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="叉车工" width="110">
										<el-table-column prop="name" label="" width="110" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="仓管员" width="110">
										<el-table-column prop="name" label="" width="110" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="司机" width="120">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="车牌" width="110">
										<el-table-column prop="address" label="" width="110" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="供应商名称" width="110">
										<el-table-column prop="address" label="" width="110" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="入库金额" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="订单号" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="采购员" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="备注" width="100">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="源单号" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="交货方式" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="运输方式" width="140">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="到货时间" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="付款标志" width="140">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="付款金额" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="未付金额" width="140">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="制单人" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="审核人" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label='审核日期' width="120">
										<el-table-column prop="address" label='' width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="审核标志" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="体积" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="重量" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="制单日期" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="配送中心" width="160">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="基本数量" width="100">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助数量" width="100">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="配车" width="120">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="卸装开始时间" width="100">
										<el-table-column prop="address" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
								</el-table>

							</div>

						</div>
					</el-tab-pane>
					<el-tab-pane label="流水台账">
						<div id="table_ls">
							<div class='table_left'>
								<el-tree :data="data" :props="defaultProps" @header-click="headerc" @row-click="rowClick" ></el-tree>
							</div>
							<div class="table_right">
								<el-table :data="tableData3" height="470" border style="width: 100%">
									<el-table-column type='selection' prop="" label="选定框" width="50">
										<el-table-column type='selection' prop="" label="" width="50">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="合作方" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="部门" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="单据类型" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="单据编号" width="220">
									<el-table-column prop="address" label="" width="220" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="单据日期" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="配送日期" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="客户编号" width="160">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="商品编码" width="160">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="商品名称" width="120">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="助记码" width="120">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="客户名称" width="120">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="规格型号" width="120">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助单位" width="100">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="数量" width="100">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="基本 单位" width="100">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="价格" width="100">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助单价" width="100">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="合计金额" width="120">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="原单号" width="160">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label='业务员' width="120">
									<el-table-column prop="address" label='' width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="单据备注" width="140">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="制单人" width="120">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="审核人" width="120">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="审核日期" width="160">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									
									
									<el-table-column prop="address" label="子条码" width="160">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="箱条码" width="160">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								</el-table>

							</div>

						</div>
					</el-tab-pane>
					<el-tab-pane label="汇总台账">
						<div id='table_hz'>
							<div class='table_left'>
								<el-tree :data="data" :props="defaultProps" @header-click="headerc" @row-click="rowClick" ></el-tree>
							</div>
							<div class="table_right">
								<el-table :data="tableData3" height="470" border style="width: 100%">
									<el-table-column type='selection' prop="" label="选定框" width="50">
									<el-table-column type='selection' prop="" label="" width="50">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="合作方" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="部门" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="状态" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>-->
									</el-table-column>-->
									<el-table-column prop="address" label="商品编号" width="220">
									<el-table-column prop="address" label="" width="220" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="订单日期" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="商品名称" width="140">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="规格型号" width="160">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助单位" width="120">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="数量" width="120">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="体积" width="120">
									<el-table-column prop="address" label="体积" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="重量" width="120">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="子条码" width="160">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="箱条码" width="160">
									<el-table-column prop="address" label="" width="auto" class-name="mohucha">
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
			<el-tag class='tag1'>共<span>20</span>条</el-tag>
			<el-tag class='tag2'><span>0</span></el-tag>
		</div>
	</div>

</template>

<script>
	import nicescroll from "../../../common/js_nicescroll/jquery.nicescroll.js"
	export default {
		data() {
			return {
				data: [{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}],
				pszx: false, //配送中心禁选
				peisong: '',
				yuanqu: '',
				yqlist: [],
				cities: [],
			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			// 先获取一次配送列表
			that.getdclist();
		},
		methods: {
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
				that.pszx = true; // 配送输入框禁用
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
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
				console.log("val", val)
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					console.log("v", v)
					$("tr",$table).show();//先全部展示出来
					console.log('$datath', $datath);
					$datath.each(function() {
						var $this = $(this);
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							console.log('thv,idx, $table');
							console.log(thv,idx, $table);
							that.mohucha(thv, idx, $table);
						}
					});
				});
				$inp.blur(function() {
					val = $inp.val(); //离开时在获一次值
					$dom.html(val);
				});
			},
			
			
			
			
			
		}

	}
</script>

<style scoped>
	.el-row {
		margin: 0 5px;
		margin-top: 5px;
		margin-bottom: 10px;
	}
	
	.rkhzbb .grid-content {
		text-align: center;
	}
	
	.rkhzbb .el-button--small {
		width: 80px;
	}
	
	.rkhzbb .el-form {
		margin-bottom: 5px;
	}
	
	.rkhzbb .el-table {
		overflow: inherit;
	}
	
	.rkhzbb .grid-content p {
		min-width: 70px;
	}
	
	.el-date-editor,
	.el-input {
		width: 100%;
	}
</style>