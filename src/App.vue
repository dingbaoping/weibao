<template>
	<div id="app">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<!--头部-->
		<div class="head">
			<div class="title">
				仓储管理
			</div>
			<div class="navlist">
				<ul>
					<li>
						<a href="#" @click="login">系统皮肤</a>
					</li>
					<li>
						<a href="#">锁定屏幕</a>
					</li>
					<li>
						<a href="#">公司官网</a>
					</li>
					<li>
						<a href="#">在线升级</a>
					</li>
				</ul>

			</div>
		</div>
		<!--头部结束-->
		<!--主体DIV-->
		<div id="main">
			<!--左侧导航-->
			<div class="leftnav">
				<div class="title">主功能模块</div>
				<ul>
					<li class="click">
						<router-link to="/">
							<i><img src="./assets/img/jbda.png" /> </i>
							<a href="#">基本档案</a>
						</router-link>
					</li>
					<li>
						<router-link to="rkglmain">
							<i><img src="./assets/img/rkgl.png" /> </i>
							<a href="#">入库管理</a>
						</router-link>
					</li>
					<li>
						<router-link to="ckglmain">
							<i><img src="./assets/img/ckgl.png" /> </i>
							<a href="#">出库管理</a>
						</router-link>
					</li>
					<li>
						<router-link to="bbzxmain">
							<i><img src="./assets/img/bbzx.png" /> </i>
							<a href="#">报表中心</a>
						</router-link>
					</li>
					<li>
						<router-link to="cczymain">
							<i><img src="./assets/img/cczy.png" /> </i>
							<a href="#">仓储作业</a>
						</router-link>
					</li>
				</ul>
			</div>
			<!--左侧导航结束-->
			<!--右侧操作区域-->
			<div class="rightwork">
				<!--标签页-->
				<div class="mainpage">
					<el-tabs v-model="editableTabsValue2" type="card" @tab-click="clicktab" closable @tab-remove="removeTab">
						<el-tab-pane v-for="(item, index) in editableTabs2" :router="item.content" :key="item.name" :label="item.title" :name="item.name">
						</el-tab-pane>
					</el-tabs>
				</div>
				<!--标签页结束-->
				<!--中间内容部分-->
				<div class="rightmain">
					<router-view>
						<div slot="bqytc" @click="closetag" to="/rkglmain" class="curbox tc">
							<span>退出</span>
						</div>
					</router-view>
				</div>
				<!--中间内容部分结束-->
			</div>
			<!--右侧操作区域结束-->

			<!--底部-->
			<div class="bottom">
				<ul>
					<li>公司名称： 中国仓储事业部 </li>
					<li>软件版本： V10.0.001</li>
					<li>当前用户： WEB</li>
					<li>组织机构：总部</li>
					<li class='day'> 日期：2017年08月09日 </li>
					<li class='dlsj' >登录时间：9:02</li>
				</ul>
			</div>
			<!--底部结束-->
		</div>
		<!--主体DIV结束-->

	</div>
</template>

