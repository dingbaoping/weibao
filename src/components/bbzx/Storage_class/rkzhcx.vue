<template>
<!-- 出库订单综合查询 -->
	<div class='rkzhcx' id='rkzhcx'>
		<!--出库管理综合报表-->

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
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="shbz" placeholder="入库日期" class="input_width shbz">
								<el-option v-for="item in shenghelist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->
					<el-col :span="3">
						<div class="grid-content ">
							<el-date-picker type="date" placeholder="选择日期" v-model="ksrq" align="right" :picker-options="pickerOptions1"></el-date-picker>

						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<p class=''>至</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-date-picker type="date" placeholder="选择日期" v-model="jsrq" align="right" :picker-options="pickerOptions2"></el-date-picker>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>合作方：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<!-- 合作方列表 -->
							<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.Code">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
								</el-option>
							</el-select>
							<!-- 合作方列表结束 -->

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
								<el-option v-for="item in shenghelist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>

					
					<el-col :span="2">
						<div class="grid-content djbj">

							<p>单据编号：</p>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content djbj">
							<el-input class="inline-input input_width djbh" size="small" placeholder="" v-model="djbh">
							</el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content fl">
							<el-button type="primary" @click.native='' class='cx fl'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							<!--<el-button type="primary" @click.native='' class='close fl'><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>-->
						</div>
					</el-col>
				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
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
					<el-col :span="2">
						<div class="grid-content ">
							<p>部门：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-select v-model="bm" placeholder="全部" class="input_width shbz">
								<!--<el-option v-for="item in gblist" :label="item.label" :value="item.value">
								</el-option>-->
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
				<!--一报表-->
				<el-tabs type="border-card">
					<el-tab-pane label="单据列表">
						<div id='table_dj'>
							<div class='table_left'>
								<el-tree :data="lstzTree" :props="defaultLSTZ" @node-click="handleNodeLSTZ"></el-tree>

							</div>
							<div class="table_right">
							<el-table :data="tableData3" height="510" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中" border style="width: 100%">
								<el-table-column type='selection' prop="" label="选定框" width="50">
									<el-table-column prop="name" label="" width="50" class-name="mohucha">
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
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="单据编号" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="供应商名称" width="150">
									<el-table-column prop="name" label="" width="150" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="address" label="入库金额" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="订单号" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="采购员" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="备注" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="源单号" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="交货方式" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="运输方式" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="到货时间" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="付款标志" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="付款金额" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="未付金额" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="制单人" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="address" label="审核人" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="审核日期" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="address" label="审核标志" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="体积" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="重量" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="制单日期" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="配送中心" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="基本数量" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="辅助数量" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="配车" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="装卸开始时间" width="150">
									<el-table-column prop="name" label="" width="150" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="装卸结束时间" width="150">
									<el-table-column prop="name" label="" width="150" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="叉车工" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="仓管员" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="司机" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="车牌" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="司机身份证" width="150">
									<el-table-column prop="name" label="" width="150" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="司机电话" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="address" label="装卸量" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>

								<el-table-column prop="address" label="搬运量" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								
								<el-table-column prop="address" label="作业备注" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="装卸队" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应收卸货费" width="150">
									<el-table-column prop="name" label="" width="150" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应收配送搬运费" width="180">
									<el-table-column prop="name" label="" width="180" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应收配送司机费" width="150">
									<el-table-column prop="name" label="" width="150" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="入库费" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="打包费" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="装修费" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="分拣费" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应付装载费" width="150">
									<el-table-column prop="name" label="" width="150" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应付配送搬运费" width="180">
									<el-table-column prop="name" label="" width="180" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="应付卸货费" width="150">
									<el-table-column prop="name" label="" width="150" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="职员提成计费" width="150">
									<el-table-column prop="name" label="" width="150" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="Pay5" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="Pay6" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="车皮费用" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="到岸" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								
							</el-table>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="流水台账">
						<div id="table_ls">
							<div class='table_left'>
								<el-tree :data="lstzTree" :props="defaultLSTZ" @node-click="handleNodeLSTZ"></el-tree>

							</div>
							<div class="table_right">
								<el-table :data="tableData3" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中" height="510" border style="width: 100%">
									<el-table-column type='selection' prop="" label="选定框" width="50">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="合作方" width="110">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="部门" width="110">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="单据类型" width="110">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="单据日期" width="110">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="配送日期" width="110">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="单据编号" width="220">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="客户编号" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="客户名称" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>

									<el-table-column prop="address" label="商品编码" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="商品名称" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="助记码" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>

									<el-table-column prop="address" label="规格型号" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助单位" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="数量" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="基本 单位" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="数量" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="价格" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助单价" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="合计金额" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="源单号" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label='业务员' width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="单据备注" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="制单人" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="审核人" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="审核日期" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="源单号" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="体积" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="重量" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="明细源单号" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="体积" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="重量" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="关闭标志" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="出库数量" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="配送状态" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="配送单号" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="车牌号" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>

									<el-table-column prop="address" label="司机" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="审核日期" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="子条码" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="箱条码" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
								</el-table>

							</div>

						</div>
					</el-tab-pane>
					<el-tab-pane label="汇总台账">
						<div id='table_hz'>
							<div class='table_left'>
								<el-tree :data="hztzTree" :props="defaultHZTZ" @node-click="handleNodeHZTZ"></el-tree>

							</div>
							<div class="table_right">
								<el-table :data="tableData3" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中" height="510" border style="width: 100%">
									<el-table-column type='selection' prop="" label="选定框" width="50">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="合作方" width="110">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="部门" width="110">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="商品编号" width="110">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="商品名称" width="220">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="规格型号" width="110">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助单位" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="数量" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="基本单位" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="数量" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="体积" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="重量" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="子条码" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="箱条码" width="auto">
										<el-table-column prop="name" label="" width="auto" class-name="mohucha">
										</el-table-column>
									</el-table-column>

								</el-table>

							</div>

						</div>
					</el-tab-pane>

				</el-tabs>

			</div>

		</div>

	</div>

