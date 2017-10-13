<template>
	<div class='ckrgjhxz'>
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
			<el-tab-pane label="选择单据" name="first">

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
							<span class=''>园区 * :</span>

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
					<el-col :span="2">
						<div class="grid-content fr">
							<el-button type="primary" size="small" @click.native='' class='cx' icon='search'>查询</el-button>
						</div>
					</el-col>

				</el-row>

				<div class='table'>
					<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>

						<el-table-column prop="name" label="单据状态" width="120">
						</el-table-column>
						<el-table-column prop="name" label="单据编号" width="120">
						</el-table-column>
						<el-table-column prop="name" label="出库类型" width="120">
						</el-table-column>
						<el-table-column prop="name" label="日期" width="120">
						</el-table-column>
						<el-table-column prop="name" label="客户编号" width="120">
						</el-table-column>
						<el-table-column prop="name" label="客户名称" width="120">
						</el-table-column>
						<el-table-column prop="name" label="单据金额" width="120">
						</el-table-column>
						<el-table-column prop="name" label="业务员" width="120">
						</el-table-column>
						<el-table-column prop="name" label="源单号" width="120">
						</el-table-column>
						<el-table-column prop="name" label="交货方式" width="120">
						</el-table-column>
						<el-table-column prop="name" label="交货日期" width="120">
						</el-table-column>
						<el-table-column prop="name" label="交货地点" width="120">
						</el-table-column>
						<el-table-column prop="name" label="备注" width="120">
						</el-table-column>
						<el-table-column prop="name" label="制单人" width="120">
						</el-table-column>
						<el-table-column prop="name" label="审核人" width="120">
						</el-table-column>
						<el-table-column prop="name" label="审核日期" width="120">
						</el-table-column>
						<el-table-column prop="name" label="合作方" width="120">
						</el-table-column>
						<el-table-column prop="name" label="线路" width="120">
						</el-table-column>
						<el-table-column prop="name" label="配送序号" width="120">
						</el-table-column>
						<el-table-column prop="name" label="客户区域" width="120">
						</el-table-column>
						<el-table-column prop="name" label="运输方式" width="120">
						</el-table-column>
						<el-table-column prop="name" label="跨合作方入出库进度" width="120">
						</el-table-column>
						<el-table-column prop="name" label="基本数量" width="120">
						</el-table-column>
						<el-table-column prop="address" label="辅助数量" width="120">
						</el-table-column>
						<el-table-column prop="address" label="重量" width="120">
						</el-table-column>
						<el-table-column prop="address" label="体积" width="120">
						</el-table-column>
					</el-table>
				</div>
			</el-tab-pane>

		</el-tabs>
		<div class='remark'>
			<el-col :span="2">
				<div class="grid-content fr">
					<p>备注</p>
				</div>
			</el-col>

			<el-col :span="12">
				<div class="grid-content fr">
					<el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2">
					</el-input>

				</div>
			</el-col>

			<el-col :span="2">
				<div class="grid-content fr">
					<el-button type="primary" size="small" @click.native='' class='cx' icon='search'>查询</el-button>
				</div>
			</el-col>
			<el-col :span="2">
				<div class="grid-content fr">
					<el-button type="primary" size="small" @click.native='' class='cx' icon='search'>查询</el-button>
				</div>
			</el-col>
		</div>
	</div>

</template>

<script>
</script>

<style>

</style>