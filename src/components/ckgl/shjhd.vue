<template>
	<div class='shjhd'>
		<!--PDA出库收货计划单列表-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<router-link to="ckthshjhd">
							<div class="curbox xz">
								<div>新增</div>
								<span style="display: none">出库退回收货计划单</span>
							</div>
						</router-link>
					</div>
					<div class="boxtab">
						<div class="curbox sc" @click="delect">
							<span>删除</span>
						</div>
					</div>
					<div class="boxtab">
						<router-link to="pdack" class="watch">
							<div class="curbox xz">
								<div>查看</div>
								<span style="display: none">收货计划单查看</span>
							</div>
						</router-link>
					</div>
					<div class="boxtab">
						<div class="curbox dc">
							<span>导出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>

				<li>
					<!--<div class="boxtab">
							 <div class="curbox fhzy">
							 	 <span>分配人员</span>
							 </div>
						</div>-->
					<div class="boxtab">
						<div class="curbox sh" @click="auditOrder">
							<span>审核</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox fs" @click="antiOrder">
							<span>反审</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox scdj" @click="createBill">
							<span>生成单据</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox fscdj" @click="fCreateBill">
							<span>反生成单据</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox shzy">
							<span>收货作业</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox shysd">
							<span>收货验收单</span>
						</div>
					</div>

					<span class="gun"></span>
				</li>
				<li>

					<div class="boxtab">
						<div class="curbox sjzy">
							<span>上架作业</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox sjzhiyin">
							<span>上架指引单</span>
						</div>
					</div>
					<!--<div class="boxtab">
							 <div class="curbox xdd">
							 	 <span>打印（复核）</span>
							 </div>
						</div>
						<div class="boxtab">
							 <div class="curbox xdd">
							 	 <span>预览（复核）</span>
							 </div>
						</div>-->
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
		<!--form第一行-->
		<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
			<el-row :gutter="10">

				<!--check-->
				<el-col :span="3" class="sj-w">
					<div class="grid-content ">
						<el-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd" v-model="ksrq" align="right" :picker-options="pickerOptions1"></el-date-picker>

					</div>
				</el-col>
				<el-col :span="1">
					<div class="grid-content ">
						<p>至</p>
					</div>
				</el-col>
				<el-col :span="3" class="sj-w">
					<div class="grid-content ">

						<el-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd" v-model="jsrq" align="right" :picker-options="pickerOptions2"></el-date-picker>

					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">
						<p>配送中心:</p>
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
				<el-col :span="2">
					<div class="grid-content ">
						<p>合作方*:</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">

						<!-- 合作方 -->
						<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
							<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
								<span style="float: left">{{ item.Code }}</span>
								<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
							</el-option>
						</el-select>
						<!-- 合作方结束 -->
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-button type="primary" @click.native='queryReceiving' class='cx'>
							<i class='el-icon-search'></i>查询</el-button>
						<el-button type="primary" @click.native='closetag' class='close'>
							<i class='el-icon-circle-cross'></i>关闭</el-button>
					</div>
				</el-col>
			</el-row>

		</el-form>

		<!--搜索框完-->
		<!--表格-->
		<el-table :data="receiveList" @row-click="rowClick" @row-dblclick="dbRow" class="table" height="630" border style="width: 100%"  @header-click="headerc" highlight-current-row >
			<el-table-column type='selection' prop="" label="选定框" width="50">
				<el-table-column type='selection' prop="" label="" width="50"></el-table-column>
			</el-table-column>
			<el-table-column prop="PickID" label="收获计划单号" width="120">
				<el-table-column prop="PickID" label="" width="120" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="CheckMark" label="审核" width="120">
				<el-table-column prop="CheckMark" label="" width="120" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="Date" label="日期" width="120">
				<el-table-column prop="Date" label="" width="120" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="PickType" label="拣货类型" width="120">
				<el-table-column prop="PickType" label="" width="120" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="Poster" label="制单人" width="120">
				<el-table-column prop="Poster" label="" width="120" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="CreateDate" label="创建日期" width="120">
				<el-table-column prop="CreateDate" label="" width="120" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="TotalQty" label="计划数量" width="120">
				<el-table-column prop="TotalQty" label="" width="120" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="PickQty" label="收货数量" width="120">
				<el-table-column prop="PickQty" label="" width="120" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="ReceiveStatus" label="收货状态" width="120">
				<el-table-column prop="ReceiveStatus" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="Status" label="上架状态" width="120">
				<el-table-column prop="Status" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="ShelvesQty" label="上架数量" width="120">
				<el-table-column prop="ShelvesQty" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="CreateMark" label="单据生成标志" width="140">
				<el-table-column prop="CreateMark" label="" width="140"></el-table-column>
			</el-table-column>
			<el-table-column prop="CreateBillIDList" label="生成单据号" width="140">
				<el-table-column prop="CreateBillIDList" label="" width="140"></el-table-column>
			</el-table-column>
			<el-table-column prop="BillIDList" label="单据" width="120">
				<el-table-column prop="BillIDList" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="PartnerName" label="合作方" width="120">
				<el-table-column prop="PartnerName" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="CompanyName" label="单位名称" width="120">
				<el-table-column prop="CompanyName" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="Checker" label="审核人" width="100">
				<el-table-column prop="CheckMark" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="CheckDate" label="审核日期" width="120">
				<el-table-column prop="CheckMark" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="BillNum" label="原单号" width="140">
				<el-table-column prop="BillNum" label="" width="140"></el-table-column>
			</el-table-column>
			<el-table-column prop="ReceiveStartDate" label="收货开始作业时间" width="160">
				<el-table-column prop="ReceiveStartDate" label="" width="160"></el-table-column>
			</el-table-column>
			<el-table-column prop="ReceiveEndDate" label="收货结束作业时间" width="160">
				<el-table-column prop="ReceiveEndDate" label="" width="160"></el-table-column>
			</el-table-column>
			<el-table-column prop="ShelvesStartDate" label="上架开始作业时间" width="160">
				<el-table-column prop="ShelvesStartDate" label="" width="160"></el-table-column>
			</el-table-column>
			<el-table-column prop="ShelvesEndDate" label="上架结束作业时间" width="160">
				<el-table-column prop="ShelvesEndDate" label="" width="160"></el-table-column>
			</el-table-column>
			<el-table-column prop="DCName" label="配送中心" width="120">
				<el-table-column prop="DCName" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="ParkName" label="园区" width="120">
				<el-table-column prop="ParkName" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="PrintNum" label="打印次数" width="120">
				<el-table-column prop="PrintNum" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="FirstPrinter" label="首次打印人" width="120">
				<el-table-column prop="FirstPrinter" label="" width="120"></el-table-column>
			</el-table-column>
			<el-table-column prop="FirstPrintDate" label="首次打印时间" width="120">
				<el-table-column prop="FirstPrintDate" label="" width="120"></el-table-column>
			</el-table-column>

		</el-table>
		<div class='tongji'>
			<el-tag class='tag1'>共
				<span>20</span>条</el-tag>
			<el-tag class='tag2'>
				<span>0</span>
			</el-tag>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			peisong: '',//配送中心ID
			options:[{label:'全部',value:'0'}],//合作方列表
			backUpArr: [],
			yqlist: [],
			cities: [],
			djbh: '',
			zdrq: '',
			ksrq:'',//开始日期
			jsrq:'',//结束日期
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
			hzf: '0',//合作方ID
			shbz: '',
			receiveList: [],
			operateID:'',//保存订单信息
			formInline: {},
			activeName: '',
		};
	},
	mounted: function() {
		var that = this;
		$(".boxtab a").click(function() {
			var $this = $(this);
			var txt = $("span", $this).html();
		
			var tabarr = that.$parent.editableTabs2;
			var indexof = -1;
			for(var i = 0; i < tabarr.length; i++) {
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
		// 默认日期
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
		// 反生成单据
		fCreateBill() {
			if(this.operateID == '') {
				this.openAlert("未选择单据",'提示信息')
			} else {
				var jsons = {
					PlanID: this.operateID,//	作业单号	string
					UserID: userid,//	用户ID	int
					UserName: userName,//	用户名	string
				}
				// debugger;
				var that = this;

				this.openConfirm('你真的要反生成所选的单据吗？',()=>{
					$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.PDAModule.ReceivePlan.FCreateBill"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						if(obj.StateCode == 100) {
							that.openAlert("反生成单据成功", '系统提示', 'success')
							that.queryReceiving();
						} else{
							that.openAlert(obj.Message,'错误信息')
						}
					}
				})
				},()=>{

				})
			}
		},
		// 生成单据
		createBill() {
			if(this.operateID == '') {
				this.openAlert("未选择单据",'提示信息')
			} else {
				var jsons = {
					PlanID: this.operateID,//	作业单号	string
					UserID: userid,//	用户ID	int
					UserName: userName,//	用户名	string
				}
				// debugger;
				var that = this;

				this.openConfirm('确认无误，你真的要生成所选的单据吗？',()=>{
					$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.PDAModule.ReceivePlan.CreateBill"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						if(obj.StateCode == 100) {
							that.openAlert("生成单据成功", '系统提示', 'success')
							that.queryReceiving();
						} else{
							that.openAlert(obj.Message,'错误信息')
						}
					}
				})
				},()=>{

				})
			}
		},
		// 反审核订单
		antiOrder() {
			if(this.operateID == '') {
				this.openAlert("未选择单据",'提示信息')
			} else {
				var jsons = {
					PlanID: this.operateID,//	作业单号	string
					UserID: userid,//	用户ID	int
					UserName: userName,//	用户名	string
				}
				// debugger;
				var that = this;
				this.openConfirm('你真的要反审所选的单据吗？',()=>{
					$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.PDAModule.ReceivePlan.Anti"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						if(obj.StateCode == 100) {
							that.openAlert("反审核成功", '系统提示', 'success')
							that.queryReceiving();
						} else {
							that.openAlert(obj.Message,'错误信息')
						}
					}
				})
				},()=>{

				})
			}
		},
		// 审核订单
		auditOrder() {
			if(this.operateID == '') {
				this.openAlert("未选择单据",'提示信息')
			} else {
				var jsons = {
					PlanID: this.operateID,//	作业单号	string
					UserID: userid,//	用户ID	int
					UserName: userName,//	用户名	string
				}
				// debugger;
				var that = this;
				this.openConfirm('确认无误，你真的要审核所选的单据吗？',()=>{
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.PDAModule.ReceivePlan.Audit"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var obj = eval('(' + data + ')');
							if(obj.StateCode == 100) {
								that.openAlert("单据审核成功", '系统提示', 'success')
								that.queryReceiving();
							}	else{
								that.openAlert(obj.Message,'错误信息')
							}
						}
					})
				},()=>{

				})
			}
		},
			// 跳转查看页面
			watch() {
				var that = this;
				//跳转出库订单查看
				that.$router.replace({ path: '/pdack'}) 
				// 定义标签的名字
				let txt = "收货计划单"
				// 取得标签内容
				let tabarr = that.$parent.editableTabs2;
				// 定义一个是查看是否重复的信号量
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
			//行单击事件
			rowClick(row, event, column){
				localStorage.setItem("dataPlanID", row.PickID);
				this.operateID = row.PickID;
			},
			// 行双击
			dbRow(row,event) {
				// 保存当前的订单号
				localStorage.setItem("dataPlanID", row.PickID);
				this.watch(); //跳查看页
			},
			// 删除接口
		delect() {
			var that = this;
			if(that.operateID == '') {
				that.openAlert("未选择单据",'提示信息')
			} else {
				var jsons = {
					PlanID: this.operateID,//	作业单号	string
					UserID: userid,//	用户ID	int
					UserName: userName,//	用户名	string
				}
				this.openConfirm('你真的要删除所选的单据吗？',()=>{
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.PDAModule.ReceivePlan.Delete"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var obj = eval('(' + data + ')');
							if(obj.StateCode == 100) {
								that.queryReceiving();
							} else{
								that.openAlert(obj.Message,'错误信息')
							}
						}
					})
				},()=>{

				})
			}
		},
		//查询收货计划单列表
		queryReceiving(){
			let that = this;
			this.ajax({
				type:'Post',
				data:{
					datas:{
						UserID: 123,
						StartDate: new Date(this.ksrq).format('yyyy-MM-dd'),
						EndDate: new Date(this.jsrq).format('yyyy-MM-dd'),
						ParID: this.hzf,
						BillType: 2,
						DCID: this.peisong
					},
					method:'CPHH.PC.PDAModule.ReceivePlan.GetList'
				},
				success:function(data){
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.receiveList = data; //单据
				}
			})
		},
		// 拿到当前合作方ID
		/* gethzfID (val) {
			this.hzfID = val;
		}, */
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
		//获取合作方列表
		gethzflist(psid) {
			var that = this;
			this.ajax({
				type:'Post',
				data:{
					datas:{
						UserID: window.userid,
						DCID: psid,
						Value: ''
					},
					method:'CPHH.PC.BaseInfo.Partner.GetListInDC_All'
				},
				success:function(data){
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.options = data;
					that.backUpArr = data;
				}
			});
		},

		//模糊查询算法
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
		//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加a"
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
					if(thv != undefined && thv!="") {
						that.mohucha(thv, idx, $table);
					}

				});

			});
		},
		onSubmit() {
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
				that.peisong = data[0].DCID; //设置默认
				that.cities = data;
			});
		},
		// 配送与合作方数据绑定
		pschange: function() {
			var that = this;
			that.gethzflist(that.peisong);
		},
		//此方法是退出的函数
		closetag: function() {
			$(".is-active .el-icon-close").click();
		}
	}
}
</script>

