<template>
	<div class="ysqr">
		<!--操作按鈕-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<!-- <span>窗体样式</span> -->
							<el-dropdown split-button @click="handleClick">
								操作
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>更改交货方式</el-dropdown-item>
									<el-dropdown-item>补录装卸队</el-dropdown-item>
									<el-dropdown-item>更改运输方式</el-dropdown-item>
									<el-dropdown-item>运单跟踪</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</div><span class="gun"></span></li>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tc">
							<span>小票</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<el-dropdown split-button @click="handleClick">
								窗体样式
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>报春样式</el-dropdown-item>
									<el-dropdown-item>恢复样式</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tc">
							<span>同步到TMS</span>
						</div>
					</div>
					<span class="gun"></span>
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
		<!--操作按鈕結束-->

		<!--条件查询-->
		<div class="chaxunkuang">
			<div class="formcx">
				<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="zdrq" placeholder="出库日期" class='zdrq input_width'>
								<el-option v-for="item in zdrqlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->
					<el-col :span="3" class="sj-w">
						<div class="grid-content " >
							  <el-date-picker
      v-model="ksrq"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1	">
    </el-date-picker>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p class="">至</p>
							
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">						
							  <el-date-picker
      v-model="jsrq"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
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
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :span="2" >
						<div class="grid-content ">

							<p>配送中心*:</p>
							

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content pszx-w" >

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
						<div class="grid-content yqbj">

							<p>园区 ：</p>
							

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content yqbj yq-w">

							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="23132"   class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span> 
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">

							<p>出库单号:</p>
							
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-input class=" input_width " size="small" placeholder="" v-model="djbh">
							</el-input>
						</div>
					</el-col>
					<el-col :span="4" :offset='2' >
            <div class="grid-content ">
              <el-button type="primary"  @click="search" class='cx'><i class='el-icon-search'></i>查询</el-button>
              <el-button type="primary"  @click.native='' class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
              </div>
          </el-col>
         
				</el-row>
			</el-form>
			</div>

			
		</div>
		<!--条件查询结束-->

		<!--表格-->
		<div class="table">

			<el-table :data="tableData4" border style="width: 100%" max-height="700"@cell-dblclick="dbrow" @header-click="headerc"  >
				<el-table-column fixed type="selection" label="选定框" width="70">
						<el-table-column  type="index" label="0" width="auto" >
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="FXMC" label="审核标志" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="JSDX" label="提交状态" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="JSDXMC" label="单据编号" width="150">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="FXLX" label="出库日期" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="JFDJ" label="出库类型" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="DJBH" label="客户编号" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="DJRQ" label="客户名称" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="基本数量合计" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="单据金额" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="业务员" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="交货方式" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="需配送时间" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="实际配送时间" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="当前节点" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="最终节点" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="单据状态" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="签收日期" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="交货地址" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="订单号" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="打印次数" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="备注" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="制单人" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="审核人" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="审核日期" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="打印次数" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="合作方" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="源单号" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="体积" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="重要" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="辅助数量合计" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="责任界定" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="退货原因" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="退货说明" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="是否收现" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="拣货计划单号" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="单据级别" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="配送距离" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="仓库作业信息" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="配送中心" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="制单日期" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="园区" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="部门" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="运输方式" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="包装件数" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="运输方式审核状态" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="运费" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="首次打印人" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="首次打印日期" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="小票打印次数" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="网上支付" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="原出库单号" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="托运订单号" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="装卸队" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="收货人" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="转入" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="复核区" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="客户区域" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="配送路线" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="整件数" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="装卸开始时间" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="装卸结束时间" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="叉车工" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="仓管员" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="司机" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="车牌号" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="司机身份证号" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="司机电话" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="装卸量" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="搬运量" width="120">
						<el-table-column  prop="name" label="" width="auto" class-name="mohucha">
			  </el-table-column>
				</el-table-column>
				<el-table-column prop="zip" label="作业备注" width="120">
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
		name: 'ysqr',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ruleForm: {
					date1: '',
					date2: '',
						
				},
				shbz: "全部",
				shbzlist: [{
					label:"全部",
					value:1		
					},{
					label:"未审核",
					value:2		
					},{
					label:"已审核",
					value:3		}],
				peisong: '',
				cities: [],
				yuanqu: '',
				yqlist: [],
				hzf: '0',
				formInline: {},
				djbh: '', // 出库单号
				zdrq: '0', // 出库日期
				ksrq: '', // 开始日期
				jsrq: '', // 结束日期
				zdrqlist: [{
					value: '0',
					label: '出库日期'
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
				},{
					value: '5',
					label: '签收日期'
				},],
				options: [],
				backUpArr: [],
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

				
				
				tableData4: []
			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			var myDate = new Date();
			that.ksrq = myDate.format('yyyy-MM-dd');
			that.jsrq = myDate.format('yyyy-MM-dd');
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
	.ysqr .line,
	.ysqr .lines {
		text-align: center;
		line-height: 40px;
	}

	.ysqr .el-form-item__content {
		margin-top: 6px;
		margin-left: 10px;
	}
	.ysqr .el-icon-date{
		top: 5px;
	}
	.ysqr .buttondiv{
		margin-top:6px!important;
	}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.datatable {
		width: 100%;
	}
	
	.ysqr {
		width: 100%;
		height: 100%;
	}
	
	.ysqr .grid-content p {
		text-align: center;
	}
	.ysqr .el-date-editor.el-input {
		width: 100%;
	}
	.buttondiv {
		margin-top: 12px;
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
	
	
</style>