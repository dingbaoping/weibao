<template>
	<div class='xydtc'>
		<!--选原单弹窗-->
		<div class="but-box">
			<!--导航栏部-->
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox xz" @click='choose'>
							<span>选择</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox chakan">
							<span>生成出库单</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox chakan">
							<span>查看</span>
						</div>
					</div>
					<span class="gun"></span>
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
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<slot name="close"></slot>
				</li>
			</ul>
		</div>

		<!--查询栏-->
		<div class='search'>
			<el-row :gutter="20">
				<el-col :span="4">
					<div class="grid-content ">
						<h1>出库订单</h1>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<div class="block">
							<el-date-picker v-model="ksrq" id='StartDate' align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
							</el-date-picker>
						</div>
					</div>
				</el-col>
				<el-col :span="1">
					<div class="grid-content ">
						<span>至</span>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<div class="block">

							<el-date-picker v-model="jsrq" id='EndDate' align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
							</el-date-picker>
						</div>
					</div>
				</el-col>
				<el-col :span="3">
						<div class="grid-content  ">
							<p>单据编号：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content  ">
							<el-input v-model="djbh" placeholder="" class="input_width blueborder yuandanhao"></el-input>
						</div>
					</el-col>
				<el-col :span="2" :offset='1'>
					<div class="grid-content ">
						<el-button type="primary" icon="search" @click='getxydList'>查询</el-button>
					</div>
				</el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="3" :offset='1'>
						<div class="grid-content  ">
							<p>客户名称：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content  ">
							<el-input v-model="khName" placeholder="" class="input_width blueborder yuandanhao"></el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>源单号：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content  ">
							<el-input v-model="ydh" placeholder="" class="input_width blueborder yuandanhao"></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<p>提货密码：</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content  ">
							<el-input v-model="thPwd" type="password" placeholder="" class="input_width blueborder yuandanhao"></el-input>
						</div>
					</el-col>
			</el-row>
			
		</div>

		<div class='tc_table'>
			<el-table :data="YDtableData" highlight-current-row border height='300' style="width: 100%" @header-click="headerc" @cell-dblclick="dbrow" >
				<el-table-column type="index"  width="35">
					<el-table-column type="index" label="0" width="35">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="OMark" label="出库状态" width="auto">
					<el-table-column prop="OMark" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="OutID" label="单据编号" width="auto">
					<el-table-column prop="OutID" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="BillNum" label="源单号" width="auto">
					<el-table-column prop="BillNum" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="OutDate" label="日期" width="auto">
					<el-table-column prop="OutDate" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="CusCode" label="客户编号" width="auto">
					<el-table-column prop="CusCode" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="CusName" label="客户名称" width="auto">
					<el-table-column prop="CusName" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Total" label="单据金额" width="auto">
					<el-table-column prop="Total" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="SalesMan" label="业务员" width="auto">
					<el-table-column prop="SalesMan" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Delivery" label="交货方式" width="auto">
					<el-table-column prop="Delivery" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="DeliveryAddress" label="交货地点" width="auto">
					<el-table-column prop="DeliveryAddress" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
					<el-table-column prop="Remarks" label="备注" width="auto">
					<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Poster" label="制单人" width="auto">
					<el-table-column prop="Poster" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Checker" label="审核人" width="auto">
					<el-table-column prop="Checker" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				
				<el-table-column prop="CheckDate" label="审核日期" width="auto">
					<el-table-column prop="CheckDate" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
			  <el-table-column prop="Property1" label="自定义1" width="auto">
					<el-table-column prop="DeptName" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Property2" label="自定义2" width="auto">
					<el-table-column prop="DeptName" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="DeptName" label="部门" width="auto">
					<el-table-column prop="DeptName" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="ParName" label="合作方名称" width="auto">
					<el-table-column prop="ParName" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="SupportNum" label="辅助数量" width="auto">
					<el-table-column prop="SupportNum" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Num" label="基本数量" width="auto">
					<el-table-column prop="Num" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Volume" label="体积" width="auto">
					<el-table-column prop="Volume" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Weight" label="重量" width="auto">
					<el-table-column prop="Weight" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="OutQty" label="出库数量" width="auto">
					<el-table-column prop="OutQty" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="LeftQty" label="剩余数量" width="auto">
					<el-table-column prop="LeftQty" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
			</el-table>

		</div>

	</div>