<script>
	import $ from 'jquery';
	// import ceshi1 from './components/test/1.vue';
	// import ceshi2 from './components/test/2.vue';
	export default {
		name: 'app',
		// components : {
		// 	ceshi1,ceshi2
		// },
		data() {
			return {
				editableTabsValue2: '1',
				editableTabs2: [{
					title: '首页',
					name: '1',
					content: 'index'
				}],
				tabIndex: 13,
				
			}
		},
		mounted: function() {
			var that = this;
			//页面加载完后会调用此方法
			mainheight();
			setTimeout(function() {
				that.rightwidth();
				$(".el-icon-close:first").remove();
			}, 300);
			$(window).resize(function() {
				mainheight();
				if($(".leftnav").is(':hidden')) {
					that.rightwidth(30, 10);
				} else {
					that.rightwidth(300);
				}

			});
			$(".leftnav ul li").click(function() {
				$(".leftnav .click ").removeClass("click");
				$(this).addClass("click");
				that.editableTabsValue2 = '1';
				var cont = $("a:first", $(this)).attr("href");
				cont = cont.substring(2, cont.length) || "index";
				that.editableTabs2[0].content = cont;
			});

			function mainheight() {
				var winheight = $(window).height();
				winheight = winheight - 100 - 46 - 10 - 7; //head的高
				winheight = winheight < 700 ? 700 : winheight;
				$("#main").css("height", winheight);

			};
			$('.dlsj').ready(function(){
				var myDate = new Date();
				var shi = myDate.getHours()
				var fen = myDate.getMinutes()
				var miao = myDate.getSeconds();   
				var myTime = shi + ':' + fen + ':' + miao;
				$('.dlsj').html('登录时间：'+myTime);
				
				
			})
			$('.day').ready(function(){
				
					var myDate=new Date();
				var myYear=myDate.getYear()-100;
				 var myMonth=myDate.getMonth()+1;
				 var myDay=myDate.getDate();
				$('.day').html('日期：'+myYear+'年'+myMonth+'月'+myDay+'日');
				
				
			})
		},
		methods: {

			removeTab(targetName) {
				let tabs = this.editableTabs2;
				let activeName = this.editableTabsValue2;
				var bo = false;
				if(activeName === targetName) {
					tabs.forEach((tab, index) => {
						if(tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if(nextTab) {
								console.log(nextTab);
								activeName = nextTab.name;
								this.$router.push({
									name: nextTab.content
								});
								if(nextTab.name == 1) {
									$(".leftnav").show();
									this.rightwidth(300);
								}
							}
						}
					});
				}

				console.log(activeName);
				this.editableTabsValue2 = activeName;
				this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
			},
			clicktab(targetName) {
				var that = this;
				var router = $(targetName.$el).attr("router");

				if(targetName.index == 0) {
					$(".leftnav").show();
					that.rightwidth(300);
				} else if(targetName.index > 0) {
					$(".leftnav").hide();
					that.rightwidth(30, 10);
				}
				this.$router.push({
					name: router
				});
			},
			deleteTab() {
				console.log('1')
				// $('.rkgl').hide();
				removeTab();
				// clicktab(this.targetName++)
				// $('.is-active').close();		
			},
			login() {
				var that = this;

				that.baseAjax("login", {
					UserLoginName: "web",
					UserLoginPwd: "123"
				}, function(data) {
					var obj = eval('(' + data + ')');

					var datas = JSON.parse(obj.Datas);
					window.userid = datas.UserID;
					window.userName = datas.UserName;
					console.log(window.userid);

				});

			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			},
//			年月日
			 formatterDate: function(date) {    
				var datetime = date.getFullYear()         + "-" // "年"
					         + ((date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)) + "-" // "月"
					         + (date.getDate() < 10 ? "0" + date.getDate() : date .getDate());  
					  
				return datetime; 
				 
			},
			
			
		}

	}
</script>

