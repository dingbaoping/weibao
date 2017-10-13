<template>
	<div class='ckqb'>
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
					<input type="text"  class='nav_search'/>
					</div>
					<div class="boxtab">
						 <div class="curbox">
						 	 <i style="" class="el-icon-search"></i><span>搜索</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
				
				<li>
					<div class="boxtab">
						 <div class="curbox shuaxin">
						 	 <span>刷新</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox close tc"@click="closetag">
						 	 <span>退出</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
					
			</ul>
		</div>
		<!--nav行end-->
		<!--标签页-->
		<div class='tab'>
			<button><i class='kcfb'></i>库存分布</button>
			<button><i class='qb'></i> 全部</button>
		</div>
		<!--库存全部-->
		<div class='ckzl_kcqb'>
			<div class="left_half">
				<div class='left_title'><span>仓库</span></div>
				<el-tree :data="cktree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
			</div>
			<div class="right_half">
				<div class='table_title'><span>仓库资料</span></div>
				
				<el-table
    ref="multipleTable"
    :data="table_kcqb"
    border
    tooltip-effect="blue"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
    	prop="number"
      label="编号"
      width="auto">
      <template scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="auto">
    </el-table-column>
    <el-table-column
      prop="volume"
      label="体积"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="weight"
      label="承重"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="bz"
      label="备注"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
	<div class='table_footer'>
		<div>共<span>30</span>条</div>
	</div>	
				
			</div>
			
			
			
		</div>
		<div class='ckzl_kcfb'>
			 <el-table
    ref="multipleTable"
    :data="table_kcfb"
    border
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="仓位名称"
      width="AUTO"
      prop='date'	>
      <template scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="仓位名称"
      width="auto">
    </el-table-column>
    <el-table-column
      prop="quantity1"
      label="帐存数量"
      width="auto">
    </el-table-column>
    <el-table-column
      prop="quantity2"
      label="仓存数量"
      width="auto">
    </el-table-column>
    <el-table-column
      prop="quantity3"
      label="账存辅助数量"
      width="auto">
    </el-table-column>
     <el-table-column
      prop="quantity5"
      label="仓存辅助数量"
      width="auto">
      
    </el-table-column>
         <el-table-column
      prop="quantity6"
      label="体积百分比"
      width="auto">
      
    </el-table-column>
     </el-table-column>
         <el-table-column
      prop="quantity7"
      label="重量百分比"
      width="auto">
      
    </el-table-column>
  </el-table>
		</div>
		
		
	</div>
	
	
	
</template>

<script>
	import $ from 'jquery'
	export default {
		name: 'ckth',
		data() {
			return {
				cktree: [{
          label: '仓库',
          children: [{
            label: 'sx11-01-巨坤一号仓',
            children: [{
              label: 'sx11-01-巨坤一号仓A区',
               label: 'sx11-01-巨坤一号仓B区',
            }]
          }]
        }],
				msg: 'Welcome to Your Vue.js App',
				table_kcfb:[],
				table_kcqb:[],
				
			}
		},
		mounted: function() {
			//判断标签的js代码，每个需要新建标签页的vue文件都需要加这段			
			var that = this;
		},
		methods: {
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
			}
		}
	}
</script>

<style>
</style>