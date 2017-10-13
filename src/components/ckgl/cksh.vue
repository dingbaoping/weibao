<template>
	<div class='cksh'>
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox sh" @click='auditOrder'><span>审核</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox plsh" @click='BatchAuditOrder'><span>批量审核</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox th"><span>提货（预览）</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox th"><span>提货</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox th"><span>小票（预览）</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox th"><span>小票</span></div>
					</div><span class="gun"></span></li>

				<li>
					<div class="boxtab">
						<div class="curbox ctys">
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
					</div><span class="gun"></span></li>
			</ul>
		</div>
		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="zdrq" placeholder="" class='zdrq input_width'>
								<el-option v-for="item in zdrqlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->
					<el-col :span="3">
						<div class="grid-content ">
							<div class="">
								<el-date-picker v-model="ksrq" id="ksrq" align="right" type="date" placeholder="选择日期">
								</el-date-picker>
							</div>
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<p>至</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<div class="">
								<el-date-picker v-model="jsrq" id='jsrq' align="right" type="date" placeholder="选择日期">
								</el-date-picker>
							</div>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>审核标志:</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-select v-model="shbz" placeholder="" class=" shbz input_width">
								<el-option v-for="item in shbzs" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>合作方* :</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
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
					<el-col :span="2">
						<div class="grid-content ">

							<p>配送中心* :</p>

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
							<el-select v-model="yuanqu" placeholder="" no-data-text="无数据" class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content djbj">

							<p>出库单号:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content djbj">

							<el-input class="inline-input djbh input_width" size="small" placeholder="" v-model="ckdh">
							</el-input>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content djbj ">

							<p>运输确认:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content djbj input_width">

							<el-select v-model="ysqr" placeholder="" class=" shbz input_width">
								<el-option v-for="item in ysqrlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-button type="primary" class='cx' @click='search'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							<el-button type="primary" class='closetag' @click='closetag'><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<!--搜索框完-->
		<!--表格-->
		<div class="table">
			<el-table :data="tableData3" height="600" border style="width: 100%" highlight-current-row @row-click="rowClick" @cell-click='tbclick' @cell-dblclick="dbrow" @selection-change='collectInfo' @header-click="headerc">
				<el-table-column type='selection' prop="" label="选定框" width="50">
					<el-table-column type='selection' prop="" label="选定框" width="50">

					</el-table-column>
				</el-table-column>
				<el-table-column prop="CheckMark" label="审核标志" width="60">
					<el-table-column prop="CheckMark" label="" width="60" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SubmitStatus" label="提交状态" width="100">
					<el-table-column prop="SubmitStatus" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OutID" sortable label="单据编号" width="180">
					<el-table-column prop="OutID" label="" width="180" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Type" label="出库类型" width="100">
					<el-table-column prop="Type" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OutDate" label="出库日期" width="120">
					<el-table-column prop="OutDate" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CusName" label="客户名称" width="120">
					<el-table-column prop="CusName" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CusCode" label="客户编号" width="120">
					<el-table-column prop="CusCode" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Num" label="基本数量合计" sortable width="120">
					<el-table-column prop="Num" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Total" label="单据金额" sortable width="100">
					<el-table-column prop="Total" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SalesMan" label="业务员" width="90">
					<el-table-column prop="SalesMan" label="" width="90" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Delivery" label="交货方式" width="90">
					<el-table-column prop="Delivery" label="" width="90" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="NeedDeliveryDate" label="需配送时间" sortable width="180">
					<el-table-column prop="NeedDeliveryDate" label="" width="180" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeliveryDate" label="实际配送时间" sortable width="180">
					<el-table-column prop="DeliveryDate" label="" width="180" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="PickCurrentStep" label="当前节点" width="80">
					<el-table-column prop="PickCurrentStep" label="" width="80" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="PickFinalStep" label="最终节点" width="80">
					<el-table-column prop="PickFinalStep" label="" width="80" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SendStatus" label="单据状态" width="100">
					<el-table-column prop="SendStatus" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SignDate" label="签收日期" width="120">
					<el-table-column prop="SignDate" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeliveryAddress" label="交货地址" width="180">
					<el-table-column prop="DeliveryAddress" label="" width="180" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OrderID" label="订单号" width="160">
					<el-table-column prop="OrderID" label="" width="160" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="PrintNum" label="打印次数" width="80">
					<el-table-column prop="PrintNum" label="" width="80" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Remarks" label="备注" width="100">
					<el-table-column prop="Remarks" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Poster" label="制单人" width="100">
					<el-table-column prop="Poster" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Checker" label="审核人" width="100">
					<el-table-column prop="Checker" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CheckDate" label="审核日期" width="120">
					<el-table-column prop="CheckDate" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="PrintNum" label="打印次数" width="90">
					<el-table-column prop="PrintNum" label="" width="90" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ParName" label="合作方" width="100">
					<el-table-column prop="ParName" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="BillNum" label="源单号" width="100">
					<el-table-column prop="BillNum" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Volume" label="体积" width="100">
					<el-table-column prop="Volume" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Weight" label="重量" width="100">
					<el-table-column prop="Weight" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SupportNum" label="辅助数量合计" width="120">
					<el-table-column prop="SupportNum" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ResponsibleParty" label="责任界定" width="120">
					<el-table-column prop="ResponsibleParty" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="BackReason" label="退货原因" width="120">
					<el-table-column prop="BackReason" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="BackDescription" label="退货说明" width="120">
					<el-table-column prop="BackDescription" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="IsJM" label="是否收现" width="120">
					<el-table-column prop="IsJM" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="PickPlanID" label="拣货计划单号" width="140">
					<el-table-column prop="PickPlanID" label="" width="140" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Level" label="单据级别" width="120">
					<el-table-column prop="Level" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SendDistance" label="配送距离" width="120">
					<el-table-column prop="SendDistance" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>

				<el-table-column prop="DCName" label="配送中心" width="120">
					<el-table-column prop="DCName" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CreateDate" label="制单日期" width="120">
					<el-table-column prop="CreateDate" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ParkName" label="园区" width="100">
					<el-table-column prop="ParkName" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeptName" label="部门" width="100">
					<el-table-column prop="DeptName" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Transport" label="运输方式" width="120">
					<el-table-column prop="Transport" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OutNum" label="包装件数" width="120">
					<el-table-column prop="OutNum" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="TransCheck" label="运输方式审核状态" width="160">
					<el-table-column prop="TransCheck" label="" width="160" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeliveryCost" label="运费" width="100">
					<el-table-column prop="DeliveryCost" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="FirstPrinter" label="首次打印人" sortable width="100">
					<el-table-column prop="FirstPrinter" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="FirstPrintDate" label="首次打印日期" width="140">
					<el-table-column prop="FirstPrintDate" label="" width="140" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ShopReceiptPrintNum" label="小票打印次数" width="140">
					<el-table-column prop="ShopReceiptPrintNum" label="" width="140" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OnlinePay" label="网上支付" width="120">
					<el-table-column prop="OnlinePay" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OriginalOutID" label="原出库单号" width="140">
					<el-table-column prop="OriginalOutID" label="" width="140" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CBOrderNo" label="托运订单号" width="140">
					<el-table-column prop="CBOrderNo" label="" width="140" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="HandlingTeamName" label="装卸队" width="100">
					<el-table-column prop="HandlingTeamName" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeliveryPerson" label="收货人" width="100">
					<el-table-column prop="DeliveryPerson" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CBSyn" label="转入" width="100">
					<el-table-column prop="CBSyn" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ReviewArea" label="复核区" width="100">
					<el-table-column prop="ReviewArea" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CusAreaName" label="客户区域" width="120">
					<el-table-column prop="CusAreaName" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Line" label="配送路线" width="120">
					<el-table-column prop="Line" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="BoxQty" label="整件数" width="100">
					<el-table-column prop="BoxQty" label="" width="100" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="HandlingStartDate" label="装卸开始时间" width="140">
					<el-table-column prop="HandlingStartDate" label="" width="140" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="HandlingEndDate" label="装卸结束时间" width="140">
					<el-table-column prop="HandlingEndDate" label="" width="140" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ForkliftWorker" label="叉车工" width="120">
					<el-table-column prop="ForkliftWorker" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Storeman" label="仓管员" width="120">
					<el-table-column prop="Storeman" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Driver" label="司机" width="120">
					<el-table-column prop="Driver" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="PlateNumber" label="车牌号" width="120">
					<el-table-column prop="PlateNumber" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DriverIDNumber" label="司机身份证" sortable width="160">
					<el-table-column prop="DriverIDNumber" label="" width="160" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DriverPhone" label="司机电话" sortable width="160">
					<el-table-column prop="DriverPhone" label="" width="160" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="LoadAndUnLoadWeight" label="装卸量" sortable width="120">
					<el-table-column prop="LoadAndUnLoadWeight" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CarryWeight" label="搬运量" sortable width="120">
					<el-table-column prop="CarryWeight" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="WorkloadRemarks" label="作业备注" sortable width="120">
					<el-table-column prop="WorkloadRemarks" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SendMark" label="订单状态" sortable width="120">
					<el-table-column prop="SendMark" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="MoneyMark" label="结算状态" sortable width="120">
					<el-table-column prop="MoneyMark" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="TransportCmpName" label="承运公司" sortable width="120">
					<el-table-column prop="TransportCmpName" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OnlinePay" label="网上支付" sortable width="120">
					<el-table-column prop="OnlinePay" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ResponsibleParty" label="责任界定" sortable width="120">
					<el-table-column prop="ResponsibleParty" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="BackReason" label="退货原因" sortable width="120">
					<el-table-column prop="BackReason" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="BackDescription" label="退货说明" sortable width="120">
					<el-table-column prop="BackDescription" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OriginalOutID" label="出库源单号" sortable width="120">
					<el-table-column prop="OriginalOutID" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CreateWay" label="创建方式" sortable width="120">
					<el-table-column prop="CreateWay" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CloseOperator" label="关闭人" sortable width="120">
					<el-table-column prop="CloseOperator" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CloseOperatorDate" label="关闭时间" sortable width="120">
					<el-table-column prop="CloseOperatorDate" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CloseReason" label="关闭理由" sortable width="120">
					<el-table-column prop="CloseReason" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CBOrderNo" label="托运订单号" sortable width="120">
					<el-table-column prop="CBOrderNo" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CBNo" label="托运单号" sortable width="120">
					<el-table-column prop="CBNo" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="TranType" label="单据类型" sortable width="120">
					<el-table-column prop="TranType" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeliveryPerson" label="收货人" sortable width="120">
					<el-table-column prop="DeliveryPerson" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ContactMobile" label="收货人联系电话" sortable width="120">
					<el-table-column prop="ContactMobile" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CBSyn" label="转入" sortable width="120">
					<el-table-column prop="CBSyn" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CusAreaName" label="客户区域" sortable width="120">
					<el-table-column prop="CusAreaName" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Payment" label="商城支付方式" sortable width="120">
					<el-table-column prop="Payment" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>

				<el-table-column prop="Property1" label="自定义1" sortable width="120">
					<el-table-column prop="Property1" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Property2" label="自定义2" sortable width="120">
					<el-table-column prop="Property2" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>

				<el-table-column prop="Property3" label="自定义3" sortable width="120">
					<el-table-column prop="Property3" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Property4" label="自定义4" sortable width="120">
					<el-table-column prop="Property4" label="" width="120" class-name="mohucha">
					</el-table-column>
				</el-table-column>
			</el-table>
		</div>
		<div class='tongji'>
			<el-tag class='tag1'>共<span>{{tableData3.length}}</span>条</el-tag>
			<el-tag class='tag2'>基本数量合计:<span>{{ NumTotal  }}</span></el-tag>
			<el-tag class='tag3'>辅助数量合计:<span>{{ SupNumTotal }}</span></el-tag>
		</div>

		<!--弹出框-->

		<el-dialog style="text-align:center" title="提示信息" :visible.sync="shcg_Click" size="tiny" :before-close="handleClose" class='bccg'>
			<!-- <span slot="footer" class="dialog-footer"> -->
			<!-- 保存信息 -->
			<p>单据审核成功!</p>
			<el-button type="primary" style="" class='dialog_ok' @click.native="shcg_Click = false">确 定</el-button>
			<!-- </span> -->
		</el-dialog>

		<el-dialog style="text-align:center" title="提示信息" :visible.sync="shsb_Click" size="tiny" :before-close="handleClose" class='bcsb'>
			<!-- <span slot="footer" class="dialog-footer"> -->
			<!-- 保存信息 -->
			<p>单据审核失败! {{ infoHint }}</p>
			<el-button type="primary" style="" class='dialog_ok' @click.native="shsb_Click = false">确 定</el-button>
			<!-- </span> -->
		</el-dialog>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				formStacked: {
					name: '',
					region: '',
					type: ''
				},

				pszx: false, //配送中心禁选
				shcg_Click: false, //审核表
				shsb_Click: false, //审核表
				peisong: '',
				NumTotal: '0.00',
				SupNumTotal: '0.00',
				yuanqu: '全部', // 园区
				yqlist: [],
				zdrqlist: [ // 制单日期状态

					{
						value: 1,
						label: '出库日期'
					},
					{
						value: 2,
						label: '需配送时间'
					},
					{
						value: 3,
						label: '实际配送时间'
					},
					{
						value: 4,
						label: '审核日期'
					},
					{
						value: 5,
						label: '制单日期'
					},
					{
						value: 6,
						label: '签收日期'
					}

				],
				shbzs: [ // 审核标志
					{
						value: 2,
						label: '全部'
					},
					{
						value: 1,
						label: '已审核'
					},
					{
						value: 0,
						label: '未审核'
					}
				],
				StorageID: '',
				ysqr: '1',
				ysqrlist: [{
						value: '1',
						label: '全部'
					},
					{
						value: '2',
						label: '已审核'
					},
					{
						value: '3',
						label: '未审核'
					}
				],
				djbh: '',
				zdrq: 1, // 选择日期状态
				ksrq: '', // 开始日期
				jsrq: '', // 结束日期
				hzf: '0', // 合作方
				shbz: 2, // 审核标志
				tableData3: [],
				formInline: [],
				activeName: '',
				cities: [],
				options: [{
				}],
				backUpArr: [],
				ckdh: '', //出库单号
				OutID: '',
				OutIDCollection: [],
				infoHint: '', // 提示信息
			};
		},
		mounted: function() {
			var that = this;
			//订单日期的默认值
			var myDate = new Date();
			var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
			var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			var d = myDate.getDate(); //获取当前日(1-31)
			var today = y + "-" + m + "-" + d;
			that.ksrq = today;
			that.jsrq = today;

			that.getdclist();
			//			默认选择

		},

		methods: {
			// 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
        if (index >= 0) {
					return
				}
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
						//						console.log(thv);
						if(thv != undefined && thv != "") {
							that.mohucha(thv, idx, $table);
						}

					});

				});
			},
			onSubmit() {
				console.log('submit!');
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
				var jsons = {
					UserID: window.userid,
					DCID: psid,

				}

				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.BaseInfo.Stock.GetParkList_All",
					
					},
					timeout: 5000, //超时时间
					success: function(data) {
						console.log(data);
						console.log(jsons);

						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.yqlist = data;
						that.yuanqu = data[0].ParkID;
					}
				})

			},
			// 获取合作方
			gethzflist(psid) {
				var that = this;
				var jsons= {
					UserID: window.userid,
					DCID: psid
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.BaseInfo.Partner.GetListInDC_All",
					
					},
					timeout: 5000, //超时时间
					success: function(data) {
						console.log(data);
						console.log(jsons);

						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.options = data;
						that.backUpArr = data;
						that.hzf = data[0].InterID;
					}
				})
			},
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
				that.gethzflist(that.peisong);
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			},
			handleClick() {

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
			search() {

				var that = this;

				var ksrq = $("#ksrq input").val();
				var jsrq = $("#jsrq input").val();
				that.tableData3 = [];

				var jsons = {
					UserID: userid,
					StartDate: ksrq,
					EndDate: jsrq,
					Check: 0, //审核标志,未审核
					ParID: that.hzf,
					Type: 2,
					DateType: that.zdrq,
					DCID: that.peisong,
					OutID: that.ckdh,
					ParkID: that.yuanqu,

				}

				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.OutModule.Out.GetList",
						// test: 'test'
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {

						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);

						
            for( let i = 0; i < datas.Data.length; i++) {
							if (datas.Data[i].IsJM == '1') {
								datas.Data[i].IsJM = "是"
							} else {
								datas.Data[i].IsJM = "否"
							}
						}
						that.tableData3 = datas.Data;
						that.getTotal(datas.Data);

					}
				})
			},
			getTotal(data) {
        var NumTotal = 0,
				    SupNumTotal = 0;
				for(let i = 0; i < data.length; i++) {
					NumTotal += parseFloat(data[i].Num);
					SupNumTotal += parseFloat(data[i].SupportNum);
				}
				this.NumTotal = NumTotal.toFixed(2);
				this.SupNumTotal = SupNumTotal.toFixed(6);
			},
			// 表格单击事件
			rowClick(row, event, column) {
				// 获取单据编号
				this.OutID = row.OutID;

			},
			tbclick(row, column, cell, event) {
				var jname = column.property;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				this.lookShopNum = index;
				this.lookShopCell = cell;
				this.enterFlag = jname;
				//单击表格增加颜色
				if(jname == "Price" || jname == "Num" || jname == "SupNum" || jname == "SupPrice" || jname == "Remarks" || jname == "Code") {

					$(".danjixz").removeClass("danjixz");

					$(cell).addClass("danjixz");
				}
				if(jname == "Remarks") {
					// console.log('回车换行')
					// 设置回车状态为备注
					this.enterFlag = "Remarks";
				}
				// 如果是编码
				if(jname == 'Code') {
					this.enterFlag = 'Code';
					// csole.log("22" + $(event.target))
					this.dbHandle(row, column, cell, event); //设置单元格input编辑
				}
			},

			auditOrder() {
				var that = this;
				var jsons = {
					UserID: userid,
					UserName: userName,
					OutID: that.OutID,
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.OutModule.Out.Audit",
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var data = eval('(' + data + ')');
						console.log('审核', data)
						// 如果审核成功
						if(data.StateCode == 100) {
							that.search();
							that.shcg_Click = true;
						} else {
							that.shsb_Click = true;
							that.infoHint = data.Message
						}
					}
				})
			},
			handleClose() {

			},

			//			信息收集
			collectInfo(val) {
				var that = this;
				console.log('需要的信息', val);
				that.OutIDCollection = [];
				for(var i = 0; i < val.length; i++) {
					that.OutIDCollection.push(val[i].OutID);

				}
				console.log(that.OutIDCollection);

			},
			//			批量审核
			BatchAuditOrder() {
				var that = this;
				for(var i = 0; i < that.OutIDCollection.length; i++) {

					var jsons = {
						UserID: userid,
						UserName: userName,
						OutID: that.OutIDCollection[i],
					}

					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.OutModule.Out.Audit",
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var data = eval('(' + data + ')');
							console.log('审核', data)
							if(data.StateCode == 100) {
								that.search();
								that.shcg_Click = true;
							} else {
								that.shsb_Click = true;
								that.infoHint = data.Message
							}

						}
					})

				}
				// 如果审核成功

			}

		}
	}
</script>

<style>
	/*@import url("../../../common/css/cksh/cksh.css");*/
	
	.el-row {
		margin-bottom: 10px;
		margin-top: 5px;
		padding: 0 5px;
	}
	
	.cksh .el-date-editor.el-input {
		width: 100%;
	}
	
	.tongji {
		text-align: center;
		margin-top: 5px;
	}
	
	.cksh .grid-content p {
		min-width: 70px;
		text-align: center;
	}
	
	.cksh .cx {
		margin-left: 30px;
	}
	
	.el-table__body td.danjixz {
		background: #d9def3;
	}
	.th{
		background: url(../../../common/img/rk/ckjh.png) no-repeat 5px ;
		background-size: 20px 20px;
	}
</style>