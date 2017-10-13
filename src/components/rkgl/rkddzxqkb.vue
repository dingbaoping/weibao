<template>
	<div class='ckddzhqkb' id='ckddzhqkb'>
		<!--出库管理综合报表-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox dj">
							<span>单据</span>
						</div>
					</div>
					<span class="gun"></span>
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
							<span>窗体样式</span>
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
		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">

					<!--check-->
					<el-col :span="3" :offset="2">
					<div class="grid-content ">
						<el-date-picker type="date" placeholder="选择日期" v-model="ksrq" id='ksrq' align="right" :picker-options="pickerOptions1"></el-date-picker>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">
						<p class=''>至</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<el-date-picker type="date" placeholder="选择日期" v-model="jsrq" id='jsrq' align="right" :picker-options="pickerOptions2"></el-date-picker>
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
						<el-select v-model="hzf" default-first-option no-data-text="无数据" @change="gethzfID" filterable :filter-method="getCode" class='hzf  input_width'>
							<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
								<span style="float: left">{{ item.Code }}</span>
								<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
							</el-option>
						</el-select>
						<!-- 合作方列表结束 -->

						</div>
					</el-col>
				
				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">

							<p>配送中心*:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<!-- 配送中心列表 -->
							<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width">
								<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content yqbj">

							<p>园区 ：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content yqbj">

							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="23132"   class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span> 
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content djbj">

							<p>订单号:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content djbj">

							<el-input class="inline-input input_width djbh"  size="small" placeholder="" v-model="djbh">
							</el-input>

						</div>
					</el-col>
					
					<el-col :span="4" :offset="1">
						<div class="grid-content fl">
							<el-button type="primary" @click="searchInfo" class='cx fl'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							<el-button type="primary"  class='close fl'><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<!--搜索框完-->
		<!--表格-->
		<div class='table'>
			<div class='button_row'>
						<div id='table_dj'>
							<el-table :data="tableData3" height="610" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中"  border style="width: 100%">
								<el-table-column type='selection' prop="" label="选定框" width="auto">
									<el-table-column type='' prop="" label="#" width="auto">
                   	<el-table-column type='index' prop="" label="0" width="auto">
								    </el-table-column>
								  </el-table-column>
								</el-table-column>
							  <el-table-column prop="MC" width="auto">
								  <el-table-column prop="ParName" label="合作方" width="auto">
										<el-table-column  prop="ParName" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								  <el-table-column prop="StorageDate" label="订单日期" width="auto">
										<el-table-column  prop="StorageDate" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								  <el-table-column prop="StorageID" label="订单编号" width="auto">
										<el-table-column  prop="StorageID" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
									<el-table-column prop="Type" label="业务类型" width="auto">
										<el-table-column  prop="Type" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
									<el-table-column prop="BillNum" label="源单号" width="auto">
										<el-table-column  prop="BillNum" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								  <el-table-column prop="Rate" label="入库完成百分比" width="auto">
										<el-table-column  prop="Rate" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								
								  <el-table-column prop="SupplierName" label="供应商名称" width="auto">
										<el-table-column  prop="SupplierName" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
									<el-table-column prop="ProCode" label="商品编号" width="auto">
										<el-table-column  prop="ProCode" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								  <el-table-column prop="ProName" label="商品名称" width="auto">
										<el-table-column  prop="ProName" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
									  
								  <el-table-column prop="Unit" label="单位" width="auto">
										<el-table-column  prop="Unit" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>

								  <el-table-column prop="SupUnit" label="辅助单位" width="auto">
										<el-table-column  prop="SupUnit" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>

								  <el-table-column prop="Batch" label="批次" width="auto">
										<el-table-column  prop="Batch" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
									<el-table-column prop="IsClose" label="关闭标志" width="auto">
										<el-table-column  prop="IsClose" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
									<el-table-column prop="CloseOperator" label="关闭人" width="auto">
										<el-table-column  prop="CloseOperator" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
									<el-table-column prop="CloseOperatorDate" label="关闭时间" width="auto">
										<el-table-column  prop="CloseOperatorDate" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
									<el-table-column prop="CloseReason" label="关闭原因" width="auto">
										<el-table-column  prop="CloseReason" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
               					 </el-table-column>
                				<el-table-column prop="MC" label="签订">
								  <el-table-column prop="Num" label="数量" width="auto">
										<el-table-column  prop="Num" label="" width="auto" class-name="mohucha">
								    </el-table-column>
							  	</el-table-column>
							  

								  <el-table-column prop="SupportNum" label="辅助数量" width="auto">
										<el-table-column  prop="SupportNum" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								  <el-table-column prop="Price" label="单价" width="auto">
										<el-table-column  prop="Price" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								  <el-table-column prop="Total" label="金额" width="auto">
										<el-table-column  prop="Total" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="MC" label="入库">
								  <el-table-column prop="YYNum" label="数量" width="auto">
										<el-table-column  prop="YYNum" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								  <el-table-column prop="YYSupportNum" label="辅助数量" width="200">
										<el-table-column  prop="YYSupportNum" label="" width="200" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>

								  <el-table-column prop="YYTotal" label="金额" width="auto">
										<el-table-column  prop="YYTotal" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								</el-table-column>
								<el-table-column prop="MC" label="未入库">
								  <el-table-column prop="LeftNum" label="数量" width="auto">
										<el-table-column  prop="LeftNum" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								
								  <el-table-column prop="LeftSupportNum" label="辅助数量" width="200">
										<el-table-column  prop="LeftSupportNum" label="" width="200" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								  <el-table-column prop="LeftTotal" label="金额" width="auto">
										<el-table-column  prop="LeftTotal" label="" width="auto" class-name="mohucha">
								    </el-table-column>
								  </el-table-column>
								</el-table-column>
								

							</el-table>
						</div>
	
				

			</div>

		</div>
		<div class='tongji'>

			<el-tag class='tag1'><span>共{{ tableData3.length }}条</span></el-tag>
			<el-tag class='tag1'><span>签订辅助数量合计:{{ SupportNumTotal }}</span></el-tag>
			<el-tag class='tag2'><span>入库辅助数量合计:{{ YYSupportNumTotal }}</span></el-tag>
			<el-tag class='tag2'><span>未入库辅助数量合计:{{ LeftSupportNumTotal }}</span></el-tag>
		</div>
	</div>

