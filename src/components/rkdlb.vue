<template>
	<div class='rkdlb'>
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<router-link to="rkd">
							<div class="curbox xz">新增</div>
							<span style="display: none">入库单</span>
						</router-link>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<router-link to="rkdxg">
							<div class="curbox xg">修改</div>
							<span style="display: none">入库单修改</span>
						</router-link>
					</div><span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<router-link to="rkdck" class="watch">
						  <div class="curbox ck">查看</div>
						  <span style="display: none">入库单查看</span>
						</router-link>
					</div><span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sc" @click="delect"><span>作废</span></div>
					</div><span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dy"><span>打印(仓库)</span></div>
					</div><span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox yl"><span>预览(仓库)</span></div>
					</div><span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sh" @click="checkInfo"><span>审核</span></div>
					</div><span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox plsh" @click="plCheck"><span>批量审核</span></div>
					</div><span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox cz"><span>补录装卸队</span></div>
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
			<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content ">
							<el-select v-model="zdrq" placeholder="" class='zdrq input_width'>
								<el-option v-for="item in zdrqlist" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->
					<el-col :span="3">
						<div class="grid-content ">
							<el-date-picker v-model="ksrq" align="right" id="ksrq" type="date" class='input_width' placeholder="选择日期" :picker-options="pickerOptions1">
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

							<el-date-picker v-model="jsrq" id="jsrq" align="right" class='input_width' type="date" placeholder="选择日期" :picker-options="pickerOptions2">
							</el-date-picker>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">

							<p class=''>合作方*:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
								<el-select v-model="hzf" default-first-option no-data-text="无数据" @change="gethzfID" filterable :filter-method="getCode" class='hzf  input_width'>
									<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
										<span style="float: left">{{ item.Code }}</span>
										<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
									</el-option>
								</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p class=''>审核标志:</p>

						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content ">

							<el-select v-model="shbz"  class="input_width shbz">
								<el-option v-for="item in shbzlist" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>

				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline">
				<el-row :gutter="10" class='second_row'>
					<el-col :span="3">
						<div class="grid-content ">

							<p class=''>配送中心*:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<!-- 配送中心列表 -->
							<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" >
								<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content yqbj">

							<p class=''>园区 ：</p>

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

							<p class=''>出库单号:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content djbj">
							<el-input class="inline-input input_width djbh" size="small" placeholder="" v-model="djbh">
							</el-input>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p style='color:#fff'>123</p>
						</div>
					</el-col>
					<el-col :span="4" class="btn">
						<div class="grid-content">
							<el-button type="primary" size="small" class='cx' @click="search"><i class='el-icon-search'></i>查询</el-button>
							<el-button type="primary" size="small" class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content">
							<!--<el-button type="primary" size="small" @click.native='' class='cx'>查询</el-button>-->
							
						</div>
					</el-col>
				</el-row>
			</el-form>
		</div>
		<!--搜索框完--div >
		<!--表格-->
		<div class="table">
		<el-table @header-click="headerc" @row-click="rowClick" @cell-dblclick="dbrow" :data="rkds" @selection-change="handleSelectionChange" highlight-current-row height="600" border style="width: 100%">
			<el-table-column type='index' prop="" label="" width="80">
					<el-table-column type="index" label="0" width="60">
					</el-table-column>
			</el-table-column>
			<el-table-column type='selection' prop="" label="选定框" width="50"> 
					<el-table-column type='selection'  width="60"></el-table-column>
			</el-table-column>
			<el-table-column prop="CheckMark" label="审核状态" width="150"> 
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="StorageID" label="单据编号" width="150">
				<el-table-column prop="StorageID" label="" width="150" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="StorageDate" label="入库日期" width="110">
				<el-table-column prop="StorageDate" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="Type" label="入库类型" width="110"> 
				<el-table-column prop="Type" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="SupplierName" label="供应商" width="110"> 
				<el-table-column prop="SupplierName" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Total" label="单据金额" width="110"> 
				<el-table-column prop="Total" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="BillNum" label="源单号" width="110">
				<el-table-column prop="BillNum" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="SalesMan" label="业务员" width="110">
				<el-table-column prop="SalesMan" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Remarks" label="备注" width="110"> 
				<el-table-column prop="Remarks" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Delivery" label="交货方式" width="110"> 
				<el-table-column prop="Delivery" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Transport" label="运输方式" width="110"> 
				<el-table-column prop="Transport" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="ArrivalTime" label="预计到达时间" width="110">
				<el-table-column prop="ArrivalTime" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="OrderID" label="订单号" width="150"> 
				<el-table-column prop="OrderID" label="" width="150" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="PrintNum" label="打印次数" width="150">
				<el-table-column prop="PrintNum" label="" width="150" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Poster" label="制单人" width="110">
				<el-table-column prop="Poster" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Checker" label="审核人" width="110">
				<el-table-column prop="Checker" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="CheckDate" label="审核日期" width="110"> 
				<el-table-column prop="CheckDate" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="ParName" label="合作方" width="110">
				<el-table-column prop="ParName" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="SubmitStatus" label="提交状态" width="150">
				<el-table-column prop="SubmitStatus" label="" width="150" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Volume" label="体积" width="110">
				<el-table-column prop="Volume" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Weight" label="重量" width="110">
				<el-table-column prop="Weight" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="" label="仓库作业信息" width="110">
				<el-table-column prop="" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="DCName" label="配送中心" width="110"> 
				<el-table-column prop="DCName" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="HandlingTeamName" label="装卸队" width="110">
				<el-table-column prop="HandlingTeamName" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="CreateDate" label="制单日期" width="110">
				<el-table-column prop="CreateDate" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="ParkName" label="园区" width="110">
				<el-table-column prop="ParkName" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="" label="部门" width="110">
				<el-table-column prop="" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="FirstPrinter" label="首次打印人" width="110">
				<el-table-column prop="FirstPrinter" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="FirstPrintDate" label="首次打印时间" width="110">
				<el-table-column prop="FirstPrintDate" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="SignDate" label="签收日期" width="110"> 
				<el-table-column prop="SignDate" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Num" label="基本数量" width="110"> 
				<el-table-column prop="Num" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="SupportNum" label="辅助数量" width="110"> 
				<el-table-column prop="SupportNum" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="HandlingStartDate" label="装卸开始时间" width="110"> 
				<el-table-column prop="HandlingStartDate" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="HandlingEndDate" label="装卸结束时间" width="110"> 
				<el-table-column prop="HandlingEndDate" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="ForkliftWorker" label="叉车工" width="110"> 
				<el-table-column prop="ForkliftWorker" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Storeman" label="仓管员" width="110"> 
				<el-table-column prop="Storeman" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="Driver" label="司机" width="110"> 
				<el-table-column prop="Driver" label="" width="110"  class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="PlateNumber" label="车牌号" width="110"> 
				<el-table-column prop="PlateNumber" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="DriverIDNumber" label="司机身份证" width="110"> 
				<el-table-column prop="DriverIDNumber" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="DriverPhone" label="司机电话" width="110"> 
				<el-table-column prop="DriverPhone" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="LoadAndUnLoadWeight" label="装卸量" width="110"> 
				<el-table-column prop="LoadAndUnLoadWeight" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="CarryWeight" label="搬运量" width="110"> 
				<el-table-column prop="CarryWeight" label="" width="110" class-name="mohucha"> </el-table-column>
			</el-table-column>
			<el-table-column prop="WorkloadRemarks" label="作业备注" width="110"> 
				<el-table-column prop="WorkloadRemarks" label="" width="110" class-name="mohucha"> </el-table-column>
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


		<!-- 审核确认-->
		<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="plsh_Click" size="tiny">
			<span class="dialog-footer">
			<p>{{infoHint}}</p>
			<el-button type="primary"  @click="batchCheck" >确 定</el-button>
			<el-button @click="plsh_Click = false">取 消</el-button>
			</span>
		</el-dialog>
	<!--审核确认 end -->
	<!-- 删除失败-->
	<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="scsb_Click" size="tiny">
		<span class="dialog-footer">
		<p style="color: red;">{{ infoHint }} </p>
			<el-button type="primary" style="margin-right: 0;"  @click="scsb_Click=false" >确 定</el-button>
		</span>
	</el-dialog>
	<!--删除失败 end -->

	<!-- 删除成功-->
	<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="sccg_Click" size="tiny">
		<span class="dialog-footer">
		  <p style="color: #82bc06">{{infoHint}}</p>
		  <el-button type="primary" style="margin-right: 0;" @click="sccg_Click=false" >确 定</el-button>
		</span>
	</el-dialog>
	<!--删除成功 end -->

  

	<div class='tongji'>
			<el-tag class='tag1'>共<span>{{ rkds.length}}</span>条</el-tag>
			<el-tag class='tag2'>金额合计:<span>{{ SumTotal }}</span></el-tag>
			<el-tag class='tag2'>体积合计:<span>{{ VolumeTotal }}</span></el-tag>
			<el-tag class='tag2'>重量合计:<span>{{ WeightTotal }}</span></el-tag>
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

				peisong: '',
				yuanqu: '',
				yqlist: [],
				cities: [],
				options:[], //存放合作方
				sfsc_Click: false, // 显示是否删除订单
				sccg_Click: false, //删除成功
				scsb_Click: false, //删除成功
				plsh_Click: false, //批量审核
				StorageInfo: '', // 单选存储Info
				batchInfo: '', // 多选存储Info
				SumTotal: '0.00',
        VolumeTotal: '0.0000',
        WeightTotal: '0.00',
				infoHint: '',
				zdrqlist: [{
						label: "入库日期",
						value:"1" 
					}, {
						label: "预计到达日期",
						value:"2" 
					}, {
						label: "审核日期",
						value:"3" 
					},
					{
						label: "制单日期",
						value: "4"
					},
					{
						label: "签收日期",
						value:"5" 
					},
				],
				shbzlist:[
					{ label:'未审核', value:'0', },
					{label:'已审核', value:'1',},
					{label:'全部', value:'2',}
				],

				shbz:'2',
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

						djbh: '', //存放单据
						zdrq: '1',
						rkds: [], // 存放入库单
						ksrq:'', // 开始日期
						jsrq:'', // 结束日期
						hzf: '全部',
						options: [], // 合作方数据
						backUpArr: [], // 合作方数据备份
						tableData3: [],
						formInline: [],
						activeName: '',
					};
				},
				mounted: function() {
					var that = this;
				//$(".当前vue文件的最外层div的calss名 a")
				$(".rkdlb a").click(function() {
					var $this = $(this);
					var txt = $("span", $this).html();
					// console.log('txt:',txt);
					var tabarr = that.$parent.editableTabs2;
					var indexof = -1;
					for(var i = 0; i < tabarr.length; i++) {
						console.log(tabarr[i].title + "---" + txt);
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
			$('.close').click(function() {
				$('.ckdlb').hide();

			});
			$(".ddsp .cx").click(function() {

				var form1_data = [];
				form1_data.push(that.peisong);
				form1_data.push(that.yuanqu);
				form1_data.push(that.djbh);
				form1_data.push(that.hzf);
				form1_data.push(that.zdrq);
				form1_data.push(that.rq1);
				form1_data.push(that.rq2);
				console.log(form1_data);

			});

		},

		methods: {
			// 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
				var that = this;
				// 保存当前的订单号
				localStorage.setItem("rkdDataStorage", row.StorageID);
				//跳转出库订单查看
				that.$router.replace({ path: '/rkdck'});
				// 定义标签的名字
				let txt = "入库单查看"
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
					let cnt = $('.watch').attr("href");// 注意:要手动添加class,要不然找不到
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
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
				// 获取合作方
				that.gethzflist(that.peisong);
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
					}
				})
			},
			// 拿到当前合作方ID
			gethzfID (val) {
				// console.log(val)
				this.hzfID = val;
			},
			// 删除商品
			isDelect () {
				console.log("1")
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
					console.log("4")
					var that = this;
					that.sfsc_Click = false;
					var jsons = {
						UserID: userid,
						UserName:userName,
						StorageID: that.StorageID || that.rkds[0].StorageID,
					}
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.Storage.Delete" //CPHH.PC.StorageModule.StorageOrder.Delete
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var data = eval('(' + data + ')');
							console.log('删除',data)
							if(data.StateCode == 100) {
								that.sccg_Click = true;
								that.searchInfo();
								that.infoHint = "单据删除成功"
							} else {
                
							}
							
						}
					})
				}	
			},
			checkInfo() {
				var that = this;
				
				if (that.StorageInfo.CheckMark === 'Y') {
					// console.log(696,that.StorageInfo);
					that.scsb_Click = true;
					that.infoHint = "审核失败 ！单据已审核";
					return
				} else {
          var jsons = {
						UserID: userid,
						UserName: userName || '',
						StorageID: that.StorageInfo.StorageID,
					}
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.Storage.Audit"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var result = JSON.parse(data)
							if(result.StateCode === 100) {
								console.log('审核', result)
                
								that.sccg_Click = true;
								that.infoHint = "单据审核成功"
								that.searchInfo();
								setTimeout( function(){
										that.sccg_Click=false
									} ,2000);
							}	else if(result.StateCode === 104) {
								that.scsb_Click = true;
								that.infoHint = result.Message;
								setTimeout( function(){
									that.scsb_Click=false
								} ,4000);
							}				
						}
					})
				}
			},
			batchCheck () {
				var that = this;
				
				for(let i = 0; i < that.batchInfo.length; i++) {
					if (that.batchInfo[i].CheckMark === "Y") {
						that.plsh_Click = false;
            that.scsb_Click = true;
						that.infoHint = "审核失败 ！第" + (i + 1) + "行单据已审核";
						
						return false
					} else {
						var jsons = {
							UserID: userid,
							UserName: userName || '',
							StorageID: that.batchInfo[i].StorageID,
						}
						$.ajax({
							url: 'http://116.62.171.144/post/index.php',
							type: 'POST', //GET
							async: true, //或false,是否异步
							data: {
								datas: jsons,
								method: "CPHH.PC.StorageModule.Storage.Audit"
							},
							timeout: 5000, //超时时间
							success: function(data, textStatus, jqXHR) {
								var result = JSON.parse(data)
								that.scsb_Click = false;
								// that.	scsb_Click = false;
								that.plsh_Click = false;
								if(result.StateCode === 100) {
									console.log('审核', result)
									
									that.sccg_Click = true;
									that.infoHint = "单据审核成功";
									that.searchInfo();
									setTimeout( function(){
										that.sccg_Click=false
									} ,3000);
								}	else if(result.StateCode === 104) {
									that.scsb_Click = true;
									that.infoHint = result.Message;
									return
								}					
							}
						})
					}
				}	 
					
					
				

				
			},
			// 是否删除商品
			delect () {
				if(this.StorageInfo.StorageID || this.rkds[0].StorageID) {
					this.sfsc_Click = true;
					this.infoHint = '你真的要删除所选的单据吗?';
				}
				// console.log('delect:');
			},
			// 批量审核数据
			plCheck () {
        if(this.batchInfo[0]) {
					this.plsh_Click = true;
					this.infoHint = '你真的要审核所选的单据吗?';
				} else {
					this.scsb_Click = true;
					this.infoHint = "未选择单据"
				}
			},
			// 表格单击事件
			rowClick (row, event, column){
				// 获取单据编号

				this.StorageInfo = row;
				
				//跳转出库订单查看
				this.$router.replace({ path: '/rkdck'});
				// 定义标签的名字
				let txt = "入库单查看"
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
					let cnt = $('.watch').attr("href");// 注意:要手动添加class,要不然找不到
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
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
				// 获取合作方
				that.gethzflist(that.peisong);
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
					}
				})
			},
			// 拿到当前合作方ID
			gethzfID (val) {
				// console.log(val)
				this.hzfID = val;
			},
			// 删除商品
			isDelect () {
				console.log("1")
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
					console.log("4")
					var that = this;
					that.sfsc_Click = false;
					var jsons = {
						UserID: userid,
						UserName:userName,
						StorageID: that.StorageID || that.rkds[0].StorageID,
					}
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.Storage.Delete" //CPHH.PC.StorageModule.StorageOrder.Delete
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var data = eval('(' + data + ')');
							console.log('删除',data)
							if(data.StateCode == 100) {
								that.sccg_Click = true;
								that.searchInfo();
								that.infoHint = "单据删除成功"
							} else {
                
							}
							
						}
					})
				}	
			},
			checkInfo() {
				var that = this;
				
				if (that.StorageInfo.CheckMark === 'Y') {
					// console.log(696,that.StorageInfo);
					that.scsb_Click = true;
					that.infoHint = "审核失败 ！单据已审核";
					return
				} else {
          var jsons = {
						UserID: userid,
						UserName: userName || '',
						StorageID: that.StorageInfo.StorageID,
					}
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.Storage.Audit"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var result = JSON.parse(data)
							if(result.StateCode === 100) {
								console.log('审核', result)
                
								that.sccg_Click = true;
								that.infoHint = "单据审核成功"
								that.searchInfo();
								setTimeout( function(){
										that.sccg_Click=false
									} ,2000);
							}	else if(result.StateCode === 104) {
								that.scsb_Click = true;
								that.infoHint = result.Message;
								setTimeout( function(){
									that.scsb_Click=false
								} ,4000);
							}				
						}
					})
				}
			},
			batchCheck () {
				var that = this;
				
				for(let i = 0; i < that.batchInfo.length; i++) {
					if (that.batchInfo[i].CheckMark === "Y") {
						that.plsh_Click = false;
            that.scsb_Click = true;
						that.infoHint = "审核失败 ！第" + (i + 1) + "行单据已审核";
						
						return false
					} else {
						var jsons = {
							UserID: userid,
							UserName: userName || '',
							StorageID: that.batchInfo[i].StorageID,
						}
						$.ajax({
							url: 'http://116.62.171.144/post/index.php',
							type: 'POST', //GET
							async: true, //或false,是否异步
							data: {
								datas: jsons,
								method: "CPHH.PC.StorageModule.Storage.Audit"
							},
							timeout: 5000, //超时时间
							success: function(data, textStatus, jqXHR) {
								var result = JSON.parse(data)
								that.scsb_Click = false;
								// that.	scsb_Click = false;
								that.plsh_Click = false;
								if(result.StateCode === 100) {
									console.log('审核', result)
									
									that.sccg_Click = true;
									that.infoHint = "单据审核成功";
									that.searchInfo();
									setTimeout( function(){
										that.sccg_Click=false
									} ,3000);
								}	else if(result.StateCode === 104) {
									that.scsb_Click = true;
									that.infoHint = result.Message;
									return
								}					
							}
						})
					}
				}	 
					
					
				

				
			},
			// 是否删除商品
			delect () {
				if(this.StorageInfo.StorageID || this.rkds[0].StorageID) {
					this.sfsc_Click = true;
					this.infoHint = '你真的要删除所选的单据吗?';
				}
				// console.log('delect:');
			},
			// 批量审核数据
			plCheck () {
        if(this.batchInfo[0]) {
					this.plsh_Click = true;
					this.infoHint = '你真的要审核所选的单据吗?';
				} else {
					this.scsb_Click = true;
					this.infoHint = "未选择单据"
				}
			},
			// 表格单击事件
			rowClick (row, event, column){
				// 获取单据编号

				this.StorageInfo = row;
				localStorage.setItem("rkdDataStorage", row.StorageID);
				console.log("当前信息",row )
			},
      handleSelectionChange (val) {
				this.batchInfo = val;
				console.log("选中的批量信息",val)
			},
			// 搜索内容
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
			// 查询订单
			search (){
				console.log('search:');
				var that = this;
				var jsons = {
					UserID: userid,
					StartDate: $('#ksrq input').val(),
					EndDate: $('#jsrq input').val(),
					Check: that.shbz, // 0未审核 1审核 2全部
					ParID: that.hzfID || 0, // 合作方id
					Type: 1, // 1 列表 2 待审核
					DateType: that.zdrq, //1 入库日期 2 预计到达日期 3 审核日期 4 制单日期 5 签收日期
					DCID: that.peisong,
					StorageID: that.djbh,
					ParkID: that.yuanqu,
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.StorageModule.Storage.GetList"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						console.log('查询:',data)
						that.rkds = data;
						that.getTotal();
					}
				})
			},
			getTotal () {
				var that = this;
				var sumTotal = 0;
				var volumeTotal = 0;
				var weightTotal = 0;
        for( let i = 0; i < that.rkds.length; i++ ) {
           sumTotal += parseFloat(that.rkds[i].Total);
           volumeTotal += that.rkds[i].Volume;
           weightTotal += parseFloat(that.rkds[i].Weight);
				} 
        that.SumTotal = sumTotal;
        that.VolumeTotal = volumeTotal.toFixed(6);
        that.WeightTotal = weightTotal.toFixed(2);
			},
			handleClick: function(){},
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

<style>
	/*@import url("../../../common/css/rkdlb/rkdlb.css");*/
	
	.rkdlb .grid-content {
		text-align: center;
	}
	
	.rkdlb .el-button--small {
		width: 80px;
	}
	
	.rkdlb .el-form {
		margin-bottom: 5px;
	}
	
	.rkdlb .el-table {
		overflow: inherit;
	}
	.rkdlb .fr{
		width: 58px;
	}
	.rkdlb .fl{
		margin-left: 26px!important;
	}
	.rkdlb .el-date-editor{
		width: 100%;
	}
	.rkdlb .btn{
		float: left;
		padding-right: 35px!important;
	}
	.rkdlb .el-icon-date{
		top:0;
	}
</style>