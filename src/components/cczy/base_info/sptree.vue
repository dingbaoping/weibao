<template>
	
	<div class='sptree'>
		<div class="but-box">
			<ul>
			
			<li><div class="boxtab"><div class="curbox dc" ><span>导出</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox tc"  @click='closetag'><span>退出</span></div></div><span class="gun"></span></li>
				
			</ul>
		</div>
		
			<el-row :gutter="10">
					<el-col :span="8">
						<div class="grid-content  ">
							<p  class='fr'>配送中心*：</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content  ">

							<el-select id="pszx" v-model="peisong"  placeholder="" class="fr blueborder" :disabled="pszx">
								<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					

				</el-row>
			<div >
				<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" >
							<el-table-column type="selection" width="55">
								<el-table-column type="selection" width="55">
							</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="代码" width='120'>
								<el-table-column prop="address" label="" width='120'>
							</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="类别" width='120'>
								<el-table-column prop="address" label="" width='120'>
							</el-table-column>
							</el-table-column>
							
							
						</el-table>
				
				
				
				
				
			</div>
		
		
		
		
	</div>
	
	
	
	
</template>

<script>
	
	
	export default {
		components: {
			
		},
		data() {
			return {
				tableData3:[],//修改价格弹窗
				peisong: '',//配送
				cities:'',//城市
				pszx:false,
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
		padding:5px 0;
		
		
		
	}
</style>