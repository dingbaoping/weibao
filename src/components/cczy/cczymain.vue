<template>
	<div class="cczymain">
		<!--当前位置-->
		<div class="indeof">
			<p>当前位置：-->>仓储作业</p>
		</div>
		<!--当前位置结束-->
		<!--初始模块-->
		<div class="defaultlist">
			<div class="indexbox">
				<el-row :gutter="0">
					<el-col :span="3" :offset="0">
						<div class="indexboxcol">
							<router-link to="ycd"> <img class='tubiao' src="../../../common/img/cczy/yichu.png" />
								<span>移仓位</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol jiantou">
							<img src="../../assets/img/jiantou.png" />
						</div>
					</el-col>
						<el-col :span="3" >
						<div class="indexboxcol">
							<router-link to="ycsp"> <img class='tubiao' src="../../../common/img/cczy/ycsp.png" />
								<span>移仓审批</span>
							</router-link>
						</div>
						</el-col>
						<el-col :span="3" :offset="15">
						<div class="indexboxcol pdlh">
							<router-link to="pdlh"> <img class='tubiao' src="../../../common/img/cczy/pdlh.png" />
								<span>盘点理货</span>
							</router-link>
						</div>
					</el-col>
				</el-row>

				<el-row :gutter="0">
					<el-col :span="3" :offset="2">
						<div class="indexboxcol fztxz">
							<img class='fzt' src="../../../common/img/cczy/lfszdfzt.png" alt="" />
							</div>
						</el-col>
					<el-col :span="3" :offset="10">
						<div class="indexboxcol tbcksp">
							
							<router-link to="tbcksp"> <img class='tubiao' src="../../../common/img/cczy/cksp.png" />
						       <span>调拨出库审批</span>
							</router-link>
						</div>
					</el-col>
				</el-row>
					<el-row :gutter="0">
					
					<el-col :span="3">
						<div class="indexboxcol">
							<router-link to="tbfq"> <img class='tubiao' src="../../../common/img/cczy/yichu.png" />
								<span>调拨发起</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol jiantou">
							<img src="../../assets/img/jiantou.png" />
						</div>
					</el-col>
					<el-col :span="3" :offset='0'>
						<div class="indexboxcol">
							<router-link to="tbsp"> <img class='tubiao' src="../../../common/img/cczy/ycsp.png" />
								<span>调拨审批</span>
							</router-link>
						</div>
					</el-col>
					
					<el-col :span="3" :offset='18'>
						<div class="indexboxcol pd">
							<router-link to="pd"> <img class='tubiao' src="../../../common/img/cczy/pd.png" />
								<span>盘点</span>
							</router-link>
						</div>
					</el-col>

					
				</el-row>
				<el-row :gutter="0">
					<el-col :span="3" :offset="10">
						<div class="indexboxcol">
							<router-link to="tbrk"> <img class='tubiao' src="../../../common/img/cczy/dbrk.png" />
								<span>调拨入库</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol jiantou">
							<img src="../../assets/img/jiantou.png" />

						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol">
							<router-link to="tbrksp"> <img class='tubiao' src="../../../common/img/cczy/ycsp.png" />
								<span>调拨入库审批</span>
							</router-link>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="3" :offset="3">
						<div class="indexboxcol">
							<router-link to="bssy"> <img class='tubiao' src="../../../common/img/cczy/bssy.png" />
								<span>报损升溢</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol jiantou">
							<img src="../../assets/img/jiantou.png" />

						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol">
							<router-link to="sycs"> <img class='tubiao' src="../../../common/img/cczy/sycs.png" />
								<span>损益初审</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol jiantou">
							<img src="../../assets/img/jiantou.png" />

						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol">
							<router-link to="cwsp"> <img class='tubiao' src="../../../common/img/cczy/ycsp.png" />
								<span>财务审批</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3" :offset='0'>
						<div class="indexboxcol">
							<router-link to="zzcx"> <img class='tubiao' src="../../../common/img/cczy/zzcx.png" />
								<span>组装拆卸</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol">
							<router-link to="kcsd"> <img class='tubiao' src="../../../common/img/cczy/kcsd.png" />
								<span>库存锁定</span>
							</router-link>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="3" :offset="2">
						<div class="indexboxcol">
							<img class='fzt' src="../../../common/img/cczy/lfszdfzt.png" alt="" />
							</div>
						</el-col>
						
							<el-col :span="3" :offset="12">
						<div class="indexboxcol">
							<img class='fzt' src="../../../common/img/cczy/lfszdfzt.png" alt="" />
							</div>
						</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="3" :offset="1">
						<div class="indexboxcol">
							<router-link to="bsd"> <img class='tubiao' src="../../../common/img/cczy/cksp.png" />
								<span>报损单</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3" :offset = "1">
						<div class="indexboxcol">
							<router-link to="syd"> <img class='tubiao' src="../../../common/img/cczy/dbrk.png" />
								<span>升溢单</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3" :offset="8">
						<div class="indexboxcol">
							<router-link to="zzd"> <img class='tubiao' src="../../../common/img/cczy/zzd.png" />
								<span>组装单</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3" :offset="1">
						<div class="indexboxcol">
							<router-link to="cxd"> <img class='tubiao' src="../../../common/img/cczy/cxd.png" />
								<span>拆卸单</span>
							</router-link>
						</div>
					</el-col>
					
				</el-row>
				
			</div>

			<!--功能区-->
			<div class="gongneng">
				<div class="gn-title">
					<p>功能区</p>
				</div>
				<div class="gn-box">
					<ul>
						<li>
							<router-link to="syddr"> <img class='tubiao' src="../../../common/img/cczy/cxddy.png" />
								<span>升溢单导入</span>
							</router-link>
						</li>
						
					</ul>
				</div>
			</div>
			<!--功能区结束-->

			<!--右侧折叠面板-->
			<div class="rightCollapse">
				<el-collapse    >
					<el-collapse-item title="基础资料" name="1">
						<ul>
							<li>
								<router-link to="sp">商品</router-link>
							</li>
							<li>
								<router-link to="bomd">bom单</router-link>
							</li>
						</ul>
					</el-collapse-item>
					<el-collapse-item title="序时薄" name="2">
						<ul>
							<li>
								<router-link to="ycdlb">移仓单列表</router-link>
							</li>
							<li>
								<router-link to="tbddlb">调拨订单列表</router-link>
							</li>
							<li>
								<router-link to="tbrkdlb">调拨入库单列表</router-link>
							</li>
							<li>
								<router-link to="tbckdlb">调拨出库单列表</router-link>
							</li>
							<li>
								<router-link to="sydssb">损益单序时簿</router-link>
							</li>
							<li>
								<router-link to="zzcxxsb">组装拆卸序时簿</router-link>
							</li>
							<!---->
							<li>
								<router-link to="pdaycdc">PDA 移仓调出作业单列表</router-link>
							</li>
							<li>
								<router-link to="pdaycdr">PDA 移仓调入作业单列表</router-link>
							</li>
							<li>
								<router-link to="pdapdzy">PDA 盘点作业单列表</router-link>
							</li>
							<!---->
							<li>
								<router-link to="pdapdlhjh">PDA 盘点理货计划单列表</router-link>
							</li>
							<li>
								<router-link to="pdapdlhzy">PDA 盘点理货作业单列表</router-link>
							</li>
							
						</ul>
					</el-collapse-item>
					<el-collapse-item title="报表" name="3">
						<ul>
							<li>
								<router-link to="spgz">商品跟踪</router-link></br>
								<router-link to="dbddzxqkb">调拨订单执行情况表</router-link>
							</li>
							

						</ul>
					</el-collapse-item>

				</el-collapse>

			</div>
			<!--右侧折叠面板结束-->
		</div>
		<!--初始模块结束-->
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		name: 'cczymain',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted: function() {
			//判断标签的js代码，每个需要新建标签页的vue文件都需要加这段			
			var that = this;
			//$(".当前vue文件的最外层div的calss名 a")
			$(".cczymain a").click(function() {
				var $this = $(this);
				var txt = $("span", $this).html()||$($this).html();

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

<style scoped>
	.ckglmain {
		position: relative;
	}
	
	.indeof {
		background: url(../../assets/img/gun.png) repeat-x;
		height: 40px;
		width: 100%;
		line-height: 40px;
		color: #5f5f5f;
		font-size: 16px;
		text-indent: 20px;
	}
	
	.defaultlist {
		width: 1000px;
		height: 100%;
		background: #fff;
	}
	
	.indexbox {
		width: 100%;
		height: 700px;
		margin-left: 30px;
	}
	
	.indexboxcol {	 
		float: left;
		text-align: center;
		margin-top: 20px;
		cursor: pointer;
		min-width:100px ;
	}
		.indexboxcol a{
			display: block;
			width: 100%;
			height: 100%;
		}
		.indexboxcol img{
			margin: 0 auto;
		}
	.indexboxcol:hover span {
		color: #10338c;
	}
	
	.indexboxcol span {
		display: block;
		width: 100%;
		height: 20px;
		color: #5f5f5f;
		font-size: 16px;
	}
	.jiantou{
		cursor:default;
	}
	.jiantou img {
		margin-top: 35px;
	}
	
	.gongneng {
		width: 100%;
		height: 160px;
	}
	
	.gn-title {
		height: 24px;
		background: #cdecfd;
		width: 100%;
	}
	
	.gn-title p {
		text-indent: 20px;
	}
	
	.gn-box {
		width: 100%;
		height: 160px;
	}
	
	.gn-box ul li {
		width: 150px;
		height: 120px;
		float: left;
		text-align: center;
		margin-top: 20px;
		cursor: pointer;
	}
	
	.gn-box ul li:hover span {
		color: #10338c;
	}
	
	.gn-box ul li span {
		display: block;
		width: 100%;
		height: 20px;
		color: #5f5f5f;
		font-size: 16px;
	}
	
	.rightCollapse {
		width: 250px;
		height: auto;
		position: absolute;
		right: 10px;
		top: 90px
	}
	img.tubiao{
		width: 66px;
		height: 66px;
		border-radius: 33px;
		
	}
	.pdlh{
		position: absolute;
		top:0;
		left:878px
	}
	.pd{
		position: absolute;
		top:0;
		left:878px
	}
	.tbcksp{
		position: absolute;
		top:-55px;
	}
	.fzt{
		width: 180px;
		height: 60px;
	}
	.fztxz{
		transform: rotate(270deg);
		position: absolute;
		top:20px; left:302px;
	}
</style>