</template>

<script>
	import nicescroll from "../../../common/js_nicescroll/jquery.nicescroll.js"
	export default {
		data() {
			return {
				tree: [{
					children: [{
						label: ''
					}]
				}],
				shbz: '', // 审核标志
        shenghelist: [{
          value: '1',
          label: '全部'
				},{
					value: '2',
					label: '未审核'
				},{
          value: '3',      
          label: '已审核'
				}],
        gbbz: '',// 关闭标志
				gblist: [{
          value: '1',
          label: '全部'
				},{
					value: '2',
					label: '未关闭'
				},{
          value: '3',      
          label: '已关闭'
				}],
				peisong: '',
				yuanqu: '',
				SupportNumTotal: '0.00', // 签订的辅助数量合计
				YYSupportNumTotal: '0.00', // 入库的辅助数量合计
				LeftSupportNumTotal: '0.00', // 未入库的辅助数量合计
				hzf: '全部', 
				hzfID: '',
				options: [],
				yqlist: [],
				cities: [],
				djbh: '',
				ksrq: "",
				jsrq: '',
        khlist: [],
				defaultProps: {
				label: "Name",
				children: "children" 
      },
				pickerOptions1: '',
				pickerOptions2: '',
				formInline: {},
				backUpArr: [],
				tableData3:[],
        loading: false
			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			//订单日期的默认值
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
			
      // 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
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
						eval("that.tableData3[index]." + jname + "=val");
					}
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
					that.peisong = data[0].DCID;
				});
			},
			// 拿到当前合作方ID
			gethzfID (val) {
				console.log(val)
        this.hzfID = val;
			},
			// 获取合作方
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
						// console.log("全部合作方",data);
						that.options = data;
						that.backUpArr = data;
					}
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
				that.gethzflist(that.peisong);
			},

			// 搜索入库订单执行情况表信息
			searchInfo () {
				var that = this;
				var ksrq = $('#ksrq input').val();
				var jsrq = $('#jsrq input').val();
				var jsons = {

						StartDate: ksrq,
						EndDate: jsrq,
						UserID: window.userid,
						DCID: that.peisong,
						
						OrderID: that.djbh,
						ParID: that.hzfID || 0,
						ParkID: that.yuanqu,

					};

					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.StorageOrder.GetExecuteSituationList"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
						
							var obj = eval('(' + data + ')');
							
							var datas = JSON.parse(obj.Datas);
							var data = datas.Data;
								console.log(data);
							that.tableData3 = data;
              that.getTotal(data);
						}
					});
			},
			getTotal (data) {
				var that = this;
				var SupportNumTotal = 0;
				var YYSupportNumTotal = 0;
				var LeftSupportNumTotal = 0;
        for( let i = 0; i < data.length; i++ ) {
           SupportNumTotal += parseFloat(data[i].SupportNum);
           YYSupportNumTotal += data[i].YYSupportNum;
           LeftSupportNumTotal += parseFloat(data[i].LeftSupportNum);
				} 
				console.log(SupportNumTotal,YYSupportNumTotal,LeftSupportNumTotal)
        that.SupportNumTotal = SupportNumTotal;
        that.YYSupportNumTotal = YYSupportNumTotal;
        that.LeftSupportNumTotal = LeftSupportNumTotal;
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
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
			},
			handleNodeClick () {

			},
		}

	}
</script>

<style scoped>
	@import url("../../../common/css/ckddzhbb/ckddzhbb.css");
	.datatable {
		width: 100%;
	}
	.ckddzhqkb .el-date-editor.el-input {
		width: 100%;
	}
	.ckddzhqkb .table .el-tree {
		max-height: 510px;
		overflow: scroll;
	}
	
	.fymxbb {
		width: 100%;
		height: 100%;
	}
	.ckddzhqkb .grid-content p {
		min-width: 80px;
		text-align: center;
	}
	.buttondiv {
		margin-top: 12px;
		margin-left: 20px;
		display: table;
		float: left;
	}
	
	.formcx {
		width: 600px;
		height: 100%;
		float: left;
	}
	
	.but-box {
		width: 100%;
		height: 40px;
		background: url(../../assets/img/gun.png) repeat-x;
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
		background: url(../../../common/img/rk/daochu.jpg) no-repeat;
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
		background: url(../../../common/img/rk/chuangti.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.tc {
		background: url(../../../common/img/rk/tuichu.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.chaxunkuang {
		width: 100%;
		height: 60px;
		border: 1px solid #999;
		border-left: 0;
		border-right: 0;
	}
	.el-tabs__nav{
		height: 35px;
		background: #35B3FD;
	}
</style>