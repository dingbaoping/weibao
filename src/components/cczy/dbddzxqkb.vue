<template>
<!-- 调拨订单执行情况表 -->
	<div class="dbddzxpkb">
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox sx" @click='djt_Click=true'><span>单据</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox sh" @click='djt_Click=true'><span>导出</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox sc" @click='djt_Click=true'><span>窗体样式</span></div></div></li>
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="chaxunkuang">
			<div class="formcx ccgl-r">
				
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-col :span="3">
							<div class="grid-content">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
							</el-form-item>
							</div>
						</el-col>
						<el-col class="line " :span="1">
							<div class="grid-content">
								<p class="ZHI">至</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
							</el-form-item>
							</div>
						</el-col>
					
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>合作方：</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content">
							<el-form-item prop="peisong">
								<el-select v-model="hzf" default-first-option no-data-text="无数据" @change="gethzfID" filterable :filter-method="getCode" class='hzf  input_width'>
									<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
										<span style="float: left">{{ item.Code }}</span>
										<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
									</el-option>
								</el-select>
							</el-form-item>
							</div>
						</el-col>
						
						<el-col :span="4" style="margin-top: 5px;" offset="2">
							<div class="grid-content btn">
								<el-button type="primary"><i class="el-icon-search el-icon--left"></i>查询</el-button>
								<el-button type="primary"><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
							</div>
						</el-col>
					</el-form-item>
					<el-form class="demo-ruleForm" style="margin-left:0">
					<el-form-item required>
						<el-col :span="2" offset="2" >
							<div class="grid-content xzsp">
								<p>配送中心：</p>
							</div>
						</el-col>
						<el-col :span="3">
							<!-- 配送中心列表 -->
								<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
									<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
										<span style="float: left">{{ item.DCName }}</span>
									</el-option>
								</el-select>
								<!-- 配送中心列表结束 -->
						</el-col>
						<el-col :span="2">
							<div class="grid-content">
								<p>园区：</p>
							</div>
						</el-col>
						<el-col :span="3">
							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="23132" class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</el-col>
						<el-col :span="2">
							<div class="grid-content">
								<p>订单号：</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content  ">
								<el-input placeholder="" v-model="hzf" @click="hzf_Click = true" id='hzf' ref='hzf'>
								</el-input>
							</div>
						</el-col>
						
					</el-form-item>
				</el-form>
				</el-form>
			</div>

		</div>
		<!--条件查询结束-->
		<!--表格开始-->
		<div class="table">
		<el-table :data="tableData3" height="600" border style="width: 100%" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中"  >
			<el-table-column prop="MC" label="">
			<el-table-column type='selection'  prop="" label="选定框" width="50">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
     	 	</el-table-column>
			<el-table-column prop="name" label="合作方" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="name" label="订单日期" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="订单编号" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="业务类型" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="调拨完成百分比" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="商品编号" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="商品名称" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="单位"  width="160">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="辅助单位"  width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
      		<el-table-column prop="address" label="关闭标志" width="100">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="关闭人" width="100">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="关闭时间" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="关闭原因" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
      	</el-table-column>
      	<el-table-column prop="MC" label="签订">	
			<el-table-column prop="address" label="基本数量" width="100">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="辅助数量" width="100">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
      	</el-table-column>	
      	<el-table-column prop="MC" label="入库">	
      		<el-table-column prop="address" label="已执行基本数量"  width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="已执行辅助数量" width="100">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
     	</el-table-column>
      	</el-table-column>	
      	<el-table-column prop="MC" label="未入库">	
      		<el-table-column prop="address" label="未执行基本数量"  width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="未执行辅助数量" width="100">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
     		 	</el-table-column>
			
      	</el-table-column>	
		</el-table>
		</div>
		<!--表格完-->
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'bomd',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ruleForm: {
					date1: '',
					date2: '',

				},
				tableData4: [],
				loading: false,
				shbzlist: [ // 审核标志
					{ value: '1', label: '全部' },
					{ value: '2', label: '已审核' },
					{ value: '3', label: '未审核' }
				],
				shbz:'',//审核标志选择框默认为空				
				hzf:'',
				backUpArr:'',
				options:'',
				peisong:'',
				yqlist:'',
				yuanqu:'',
				bumen:'',

			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			var tabdata = [];
			var len = 0;
			that.getdclist();
			axios.get("http://121.41.122.74:5676/Handler.ashx")
				.then(function(rsp) {
					//	that.tableData4 = rsp.data
					tabdata = rsp.data;
					len = tabdata.length;
					getdata(0);
					that.loading = false;
				})

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
			//此段JS为了模糊匹配数据用的
			fuzzyquery: function(cname, val) {
				var that = this;
				var data = that.tableData4;

			},
			headerc: function() {
				console.log(111);
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
				// that.pszx = true; // 配送输入框禁用
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
		  },
		}

	}
</script>
<style>
	.dbddzxpkb .btn{
		margin-left: 0!important;
	}
	
</style>