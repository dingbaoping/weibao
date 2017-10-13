<template>
	<div class='fhzyd'>
		<!--复核作业单-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						 <div class="curbox xz">
						 	 <span>新增</span>
						 </div>
					</div>
					<div class="boxtab">
						<router-link to="pdafhzyck" class="watch">
							<div class="curbox ck">查看</div>
							<span style="display: none">复核作业单</span>
						</router-link>
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
			<!--form第一行-->
			<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="zdrq" placeholder="开始与结束时间" class='zdrq input_width'>
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->
					<el-col :span="3">
						<div class="grid-content ">
							<el-select v-model="rq1" placeholder="日期1" class="rq1 input_width">
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<span class=''>至</span>
							
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
						
							<el-select v-model="rq2" placeholder="日期2" class='input_width rq2'>
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span='2'>
						<div class="grid-content ">
						<el-checkbox v-model="checked">精确到时分秒</el-checkbox>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<span class=''>配送中心:</span>
							
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							
							<el-select v-model="shbz" placeholder="全部" class=" input_width shbz">
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<span class='fl'>合作方(*):</span>
							
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							
							<el-select v-model="hzf" placeholder="全部" class='hzf  input_width'>
								<el-option v-for="item in options" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content ">
							<el-button type="primary" size="small" @click.native='' class='cx'><i class='ico6'></i>查询</el-button>
							<el-button type="primary" size="small" @click.native='' class='close'><i class='ico7'></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>

			</el-form>
			<!--form第二行-->
			
           
        
		<!--搜索框完-->
		<!--表格-->
		<el-table :data="tableData3" height="250" border style="width: 100%"   @row-click="rowClick" @row-dblclick="dbRow">
			<el-table-column type='selection'  prop="" label="选定框" width="50">
			</el-table-column>
			<el-table-column prop="name" label="计划单号" width="auto">
			</el-table-column>
			<el-table-column prop="name" label="作业单号" width="110">
			</el-table-column>
			<el-table-column prop="address" label="单据数量" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="已复核数量" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="制单人" width="auto">
			</el-table-column>
			</el-table-column>
			<el-table-column prop="address" label="创建日期" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="拣货策略" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="拣货计划单号" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="开始作业时间" width="auto">
			</el-table-column>
			<el-table-column prop="address" label="结束作业时间" width="auto">
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
				checked:true,
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
			// 跳转查看页面
			watch() {
				var that = this;
				//跳转出库订单查看
				that.$router.replace({ path: '/pdafhzyck'}) 
				// 定义标签的名字
				let txt = "复核作业单"
				// 取得标签内容
				let tabarr = that.$parent.editableTabs2;
				// 定义一个是查看是否重复的信号量
				var indexof = -1;
				tabarr.forEach((item,index)=>{
					if(item.title == txt) { // 6.如果当前标签存在,则加到信号量
						indexof = item.name;
					}
				})
				// 如果不存在
				if(indexof == -1) {
					// 设置name的值,把数字++然后转字符串,不让它重复,
					let newTabName = ++that.$parent.tabIndex + '';
					// 取得content内容 #/ckddck
					let cnt = $('.watch').attr("href")
					// 把前面的两个符号去掉 ckddck
					cnt = cnt.substring(2,cnt.length);
					// 新增一个添加
					that.$parent.editableTabs2.push({
						title: txt,
						name: newTabName,
						content: cnt
					});
					that.$parent.editableTabsValue2 = newTabName;
				} else {
					that.$parent.editableTabsValue2 = indexof;
				}
			},
			//行单击事件
			rowClick(row, event, column){
				localStorage.setItem("fhzyBill", row.PickID);
				this.operateID = row.PickID;
			},
			// 行双击
			dbRow(row,event) {
				// 保存当前的订单号
				localStorage.setItem("fhzyBill", row.PickID);
				this.watch(); //跳查看页
			},
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
			.fhzyd .line {
		text-align: center;
		line-height: 50px;
	}
	
	.fhzyd .lines {
		text-align: right;
		line-height: 50px;
	}
	
	.fhzyd .el-form-item__content {
		margin-top: 6px;
		margin-left: 10px;
	}
	
	.fhzyd .el-table th>.cell {
		line-height: normal;
	}
	
	.fhzyd .el-table tr:nth-child(2) th {
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
.fhzyd{
	width: 100%;
	height: 100%;
	
}
</style>