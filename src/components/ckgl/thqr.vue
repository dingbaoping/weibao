<template>
	<div class="thqr">
		<!--提货确认-->
		<!--操作按鈕-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox shenhe">
							<span>审核</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox">
							<span>打印</span>
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
						<div class="curbox tc" @click="closetag">
							<span>退出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
			</ul>
		</div>
		<!--操作按鈕結束-->

		<!--条件查询-->

		<div class="chaxunkuang">
			<div class="formcx">
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-row :gutter='10'>
						<!--check-->
					<el-col :span="3" class="sj-w">
						<div class="grid-content ">
							<el-date-picker type="date" placeholder="选择日期" v-model="ksrq" align="right"  :picker-options="pickerOptions1"></el-date-picker>
							
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<p class=''>至</p>
							
						</div>
					</el-col>
					<el-col :span="3" class="sj-w">
						<div class="grid-content ">
							
							<el-date-picker type="date" placeholder="选择日期" v-model="jsrq" align="right"  :picker-options="pickerOptions2"></el-date-picker>
							

						</div>
					</el-col>
						<el-col :span="2">
							<div class="grid-content">
								<p class=''>合作方 :</p>
							</div>
						</el-col>
						<el-col :span="3">
								<div class="grid-content ">

								<!-- 合作方列表 -->
						<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>	
								</el-option>
							</el-select>
							<!-- 合作方列表结束 -->
						</div>
						</el-col>
						<el-col :span="2">
						<div class="grid-content ">
							<p>审核标志 :</p>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="shbz" placeholder="全部" class='hzf input_width'>
								<el-option v-for="item in shbzlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>出库单号 ：</p>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
              	<el-input class="inline-input input_width djbh" size="small" placeholder="" v-model="djbh">
							</el-input>							
						</div>
					</el-col>
						<el-col :span='4'>
							<div class="grid-content	">
								<span class="wrapper">
									<el-button type="primary" @click="search"><i class="el-icon-search el-icon--left"></i>查询</el-button>
									<el-button type="primary"><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
								</span>
							</div>
						</el-col>
						</el-row>
					</el-form-item>
				</el-form>
			</div>

			
		</div>

		<!--条件查询结束-->

		<!--表格-->
		<div class="table">

			<el-table :data="tableData4" border style="width: 100%" height="660"@cell-dblclick="dbrow" @header-click="headerc"  >
				<el-table-column fixed prop="FXBH" label="审核标志" width="150">
					<el-table-column  type="index" label="0" width="150" >
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="FXMC" label="单据编号" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="JSDX" label="出库日期" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="JSDXMC" label="出库类型" width="150">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="FXLX" label="客户编号" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="JFDJ" label="客户名称" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="DJBH" label="单据金额" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="DJRQ" label="业务员" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="交货方式" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="需配送时间" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="实际配送时间" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="签收日期" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="交货地址" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="订单号" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="打印次数" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="配送中心" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="园区" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="部门" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="提货人" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="性别" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="身份证号码" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="手机号码" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="提货时间" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="提货件数" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="货物价值" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="备注" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="审核人" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			    </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="审核时间" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
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
		name: 'thqr',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ruleForm: {
					date1: '',
					date2: '',
				},
				hzf: '0',
				options: [],
				backUpArr: [],
				djbh: '', // 出库单号
				pickerOptions2: {},
				pickerOptions1: {
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
				}, //时间选择器第一个
				pickerOptions2: {
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
				}, //时间选择器第二个
				ksrq: '', //选择日期变量
				jsrq: '', //选择日期（截止）变量
        shbz: '1',
				shbzlist: [{
					value: '1',
					label: '全部'
				},{
					value: '2',
					label: '未审核'
				},{
					value: '3',
					label: '已审核'
				}],
				tableData4: [],
			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			var myDate = new Date();
		  that.ksrq = myDate.format('yyyy-MM-dd');
			that.jsrq = myDate.format('yyyy-MM-dd');
			that.gethzflist()

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
			// 获取合作方列表
			gethzflist(psid) {
				var that = this;
			  var params = {
					UserID: window.userid,
					DCID: 0,
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
			  });
		  },
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				that.gethzflist(that.peisong);
				that.getyuanqulist(that.peisong);
			},
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
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
			handleClick () {

			},
			search () {
				var that = this;
				var params = {

				};
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: ""
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						if(obj.StateCode == 100) {
							var datas = JSON.parse(obj.Datas);
							var data = datas.Data;
							console.log("运输方式",data);
						}
					}
				})
			}
		}
	}
</script>
<style>

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.datatable {
		width: 100%;
	}
	
	.thqr {
		width: 100%;
		height: 100%;
	}
	
	.thqr .grid-content p {
		text-align: center;
	}
	.buttondiv {
		margin-top: 1px;
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
		height: 46px;
		border: 1px solid #999;
		border-left: 0;
		border-right: 0;
	}
	
	.thqr .zhi {
		height: 25px;
		width: 30px;
		text-align: center;
		margin-left: 5px;
		line-height: 25px;
	}
</style>