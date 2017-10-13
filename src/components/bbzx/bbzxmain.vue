<template>
	
	<div class="bbzxmain">
		<div class="bbzxlist">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span style="line-height: 28px;">仓储类报表</span>
				</div>
				<div class="text item">
					<router-link to="rkddzhcx"> 
						<i class="el-icon-search"> </i> <span>入库订单综合查询</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="yspsfbb"> 
						<i class="el-icon-search"> </i> <span>应收配送费报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="rkzhcx"> 
						<i class="el-icon-search"></i> <span>入库综合查询</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="yfpsfbb"> 
						<i class="el-icon-search"></i><span> 应付配送费报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="k"> 
						<span>&nbsp;</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="cxfbb"> 
					<i class="el-icon-search"></i> 	<span class="color-6">拆箱费报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="ckddzhcx"> 
						<i class="el-icon-search"></i><span> 出库订单综合查询</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="jhfxbb"> 
						<i class="el-icon-search"></i><span> 捡货分析报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="ckzhcx"> 
						<i class="el-icon-search"></i><span> 出库综合查询</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="fymxbb"> 
						<i class="el-icon-search"></i> <span>费用明细报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="k"> 
						<span>&nbsp;</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="hqzyzhcx"> 
						<i class="el-icon-search"></i><span> 货权转移综合查询</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="spsfhzb"> 
						<i class="el-icon-search"></i><span> 商品收发汇总表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="sdkczhcx"> 
						<i class="el-icon-search"></i> <span>锁定库存综合查询</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="pszhbb"> 
						<i class="el-icon-search"></i> <span>配送综合报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="ckddkylbb"> 
					<i class="el-icon-search"></i> 	<span>出库订单可用量报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="ypzhbb"> 
						<i class="el-icon-search"></i><span> 预配综合报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="jcccfybb"> 
						<i class="el-icon-search"></i><span> 结存仓储费用报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="kccx"> 
						<i class="el-icon-search"></i><span> 库存查询</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="atsfcbb"> 
						<i class="el-icon-search"></i> <span>按天收发存报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="kcdqcccbb"> 
						<i class="el-icon-search"></i> <span>库存短缺超储报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="k"> 
						<span> &nbsp;</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="cwbb"> 
						<i class="el-icon-search"></i><span> 仓位报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="pdcybb"> 
						<i class="el-icon-search"></i> <span>盘点差异报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="sdkcbb"> 
						<i class="el-icon-search"></i> <span>锁定库存报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="atsfcfybb"> 
						<i class="el-icon-search"></i><span class="color-6"> 按天收发存费用报表</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="yczhcx"> 
						<i class="el-icon-search"></i> <span>移仓综合查询</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="k"> 
						<span>&nbsp;</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="syzhcx"> 
						<i class="el-icon-search"></i><span> 损溢综合查询</span>
					</router-link>
				</div>
				<div class="text item">
					<router-link to="k"> 
						<span>&nbsp;</span>
					</router-link>
				</div>
				<div class="text item ckryzyfybb-l" >
					<router-link to="ckryzyfybb"> 
						<i class="el-icon-search"></i><span> 仓库人员作业费用报表 </span>
					</router-link> 
				</div>	
				<div class="text item ckryzyfybb-l" >
					<router-link to="bfkccx"> 
						<i class="el-icon-search"></i><span> 备份库存查询 </span>
					</router-link> 
				</div>	
				<div class="text item ckryzyfybb-l" >
					<router-link to="ddkykcbb"> 
						<i class="el-icon-search"></i><span> 订单可用库存报表 </span>
					</router-link> 
				</div>	
				<div class="text item ckryzyfybb-l" >
					<router-link to="azqjsccfbb"> 
						<i class="el-icon-search"></i><span> 按周期计算仓存费报表 </span>
					</router-link> 
				</div>	
			</el-card>
		</div>
		<!--分析报表-->
		<div class="bbzxlist bbfxlist">
			<el-card class="box-card analytical-report">
				<div slot="header" class="clearfix">
					<span style="line-height: 28px;">分析报表</span>
				</div>
				<div class="text item fxbb">
					<router-link to="psmlbb"> 
						<i class="el-icon-search"> </i><span> 配送毛利报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="spkcbb"> 
						<i class="el-icon-search"> </i> <span>商品库存周转率报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="hzfyszk"> 
						<i class="el-icon-search"> </i> <span>合作方应收帐款</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="cygsyfzk"> 
						<i class="el-icon-search"> </i><span> 承运公司应付账款</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="ysfphxzhbb"> 
						<i class="el-icon-search"> </i><span> 应收发票核销综合报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="yffphxzhbb"> 
						<i class="el-icon-search"> </i><span> 应付发票核销综合报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="ckddzxqkb"> 
						<i class="el-icon-search"> </i><span> 出库订单作业跟踪情况表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="kcscrqfbqkb"> 
						<i class="el-icon-search"> </i><span> 库存生产日期分布情况表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="pjkcbb"> 
						<i class="el-icon-search"> </i> <span>平均库存报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="psckzxzz"> 
					<i class="el-icon-search"> </i> 	<span>配送出库执行追踪</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="xspctjbb"> 
						<i class="el-icon-search"> </i><span> 销售频次统计报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="ckthfxb"> 
						<i class="el-icon-search"> </i><span class="color-6"> 出库退货分析表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="ckgpjlb"> 
						<i class="el-icon-search"> </i><span class="color-6"> 出库改派记录表</span>
					</router-link>
				</div>
			</el-card>

		</div>
		<div>
			<div class="bbzxlist jxclbb">
				<el-card class="box-card analytical-report">
					<div slot="header" class="clearfix">
						<span style="line-height: 28px;">进销存类报表</span>
					</div>
					<div class="text item fxbb">
						<router-link to="yfzkhzb"> 
							<i class="el-icon-search"> </i><span> 应付账款汇总表</span>
						</router-link>
					</div>
					<div class="text item fxbb">
						<router-link to="yszkhzb"> 
							<i class="el-icon-search"> </i><span> 应收账款汇总表</span>
						</router-link>
					</div>
					<div class="text item fxbb">
						<router-link to="yfzkzhbb"> 
							<i class="el-icon-search"> </i><span> 应付款综合报表</span>
						</router-link>
					</div>
					<div class="text item fxbb">
						<router-link to="jxchzb"> 
							<i class="el-icon-search"> </i> <span>进销存汇总表</span>
						</router-link>
					</div>
				</el-card>
				
				<el-card class="box-card analytical-report gxhbb">
					<div slot="header" class="clearfix">
						<span style="line-height: 28px;">个性化报表</span>
					</div>
					<div class="text item fxbb">
						<router-link to=""> 
							<span> </i> </span>
						</router-link>
					</div>										
				</el-card>
			</div>
		</div>
		<!--PDA类报表-->
		<div class="bbzxlist bbfxlist">
			<el-card class="box-card analytical-report">
				<div slot="header" class="clearfix">
					<span style="line-height: 28px;">PDA类报表</span>
				</div>
				<div class="text item fxbb">
					<router-link to="shzybb"> 
						<i class="el-icon-search"> </i><span> 收货作业报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="sjzybb"> 
						<i class="el-icon-search"> </i><span> 上架作业报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="jhzybb"> 
						<i class="el-icon-search"> </i><span> 捡货作业报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="fjzybb"> 
						<i class="el-icon-search"> </i> <span>分拣作业报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="ycyczybb"> 
						<i class="el-icon-search"> </i> <span>移仓移出作业报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="ycyrzybb"> 
						<i class="el-icon-search"> </i> <span>移仓移入作业报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="pdzybb"> 
						<i class="el-icon-search"> </i> <span>盘点作业报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="bzzybb"> 
						<i class="el-icon-search"> </i><span> 播种作业报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="fhzybb"> 
						<i class="el-icon-search"> </i> <span>复合作业报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="jbckfhzybb"> 
						<i class="el-icon-search"> </i><span> 简版出库复合作业报表</span>
					</router-link>
				</div>
				<div class="text item fxbb">
					<router-link to="pzspfhzybb"> 
						<i class="el-icon-search"> </i> <span>配载商品复合作业报表</span>
					</router-link>
				</div>
				
			</el-card>

		</div>
					
					
		
	</div>
	
