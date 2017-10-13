<template>
	<div class='spzl'>
		
		<!--头部搜索-->
		<!-- <el-breadcrumb separator="|">
			<el-breadcrumb-item >
				<el-button type="text" style="color:#62c3fc"><i class='ico1 '></i>单据设置</el-button type="text">
 
			</el-breadcrumb-item>
			<el-breadcrumb-item class='inputkuang'>
				
					<el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="" :trigger-on-focus="false" @select="handleSelect">
					</el-autocomplete>
				
				</el-breadcrumb-item>
				<el-breadcrumb-item>
				<el-button type="text"><i class='ico3'></i>搜索</el-button type="text">
				<el-button type="text"><i class='ico4'></i>清空</el-button type="text">
			</el-breadcrumb-item>
			<el-breadcrumb-item>
				<slot name="btnGroup"></slot>
			</el-breadcrumb-item>
		</el-breadcrumb> -->
			<!-- 这里是导航栏部分 -->
			<div class="but-box">
				<ul>
					<li style="float:left">
						<el-breadcrumb separator="|">
							<el-breadcrumb-item>
								<el-input v-model="input" placeholder="">
								</el-input>
							</el-breadcrumb-item>
						</el-breadcrumb>
					</li>
					<li><div class="boxtab"><div class="curbox djsz" @click='djt_Click=true'><span>单据设置</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox"> <i style="" class="el-icon-search"></i> <span>搜索</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox"> <i style="" class="el-icon-delete"></i> <span>清空</span></div></div></li>
				</ul>
			</div>
							<el-dialog title="" :visible.sync="djt_Click" size="tiny" :before-close="handleClose">
				<djttc></djttc>
				<span slot="footer" class="dialog-footer">
    			<el-button @click="djt_Click = false">取 消</el-button>
   				 <el-button type="primary" @click="djt_Click = false">确 定</el-button>
 			 </span>
			</el-dialog>
			<!--单据设置 end-->
			<!-- 这里是导航栏部分结束 -->

		<!--树形图-->
		
		<div class='left'>
			<div class='title'>商品档案</div>
			<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style='width:160'></el-tree>
		</div>

		<div class='right'>
			<div class='tabletitle'><p>商品资料</p></div>
			<el-table :data="tableData3" height="327" border style="width: 100%">
				<el-table-column prop="name" label="选定框" width="auto">
				</el-table-column>
				<el-table-column prop="name" label="编号" width="auto">
				</el-table-column>
				<el-table-column prop="name" label="名称" width="auto">
				</el-table-column>
				<el-table-column prop="name" label="条形码" width="auto">
				</el-table-column>
				<el-table-column prop="name" label="规格" width="auto">
				</el-table-column>
				<el-table-column prop="name" label="单位" width="auto">
				</el-table-column>
				<el-table-column prop="name" label="辅助单位" width="auto">
				</el-table-column>
				<el-table-column prop="name" label="换算率" width='auto' id='change'   sortable>
					
				</el-table-column>
			
			</el-table>

			<footer :data="data">
				<span class='number'>共<span>{{data.label}}</span>条 </span>
				<span>未执行数：
			<span>辅助数量:<span></span></span>
				<span>辅助数量:<span></span></span>
				</span>
			<span>可用数量：
				<span>辅助数量:<span></span></span>
				<span>基本数量:<span></span></span>
				</span>
			</footer>
		</div>

	</div>

</template>

<script src="http://libs.baidu.com/jquery/2.0.0/jquery.js"></script>> 
</script> 
<script>
//	import step2 from './step2.vue'
	import $ from 'jQuery'

//jq范围
	
	export default {
		data() {
			props: ['dialogVisible']
			return {
				djt_Click: false,
				data: [{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}, {
					label: '一级 2',
					children: [{
						label: '二级 2-1',
						children: [{
							label: '三级 2-1-1'
						}]
					}, {
						label: '二级 2-2',
						children: [{
							label: '三级 2-2-1'
						}]
					}]
				}, {
					label: '一级 3',
					children: [{
						label: '二级 3-1',
						children: [{
							label: '三级 3-1-1'
						}]
					}, {
						label: '二级 3-2',
						children: [{
							label: '三级 3-2-1'
						}]
					}]
				}],
				tableData3: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],

				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			}
		}
	};
</script>

<style scoped>
	@import url('../../common/css/spzl/shangpingziliao-vue.css');
	.left {
		float: left;
		width: 160px;
		height: 394px;
		border: 1px solid #cdecfd;
		margin-top:18px;
	}
	
	.right {
		float: left;
		width: 620px;
		height: 394px;
	}
</style>