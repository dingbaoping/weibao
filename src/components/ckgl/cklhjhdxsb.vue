<template>

	<div id='cklhjhdxsb'>
		<!--出库理货计划单序时簿新增按钮打开部分-->

		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<span>窗体样式</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tc" @click="closetag">
							<span>退出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
			</ul>
		</div>

		<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
			<el-tab-pane label="选择出库订单" name="first">
				<el-row :gutter="10">
					<!--check-->
					<el-col :span="3">
						<div class="grid-content ">
							<el-date-picker type="date" placeholder="选择日期" v-model="rq1" align="right" :picker-options="pickerOptions1"></el-date-picker>

						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<span class=''>至</span>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-date-picker type="date" placeholder="选择日期" v-model="rq2" align="right" :picker-options="pickerOptions2"></el-date-picker>

						</div>
					</el-col>

					<el-col :span="2">
						<div class="grid-content ">
							<span class=''>配送中心:</span>

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
						<div class="grid-content ">
							<span class=''>合作方*:</span>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<!-- 合作方列表 -->
							<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.Code">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
								</el-option>
							</el-select>
							<!-- 合作方列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>部门</p>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="bumen" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in bmlist" :key="item.Code" :label="item.Name" :value="item.Code">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox v-model="checked">跨合作方理货</el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content fr">
							<el-button type="primary" size="small" @click='' class='cx' icon='search'>查询</el-button>
						</div>
					</el-col>

				</el-row>
				<!--搜索部分结束-->

				<div class="table">
					<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>
					
						<el-table-column prop="name" label="单据状态" width="120">
						</el-table-column>
						<el-table-column prop="address" label="单据编号" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="出库类型" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="日期" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="客户编号" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="客户名称" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="单据金额" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="业务员" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="源单号" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="交货方式" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="交货日期" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="交货地点" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="备注" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="制单人" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="制单日期" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="审核人" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="审核日期" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="合作方" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="线路" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="采购状态" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="体积" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="重量" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="address" label="件数" show-overflow-tooltip>
						</el-table-column>
					</el-table>

				</div>

			</el-tab-pane>
			<el-tab-pane label="选择生成规则" name="second">
				
				<el-col :span="2">
						<div class="grid-content ">
							<span>选择生成规则</span>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="scgz" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in scgzlist" :key="item.Code" :label="item.Name" :value="item.Code">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
				
				
				
			</el-tab-pane>
			<div id="button">
			<el-button @click='onSyb' :disabled='first'>
				上一步

			</el-button>
			<el-button @click='onXyb' :disabled='second'>
				下一步

			</el-button>
			<el-button @click='searchInfo' >
				确认

			</el-button>
			<el-button @click='onXyb'>
				取消

			</el-button>
		</div>
		</el-tabs>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: false, //是否跨合作方理货
			};
		}
	};
</script>

<style>

</style>