</template>

<script>
	export default {
		name: 'bbzxmain',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
			 
			}
		},
		mounted: function() {
			//判断标签的js代码，每个需要新建标签页的vue文件都需要加这段			
			var that = this;
			//$(".当前vue文件的最外层div的calss名 a")
			$(".bbzxmain a").click(function() {
				var $this = $(this);
				var txt = $("span", $this).html();

				var tabarr = that.$parent.editableTabs2;
				var indexof = -1;
				for(var i = 0; i < tabarr.length; i++) {
					console.log(tabarr[i].title + "---" + txt);
					if(tabarr[i].title == txt) {
						indexof = tabarr[i].name;
					}
				}
				if(indexof == -1) {
					let newTabName = ++that.$parent.tabIndex + '';
					var cont = $this.attr("href");
					cont = cont.substring(2, cont.length);
					that.$parent.editableTabs2.push({
						title: txt,
						name: newTabName,
						content: cont
					});
					that.$parent.editableTabsValue2 = newTabName;
				} else {
					that.$parent.editableTabsValue2 = indexof;
				}
                $(".leftnav").hide();
					that.rightwidth(30,10);
			});
		}
	}
</script>
<style>
	.bbzxmain .rightwork{
		height: 800px;
	}
	.bbzxmain{
		min-width: 1000px;
	}
	.bbzxmain .el-card__header {
		padding: 5px 10px;
	}
	
	.bbzxmain .el-card__body {
		padding: 0 10px;
	}
	.bbzxmain a {
		color: #666;
		color:blue;
	}
	/*修改的样式*/
	.bbzxmain .el-card__header{
		width: 350px!important;
	}
	.bbzxmain .el-card__body{
		width: 350px!important;
	}
	.bbzxmain .bbzxlist{
		width: 350px;
	}
	.bbzxmain .el-card{

		width: 350px!important;
	}
	.bbzxmain .el-card div{
		width: 150px;
		margin:3px 0;
		float: left;
	}
	.bbzxmain .el-icon-search{
		line-height: 28px;
	}
	.bbzxmain .ckryzyfybb-l{
		width: 100%!important;
	}
	/*报表分析*/
	.bbzxmain .analytical-report{
		width: 208px!important;
	}
	.bbzxmain .bbzxlist,.bbfxlist{
		width: 208px;
	}
	.bbzxmain .bbfxlist .el-card__header{
		width: 208px!important;
	}
	.bbzxmain .bbfxlist .el-card__body{
		width: 208px!important;
	}
	.bbzxmain .bbfxlist .el-card div{
		width: 180px;
	}
	.bbzxmain .gxhbb{
		height: 400px;
		margin-top: 10px;
	}
	/*进销存报表*/
	.bbzxmain .jxclbb{
		width: 146px!important;
	}
	.bbzxmain .jxclbb .el-card__header{
		width: 146px!important;
	}
	.bbzxmain .jxclbb .el-card__body{
		width: 146px!important;
	}
	.bbzxmain .jxclbb .bbzxlist{
		width: 146px;
	}
	.bbzxmain .jxclbb .el-card{
		width:146px!important;
	}
	.bbzxmain .color-6{
		color: #666;
	}
	.bbzxmain i{
		float: left;
	}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bbzxlist {
		display: table;
		margin: 20px 0 0 20px;
		float: left;
		color:#333;
	}
	.text {
		font-size: 14px;
	}
	.item {
		line-height: 28px;
		display: table;
		padding: 0 10px;
		float: left;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
	
	.box-card {
		width: 280px;
	}
</style>