<template>
	<div class='ckfhzyd'>
		<!--出库复核作业单-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox xz">
							<span>新增</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<router-link to="pdafhzyck" class="watch">
							<div class="curbox ck">查看</div>
							<span style="display: none">复核作业单</span>
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
						<div class="curbox ctys">
							<!-- <span>窗体样式</span> -->
							<el-dropdown split-button >
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
		<!--form第一行-->
		<el-form :inline="true"  class="demo-form-inline form1">
			<el-row :gutter="10">
				<el-col :span="2">
					<div class="grid-content ">
						<el-select v-model="cjrq" placeholder="" class="rq1">
							<el-option v-for="item in cjrqs" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</el-col>

				<el-col :span="3" class="sj-w">
					<div class="grid-content ">
						<el-date-picker id="ksrq" type="date" placeholder="选择日期" v-model="ksrq" align="right" :picker-options="pickerOptions1"></el-date-picker>
					</div>
				</el-col>
				<el-col :span="1">
					<div class="grid-content ">
						<p class=''>至</p>
					</div>
				</el-col>
				<el-col :span="3" class="sj-w">
					<div class="grid-content ">
						<el-date-picker id="jsrq" type="date" placeholder="选择日期" v-model="jsrq" align="right" :picker-options="pickerOptions1"></el-date-picker>

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
				<el-col :span="2" >
					<div class="grid-content ">
						<p class=''>合作方*:</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
								<el-select v-model="hzf" default-first-option no-data-text="无数据" @change="" filterable :filter-method="getCode" class='hzf  input_width'>
									<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
										<span style="float: left">{{ item.Code }}</span>
										<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
									</el-option>
								</el-select>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-button type="primary" size="small" @click.native='search' class='cx'>
							<i class='el-icon-search'></i>查询</el-button>
						<el-button type="primary" size="small" class='close'>
							<i class='el-icon-circle-cross'></i>关闭</el-button>
					</div>
				</el-col>
			</el-row>
		</el-form>

		<!--搜索框完-->
		<!--表格-->
		<el-table :data="splbs" @row-click="rowClick" @row-dblclick="dbRow"height="640" highlight-current-row border style="width: 100%" >

			<el-table-column type='selection' prop="" label="选定框" width="50">
				<el-table-column prop="Date" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>

			<el-table-column prop="PickID" label="计划单号" width="auto">
				<el-table-column prop="PickID" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>

			<el-table-column prop="PickOperateID" label="作业单号" width="110">
				<el-table-column prop="PickOperateID" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>

			<el-table-column prop="Date" label="日期" width="auto">
				<el-table-column prop="Date" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>

			<el-table-column prop="BillID" label="出库单号" width="auto">
				<el-table-column prop="BillID" label="" width="110" class-name="mohucha"></el-table-column>
	    </el-table-column>

			<el-table-column prop="PickQty" label="数量" width="auto">
				<el-table-column prop="PickQty" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>

			<el-table-column prop="Status" label="状态" width="auto">
				<el-table-column prop="Status" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>

			<el-table-column prop="Poster" label="制单人" width="auto">
				<el-table-column prop="Poster" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>

			<el-table-column prop="CreateDate" label="创建日期" width="auto">
				<el-table-column prop="CreateDate" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>

			<el-table-column prop="CompanyID" label="客户编号" width="auto">
				<el-table-column prop="CompanyID" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>

			<el-table-column prop="CompanyName" label="客户名称" width="auto">
				<el-table-column prop="CompanyName" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>

			<el-table-column prop="StartDate" label="开始作业时间" width="auto">
				<el-table-column prop="StartDate" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
		
		</el-table>
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
			backUpArr:[],// 合作方备份
			splbs:[],// 存放表格数据
			checked: true,
			formStacked: {
				name: '',
				region: '',
				type: ''
			},

			pszx: false, //配送中心禁选
			peisong: '',
			cities: [],
			cjrq: '1',//创建日期
			cjrqs:[
				{label:'创建日期',value:'1'},
				{label:'开始与结束日期',value:'2'},
			],

			djbh: '',
			zdrq: '',

			ksrq:'',//开始日期
			jsrq:'',//结束日期
			options:[{label:'全部',value:'0'}],
			hzf: '0',
			pickerOptions1:'',//日期
			pickerOptions2:'',//日期
			shbz: '',
			tabledata3: [],
			formInline: [],
			activeName: '',
		};
	},
	mounted: function() {
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
			// 先获取一次配送列表
		that.getdclist();
	},

	methods: {
			// 跳转查看页面
			watch() {
				var that = this;
				//跳转出库订单查看
				that.$router.replace({ path: '/pdafhzyck'}) 
				// 定义标签的名字
				let txt = "复核作业单"
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
				localStorage.setItem("fhzyBill", row.PickID);
			},
			// 行双击
			dbRow(row,event) {
				// 保存当前的订单号
				localStorage.setItem("fhzyBill", row.PickID);
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
		// 配送与园区数据绑定
		pschange: function() {
			var that = this;
			that.gethzflist(that.peisong);
		},
		// 查询
		search (){
			var jsons = {
				UserID: userid,//	用户ID	int	
				StartDate:$('#ksrq input').val(), //	起始日期
				EndDate:$('#jsrq input').val() ,//	截止日期
				ParID: this.hzf || 0,//	合作方ID	string	
				DateType: this.cjrq,//	日期类型	string	创建日期 开始作业时间
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
					method: "CPHH.PC.PDAModule.CheckOperate.GetList"
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
					that.cities = data;
					that.peisong = data[0].DCID;
				});
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
		}
	}
}
</script>

<style>
.ckfhzyd .grid-content p {
	min-width: 60px;
	text-align: center;
}

.ckfhzyd .el-button {
	height: 32px;
	width: 70px;
}
.ckfhzyd .el-date-editor--date{
	width:100%;
}
.ckfhzyd .el-icon-date{
	top: 0;
}
</style>