<style scoped>
.shjhd .line {
	text-align: center;
	line-height: 50px;
}

.shjhd .grid-content p {
	min-width: 60px;
	text-align: center;
}

.shjhd .lines {
	text-align: right;
	line-height: 50px;
}

.shjhd .el-form-item__content {
	margin-top: 6px;
	margin-left: 10px;
}

.shjhd .el-table th>.cell {
	line-height: normal;
}

.shjhd .el-table tr:nth-child(2) th {
	background: none;
}

.datatable {
	width: 100%;
}


.buttondiv {
	margin-top: 12px;
	margin-left: 20px;
	display: table;
	float: left;
}

.formcx {
	width: 100%;
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
	background: url(../../../common/img/rk/baocun.png) no-repeat;
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

.bcsh {
	background: url(../../../common/img/rk/baocunshenhe.png) no-repeat;
	background-position: 5px 10px;
}

.syt {
	background: url(../../../common/img/rk/shangyitiao.png) no-repeat;
	background-position: 5px 10px;
}

.xyt {
	background: url(../../../common/img/rk/xiayitiao.png) no-repeat;
	background-position: 5px 10px;
}

.xddyp {
	background: url(../../../common/img/rk/xuandingdanyp.png) no-repeat;
	background-position: 5px 10px;
}

.xdd {
	background: url(../../../common/img/rk/xuandingdan.png) no-repeat;
	background-position: 5px 10px;
}

.el-row {
	margin: 5px 0 5px 0;
}

.tongji {
	text-align: center;
	margin-top: 5px;
}

.xz {
	background: url(../../../common/img/rk/plxg.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sc {
	background: url(../../../common/img/rk/sc.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sc {
	background: url(../../../common/img/rk/sc.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.chakan {
	background: url(../../../common/img/rk/cx.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.dc {
	background: url(../../../common/img/rk/daochu.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sh {
	background: url(../../../common/img/rk/shenhe.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.fs {
	background: url(../../../common/img/rk/fanshen.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.scdj {
	background: url(../../../common/img/rk/scdj.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.fscdj {
	background: url(../../../common/img/rk/fscdj.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.shzy {
	background: url(../../../common/img/rk/shzy.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.shysd {
	background: url(../../../common/img/rk/shys.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sjzy {
	background: url(../../../common/img/rk/sjzy.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sjzhiyin {
	background: url(../../../common/img/rk/sjzyd.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ctys {
	background: url(../../../common/img/rk/ctys.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.tc {
	background: url(../../../common/img/rk/tuichu.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sj-w {
	width: 193px;
}

.demo-form-inline {
	margin: 6px 0 6px 15px;
}
</style>