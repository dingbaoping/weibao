
<template>
	<div class='cksjzyd'>

		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li><div class="boxtab">
						<router-link to="pdasjzyck" class="watch">
							<div class="curbox ck">查看</div>
							<span style="display: none">上架作业单</span>
						</router-link>
				</div></li>
				<li><div class="boxtab"><div class="curbox sc" @click="delect"><span>删除</span></div></div></li>
				<li><div class="boxtab"><div class="curbox dc"><span>导出</span></div></div><span class="gun"></span></li>
				<li><div class="boxtab"><div class="curbox ctys">
					<!-- <span>窗体样式</span> -->
					<el-dropdown split-button>
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
			<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
			<el-col :span="3" class="sj-w">
						<div class="grid-content">
							<el-date-picker id="ksrq" type="date" placeholder="选择日期" v-model="ksrq" align="right"  :picker-options="pickerOptions1"></el-date-picker>
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<p class=''>至</p>
							
						</div>
					</el-col>
					<el-col :span="3" class="sj-w">
						<div class="grid-content ">
							
							<el-date-picker id="jsrq" type="date" placeholder="选择日期" v-model="jsrq" align="right"  :picker-options="pickerOptions2"></el-date-picker>
							

						</div>
					</el-col>
				<el-col :span="2">
			<div class="grid-content ">

				<p class=''>配送中心:</p>
				
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
		<el-col :span="2">
			<div class="grid-content fr">
				<el-button type="primary"  @click.native='search' class='cx'><i class='el-icon-search'></i>查询</el-button>
			</div>
		</el-col>
		<el-col :span="2">
			<div class="grid-content fl">
				
				<el-button type="primary"   class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
			</div>
		</el-col>
		</el-row>			
		
	</el-form>
	
		<!--form第二行，没有第二行-->
		
</div>
	<!--搜索框完-->
	
	<!--表格-->
	<el-table class="table" :data="splbs" height="650" @row-click="rowClick" @row-dblclick="dbRow" @header-click="headerc" highlight-current-row border style="width: 100%">
		<el-table-column type='index' prop="" label="" width="50">
			<el-table-column type='index' prop="" label="0" width="50"></el-table-column>
		</el-table-column>
		<el-table-column prop="PickID" label="收货计划单号" min-width="auto">
			<el-table-column  prop="PickID" label="" width="auto" class-name="mohucha"> </el-table-column>
		</el-table-column>
		<el-table-column prop="Date" label="日期" min-width="auto">
			<el-table-column  prop="Date" label="" width="auto" class-name="mohucha"> </el-table-column>
		</el-table-column>
		<el-table-column prop="ShelvesID" label="上架作业单号" min-width="auto">
			<el-table-column  prop="ShelvesID" label="" width="auto" class-name="mohucha"> </el-table-column>
		</el-table-column>
		<el-table-column prop="PickType" label="拣货类型" min-width="auto">
			<el-table-column  prop="PickType" label="" width="auto" class-name="mohucha"> </el-table-column>
		</el-table-column>
		<el-table-column prop="Poster" label="制单人" min-width="auto">
			<el-table-column  prop="Poster" label="" width="auto" class-name="mohucha"> </el-table-column>
		</el-table-column>		
		<el-table-column prop="CreateDate" label="创建日期" min-width="auto">
			<el-table-column  prop="CreateDate" label="" width="auto" class-name="mohucha"> </el-table-column>
		</el-table-column>
		</el-table-column>		
		<el-table-column prop="ShelvesQty" label="上架数量" min-width="auto">
			<el-table-column  prop="ShelvesQty" label="" width="auto" class-name="mohucha"> </el-table-column>
		</el-table-column>
		</el-table-column>
		<el-table-column prop="StartDate" label="开始作业时间" min-width="auto">
			<el-table-column  prop="StartDate" label="" width="auto" class-name="mohucha"> </el-table-column>
		</el-table-column>
	</el-table>
	<div class='tongji'>
		<el-tag class='tag1'>共<span>{{splbs.length}}</span>条</el-tag>
		<el-tag class='tag2'><span>0</span></el-tag>
	</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				backUpArr:[],//
				formInline:[],//
				formStacked: {
					name: '',
					region: '',
					type: ''
				},
				pszx: false, //配送中心禁选
				pickerOptions1: '', //时间
				pickerOptions2: '',
				peisong: '',
				splbs:[], //商品列表
				cities: [],
				ksrq:'',//开始日期
				jsrq:'',//结束日期
				hzf:'0',
			  operateID: '',
				options:[
					{label:'全部',value:'0'}
				]
			};
		},
		mounted: function(){
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
				that.$router.replace({ path: '/pdasjzyck'}) 
				// 定义标签的名字
				let txt = "上架作业单"
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
			// 行双击
			dbRow(row,event) {
				// 保存当前的订单号
				localStorage.setItem("shzyPickID", row.PickID);
				this.watch(); //跳查看页
			},
			// 行单击保存单号
			rowClick (row, event, column){
				localStorage.setItem("shzyPickID", row.PickID);
				this.operateID = row.PickOperateID;
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
				if(this.hzf == '全部') {
					this.hzf = 0
				}
				var jsons = {
					UserID: userid,//	用户ID	int	
					StartDate:$('#ksrq input').val(), //	起始日期
					EndDate:$('#jsrq input').val() ,//	截止日期
					ParID: this.hzf || 0,//	合作方ID	string	
					BillType: 2,//	单据类型	int	1入库订单 2出库订单
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
						method: "CPHH.PC.PDAModule.ShelvesOperate.GetList"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.splbs = data; //单据
						if(that.hzf == 0) {
							that.hzf = '全部'
						}
					}
				})
			},
			  // 删除接口
		delect() {
			var that = this;
			if(that.operateID == '') {
				that.openAlert("未选择单据",'提示信息')
			} else {
				var jsons = {
					OperateID: this.operateID,//	作业单号	string
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
							method: "CPHH.PC.PDAModule.ReceiveOperate.Delete"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var obj = eval('(' + data + ')');
							if(obj.StateCode == 100)
								that.search();
							else{
								that.openAlert(obj.Message,'错误信息')
							}
						}
					})
				},()=>{

				})
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
				that.peisong = data[0].DCID;//设置默认
				that.cities = data;
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
					// console.log(444,$table);
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
	.sjzyd .el-icon-date{
		top: 0;
	}
	
</style>
<style rel="stylesheet/stylus" scoped>
/* @import url("../../common/css/sjzyd/sjzyd.css"); */
  	.sjzyd .grid-content {
		text-align: center;
	}
	.sjzyd .el-form {
		margin: 5px;
	}
	.sjzyd .grid-content p {
		min-width: 60px;
		text-align: center;
	}	
	.el-icon-date{
		top: 0;
	}
	.el-date-editor{
		width: 100%;
	}
</style>
