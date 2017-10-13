<template>
	<div class='rkthjhjhd'>
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<router-link to="pdajhjhdadd" class="watch">
							<div class="curbox xz">新增</div>
							<span style="display: none">入库退回拣货作业单</span>
						</router-link>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox xg">
							<span>修改</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<router-link to="pdajhjhdck" class="watch">
							<div class="curbox ck">查看</div>
							<span style="display: none">捡货计划单</span>
						</router-link>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sc">
							<span>删除</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dc">
							<span>导出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox fpry">
							<span>分配人员</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sh">
							<span>审核</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox fs">
							<span>反审</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox scdj">
							<span>生成订单</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox fscdj">
							<span>反生成订单</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox jhzy">
							<span>拣货作业</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dy">
							<span>打印(指引)</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox yl">
							<span>预览(指引)</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dy">
							<span>打印(复核)</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<!-- <span>窗体样式</span> -->
							<el-dropdown split-button @click="">
								窗体样式
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>保存样式</el-dropdown-item>
									<el-dropdown-item>恢复样式</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tc"@click="closetag">
							<span>退出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->

		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
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

							<p class=''>配送中心*:</p>

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

							<p class=''>合作方*:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
								<el-select v-model="hzf" default-first-option no-data-text="无数据"  filterable :filter-method="getCode" class='hzf  input_width'>
									<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
										<span style="float: left">{{ item.Code }}</span>
										<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
									</el-option>
								</el-select>
						</div>
					</el-col>
					<el-col :span="4" :offset="1">
						<div class="grid-content ">
							<el-button type="primary" size="small" @click='search' class='cx'>
								<i class='el-icon-search'></i>查询</el-button>
							<el-button type="primary" size="small" @click.native='' class='close'>
								<i class='el-icon-circle-cross'></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>

			</el-form>

			<!--form第二行，没有第二行-->

		</div>
		<!--搜索框完-->
		<!--表格-->
		<el-table class="table" @header-click="headerc" @row-click="rowClick" @row-dblclick="dbRow" :data="splbs"  highlight-current-row height="670" border style="width: 100%">
			<el-table-column type='selection' prop="" label="选定框" width="50">
				<el-table-column type='selection' prop="" label="选定框" width="50">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CheckMark" label="审核标志" width="110">
				<el-table-column prop="CheckMark" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="IsConfirm" label="创建状态" width="110">
				<el-table-column prop="IsConfirm" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="PickID" label="计划单号" width="110">
				<el-table-column prop="PickID" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="Date" label="日期" width="110">
				<el-table-column prop="Date" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="PickType" label="拣货类型" width="110">
				<el-table-column prop="PickType" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="Poster" label="制单人" width="110">
				<el-table-column prop="Poster" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="CreateDate" label="创建日期" width="110">
				<el-table-column prop="CreateDate" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="TotalQty" label="总数量" width="110">
				<el-table-column prop="TotalQty" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="PickQty" label="已拣数量" width="110">
				<el-table-column prop="PickQty" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="Status" label="状态" width="110">
				<el-table-column prop="Status" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="BillStatus" label="单据状态" width="110">
				<el-table-column prop="BillStatus" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="CreateMark" label="单据生成标志" width="110">
				<el-table-column prop="CreateMark" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="BigStockNameList" label="园区" width="110">
				<el-table-column prop="BigStockNameList" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="FWarehouseNameList" label="仓库" width="110">
				<el-table-column prop="FWarehouseNameList" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="Checker" label="审核人" width="110">
				<el-table-column prop="Checker" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="CheckDate" label="审核日期" width="110">
				<el-table-column prop="CheckDate" label="" width="110" class-name="mohucha"></el-table-column>
			  </el-table-column>
			</el-table-column>
			<el-table-column prop="PartnerName" label="合作方" width="110">
				<el-table-column prop="PartnerName" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="Tactics" label="拣货策略" width="110">
				<el-table-column prop="Tactics" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="CompanyID" label="客户编号" width="110">
				<el-table-column prop="CompanyID" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="companyname" label="客户名称" width="110">
				<el-table-column prop="companyname" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="WaveBatchID" label="拣货波次号" width="150">
				<el-table-column prop="WaveBatchID" label="" width="150" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="PickStartDate" label="开始作业时间" width="150">
				<el-table-column prop="PickStartDate" label="" width="150" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="PickEndDate" label="结束作业时间" width="150">
				<el-table-column prop="PickEndDate" label="" width="150" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="WorkType" label="拣货作业方式" width="150">
				<el-table-column prop="WorkType" label="" width="150" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="Rule" label="拣货规则" width="110">
				<el-table-column prop="Rule" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="StockType" label="拣货仓位" width="110">
				<el-table-column prop="StockType" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="DCName" label="配送中心" width="110">
				<el-table-column prop="DCName" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="DeptName" label="部门" width="110">
				<el-table-column prop="DeptName" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="UserNameList" label="分配人员" width="110">
				<el-table-column prop="UserNameList" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="Remarks" label="备注" width="110">
				<el-table-column prop="Remarks" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="PrintNum" label="复核打印次数" width="150">
				<el-table-column prop="PrintNum" label="" width="150" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="PreSendNo" label="预配单号" width="110">
				<el-table-column prop="PreSendNo" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="CreateBillDate" label="单据生成时间" width="150">
				<el-table-column prop="CreateBillDate" label="" width="150" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="ReviewArea" label="复核区" width="110">
				<el-table-column prop="ReviewArea" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="GuidePrintCount" label="指引打印次数" width="150">
				<el-table-column prop="GuidePrintCount" label="" width="150" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>
			<el-table-column prop="CustArea" label="客户区域" width="110">
				<el-table-column prop="CustArea" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			</el-table-column>

		</el-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			formInline:[],
			pickerOptions1:'',
			pickerOptions2:'',
			splbs: [],//商品列表
			backUpArr: [], //备份合作方
			formStacked: {
				name: '',
				region: '',
				type: ''
			},
				pszx: false, //配送中心禁选
				peisong: '',
				ksrq:'',//开始日期
				jsrq:'',//结束日期
				cities: [],
				options:[
					{label:'全部',value:'0'}
				], //合作方列表
				hzf:'0'
		};
	},
	mounted: function(){
			var that = this;
			$(".boxtab a").click(function() {
				window.myEle.OpenTab.call(this, that);
			});
			var myDate = new Date();
			that.ksrq = myDate.format('yyyy-MM-dd');
			that.jsrq = myDate.format('yyyy-MM-dd');
			// 先获取一次配送列表
			that.getdclist();
		},
		methods: {
			// 跳转查看页面
			watch() {
				var that = this;
				//跳转出库订单查看
				that.$router.replace({ path: '/pdajhjhdck'}) 
				// 定义标签的名字
				let txt = "捡货计划单"
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
				localStorage.setItem("ckdataPlanID", row.PickID);
				this.operateID = row.PickID;
			},
			// 行双击
			dbRow(row,event) {
				// 保存当前的订单号
				localStorage.setItem("ckdataPlanID", row.PickID);
				this.watch(); //跳查看页
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
			// 查询
			search (){
				var jsons = {
					UserID: userid,//	用户ID	int	
					StartDate:$('#ksrq input').val(), //	起始日期
					EndDate:$('#jsrq input').val() ,//	截止日期
					ParID: this.hzf || 0,//	合作方ID	string	
					BillType: 1,//	单据类型	int	1入库订单 2出库订单
					DCID: this.peisong, //	配送中心ID	int	
				}
				// debugger;
				var that = this;
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.PDAModule.PickPlan.GetList"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.splbs = data; //单据
					}
				})
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
		// 配送与园区数据绑定
		pschange: function() {
			var that = this;
			that.gethzflist(that.peisong);
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
					// console.log(444,$datath);
					$datath.each(function() {
						var $this = $(this);
						 
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(333,thv,idx);
						if(thv != undefined&&thv!="") {
							that.mohucha(thv, idx, $table);
						}
					});
				});
			},
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
			}
	}
}
</script>
<style type="text/css">
	.rkthjhjhd .el-icon-date{
		top: 0;
	}
	
</style>
<style rel="stylesheet/stylus" scoped>
/* @import url("../../common/css/rkthjhjhd/rkthjhjhd.css"); */

.rkthjhjhd .grid-content p {
	min-width: 60px;
	text-align: center;
}

.rkthjhjhd .el-button--small {
	width: 80px;
}

.rkthjhjhd .el-form {
	margin: 5px 0;
}

.rkthjhjhd .el-table {
	overflow: inherit;
}
.but-box{
	height:40px;
	background: #eeeded;
}
@media screen and (max-width: 1550px) {
	.but-box {
    height: 80px !important;

	}
}
</style>