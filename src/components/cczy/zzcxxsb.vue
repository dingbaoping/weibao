<template>
<!-- 组装拆卸序时簿 -->
	<div class="zzcxxsb">
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox xz" @click='djt_Click=true'><span>新增</span></div></div></li>
					<li><div class="boxtab"><div class="curbox xg" @click='djt_Click=true'><span>修改</span></div></div></li>
					<li><div class="boxtab"><div class="curbox ck" @click='djt_Click=true'><span>查看</span></div></div></li>
					<li><div class="boxtab"><div class="curbox sc" @click='djt_Click=true'><span>删除</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox sx" @click='djt_Click=true'><span>刷新</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox sh" @click='djt_Click=true'><span>审核</span></div></div><span class="gun"></span></li>
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
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
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
								<p>合作方：</p>
							</div>
						</el-col>
						<el-col :span="2">
							<el-form-item prop="peisong">
								<!--下拉式合作方-->
								<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
									<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.Code">
										<span style="float: left">{{ item.Code }}</span>
										<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
									</el-option>
								</el-select>
								<!--下拉式合作方结束-->
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>审核标志：</p>
							</div>
						</el-col>
						<el-col :span="2">
							<el-form-item prop="peisong">
								<!--审核标志-->
								<el-select v-model="shbz" placeholder="全部" class="shbz">
									<el-option v-for="item in shbzlist" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
								<!--审核标志结束-->
							</el-form-item>
						</el-col>
						<el-col :span="4">
							<div class="grid-content btn">
								<el-button type="primary"><i class="el-icon-search el-icon--left"></i>查询</el-button>
								<el-button type="primary"><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
							</div>
						</el-col>
					</el-form-item>
				</el-form>
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-col class="lines" :span="2" :offset="3">
							<div class="grid-content">
								<p>查询条件：</p>
							</div>
						</el-col>
						<el-col :span="2">
							<el-form-item prop="peisong">
								<el-input class="inline-input djbh" size="small" placeholder="" v-model="djbh">
								</el-input>
							</el-form-item>
						</el-col>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<!--条件查询结束-->
		<!--表格开始-->
		<div class="table">
		<el-table :data="tableData3" height="300" border style="width: 100%" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中"  >
			<el-table-column type='selection'  prop="" label="选定框" width="50">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
     	 	</el-table-column>
			<el-table-column prop="name" label="审核标志" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="name" label="提交状态" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" sortable label="单据编号" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="出库类型" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="出库日期" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="客户名称" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="客户编号" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="基本数量合计" sortable width="160">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="单据金额" sortable width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="业务员" width="100">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="复核区" width="100">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="客户区域" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
				</el-table-column>
      		</el-table-column>
			<el-table-column prop="address" label="配送路线" width="120">
			  	<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
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
		name: 'fymxbb',
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
				backUpArr:'',
				options:'',
				peisong:'',
				cities:[],
				yqlist:'',
				yuanqu:'',
				bumen:'',
				shbzlist: [ // 审核标志
					{ value: '1', label: '全部' },
					{ value: '2', label: '已审核' },
					{ value: '3', label: '未审核' }
				],
				shbz:'',//审核标志选择框默认为空	

			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			var tabdata = [];
			var len = 0;
			axios.get("http://121.41.122.74:5676/Handler.ashx")
				.then(function(rsp) {
					//	that.tableData4 = rsp.data
					tabdata = rsp.data;
					len = tabdata.length;
					getdata(0);
					that.getdclist();
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
			pschange: function() {
				var that = this;
				// that.pszx = true; // 配送输入框禁用
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
				that.gethzflist(that.peisong);
			},
		}

	}
</script>