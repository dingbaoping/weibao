<template>
	<div class='ckjhjhd'>
		<!--入库退回拣货作业单-->
		<div class="but-box">
			<ul>
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

		<el-tabs v-model='activeName' type="border-card">
			<el-tab-pane name='101' :disabled="step != 1" label="第一步【选择入库订单】">
				<div class='xzckdd'>
					<el-form :inline="true" class="demo-form-inline form1">
						<el-row :gutter="10">
							<!--check-->
							<el-col :span="2" class="sj-w">
								<div class="grid-content ">
									<el-date-picker type="date" placeholder="选择日期" v-model="ksrq" align="right" :picker-options="pickerOptions"></el-date-picker>
								</div>
							</el-col>
							<el-col :span="1">
								<div class="grid-content ">
									<span class=''>至</span>
								</div>
							</el-col>
							<el-col :span="2" class="sj-w">
								<div class="grid-content ">
									<el-date-picker type="date" placeholder="选择日期" v-model="jsrq" align="right" :picker-options="pickerOptions"></el-date-picker>
								</div>
							</el-col>
							<el-col :span="1" class="margin-left">
								<div class="grid-content ">
									<span class=''>配送中心:</span>
								</div>
							</el-col>
							<el-col :span="2">
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
							<el-col :span="1">
								<div class="grid-content ">
									<span class=''>合作方*:</span>
								</div>
							</el-col>
							<el-col :span="2">
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
							<el-col :span="1">
								<div class="grid-content ">
									<span class=''>部门:</span>
								</div>
							</el-col>
							<el-col :span="2">
								<div class="grid-content ">
									<!-- 部门列表 -->
									<el-select v-model="department" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
										<el-option v-for="item in departmentList" :key="item.Code" :label="item.Name" :value="item.Code">
											<span style="float: left">{{ item.Code }}</span>
											<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
										</el-option>
									</el-select>
									<!-- 部门结束 -->
								</div>
							</el-col>
							<el-col :span="2">
								<div class="grid-content fr">
									<el-button type="primary" size="small" @click='search' class='cx' icon='search'>查询</el-button>
								</div>
							</el-col>
						</el-row>

					</el-form>
					<!--form第二行-->

					<!--搜索框完-->
					<!--表格-->
					<div class='table'>
						<el-table :data="tableData3" height="600" border style="width: 100%" 
						@cell-dblclick="dbrow" @header-click="headerc" @select="tableSelectRow" @select-all="tableSelectRow"
						v-loading.body="loading" element-loading-text="玩命加载中">
							<el-table-column type='index' prop="" label="" width="50">
								<el-table-column type="index" label=" " width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column type='selection' prop="" label="" width="50">
								<el-table-column  type='selection' width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OutDate" label="日期" width="auto">
								<el-table-column prop="OutDate" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="OutID" label="单据编号" width="110">
								<el-table-column prop="OutID" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Type" label="入库类型" width="110">
								<el-table-column prop="Type" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="CusCode" label="供应商" width="auto">
								<el-table-column prop="CusCode" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							</el-table-column>
							<el-table-column prop="CusName" label="源单号" width="auto">
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
							<el-table-column prop="BillNum" label="备注" width="auto">
								<el-table-column prop="BillNum" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Delivery" label="运输方式" width="auto">
								<el-table-column prop="Delivery" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="NeedDeliveryDate" label="预计到达时间" width="auto">
								<el-table-column prop="NeedDeliveryDate" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="DeliveryAddress" label="制单人" width="auto">
								<el-table-column prop="DeliveryAddress" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Remarks" label="审核人" width="auto">
								<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Poster" label="审核日期" width="auto">
								<el-table-column prop="Poster" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="Checker" label="合作方" width="auto">
								<el-table-column prop="Checker" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
						</el-table>
					</div>

				</div>
			</el-tab-pane>
			<el-tab-pane name='102' :disabled="step != 2" label="第二步【选择生成规则】">
				<el-row :gutter="10">
					<!--check-->
					<el-col :span="2">
						<div class="grid-content ">
							<span class=''>拣货策略:</span>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<!-- 拣货策略列表 -->
							<el-select v-model="jhcl" :disabled="jhclState" placeholder="" class=" blueborder input_width">
								<el-option v-for="item in jhclList" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<!-- 拣货策略列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<span class=''>拣货方式:</span>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<!-- 拣货方式列表 -->
							<el-select v-model="jhfs" default-first-option no-data-text="无数据" class='hzf  input_width'>
								<el-option v-for="item in jhfsList" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<!-- 拣货方式列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<span class=''>拣货规则:</span>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<!-- 拣货规则 -->
							<el-select v-model="jhgz" default-first-option no-data-text="无数据" class='hzf  input_width'>
								<el-option v-for="item in jhgzList" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<!-- 拣货规则 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<span class=''>拣货仓位:</span>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<!-- 拣货仓位列表 -->
							<el-select v-model="jhcw" default-first-option no-data-text="无数据" class='hzf  input_width'>
								<el-option v-for="item in jhcwList" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<!-- 拣货仓位列表结束 -->
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<span class=''>指定拣货员:</span>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<!-- 拣货员列表 -->
							<el-input placeholder="请输入内容" v-model="jhy" :disabled="true" class='jhy'>
							</el-input>
							<!-- 拣货员列表结束 -->
							<i class="el-icon-document" @click='jhy_Click=true'></i>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<span class=''>复核区*:</span>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<!-- 复核区列表 -->
							<el-select v-model="fhq" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in fhqlist" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<!-- 复核区列表结束 -->
						</div>
					</el-col>
				</el-row>
			</el-tab-pane>
			<el-tab-pane name='103' :disabled="step != 3" label="第三步【预览分配结果】">
				<div class='ylfp'>
					<div class='table'>
						<el-table :data="tableData" height="600" border style="width: 100%" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中" @selection-change="handleSelectionChange">
							<el-table-column type='selection' prop="" label="选定框" width="50">
								<el-table-column type="index" label="0" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="拣货计划单号" width="200">
								<el-table-column prop="name" label="" width="200" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="单据编号" width="200">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="商品编号" width="150">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="单据序号" width="100">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>

							<el-table-column prop="address" label="商品名称" width="140">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="规格型号" width="140">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="基本单位" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="辅助单位" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="换算率" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="订单数量" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="订单辅助数量" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="批次" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="生产日期" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="有效期至" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="托盘" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="仓位名称" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="实际应拣数量" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="实际应拣辅助数量" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="已拣基本数量" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="应拣数量" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="应拣辅助数量" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="已拣辅助数量" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="订单备注" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="有效标志" width="auto">
								<el-table-column prop="name" label="" width="auto" class-name="mohucha">
								</el-table-column>
							</el-table-column>

						</el-table>
					</div>

				</div>

			</el-tab-pane>

		</el-tabs>

		<div class='tongji'>
			<div class="right">
				<el-button type="primary" icon="arrow-left" @click='onBack' :disabled="step == 1">上一步</el-button>
				<el-button type="primary" icon="arrow-right" @click='onNext' :disabled="step == 3">下一步</el-button>
				<el-button type="primary" icon="circle-check" @click='submit' :disabled="step != 3">确认</el-button>
				<el-button type="primary" icon="circle-close" @click='closetag'>取消</el-button>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				step: 1,
				loading: false,
				peisong: '',
				hzf: '0',
				options: [], // 合作方列表
				backUpArr: [], // 合作方列表备份
				cities: [],
				jhy: '', // 拣货员
				fhq: '', // 复核区
				fhqlist: '', // 复核区list
				checked1: false, // 打印整货标签
				checked2: false, // 打印散伙标签
				pickerOptions: {
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
				tally: 2,//理货
				tallyList: [{label:'未理货', value:0},{label:'理货',value:1},{label:'全部',value:2}],//理货列表
				department: '001', //部门
				departmentList: [], //部门列表
				jhcl: 1,
				jhclList: [{label:'摘果', value:1},{label:'播种',value:2},{label:'摘果+播种',value:3}],
				jhclState: false,//策略是否禁用
				jhfs: 2,
				jhfsList: [{label:'纸质拣货', value:1},{label:'PDA拣货',value:2}],
				jhgz: 1,
				jhgzList: [{label:'先进先出', value:1},{label:'优先腾出仓位',value:2}],
				jhcw: 2,
				jhcwList: [{label:'全部', value:1},{label:'常规',value:2}],
				xqgk: 2, 
				xqgkList: [{label:'无', value:1},{label:'保质期内',value:2},{label:'效期预警', value:3},{label:'入库有效',value:4}],
				ksrq: '',
				jsrq: '',
				shbz: '',
				radio: '1',
				billState: false,//订单生成完状态
				tableData3: [],
				tableData: [],
				selectRow: [],
				activeName: '101',
				jhy_Click: false,
				num1: 1,
			};
		},
		mounted: function() {
			var that = this;

			var myDate = new Date();
			that.ksrq = myDate.format('yyyy-MM-dd');
			that.jsrq = myDate.format('yyyy-MM-dd');

			// 先获取一次配送列表
			that.getdclist();

			$('.close').click(function() {
				$('.ddsp').hide();
			});
			
		},

		methods: {		
			// 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
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
					$("tr", $table).show(); //先全部展示出来
					$datath.each(function() {
						var $this = $(this);

						var thv = $("input", $this).val() || $("div.cell", $this).html(); //获取需要匹配th的值
						thv = thv.indexOf("<input") != -1 ? "" : thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined && thv != "") {
							that.mohucha(thv, idx, $table);
						}

					});

				});
			},

			//查询入库订单
			search() {
				// this.tableData3 = [{OMark:123,OutID:123},{OMark:23,OutID:123}];
				// if(!this.hzf){
					//this.open('系统提示','当前合作方模式下拣货策略只能为摘果，是否继续?');
				// }
				// this.hzf == '' ? this.jhclState = true : this.jhclState = false;
				// return;
				this.ajax({
					type:'Post',
					data:{
						datas:{
							UserID: window.userid,
							StartDate: new Date(this.ksrq).format('yyyy-MM-dd'),
							EndDate: new Date(this.jsrq).format('yyyy-MM-dd'),
							ParID: this.hzf,
							DCID: this.peisong,
							DeptID: this.department,
						},
						method:'CPHH.PC.PDAModule.PickPlan.GetStorageOrderList'
					},
					success:function(data){
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						this.tableData3 = data; //单据
					}
				})
			},
			// 获取配送中心列表
			getdclist: function() {
				var that = this;
				this.ajax({
					type:'Post',
					data:{
						datas:{
							UserID: window.userid
						},
						method:'CPHH.PC.BaseInfo.Stock.GetDCList'
					},
					success:function(data){
						var obj = eval('(' + data + ')');

						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.peisong = data[0].DCID; //设置默认
						that.cities = data;
					}
				});
			},
			// 获取合作方列表
			gethzflist: function(psid) {
				var that = this;
				this.ajax({
					type:'Post',
					data:{
						datas:{
							UserID: window.userid,
							DCID: psid,
							Value: ''
						},
						method:'CPHH.PC.BaseInfo.Partner.GetListInDC_All'
					},
					success:function(data){
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.options = data;
						that.backUpArr = data;
					}
				});
			},
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				that.gethzflist(that.peisong);
			},
			//此方法是退出的函数
			closetag: function() {
				this.$confirm('确定退出？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					$(".is-active .el-icon-close").click();
				});
				
			},
			// 让CodeID  也成为搜索内容
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
			//表格行选择
			tableSelectRow(selection, row){
				this.Select(selection);
			},
			//全选与单选统一处理
			Select(selection){
				this.selectRow = selection;
			},
			//封装通知弹框
			open(title,content) {
				this.$alert(content, title, {
					type: 'info',
					confirmButtonText: '确定'
				});
			},
			//下一步的函数 阻止下一步的事件根据每个页面另写
			onNext() {
				//判断是否选择单据
				if(!this.selectRow.length){
					this.open('系统提示','未选择单据');
					return;
				}
				var that = this;
				that.step++
				that.step > 3 ? that.step = 3 : '';	
				that.activeName = '10'+that.step;
				if(that.step == 3){
					that.add();
					that.billState = true;
				}
			},
			//生成订单
			add() {
				var that = this;
				this.ajax({
					type:'Post',
					data:{
						datas:{
							BillType: '1',
							UserID: window.userId,
							UserName: window.userName,
							ParID: this.hzf,
							Tactics: this.jhcl,
							WorkType: this.jhfs,
							Rule: this.jhgz,
							StockType: this.jhcw,
							DCID: this.peisong,
							DCName: this.peisong,
							DeptID: this.peisong,
							DeptName: this.peisong,
							UseSecondPick: this.peisong,
							EffectPeriodControl: this.peisong,
							PreSendNo: this.peisong,
							UserIDList: this.peisong,
							UserNameList: this.peisong,
							ReviewArea: this.peisong,
							BillID: this.peisong
						},
						method:'CPHH.PC.PDAModule.PickPlan.Add'
					},
					success:function(data){
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.yqList = data;
					}
				});
			},
			//删除订单
			del(){
				var that = this;
				this.ajax({
					type:'Post',
					data:{
						datas:{
							BillType: '1',
							UserID: window.userId,
						},
						method:'CPHH.PC.PDAModule.PickPlan.Add'
					},
					success:function(data){
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.yqList = data;
					}
				});
			},
			//获取规则
			getscgzList(){
				var that = this;
				this.ajax({
					type:'Post',
					data:{
						datas:{
							UserID: window.userid,
							DCID: psid,
							Value: ''
						},
						method:'CPHH.PC.BaseInfo.Partner.GetListInDC_All'
					},
					success:function(data){
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.scgzlist = data;
					}
				});
			},
			//获取园区
			getyqList(){
				var that = this;
				this.ajax({
					type:'Post',
					data:{
						datas:{
							UserID: window.userid,
							DCID: psid,
							Value: ''
						},
						method:'CPHH.PC.BaseInfo.Partner.GetListInDC_All'
					},
					success:function(data){
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.yqList = data;
					}
				});
			},
			//上一步的函数 阻止下一步的事件根据每个页面另写
			onBack() {
				var that = this;
				that.step--
				that.step < 0 ? that.step = 1 : '' ;
				
				that.activeName = '10' + that.step;

				if(that.step == 2 && that.billState){
					that.del();
				}

			},
			//确认提交
			submit(){
				var that = this;
				this.ajax({
					type:'Post',
					data:{
						datas:{
							BillType: 2,
							UserID: window.userId,
							UserName: window.userName,
							ParID: this.ParID,//合作方ID
							ParkID: this.ParID,//园区ID
							ParkName: this.ParID,//园区名称
							BillID: this.billId,//订单号
						},
						method:'CPHH.PC.BaseInfo.Partner.GetListInDC_All'
					},
					success:function(data){
						//返回生成的收货计划单号
					}
				});
			},
			handleSelectionChange() {

			},
			// 制定份数
			handleChange () {

			},

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
	.margin-left{
		margin-left: 20px;
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
		background: url(../../../assets/img/gun.png) repeat-x;
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
		background: url(../../../../common/img/rk/baocun.png) no-repeat;
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
		background: url(../../../../common/img/rk/baocunshenhe.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.syt {
		background: url(../../../../common/img/rk/shangyitiao.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.xyt {
		background: url(../../../../common/img/rk/xiayitiao.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.xddyp {
		background: url(../../../../common/img/rk/xuandingdanyp.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.xdd {
		background: url(../../../../common/img/rk/xuandingdan.png) no-repeat;
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
		background: url(../../../../common/img/rk/plxg.jpg) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.sc {
		background: url(../../../../common/img/rk/sc.png) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.sc {
		background: url(../../../../common/img/rk/sc.png) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.chakan {
		background: url(../../../../common/img/rk/cx.png) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.dc {
		background: url(../../../../common/img/rk/daochu.jpg) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.sh {
		background: url(../../../../common/img/rk/shenhe.png) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.fs {
		background: url(../../../../common/img/rk/fanshen.png) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.scdj {
		background: url(../../../../common/img/rk/scdj.jpg) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.fscdj {
		background: url(../../../../common/img/rk/fscdj.jpg) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.shzy {
		background: url(../../../../common/img/rk/shzy.jpg) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.shysd {
		background: url(../../../../common/img/rk/shys.jpg) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.sjzy {
		background: url(../../../../common/img/rk/sjzy.jpg) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.sjzhiyin {
		background: url(../../../../common/img/rk/sjzyd.jpg) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.ctys {
		background: url(../../../../common/img/rk/ctys.jpg) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.tc {
		background: url(../../../../common/img/rk/tuichu.png) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.el-button {
		height: 30px;
		width: 80px;
	}
	
	.fhzy {
		background: url(../../../../common/img/rk/shenhe.png) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.fhzyrq {
		background: url(../../../../common/img/rk/shenhe.png) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.dy {
		background: url(../../../../common/img/rk/dayin.png) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.yl {
		background: url(../../../../common/img/rk/yulan.png) no-repeat;
		background-position: 5px 10px;
		background-size: 20px 20px;
	}
	
	.ckjhjhd {
		width: 100%;
		height: 100%;
	}
	
	.sj-w {
		width: 193px;
	}
	
	.el-form {
		margin: 5px 0 5px 15px;
	}
	.el-icon-document{
		position:relative;
		top:-25px;
		left:90px;
	}
	.pailiekuang{
		text-align: left;
	}
	.pailiekuang  .el-radio{
		margin-left: 0; 
	}
	.pailiekuang  .el-radio .el-input-number{
		width: 50%;
	}
</style>