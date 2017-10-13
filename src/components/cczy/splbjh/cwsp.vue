<template>
<!-- 财务审批 -->
	<div class="tbcksp">
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox sh" @click='auditOrder'><span>审核</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox sh" @click='djt_Click=true'><span>批量审批</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox ctys">
						<!-- <span>窗体样式</span> -->
						<el-dropdown split-button  @click="handleClick">
							窗体样式
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>录入仓库作业情况</el-dropdown-item>
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
						<el-col :span="2">
							<div class="grid-content  ">
								<el-form-item prop="date1">
									<el-date-picker type="date" placeholder="选择日期" id="ksrq" v-model="ksrq" style="width: 100%;"></el-date-picker>
								</el-form-item>
							</div>
						</el-col>
						<el-col class="line " :span="1">
							<div class="grid-content">
								<p class="ZHI">至</p>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content  ">
								<el-form-item prop="date2">
									<el-date-picker type="date" placeholder="选择日期" id="jsrq" v-model="jsrq" style="width: 100%;"></el-date-picker>
								</el-form-item>
							</div>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>合作方:</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content  ">
								<el-form-item prop="">
									<!--下拉式合作方-->
									<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
										<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
											<span style="float: left">{{ item.Code }}</span>
											<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
										</el-option>
									</el-select>
									<!--下拉式合作方结束-->
								</el-form-item>
							</div>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>配送中心:</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content  ">
								<el-form-item prop="">
									<!-- 配送中心列表 -->
									<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" >
										<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
											<span style="float: left">{{ item.DCName }}</span>
										</el-option>
									</el-select>
									<!-- 配送中心列表结束 -->
								</el-form-item>
							</div>
						</el-col>
						<el-col class="lines" :span="1">
							<div class="grid-content">
								<p>园区:</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content  ">
								<el-form-item prop="">
									<!-- 园区列表 -->
									<el-select v-model="yuanqu" placeholder="" no-data-text="后台挂了"   class=" blueborder input_width">
										<el-option  v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
											<span style="float: left">{{ item.ParkName }}</span> 
										</el-option>
									</el-select>
									<!-- 园区列表结束 -->
								</el-form-item>
							</div>
						</el-col>

						<el-col class="lines" :span="1">
							<div class="grid-content">
								<p>审核:</p>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content  ">
								<el-form-item prop="">
									<!--审核标志-->
									<el-select v-model="shbz" placeholder="全部" class="shbz">
										<el-option v-for="item in shbzlist" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
									<!--审核标志结束-->
								</el-form-item>
							</div>
						</el-col>
						<el-col :span="2" class="btn">
							<div class="grid-content ">
								<el-button type="primary" @click="search" class='cx'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							</div>
						</el-col>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<!--条件查询结束-->
		
		<div class="datatable">
			<el-table :data="ddlbs" height="250" border style="width: 100%"  @cell-dblclick="dbrow" @header-click="headerc"  v-loading.body="loading"  element-loading-text="玩命加载中">
				<el-table-column label="#" width="50">
					<el-table-column  prop="TransportCmpName" label="" width="50" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="FXBH" label="初审" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="FXBH" label="审核标志" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="FXMC" label="单据编号" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="JSDX" label="日期" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="JSDXMC" label="损溢类型" width="110" >
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="FXLX" label="合作方" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column> 
				<el-table-column prop="JFDJ" label="损溢金额" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="DJBH" label="备注" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="DJRQ" label="打印次数" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="制单人" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="审核人" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="审核日期" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="初审人" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="初审日期" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="提交状态" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="体积" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="重量" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="制单日期" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="基本数量" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
									</el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="辅助数量" width="110">
					<el-table-column  prop="TransportCmpName" label="" width="110" class-name="mohucha">
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
		name: 'cwsp',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',

				ruleForm: {
					date1: '',
					date2: '',

				},
				tableData4: [],
				loading: false,
				hzf:'0',
				backUpArr:'',
				options:[{lable:'全部',value:'0'}],
				peisong:'',
				yqlist:'',
				yuanqu:'',
				bumen:'',
				shbzlist: [ // 审核标志
					{ value: '1', label: '全部' },
					{ value: '2', label: '已审核' },
					{ value: '3', label: '未审核' }
				],
				shbz:'1',//审核标志选择框默认为空
				ksrq:'',//开始日期
				jsrq:'',//结束日期
				operateID:'',//单据编号
			}
		},
		mounted: function() {
			// 请求后台数据
			var that = this;
			var myDate = new Date();
			var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
			var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			var d = myDate.getDate(); //获取当前日(1-31)
			var today = y + "-" + m + "-" + d;
			that.ksrq = today;
			that.jsrq = today;
			// 获取配送中心
			that.getdclist();
		},
		methods: {
			search () {
				var that = this;
				var jsons = {
					UserID: userid, //用户ID
					StartDate:$('#ksrq input').val(), //	起始日期
					EndDate:$('#jsrq input').val() ,//	截止日期
					Check: that.shbz, //	审核标志
					ParID: that.hzf || 0, //	合作方ID
					Type: 2, //	查询类型1 列表2 待审核
					DCID: that.peisong,//	配送中心ID
					OutID: that.djbh,//	订单号
					ParkID: that.yuanqu,//	园区ID
				}	
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.OutModule.Out.GetList",
						// test:"test"
					},
					// timeout: 5000, //超时时
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.splbs = data; //赋值
					}
				})
			},
		// 审核订单
		auditOrder() {
			var jsons = {
				PlanID: this.operateID,//	作业单号	string
				UserID: userid,//	用户ID	int
				UserName: userName,//	用户名	string
			}
			// debugger;
			var that = this;
			$.ajax({
				url: 'http://116.62.171.144/post/index.php',
				type: 'POST', //GET
				async: true, //或false,是否异步
				data: {
					datas: jsons,
					method: "CPHH.PC.PDAModule.ReceivePlan.Audit"
				},
				timeout: 5000, //超时时间
				success: function(data, textStatus, jqXHR) {
					var obj = eval('(' + data + ')');
					if(obj.StateCode == 100){
						that.search();
						that.openAlert(obj.Message,'系统提示','success')
					}else{
					}
				}
			})
		},
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

			// 获取园区 含全部
			getyuanqulist(psid) {
				var that = this;
			  var params = {
					UserID: window.userid,
					DCID: psid
				};
        $.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: "CPHH.PC.BaseInfo.Stock.GetParkList_All"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
            that.yqlist = data;
            that.yuanqu = data[0].ParkID;
					}
				})
			},
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				// that.pszx = true; // 配送输入框禁用
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
				that.gethzflist(that.peisong);
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
						that.hzf = data[0].InterID;
						console.log(444,data)

					}
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
		  },
		}
	}
</script>
<style scoped>
	.grid-content p{
		text-align: center;
	}
	.btn{
		padding-left: 10px;
	}
	.chaxunkuang{
		height: 50px;
	}
</style>