<template>
	<div class='ddsp'>
			<!-- 这里是导航栏部分 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox sh" @click="auditOrder"><span>审核</span></div></div></li>
					<li><div class="boxtab"><div class="curbox plsh" @click="plCheck"><span>批量审核</span></div></div></li>
					<li><div class="boxtab"><div class="curbox bz" @click="remarksClick"><span>备注</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox ctys">
						<!-- <span>窗体样式</span> -->
						<el-dropdown split-button >
							窗体样式
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>保存样式</el-dropdown-item>
								<el-dropdown-item>恢复样式</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
						</div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div><span class="gun"></span></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->

		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true"  class="demo-form-inline form1">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="zdrq" placeholder="" @change="dateType" class='zdrq'>
								<el-option v-for="item in zdrqlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->
					<el-col :span="3">
						<div class="grid-content ">

							<!-- 开始日期 -->
							<div class=" blueborder input_width">
								<el-date-picker id="ksrq" v-model="ksrq" align="right" type="date" placeholder="" class='input_width'>
								</el-date-picker>
							</div>
							<!-- 开始日期end -->
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content zhi">
							<p class=''>至</p>
							
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content zhi">

							<!-- 结束日期 -->
							<div class=" blueborder input_width">
								<el-date-picker id="jsrq" v-model="jsrq" align="right" type="date" placeholder="" class='input_width'>
								</el-date-picker>
							</div>
							<!-- 结束日期end -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p class=''>审核标志:</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-select v-model="shbz" placeholder="" class="input_width ">
								<el-option v-for="item in shbzs" :label="item.label" :key="item.value" :value="item.value" >
								</el-option>
							</el-select>
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
            <div class="grid-content">
              <p class=''>配送中心*:</p>
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
				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" :v-model="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content yqbj">
							<p class=''>园区 :</p>
						</div>
					</el-col>
						<el-col :span="3">
							<div class="grid-content yqbj">
							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder=""  no-data-text="无数据"   class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span> 
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content djbj">
							<!--<span class='fl'>单据编号:</span>-->
						</div>
					</el-col>
					
					<el-col :span="2">
						<div class="grid-content djbj">
							<p class=''>单据编号:</p>
							
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content djbj">
							
							<el-input v-model="ddbh" placeholder="请输入内容" class='input_width'></el-input>
						</div>
					</el-col>
          
          <el-col :span="4"  :offset='2'>
            <div class="grid-content chaxun">
              <el-button type="primary" @click="search"  class='cx el-icon-search '>查询</el-button>
              <el-button type="primary"  class='close el-icon-circle-close'>关闭</el-button>
            </div>
          </el-col>
				</el-row>
			</el-form>
		</div>
		<!--搜索框完-->

		<!--下面全是dialog-->
      <!--失败-->
			<el-dialog style="text-align:center" title="系统提示" :visible.sync="bcsb_Click" size="tiny" :before-close="handleClose" class='bcsb'>
				<!-- <span slot="footer" class="dialog-footer"> -->
					<!-- 保存信息 -->
					<p >{{ this.bcxx }}</p> 
					<el-button type="primary" style="" class='dialog_ok' @click.native="bcsb_Click = false">确 定</el-button>
				<!-- </span> -->
			</el-dialog>   

		<!--表格-->
		<div class="table">
		<el-table :data="ddlbs" height="250" border style="width: 100%" highlight-current-row @row-click="rowClick"  @cell-dblclick="dbrow" @header-click="headerc" @selection-change="handleSelectionChange" >
			<el-table-column type=''  prop="" label="#" width="50">
				<el-table-column  type="index" label="0" width="50">
				</el-table-column>
			</el-table-column>
			<el-table-column type=''  prop="" label="选定框" width="110">
			  <el-table-column type="selection"  prop="" label="" width="110">
			  </el-table-column>
			</el-table-column>	
			<el-table-column prop="CheckMark" label="审核标志" width="110">
				<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CloseMark" label="状态" width="110">
				<el-table-column  prop="CloseMark" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="StorageDate" label="订单日期" width="110">
				<el-table-column prop="StorageDate"  label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="StorageID" label="单据编号" width="110">
				<el-table-column  prop="StorageID" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Type" label="入库类型" width="110">
				<el-table-column  prop="Type" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="SupplierName" label="供应商" width="110">
				<el-table-column  prop="SupplierName" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Total" label="单据金额" width="110">
				<el-table-column  prop="Total" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="BillNum" label="源单号" width="110">
				<el-table-column  prop="BillNum" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="SalesMan" label="业务员" width="110">
				<el-table-column  prop="SalesMan" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Remarks" label="备注" width="110">
				<el-table-column  prop="Remarks" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Delivery" label="交货方式" width="110">
				<el-table-column  prop="Delivery" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Transport" label="运输方式" width="110">
				<el-table-column  prop="Transport" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="ArrivalTime" label="预计到达时间" width="150">
				<el-table-column  prop="ArrivalTime" label="" width="150" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Poster" label="制单人" width="110">
				<el-table-column  prop="Poster" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Checker" label="审核人" width="110">
				<el-table-column  prop="Checker" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CheckDate" label="审核日期" width="110">
				<el-table-column  prop="CheckDate" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="ParName" label="合作方" width="110">
				<el-table-column  prop="ParName" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="RMark" label="引用说明" width="110">
				<el-table-column  prop="RMark" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="SubmitStatus" label="提交状态" width="110">
				<el-table-column  prop="SubmitStatus" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CloseReason" label="关闭原因" width="110">
				<el-table-column  prop="CloseReason" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Volume" label="体积" width="110">
				<el-table-column  prop="Volume" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Weight" label="重量" width="110">
				<el-table-column  prop="Weight" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="PrintNum" label="打印次数" width="110">
				<el-table-column  prop="PrintNum" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="DCName" label="配送中心" width="110">
				<el-table-column  prop="DCName" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Property1" label="自定义1" width="110">
				<el-table-column  prop="Property1" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Property2" label="自定义2" width="110">
				<el-table-column  prop="Property2" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Property3" label="自定义3" width="110">
				<el-table-column  prop="Property3" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CreateDate" label="制单日期" width="110">
				<el-table-column  prop="CreateDate" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="DeptName" label="部门" width="110">
				<el-table-column  prop="DeptName" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="TransportCmpName" label="承运公司" width="110">
				<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CreateWay" label="创建方式" width="110">
				<el-table-column  prop="CreateWay" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Num" label="基本数量" width="110">
				<el-table-column  prop="Num" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="SupportNum" label="辅助数量" width="110">
				<el-table-column  prop="SupportNum" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CloseOperator" label="关闭人" width="110">
				<el-table-column  prop="CloseOperator" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CloseOperatorDate" label="关闭时间" width="110">
				<el-table-column  prop="CloseOperatorDate" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Address" label="地址" width="110">
				<el-table-column  prop="Address" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
		</el-table>
		</div>

			<!--成功-->
			<el-dialog style="text-align:center" title="提示信息" :visible.sync="shcg_Click" size="tiny" :before-close="handleClose" class='bccg'>
				<!-- <span slot="footer" class="dialog-footer"> -->
				<!-- 保存信息 -->
				<p>单据审核成功!</p>
				<el-button type="primary" style="" class='dialog_ok' @click.native="shcg_Click = false">确 定</el-button>
				<!-- </span> -->
			</el-dialog>
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

	<!-- 成功-->
	<el-dialog title="警告信息" id="szcg" class="szcg" :visible.sync="szcg_Click" size="tiny">
		<span class="dialog-footer">
		<p>备注设置成功!</p>
			<el-button type="primary"  @click="szcg_Click=false" >确 定</el-button>
		</span>
	</el-dialog>
		<!-- 审核确认-->
		<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="plsh_Click" size="tiny">
			<span class="dialog-footer">
			<p>{{infoHint}}</p>
			<el-button type="primary"  @click="BatchAudit" >确 定</el-button>
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
	<!--成功 end -->
		<div class='tongji'>
			<el-tag class='tag1'>共<span>{{ddlbs.length}}</span>条</el-tag>
			<el-tag class='tag2'><span>金额:{{DJJETotal}}</span></el-tag>
			<el-tag class='tag3'><span>体积:{{VolumeTotal}}</span></el-tag>
			<el-tag class='tag4'><span>重量:{{WeightTotal}}</span></el-tag>
		</div>
	</div>

