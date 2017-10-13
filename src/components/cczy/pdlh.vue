<template>
<!-- 盘点理货 -->
	<div class="pdlh">
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox xz" @click='pdlh_Click=true'><span>新增</span></div></div></li>
					<li><div class="boxtab"><div class="curbox ck" ><span>查看</span></div></div></li>
					<li><div class="boxtab"><div class="curbox sc"><span>删除</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox dy" ><span>打印</span></div></div></li>
					<li><div class="boxtab"><div class="curbox sh" ><span>确认</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox fpry"><span>分配人员</span></div></div><span class="gun"></span></li>
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


		<!--form第一行-->
		<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
			<el-row :gutter="10">

				<!--check-->
				<el-col :span="3" class="sj-w">
					<div class="grid-content ">
						<el-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd" v-model="ksrq" align="right" :picker-options="pickerOptions1"></el-date-picker>

					</div>
				</el-col>
				<el-col :span="1">
					<div class="grid-content ">
						<p >至</p>
					</div>
				</el-col>
				<el-col :span="3" class="sj-w">
					<div class="grid-content ">

						<el-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd" v-model="jsrq" align="right" :picker-options="pickerOptions2"></el-date-picker>

					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">
						<p >配送中心:</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<!-- 配送中心列表 -->
						<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" >
							<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
								<span style="float: left">{{ item.DCName }}</span>
							</el-option>
						</el-select>
						<!-- 配送中心列表结束 -->
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">
						<p >园区:</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="23132" class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-button type="primary" @click.native='queryReceiving' class='cx'>
							<i class='el-icon-search'></i>查询</el-button>
						<el-button type="primary" @click.native='closetag' class='close'>
							<i class='el-icon-circle-cross'></i>关闭</el-button>
					</div>
				</el-col>
			</el-row>

		</el-form>

		<!--表格列表-->
		<div id='table_dj'>
						<el-table :data="ddlbs" height="250" border style="width: 100%" @cell-dblclick="dbrow" @header-click="headerc">
							<el-table-column type='selection' prop="" label="选定框" width="50">
								<el-table-column prop="TransportCmpName" label="" width="50" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="单号" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="创建日期" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<!--商品资料弹出框-->
							<el-table-column prop="name" label="状态" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="制单人" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="原数量" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="盘点数量" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="分配用户" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="备注" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="确认人" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="确认日期" width="110">
								<el-table-column prop="TransportCmpName" label="" width="110" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							

						</el-table>

					</div>


		<!-- 添加仓位弹窗-->
		<el-dialog title="盘点计划单" id="pdjh" class="pdjh" :visible.sync="pdlh_Click" size="tiny">
			<div class="dialog-body"> 
				 <el-row>
					<el-col :span="2"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">配送中心:</div></el-col>
					<el-col :span="12"><div class="grid-content">
						<!-- 配送中心列表 -->
						<el-select v-model="peisong_t"  @change="pschange_t" filterable  class=" blueborder input_width" >
							<el-option v-for="item in cities_t" :key="item.DCID" :label="item.DCName" :value="item.DCID">
								<span style="float: left">{{ item.DCName }}</span>
							</el-option>
						</el-select>
						<!-- 配送中心列表结束 -->
						</div></el-col>
				</el-row>
				 <el-row>
					<el-col :span="2"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">园区:</div></el-col>
					<el-col :span="12"><div class="grid-content">
							<!-- 园区列表 -->
							<el-select v-model="yuanqu_t"  no-data-text="23132" class=" blueborder input_width">
								<el-option v-for="item in yqlist_t" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</div></el-col>
				</el-row>
				<el-row>
					<el-col :span="2"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">仓位:</div></el-col>
					<el-col :span="12"><div class="grid-content"><el-input type="textarea" :rows="6"></el-input></div></el-col>
					<el-col :span="2"><div class="grid-content icon-pdlh">
						<el-input  icon="search"  @click="xzcw_Click=true">
							</el-input>
					</div> </el-col>
				</el-row>
				<el-row>
					<el-col :span="4"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">
				<el-button type="primary" @click="pdlh_Click=false" >确 定</el-button>
					</div></el-col>
					<el-col :span="8"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content"> <el-button type="primary" @click='pdlh_Click=false'>取消</el-button></div></el-col>
				</el-row>
			</div>
		</el-dialog>
		<!--添加仓位弹窗 end -->
		<!-- 选择仓库弹框 -->
		<el-dialog title="选择仓位" id="xzcw" class="xzcw" :visible.sync="xzcw_Click" size="tiny">
			<div class='xzck'>
				<div class="but-box">
					<ul>
						<li>
							<div class="boxtab">
								<div class="curbox qd ok">
									<span @click="xzcw_Click=false">确定</span>
								</div>
							</div>
							<span class="gun"></span>
						</li>
						<li>	
							<div class="boxtab">
								<div class="curbox tc" @click="xzcw_Click=false">
									<span>退出</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="xzcw_table">
					<el-table  :data="cwlbs" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column prop="name" label="编号" width="auto">
						</el-table-column>
						<el-table-column prop="name" label="仓位" width="auto">
						</el-table-column>
						<el-table-column prop="address" label="库区" width="auto">
						</el-table-column>
						<el-table-column prop="address" label="仓库" width="auto">
						</el-table-column>
						<el-table-column prop="address" label="园区" width="auto">
						</el-table-column>
					</el-table>
				</div>
			</div>
		</el-dialog>

		<!-- 选择仓库弹框 -->

	</div>
</template>

<script>
	export default {
		data() {
			return {
				pdlh_Click: false,//盘点理货新增弹窗
				xzcw_Click:false,//
				tableData4: [],
				ksrq:'',///开始日期
				jsrq:'',//结束日期
				cities:[],//配送中心列表
				peisong:'',//配送中心id
				yuanqu:'',//园区id
				yqlist:'',//园区列表

				cities_t:[],//弹窗配送中心列表
				peisong_t:'',//配送中心id
				yuanqu_t:'',//弹窗园区id
				yqlist_t:'',//弹窗园区列表
			}
		},
		mounted: function() {
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
				that.peisong = data[0].DCID;
				that.peisong_t = data[0].DCID;
				that.cities = data;
				that.cities_t = data;
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
						that.getyuanqulist_t(that.peisong_t)
					}
				})
			},
		// 获取园区列表,不含全部
		getyuanqulist_t: function(psid) {
			var that = this;
			that.baseAjax("getparklist", {
				UserID: window.userid,
				DCID: psid
			}, function(data) {
				var obj = eval('(' + data + ')');
				var datas = JSON.parse(obj.Datas);
				var data = datas.Data;
				that.yqlist_t = data;
				that.yuanqu_t = data[0].ParkID;
			})
		},
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				that.getyuanqulist(that.peisong);//
			},
			// 配送与弹窗园区数据绑定
			pschange_t: function() {
				var that = this;
				that.getyuanqulist_t(that.peisong_t);//
				console.log(333333333333333333333333333333);
			},
			//表格双击（可编辑表格）
			dbrow: function(row, column, cell, event) {
			},
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
			}
		}

	}
</script>
