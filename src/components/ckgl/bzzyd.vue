<template>
	<div class='bzzyd'>
		<!--播种作业单-->
		<div class="but-box">
			<ul>
				<li>					
					<div class="boxtab">
						<router-link to="pdabzzyck" class="watch">
							<div class="curbox ck">查看</div>
							<span style="display: none">播种作业单</span>
						</router-link>
					</div>
					<div class="boxtab">
						 <div class="curbox sc">
						 	 <span>删除</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox dc">
						 	 <span>导出</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>				
				<li>					
					<div class="boxtab">
						 <div class="curbox ctys">
						 	 <!-- <span>窗体样式</span> -->
								<el-dropdown split-button  @click="handleClick">
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
						 <div class="curbox tc close"@click="closetag">
						 	 <span>退出</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
			</ul>
		</div>
			<!--form第一行-->
			<el-form :inline="true" class="demo-form-inline form1">
				<el-row :gutter="10">
					<el-col :span="3" class="sj-w">
						<div class="grid-content ">
							<el-date-picker type="date" placeholder="选择日期" v-model="ksrq" align="right" :picker-options="pickerOptions"></el-date-picker>
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<p class=''>至</p>
						</div>
					</el-col>
					<el-col :span="4" class="sj-w">
						<div class="grid-content ">
							<el-date-picker type="date" placeholder="选择日期" v-model="jsrq" align="right" :picker-options="pickerOptions"></el-date-picker>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p class=''>配送中心*:</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-select v-model="pszx" @change="pschange" placeholder="" class='pszx fr' filterable >
								<el-option v-for="item in pszxArray" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
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
							<el-select v-model="hzf" placeholder="全部" class='hzf fr' filterable :filter-method="getCode">
								<el-option v-for="item in hzfArray" :key="item.Code" :label="item.Name" :value="item.InterID">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content ">
							<el-button type="primary" size="small" @click.native='seach' class='cx'><i class='el-icon-search'></i>查询</el-button>
							<el-button type="primary" size="small" class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>
			</el-form>
		<!--搜索框完-->
		<!--表格-->
		<div class='table'>
		<el-table :data="tableData3"highlight-current-row @row-click="rowClick" @row-dblclick="dbRow"height="650" border style="width: 100%"   >
			<el-table-column type='selection'  prop="" label="" width="50">
			</el-table-column>
			<el-table-column prop="PickID" label="拣货计划单号" width="auto">
			</el-table-column>
			<el-table-column prop="SowOperateID" label="拣货作业单号" width="auto">
			</el-table-column>
			<el-table-column prop="Date" label="日期" width="auto">
			</el-table-column>
			<el-table-column prop="Poster" label="制单人" width="auto">
			</el-table-column>
			<el-table-column prop="CreateDate" label="创建日期" width="auto">
			</el-table-column>
			<el-table-column prop="SowQty" label="播种数量" width="auto">
			</el-table-column>
		</el-table>
		</div>
		<div class='tongji'>
			<el-tag class='tag1'>共<span>20</span>条</el-tag>
			<el-tag class='tag2'><span>0</span></el-tag>
		</div>
	</div>

</template>

<script>
export default {
	data() {
		return {
			ksrq:'',//开始日期
			jsrq:'',//结束日期
			pickerOptions: {
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
			hzfArray: [],//合作方数组
			backUpArr:[],// 合作方列表备份
			pszx: '0',//配送中心ID
			pszxArray:[],//配送中心数组
			tableData3:[]
		};
	},
	mounted: function (){
			// 点击a链接新加一个标签页
			$(".boxtab a").click(function() {
				window.myEle.OpenTab.call(this, that);
			});
		var that = this;
		var myDate = new Date();
		var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
		var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
		var d = myDate.getDate(); //获取当前日(1-31)
		var today = y + "-" + m + "-" + d;
		that.ksrq = today;
		that.jsrq = today;
		that.getdclist();
		that.gethzflist();
	},
	methods: {
			// 跳转查看页面
			watch() {
				var that = this;
				//跳转出库订单查看
				that.$router.replace({ path: '/pdabzzyck'}) 
				// 定义标签的名字
				let txt = "播种作业单"
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
				this.operateID = row.PickID;
				localStorage.setItem("bzzyBill", row.PickID);
			},
			// 行双击
			dbRow(row,event) {
				// 保存当前的订单号
				localStorage.setItem("bzzyBill", row.PickID);
				this.watch(); //跳查看页
			},
		//查询
		seach(){
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
						DCID: this.pszx
					},
					method:'CPHH.PC.PDAModule.SecondPickPlan.GetList'
				},
				success:function(data){
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.tableData3 = data; //单据
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
					method:'CPHH.PC.BaseInfo.Stock.GetDCList_All'
				},
				success:function(data){
					var obj = eval('(' + data + ')');

					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.pszx = data[0].DCID; //设置默认
					that.pszxArray = data;
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
					that.hzfArray = data;
					that.backUpArr = data;
				}
			});
		},
		// 配送与合作方数据绑定
		pschange: function() {
			var that = this;
			that.gethzflist(that.pszx);
		},
		// 搜索内容
		getCode (val) {
			if (val) { //val存在 
				this.hzfArray = this.backUpArr.filter((item) => {
				if (!!~item.Name.indexOf(val) || !!~item.Code.indexOf(val)) {
					return true
				}
				})
			} else { //val为空时，还原数组
				this.hzfArray = this.backUpArr
			}
		},	 
		//导出
		handleClick(){

		},
		//此方法是退出的函数
		closetag:function(){
			$(".is-active .el-icon-close").click();
		}
	}
}
</script>

<style>
.bzzyd .grid-content p {
	min-width: 60px;
	text-align: center;
}	
.bzzyd .el-button {
	height: 32px;
	width: 70px;
}
.bzzyd .grid-content button{
	height: 28px!important;
}
.bzzyd .el-form{
	margin: 5px 0 5px 15px;
}
</style>