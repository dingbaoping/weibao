<template>
<!-- 出库订单可用量报表 -->
	<div class="ckddkylbb">
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox dc" @click='djt_Click=true'><span>导出</span></div></div><span class="gun"></span></li>
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
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10" class="row-1">

					<!--check-->
					<el-col :span="3">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="line" :span="1">
							<div class="grid-content">
								<p class="sg-1">至</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="date2">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p class='fl'>配送中心:</p>
						</div>
					</el-col>
					<el-col :span="2">
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
					<el-col :span="1">
						<div class="grid-content ">
							<p class='fl'>合作方:</p>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<!--下拉式合作方-->
							<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.Code">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<p class='fl'>园区:</p>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="无数据"   class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span> 
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content ">
							<el-button type="primary" @click.native='' class='cx'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							<el-button type="primary" @click.native='' class='close'><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>
			</el-form>									
		</div>
		<!--条件查询结束-->

		<!--表格-->
		<div class="datatable">

			<el-table :data="ddlbs" height="250" border style="width: 100%"  @cell-dblclick="dbrow" @header-click="headerc"  v-loading.body="loading"  element-loading-text="玩命加载中">
				<el-table-column label="#" width="50">
					<el-table-column  prop="TransportCmpName" label="" width="50" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="FXBH" label="商品编号" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="FXMC" label="商品名称" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="JSDX" label="规格型号" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="JSDXMC" label="辅助单位" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="FXLX" label="可以辅助数量" width="150">
					<el-table-column  prop="TransportCmpName" label="" width="150" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="JFDJ" label="基本单位" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="DJBH" label="可以基本数量" width="150">
					<el-table-column  prop="TransportCmpName" label="" width="150" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				
			</el-table>
		</div>
		<!--表格结束-->
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'fymxbb',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ruleForm: {
					date1: '',
					date2: '',

				},
				tableData4: [],
				loading: false,
				hzf:'',
				options:[],
				peisong:'',
				cities:[],
				yuanqu:'',
				yqlist:[],

			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			var tabdata = [];
			var len = 0;
			that.getdclist();

			//			$.ajax({
			//				url: "http://121.41.122.74:5676/Handler.ashx",
			//
			//				success: function(reg) {
			//					
			//					for(var i=0;i<reg.length;i++){
			//						that.tableData4.push(reg[i]);
			//						console.log(i);
			//					}
			//					that.tableData4 = reg;
			//                 console.log(that.tableData4);
			//				}
			//			});

			function getdata(i) {

				var k = i + 200;
				var da = tabdata.slice(i, k);

				var d = that.tableData4;
				for(var i = 0; i < da.length; i++) {
					d.push(da[i]);
				}
				that.tableData4 = d;

				//			if(k<len){
				//				setTimeout(function(){
				//					getdata(k);
				//				},500);
				//				 
				//			}
			}

		},
		methods: {
			//表格双击（可编辑表格）
			dbrow: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
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
						eval("that.tableData4[index]." + jname + "=val");
					}

					//						$inp.keydown(function() {
					//							val = $inp.val();
					//							that.fuzzyquery(jname, val);
					//						});

					//                  	console.log(that.tableData4[index]);
				});
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
//			此方法时推出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
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
			// 获取合作方
			gethzflist(psid) {
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
					console.log(data)
				})
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
				that.gethzflist(that.peisong );
			},

		}

  }
</script>
<style>
.formcx ul li{
  /* float: left; */
  display: inline-block;
  line-height: 50px;
  padding-bottom: 10px;
}
.formcx ul li p{
  padding-left: 12px;
}
.ckddkylbb .el-input__icon{
	top: 5px;
}
.ckddkylbb .ZHI{
	float: left;
	color: #000;
	min-width: 60px;
	text-align: center;
}

.wrapper button{
	padding: 6px 15px;
	margin-top: 12px;

}
.searchnav{
	padding-bottom: 5px;
}
.el-table__header-wrapper{
	margin-top: 10px;
}
</style>
