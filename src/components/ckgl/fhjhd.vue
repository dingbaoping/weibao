
<template>
	<div class='fhjhd'>
		<!--复核计划单-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<router-link to="pdafhjhck" class="watch">
							<div class="curbox ck">查看</div>
							<span style="display: none">复核计划单</span>
						</router-link>
					</div>
					<div class="boxtab">
						 <div class="curbox dc">
						 	 <span>导出</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
				
				<li>
					<div class="boxtab">
						 <div class="curbox fhzy">
						 	 <span>复核作业</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox fhzyrq">
						 	 <span>复核作业（容器）</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
					<li>
					<div class="boxtab">
						 <div class="curbox dy">
						 	 <span>打印（装箱清单）</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox yl">
						 	 <span>预览（装箱清单）</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox dy">
						 	 <span>打印（整货标签）</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox yl">
						 	 <span>预览（整货标签）</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
				
				<li><div class="boxtab"><div class="curbox ctys" @click='djt_Click=true'>
					<!-- <span>窗体样式</span> -->
					<el-dropdown split-button  @click="">
						窗体样式
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>保存样式</el-dropdown-item>
							<el-dropdown-item>恢复样式</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					</div></div><span class="gun"></span>
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
		<!--条件查询-->

		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
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
						<div class="grid-content ">
							<p class='fr'>配送中心：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content">

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
						<div class="grid-content ">

							<p class=''>合作方：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
								<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
									<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
										<span style="float: left">{{ item.Code }}</span>
										<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
									</el-option>
								</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content fr">
							<el-button type="primary" size="small" @click.native='search' class='cx'><i class='el-icon-search'></i>查询</el-button>
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
		<!--表格-->
		<el-table class="table"highlight-current-row :data="splbs" height="610" @row-click="rowClick" @row-dblclick="dbRow" @header-click="headerc"   border style="width: 100%">
			<el-table-column prop="PickID" label="复核计划单号" width="auto">
				<el-table-column  prop="PickID" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Date" label="日期" width="auto">
				<el-table-column  prop="Date" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Line" label="路线" width="220">
				<el-table-column  prop="Line" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CompanyID" label="单位编号" width="auto">
				<el-table-column  prop="CompanyID" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CompanyName" label="单位名称" width="auto">
				<el-table-column  prop="CompanyName" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="BillQty" label="单据数量" width="auto">
				<el-table-column  prop="BillQty" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="PickQty" label="已复核数量" width="auto">
				<el-table-column  prop="PickQty" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Status" label="状态" width="auto">
				<el-table-column  prop="Status" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Poster" label="制单人" width="auto">
				<el-table-column  prop="Poster" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CreateDate" label="创建日期" width="auto">
				<el-table-column  prop="CreateDate" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="PickTactics" label="拣货策略" width="auto">
				<el-table-column  prop="PickTactics" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="PickPlanID" label="拣货计划单号" width="auto">
				<el-table-column  prop="PickPlanID" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="StartDate" label="开始作业时间" width="auto">
				<el-table-column  prop="StartDate" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="EndDate" label="结束作业时间" width="auto">
				<el-table-column  prop="EndDate" label="" width="110" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			
		</el-table>
		<div class='tongji'>
			<el-tag class='tag1'>共<span>20</span>条</el-tag>
			<el-tag class='tag2'><span>0</span></el-tag>
		</div>
	</div>

</template>

