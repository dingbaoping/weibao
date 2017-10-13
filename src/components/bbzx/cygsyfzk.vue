<template>
<!-- 承运公司应付账款 -->
	<div class="cygsyfzk">
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox dc" @click='djt_Click=true'><span>导出</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox dy"><span>打印</span></div></div></li>
					<li><div class="boxtab"><div class="curbox yl"><span>预览</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="chaxunkuang">
			<div class="formcx">
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-col :span="4">
							<div class="grid-content">
								<el-form-item prop="date1">
									<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
								</el-form-item>
							</div>
						</el-col>
						<el-col class="line " :span="2">
							<div class="grid-content">
								<p class="ZHI">至</p>
							</div>
						</el-col>
						<el-col :span="4">
							<el-form-item prop="date2">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>承运公司:</p>
							</div>
						</el-col>
						<el-col :span="4">
							<el-form-item prop="peisong">
							<el-select v-model="cygs" placeholder="" class="input_width">
						<el-option v-for="item in cygss" :key="item.InterID" :label="item.Name" :value="item.InterID">
							<span style="float: left">{{ item.Name }}</span>
						</el-option>
					</el-select>
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>配送中心:</p>
							</div>
						</el-col>
						<el-col :span="4">
							<el-form-item prop="peisong">
								<!-- 配送中心列表 -->
							<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
								<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
							</el-form-item>
						</el-col>
					</el-form-item>
				</el-form>
			</div>
			<div class="buttondiv">
				<span class="wrapper">
					<el-button type="primary"><i class="el-icon-search el-icon--left"></i>查询</el-button>
					<el-button type="primary"><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
				</span>
			</div>
		</div>
		<!--条件查询结束-->

		<!--表格-->
		<div class="datatable">

			<el-table :data="tableData4" border v-loading.body="loading" @cell-dblclick="dbrow" @header-click="headerc" element-loading-text="玩命加载中" style="width: 100%" height="550">
				<el-table-column label="#" width="60">
					<el-table-column  prop="CheckMark" label="" width="60" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="FXBH" label="费用编号" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="FXMC" label="费用名称" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="JSDX" label="结算对象" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="JSDXMC" label="结算对象名称" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="FXLX" label="费用类型" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="JFDJ" label="计费单据" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="DJBH" label="单据编号" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column sortable prop="DJRQ" label="单据日期" width="120">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="部门名称" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="配送中心名称" width="150">
					<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="记录日期" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="策略编号" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="策略名称" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费价格表" width="150">
					<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费方式" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费价格" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费值" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费金额" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				
				<el-table-column prop="zip" label="阶梯价" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯区间" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯实际方式" width="150">
					<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯计费价格" width="150">
					<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费操作人" width="150">
					<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="说明" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="商品编号" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="商品名称" width="110">
				<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="分类名称" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="客户区域ID" width="150">
					<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="客户区域名称" width="150">
					<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费方式" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费价格" width="110">
				<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费值" width="110">
				<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="计费金额" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯价" width="110">
				<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯区间" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯实际方式" width="150">
					<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="阶梯计费价格" width="150">
					<el-table-column  prop="CheckMark" label="" width="150" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="说明" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="园区" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="生产厂家" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="源单号" width="110">
					<el-table-column  prop="CheckMark" label="" width="110" class-name="mohucha">
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
				cities:'',
				peisong:'',
				cygs:'',
				cygss:'',

			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			var tabdata = [];
			var len = 0;
			that.getdclist();
//			axios.get("http://121.41.122.74:5676/Handler.ashx")
//				.then(function(rsp) {
//					//	that.tableData4 = rsp.data
//					tabdata = rsp.data;
//					len = tabdata.length;
//					getdata(0);
//					that.loading = false;
//				})

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
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
			},
//			获取配送中心
				getdclist () {
        let that = this;
				that.baseAjax("getdclist", {
					UserID: window.userid
				}, function(result) {
					var obj = eval('(' + result + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					// console.log(data);
					that.cities = data;
					that.peisong = data[0].DCID;
					that.getTransports();
				})
			},
			// 获取承运公司列表,当配送中心改变时,运行一下
			getTransports (dcid) {
				let that = this;
				that.baseAjax("transportcompanygetlist", {
					DCID: that.peisong | 17
				}, function(result) {
					var obj = eval('(' + result + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.cygss = data;
				})
			},
		}

	}
</script>
<style>
	.cygsyfzk .el-form-item__content{
		line-height: 60px;
	}
	.cygsyfzk .el-input__icon{
		top: 17px;
	}
	.cygsyfzk .grid-content p{
		text-align: center;
	}
	.cygsyfzk .buttondiv button{
		padding:6px 15px;
		margin-top: 13px;
	}
	.cygsyfzk .grid-content{
		margin: 0!important;
	}
	.cygsyfzk .buttondiv{
		margin-top: 3px;
	}
</style>