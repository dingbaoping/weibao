<template>
	<div class="rkglmain">
		<!--当前位置-->
		<div class="indeof">
			<p>当前位置：-->>入库管理</p>
		</div>
		<!--当前位置结束-->
		<!--初始模块-->
		<div class="defaultlist">
			<div class="indexbox">
				<el-row :gutter="0">
					<el-col :span="3" :offset="12">
						<div class="indexboxcol">
							<router-link to="rktc"> <img src="../../assets/img/rukutuihui.png" />
								<span>入库退回</span>
							</router-link>
						</div>
					</el-col>
				</el-row>

				<el-row :gutter="0">
					<el-col :span="3">
						<div class="indexboxcol">
							<router-link to="rkgl"> <img src="../../assets/img/rukudingdan.png" />
								<span>入库订单</span>
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
							<router-link to="ddsp"> <img src="../../assets/img/rukushenpi.png" />
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
							<router-link to="rksh"> <img src="../../assets/img/rukushenhe.png" />
								<span>入库审核</span>
							</router-link>
						</div>
					</el-col>

					<el-col :span="1">
						<div class="indexboxcol jiantou">
							<!-- <img src="../../assets/img/jiantou.png" /> -->

						</div>
					</el-col>
					<el-col :span="2">
						<div class="indexboxcol">
							<router-link to="test"> <img src="../../assets/img/rukushenpi.png" />
								<span>添加页面</span>
							</router-link>
						</div>
					</el-col>

				</el-row>
				<el-row :gutter="0">
					<el-col :span="3" :offset="12">
						<div class="indexboxcol">
							<router-link to="rkd"> <img src="../../assets/img/rukudingdan.png" />
								<span>入库单</span>
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
							<router-link to="rkdddr"> <img src="../../assets/img/dingdandaoru.png" />
								<span>订单导入</span>
							</router-link>
						</li>
						<li>
							<router-link to="rkthshjhd"> <img src="../../assets/img/shouhuojihua.png" />
								 <div>收货计划</div>
								<span style="display: none">入库收货计划单</span>
							</router-link>
						</li>
						<li>
							<router-link to="rkthjhzyd"> <img src="../../assets/img/lianhuojihua.png" />
								 <div>捡货计划</div>
								<span style="display: none">入库退回拣货作业单</span>
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
								<router-link to="gys"><div>供应商</div>
								<span style="display: none">供应商档案</span></router-link>
							</li>

						</ul>
					</el-collapse-item>
					<el-collapse-item title="序时薄" name="2">
						<ul>
							<li>
								<router-link to="rkddlb"><div>入库订单序时簿</div>
								<span style="display: none">入库订单列表</span></router-link>
							</li>
							<li>
								<router-link to="rkdlb"><span>入库单序时薄</span> </router-link>
							</li>
							<li>
								<router-link to="rkshjhd"><span>PDA 入库收货计划单列表</span></router-link>
							</li>
							<li>
								<router-link to="rkshzyd"><span>PDA 入库收货作业单列表</span></router-link>
							</li>
							<li>
								<router-link to="sjzyd"><span>PDA 入库上架作业单列表</span></router-link>
							</li>
							<li>
								<router-link to="rkthjhjhd"><span>PDA 拣货计划单序时薄</span></router-link>
							</li>
							<li>
									<router-link to="rkjhzyd"><div>PDA 拣货作业单序时薄</div>
								<span style="display: none">入库退回捡货作业单序时簿</span></router-link>
							</li>
							<li>
								<router-link to="jbshrkzyd"><span>PDA 简版收货入库作业单列表</span></router-link>
							</li>
						</ul>
					</el-collapse-item>
					<el-collapse-item title="报表" name="3">
						<ul>
							<li>
								<router-link to="rkddzhbb"><span>入库订单综合报表</span></router-link>
							</li>
							<li>
								
								<router-link to="rkdzhbb"><span>入库汇总报表</span></router-link>
							</li>
							<li>
								
								<router-link to="rkddzxqkb"><span>入库订单执行情况表</span></router-link>
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
		name: 'rkglmain',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted: function() {
			//判断标签的js代码，每个需要新建标签页的vue文件都需要加这段			
			var that = this;
			//$(".当前vue文件的最外层div的calss名 a")
			$(".rkglmain a").click(function() {
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
        $(".leftnav").hide();
				that.rightwidth(30,10);
			});
		}
	}
</script>

<style scoped>
	.rkglmain {
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
</style>
