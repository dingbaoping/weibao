<template>
	<div class='ddsp'>
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox sh" @click='ClickSh'><span>审核</span></div>
					</div>
				</li>
			
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
		<!-- 这里是导航栏部分结束 -->
		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content">
							<el-select v-model="zdrq" placeholder="" class='zdrq input_width'>
								<el-option v-for="item in zdrqlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->
					<el-col :span="3" class="date-1">
						<div class="grid-content rq">
							<div class="">
								<el-date-picker id="ksrq" v-model="ksrq" align="right" type="date" placeholder="选择日期">
								</el-date-picker>
							</div>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>至 ：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content rq">
							<div class="">
								<el-date-picker id="jsrq" v-model="jsrq" align="right" type="date" placeholder="选择日期">
								</el-date-picker>
							</div>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>审核标志 ：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-select v-model="shbz" placeholder="" class=" input_width">
								<el-option v-for="item in shbzs" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>合作方* ：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-select v-model="hzf" @change="gethzfID" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
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
			<el-form :inline="true" v-model="formInline" class="demo-form-inline demo-form-inline-r">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<p>配送中心* ：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content">

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
					<el-col :span="3" class="">
						<div class="grid-content yqbj ">
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
							<p>单据编号 ：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content djbj">
							<el-input class="inline-input input_width" size="small" placeholder="" v-model="djbh">
							</el-input>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content ">
							<el-button type="primary" class='cx' @click="search"><i class='ico6'></i>查询</el-button>
							<el-button type="primary" class='close'><i class='ico7'></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<!--搜索框完-->
		<!--表格-->
		<div class="table">
			<el-table :data="tableData3" height="600" border @cell-dblclick="dbrow" @row-click="rowClick"  @selection-change="handleSelectionChange" highlight-current-row @header-click="headerc" style="width: 100%">
				<el-table-column type='selection' prop="" label="选定框" width="50">
					<el-table-column type='selection' prop="" label="选定框" width="50" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CloseMark" label="关闭标志" width="120">
					<el-table-column prop="CloseMark" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CheckMark" label="审核标志" width="120">
					<el-table-column prop="CheckMark" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OutID" label="单据编号" width="200">
					<el-table-column prop="OutID" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Type" label="出库类型" width="120">
					<el-table-column prop="Type" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OutDate" label="订单日期" width="110">
					<el-table-column prop="OutDate" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CusCode" label="客户编号" width="120">
					<el-table-column prop="CusCode" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CusName" label="客户名称" width="120">
					<el-table-column prop="CusName" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Total" label="单据金额" width="120">
					<el-table-column prop="Total" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SalesMan" label="业务员" width="120">
					<el-table-column prop="SalesMan" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="BillNum" label="源单号" width="120">
					<el-table-column prop="BillNum" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Delivery" label="交货方式" width="120">
					<el-table-column prop="Delivery" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="NeedDeliveryDate" label="需配送时间" width="120">
					<el-table-column prop="NeedDeliveryDate" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeliveryDate" label="实际配送时间" width="120">
					<el-table-column prop="DeliveryDate" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeliveryAddress" label="交货地点" width="120">
					<el-table-column prop="DeliveryAddress" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Remarks" label="备注" width="120">
					<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>

				<el-table-column prop="Poster" label="制单人" width="120">
					<el-table-column prop="Poster" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Checker" label="审核人" width="120">
					<el-table-column prop="Checker" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CheckDate" label="审核日期" width="120">
					<el-table-column prop="CheckDate" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ParName" label="合作方" width="120">
					<el-table-column prop="ParName" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SubmitStatus" label="提交状态" width="120">
					<el-table-column prop="SubmitStatus" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Volum" label="体积" width="100">
					<el-table-column prop="Volume" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Weight" label="重量" width="100">
					<el-table-column prop="Weight" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="PrintNum" label="打印次数" width="120">
					<el-table-column prop="PrintNum" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Num" label="基本数量合计" width="140">
					<el-table-column prop="Num" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SupportNum" label="辅助数量合计" width="140">
					<el-table-column prop="SupportNum" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="IsJM" label="是否收现" width="120">
					<el-table-column prop="IsJM" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OMark" label="出库状态" width="120">
					<el-table-column prop="OMark" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SendDistance" label="配送金额" width="120">
					<el-table-column prop="SendDistance" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Level" label="单据级别" width="120">
					<el-table-column prop="Level" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SendDistance" label="配送距离" width="120">
					<el-table-column prop="SendDistance" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DCName" label="配送中心" width="120">
					<el-table-column prop="DCName" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CreateDate" label="制单日期" width="120">
					<el-table-column prop="CreateDate" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeptName" label="部门" width="100">
					<el-table-column prop="DeptName" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeliveryCost" label="运费" width="100">
					<el-table-column prop="DeliveryCost" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="SendMark" label="订单状态" width="120">
					<el-table-column prop="SendMark" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="MoneyMark" label="结算状态" width="120">
					<el-table-column prop="MoneyMark" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OnlinePay" label="网上支付" width="120">
					<el-table-column prop="OnlinePay" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ResponsibleParty" label="责任界定" width="120">
					<el-table-column prop="ResponsibleParty" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="BackReason" label="退货原因" width="120">
					<el-table-column prop="BackReason" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="BackDescription" label="退货说明" width="120">
					<el-table-column prop="BackDescription" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="承运公司" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CreateWay" label="创建方式" width="120">
					<el-table-column prop="CreateWay" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OriginalOutID" label="出库原单号" width="120">
					<el-table-column prop="OriginalOutID" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CloseReason" label="关闭理由" width="120">
					<el-table-column prop="CloseReason" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CBOrderNo" label="托运订单号" width="120">
					<el-table-column prop="CBOrderNo" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CBNo" label="托运单号" width="120">
					<el-table-column prop="CBNo" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CloseOperator" label="关闭人" width="120">
					<el-table-column prop="CloseOperator" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CloseOperatorDate" label="关闭时间" width="120">
					<el-table-column prop="CloseOperatorDate" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="TranType" label="单据类型" width="120">
					<el-table-column prop="TranType" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="结算金额" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DeliveryPerson" label="收货人" width="100">
					<el-table-column prop="DeliveryPerson" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="ContactMobile" label="收货人联系方式" width="160">
					<el-table-column prop="ContactMobile" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="CusAreaName" label="客户区域" width="120">
					<el-table-column prop="CusAreaName" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Line" label="配送路线" width="120">
					<el-table-column prop="Line" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="Payment" label="商城支付" width="120">
					<el-table-column prop="Payment" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
			</el-table>
		</div>
		<!--成功-->
			<el-dialog style="text-align:center" title="系统提示" :visible.sync="bccg_Click" size="tiny" :before-close="handleClose" class='bccg'>
				<!-- <span slot="footer" class="dialog-footer"> -->
				<!-- 保存信息 -->
				<p>{{ this.bcxx }}</p>
				<el-button type="primary" style="" class='dialog_ok' @click.native="bccg_Click = false">确 定</el-button>
				<!-- </span> -->
			</el-dialog>
			<!--失败-->
			<el-dialog style="text-align:center" title="系统提示" :visible.sync="bcsb_Click" size="tiny" :before-close="handleClose" class='bcsb'>
				<!-- <span slot="footer" class="dialog-footer"> -->
				<!-- 保存信息 -->
				<p>{{ this.bcxx }}</p>
				<el-button type="primary" style="" class='dialog_ok' @click.native="bcsb_Click = false">确 定</el-button>
				<!-- </span> -->
			</el-dialog>
		<div class='tongji'>
			<el-tag class='tag1'>共<span> {{ tableData3.length }}</span>条</el-tag>
			<el-tag class='tag2'>单据金额:<span> {{ DJJETotal }}</span></el-tag>
			<el-tag class='tag3'>体积:<span> {{ VolumeTotal }}</span></el-tag>
			<el-tag class='tag4'>重量:<span> {{ WeightTotal }}</span></el-tag>
			<el-tag class='tag5'>基本数量:<span> {{ NumTotal }}</span></el-tag>
			<el-tag class='tag6'>辅助数量:<span> {{ SupNumTotal }}</span></el-tag>
			<el-tag class='tag7'>配送金额:<span> {{ PSJETotal }}</span></el-tag>
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
				cities: [],
				hzfID: '',
				bccg_Click: false,
				bcsb_Click: false,
				bcxx: '',
				// 合计参数
				DJJETotal: '0.00', // 单据金额
				VolumeTotal: '0.00', // 体积
				WeightTotal: '0.00', // 重量
				NumTotal: '0.00', // 基本数量
				SupNumTotal: '0.00', // 辅助数量
				PSJETotal: '0.00', // 配送金额
				// 结束
				pszx: false, //配送中心禁选
				peisong: '',
				// StorageID: '',
				yuanqu: '全部',
				OutInfo: [], // section数组
				yqlist: [],
				options: [], // 合作方list
				backUpArr: [], // 合作方备份
				zdrqlist: [ // 制单日期
					{
						value: '1',
						label: '订单日期'
					},
					{
						value: '2',
						label: '需配送时间'
					},
					{
						value: '3',
						label: '实际配送时间'
					},
					{
						value: '4',
						label: '审核日期'
					},
					{
						value: '5',
						label: '制单日期'
					}
				],
				shbzs: [ // 审核标志
					{
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
				zdrq: '1', //选择日期
				ksrq: '', //开始日期
				jsrq: '', // 结束日期
				hzf: '全部',
				shbz: '1',
				tableData3: [],
				formInline: [],
				activeName: '',
				value: '',
				input: '',
				OutID:'', //保存单据编号
			}
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
			$('.close').click(function() {
				$('.ddsp').hide();
				var obj = eval('(' + data + ')');

				var datas = JSON.parse(obj.Datas);
				var data = datas.Data;
				that.tableData3 = data;
       
			});
		},


		methods: {
			// 拿到当前合作方ID
			gethzfID(val) {
				console.log(val)
				this.hzfID = val;
			},
			// 出库订单查询
			search() {
				var that = this;
				var jsons = {
					UserID: userid, //用户ID
					StartDate: $('#ksrq input').val(), //	起始日期
					EndDate: $('#jsrq input').val(), //	截止日期
					Check: 0, //	审核标志
					ParID: that.hzfID || 0, //	合作方ID
					Type: 2, //	查询类型1 列表2 待审核
					DateType: that.zdrq, //	查询日期类型
					DCID: that.peisong, //	配送中心ID
					OrderID: that.djbh, //	订单号
					ParkID: that.yuanqu || 0, //	园区ID
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.OutModule.OutOrder.GetList"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						console.log('出库订单', data)
						var obj = eval('(' + data + ')');
							
							var datas = JSON.parse(obj.Datas);
							var data = datas.Data;
							that.tableData3 = data;
							that.getTotal(data);
					}
				})
			},
			getTotal(data) {
        var that = this,
				    djjeTotal = 0,
						volumeTotal = 0, // 体积
				    weightTotal = 0, // 重量
				    numTotal = 0, // 基本数量
				    supNumTotal = 0, // 辅助数量
				    psjeTotal = 0;
				for( let i = 0; i < data.length; i++ ) {
           djjeTotal += parseFloat(data[i].Total);
           volumeTotal += data[i].Volume;
           weightTotal += parseFloat(data[i].Weight);
           numTotal += parseFloat(data[i].Num);
           supNumTotal += parseFloat(data[i].SupportNum);
           psjeTotal += parseFloat(data[i].SendDistance);
				} 
				that.DJJETotal = djjeTotal.toFixed(2); // 单据金额
				that.VolumeTotal = volumeTotal.toFixed(6); // 体积
				that.WeightTotal = weightTotal; // 重量
				that.NumTotal = numTotal.toFixed(4); // 基本数量
				that.SupNumTotal = supNumTotal.toFixed(4); // 辅助数量
				that.PSJETotal = psjeTotal.toFixed(2); // 配送金额
			},
			// 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
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
			handleClose () {

			},
			onSubmit() {
				console.log('submit!');
			},
			handleClick: function() {},
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
					// console.log(data)
					that.peisong = data[0].DCID; //设置默认配送中心

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

			// 获取合作方
			gethzflist(psid) {
				var that = this;
				var jsons= {
					UserID: window.userid,
					DCID: that.peisong,
					value:'',
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
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.options = data;
					that.backUpArr = data;
          console.log(675,that.options);
					console.log('数据',data[0]);
					
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
			
			
			// 表格单击事件
			rowClick (row, event, column){
				// console.log('aaa')
				console.log("OutID",row.OutID);
				// 获取单据编号
				this.OutID = row.OutID;
			},
			handleSelectionChange(val) {
        console.log('数组',val)
				this.OutInfo = val
			},
			ClickSh () {
        if( this.OutInfo.length > 1) {
					this.BatchAuditOrder();
				} else {
					this.auditOrder();
				}
			},
			// 审核订单
			auditOrder() {
				var that = this;
				var jsons = {
					UserID: userid,
					UserName: userName,
					OutID :that.OutID,
				}
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
						var data = eval('(' + data + ')');
						console.log('审核', data)
						// 如果审核成功
						if(data.StateCode == 100) {
							that.search();
							that.bccg_Click = true;
							that.bcxx = "审核成功"
						} else {
							that.bcsb_Click = true;
							that.bcxx = "审核失败：" + data.Message
						}
					}
				})
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
				for(var i = 0; i < that.OutInfo.length; i++) {

					var jsons = {
						UserID: userid,
						UserName: userName,
						OutID: that.OutInfo[i].OutID,
					}
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.OutModule.OutOrder.Audit",
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var data = eval('(' + data + ')');
							console.log('审核', data)
							if(data.StateCode == 100) {
								that.search();
									that.bccg_Click = true;
								that.bcxx = "审核成功"
							} else {
								that.bcsb_Click = true;
								that.bcxx = "审核失败：" + data.Message
							}
						}
					})
				}
				// 如果审核成功
			}

		}
	}
</script>

<style scoped>
	/*@import url('../../../common/css/ddsp/ddsp-vue.css');*/
	
	.second_row {
		margin-bottom: 10px;
	}
	
	.ddsp .grid-content p {
		text-align: center;
	}
	
	.ddsp .el-col-4 .grid-content {
		padding-left: 55px;
	}
	
	.ddsp .grid-content .el-input__icon {
		top: 2px;
	}
	
	.ddsp .el-date-editor.el-input {
		width: 100%;
	}
	
	.el-row {
		margin-top: 5px;
		margin-bottom: 10px;
		padding: 0 5px;
	}
	
	.el-form-item {
		width: 100%;
	}
	
	.searchnav .el-form-item__content {
		width: 218px;
	}
</style>