<style>
	/* @import url("/common/xgys/base.css"); */
	
	#app {
		width: 100%;
		max-height: 100%;
		min-width: 1024px;
	}
	
	#main {
		width: 100%;
		position: relative;
		padding-bottom: 50px;
	}
	
	.head {
		background: #36b4fd;
		height: 100px;
		width: 100%;
		overflow: hidden;
	}
	
	.head .title {
		width: 340px;
		height: 100px;
		line-height: 100px;
		font-size: 49px;
		color: #fff;
		text-align: center;
		float: left;
	}
	
	.navlist {
		float: left;
		width: 680px;
		height: 100px;
		line-height: 100px;
		font-size: 18px;
	}
	
	.navlist ul li {
		width: 100px;
		height: 100px;
		text-align: center;
		float: left;
	}
	
	.navlist ul li a {
		color: #fff;
	}
	
	.leftnav {
		width: 214px;
		margin-left: 30px;
		border: 3px solid #cdecfd;
		height: 100%;
		margin-top: 10px;
		overflow: hidden;
	}
	
	.leftnav .title {
		text-align: center;
		width: 100%;
		height: 49px;
		line-height: 49px;
		background: #cdecfd;
	}
	
	.leftnav ul li {
		height: 50px;
		width: 100%;
		line-height: 50px;
		text-align: center;
		position: relative;
	}
	
	.leftnav ul li>a {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.leftnav ul li a {
		color: #5f5f5f;
		font-size: 16px;
	}
	
	.leftnav ul li.click {
		background: #36b4fd;
	}
	
	.leftnav ul li.click a {
		color: #fff;
	}
	
	.leftnav ul li i {
		width: 25px;
		height: 25px;
		top: 7px;
		display: block;
		float: left;
		position: absolute;
		left: 45px;
	}
	
	.leftnav ul li i img {
		width: 100%;
	}
	
	.rightwork {
		border: 3px solid #cdecfd;
		height: 100%;
		position: absolute;
		left: 270px;
		top: 0;
		overflow: auto;
	}
	
	.mainpage {
		height: 49px;
		width: 100%;
		background: #cdecfd;
	}
	
	.el-tabs__item {
		padding: 0 30px;
		height: 49px;
		line-height: 49px;
	}
	
	.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable {
		padding-right: 30px;
		padding-left: 30px;
	}
	
	.el-tabs__header {
		margin: 0;
	}
	.ckjhjhd .el-input__icon {
		top: 2px;
	}
	.rightmain {
		height: auto;
		width: 100%;
		/*overflow: auto;*/
	}
	
	#app .ckddzhqkb .el-table__header-wrapper thead tr:nth-child(2) div {
		background: #CDECFE;
	}
	
	#app .ckddzhqkb .el-table__header-wrapper thead tr:nth-child(3) th {
		background: white;
	}
	
	#app .ckddzhqkb .el-table__header-wrapper thead tr:nth-child(3) div {
		background: white;
	}
	
	
	
	/*调拨订单执行情况表表格部分*/
	#app .dbddzxpkb .el-table__header-wrapper thead tr:nth-child(2) div {
		background: #CDECFE;
	}
	
	#app .dbddzxpkb .el-table__header-wrapper thead tr:nth-child(3) th {
		background: white;
	}
	
	#app .dbddzxpkb .el-table__header-wrapper thead tr:nth-child(3) div {
		background: white;
	}
	.bottom {
		height: 35px;
		background: #36b4fd;
		border-top: 1px solid #cdecfd;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	
	.bottom ul li {
		padding: 0 20px;
		line-height: 35px;
		color: #fff;
		float: left;
		font-size: 14px;
	}
	/* 修改的样式 */
	/* 出货订单 */
	/* 全局分割线颜色 */
	
	.el-table__footer-wrapper thead div,
	.el-table__header-wrapper thead div {
		background-color: #CDECFE;
	}
	/* 全局表格的表头颜色 */
	
	.el-table tr:nth-child(1) th {
		background-color: #CDECFE;
	}
	/* 全局表格中表头里内容居中 */
	
	.el-table th>.cell {
		line-height: 39px;
		white-space: nowrap;
		text-align: center;
	}
	
	.el-table .cell {
		padding: 0 10px;
	}
	/* 全局表格中td内容居中 */
	
	.el-table td>.cell {
		text-align: center;
	}
	/* 全局表格边框颜色 */
	
	.el-table {
		border: 1px solid #cdecfd;
	}
	/* 全局表格中的没个格子的边框颜色 */
	
	.el-table--border td,
	.el-table--border th {
		border: 1px solid #35B3FD;
	}
	/* 全局input输入框的边框样式 */
	
	.el-input__inner {
		border: 1px solid #35b3fd;
		height: 28px;
	}
	
	.ltz {
		background: #b6e0f9 !important;
	}
	/* 订单审批中的表格头颜色*/
	
	.ddsp .el-table th.is-leaf {
		border-bottom: 1px solid #35b3fd;
		color: #000;
	}

	.rksh .el-input__icon {
    top: 2px;
  }
	
	#lrqtfyx .el-dialog--tiny {
		width: 50%;
	}
