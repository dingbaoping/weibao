<template>
	<div class='skzy'>
		<!--头部导航-->
		<!-- <el-breadcrumb separator="|">
			<el-breadcrumb-item :to="{ path: '|' }">
				<el-button type="text"><i class='ico3'></i>查看</el-button type="text">
				<el-button type="text"><i class='ico4'></i>删除</el-button type="text">
				
			</el-breadcrumb-item>
			
			<el-breadcrumb-item>
				<el-button type="text"><i class='ico15'></i>窗体模式</el-button type="text">
			</el-breadcrumb-item>
			<el-breadcrumb-item>
				<el-button type="text"><i class='ico16'></i>退出</el-button type="text">
			</el-breadcrumb-item>
		</el-breadcrumb> -->

		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li><div class="boxtab"><div class="curbox ck"><span>查看</span></div></div></li>
				<li><div class="boxtab"><div class="curbox sc"><span>删除</span></div></div></li>
				<li><div class="boxtab"><div class="curbox dc"><span>导出</span></div></div><span class="gun"></span></li>
				<li><div class="boxtab"><div class="curbox ctys">
					<!-- <span>窗体样式</span> -->
					<el-dropdown split-button @click="handleClick">
						窗体样式
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>保存样式</el-dropdown-item>
							<el-dropdown-item>恢复样式</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					</div></div><span class="gun"></span></li>
				<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div><span class="gun"></span></li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->
		<!-- 这里是input框的内容 -->
		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
			<el-col :span="3">
						<div class="grid-content ">
							<el-select v-model="value" placeholder="日期1" class="rq1">
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content ">
							<span class='fl'>至</span>
								<el-select v-model="value" placeholder="日期2" class='fl rq2'>
									<el-option v-for="item in options" :label="item.label" :value="item.value">
									</el-option>
								</el-select>

							</div>
						</el-col>
				<el-col :span="4">
				<div class="grid-content ">
					<el-button type="primary" size="small" @click.native='' class='cx'><i class='ico6'></i>查询</el-button>
					<el-button type="primary" size="small" @click.native='' class='close'><i class='ico7'></i>关闭</el-button>
				</div>
			</el-col>
			</el-row>			
		</el-form>

		<!--form第二行，没有第二行-->
		

		</div>
		<!-- 这里是input框的内容的结束 -->
	<!--搜索框完-->
	<!--表格-->
	<el-table :data="tableData3" height="250" border style="width: 100%">
		<el-table-column prop="date" label="选定框" min-width="50">
		</el-table-column>
	
		<el-table-column prop="name" label="作业单号" min-width="110">
		</el-table-column>
		
		<el-table-column prop="address" label="业务单号" min-width="110">
		</el-table-column>
		<el-table-column prop="address" label="配送中心" min-width="104">
		</el-table-column>
		<el-table-column prop="address" label="园区" min-width="104">
		</el-table-column>
		<el-table-column prop="address" label="操作人" min-width="104">
		</el-table-column>
		
		<el-table-column prop="address" label="操作时间" min-width="104">
		</el-table-column>
		
		
		
	
	</el-table>
	<div class='tongji'>
		<el-tag class='tag1'>共<span>20</span>条</el-tag>
		<el-tag class='tag2'><span>0</span></el-tag>
	</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				formStacked: {
					name: '',
					region: '',
					type: ''
				}
			};
		},

		methods: {
			onSubmit() {
				console.log('submit!');
			},
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
			}
		}
	}
</script>

<style rel="stylesheet/stylus" scoped>
	@import url("../../common/css/skzy/skzy.css");
</style>