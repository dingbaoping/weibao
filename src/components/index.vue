<template>

	<div class="default">
		<!--当前位置-->
		<div class="indeof">
			<p>当前位置：-->>基本档案</p>
		</div>
		<!--当前位置结束-->
		<!--初始模块-->
		<div class="defaultlist">
			<div class="indexbox">
				<ul>
					<li>
						<router-link to="jbda_hzf">
							<img src="../assets/img/hezuofang.png" />
							<span>合作方</span>
						</router-link>
					</li>
					<li>
						<router-link to="basic_supplier"> <img src="../assets/img/gongyingshang.png" />
							<span>供应商</span>
						</router-link>
					</li>
					<li>
						<router-link to="main"> <img src="../assets/img/zhuangxiedui.png" />
							<span>装卸队</span>
						</router-link>
					</li>
					<li>
						<router-link to="main"> <img src="../assets/img/shangpin.png" />
							<span>商品</span>
						</router-link>
					</li>
					<li>
						<router-link to="basic_warehouse"> <img src="../assets/img/cangkujiagou.png" />
							<span>仓库架构</span>
						</router-link>
					</li>
					<li>
						<router-link to="main"> <img src="../assets/img/kemu.png" />
							<span>科目</span>
						</router-link>
					</li>
					<li>
						<router-link to="main"> <img src="../assets/img/kehu.png" />
							<span>客户</span>
						</router-link>
					</li>
					<li>
						<router-link to="Company_employees"> <img src="../assets/img/gongsizhiyuan.png" />
							<span>公司职员</span>
						</router-link>
					</li>
					<li>
						<router-link to="main"> <img src="../assets/img/yinhangzhanghao.png" />
							<span>银行账号</span>
						</router-link>
					</li>
				</ul>
			</div>

			<!--功能区-->
			<div class="gongneng">
				<div class="gn-title">
					<p>功能区</p>
				</div>
				<div class="gn-box">
					<ul>
						<li>
							<router-link to="ddsp"> <img src="../assets/img/shangpinshenpi.png" />
								<span>商品审批</span>
							</router-link>
						</li>
						<li>
							<router-link to="main"> <img src="../assets/img/shangpindaoru.png" />
								<span>商品导入</span>
							</router-link>
						</li>
						<li>
							<router-link to="main"> <img src="../assets/img/cangweidaoru.png" />
								<span>仓位导入</span>
							</router-link>
						</li>
						<li>
							<router-link to="main"> <img src="../assets/img/kehudaoru.png" />
								<span>客户导入</span>
							</router-link>
						</li>
						<li>
							<router-link to="main"> <img src="../assets/img/gongyingshangdaoru.png" />
								<span>供应商导入</span>
							</router-link>
						</li>
						<li>
							<router-link to="main"> <img src="../assets/img/jiageweihu.png" />
								<span>价格维护</span>
							</router-link>
						</li>
					</ul> 
				</div>
			</div>
			<!--功能区结束-->

			<!--右侧折叠面板-->
			<div class="rightCollapse">
				<el-collapse  >
					<el-collapse-item title="租仓管理" name="1">
						<ul>
							<li>
								<router-link to="main">新建租仓合同</router-link>
							</li>
							<li>
								<router-link to="main">租仓合同查询</router-link>
							</li>
						</ul>
					</el-collapse-item>
					<el-collapse-item title="运输类信息" name="2">
						<ul>
							<li>
								<router-link to="main">承运公司</router-link>
							</li>
							<li>
								<router-link to="main">车辆</router-link>
							</li>
							<li>
								<router-link to="main">司机</router-link>
							</li>
							<li>
								<router-link to="main">线路与区域</router-link>
							</li>
							<li>
								<router-link to="main">车辆费用管理</router-link>
							</li>
							<li>
								<router-link to="main">到期报表</router-link>
							</li>
							<li>
								<router-link to="main">统计报表</router-link>
							</li>
							<li>
								<router-link to="main">车辆油耗表</router-link>
							</li>
						</ul>
					</el-collapse-item>
					<el-collapse-item title="计费参数设置" name="3">
						<ul>
							<li>
								<router-link to="main">按周期计算仓储费计费方案</router-link>
							</li>
							<li>
								<router-link to="main">承运公司与装卸队计费方案</router-link>
							</li>
							<li>
								<router-link to="main">职员计费策略设置</router-link>
							</li>
							<li>
								<router-link to="main">配送员提成计费策略设置</router-link>
							</li>
						</ul>
					</el-collapse-item>
					<el-collapse-item title="财务参数设置" name="4">
						<ul>
							<li>
								<router-link to="main">费项设置</router-link>
							</li>
							<li>
								<router-link to="main">预收预付单据凭证模板设置</router-link>
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
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted: function() {
			//判断标签的js代码，每个需要新建标签页的vue文件都需要加这段			
			var that = this;
			//$(".当前vue文件的最外层div的calss名 a")
			$(".default a").click(function() {
				var $this = $(this);
				var txt = $("span", $this).html();

				var tabarr = that.$parent.editableTabs2;
				var indexof = -1;
				for(var i = 0; i < tabarr.length; i++) {
					console.log(tabarr[i].title+"---"+txt);
					if(tabarr[i].title == txt) {
						indexof = tabarr[i].name;
					}
				}
				if(indexof == -1) {
					let newTabName = ++that.$parent.tabIndex + '';
					var cont = $this.attr("href");
					    cont = cont.substring(2,cont.length);
					that.$parent.editableTabs2.push({
						title: txt,
						name: newTabName,
						content: cont
					});
					that.$parent.editableTabsValue2 = newTabName;
				}else{
					that.$parent.editableTabsValue2 = indexof;
				}
    $(".leftnav").hide();
					that.rightwidth(30,10);
			});
		}
	}
</script>

<style scoped>
	
	.default {
		position: relative;
	}
	
	.indeof {
		background: url(../assets/img/gun.png) repeat-x;
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
	}
	
	.indexbox ul li {
		width: 200px;
		height: 120px;
		float: left;
		text-align: center;
		margin-top: 20px;
		cursor: pointer;
	}
	
	.indexbox ul li:hover span {
		color: #10338c;
	}
	
	.indexbox ul li span {
		display: block;
		width: 100%;
		height: 20px;
		color: #5f5f5f;
		font-size: 16px;
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
		top: 50px
	}
</style>