#app .rkddzhbb .xgjg .el-dialog--tiny {
	width: 50%;
}
#app .sp .sp_add  .el-dialog--tiny{
	width: 50%;
}
	.rkgl .hzf .el-dialog--tiny,
	.ckdd .hzf .el-dialog--tiny,
	.ckddxg  div.el-dialog__wrapper.spzl .el-dialog--tiny,
	.rkd .spzl .el-dialog--tiny {
		width: 50%;
	}
	
	.rkgl .gys .el-dialog--tiny,
	.rkgl .gys .el-dialog--tiny {
		width: 43%;
	}
	
	.spzl[data-v-74b687e5] {
		width: 815px !important;
	}
	
	#app .ckdd .el-icon-close {
		top: -6px;
	}
	
	.spzl .left[data-v-1a61417b] {
		margin-top: 10px;
	}
	/* 导航栏动画效果 */
	
	.el-tabs__item {
		padding: 0 9px;
	}
	/* 商品审批button按钮 */
	
	.ddsp .el-breadcrumb .el-button {
		padding-right: 10px;
	}
	
	.grid-content p {
		min-width: 112px;
		color: #000;
	}
	
	.el-input__icon {
		height: 25px;
	}
	
	#app .dizhi .dztc {
		width: 50%;
		margin: 0 auto;
	}
	
	.gystc .el-breadcrumb .el-button {
		width: 80px !important;
	}
	
	.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover {
		padding: 0 30px;
	}
	
	.el-tabs__item {
		padding: 0 30px;
	}
	
	.el-tabs--card>.el-tabs__header .el-tabs__item .el-icon-close {
		width: 14px;
	}
	
	.el-table__fixed-header-wrapper thead div {
		background-color: #cdecfe;
	}
	
	.spzl .el-table__header-wrapper th>.cell {
		line-height: 25px;
	}
	
	.spzl .right[data-v-1a61417b] {
		width: 640px;
	}
	/* input里面的搜索镜 */
	
	.rkgl .el-input__icon {
		top: 2px;
	}
	
	.ckddzhqkb .el-input__icon {
		top: 2px;
	}
	
	.el-input__icon {
		top: 5px;
	}
	
	.rkd .el-input__icon {
		top: 2px;
	}
	
	.ckd .el-input__icon {
		top: 2px;
	}
	
	.ckdd .el-input__icon {
		top: 2px;
	}
	/* 订单审批中的表格头颜色*/
	
	.ddsp .el-table th.is-leaf {
		border-bottom: 1px solid #35b3fd;
		color: #000;
	}
	
	.khdangan .tjsearch i {
		top: 8px !important;
	}
	/* 提示弹窗中class为如下所有的弹窗的min-width */
	/* .el-dialog__body,
	.el-dialog--tiny {
		width: auto;
	} */
	
	*/ .spzl[data-v-74b687e5] {
		width: 815px !important;
	}
	
	.spzl .left[data-v-1a61417b] {
		margin-top: 10px;
	}
	/* 导航栏动画效果 */
	
	.el-tabs__item {
		padding: 0 9px;
	}
	
	.rkzhcx .el-table tr:nth-child(2) th,
	.rkzhcx .el-table tr:nth-child(2) th div,
	.rkddzhcx .el-table tr:nth-child(2) th,
	.rkddzhcx .el-table tr:nth-child(2) th div,
	.ckddzhbb .el-table tr:nth-child(2) th,
	.ckddzhbb .el-table tr:nth-child(2) th div,
	.fymxbb .el-table tr:nth-child(2) th,
	.fymxbb .el-table tr:nth-child(2) th div,
	.ckrgjhjhd .el-table tr:nth-child(2) th,
	.ckrgjhjhd .el-table tr:nth-child(2) th div,
	.ckjhjhd .el-table tr:nth-child(2) th,
	.ckjhjhd .el-table tr:nth-child(2) th div,
	.shjhd .el-table tr:nth-child(2) th,
	.shjhd .el-table tr:nth-child(2) th div,
	.ddsp .el-table tr:nth-child(2) th,
	.ddsp .el-table tr:nth-child(2) th div,
	.cksh .el-table tr:nth-child(2) th,
	.cksh .el-table tr:nth-child(2) th div,
	.ckyddlb .el-table tr:nth-child(2) th,
	.ckyddlb .el-table tr:nth-child(2) th div,
	.ckddlb .el-table tr:nth-child(2) th,
	.ckddlb .el-table tr:nth-child(2) th div,
	.ckddpsyc .el-table tr:nth-child(2) th,
	.ckddpsyc .el-table tr:nth-child(2) th div,
	.ckdlb .el-table tr:nth-child(2) th,
	.ckdlb .el-table tr:nth-child(2) th div,
	.thqr .el-table tr:nth-child(2) th,
	.thqr .el-table tr:nth-child(2) th div,
	.ysqr .el-table tr:nth-child(2) th,
	.ysqr .el-table tr:nth-child(2) th div,
	.ckdd .el-table tr:nth-child(2) th,
	.ckdd .el-table tr:nth-child(2) th div,
	.rksh .el-table tr:nth-child(2) th,
	.rksh .el-table tr:nth-child(2) th div {
		background: white;
	}
	/* 商品审批button按钮 */
	
	.ddsp .el-breadcrumb .el-button {
		padding-right: 10px;
	}
	
	.ckdd .grid-content p[data-v-a6174324] {
		margin-left: 0;
		min-width: 70px;
	}
	
	#app .grid-content p {
		color: #000;
		min-width: 60px;
	}
	
	#app .ckdd .grid-content p {
		text-align: center;
	}
	
	.ckecfjzyd .el-table__header,
	.bzzyd .el-table__header {
		width: 100%;
	}
	
	.bssy .el-table__header {
		width: 100%!important;
	}
	
	#app .ckdd .fuzhu .grid-content p {
		text-indent: 0;
	}
	
	#app .el-table tr td div.cell {
		white-space: nowrap;
	}
	
	#app .rkgl div.grid-content p {
		text-indent: 0px;
	}
	
	#app .rkd .grid-content p {
		text-align: center;
	}
	
	.el-input__icon {
		height: 25px;
	}
	
	.gystc .el-breadcrumb .el-button {
		width: 80px !important;
	}
	
	.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover {
		padding: 0 30px;
	}
	
	#app .el-table__header-wrapper thead tr:nth-child(2) div {
		background: white;
	}
	
	.el-tabs__item {
		padding: 0 30px;
	}
	
	.el-tabs--card>.el-tabs__header .el-tabs__item .el-icon-close {
		width: 14px;
	}
	
	.el-table__fixed-header-wrapper thead div {
		background-color: #cdecfe;
	}
	
	.spzl .el-table__header-wrapper th>.cell {
		line-height: 25px;
	}
	
	.spzl .right[data-v-1a61417b] {
		width: 640px;
	}
	/*设置的下拉样式*/
	
	.el-button-group .el-button {
		background-color: transparent;
		border: none;
		color: #999;
		padding-left: 3px;
	}
	.ckddck .el-input-number__decrease, .el-input-number__increase {
    line-height: 26px;
	}
	.ckddxg .el-input-number__decrease, .el-input-number__increase {
		line-height: 27px;
	}
	.input_width {
		width: 100%!important;
	}
	
  .ckgl .el-input__icon { 
		top: 2px;
	}
	.ckd .xdd .el-date-editor.el-input {
		width: 140px;
	}
	.spzl .el-dialog--tiny {
		width: 50%;
	}
	.ckd .el-dialog--tiny,
	.ckd .el-dialog__body {
		/* max-width: 1000px; */
		/* min-height: 300px; */
	}
	#app .ckd .xdd .el-dialog--tiny {
    width: 60%;
	}
	#app .ckd .xddyp .el-dialog--tiny {
    width: 60%;
	}
