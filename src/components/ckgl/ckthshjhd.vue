<template>
	<div class='shjhd'>
		<!--头部导航-->
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox ctms">
							<span>窗体模式</span>
						</div>
					</div>
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
		<!-- 这里是导航栏部分结束 -->
		<el-tabs type="border-card" v-model='activeName'>
			<el-tab-pane :disabled="step != 1" label="第一步【选择出库订单】" name='101'>
				<div class="searchnav">
					<!--form第一行-->
					<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
						<el-row :gutter="10">

							<!--check-->
							<el-col :span="3">
								<div class="grid-content ">
									<el-date-picker v-model="ksrq" align="right" type="date" placeholder="选择日期">
									</el-date-picker>
								</div>
							</el-col>
							<el-col :span="1">
								<div class="grid-content ">
									<p>至</p>

								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content ">

									<el-date-picker v-model="jsrq" align="right" type="date" placeholder="选择日期">
									</el-date-picker>
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
									<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
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
							<el-col :span="4">
								<div class="grid-content ">
									<el-button type="primary" @click.native='queryBill' class='cx'>
										<i class='el-icon-search'></i>查询</el-button>
									
								</div>
							</el-col>
						</el-row>

					</el-form>

					<!--form第二行，没有第二行-->

				</div>
				<!--搜索框完-->
				<!--表格-->
				<el-table :data="tableData3" height="550" border style="width: 100%" :highlight-current-row="true" v-loading.body="loading" element-loading-text="玩命加载中"
				 @header-click="headerc" @row-click="selectionRow" >
					
					<el-table-column prop="OMark" label="单据状态" width="auto">
						<el-table-column prop="OMark" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="OutID" label="单据编号" width="auto">
						<el-table-column prop="OutID" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Type" label="出库类型" width="auto">
						<el-table-column prop="Type" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="OutDate" label="日期" width="auto">
						<el-table-column prop="OutDate" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="CusCode" label="客户编号" width="auto">
						<el-table-column prop="CusCode" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="CusName" label="客户名称" width="auto">
						<el-table-column prop="CusName" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Total" label="单据金额" width="auto">
						<el-table-column prop="Total" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="SalesMan" label="业务员" width="auto">
						<el-table-column prop="SalesMan" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="address" label="合同号" width="auto">
						<el-table-column prop="name" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Delivery" label="交货方式" width="auto">
						<el-table-column prop="Delivery" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="address" label="交货日期" width="auto">
						<el-table-column prop="name" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="DeliveryAddress" label="交货地点" width="auto">
						<el-table-column prop="DeliveryAddress" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Remarks" label="备注" width="auto">
						<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha">
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
						<el-table-column prop="CheckDate" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="ParName" label="合作方" width="auto">
						<el-table-column prop="ParName" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="address" label="是否寄卖" width="auto">
						<el-table-column prop="name" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="SubmitStatus" label="提交状态" width="auto">
						<el-table-column prop="SubmitStatus" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="address" label="厂站直调" width="auto">
						<el-table-column prop="name" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>

				</el-table>
			</el-tab-pane>
			<el-tab-pane :disabled="step != 2" label="第二步【选择生成规则】" name='102'>
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<p>生成规则:</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<!-- 生成规则 -->
							<el-select v-model="scgz" filterable placeholder="" class=" blueborder input_width">
								<el-option v-for="item in scgzlist" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>收货园区:</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<!-- 收货园区列表 -->
							<el-select v-model="yuanqu" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<!--{{item}}-->
									<!--<span style="float: left">{{ item.ParkID }}</span>-->
									<span style="float: left; padding-left: 15px;">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
							<!-- 合作方列表结束 -->
						</div>
					</el-col>
				</el-row>
			</el-tab-pane>
			<div class='tongji'>
				<div class="right">
					<el-button type="primary" icon="arrow-left" @click='onBack' :disabled='step == 1'>上一步</el-button>
					<el-button type="primary" icon="arrow-right" @click='onNext' :disabled='step == 2'>下一步</el-button>
					<el-button type="primary" icon="circle-check" @click="submit" :disabled='step != 2'>确认</el-button>
					<el-button type="primary" icon="circle-close" @click="closetag">取消</el-button>
				</div>
			</div>

		</el-tabs>

	</div>
</template>

