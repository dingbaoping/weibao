<template>
	<div class='rkthshjhd'>
		<!--头部导航-->
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
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
		<el-tabs type="border-card"  v-model="activeName">
			<el-tab-pane label="选择入库订单" :disabled="step != 1" name='101'>
				<div class="searchnav">
					<!--form第一行-->
					<el-form :inline="true"  class="demo-form-inline form1">
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
										<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
											<span style="float: left">{{ item.Code }}</span>
											<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
										</el-option>
									</el-select>
									<!-- 合作方列表结束 -->

								</div>
							</el-col>
							<el-col :span="4">
								<div class="grid-content ">
									<el-button type="primary" @click.native='' class='cx' @click="searchInfo"><i class='el-icon-search'></i>查询</el-button>
									<el-button type="primary" @click.native='' class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
								</div>
							</el-col>
						</el-row>

					</el-form>

					<!--form第二行，没有第二行-->

				</div>
				<!--搜索框完-->
				<!--表格-->
				<el-table :data="tableData3" height="550" border style="width: 100%"
					@header-click="headerc" @row-click="selectionRow">
					<el-table-column prop="StorageDate" label="日期" width="auto">
						<el-table-column prop="StorageDate" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="StorageID" label="单据编号" width="auto">
						<el-table-column prop="StorageID" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="Type" label="单据类型" width="auto">
						<el-table-column prop="Type" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="SuppierName" label="供应商" width="auto">
						<el-table-column prop="SuppierName" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="Total" label="单据金额" width="auto">
						<el-table-column prop="Total" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="BillNum" label="源单号" width="auto">
						<el-table-column prop="BillNum" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="SalesMan" label="采购员" width="auto">
						<el-table-column prop="SalesMan" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="Remarks" label="备注" width="auto">
						<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="Arrival_time" label="预计到达时间" width="150">
						<el-table-column prop="Arrival_time" label="" width="150" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="Poster" label="制单人" width="auto">
						<el-table-column prop="Poster" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="Checker" label="审核人" width="auto">
						<el-table-column prop="Checker" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="CheckDate" label="审核日期" width="auto">
						<el-table-column prop="CheckDate" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="ParName" label="合作方" width="auto">
						<el-table-column prop="ParName" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="RMark" label="引用说明" width="auto">
						<el-table-column prop="RMark" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="address" label="配送中心" width="auto">
						<el-table-column prop="date" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					<el-table-column prop="DeptName" label="部门" width="auto">
						<el-table-column prop="DeptName" label="" width="auto" class-name="mohucha"></el-table-column>
					</el-table-column>
					
				</el-table>
			</el-tab-pane>
			<el-tab-pane label="选择生成规则" :disabled="step != 2" name='102'>
				<el-row>
					<el-col :span="12">
						<div class="grid-content bg-purple"><p>生成规则：</p></div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content bg-purple-light">
							<el-select v-model="scgz" placeholder="">
								<el-option v-for="item in scgzlist" :key="item.value" :label="item.label" :value="item.lebel">
														
								</el-option>
							</el-select>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content bg-purple"><p>收货园区：</p></div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content bg-purple-light">	
							<el-select v-model="yq" placeholder="" disabled>
								<el-option v-for="item in yqList" :key="item.lebel" :label="item.label" :value="item.value">
								</el-option>
							</el-select></div>
					</el-col>
				</el-row>

			</el-tab-pane>
		</el-tabs>
		<div id="button">
			<el-button @click='onSyb' :disabled='step == 1'>上一步</el-button>
			<el-button @click='onXyb' :disabled='step == 2'>下一步</el-button>
			<el-button @click='searchInfo' :disabled='step != 2' >确认</el-button>
			<el-button @click=''>取消</el-button>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				step: 1,
				pszx: false, //配送中心禁选
				ksrq:'', //开始日期
				jsrq:'', //结束日期
				peisong: '0',
				hzf: '全部',
				rq1: '',
				rq2: '',
				formInline: '',
				tableData3: [],
				options: [], // 合作方列别
				backUpArr: [], // 合作方列表备份
				cities: [],
				activeName: '101',
				scgz:'',
				scgzlist:[{lebel:"按仓库", value:111,}],
				second:false,
				first:false,
				yq: '',
				yqList: []
			};
		},
		mounted: function() {
			var that = this;
			//订单日期的默认值
			var myDate = new Date();
			that.ksrq = myDate.format('yyyy-MM-dd');
			that.jsrq = myDate.format('yyyy-MM-dd');
			// 先获取一次配送列表
			that.getdclist();
			that.gethzflist();
		},
		methods: {
			// 点击查询
			searchInfo () {
				 var that = this;
				 if(that.hzf == "全部") {
					 that.hzf = 0;
				 }
				that.loading = true;
				var params = {
					UserID: window.userid,
					StartDate: new Date(this.ksrq).format('yyyy-MM-dd'),
					EndDate: new Date(this.jsrq).format('yyyy-MM-dd'),
					ParID: that.hzf || 0,
         	DCID: that.peisong,
				};
				$.ajax({
					url: "http://116.62.171.144/post/index.php",
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: "CPHH.PC.PDAModule.ReceivePlan.GetStorageOrderList"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						console.log("列表   ",data);
						that.tableData3 = data;
						that.loading = false;
						if(that.hzf == 0) {
							that.hzf = "全部";
						}
					}
				})
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
						method:'CPHH.PC.BaseInfo.Stock.GetDCList'
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
			// 配送与园区数据绑定
			pschange: function() {
				this.gethzflist(this.peisong);
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
			//表格选中行
			selectionRow(row){
				this.billId = row.OutID;
			},
			open(content,title) {
				this.$alert(content, title, {
					type: 'info',
					confirmButtonText: '确定'
				});
			},
			//下一步的函数 阻止下一步的事件根据每个页面另写
			onXyb() {
				//判断是否选择单据
				if(!this.billId){
					this.open('未选择内容','系统提示');
					//return;
				}
				var that = this;
				var bsNumber = Number(that.activeName);
				if(bsNumber < 102) {
					// if (true) {
					// 	return
					// }
					bsNumber += 1;
					that.second=true;
					that.first=false;
				} else {
					bsNumber = 102;
					that.second=true;
				}
				that.activeName = bsNumber.toString();

			},
			//上一步的函数 阻止下一步的事件根据每个页面另写
			onSyb() {
				var that = this;
				var bsNumber = Number(that.activeName);
				if(bsNumber > 101) {
					bsNumber -= 1;
					that.second=false;
					that.first=true;
				} else {
						that.second=false;
						
						bsNumber = 101;
						console.log("控制数字是"+bsNumber)
					
				}
				that.activeName = bsNumber.toString();
				
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
			handleClick(){

			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			},
		}
	}
</script>
<style>
	.rkthshjhd .el-tabs__content{
		padding-top: 0!important;
	}
	.rkthshjhd .el-input{
		width: 100%;
	}
	.rkthshjhd .searchnav{
		padding-bottom: 6px;
	}
	.rkthshjhd .el-icon-date{
		top: 0;
	}
	.rkthshjhd .el-tab-pane{
		height: 590px!important;
	} 
	.rkthshjhd #button{
		width: 400px;
		float: right;
	}
</style>
<style rel="stylesheet/stylus" scoped>
	/*@import url("../../common/css/shjhd/shjhd_vue.css");*/
	
	.input_width {
		width: 100%!important;
	}
	
	.el-row {
		margin-top: 10px;
		margin-bottom: 10px;
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
	.el-tab-pane{
		height:570px;
		
	}
	
</style>