</template>
<script>
import nicescroll from "../../../common/js_nicescroll/jquery.nicescroll.js"
export default {

	props: {
		DataID:'',
		rktype: ''
	},
	data() {
		return {
			data: [{
				label: '一级 1',
				children: [{
					label: '二级 1-1',
					children: [{
						label: '三级 1-1-1'
					}]
				}]
			}],
			YDtableData: [],
			ksrq: '',
			jsrq: '',
			djbh: '', // 单据编号
			khName: '', // 客户名称
			ydh: '', // 源单号
			thPwd: '', // 提货密码
			pickerOptions1: {
				shortcuts: [{
					text: '最近一周',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近一个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近三个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						picker.$emit('pick', [start, end]);
					}
				}]
			},
			ddcollection: [],
			dataInfo: {}
		}
 
	},
  watch: {
    DataID () {
			this.dataInfo = JSON.parse(this.DataID);
			this.geyxydList();
		}
	},
	mounted: function() {
		//请把JS写这里面
		// 请求后台数据
		var that = this;
		//订单日期的默认值
		var myDate = new Date();
		var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
		var m = myDate.getMonth() + 1; //获取当前月份(0-10,0代表1月)
		var d = myDate.getDate(); //获取当前日(1-31)
		var today = y + "-" + m + "-" + d ;
		myDate.setDate(myDate.getDate() - 7);
		var dateArray = []; 
		var dateTemp; 
		var flag = 1; 
		for (var i = 0; i < 7; i++) {
				dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
				dateArray.push(dateTemp);
				myDate.setDate(myDate.getDate() + flag);
		}

		that.ksrq =  y + "-" + dateArray[0];
		that.jsrq = today;

		that.dataInfo = JSON.parse(that.DataID);
		that.getxydList();
	},
	methods: {
    getxydList () {
			var that = this;
			var Start = $('#StartDate input').val();
			var End = $('#EndDate input').val();
			console.log(Start, End)
			var params = {
				UserID: userid,
        StartDate: Start || that.ksrq,
				EndDate: End || that.jsrq,
				ParID: that.dataInfo.hzfid,
				DCID: that.dataInfo.peisong,
				ParkID: that.dataInfo.yuanqu,
				SupplierID: that.dataInfo.kehuid || 0,
				BillType: that.rktype,
				OrderID: that.djbh,
				BillNum: that.ydh,
				CusName: that.khName,
				DeliveryPwd: that.thPwd
			}
			$.ajax({
				url: 'http://116.62.171.144/post/index.php',
				type: 'POST', //GET
				async: true, //或false,是否异步
				data: {
					datas: params,
					method: "CPHH.PC.OutModule.Out.SelectOrder"
				},
				timeout: 5000, //超时时间
				success: function(data, textStatus, jqXHR) {
					console.log(data);
					var obj = eval('(' + data + ')');
          if(obj.StateCode == '100') {
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.YDtableData = data;
					}
					console.log(obj)
				}
			});
		},

		//此方法是退出的函数
		closetag: function() {
			$(".is-active el-dialog__close").click();
		},
		handleClick() { },
		choose() {
			var that = this;




		},





		// 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				if (index >= 0) {
			    that.$emit("setStorageData", row.StorageID);
					return false
				}
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
						eval("that.YDtableData[index]." + jname + "=val");
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
				var $datath = $("th.mohucha", $(".tc_table")); //匹配行Th
				var $table = $($(".tc_table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)
				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				// console.log("val", index)
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					console.log("v", v)
					$("tr",$table).show();//先全部展示出来
					console.log('$datath', $datath);
					$datath.each(function() {
						var $this = $(this);
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							console.log('thv,idx, $table');
							console.log(thv,idx, $table);
							that.mohucha(thv, idx, $table);
						}
					});
				});
				$inp.blur(function() {
					val = $inp.val(); //离开时在获一次值
					$dom.html(val);
				});
			},
	}


}

</script>

<style>
.xydtc {
	padding-bottom: 30px;
}
.xydtc .search div {
  line-height: 54px;
}
.xydtc h1 {
	padding-left: 20px;
	font-size: 30px;
}
.xydtc .tc_table .el-table {
  overflow: inherit;
}
</style>