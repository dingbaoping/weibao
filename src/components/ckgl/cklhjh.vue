<template>
	<div class='ckjhjhd'>
		<!--出库理货计划单-->
		<div class="but-box">
			<ul>
				<li>

					<div class="boxtab">
						<div class="curbox xz" >
							<span>新增</span>
						</div>
					</div>
				</li>
				<li>

					<div class="boxtab">
						<div class="czypd ckakan">
							<span>查看</span>
						</div>
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
						 <div class="curbox cz">
						 	 <span>打印</span>
						 </div>
					</div>
				</li>
				<li>
					
					<div class="boxtab">
						 <div class="curbox sh">
						 	 <span>确认</span>
						 </div>
					</div>
				</li>
				<li>
					
					<div class="boxtab">
						 <div class="curbox fs">
						 	 <span>返确认</span>
						 </div>
					</div>
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
		<!--form第一行-->
		<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
			<el-row :gutter="10">
				<!--check-->
				<el-col :span="3">
					<div class="grid-content ">
						<el-date-picker type="date" placeholder="选择日期" v-model="rq1" align="right" :picker-options="pickerOptions1"></el-date-picker>

					</div>
				</el-col>
				<el-col :span="1">
					<div class="grid-content ">
						<span class=''>至</span>

					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">

						<el-date-picker type="date" placeholder="选择日期" v-model="rq2" align="right" :picker-options="pickerOptions2"></el-date-picker>

					</div>
				</el-col>

				<el-col :span="2">
					<div class="grid-content ">
						<span class=''>配送中心:</span>

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
						<span class=''>合作方*:</span>

					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">

						<!-- 合作方列表 -->
						<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" @change="gethzfID(hzf)" class='hzf  input_width'>
							<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
								<span style="float: left">{{ item.Code }}</span>
								<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
							</el-option>
						</el-select>
						<!-- 合作方列表结束 -->
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content fr">
						<el-button type="primary" size="small" @click.native='' class='cx' icon='search'>查询</el-button>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content fl">
						<el-button type="primary" size="small" @click.native='' class='close' icon='circle-cross'>
							</i>关闭</el-button>
					</div>
				</el-col>
			</el-row>

		</el-form>
		<!--form第二行-->

		<!--搜索框完-->
		<!--表格-->
		<div class='table'>
			<el-table :data="tableData3" @cell-dblclick="dbrow" @header-click="headerc"  v-loading.body="loading" element-loading-text="玩命加载中"  height="680" border style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type='selection' prop="" label="选定框" width="50">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="审核" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="计划单号" width="110">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="日期" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>

				<el-table-column prop="address" label="制单人" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="创建日期" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="总数量" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="仓库" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="审核人" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="审核日期" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="合作方" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="备注" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="跨合作方理货" width="auto">
					<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
								    </el-table-column>
				</el-table-column>
				
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checked: true,
			formStacked: {
				name: '',
				region: '',
				type: ''
			},
      loading: false,
			pszx: false, //配送中心禁选
			peisong: '',
			hzf: '',
			options: [], // 合作方列表
			backUpArr: [], // 合作方列表备份
			cities: [],

			djbh: '',
			zdrq: '',
			rq1: '',
			rq2: '',
			hzf: '',
			hzfID: '',
			shbz: '',
			tableData3: [],
			pickerOptions1: '',
			pickerOptions2: '',
			formInline: {},
			activeName: '',
		};
	},
	mounted: function() {
		var that = this;
		var myDate = new Date();
		that.rq1 = myDate.format('yyyy-MM-dd');
		that.rq2 = myDate.format('yyyy-MM-dd');
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
				that.peisong = data[0].DCID
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
				that.hzf = data[0].Name;
				that.hzfID = data[0].InterID;
				that.backUpArr = data;
				console.log(data);
			});
		},
		gethzfID(val) {
			console.log(val)
			this.hzdID = val;
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
		handleSelectionChange() {

		}
	}
}
</script>

<style scoped>
.ckjhjhd .line {
	text-align: center;
	line-height: 50px;
}

.ckjhjhd .lines {
	text-align: right;
	line-height: 50px;
}

.tongji {
	padding-top: 5px;
	padding-bottom: 50px;
}

.tongji .right .el-button {
	padding: 8px;
}

.tongji .right {
	float: right;
	padding-right: 20px;
}

.tongji .left {
	float: left;
	padding-left: 30px;
}

.ckjhjhd .el-form-item__content {
	margin-top: 6px;
	margin-left: 10px;
}

.ckjhjhd .el-table th>.cell {
	line-height: normal;
}

.ckjhjhd .el-table tr:nth-child(2) th {
	background: none;
}

.datatable {
	width: 100%;
}

.fymxbb {
	width: 100%;
	height: 100%;
}

.buttondiv {
	margin-top: 12px;
	margin-left: 20px;
	display: table;
	float: left;
}

.ckjhjhd .grid-content {
	text-align: center;
	color: #000;
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

.czypd {
	padding-left: 30px;
}

.curbox {
	display: table;
	margin: 0 auto;
	padding-left: 30px;
	background: url(../../../common/img/rk/baocun.png) no-repeat;
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

.bcsh {
	background: url(../../../common/img/rk/baocunshenhe.png) no-repeat;
	background-position: 5px 10px;
}

.syt {
	background: url(../../../common/img/rk/shangyitiao.png) no-repeat;
	background-position: 5px 10px;
}

.xyt {
	background: url(../../../common/img/rk/xiayitiao.png) no-repeat;
	background-position: 5px 10px;
}

.xddyp {
	background: url(../../../common/img/rk/xuandingdanyp.png) no-repeat;
	background-position: 5px 10px;
}

.xdd {
	background: url(../../../common/img/rk/xuandingdan.png) no-repeat;
	background-position: 5px 10px;
}

.el-row {
	margin: 5px 0 5px 0;
}

.tongji {
	text-align: center;
	margin-top: 5px;
}

.xz {
	background: url(../../../common/img/rk/plxg.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sc {
	background: url(../../../common/img/rk/sc.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sc {
	background: url(../../../common/img/rk/sc.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.chakan {
	background: url(../../../common/img/rk/cx.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.dc {
	background: url(../../../common/img/rk/daochu.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sh {
	background: url(../../../common/img/rk/shenhe.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.fs {
	background: url(../../../common/img/rk/fanshen.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.scdj {
	background: url(../../../common/img/rk/scdj.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.fscdj {
	background: url(../../../common/img/rk/fscdj.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.shzy {
	background: url(../../../common/img/rk/shzy.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.shysd {
	background: url(../../../common/img/rk/shys.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sjzy {
	background: url(../../../common/img/rk/sjzy.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.sjzhiyin {
	background: url(../../../common/img/rk/sjzyd.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ctys {
	background: url(../../../common/img/rk/ctys.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.tc {
	background: url(../../../common/img/rk/tuichu.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.el-button {
	height: 30px;
	width: 80px;
}

.fhzy {
	background: url(../../../common/img/rk/shenhe.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.fhzyrq {
	background: url(../../../common/img/rk/shenhe.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.dy {
	background: url(../../../common/img/rk/dayin.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.yl {
	background: url(../../../common/img/rk/yulan.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ckjhjhd {
	width: 100%;
	height: 100%;
}
</style>