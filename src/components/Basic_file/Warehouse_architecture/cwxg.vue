<template>
	<div class='cwxg'>
		<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
			<el-tab-pane label="基本信息" name="first">
				<el-row>
					<el-col :span="12">
						<div class="grid-content">
							<p>编号</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content ">
							<p>名称</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content ">
							<p>分类</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content ">
							<p>最大体积</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content ">
							<p>最大承重</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content ">
							<p>面积</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content">
							<p>备注</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content ">
							<p>级别</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content ">
							<p>仓位类型</p>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content ">
							<el-radio class="radio" v-model="radio" label="1">存货区</el-radio>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content ">
							<el-radio class="radio" v-model="radio" label="2">拣货区</el-radio>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content ">
							<p>仓位属性</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">
							<el-select v-model="value" placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content ">
							<p>频次</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">
							<el-select v-model="value" placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content bg-purple">

							<p>货物类别</p>

						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content ">

							<el-select v-model="value" placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>

	</div>
	</el-col>
	</el-row>
	<el-row>
		<el-col :span="12">
			<div class="grid-content bg-purple">
				<p>仓位条码</p>
			</div>
		</el-col>
		<el-col :span="12">
			<div class="grid-content ">
				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
		</el-col>
	</el-row>
	<el-row>
		<el-col :span="12">
			<div class="grid-content ">
				<p>标准件数</p>

			</div>
		</el-col>
		<el-col :span="12">
			<div class="grid-content ">

				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
		</el-col>
	</el-row>
	<el-row>
		<el-col :span="12">
			<div class="grid-content "><span>存放商品类别</span></div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content ">
				<el-checkbox v-model="checked1">冻结</el-checkbox>
			</div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content ">
				<el-checkbox v-model="checked2">禁用</el-checkbox>
			</div>
		</el-col>
	</el-row>
	<el-row>
		<el-col :span="12">
			<div class="grid-content ">
				<el-checkbox v-model="checked3">连续新增</el-checkbox>
			</div>
		</el-col>
		<el-col :span="12">
			<div class="grid-content bg-purple-light"></div>
		</el-col>
	</el-row>

	</el-tab-pane>
	<el-tab-pane label="操作日志" name="second">
		
		
		<el-row>
			<el-col :span="6">
				<div class="grid-content ">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content ">
					至
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content ">
				<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
				</div>
			</el-col>
		</el-row>
		<div class='table' >
			
			<el-table ref="multipleTable" :data="khlist" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中" border tooltip-effect="dark" style="width: 100% " height="700" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
						<el-table-column type="selection" label="0" width="55">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Code" label="内容" width="auto">
						<el-table-column prop="Code" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Name" label="操作人" width="120">
						<el-table-column prop="Name" label="" width="160" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="time" label="操作时间" width="120">
						<el-table-column prop="time" label="" width="160" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					

				</el-table>
			
			
			
			
		</div>
	</el-tab-pane>

	</el-tabs>

	</div>

</template>

<script>
</script>

<style>

</style>