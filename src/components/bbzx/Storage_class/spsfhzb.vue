
<template>
<!-- 商品收发汇总表 -->
	<div class="spsfhzb">

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
		<div class="chaxunkuang">
			<div class="formcx">
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-col :span="3">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"  style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="line " :span="1">
							<div class="grid-content">
								<p class="ZHI">至</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="date2">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>合作方:</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="peisong">
								<!--下拉式合作方-->
							<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.Code">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
								</el-option>
							</el-select>
						
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>&nbsp;</p>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content btn">
								<el-button type="primary" @click.native='' class='cx'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							</div>
						</el-col>
					</el-form-item>
					<!--第二行-->
				</el-form>
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-col class="lines" :span="2" :offset="1">
							<div class="grid-content head-2">
								<p class="spsfhzb-pszx">配送中心:</p>
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
						<!--<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>&nbsp;</p>
							</div>
						</el-col>-->
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>园区:</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="peisong">
								<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder=""  no-data-text="无数据"   class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span> 
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>部门:</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="bumen">
								<el-select v-model="bumen" placeholder="" class='input_width'>
								<el-option v-for="item in bumenlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							</el-form-item>
						</el-col>
						
					</el-form-item>
					<!--第二行-->
					
				</el-form>
			</div>
			
		</div>
		<!--条件查询结束-->

		<!--表格-->
		<div class="datatable">

			<el-table :data="tableData4" border v-loading.body="loading" @cell-dblclick="dbrow" @header-click="headerc" element-loading-text="玩命加载中" style="width: 100%" height="610">
				<el-table-column label="#" width="60">
					<el-table-column type="index" label="0" width="60">
						
					</el-table-column>
				</el-table-column>
				<el-table-column prop="FXBH" label="合作方" width="110">
					<el-table-column prop="FXBH" label="" width="110" class-name="mohucha">
						
					</el-table-column>
				</el-table-column>
				<el-table-column prop="FXMC" label="部门" width="110">
					<el-table-column prop="FXMC" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="JSDX" label="商品编号" width="110">
					<el-table-column prop="JSDX" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="JSDXMC" label="商品名称" width="110">
					<el-table-column prop="JSDXMC" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="FXLX" label="规格型号" width="110">
					<el-table-column prop="FXLX" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="JFDJ" label="条形码" width="110">
					<el-table-column prop="JFDJ" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DJBH" label="单位" width="110">
					<el-table-column prop="DJBH" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="DJRQ" label="辅助单位" width="110">
					<el-table-column prop="DJRQ" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="数量" width="110">
					<el-table-column prop="zip" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="辅助数量" width="110">
					<el-table-column prop="zip" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="数量" width="110">
					<el-table-column prop="zip" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="辅助数量" width="110">
					<el-table-column prop="zip" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="数量" width="110">
					<el-table-column prop="zip" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="辅助数量" width="110">
					<el-table-column prop="zip" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="数量" width="110">
					<el-table-column prop="zip" label="" width="110" class-name="mohucha">
					</el-table-column>class-name="mohucha"
				</el-table-column>
				<el-table-column prop="zip" label="辅助数量" width="110">
					<el-table-column prop="zip" label="" width="110" class-name="mohucha">
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
		name: 'spsfhzb',
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
				yuanqu:'',
				options:'',
				yqlist:[],
				peisong:'',
				cities:[],
				bumen:'',
				bumenlist:[{label:'全部',
				value:'10'}],
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
				var $datath = $("th.mohucha", $(".datatable")); //匹配行Th
				var $table = $($(".datatable table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

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
				$inp.blur(function() {
					val = $inp.val(); //离开时在获一次值
					$dom.html(val);

				});
			},
			//此方法是退出的函数
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
				that.gethzflist(that.peisong);
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
		  }


		}

	}
</script>
<style>
	
	.spsfhzb .el-form-item__content {
		margin-top: 6px;
		margin-left: 10px;
	}
  .spsfhzb .grid-content p {
		text-align: center;
	}	
	/*.spsfhzb .el-table th>.cell {
		line-height: normal;
	}*/
	
	.spsfhzb .el-table tr:nth-child(2) th {
		background: none;
	}
	.spsfhzb .el-input__icon{
		top: 5px;
	}
	.spsfhzb .buttondiv{
		padding-top: 5px;
	}
	.spsfhzb .btn{
		margin: 5px 10px!important;
	}
	.spsfhzb .chaxunkuang{
		height: 100px!important;
	}
	.spsfhzb .el-form-item{
		margin-bottom: -10px;
	}
	.spsfhzb .head-2 p{
		margin-left: 10px;
	}
	.spsfhzb .el-button--primary{
		padding: 6px 15px;
	}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.datatable {
		width: 100%;
	}
	
	.spsfhzb {
		width: 100%;
		height: 100%;
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
		background: url(../../../assets/img/gun.png) repeat-x;
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
		background: url(../../../../common/img/rk/daochu.jpg) no-repeat;
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
	
	.ctys {
		background: url(../../../../common/img/rk/chuangti.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.tc {
		background: url(../../../../common/img/rk/tuichu.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.chaxunkuang {
		width: 100%;
		height: 60px;
		border: 1px solid #999;
		border-left: 0;
		border-right: 0;
	}
	.spsfhzb-pszx{
		text-align: left!important;
	}
</style>