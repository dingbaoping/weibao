<template>
	<div class="ckglmain">
		<!--当前位置-->
		<div class="indeof">
			<p>当前位置：-->>出库管理</p>
		</div>
		<!--当前位置结束-->
		<!--初始模块-->
		<div class="defaultlist">
			<div class="indexbox">
				<el-row :gutter="0">
					<el-col :span="3" :offset="12">
						<div class="indexboxcol">
							<router-link to="ckth"> <img src="../../assets/img/rukutuihui.png" />
								<span>出库退回</span>
							</router-link>
						</div>
					</el-col>
				</el-row>

				<el-row :gutter="0">
					<el-col :span="3">
						<div class="indexboxcol">
							<router-link to="ckdd"> <img src="../../assets/img/rukudingdan.png" />
						       <span>出库订单</span>
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
							<router-link to="ckddsp"> <img src="../../assets/img/rukushenpi.png" />
								<span>订单审批</span>
							</router-link>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol jiantou">
							<img src="../../assets/img/jiantou.png" />

						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol ">

						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol jiantou">
							<img src="../../assets/img/jiantou.png" />

						</div>
					</el-col>
					<el-col :span="3">
						<div class="indexboxcol">
							<router-link to="cksh"> <img src="../../assets/img/rukushenhe.png" />
								<span>出库审核</span>
							</router-link>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="0">
					<el-col :span="3" :offset="12">
						<div class="indexboxcol">
							<router-link to="ckd"> <img src="../../assets/img/rukudan.png" />
								<span>出库单</span>
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
							<router-link to="ddsp"> <img src="../../assets/img/dingdandaoru.png" />
								<span>订单导入</span>
							</router-link>
						</li>
						<li>
							<router-link to="ddsp"> 
								<img src="../../assets/img/yuandingdandaoru.png" />
								<span>源订单导入</span>
							</router-link>
						</li>
						
						<li>
							<router-link to="ckthshjhd"> 
								<img src="../../assets/img/shouhuojihua.png" />
								<div>收货计划</div>
								<span style="display: none">出库退回收货计划单</span>
							</router-link>
						</li>
						<li>
							<router-link to="ckjhjhd"> 
								<img src="../../assets/img/lianhuojihua.png" />
								<div>拣货计划</div>
								<span style="display: none">出库拣货计划单</span>
							</router-link>
						</li>
                        <li>
							<router-link to="cklhjh"> 
								<img src="../../assets/img/lihuojihua.png" />
								<div>理货计划</div>
								<span style="display: none">理货计划单序时簿</span>
							</router-link>
						</li>
						<li>
							<router-link to="ckrgjh"> 
								<img src="../../assets/img/rengongjianhuo.png" />
								<div>人工拣货</div>
								<span style="display: none">出库人工拣货计划单</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<!--功能区结束-->

			<!--右侧折叠面板-->
			<div class="rightCollapse">
				<el-collapse  v-model="activeNames" >
					<el-collapse-item title="基础资料" name="1">
						<ul>
							<li>
								<router-link to="kehu">客户</router-link>
							</li>

						</ul>
					</el-collapse-item>
					<el-collapse-item title="序时薄" name="2">
						<ul>
							<li>
								<router-link to="ckyddlb">出库源订单列表</router-link>
							</li>
							<li>
								<router-link to="ckddlb">出库订单列表</router-link>
							</li>
							<li>
								<router-link to="ckddpsyc">出库订单配送异常列表</router-link>
							</li>
							<li>
								<router-link to="ckdlb">出库单列表</router-link>
							</li>
							<li>
								<router-link to="thqr">提货确认</router-link>
							</li>
							<li>
								<router-link to="ysqr">运输方式确认</router-link>
							</li>
							<!---->
							<li>
								<router-link to="ckshjhd">PDA 出库收货计划单列表</router-link>
							</li>
							<li>
								<router-link to="ckshzyd">PDA 出库收货作业单列表</router-link>
							</li>
							<li>
								<router-link to="cksjzyd"><span>PDA 出库上架作业单列表</span></router-link>
							</li>
							<!---->
							<li>
								<router-link to="ckpdajhjhd">PDA 拣货计划单列表</router-link>
							</li>
							<li>
								<router-link to="ckjhzyd">PDA 拣货作业单列表</router-link>
							</li>
							<li>
								<router-link to="ecfjjhd">PDA 二次分拣计划单列表</router-link>
							</li>
							<li>
								<router-link to="ckecfjzyd">PDA 二次分拣作业单列表</router-link>
							</li>
							<li>
								<router-link to="bzzyd">播种作业单列表</router-link>
							</li>
							<li>
								<router-link to="ckfhjhd">复核计划单列表</router-link>
							</li>
							<li>
								<router-link to="ckfhzyd">复核作业单列表</router-link>
							</li>
							<li>
								<router-link to="pdafhzyd"><span>PDA 简版出库复核作业单列表</span></router-link>
							</li>
						</ul>
					</el-collapse-item>
					<el-collapse-item title="报表" name="3">
						<ul>
							<li>
								<router-link to="ckddzhbb">出库订单综合报表</router-link>
							</li>
							<li>
								<router-link to="ckdhzbb"><div>出库综合报表</div>
								<span style="display: none">出库单综合报表</span></router-link>
							</li>
							<li>
								<router-link to="ckddzxqkb">出库订单执行情况表</router-link>
							</li>
							<li>
								<router-link to="ckddzzfwqkb">出库订单增值服务情况表</router-link>
							</li>
							<li>
								<router-link to="ckdzzfwqkb">出库单增值服务情况表</router-link>
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
		name: 'ckglmain',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				activeNames: ['1','2','3']
			}
		},
		mounted: function() {
			//判断标签的js代码，每个需要新建标签页的vue文件都需要加这段			
			var that = this;
			//$(".当前vue文件的最外层div的calss名 a")
			$(".ckglmain a").click(function() {
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
		},
		methods:{
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
		width: 100%;
		height: 100%;
		background: #fff;
	}
	
	.indexbox {
		width: 700px;
		height: 440px;
		margin-left: 30px;
	}
	
	.indexboxcol {
	 
		float: left;
		text-align: center;
		margin-top: 20px;
		cursor: pointer;
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
		.gn-box ul li:hover div {
		color: #10338c;
	}
	.gn-box ul li span, .gn-box ul li div {
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
		top: 50px
	}
	.el-collapse{
		padding-bottom: 30px;
	}
</style>