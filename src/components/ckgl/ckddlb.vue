<template>
	<div class='ckddlb'>
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<router-link to="ckdd" >
							<div class="curbox xz">新增</div>
							<span style="display: none">出库订单</span>
						</router-link>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<router-link to="ckddxg">
							<div class="curbox xg">修改</div>
							<span style="display: none">订单修改</span>
						</router-link>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<router-link to="ckddck" class="watch">
						  <div class="curbox ck">查看</div>
						  <span style="display: none">出库订单查看</span>
						</router-link>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sc" @click="delect"><span>删除</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dc" ><span>导出</span></div>
					</div><span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dy"><span>打印</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox yl"><span>预览</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dy"><span>打印2</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox yl"><span>预览2</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dy"><span>打印(退货)</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox yl"><span>预览(退货)</span></div>
					</div><span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sh" @click="auditOrder"><span>审核</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox plsh" @click="submitOrder"><span>提交</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox bz" @click="remarksClick"><span>备注</span></div>
					</div><span class="gun"></span>
				</li>				
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<!-- <span>窗体样式</span> -->
							<el-dropdown split-button>
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
		<!-- 这里是导航栏部分结束 -->

		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" v-model="zdrq" class="demo-form-inline form1">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="zdrq" placeholder="出库日期" class='zdrq input_width'>
								<el-option v-for="item in zdrqlist" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->

					<el-col :span="3">
						<div class="grid-content ">
							<!-- 开始日期 -->
							<div class=" blueborder input_width">
								<el-date-picker v-model="ksrq" id="ksrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1" class='input_width'>
								</el-date-picker>
							</div>
							<!-- 开始日期end -->
						</div>
					</el-col>
					
					<el-col :span="2">
						<div class="grid-content zhi">
							<p >至</p>
						</div>		
					</el-col>
					<el-col :span="3">
						<div class="grid-content zhi">
							<!-- 结束日期 -->
							<div class=" blueborder input_width">
								<el-date-picker v-model="jsrq" id="jsrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1" class='input_width'>
								</el-date-picker>
							</div>
							<!-- 结束日期end -->
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
							<el-select v-model="hzf" @change="gethzfID" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
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
							<el-select v-model="shbz" placeholder="" class="input_width shbz">
								<el-option v-for="item in shbzlist" :label="item.label" :key="item.value" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					
				
					
				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :span="2" >
						<div class="grid-content ">

							<p>配送中心*:</p>
							

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content pszx-w" >

							<!-- 配送中心列表 -->
							<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
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
						<div class="grid-content yqbj yq-w">

							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="23132"   class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span> 
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>出库单号:</p>							
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-input class=" input_width " size="small" placeholder="" v-model="djbh">
							</el-input>
						</div>
					</el-col>
					<el-col :span="4" :offset="2" >
            <div class="grid-content ">
              <el-button type="primary" @click="search" class='cx'><i class='el-icon-search'></i>查询</el-button>
              <el-button type="primary" class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
              </div>
          </el-col>
        
				</el-row>
			</el-form>
		</div>

		<!--搜索框完-->
		<!--表格-->
		<div class="table">
		<el-table :data="splbs" @row-click="rowClick" @cell-dblclick="dbrow" @header-click="headerc" highlight-current-row height="590" border style="width: 100%">
			<el-table-column type='selection'  prop="" label="选定框" width="50">
			  <el-table-column  type="index" label="0" width="auto">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CloseMark" label="关闭标志" width="160">
			  <el-table-column  prop="CloseMark" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CheckMark" label="审核标志" width="140">
			  <el-table-column  prop="CheckMark" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="OutID" label="单据编号" width="110">
			  <el-table-column  prop="OutID" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Type" label="出库类型" width="120">
			  <el-table-column  prop="Type" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="OutDate" label="订单日期" width="140">
			  <el-table-column  prop="OutDate" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CusCode" label="客户编号" width="140">
			  <el-table-column  prop="CusCode" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CusName" label="客户名称" width="100">
			  <el-table-column  prop="CusName" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Total" label="单据金额" width="100">
			  <el-table-column  prop="Total" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="SalesMan" label="业务员" width="100">
			  <el-table-column  prop="SalesMan" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="BillNum" label="源单号" width="100">
			  <el-table-column  prop="BillNum" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Delivery" label="交货方式" width="120">
			  <el-table-column  prop="Delivery" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="NeedDeliveryDate" label="需配送时间" width="120">
			  <el-table-column  prop="NeedDeliveryDate" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="DeliveryDate" label="实际配送时间" width="100">
			  <el-table-column  prop="DeliveryDate" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="DeliveryAddress" label="交货地点" width="140">
			  <el-table-column  prop="DeliveryAddress" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Remarks" label="备注" width="140">
			  <el-table-column  prop="Remarks" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Poster" label="制单人" width="100">
			  <el-table-column  prop="Poster" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Checker" label="审核人" width="100">
			  <el-table-column  prop="Checker" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CheckDate" label="审核日期" width="100">
			  <el-table-column  prop="CheckDate" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="ParName" label="合作方" width="120">
			  <el-table-column  prop="ParName" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="SubmitStatus" label="提交状态" width="160">
			  <el-table-column  prop="SubmitStatus" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Volume" label="体积" width="140">
			  <el-table-column  prop="Volume" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Weight" label="重量" width="100">
			  <el-table-column  prop="Weight" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="PrintNum" label="打印次数" width="100">
			  <el-table-column  prop="PrintNum" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Num" label="基本数量合计" width="120">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="SupportNu" label="辅助数量合计" width="auto">
			  <el-table-column  prop="Num" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="IsJM" label="是否收现" width="auto">
			  <el-table-column  prop="IsJM" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="OMark" label="出库状态" width="auto">
			  <el-table-column  prop="OMark" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="" label="配送金额" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Level" label="单据级别" width="auto">
			  <el-table-column  prop="Level" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="SendDistance" label="配送距离" width="auto">
			  <el-table-column  prop="SendDistance" label="" width="auto" class-name="mohucha">
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
			<el-table-column prop="DeliveryCost" label="运费" width="auto">
			  <el-table-column  prop="DeliveryCost" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="SendMark" label="订单状态" width="auto">
			  <el-table-column  prop="SendMark" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="MoneyMark" label="结算状态" width="auto">
			  <el-table-column  prop="MoneyMark" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="OnlinePay" label="网上支付" width="auto">
			  <el-table-column  prop="OnlinePay" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="ResponsibleParty" label="责任界定" width="auto">
			  <el-table-column  prop="ResponsibleParty" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="BackReason" label="退货原因" width="auto">
			  <el-table-column  prop="BackReason" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="BackDescription" label="退货说明" width="auto">
			  <el-table-column  prop="BackDescription" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="TransportCmpName" label="承运公司" width="auto">
			  <el-table-column  prop="TransportCmpName" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CreateWay" label="创建方式" width="auto">
			  <el-table-column  prop="CreateWay" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="OriginalOutID" label="出库源单号" width="auto">
			  <el-table-column  prop="OriginalOutID" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CloseReason" label="关闭理由" width="auto">
			  <el-table-column  prop="CloseReason" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CBOrderNo" label="托运订单号" width="auto">
			  <el-table-column  prop="CBOrderNo" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CBNo" label="托运单号" width="auto">
			  <el-table-column  prop="CBNo" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CloseOperator" label="关闭人" width="auto">
			  <el-table-column  prop="CloseOperator" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CloseOperatorDate" label="关闭时间" width="auto">
			  <el-table-column  prop="CloseOperatorDate" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="TranType" label="单据类型" width="auto">
			  <el-table-column  prop="TranType" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="" label="结算金额" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="DeliveryPerson" label="收货人" width="auto">
			  <el-table-column  prop="DeliveryPerson" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="ContactMobile" label="收货人联系电话" width="auto">
			  <el-table-column  prop="ContactMobile" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="CusAreaName" label="客户区域" width="auto">
			  <el-table-column  prop="CusAreaName" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Line" label="配送路线" width="auto">
			  <el-table-column  prop="Line" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="Payment" label="商城支付方式" width="auto">
			  <el-table-column  prop="Payment" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
		</el-table>
		</div>

		<!-- 删除确认-->
		<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="sfsc_Click" size="tiny">
			<span class="dialog-footer">
			<p>{{infoHint}}</p>
			<el-button type="primary"  @click="isDelect" >确 定</el-button>
			<el-button @click="sfsc_Click = false">取 消</el-button>
			</span>
		</el-dialog>
	<!--删除确认 end -->

	<!-- 删除成功-->
	<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="sccg_Click" size="tiny">
		<span class="dialog-footer">
		  <p style="color: #82bc06">{{infoHint}}</p>
		  <el-button type="primary" style="margin-right: 0;" @click="sccg_Click=false" >确 定</el-button>
		</span>
	</el-dialog>
	<!--删除成功 end -->

	<!-- 删除失败-->
	<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="scsb_Click" size="tiny">
		<span class="dialog-footer">
		<p style="color: red;">{{ infoHint }} </p>
			<el-button type="primary" style="margin-right: 0;"  @click="scsb_Click=false" >确 定</el-button>
		</span>
	</el-dialog>
	<!--删除失败 end -->

	<!-- 设置备注-->
		<el-dialog title="设置备注" id="szbz" class="szbz" :visible.sync="szbz_Click" size="tiny">
			<div class="dialog-boddy">
				<el-row>
					<!-- 这里是空白栏 -->
					<el-col :span="4"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">入库订单:</div></el-col>
					<el-col :span="12"><div class="grid-content"><el-input disabled v-model="StorageID"></el-input></div></el-col>
				</el-row>
				<el-row>
					<!-- 这里是空白栏 -->
					<el-col :span="4"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">备注:</div></el-col>
					<el-col :span="12"><div class="grid-content"><el-input type="textarea" :rows="6" v-model="Remarks" ></el-input></div>
					</el-col>
				</el-row>
			</div>
				<el-row>
					<el-col :span="4"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">
				<el-button type="primary"  @click="setRemarks" >确 定</el-button>
					</div></el-col>
					<el-col :span="8"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">
				<el-button type="primary"  @click="szbz_Click=false" >取消</el-button>
						</div></el-col>
				</el-row>
			<!-- </p> -->
		</el-dialog>
		<!--设置备注 end -->


		<div class='tongji'>
			<el-tag class='tag1'>共<span>{{splbs.length}}</span>条</el-tag>
			<el-tag class='tag2'>单据金额<span> {{ DJJETotal }} </span></el-tag>
			<el-tag class='tag3'>体积<span>{{ VolumeTotal }}</span></el-tag>
			<el-tag class='tag4'>重量<span>{{ WeightTotal }}</span></el-tag>
			<el-tag class='tag5'>基本数量<span>{{ NumTotal }}</span></el-tag>
			<el-tag class='tag6'>辅助数量<span>{{ SupNumTotal }}</span></el-tag>
		</div>
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
				hzfID: '', //合作方id
				pszx: false, //配送中心禁选
				sfsc_Click: false,//是否删除
				sccg_Click: false,//删除成功
				scsb_Click: false,//删除失败
				szbz_Click: false, // 备注弹窗
				zdrq: '1', // 制单日期
				ksrq: '', //开始日期
				jsrq: '', //结束日期
				splbs:[],//存放商品列表
				tableData3: [],
				DJJETotal: '0.00', // 单据金额
				VolumeTotal: '0.0000', // 体积
				WeightTotal:'0.0000', // 重量
				NumTotal: '0.00', // 基本数量
				SupNumTotal: '0.0000', // 辅助数量
				peisong: '',
				yuanqu: '',
				StorageID: '', // ID信息
				Remarks: '', // 备注
				yqlist: [],
				infoHint:'',//弹窗提示信息
				cities: [],
				pickerOptions1: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				pickerOptions2: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				zdrqlist:[
					{ label:"订单日期", value: '1'},
					{ label:"需配送时间", value:'2'},
					{ label:"实际配送时间", value:'3'},
					{ label:"制单日期", value: '5'},
					{ label:"审核日期", value: '4'}
				],
				djbh:'',
				shbz: "2",
				shbzlist: [{
					label:"全部",
					value:"2"		
					},{
					label:"未审核",
					value:"0"		
					},{
					label:"已审核",
					value:"1"		}],
				rq1:'',
				rq2:'',
				hzf:'0',
				options: [ {
					Code:'0',
					Name: '全部'
				} ], // 合作方列表
				backUpArr: [], // 合作方列表备份
				tabledata3:[],
				formInline:[],
				activeName:'',
			};
		},
		mounted:function() {
				var that = this;
				// 行点击事件
				// that.rowClick();
			//$(".当前vue文件的最外层div的calss名 a")
			$(".ckddlb a").click(function() {
				var $this = $(this);
				var txt = $("span", $this).html();
            
				var tabarr = that.$parent.editableTabs2;
				var indexof = -1;
				for(var i = 0; i < tabarr.length; i++) {
					// console.log(tabarr[i].title + "---" + txt);
					if(tabarr[i].title == txt) {
						indexof = tabarr[i].name;
					}
				}
				if(indexof == -1) {
					let newTabName = ++that.$parent.tabIndex + '';
					var cont = $this.attr("href");
					cont = cont.substring(2, cont.length);
					that.$parent.editableTabs2.push({
						title: txt,
						name: newTabName,
						content: cont
					});
					that.$parent.editableTabsValue2 = newTabName;
				} else {
					that.$parent.editableTabsValue2 = indexof;
				}
			});
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
			$('.close').click(function(){
				$('.ddsp').hide();
				
				
			});
		
		},

		methods: {

		// 设置备注 
			remarksClick () {
				if (this.StorageID) {
					this.szbz_Click = true;
				} else {
					this.scsb_Click = true;
					this.infoHint = "请选择单据号"
				}
			},
			setRemarks () {
				this.szbz_Click = false; // 弹窗隐藏
				var that = this;
				var jsons = {
					UserID: userid,
					UserName: userName,
					Remarks: that.Remarks,
					OutID: that.StorageID,
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.OutModule.OutOrder.SetRemarks"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var data = eval('(' + data + ')');
						console.log('备注', data)
						if(data.StateCode == 100) {
							that.sccg_Click = true;
							that.infoHint = "备注设置成功"
						} 
						that.search();
					}
				})
			},
			// 删除商品
			isDelect () {
				if (this.StorageInfo.CheckMark === "Y") {
					console.log("2")
					this.sfsc_Click = false;
					this.scsb_Click = true;
					this.infoHint = "删除失败 ！单据已审核";
					return
				} else if(this.StorageInfo.SubmitStatus === "提交") {
					console.log("3")
					this.sfsc_Click = false;
          this.scsb_Click = true;
					this.infoHint = "删除失败 ！单据已提交";
					return
				} else {
					var that = this;
					that.sfsc_Click = false;
					var jsons = {
						UserID: userid,
						UserName:userName,
						StorageID: that.StorageInfo.OutID || that.splbs[0].OutID,
					}
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.OutModule.OutOrder.Delete" 
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var data = eval('(' + data + ')');
							console.log('删除',data)
							if(data.StateCode == 100) {
								that.sccg_Click = true;
								that.search();
								that.infoHint = "单据删除成功"
							} else {
							}
						}
					})
				}	
			},

			// 是否删除商品
			delect () {
				if(this.StorageInfo.OutID || this.splbs[0].OutID) {
					this.sfsc_Click = true;
					this.infoHint = '你真的要删除所选的单据吗?';
				}
				// console.log('delect:');
			},
			// 审核订单
			auditOrder() {
        var that = this;
				var jsons = {
					UserID: userid,
					UserName: userName,
					OutID: that.StorageInfo.OutID,
				}
				// debugger;
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.OutModule.OutOrder.Audit"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						 var result = JSON.parse(data)
						 if (result.StateCode == 100) {
               that.sccg_Click = true;
							 that.infoHint = "审核成功";
							 that.search();
						} else {
							 that.scsb_Click = true;
							 that.infoHint ="错误" + result.Message;
						}
					}
				})
			},
			// 提交 
			submitOrder () {
        var that = this;
				var jsons = {
					UserID: userid,
					UserName: userName,
					OutID: that.StorageInfo.OutID,
				}
				// debugger;
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.OutModule.OutOrder.Submit"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						 var result = JSON.parse(data)
						 if (result.StateCode == 100) {
               that.sccg_Click = true;
							 that.infoHint = "提交成功";
							 that.search();
						} else {
							 that.scsb_Click = true;
							 that.infoHint ="错误" + result.Message;
						}
					}
				})
			},
			// 拿到当前合作方ID
			gethzfID (val) {
				// console.log(val)
				// debugger;
				this.hzfID = val;
			},
			// 出库订单查询
			search () {
				var that = this;
				var jsons = {
					UserID: userid, //用户ID
					StartDate:$('#ksrq input').val(), //	起始日期
					EndDate:$('#jsrq input').val() ,//	截止日期
					Check: that.shbz, //	审核标志
					ParID: that.hzfID || 0, //	合作方ID
					Type: 1, //	查询类型1 列表2 待审核
					DateType: that.zdrq,//	查询日期类型
					DCID: that.peisong,//	配送中心ID
					OrderID: that.djbh,//	订单号
					ParkID: that.yuanqu,//	园区ID
				}

				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.OutModule.OutOrder.GetList",
						// test:"test"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						// console.log(data);
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						// console.log(686,data);
						that.splbs = data;
						that.getTotal(data);
					}
				})
			},
			getTotal (data) {
				var that = this,
				    DJJETotal = 0, // 单据金额
						VolumeTotal = 0, // 体积
						WeightTotal = 0, // 重量
						NumTotal = 0, // 基本数量
						SupNumTotal = 0; // 辅助数量
        for(let i = 0; i < data.length; i++) {
          DJJETotal += data[i].Total;
					VolumeTotal += data[i].Volume;
					WeightTotal += data[i].Weight;
					NumTotal += data[i].Num;
					SupNumTotal += data[i].SupportNum;
				}
				that.DJJETotal = DJJETotal;
				that.VolumeTotal = VolumeTotal;
				that.WeightTotal = WeightTotal;
				that.NumTotal = NumTotal;
				that.SupNumTotal = SupNumTotal;
			},
			// 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
				var that = this;
				 // 保存当前的订单号
				localStorage.setItem("ckddDataStorage", row.OutID);
				//跳转出库订单查看
				that.$router.replace({ path: '/ckddck'}) 
				// 定义标签的名字
				let txt = "出库订单查看"
				// 取得标签内容
				let tabarr = that.$parent.editableTabs2;
				// 定义一个是查看是否重复的信号量,
				var indexof = -1;
				tabarr.forEach((item,index)=>{
					if(item.title == txt) { // 6.如果当前标签存在,则加到信号量
						indexof = item.name;
					}
				})
				// 如果不存在
				if(indexof == -1) {
					// 设置name的值,把数字++然后转字符串,不让它重复,
					let newTabName = ++that.$parent.tabIndex + '';
					// 取得content内容 #/ckddck
					let cnt = $('.watch').attr("href")
					// 把前面的两个符号去掉 ckddck
					cnt = cnt.substring(2,cnt.length);
					// 新增一个添加
					that.$parent.editableTabs2.push({
						title: txt,
						name: newTabName,
						content: cnt
					});
					that.$parent.editableTabsValue2 = newTabName;
				} else {
					that.$parent.editableTabsValue2 = indexof;
				}
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
					$("tr",$table).show();//先全部展示出来
					$datath.each(function() {
						var $this = $(this);
						 
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						// console.log(thv);
						if(thv != undefined&&thv!="") {
							that.mohucha(thv, idx, $table);
						}
					});
				});
			},
			onSubmit() {
				// console.log('submit!');
			},
			// 获取配送中心列表
			getdclist: function() {
				var that = this;
				// console.log(that);
				that.baseAjax("getdclist", {
					UserID: window.userid
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.peisong = data[0].DCID; // 设置默认配送中心
					that.cities = data;
				});
			},

			// 获取园区 含全部
			getyuanqulist(psid) {
				var that = this;
			  var params = {
					UserID: window.userid,
					DCID: psid
				};
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
            that.yuanqu = data[0].ParkID;
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

			// 获取合作方 含全部
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
						that.options = data;
						that.backUpArr = data;
					}
				})
			},
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
			},
			// 表格单击事件
			rowClick (row, event, column){
				// 获取单据编号
				// console.log(row)
				this.StorageInfo = row;
				this.StorageID = row.OutID;
				localStorage.setItem("ckddDataStorage", row.OutID);
			},
				// 让CodeID  也成为搜索内容
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

<style>
	/*@import url("../../../common/css/ckddlb/ckddlb.css");*/
	.ckddlb .grid-content p {
		min-width: 60px;
		text-align: center;
	}	
	.el-row{
		margin-top: 5px;
		margin-bottom: 10px;
		margin:8px 5px;
	}
	.el-form{
		margin-top: 10px;
	}
	.el-input__inner{
		width: 100%;
	}
	.ckddlb .el-input__icon{
		top: 1px;
	}
	.ckddlb .zhi{
		margin-right: 10px;
		/*min-width: 100px!important;*/
		/*text-align: right!important;*/
	}
	.ckddlb{
		min-width: 1250px;
	}
	.ckddlb .searchnav{
		margin-bottom: 5px;
	}
	.ckddlb .el-date-editor.el-input {
		width: 100%;
	}
</style>