<script>
	import axios from 'axios'
	export default {
		name: 'fymxbb',
		data() {
			return {
				backUpArr:[],// 合作方备份
				ksrq:'',//开始日期
				jsrq:'',//结束日期
				tableData4: [],
				pickerOptions1: '',//日期选择
				pickerOptions2: '',
				hzf:'0',
				splbs:[],//商品列表
				formInline:'',//
				options:[{label:'全部',value:'0'}],
				peisong:'',
				cities:[],
				yqlist:'',
				yuanqu:'',
				bumen:'',

			}
		},
		mounted: function() {
			// 点击a链接新加一个标签页
			$(".boxtab a").click(function() {
				window.myEle.OpenTab.call(this, that);
			});
			// 默认时间
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
			// 查询
			search (){
				var jsons = {
					UserID: userid,//	用户ID	int	
					StartDate:$('#ksrq input').val(), //	起始日期
					EndDate:$('#jsrq input').val() ,//	截止日期
					ParID: this.hzf || 0,//	合作方ID	string	
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
						method: "CPHH.PC.PDAModule.CheckPlan.GetList"
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
			// 跳转查看页面
			watch() {
				var that = this;
				//跳转出库订单查看
				that.$router.replace({ path: '/pdafhjhck'}) 
				// 定义标签的名字
				let txt = "复核计划单"
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
				localStorage.setItem("fhjhBill", row.PickID);
			},
			// 行双击
			dbRow(row,event) {
				// 保存当前的订单号
				localStorage.setItem("fhjhBill", row.PickID);
				this.watch(); //跳查看页
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
					// console.log(444,$datath);
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
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				that.gethzflist(that.peisong);
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
<style type="text/css">
	.fhjhd .formcx  {
		margin-top: 6px;
		margin-left: 10px;
		width: 1200px!important;
	}
    .fhjhd .grid-content p{
		line-height: 25px!important;
	}
	.fhjhd .btn{
		margin-top: 0!important;
	}
</style>
<style scoped>
		.fhjhd .line {
		text-align: center;
		line-height: 50px;
	}
.fhjhd .grid-content p {
		min-width: 60px;
		text-align: center;
	}	
	
	.fhjhd .el-button {
		height: 32px;
		width: 70px;
	}
	.fhjhd .lines {
		text-align: right;
		line-height: 50px;
	}
	
	.fhjhd .el-form-item__content {
		margin-top: 6px;
		margin-left: 10px;
		min-width: 1200px!important;
	}
	
	.fhjhd .el-table th>.cell {
		line-height: normal;
	}
	
	.fhjhd .el-table tr:nth-child(2) th {
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
div.boxtab:hover{
	background: #efeeee;
}	
div.but-box ul li{
	display: table;
	float: left;
}
 .curbox{
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
  .bcsh{
  	background: url(../../../common/img/rk/baocunshenhe.png) no-repeat;
  	background-position: 5px 10px;
  }
  .syt{
  	background: url(../../../common/img/rk/shangyitiao.png) no-repeat;
  	background-position: 5px 10px;
  }
  .xyt{
  	background: url(../../../common/img/rk/xiayitiao.png) no-repeat;
  	background-position: 5px 10px;
  }
    .xddyp{
  	background: url(../../../common/img/rk/xuandingdanyp.png) no-repeat;
  	background-position: 5px 10px;
  }
    .xdd{
  	background: url(../../../common/img/rk/xuandingdan.png) no-repeat;
  	background-position: 5px 10px;
  }
  .el-row{
  	margin: 5px 0 5px 0;
  }
  .tongji {
  	text-align: center;
  	margin-top: 5px;
  }
  .xz{
  	background: url(../../../common/img/rk/plxg.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .sc{
  	background: url(../../../common/img/rk/sc.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .sc{
  	background: url(../../../common/img/rk/sc.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .chakan{
  	background: url(../../../common/img/rk/cx.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .dc{
  	background: url(../../../common/img/rk/daochu.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .sh{
  	background: url(../../../common/img/rk/shenhe.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .fs{
  	background: url(../../../common/img/rk/fanshen.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .scdj{
  	background: url(../../../common/img/rk/scdj.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .fscdj{
  	background: url(../../../common/img/rk/fscdj.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .shzy{
  	background: url(../../../common/img/rk/shzy.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .shysd{
  	background: url(../../../common/img/rk/shys.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .sjzy{
  	background: url(../../../common/img/rk/sjzy.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .sjzhiyin{
  	background: url(../../../common/img/rk/sjzyd.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
   .ctys{
  	background: url(../../../common/img/rk/ctys.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .tc{
  	background: url(../../../common/img/rk/tuichu.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .el-button{
  	height: 40px;
  	width: 80px;
  }
.fhzy{
	background: url(../../../common/img/rk/shenhe.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
}
.fhzyrq{
	background: url(../../../common/img/rk/shenhe.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
}
	.dy{
	background: url(../../../common/img/rk/dayin.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
}
.yl{
	background: url(../../../common/img/rk/yulan.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
}
.el-form{
	margin: 5px 0 5px 15px;
}
.grid-content button{
	height: 28px!important;
}
</style>