</template>

<script>

	export default {

		data() {
			return {
				hzf_Click: false, //合作方弹窗
				szbz_Click: false, //设置备注
				shcg_Click: false,
				szcg_Click: false,// 设置成功
				plsh_Click: false, // 批量审核
				scsb_Click: false, // 审核失败
				infoHint: '', // 提示信息
				formStacked: {
					name: '',
					region: '',
					type: ''
				},
				// 查漏补缺
				pickerOptions1:'',
				DJJETotal: '0.00',  // 单据金额统计
				VolumeTotal: '0.0000', // 体积合计
				WeightTotal: '0.00', // 重量合计
				tableData3: '',
				StorageID:'', // 单据编号
				StorageData: [], // 批量审核存储数据
				bcxx: '',
				ddbh:'', // 订单编号
				bcsb_Click: false, //保存失败
				peisong:'',
				yuanqu:'',
				djbh:'',
				zdrq: '1',
				zdrqlist:
				 [ // 制单日期
					{ value: '1', label: '订单日期' },
					{ value: '2', label: '审核日期' },
					{ value: '3', label: '制单日期' },
				],
				shbz: '2',
				shbzs:
				 [ // 审核标志
					{ value: '0', label: '未审核' },
					{ value: '1', label: '已审核' },
					{ value: '2', label: '全部' }
				],

				hzfID: "", //合作方id
				ddlbs:[],// 订单列表
				hzf:'全部',
				hzflist:{ label:'', value:'0', },
				hzfInfo: [],
				options: [], // 合作方数据
				backUpArr: [], // 合作方数据备份
				ksrq:'',
				rq1list:{ label:'', value:'0', },
				jsrq:'',
				rq2list:{ label:'', value:'0', },
				cities:'',
				yqlist:[],
				pszx:false,
				StorageID:'',//单据编号
				Remarks:'',// 备注
				formInline:'',
				activeName:'',
				tabledata3:{ name:'', address:'', selection:'', },
			};
		},
		mounted:function() {
			var that = this;
			//订单日期的默认值
			var myDate = new Date();
			var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
			var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			var d = myDate.getDate(); //获取当前日(1-31)
			var today = y + "-" + m + "-" + d;
			that.ksrq = today;
			that.jsrq = today;
		//没数据的时候加载示意，有数据的时候注释掉
			that.getdclist();
			$('.close').click(function(){
				$('.ddsp').hide();
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
					// console.log(form1_data);
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
					StorageID: that.StorageID,
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.StorageModule.StorageOrder.SetRemarks"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var data = eval('(' + data + ')');
						console.log('备注', data)
						if(data.StateCode == 100)that.szcg_Click = true;
						that.search();
					}
				})
			},

			// 表格单击事件
			rowClick (row, event, column){
				// console.log('aaa')
				console.log("OutID",row.StorageID);
				// 获取单据编号
				this.StorageID = row.StorageID;
			},
			handleSelectionChange(val) {
        this.StorageData = val;
			},
			// 审核订单
			auditOrder() {
				var that = this;
				var jsons = {
					UserID: userid,
					UserName: userName,
					StorageID: that.StorageID,
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.StorageModule.StorageOrder.Audit"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var data = eval('(' + data + ')');
						console.log('审核', data)
						// 如果审核成功
						if(data.StateCode == 100) {
							that.search();
							that.shcg_Click = true;
						}
					}
				})
			},
			// 批量审核数据
			plCheck () {
        if(this.StorageData[0]) {
					this.plsh_Click = true;
					this.infoHint = '你真的要审核所选的单据吗?';
				} else {
					this.scsb_Click = true;
					this.infoHint = "未选择单据"
				}
			},
			BatchAudit () {
        var that = this;
				this.plsh_Click = false;
				for(let i = 0; i < that.StorageData.length; i++) {
					let params = {
						UserID: userid,
						UserName: userName,
						StorageID: that.StorageData[i].StorageID,
					}
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: params,
							method: "CPHH.PC.StorageModule.StorageOrder.Audit"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var data = eval('(' + data + ')');
							// 如果审核成功
							if(data.StateCode == 100) {
								that.search();
								if(i == i < that.StorageData.length - 1) {
									that.shcg_Click = true;
								}	
							}
						}
					})
				}
				
			},
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
						eval("that.ddlbs[index]." + jname + "=val");
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
					$("tr",$table).show();//先全部展示出来
					$datath.each(function() {
						var $this = $(this);
						 
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined && thv!="") {
							that.mohucha(thv, idx, $table);
						}

					});

				});
			},
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
			},
			handleClose: function (){

			},
			// 日期类型 
			dateType (val) {
				this.zdrq = val;
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
					// console.log(data);
				});

			},

			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				// console.log(that.peisong);
				that.getyuanqulist(that.peisong);
				that.gethzflist(that.peisong);
			},
	
	    
			// 点击查询
			
			search (){
				var that = this;
				console.log('search, hzfID',that.hzfID);
				if(!that.hzf) {
					// that.bcxx="请选择合作方"; 
					// that.bcsb_Click = true; // 提示
					return false;
				} else {
					var ksrq = $("#ksrq input").val();
					var jsrq = $("#jsrq input").val();
					that.baseAjax("storageordergetlist", {
						UserID: window.userid,
						StartDate: ksrq,
						EndDate  : jsrq,
						// Check: that.shbz,
						Check: 0,
						ParID: that.hzfID || 0,
						Type: 2,
						OrderID: that.ddbh,
						DateType: that.zdrq, //日期类型
						DCID: that.peisong,
						ParkID: that.yuanqu,
					}, function(data) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.ddlbs = data;
						that.getTotal(data);
					});
				}	
			},
			getTotal(data) {
				var djjeTotal = 0,
				    volumeTotal = 0,
						weightTotal = 0;
        for(let i = 0; i < data.length; i++) {
					djjeTotal += parseFloat(data[i].Total);
					volumeTotal += data[i].Volume;
					weightTotal += parseFloat(data[i].Weight);
				}
				this.DJJETotal = djjeTotal.toFixed(2);
				this.VolumeTotal = volumeTotal.toFixed(6);
				this.WeightTotal = weightTotal.toFixed(2);
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
					}
				})
			},
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
			
		},
	}
</script>

<style rel="stylesheet/stylus" scoped>
/*@import url("../../common/css/ddsp/ddsp-vue.css");*/

	.el-row {
		margin-bottom: 2px;
		padding:5px 10px 0 10px;
	}

	.el-col {
		border-radius: 4px;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	.grid-content p{
		margin-left: 20px;
		line-height: 25px;
	}
	.el-button{
		position:relative;
		bottom:5px ;
	}
	.ddsp .el-table, .el-table--fit, .el-table--border, .el-table--enable-row-hover {
			max-height: 700px;
	    height: 590px !important;
	}
  .ddsp .grid-content p {
	  text-align: center;
	}
  .ddsp .zhi p {
	  text-align: left;
  }
  .el-date-editor{
  	width: 100%;
  }
</style>
