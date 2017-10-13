<template>
	<div class='fjy'>
		<!--供应商反禁用弹窗-->
		
		<div class='table'>
			<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" >
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="编号" width="120">
				</el-table-column>
				<el-table-column prop="name" label="名称" width="120">
				</el-table-column>
				<el-table-column prop="address" label="地址" show-overflow-tooltip>
				</el-table-column>
				
			</el-table>

		</div>
		<div  id='footer'>
			<el-button >全选</el-button>
			<el-button>取消禁用</el-button>
			<el-button>关闭</el-button>
		</div>
	</div>

</template>

<script>
	
	
	export default {
		
		data() {
			return {
				bhmc:'',
				tableData3:[],
				
			}
		},
		method:{
				//此方法是退出的函数
		closetag: function() {
			$(".is-active .el-icon-close").click();
		}
			
			
			
		}
	
	}
</script>

<style scoped>
   .el-row{
   	line-height: 25px;
   	
   	
   	
   }
   .grid-content  .el-button{
 	padding: 6px 15px;
   }
</style>