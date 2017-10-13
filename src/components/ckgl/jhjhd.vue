<template>
	<div class='jhjhd'>
		<!--拣货计划单-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						 <div class="curbox xz">
						 	 <span>新增</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox xg">
						 	 <span>修改</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox chakan">
						 	 <span>查看</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox dc">
						 	 <span>导出</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
				
				<li>
					<div class="boxtab">
						 <div class="curbox fpry">
						 	 <span>分配人员</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox sh">
						 	 <span>审核</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
					<li>
					<div class="boxtab">
						 <div class="curbox fs">
						 	 <span>反审</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox scdj">
						 	 <span>生成单据</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox fscdj">
						 	 <span>反生成单据</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox jhzy">
						 	 <span>拣货作业</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
					<li>
					<div class="boxtab">
						 <div class="curbox dy">
						 	 <span>打印（指引）</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox yl">
						 	 <span>预览（指引）</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox dy">
						 	 <span>打印（复核）</span>
						 </div>
					</div>
					<div class="boxtab">
						 <div class="curbox yl">
						 	 <span>预览（复核）</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
				
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
						 <div class="curbox tc"@click="closetag">
						 	 <span>退出</span>
						 </div>
					</div>
					<span class="gun"></span>
				</li>
			</ul>
		</div>
			<!--form第一行<-->
				<div class='jhdform'>
			
			<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
					
					<!--check-->
					<el-col :span="3">
						<div class="grid-content ">
						<el-date-picker type="date" placeholder="选择日期" v-model="rq1" align="right"  :picker-options="pickerOptions1"></el-date-picker>
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<p class=''>至</p>
							
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							
								<el-date-picker type="date" placeholder="选择日期" v-model="rq2" align="right"  :picker-options="pickerOptions1"></el-date-picker>
							

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							
							<el-select v-model="shbz" placeholder="全部" class=" shbz">
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p class=''>合作方*:</p>
							
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							
							<el-select v-model="hzf" placeholder="全部" class='hzf '>
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content ">
							<el-button type="primary" size="small" @click.native='' class='cx'><i class='el-icon-search'></i>查询</el-button>
							<el-button type="primary" size="small" @click.native='' class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>

			</el-form>
			</div>
			<!--form第二行-->
			
            

		<!--搜索框完-->
		<!--表格-->
		<el-table :data="tableData3" height="650" border style="width: 100%"   @selection-change="handleSelectionChange">
			<el-table-column type='selection'  prop="" label="选定框" width="50">
			</el-table-column>
			<el-table-column prop="name" label="计划单号" width="auto">
			</el-table-column>
			<el-table-column prop="name" label="审核标志" width="auto">
			</el-table-column>
			<el-table-column prop="name" label="创建状态" width="auto">
			</el-table-column>
			<!--<el-table-column prop="address" label="单位编号" width="220">
			</el-table-column>-->
			<el-table-column prop="address" label="日期" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="拣货类型" width="auto">
			</el-table-column>
			<!--<el-table-column prop="address" label="单位名称" width="auto">
			</el-table-column>-->
			<el-table-column prop="address" label="制单人" width="auto">
			</el-table-column>
			
			
			</el-table-column>
			<el-table-column prop="address" label="创建日期" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="总数量" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="已拣数量" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="状态" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="单据状态" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="单据生成标志" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="园区" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="仓库" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="审核人" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="审核日期" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="合作方" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="拣货策略" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="客户编号" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="客户名称" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="拣货波次号" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="开始作业时间" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="结束作业时间" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="拣货作业时间" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="拣货规则" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="拣货仓位" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="配送中心" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="部门" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="分配人员" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="备注" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="复核打印次数" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="预配单号" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="单据生成时间" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="复核区" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="指引打印次数" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="客户区域" width="auto">
			</el-table-column>
			<!--<el-table-column prop="address" label="承运公司" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="创建方式" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="出库原单号" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="关闭理由" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="托运订单号" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="托运单号" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="关闭人" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="关闭时间" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="单据类型" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="结算金额" width="auto">
			</el-table-column>
				<el-table-column prop="address" label="收货人" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="收货人联系方式" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="客户区域" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="配送路线" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="商城支付" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="自定义1" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="自定义2" width="auto">
			</el-table-column>-->
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
				},
				peisong:'',
				yuanqu:'',
				djbh:'',
				zdrq:'',
				rq1:'',
				rq2:'',
				pickerOptions1: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				}, //时间选择器第一个
				pickerOptions2: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				}, //时间选择器第二个
				hzf:'',
				shbz:'',
				tabledata3:[],
				formInline:[],
				activeName:'',
			};
		},
		mounted:function() {
				var that = this;
			$('.close').click(function(){
				$('.ddsp').hide();
				
				
			});
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




<style scoped>
			.jhjhd .line {
		text-align: center;
		line-height: 50px;
	}
	
	.jhjhd .lines {
		text-align: right;
		line-height: 50px;
	}
	.jhjhd .grid-content p {
	  min-width: 60px;
		text-align: center;
	}
	.jhjhd .el-form-item__content {
		margin-top: 6px;
		margin-left: 10px;
	}
  .jhjhd .el-button {
		height: 30px;
		width: 70px;
	}	
	.jhjhd .el-table th>.cell {
		line-height: normal;
	}
	
	.jhjhd .el-table tr:nth-child(2) th {
		background: none;
	}
	.datatable {
		width: 100%;
	}
	
	.fymxbb {
		width: 100%;
		height: 100%;
	}
	
	.buttondiv {
		margin-top: 12px;
		margin-left: 20px;
		display: table;
		float: left;
	}
	
	.formcx {
		width: 600px;
		height: 100%;
		float: left;
	}
	
	.but-box {
		width: 100%;
		height: 40px;
		background: url(../../assets/img/gun.png) repeat-x;
		
	}
	
	div.boxtab {
		float: left;
		display: table;
		height: 40px;
		margin: 0 5px;		
		line-height: 40px;
		
	}
div.boxtab:hover{
	background: #efeeee;
}	
div.but-box ul li{
	display: table;
	float: left;
}
 .curbox{
 	display: table;
 	margin: 0 auto;
 	padding-left: 30px;
 	background: url(../../../common/img/rk/baocun.png) no-repeat;
 	background-position: 5px 10px;
 	cursor: pointer;
 }
  .gun {
  	height: 20px;
  	width: 1px;
  	background: #b7b7b7;
  	display: block;
  	float: right;
  	margin-top: 10px;
  }
  .bcsh{
  	background: url(../../../common/img/rk/baocunshenhe.png) no-repeat;
  	background-position: 5px 10px;
  }
  .syt{
  	background: url(../../../common/img/rk/shangyitiao.png) no-repeat;
  	background-position: 5px 10px;
  }
  .xyt{
  	background: url(../../../common/img/rk/xiayitiao.png) no-repeat;
  	background-position: 5px 10px;
  }
    .xddyp{
  	background: url(../../../common/img/rk/xuandingdanyp.png) no-repeat;
  	background-position: 5px 10px;
  }
    .xdd{
  	background: url(../../../common/img/rk/xuandingdan.png) no-repeat;
  	background-position: 5px 10px;
  }
  .el-row{
  	margin: 5px 0 5px 0;
  }
  .tongji {
  	text-align: center;
  	margin-top: 5px;
  }
  .xz{
  	background: url(../../../common/img/rk/plxg.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .sc{
  	background: url(../../../common/img/rk/sc.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .sc{
  	background: url(../../../common/img/rk/sc.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .chakan{
  	background: url(../../../common/img/rk/cx.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .dc{
  	background: url(../../../common/img/rk/daochu.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .sh{
  	background: url(../../../common/img/rk/shenhe.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .fs{
  	background: url(../../../common/img/rk/fanshen.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .scdj{
  	background: url(../../../common/img/rk/scdj.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .fscdj{
  	background: url(../../../common/img/rk/fscdj.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .shzy{
  	background: url(../../../common/img/rk/shzy.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .shysd{
  	background: url(../../../common/img/rk/shys.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .sjzy{
  	background: url(../../../common/img/rk/sjzy.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .sjzhiyin{
  	background: url(../../../common/img/rk/sjzyd.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
   .ctys{
  	background: url(../../../common/img/rk/ctys.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .tc{
  	background: url(../../../common/img/rk/tuichu.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
  }
  .el-button{
  	height: 40px;
  	width: 80px;
  }
.fhzy{
	background: url(../../../common/img/rk/shenhe.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
}
.fhzyrq{
	background: url(../../../common/img/rk/shenhe.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
}
	.dy{
	background: url(../../../common/img/rk/dayin.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
}
.yl{
	background: url(../../../common/img/rk/yulan.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;
}
.xg{background: url(../../../common/img/rk/xg.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;}
  .fpry{background: url(../../../common/img/rk/fenpei.jpg) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;}
  	
  	
 .jhzy{background: url(../../../common/img/rk/ckjh.png) no-repeat;
  	background-position: 5px 10px;
  	background-size:20px 20px;}  	
  	
.jhjhd{
	width: 100%;
	height: 100%;
	
}
</style>