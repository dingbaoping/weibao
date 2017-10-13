<template>
	<div class='pdafhzyd'>
		<!--PDA 出库复核作业单-->
		<div class="but-box">
			<ul>

				<li>
					<div class="boxtab">
						<div class="curbox ck">
							<span>查看</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sc">
							<span>删除</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dc">
							<span>导出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>

				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<!-- <span>窗体样式</span> -->
							<el-dropdown split-button @click="handleClick">
								窗体样式
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>保存样式</el-dropdown-item>
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
							<span>退出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
			</ul>
		</div>
		<!--form第一行-->
		<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
			<el-row :gutter="10">

				<el-col :span="3">
					<div class="grid-content ">
						<el-date-picker v-model="ksrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
						</el-date-picker>
					</div>
				</el-col>
				<el-col :span="1">
					<div class="grid-content ">
						<p class=''>至</p>
					</div>
				</el-col>
				<el-col :span="3">
					<el-date-picker v-model="jsrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
					</el-date-picker>
				</el-col>

				<el-col :span="4">
					<div class="grid-content ">
						<el-button type="primary" size="small" @click.native='' class='cx'>
							<i class='el-icon-search'></i>查询</el-button>
						<el-button type="primary" size="small" @click.native='' class='close'>
							<i class='el-icon-circle-cross'></i>关闭</el-button>
					</div>
				</el-col>
			</el-row>
		</el-form>

		<!--搜索框完-->
		<!--表格-->
		<el-table :data="tableData3" height="640" border style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type='selection' prop="" label="选定框" width="50">
			</el-table-column>
			<el-table-column prop="name" label="作业单号" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="业务单号" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="配送中心" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="园区" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="操作人" width="auto"> </el-table-column>
			<el-table-column prop="address" label="操作时间" width="auto"> </el-table-column>

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
				checked: true,
				formStacked: {
					name: '',
					region: '',
					type: ''
				},
				peisong: '',
				yuanqu: '',
				djbh: '',
				zdrq: '',
				rq1: '',
				rq2: '',
				hzf: '',
				shbz: '',
				tabledata3: [],
				formInline: [],
				activeName: '',
			};
		},
		mounted: function() {
			var that = this;
			$('.close').click(function() {
				$('.ddsp').hide();

			});
			$(".ddsp .cx").click(function() {

				var form1_data = [];
				form1_data.push(that.peisong);
				form1_data.push(that.yuanqu);
				form1_data.push(that.djbh);
				form1_data.push(that.hzf);
				form1_data.push(that.zdrq);
				form1_data.push(that.rq1);
				form1_data.push(that.rq2);
				//					form1_data.push(that.ysfs);
				//					form1_data.push(that.ydh);
				//					form1_data.push(that.dz);
				//					form1_data.push(that.bz);
				//					form1_data.push(that.ddrq);
				//					form1_data.push(that.dhsj);
				//					form1_data.push(that.tjzt);
				console.log(form1_data);

			});

		},

		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}
</script>

<style>
	.pdafhzyd .grid-content p {
		min-width: 60px;
		text-align: center;
	}
	
	.pdafhzyd .el-button {
		height: 32px;
		
	}
	
	.pdafhzyd .el-form {
		margin: 5px 0 5px 15px;
	}
	
	.pdafhzyd .grid-content button {
		height: 28px!important;
	}
</style>