<script>
export default {
	data() {
		return {
			step: 1,
			loading: false,
			pszx: false, //配送中心禁选
			peisong: '',
			hzf: '',
			ksrq: '',
			jsrq: '',
			formInline: '',
			billId:'',
			tableData3: [],
			options: [], // 合作方列别
			backUpArr: [], // 合作方列表备份
			cities: [],
			yqlist: [],//园区部分
			yuanqu: '',
			scgz: '',
			scgzlist: [{ DCName: '按园区', DCID: '' }],
			activeName: '101',
		};
	},
	mounted: function() {
		var that = this;
		// 默认日期
		var myDate = new Date();
		that.ksrq = myDate.format('yyyy-MM-dd');
		that.jsrq = myDate.format('yyyy-MM-dd');
		that.getdclist();
		that.gethzflist();

		$('.close').click(function() {
			$('.ddsp').hide();
		});
	},
	methods: {
		//获取出货订单
		queryBill(){
			this.tableData3 = [{OMark:123,OutID:123},{OMark:23,OutID:123}];
			return;
			this.ajax({
				type:'Post',
				data:{
					datas:{
						UserID: window.userid,
						StartDate: new Date(this.ksrq).format('yyyy-MM-dd'),
						EndDate: new Date(this.jsrq).format('yyyy-MM-dd'),
						ParID: this.hzf,
						BillType: 2,
						DCID: this.peisong
					},
					method:'CPHH.PC.PDAModule.ReceivePlan.GetOutOrderList'
				},
				success:function(data){
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.tableData3 = data; //单据
				}
			})
		},
		//模糊查询算法
		mohucha: function(val, index, $table) {
			var v = val;
			var $trArr = $("tr", $table);
			var trlen = $trArr.length;
			for (var i = 0; i < trlen; i++) {
				var $tr = $($trArr[i]);

				var iv = $($("td .cell", $tr)[index]).html().indexOf(v); //匹配是否含有

				if (iv <= -1) {
					$tr.hide();
				}
			}
		},
		//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加  class-name="mohucha"
		headerc: function(column, event) {
			var $dom = $("div", event.currentTarget); //当前点击的元素
			if (!$(event.currentTarget).hasClass("mohucha")) {
				return false;
			}
			var data = column.property; //需要匹配的标识
			var index = $dom.parent().index(); //列坐标,用来匹配用
			var $datath = $("th.mohucha", $(".table")); //匹配行Th
			var $table = $($(".table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

			var that = this;
			var $inp = $("<input type='text' class='rowinp' />");
			var val = $dom.html(); //当前val
			if (val.indexOf("<input") != -1) {
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
					if (thv != undefined && thv != "") {
						that.mohucha(thv, idx, $table);
					}

				});

			});
		},
		// 获取配送中心列表
		getdclist: function() {
			var that = this;
			this.ajax({
				type:'Post',
				data:{
					datas:{
						UserID: window.userid
					},
					method:'CPHH.PC.BaseInfo.Stock.GetDCList_All'
				},
				success:function(data){
					var obj = eval('(' + data + ')');

					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.peisong = data[0].DCID; //设置默认
					that.cities = data;
				}
			});
		},
		// 配送与合作方数据绑定
		pschange: function() {
			this.gethzflist(this.peisong);
		},
		// 获取合作方列表
		gethzflist: function(psid) {
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
		// 让CodeID  也成为搜索内容
		getCode(val) {
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
		//表格选中行
		selectionRow(row){
			this.billId = row.OutID;
		},
		open(title,content) {
			this.$alert(content, title, {
				type: 'info',
				confirmButtonText: '确定'
			});
		},
		//下一步的函数 阻止下一步的事件根据每个页面另写
		onNext() {
			//判断是否选择单据
			if(!this.billId){
				this.open('系统提示','未选择内容');
				return;
			}
			var that = this;
			that.step++
			that.step > 2 ? that.step = 1 : '';	
			that.activeName = '102';

		},
		//获取规则
		getscgzList(){
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
					that.scgzlist = data;
				}
			});
		},
		//获取园区
		getyqList(){
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
					that.yqList = data;
				}
			});
		},
		//上一步的函数 阻止下一步的事件根据每个页面另写
		onBack() {
			var that = this;
			that.step--
			that.step < 0 ? that.step = 1 : '' ;
			
			that.activeName = '101';

		},
		//确认提交
		submit(){
			var that = this;
			this.ajax({
				type:'Post',
				data:{
					datas:{
						BillType: 2,
						UserID: window.userId,
						UserName: window.userName,
						ParID: this.ParID,//合作方ID
						ParkID: this.ParID,//园区ID
						ParkName: this.ParID,//园区名称
						BillID: this.billId,//订单号
					},
					method:'CPHH.PC.BaseInfo.Partner.GetListInDC_All'
				},
				success:function(data){
					//返回生成的收货计划单号
				}
			});
		},
		//此方法是退出的函数
		closetag: function() {
			$(".is-active .el-icon-close").click();
		},
	}
}
</script>

<style rel="stylesheet/stylus" scoped>
/*@import url("../../common/css/shjhd/shjhd_vue.css");*/

.input_width {
	width: 100%!important;
}

.el-row {
	margin-top: 10px;
	margin-bottom: 10px;
}

.tongji {
	padding-top: 5px;
}

.tongji .right {
	float: right;
	padding-right: 20px;
}

.shjhd .grid-content p {
	min-width: 70px;
}

.shjhd .grid-content {
	text-align: center;
}

.shjhd .el-date-editor.el-input {
	width: 100%;
}

.shjhd .el-table {
	overflow: inherit;
}
</style>