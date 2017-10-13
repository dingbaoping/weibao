<template>
<!-- 出库订单综合查询 -->
	<div class='kccx' id='kccx'>
		<!--出库管理综合报表-->

			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox dc" @click='djt_Click=true'><span>导出</span></div></div><span class="gun"></span></li>
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
		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10" class="row-1">
					<!--check-->
					<el-col :span="2">
						<div class="grid-content ">
							<p class=''>合作方 ：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
						<!--下拉式合作方-->
							<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.Code">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
								</el-option>
							</el-select>	
						
						
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p class=''>配送中心 ：</p>
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
						<div class="grid-content djbj">
							<p class=''>园区 ：</p>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
						<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder=""  no-data-text="无数据"   class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span> 
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content ">
							<el-button type="primary" @click.native='' class='cx'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							<el-button type="primary" @click.native='' class='close'><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<p class='left-1'>查询类型 ：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-select v-model="chaxun" placeholder="" class='pszx'>
								<el-option v-for="item in cxlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					
					<el-col :span="2">
						<div class="grid-content yqbj">
							<p class=''>部门 ：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content yqbj">
							<el-select v-model="bumen" placeholder="" class='yq'>
								<el-option v-for="item in bumenlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content djbj">
							<p class=''>商品 ：</p>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content djbj">
							<el-input class="inline-input djbh" size="small" placeholder="" v-model="djbh">
							</el-input>
						</div>
					</el-col>
				</el-row>
			</el-form>
		</div>
		<!--搜索框完-->

		<!--表格-->
		<div class='table'>
			<div class='button_row'>
				<!--一报表-->
				<el-tabs type="border-card">
					
					<el-tab-pane label="流水台账">
						<div id="table_ls">
							<div class='table_left'>
								<el-tree :data="data" :props="defaultProps"  @node-click="handleNodeClick"></el-tree>

							</div>
							<div class="table_right">
								<el-table :data="tableData3" height="520" @cell-dblclick="dbrow" @header-click="headerc" border style="width: 100%">
									<el-table-column type='selection' prop="" label="选定框" width="50">
									<el-table-column type='selection' prop="" label="选定框" width="50">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="合作方" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="商品编号" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="商品名称" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="规格型号" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="助记码" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="基本单位" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="帐存" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="可拣数量" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助单位" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="账存辅助数量" width="150">
									<el-table-column prop="address" label="" width="150" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存辅助数量" width="150">
									<el-table-column prop="address" label="" width="150" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="批次" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="生产日期" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="有效期至" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="剩余天数" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓位" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="托盘码" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="锁定" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label='条形码' width="110">
									<el-table-column prop="address" label='' width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="箱条码" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存体积" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存重量" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="商品备注" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="部门" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="推盘堆叠量" width="150">
									<el-table-column prop="address" label="" width="150" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="托盘整数" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="库存描叙" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="库位描叙" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="成本价" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="帐存金额" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="账存描叙" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存描叙" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="商品属性" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="已过期" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="效期预警" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="入库有效期" width="150">
									<el-table-column prop="address" label="" width="150" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="生产厂商" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="质押单价" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存质押金额" width="150">
									<el-table-column prop="address" label="" width="150" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="帐存质押金额" width="150">
									<el-table-column prop="address" label="" width="150" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="园区" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓库" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="库区" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="入库日期" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="在库天数" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								</el-table>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="汇总台账">
						<div id='table_hz'>
							<div class='table_left'>
								<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
							</div>
							<div class="table_right">
								<el-table :data="tableData3" @cell-dblclick="dbrow" @header-click="headerc" height="520" border style="width: 100%">
									<el-table-column type='selection' prop="" label="选定框" width="50">
									<el-table-column type='selection' prop="" label="选定框" width="50">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="合作方" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="商品编号" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="name" label="商品名称" width="110">
									<el-table-column prop="name" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="规格型号" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="助记码" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="基本单位" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="帐存" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助单位" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助数量" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="辅助数量" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="条形码" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="箱条码" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存体积" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存重量" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="商品备注" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="部门" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="托盘" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="托盘整数" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓位描叙" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="账存金额" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存金额" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="账存描叙" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存描叙" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="成本价" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="生产厂商" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="质押单价" width="110">
									<el-table-column prop="address" label="" width="110" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="仓存质押金额" width="150">
									<el-table-column prop="address" label="" width="150" class-name="mohucha">
									</el-table-column>
									</el-table-column>
									<el-table-column prop="address" label="账存质押金额" width="150">
									<el-table-column prop="address" label="" width="150" class-name="mohucha">
									</el-table-column>
								</el-table-column>
								</el-table>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>
<script>
//	import nicescroll from "../../../common/js_nicescroll/jquery.nicescroll.js"
	export default {
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
				loading:true,
				cities:'',
				shrq:'',
				shrqlist:[ // 制单日期
					{ value: '1', label: '订单日期' },
					{ value: '2', label: '需配送时间'},
					{ value: '3', label: '实际配送时间'},
					{ value: '4', label: '审核日期'},
					{ value: '5', label: '制单日期'}
				],
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
				bumenlist:[{label:'全部',
				value:'10'}],
				chaxun:'',
				cxlist:[{label:'全部',value:11},{label:'已过期',value:12},{label:'效期预警',value:13},{label:'剩余天数',value:14},],

			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			that.getdclist();
			//			axios.get("http://121.41.122.74:5676/Handler.ashx")
			//				.then(function(rsp) {
			//					that.tableData4 = rsp.data
			//				})

			//			$('#ckddzhbb').niceScroll(
			//			{cursorcolor:"#000",  
			//			cursoropacitymax:1,  
			//			touchbehavior:false,  
			//			cursorwidth:"5px",  
			//			cursorborder:"0",  
			//			cursorborderradius:"5px" });
			

		},
		methods: {
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
					that.peisong = data[0].DCID;
					that.cities = data;
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
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
			},
			defaultProps:function(){
				
			},//标签页附带方法，留待编辑
			
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
						eval("that.tableData4[index]." + jname + "=val");
						eval("that.tableData5[index]." + jname + "=val");
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
		}

	}
</script>

<style scoped>
	/* @import url("../../../common/css/ckddzhbb/ckddzhbb.css"); */
	.datatable {
		width: 100%;
	}
	.kccx .grid-content p {
		text-align: center;
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
	
	.curbox {
		display: table;
		margin: 0 auto;
		padding-left: 30px;
		background: url(../../../../common/img/rk/daochu.jpg) no-repeat;
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
		background: url(../../../../common/img/rk/chuangti.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.tc {
		background: url(../../../../common/img/rk/tuichu.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.chaxunkuang {
		width: 100%;
		height: 60px;
		border: 1px solid #999;
		border-left: 0;
		border-right: 0;
	}
	.row-1{
		margin-bottom: 15px;
	}
	.grid-content button{
		margin-left: 20px!important;
		padding:6px 15px!important;
	}
	.left-1{
		margin-left: 0;
	}
	.searchnav{
		margin: 10px 15px;
	}
	.table_left{
  	float: left;
  	width: 15%;
  }
  .table_right{
  	float: right;
  	width: 84%;
  	overflow: hidden; 
  }
</style>