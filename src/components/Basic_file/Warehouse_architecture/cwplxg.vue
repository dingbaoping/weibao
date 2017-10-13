<template>
	<div class='cwplxg'>
		<!--批量仓位修改-->
		
		<el-row>
		<el-col :span="8">
			<div class="grid-content "><el-checkbox v-model="checked3">仓位类型</el-checkbox></div>
		</el-col>
		<el-col :span="8">
			<div class="grid-content ">
				<el-checkbox v-model="checked1" :disabled='!checked3'>存货区</el-checkbox>
			</div>
		</el-col>
		<el-col :span="8">
			<div class="grid-content ">
				<el-checkbox v-model="checked2" :disabled='!checked3'>拣货区</el-checkbox>
			</div>
		</el-col>
	</el-row>
		<el-row>
		<el-col :span="8">
			<div class="grid-content "><el-checkbox v-model="checked3">仓位属性</el-checkbox></div>
		</el-col>
		<el-col :span="16">
			<div class="grid-content ">
				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
		</el-col>
		
	</el-row>
		<el-row>
		<el-col :span="8">
			<div class="grid-content "><el-checkbox v-model="checked3">频次</el-checkbox></div>
		</el-col>
		<el-col :span="16">
			<div class="grid-content ">
				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
		</el-col>
		
	</el-row>
		<el-row>
		<el-col :span="8">
			<div class="grid-content "><el-checkbox v-model="checked3">货物类别</el-checkbox></div>
		</el-col>
		<el-col :span="16">
			<div class="grid-content ">
				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
		</el-col>
		
	</el-row>
		
		
		
	</div>
	
	
	
	
	
	
</template>

<script>
</script>

<style>
</style>