<template>
	<div class='jbshrkzyd'>
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox ck"><span>查看</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sc"><span>删除</span></div>
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
			<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
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
						<div class="grid-content fr">
							<el-button type="primary" size="small" @click="search" class='cx'><i class='el-icon-search'></i>查询</el-button>
							<!--<el-button type="primary" size="small" @click.native='' class='close'><i class='ico7'></i>关闭</el-button>-->
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content fl">
							<!--<el-button type="primary" size="small" @click.native='' class='cx'><i class='ico6'></i>查询</el-button>-->
							<el-button type="primary" size="small" @click.native='' class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>

			</el-form>

			<!--form第二行，没有第二行-->

		</div>
		<!--搜索框完-->
		<!--表格-->
		<el-table @header-click="headerc" @row-click="rowClick" :data="rkds" @selection-change="handleSelectionChange" highlight-current-row height="665" border style="width: 100%">
			<el-table-column prop="date" label="选定框" min-width="60">
				<el-table-column type='selection' prop="" label="选定框" width="60">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="name" label="作业单号" min-width="auto">
				<el-table-column prop="StorageDate" label="" width="auto" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="name" label="业务单号" min-width="auto">
				<el-table-column prop="StorageDate" label="" width="auto" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="address" label="配送中心" min-width="auto">
				<el-table-column prop="StorageDate" label="" width="auto" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="address" label="园区" min-width="auto">
				<el-table-column prop="StorageDate" label="" width="auto" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="address" label="操作人" min-width="auto">
				<el-table-column prop="StorageDate" label="" width="auto" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="address" label="操作时间" min-width="auto">
				<el-table-column prop="StorageDate" label="" width="auto" class-name="mohucha"></el-table-column>
			</el-table-column>
			
		</el-table>
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
				pszx: false, //配送中心禁选
				ksrq:'',//开始日期
				jsrq:'',//结束日期
				peisong: '',
				rkds: [],
				cities: [],
				formInline: {},
				pickerOptions1: '',
				pickerOptions2: '',
				options:[],
				hzf:''
			};
		},

		mounted: function() {
			// 先获取一次配送列表
			var that = this;
			var myDate = new Date();
			var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
			var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			var d = myDate.getDate(); //获取当前日(1-31)
			var today = y + "-" + m + "-" + d;
			that.ksrq = today;
			that.jsrq = today;
			that.getdclist();
		},
		methods: {
			onSubmit() {
				console.log('submit!');
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
						if(thv != undefined&&thv!="") {
							that.mohucha(thv, idx, $table);
						}
					});
				});
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
				});
			},
			// 获取合作方列表
			gethzflist: function(psid) {
				var that = this;
				that.baseAjax("getlistindc", {
					UserID: window.userid,
					DCID: psid
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.options = data;
					that.backUpArr = data;
					console.log(data);
				});
			},
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				that.gethzflist(that.peisong);
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			},
			// 窗口样式
			handleClick () {

			},
			// 表格单击
			rowClick () {

			},
			// 表格多选框选择
			handleSelectionChange () {

			},
			// 搜索
			search () {
				var that = this;
				$.ajax({
					url: "http://116.62.171.144/post/index.php",
					type: 'Post',
					async: true, //或false,是否异步
					data: {
						datas: {
							UserID: userid,
							StartDate: new Date(that.ksrq).format('yyyy-MM-dd'),
							EndDate: new Date(that.jsrq).format('yyyy-MM-dd'),
							DCID: 17,
							TranType: 1
						},
						method: "CPHH.PC.PDAModule.SimpleOperate.GetList"
					},		
          timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						if (obj.StateCode == 100) {
							var datas = JSON.parse(obj.Datas);
							var data = datas.Data;
							that.rkds = data;
						}
						
					}
				})
			}
			
		}		
	}
</script>
<style type="text/css">
	.jbshrkzyd .el-icon-date{
		top: 0;
	}
</style>
<style rel="stylesheet/stylus" scoped>
	/* @import url("../../common/css/rkthzyd/rkthzyd.css"); */
	
	.jbshrkzyd .grid-content {
		text-align: center;
	}
	
	.jbshrkzyd .el-button--small {
		width: 80px;
	}
	
	.jbshrkzyd .el-form {
		margin: 5px 0;
	}
	
	.jbshrkzyd .el-table {
		overflow: inherit;
	}
	
</style>