<template>
	<!-- 损溢单序时簿 -->
	<div class="jbda_hzf">
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox xz" @click=''><span>获取</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tianjia " @click='hzfAdd=true'>
							<span>添加</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox xg" @click=''><span>编辑</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sc" @click=''><span>删除</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox dc" @click=''><span>导出</span></div>
					</div>
				</li>
				<li class="tjli" >
					<div class="boxtab">
						<div class="curbox tj" @click=''>
							<span>条件</span>
							<el-input class='tjsearch' placeholder="" icon="search" v-model="input2" :on-icon-click="handleIconClick">
							</el-input>
						</div>

					</div>
					<!--<span class="gun"></span>-->
				</li>
				<div class="boxtab">
					<div class="curbox jy" @click=''><span>禁用</span></div>
				</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox fjy" @click=''><span>反禁用</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tc" @click="closetag"><span>退出</span></div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="chaxunkuang">
			<div class="formcx ccgl-r">
				<el-form class="demo-ruleForm">
					<el-form-item required>

						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>配送中心：</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="peisong">
								<!-- 配送中心列表 -->
								<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
									<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
										<span style="float: left">{{ item.DCName }}</span>
									</el-option>
								</el-select>
								<!-- 配送中心列表结束 -->
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="6" :offset="1">
							<el-checkbox label="仅显示未分配配送中心" name="type"></el-checkbox>
						</el-col>
					</el-form-item>
				</el-form>
			</div>

		</div>
		<!--条件查询结束-->
		<!--表格开始-->
		<div class="table">
			<el-table :data="tableData3" height="300" border style="width: 100%" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中">
				<el-table-column prop="name" label="编号" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="名称" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="助记码" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="联系人" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="电话号码" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="手机号码" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="银行" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="银行账号" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="QQ" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="Email" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="地址" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="邮编" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="营业执照" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="税务登记" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="组织机构代码" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="最低库存" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="备注" width="110">
					<el-table-column prop="name" label="" width="110" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="服务接口编号" width="150">
					<el-table-column prop="name" label="" width="150" class-name="mohucha">
					</el-table-column>
				</el-table-column>

			</el-table>
		</div>
		<!--表格完-->
		
		<!--以下是弹窗部分-->

		<el-dialog title="合作方信息档案" :visible.sync="hzfAdd"   class='large' size="large" :before-close="handleClose">
			<hzfAdd></hzfAdd>
			<span slot="footer" class="dialog-footer">
   
  </span>
		</el-dialog>
		
		
	</div>
</template>

<script>
//	import axios from 'axios'
	import hzfAdd from './hzfAdd.vue'

	export default {
//		name: 'fymxbb',
		components: {
			'hzfAdd':hzfAdd
		},
 		
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ruleForm: {
					date1: '',
					date2: '',

				},
				tableData4: [],
				loading: false,
				hzfAdd:false,
				hzf: '',
				backUpArr: '',
				options: '',
				peisong: '',
				cities: [],
				yqlist: '',
				yuanqu: '',
				bumen: '',
				shbzlist: [ // 审核标志
					{
						value: '1',
						label: '全部'
					},
					{
						value: '2',
						label: '已审核'
					},
					{
						value: '3',
						label: '未审核'
					}
				],
				shbz: '', //审核标志选择框默认为空	

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
			closetag: function() {
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
			getCode(val) {
				if(val) { //val存在 
					this.options = this.backUpArr.filter((item) => {
						if(!!~item.Name.indexOf(val) || !!~item.Code.indexOf(val)) {
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
	.jbda_hzf .tjli {
		margin-right: 140px;
		display: block;
		height: 40px;
	}
	

	
	.tjli .el-input__inner {
		position: absolute;
		width: 130px;
		top: -58px;
		left: 42px;
	}
	
	.tjli .el-input__icon {
		top: -56px;
		left: 138px;
		z-index: 1;
	}
	.tjli .boxtab{
		display: block;
	}
</style>