<template>
	<div class='Company_employees'>
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox bc"><span>新增</span></div>
					</div><span class="gun"></span></li>
				<!--有对应弹窗和事件-->

				<li>
					<div class="boxtab">
						<div class="curbox xg"><span>修改</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox sc"><span>删除</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dr"><span>导入</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tj">
							<span>条件</span>
						</div>
						<el-input class='tjsearch' placeholder="" icon="search" v-model="input2" :on-icon-click="handleIconClick">
						</el-input>
					</div>
					<span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox jy"><span>禁用</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox fjy"><span>反禁用</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tc" @click="closetag"><span>退出</span></div>
					</div>
				</li>
			</ul>
		</div>
		<div>
		<div class="left">
				<div class='searchArea'>
					<el-row>
						<el-col :span="8">
							<div class="grid-content bg-purple-dark">
								<span>配送中心 :</span>
							</div>
						</el-col>
						<el-col :span="16">
							<div class="grid-content bg-purple-dark">
								<!-- 配送中心列表 -->
								<el-select v-model="peisong" @change="pschange" placeholder="" class="fr blueborder">
									<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									</el-option>
								</el-select>
								<!-- 配送中心列表结束 -->
							</div>
						</el-col>
					</el-row>
					

				</div>
				<!--树形图-->
				<div class='treeArea'>
					<div class='bluetitle'>
						<span>名称</span>
					</div>
					<div class='tree'>
						<el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
					</div>

				</div>
		</div>
		<div class="right">
			<div class='heji'>
					<span><p>[职员]</p>内容</span>
				</div>
				<el-table ref="multipleTable" :data="khlist" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中" border tooltip-effect="dark" style="width: 100% " height="700" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
						<el-table-column type="selection" label="0" width="55">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Code" label="助记码" width="auto">
						<el-table-column prop="Code" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Name" label="部门" width="160">
						<el-table-column prop="Name" label="" width="160" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Name" label="职员类别" width="160">
						<el-table-column prop="Name" label="" width="160" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="MCode" label="职务" width="100">
						<el-table-column prop="MCode" label="" width="100" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Contact" label="联系电话" width="auto">
						<el-table-column prop="Contact" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="TelePhone" label="移动电话" width="auto">
						<el-table-column prop="TelePhone" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Mobile" label="出生年月" width="auto">
						<el-table-column prop="Mobile" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Bank" label="文化程度" width="auto">
						<el-table-column prop="Bank" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="BankNum" label="身份证号" width="auto">
						<el-table-column prop="BankNum" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="QQ" label="开户银行" width="auto">
						<el-table-column prop="QQ" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Email" label="银行账号" width="auto">
						<el-table-column prop="Email" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Address" label="住址" width="160">
						<el-table-column prop="Address" label="" width="160" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="ZipCode" label="Email" width="auto">
						<el-table-column prop="ZipCode" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="meiyou-1" label="入职日期" width="auto">
						<el-table-column prop="meiyou-1" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Remarks" label="离职日期" width="auto">
						<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="meiyou-2" label="离职状态" width="auto">
						<el-table-column prop="meiyou-2" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="SalesMan" label="离职日期" width="auto">
						<el-table-column prop="SalesMan" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="CusArea" label="备注" width="auto">
						<el-table-column prop="CusArea" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="meiyou-3" label="公司" width="auto">
						<el-table-column prop="meiyou-3" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="meiyou-4" label="配送中心" width="auto">
						<el-table-column prop="meiyou-4" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					

				</el-table>
			
		</div>













		</div>

	</div>
</template>

<script>
</script>

<style  scoped>
 .left{  width: 15%;  float: left;}
 
 .right{width: 84%; float: right; overflow: auto;}
 .tj{ float: right;}
 .tjsearch {
		width: 70%;
		margin-left: 5px;
		float: right;
	}
 .heji p {
		display: inline-block;
	}
	.Company_employees{
		color:#000;
		
		
		
	}
	
</style>