</template>

<script>

	export default {
		data() {
			return {
				lstzTree: [],
				hztzTree: [],

				shbz: '1', // 审核标志
				shenghelist: [{
					value: '0',
					label: '全部'
				}, {
					value: '1',
					label: '未审核'
				}, {
					value: '2',
					label: '已审核'
				}],
				gbbz: '1', // 关闭标志
				gblist: [{
					value: '0',
					label: '全部'
				}, {
					value: '1',
					label: '未关闭'
				}, {
					value: '2',
					label: '已关闭'
				}],
				peisong: '',
				yuanqu: '全部',
				hzf: '',
				options: [],
				yqlist: [],
				cities: [],
				djbh: '',
				ksrq: "",
				jsrq: '',
				tableData3: [],
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
//				loading: true,
				hzfIDList: []
			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
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
			// 获取合作方列表
			gethzflist: function(psid) {
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
					for(let i = 0; i < data.length; i++) {
						that.hzfIDList.push(data[i].InterID);
					}
					that.getLstzTree(that.hzfIDList);
					that.getHztzTree(that.hzfIDList);
				});
			},
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
						data[0].children = [];
						for(let j = 1; j < data.length; j++) {
							data[0].children.push(data[j]);
						}

						that.lstzTree.push(data[0]);
						console.log(data)
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
					console.log(data);
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
			handleNodeHZTZ(data) {
				console.log(data)
			},
			handleNodeLSTZ(data) {
				console.log(data)
			}
		}

	}
</script>
<style type="text/css">
	.rkzhcx .el-icon-date{
  		top: 0px!important;
 	}
 	.rkzhcx .el-tree{
 	 	border:0;
 	 	width: 260px;
 	}
 	.rkzhcx .el-table__body-wrapper{
		height: 412px!important;
	}
</style>
<style scoped>
	@import url("../../../../common/css/ckddzhbb/ckddzhbb.css");
	.datatable {
		width: 100%;
	}
	.rkzhcx .grid-content p {
		text-align: center;
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
	
	.but-box {
		width: 100%;
		height: 40px;
		background: url(../../../assets/img/gun.png) repeat-x;
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
		background: url(../../../../common/img/rk/daochu.jpg) no-repeat;
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
		background: url(../../../../common/img/rk/chuangti.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.tc {
		background: url(../../../../common/img/rk/tuichu.png) no-repeat;
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
		margin-bottom: 15px;
	}
	.grid-content button{
		margin-left: 20px!important;
		padding:6px 15px!important;
	}
	.left-1{
		margin-left: 0;
	}
	.searchnav{
		margin:10px 15px;
	}
	.form2 div{
		padding-right: 10px;
	}
	.bm{
		width: 106px;
	}
	.table_left{
  	float: left;
  	width: 15%;
  }
  .table_right{
  	float: right;
  	width: 84%;
  	overflow: hidden; 
  }
  .el-input{
  	width: 100%;
  }
  .table_left{
  	height: 493px;
  	color: #000;
  	overflow:auto;
  }
	
</style>