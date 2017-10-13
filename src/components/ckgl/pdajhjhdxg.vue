<template>
	<!-- PDA移仓调出作业单 -->
	<div class="pdaycdczyd">

		<!-- 这里是导航栏部分 -->
		<div class="pdajhjhdck">
			<div class="but-box">
				<ul>
					<li>
						<div class="boxtab">
							<div class="curbox syt">
								<span>上一条</span>
							</div>
						</div>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox xyt">
								<span>下一条</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox dy">
								<span>打印（整货）</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox dy">
								<span>打印（散货）</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox ctys" >
								<!-- <span>窗体样式</span> -->
								<el-dropdown split-button >
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
							<div class="curbox tc"  @click="closetag"><span>退出</span></div>
						</div>
					</li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->

			<!--条件查询-->
			<div class="searchnav">
				<!--form第一行-->
				<el-form :inline="true" class="demo-form-inline form1">
					<el-row :gutter="10">
						<el-col :span="2">
							<div class="grid-content ">
								<p class=''>拣货单号:</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content ">
								<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="jhdh">
							</el-input>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content ">
								<p class=''>单据日期:</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content ">
								<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="djrq">
							</el-input>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content ">
								<p class=''>制单人:</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content ">
								<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="zdr">
							</el-input>
							</div>
						</el-col>
					</el-row>
					<!--第二行-->
					<el-row :gutter="10">
						<el-col :span="2">
							<div class="grid-content ">
								<p class=''>园区:</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content ">
								<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="yq">
							</el-input>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content ">
								<p class=''>分配人员:</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content ">
								<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="fpry">
							</el-input>
							</div>
						</el-col>
					</el-row>
				</el-form>
				<!--form第二行，没有第二行-->
			</div>
			<!--条件查询结束-->
			<!--表格开始-->
			<div class="table">
				<el-tabs type="border-card">
					<el-tab-pane label="拣货汇总">
						<el-table class="jhhz" :data="jhhz" height="300" border style="width: 100%"  @header-click="headerc">

							<el-table-column prop="PlanID" label="拣货计划单号" width="120">
								<el-table-column prop="PlanID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProCode" label="商品编号" width="120">
								<el-table-column prop="ProCode" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProName" label="商品名称" width="120">
								<el-table-column prop="ProName" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProModel" label="规格型号" width="120">
								<el-table-column prop="ProModel" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Unit" label="基本单位" width="120">
								<el-table-column prop="Unit" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ConvRate" label="换算率" width="120">
								<el-table-column prop="ConvRate" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OrderNum" label="订单数量" width="120">
								<el-table-column prop="OrderNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OrderSupNum" label="订单辅助数量" width="120">
								<el-table-column prop="OrderSupNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SupUnit" label="辅助单位" width="120">
								<el-table-column prop="SupUnit" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Num" label="实际应拣数量" width="150">
								<el-table-column prop="Num" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SupNum" label="实际应拣辅助数量" width="150">
								<el-table-column prop="SupNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OriginalNum" label="应拣数量" width="120">
								<el-table-column prop="OriginalNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OriginalSupNum" label="应拣辅助数量" width="120">
								<el-table-column prop="OriginalSupNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickNum" label="已拣基本数量" width="120">
								<el-table-column prop="PickNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickSupNum" label="已拣辅助数量" width="120">
								<el-table-column prop="PickSupNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
						</el-table>
					</el-tab-pane>
						<!--表格二-->
					<el-tab-pane label="单据对应明细">
						<el-table class="dddymx" :data="dddymx" height="300" border style="width: 100%"  @header-click="headerc" >
							<el-table-column prop="PlanID" label="拣货计划单号" width="120">
								<el-table-column prop="PlanID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="BillID" label="单据编号" width="120">
								<el-table-column prop="BillID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProCode" label="商品编号" width="120">
								<el-table-column prop="ProCode" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="BillEntryID" label="单据序号" width="120">
								<el-table-column prop="BillEntryID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProName" label="商品名称" width="120">
								<el-table-column prop="ProName" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProModel" label="规格型号" width="120">
								<el-table-column prop="ProModel" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Unit" label="基本单位" width="120">
								<el-table-column prop="Unit" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SupUnit" label="辅助单位" width="120">
								<el-table-column prop="SupUnit" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ConvRate" label="换算率" width="120">
								<el-table-column prop="ConvRate" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OrderNum" label="订单数量" width="150">
								<el-table-column prop="OrderNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OrderSupNum" label="订单辅助数量" width="150">
								<el-table-column prop="OrderSupNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Num" label="实际应拣数量" width="120">
								<el-table-column prop="Num" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SupNum" label="实际应拣辅助数量" width="150">
								<el-table-column prop="SupNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OriginalNum" label="应拣数量" width="150">
								<el-table-column prop="OriginalNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OriginalSupNum" label="应拣辅助数量" width="120">
								<el-table-column prop="OriginalSupNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickNum" label="已拣基本数量" width="150">
								<el-table-column prop="PickNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickSupNum" label="已拣辅助数量" width="150">
								<el-table-column prop="PickSupNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="CusCode" label="客户编号" width="120">
								<el-table-column prop="CusCode" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="CusName" label="客户名称" width="150">
								<el-table-column prop="CusName" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Line" label="路线" width="150">
								<el-table-column prop="Line" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
						</el-table>
					</el-tab-pane>
						<!--表格三-->
					<el-tab-pane label="拣货指引明细">
						<el-table class="jhzymx" :data="jhzymx" height="300" border style="width: 100%"  @header-click="headerc">
							<el-table-column prop="PlanID" label="拣货计划单号" width="120">
								<el-table-column prop="PlanID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProCode" label="商品编号" width="120">
								<el-table-column prop="ProCode" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProName" label="商品名称" width="120">
								<el-table-column prop="ProName" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProModel" label="规格型号" width="120">
								<el-table-column prop="ProModel" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Unit" label="基本单位" width="120">
								<el-table-column prop="Unit" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SupUnit" label="辅助单位" width="120">
								<el-table-column prop="SupUnit" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ConvRate" label="换算率" width="120">
								<el-table-column prop="ConvRate" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Num" label="实际应拣数量" width="120">
								<el-table-column prop="Num" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Batch" label="批次" width="120">
								<el-table-column prop="Batch" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OriginalNum" label="应拣数量" width="150">
								<el-table-column prop="OriginalNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OriginalSupNum" label="应拣辅助数量" width="150">
								<el-table-column prop="OriginalSupNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SupNum" label="实际应拣辅助数量" width="120">
								<el-table-column prop="SupNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProductionDate" label="生产日期" width="120">
								<el-table-column prop="ProductionDate" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="EffectiveDate" label="有效期至" width="150">
								<el-table-column prop="EffectiveDate" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Account1" label="托盘号" width="150">
								<el-table-column prop="Account1" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickNum" label="已拣基本数量" width="120">
								<el-table-column prop="PickNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickSupNum" label="已拣辅助数量" width="120">
								<el-table-column prop="PickSupNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="StockName" label="仓位" width="150">
								<el-table-column prop="StockName" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="WarehouseName" label="仓库" width="150">
								<el-table-column prop="WarehouseName" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Mark" label="整/散" width="120">
								<el-table-column prop="Mark" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
						</el-table>
					</el-tab-pane>
						<!--表格四-->
					<el-tab-pane label="单据列表">
						<el-table class="ddlb" :data="ddlb" height="300" border style="width: 100%"  @header-click="headerc">

							<el-table-column prop="BillID" label="单据编号" width="120">
								<el-table-column prop="BillID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="CusName" label="单位名称" width="120">
								<el-table-column prop="CusName" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Line" label="路线" width="120">
								<el-table-column prop="Line" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Remarks" label="备注" width="120">
								<el-table-column prop="Remarks" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
						</el-table>
					</el-tab-pane>
						<!--表格5-->
					<el-tab-pane label="单据仓位明细">
						<el-table class="ddcwmx" :data="ddcwmx" height="300" border style="width: 100%"  @header-click="headerc">
							<el-table-column prop="PlanID" label="拣货计划单号" width="120">
								<el-table-column prop="PlanID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="BillID" label="单据编号" width="120">
								<el-table-column prop="BillID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProCode" label="商品编号" width="120">
								<el-table-column prop="ProCode" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="BillEntryID" label="单据序号" width="120">
								<el-table-column prop="BillEntryID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProName" label="商品名称" width="120">
								<el-table-column prop="ProName" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProModel" label="规格型号" width="120">
								<el-table-column prop="ProModel" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Unit" label="基本单位" width="120">
								<el-table-column prop="Unit" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SupUnit" label="辅助单位" width="120">
								<el-table-column prop="SupUnit" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ConvRate" label="换算率" width="120">
								<el-table-column prop="ConvRate" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OrderNum" label="订单数量" width="150">
								<el-table-column prop="OrderNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OrderSupNum" label="订单辅助数量" width="150">
								<el-table-column prop="OrderSupNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Batch" label="批次" width="120">
								<el-table-column prop="Batch" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProductionDate" label="生产日期" width="120">
								<el-table-column prop="ProductionDate" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="EffectiveDate" label="有效期至" width="120">
								<el-table-column prop="EffectiveDate" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Account1" label="托盘" width="120">
								<el-table-column prop="Account1" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="StockName" label="仓位名称" width="120">
								<el-table-column prop="StockName" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Num" label="实际应拣数量" width="120">
								<el-table-column prop="Num" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SupNum" label="实际应拣辅助数量" width="120">
								<el-table-column prop="SupNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickNum" label="已拣基本数量" width="150">
								<el-table-column prop="PickNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OriginalNum" label="应拣数量" width="150">
								<el-table-column prop="OriginalNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OriginalSupNum" label="应拣辅助数量" width="150">
								<el-table-column prop="OriginalSupNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickSupNum" label="已拣辅助数量" width="150">
								<el-table-column prop="PickSupNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OrderRemarks" label="订单备注" width="150">
								<el-table-column prop="OrderRemarks" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="EffectiveMark" label="有效标志" width="150">
								<el-table-column prop="EffectiveMark" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Mark" label="整/散" width="150">
								<el-table-column prop="Mark" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
						</el-table>
					</el-tab-pane>
						<!--表格6-->
					<el-tab-pane label="子计划单列表">
						<el-table class="zjhdlb" :data="zjhdlb" height="300" border style="width: 100%"  @header-click="headerc">
							<el-table-column prop="PlanID" label="拣货计划单号" width="120">
								<el-table-column prop="PlanID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SonPlanID" label="子计划单号" width="120">
								<el-table-column prop="SonPlanID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="TotalQty" label="总数量" width="120">
								<el-table-column prop="TotalQty" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickQty" label="已拣数量" width="120">
								<el-table-column prop="PickQty" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Status" label="状态" width="120">
								<el-table-column prop="Status" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProCode" label="商品编号" width="120">
								<el-table-column prop="ProCode" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProName" label="商品名称" width="120">
								<el-table-column prop="ProName" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="UserNameList" label="锁定人" width="120">
								<el-table-column prop="UserNameList" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
						</el-table>
					</el-tab-pane>
						<!--表格7-->
					<el-tab-pane label="播种情况表">
						<el-table class="bzqkb" :data="bzqkb" height="300" border style="width: 100%"  @header-click="headerc">
							<el-table-column prop="PlanID" label="拣货计划单号" width="120">
								<el-table-column prop="PlanID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="BillID" label="单据编号" width="120">
								<el-table-column prop="BillID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProCode" label="商品编号" width="120">
								<el-table-column prop="ProCode" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="BillEntryID" label="单据序号" width="120">
								<el-table-column prop="BillEntryID" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProName" label="商品名称" width="120">
								<el-table-column prop="ProName" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ProModel" label="规格型号" width="120">
								<el-table-column prop="ProModel" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Unit" label="基本单位" width="120">
								<el-table-column prop="Unit" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SupUnit" label="辅助单位" width="120">
								<el-table-column prop="SupUnit" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="ConvRate" label="换算率" width="120">
								<el-table-column prop="ConvRate" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Num" label="实际应拣数量" width="150">
								<el-table-column prop="Num" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SupNum" label="实际应拣辅助数量" width="150">
								<el-table-column prop="SupNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickNum" label="已拣基本数量" width="120">
								<el-table-column prop="PickNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="PickSupNum" label="已拣辅助数量" width="120">
								<el-table-column prop="PickSupNum" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SowNum" label="播种基本数量" width="150">
								<el-table-column prop="SowNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="SowSupNum" label="播种辅助数量" width="150">
								<el-table-column prop="SowSupNum" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Batch" label="批次" width="120">
								<el-table-column prop="Batch" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="CusCode" label="客户编号" width="120">
								<el-table-column prop="CusCode" label="" width="120" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="CusName" label="客户名称" width="150">
								<el-table-column prop="CusName" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Line" label="路线" width="150">
								<el-table-column prop="Line" label="" width="150" class-name="mohucha">
								</el-table-column>
							</el-table-column>
						</el-table>
					</el-tab-pane>
				</el-tabs>
			</div>
			<!--表格完-->
			<!--条件查询结束-->
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'fymxbb',
		data() {
			return {
				bzqkb:[],//播种情况表
				zjhdlb:[],//子计划单列表
				ddcwmx:[],//单据他们明细
				ddlb:[],//单据列表
				jhzymx:[],//拣货指引明细
				dddymx:[],//单据对应明细
				jhhz:[],//拣货汇总

				jhdh:'',//拣货单号
				djrq:'',//单据日期
				zdr:'',//制单人
				yq:'',//园区
				fpry:'',//分配人员
			}
		},
		mounted: function() {
			var that = this;
			var getInfo = window.localStorage.getItem("ckdataPlanID");
			that.jhdh = getInfo;//存放单据
			// 获取数据
			that.lookList(getInfo);
		},
		methods: {
			// 查看
			lookList (planID){
				var jsons = {
					PlanID: planID,//	作业单号	string
				}
				// debugger;
				var that = this;
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.PDAModule.PickPlan.Look",
						// test:'test'
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						console.log(data);
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
            console.log(data)
						that.djrq = data[0].Date; //日期
						that.zdr = data[0].Poster; //制单人
						that.yq = data[0].ParkNameList; //园区
						that.fpry = data[0].UserNameList; //分配人员

						that.bzqkb = data[0].Sow;//播种情况表
						that.zjhdlb = data[0].SonPlan;//子计划单列表
						that.ddcwmx = data[0].BillStocks;//单据仓库明细
						
						that.jhzymx = data[0].GuidePro;//拣货指引明细
						that.dddymx = data[0].BillPro;//单据对应明细
						that.ddmx = data[0].BillPro;//单据明细
						that.jhhz = data[0].SumPro;//拣货汇总

						// 把拣货单号与商品单据放进
						if (that.jhhz.length > 0) {
							that.jhhz.forEach((item,index)=>{
								that.$set(that.jhhz[index],"PlanID",that.jhdh);//拣货汇总
							});
						}
						if (that.dddymx.length > 0) {
							that.dddymx.forEach((item,index)=>{
								that.$set(that.dddymx[index],"PlanID",that.jhdh);//单据明细
							});
						}
						// if (that.jhzymx.length > 0) {
						// 	that.jhzymx.forEach((item,index)=>{
						// 		that.$set(that.jhzymx[index],"PlanID",that.jhdh);//拣货指引明细
						// 	});
						// }
						// if (that.ddlb.length > 0) {
						// 	that.ddlb.forEach((item,index)=>{
						// 		that.$set(that.ddlb[index],"PlanID",that.jhdh); //单据列表
						// 	});
						// }
						// if (that.ddcwmx.length > 0) {
						// 	that.ddcwmx.forEach((item,index)=>{
						// 		that.$set(that.ddcwmx[index],"PlanID",that.jhdh);//单据仓库明细
						// 	});
						// }
						// if (that.zjhdlb.length > 0) {
						// 	that.zjhdlb.forEach((item,index)=>{
						// 		that.$set(that.zjhdlb[index],"PlanID",that.jhdh);//子计划单列表
						// 	});
						// }
						// if (that.bzqkb.length > 0) {
						// 	that.bzqkb.forEach((item,index)=>{
						// 		that.$set(that.bzqkb[index],"PlanID",that.jhdh); //播种情况
						// 	});
						// }
					}
				})
			},
			// 模糊查
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
			closetag: function() {
				$(".is-active .el-icon-close").click();
			},
		}
	}
</script>