#app .ckd .el-dialog--tiny {
	width: 50%;
}
#app .ckd .bccg .el-dialog--tiny {
  width: 20%;
}

	#alert1 .el-dialog--tiny{
		width: 200px;
		height: 200px;
		
	}
	.el-table,
	.el-table--fit,
	.el-table--border,
	.el-table--enable-row-hover,
	.el-table--enable-row-transition {
		height: 300px;
	}
	
	.ckd .el-table {
		min-height: 163px;
		max-height: 360px;
	}
	
	.rkgl .el-table,
	.el-table--fit,
	.el-table--border,
	.el-table--enable-row-hover,
	.el-table--enable-row-transition {
		min-height: 85px;
	}
	
	.ckd .fzbg {
		min-height: 40px;
		max-height: 85px;
	}
	
	.ckd .el-table__body-wrapper {
		min-height: 100px;
	}
	/* ckdlb */
	
	.ckdlb .el-form span {
		float: right;
	}
	
	.ckdlb .el-form span.fl {
		float: left;
		margin-left: 20px;
	}
	
	#app .ckdlb .yq {
		margin-left: 12px;
	}
	/* 费项框 */
	
	.ckd .ys div[data-v-6f30edf6] span[data-v-6f30edf6],
	.ckd .yf div[data-v-6f30edf6] span[data-v-6f30edf6] {
		font-size: 18px;
	}
	
	.ckd .ys div[data-v-6f30edf6].grid-content,
	.ckd .yf div[data-v-6f30edf6].grid-content {
		margin-left: 15px;
	}
	
	.ckd .ys div[data-v-6f30edf6].grid-content .el-checkbox__label,
	.ckd .yf div[data-v-6f30edf6].grid-content .el-checkbox__label {
		font-size: 0;
	}
	/*入库的费项框*/
	
	#lrqtfyx .ys div span,
	#lrqtfyx .yf div span {
		font-size: 18px;
	}
	
	#lrqtfyx .ys div.grid-content,
	#lrqtfyx .yf div.grid-content {
		margin-left: 15px;
	}
	
	#lrqtfyx .ys div.grid-content .el-checkbox__label,
	#lrqtfyx .yf div.grid-content .el-checkbox__label {
		font-size: 0;
	}
	
	#lrqtfyx .title {
		font-size: 18px;
	}
	
	#app .el-table__body-wrapper,
	.el-table__footer-wrapper,
	.el-table__header-wrapper {
		width: 100%;
	}
	
	.feixiangkuang .el-table td,
	.el-table th.is-leaf {
		border-bottom: 1px solid #35b3fd;
	}
	
	.tongji {
		text-align: center;
	}
	
	#app .grid-content {
		margin: 5px 0;
	}
	
	#app .el-row {
		margin: 0;
	}
	
	.buttondiv {
		margin-top: 3px;
	}
	
	
	#app .el-table__body-wrapper {
		height: 100%;
	}
	
	#app .hzftc .el-dialog__body {
		width: 100% !important;
	}
	
	.hzftc .el-dialog__tiny {
		width: 50%;
	}
	
	.rkddzhbb .el-tabs__content {
		min-height: 510px;
	}
	/* 费项框的多选框label值 消失 */
	
	.feixiangkuang .grid-content .el-checkbox__label {
		font-size: 0px;
	}
	
	.address select {
		float: right;
		width: 200px;
		height: 28px;
		font-size: 14px;
		padding: 3px 12px 3px 12px;
		margin-bottom: 11px;
		margin-left: 85px;
		border: 1px solid #35b3fd;
	}
	
	.ckdd .el-input-number .el-input-number__decrease,
	.ckdd .el-input-number .el-input-number__increase {
		line-height: 26px;
	}
	
	/*出库拣货计划单部分*/
	.pailiekuang   .el-input-number__decrease,
	.pailiekuang  .el-input-number__increase {
		line-height: 26px;
		height: 26px;
		
	}
	.shbqfs   .el-input-number__decrease,
	.shbqfs  .el-input-number__increase {
		line-height: 26px;
		height: 26px;
		
	}
	.ckdd .el-input-number {
		width: 100%;
	}
	/*进销存汇总表样式*/
	
	.jxchzb .buttondiv button {
		padding: 6px 15px;
	}
	
	.jxchzb .chaxunkuang {
		height: 100px;
		margin-bottom: 6px;
	}
	
	.el-loading-mask {
		background: transparent;
	}
	
	.jxchzb .buttondiv {
		margin-top: 12px;
	}
	
	.jxchzb .el-icon-date {
		top: 6px;
	}
	
	.jxchzb .el-form-item {
		margin-top: 5px;
	}
	
	#app .el-table__fixed {
		z-index: 0;
	}
	
	.ckddzhbb .el-tree-node__expand-icon.is-leaf {
		border-color: transparent transparent transparent #36b4fd;
	}
	
	.jxchzb .grid-content p {
		text-align: center;
	}
	
	.rkgl .headerTC .el-input {
		width: 90%;
	}
	.rkd .fx-info .el-dialog--tiny {
		width: 900px;
	}
	.rkd .headerTC .el-input {
		width: 88%;
	}
	
	.jxchzb .spxx {
		padding-right: 5px;
	}
	
	.jxchzb .el-form-item__content,
	.jxchzb .el-form-item__content div {
		height: 40px;
	}
	
	.jxchzb .el-icon-caret-top {
		top: 17px!important;
	}
	
	.ckdd .kehu .el-dialog--tiny {
		width: 50%;
	}
	
	.ckdd .khtc .el-breadcrumb {
		margin-top: 5px;
	}
	
	.ckddpsyc .el-input__icon,
	.ckdlb .el-input__icon,
	.ckyddlb .el-input__icon,
	.ysqr .el-input__icon,
	.ddsp .el-input__icon {
		top: 2px;
	}
	
	#app .ddsp .el-icon-close {
		top: -4px;
	}
	
	#app .el-icon-close {
		top: 0;
	}
	
	#app .ysqr .el-icon-close {
		top: -4px;
	}
	
	.ddsp .rq .el-input__icon {
		top: 2px;
	}
	
	.cksh .el-input__icon {
		top: 2px;
	}
	
	.rkddlb .el-date-editor.el-input {
		width: 100%;
	}
	
	.rkddlb .el-input__icon {
		top: 2px;
	}
	
	.shjhd .el-input__icon {
		top: 2px;
	}
	
	.rkddzhbb .el-input__icon {
		top: 2px;
	}
	
	.blue_button {
		display: block;
		cursor: pointer;
	}
 #app .ckd .grid-content p {
	 text-align: center;
 }
	.cwzl .table__header {
		width: 100%;
	}
	/*日期对应icon位置修正*/
	
	.blue_button {
    height: 30px;
    width: 19px;
    background: #cdecfd;
    margin-left: -9px;
    margin-top: 2px;
    border: 1px solid #ccc;
    border-radius: 3px;
}
	
	#app .cwzl .el-dialog--tiny {
		width: 50%;
		min-height: 560px;
	}
	#app .ckdd .bcsb .el-dialog--tiny {
		width: 30%;
		height:200px;
	}
	#app .ckdd .bccg .el-dialog--tiny {
		width: 30%;
		height:200px;
	}
	#app .ckdd .el-dialog--tiny {
		width: 60%;
		height: 577px;
	}
	#app .ckdd .ckhzf .el-dialog--tiny {
		width: 50%;
		height: 477px;
	}
	/*商品内部按钮弹窗部分*/
	
	#app .spnbtc {
		width: 100%;
		height: 460px;
		position: relative;
		overflow: auto;
	}
	
	#app .spnbtc .left {
		width: 300px;
		height: 82%;
		float: left;
		position: absolute;
		top: 50px;
		border: 1px solid #36b4fe;
		overflow: scroll
	}
	
	#app .spzl .main {
		height: 88%;
		float: right;
		position: absolute;
		top: 50px;
		overflow: auto;
	}
	
	#app a:hover {
		color: #ff8d00;
	}
	#app .spnbtc .right {
		height: 88%;
		float: right;
		position: absolute;
		left: 310px;
		top: 50px;
		overflow: auto;
	}
	
	.el-tree-node.is-expanded>.el-tree-node__children {
		overflow: ;
	}
	
	.spnbtc .r1 {
		float: left;
	}
	
	.spnbtc .r1 li {
		float: left;
	}
	
	.spnbtc .r1>li {
		width: 500px;
	}
	
	.spnbtc .r1 p {
		float: left;
	}
	
	.spnbtc .r1 li .r2 {
		float: left;
	}
	 .el-table--enable-row-transition .el-table__body td.total {
    color: red;
  }
	.spnbtc .select_box {
		width: 100%;
	}
	
	.spnbtc .ssxx {
		background: #CDECFE;
		padding: 0 10px
	}
	
	.spnbtc .ssxx button {
		background: transparent;
		border: none;
	}
	
	.spnbtc .left .title {
		text-align: center;
	}
	
	.spnbtc .select_box {}
	
	.ckrgjhjhd .el-input__icon {
		top: 2px;
	}
	
	.ckddzhbb .el-input__icon {
		top: 2px;
	}
	.pdlh .el-date-editor--date{
		width: 100%;
	}
	.pdlh .el-row p{
		text-align: center;
	}
	/*商品内部按钮弹窗部分*/
	
	.spnbtc {
		width: 100%;
		height: 400px;
		position: relative;
		overflow: auto;
	}
	
	.spnbtc .left {
		width: 300px;
		height: 80%;
		float: left;
		position: absolute;
		top: 50px;
		border: 1px solid #36b4fe;
	}
	
	.spnbtc .right {
		height: 100%;
		float: right;
		position: absolute;
		left: 310px;
		top: 50px;
		overflow: auto;
	}
	
	.spnbtc .r1 {
		float: left;
	}
	
	.spnbtc .r1 li {
		float: left;
	}
	
	.spnbtc .r1>li {
		width: 500px;
	}
	
	.spnbtc .r1 p {
		float: left;
	}
	
	.spnbtc .r1 li .r2 {
		float: left;
	}
	
	.spnbtc .select_box {
		width: 100%;
	}
	
	.spnbtc .ssxx {
		background: #CDECFE;
		padding: 0 10px
	}
	
	.spnbtc .ssxx button {
		background: transparent;
		border: none;
	}
	
	.spnbtc .left .title {
		text-align: center;
	}
	/*订单审批  */
	
	.hzf .el-dialog--tiny {
		width: 50%;
	}
	/*bom单*/
	
	.ccgl-r p {
		text-align: center!important;
		line-height: 30px;
	}
	
	#app .rkgl .fx-info .el-dialog--tiny {
		width: 915px;
	}
  #app .rkgl .sfsc .el-dialog--tiny {
    width: 300px;
	}
	#app .boxtab a {
		color: #999;
	}
	
	.feixiangkuang .el-dialog--small {
    width: 70%;
}
.feixiangkuang .xuanze .el-input {
	margin-left: 10%;
	width: 80%; 
}
	.ccgl-r {
		width: 100%;
		margin: 8px 0 0 10px;
	}
	.v-modal {
	z-index: 2000 !important;
}
	.ccgl-r .btn {
		margin-top: 0!important;
		margin-left: 30px!important;
	}
	
	.el-table th {
		background: #fff;
	}
	.dbddzxpkb   .el-table th {
		background: #CDECFE;
	}
	.high_light {
		background: #36B4FD!important;
		color: #fff;
	}
	.xyd .el-dialog--tiny {
    width: 65%;
  }
	.xydtc .el-icon-close {
    top: 9px !important;
	}
	.xydtc .el-input__icon {
    top: 15px;
}
	/*pda查看弹窗*/
	.pdaycdczyd .chaxunkuang{
		height: 100px;
		background: #eee;
	}
	.pdaycdczyd .formcx{
		margin-top: 32px;
	}
	.pdaycdczyd .chaxunkuang input{
		background: #eee;
	}
	
	.pdajhjhdck .formcx{
		margin-top: 10px;
	}
	.pdajhjhdck .el-form-item{
		width: 600px;
	}
	.pdajhjhdck .el-form{
		padding: 10px 0;
	}
/* 是否**所选的单据弹框 */
.el-message-box .el-message-box__title {
	height: fit-content;
} 
.el-message-box .el-message-box__header {
	padding: .5rem 1rem;
} 
.el-message-box .el-message-box__header .el-message-box__headerbtn {
	top: 0;
}
.el-message-box .el-message-box__header .el-message-box__close::before{
	color: #eee;
}





.tianjia{
	background: url(../common/img/rk/beizhu.png) no-repeat scroll 5px 10px;
}
.bj{
background: url(../common/img/rk/plxg.jpg) no-repeat scroll 5px 10px;

}
</style>