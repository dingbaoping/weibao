<template>
	<div class='ckddpsyc'>

		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox sh"><span>查看</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox plsh"><span>导出</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox bz"><span>关闭</span></div>
					</div><span class="gun"></span></li>
				<li>
				<div class="boxtab">
					<div class="curbox bz"><span>延迟</span></div>
				  </div><span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<!-- <span>窗体样式</span> -->
							<el-dropdown split-button @click="handleClick">
								窗体样式
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>保存样式</el-dropdown-item>
									<el-dropdown-item>恢复样式</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox tc" @click="closetag"><span>关闭</span></div>
					</div><span class="gun"></span></li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->
		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="zdrq" placeholder="订单日期" class='zdrq input_width'>
								<el-option v-for="item in zdrqlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->
					<el-col :span="3" class="sj-w">
						<div class="grid-content ">
							<el-date-picker v-model="ksrq" align="right" class='input_width' type="date" placeholder="选择日期" :picker-options="pickerOptions1">
							</el-date-picker>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>至</p>

						</div>
					</el-col>
					<el-col :span="3" class="sj-w">
						<div class="grid-content ">

							<el-date-picker v-model="jsrq" align="right" class='input_width' type="date" placeholder="选择日期" :picker-options="pickerOptions2">
							</el-date-picker>

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
							<p>审核标志:</p>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">

							<el-select v-model="shbz" placeholder="全部" class="input_width shbz">
								<el-option v-for="item in shbzlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>

				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline">
				<el-row :gutter="10" >
					<el-col :span="2" >
						<div class="grid-content">
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

					<el-col :span="2" >
						<div class="grid-content djbj">
							<p>单据编号:</p>
						</div>
					</el-col>
					<el-col :span="3" > 
						<div class="grid-content djbj">
							<el-input class="inline-input input_width djbh" size="small" placeholder="" v-model="djbh">
							</el-input>
						</div>
					</el-col>
					<el-col :span="4" :offset="2">
						<div class="grid-content btn">
							<el-button type="primary" @click='search' class='cx'><i class='el-icon-search'></i>查询</el-button>
							<el-button type="primary" @click='closetag' class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<!--搜索框完-->
		<!--表格-->
		<div class="table">
		<el-table :data="tableData3" @cell-dblclick="dbrow" @header-click="headerc"  height="600" border style="width: 100%">
			<el-table-column type='selection' prop="" label="选定框" width="50">
			  <el-table-column  type="index" label="0" width="auto">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="name" label="单据编号" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="name" label="出库类型" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="订单日期" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="客户编号" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="客户名称" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="单据金额" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="业务员" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="源单号" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="交货方式" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="需配送时间" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="交货地点" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="备注" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="制单人" width="auto">
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
			<el-table-column prop="address" label="提交状态" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="体积" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="重量" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="打印次数" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="基本数量合计" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="辅助数量合计" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="是否收现" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="出库状态" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="单据级别" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="配送金额" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="配送距离" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="配送中心" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="制单日期" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="部门" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="运费" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="订单状态" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="结算状态" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>
			<el-table-column prop="address" label="网上支付" width="auto">
			  <el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      </el-table-column>

		</el-table>
		</div>
		<div class='tongji'>
			<el-tag class='tag1'>共<span>20</span>条</el-tag>
			<el-tag class='tag2'><span>0</span></el-tag>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				formStacked: {
					name: '',
					region: '',
					type: ''
				},
				peisong: '',
				cities: [],
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
					},
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
					},
				djbh: '',
				zdrq: '0',
				zdrqlist: [{
					value: '0',
					label: '订单日期'
				},{
					value: '1',
					label: '需配送时间'
				},{
					value: '2',
					label: '实际配送时间'
				},{
					value: '3',
					label: '审核日期'
				},{
					value: '4',
					label: '制单日期'
				}],
				ksrq: '',
				jsrq: '',
				hzf: '0',
				options: [], // 合作方列表
				backUpArr: [], // 合作方列表备份
				shbz: '',
				shbzlist:[{
					label:"全部",
					value:"1",
				},
				{
					label:"已审核",
					value:"2",
					
					
				},
				{
					label:"未审核",
					value:"3",
				},
				],
				tableData3: [],
				formInline: [],
				activeName: '',
			};
		},
		mounted: function() {
			var that = this;
			var myDate = new Date();
			that.ksrq = myDate.format('yyyy-MM-dd');
			that.jsrq = myDate.format('yyyy-MM-dd');
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
					that.peisong = data[0].DCID
				});
			},
			// 获取合作方列表
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
			  });
		  },
			// 配送与hzf数据绑定
			pschange: function() {
				var that = this;
				that.gethzflist(that.peisong);
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
			onSubmit() {
				console.log('submit!');
			},
			handleClick(){},
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
			},
		}
	}
</script>

<style scoped>
	/*@import url("../../../common/css/ckddpsyc/ckddpsyc.css");*/
	
	.el-row {
		margin-top: 5px;
		margin-bottom: 10px;
		padding: 0 5px;
	}
	
	.el-form {
		margin-bottom: 0;
	}
	
	.ckddpsyc .grid-content p {
		min-width: 60px;
		text-align: center;
	}
	.el-icon-date {
		position: absolute;
		top:1px;
	}
	.pszx-w{
		width: 193px;
	}
	.djbh-w{
		width: 150px;
	}
	.btn{
		padding-left: 10px;
	}
	.ckddpsyc .el-date-editor.el-input {
		width: 100%;
	}
	.searchnav{
		margin-bottom: 5px;
	}
</style>