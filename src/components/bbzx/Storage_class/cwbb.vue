<template>
<!-- 出库订单综合查询 -->
	<div class='ckddzhbb' id='ckddzhbb'>
		<!--出库管理综合报表-->

			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox dc" @click='djt_Click=true'><span>导出</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox ctys">
						<!-- <span>窗体样式</span> -->
						<el-dropdown split-button  @click="handleClick">
							窗体样式
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>保存样式</el-dropdown-item>
								<el-dropdown-item>恢复样式</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
						</div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->
		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" :model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10" class="row-1">
					<el-col :span="2">
						<div class="grid-content ">
							<p class='fl'>查询节点:</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content ">
							<el-select v-model="cxjd" placeholder="全部" class="fl shbz">
								<el-option v-for="item in cxjdlist" value-key='item.label'  :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
						<el-col :span="4">
						<div class="grid-content ">
							<el-button type="primary" @click.native='' class='cx'><i class="el-icon-search el-icon--left"></i>查询</el-button>
							<!--<el-button type="primary" @click.native='' class='close'><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>-->
						</div>
					</el-col>
				</el-row>

			</el-form>
			
		</div>
		<!--搜索框完-->

		<!--表格-->
		<div class='table'>
			<div class='button_row'>
				<!--一报表-->
				<el-tabs type="border-card">
					<el-tab-pane label="空仓位报表">
						<div id='table_dj'>
							<el-table :data="tableData3"  @cell-dblclick="dbrow" @header-click="headerc" height="250" border style="width: 100%">
								<el-table-column type='selection' prop="" label="选定框" width="50">
								<el-table-column type='selection' prop="" label="选定框" width="50">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="配送中心" width="110">
								<el-table-column prop="name" label="" width="110">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="园区" width="110">
								<el-table-column prop="name" label="" width="110">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="仓库" width="110">
								<el-table-column prop="name" label="" width="110">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="库区" width="110">
								<el-table-column prop="name" label="" width="110">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="仓位" width="110">
								<el-table-column prop="address" label="" width="110">
								</el-table-column>
								</el-table-column>
													
							</el-table>
						</div>
					</el-tab-pane>
					<el-tab-pane label="合作方库存分布情况表">
						<div id='table_dj'>
							<el-table :data="tableData3"  @cell-dblclick="dbrow" @header-click="headerc" height="250" border style="width: 100%">
								<el-table-column type='selection' prop="" label="选定框" width="50">
								<el-table-column type='selection' prop="" label="" width="50">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="配送中心" width="110">
								<el-table-column prop="name" label="" width="110" class-name="mohucha">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="园区" width="110">
								<el-table-column prop="name" label="" width="110" class-name="mohucha">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="仓库" width="110">
								<el-table-column prop="name" label="" width="110" class-name="mohucha">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="name" label="库区" width="110">
								<el-table-column prop="name" label="" width="110" class-name="mohucha">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="仓位" width="110">
								<el-table-column prop="address" label="" width="110" class-name="mohucha">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="合作方个数" width="150">
								<el-table-column prop="address" label="" width="150" class-name="mohucha">
								</el-table-column>
								</el-table-column>
								<el-table-column prop="address" label="合作方" width="110">
								<el-table-column prop="address" label="" width="110" class-name="mohucha">
								</el-table-column>
								</el-table-column>
												
							</el-table>
						</div>
					</el-tab-pane>
				</el-tabs>

			</div>

		</div>

	</div>

</template>

<script>
//	import nicescroll from "../../../common/js_nicescroll/jquery.nicescroll.js"
	export default {
		data() {
			return {
				data: [{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}],
				cxjd:'',
				cxjdlist:[{label:'<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>',
				value:1001,
 }]

			}
		},
		mounted: function() {
			//请把JS写这里面
			// 请求后台数据
			var that = this;
			//			axios.get("http://121.41.122.74:5676/Handler.ashx")
			//				.then(function(rsp) {
			//					that.tableData4 = rsp.data
			//				})

			//			$('#ckddzhbb').niceScroll(
			//			{cursorcolor:"#000",  
			//			cursoropacitymax:1,  
			//			touchbehavior:false,  
			//			cursorwidth:"5px",  
			//			cursorborder:"0",  
			//			cursorborderradius:"5px" });

		},
		methods: {
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
			},
			//表格双击（可编辑表格）
			dbrow: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标

				var jname = column.property;
				var $oldhtml = $($cell.html());
				var val = $oldhtml.html();
				$inp.val(val);
				$cell.html("").append($inp);
				$inp.focus();

				$inp.blur(function() {
					val = $inp.val();
					$oldhtml.html(val);
					$cell.html("").append($oldhtml);
					if(index != 0) {
						eval("that.tableData4[index]." + jname + "=val");
					}

					//						$inp.keydown(function() {
					//							val = $inp.val();
					//							that.fuzzyquery(jname, val);
					//						});

					//                  	console.log(that.tableData4[index]);
				});
			},
			//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加  class-name="mohucha"
			headerc: function(column, event) {
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".table")); //匹配行Th
				var $table = $($(".table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					$("tr",$table).show();//先全部展示出来
					$datath.each(function() {
						var $this = $(this);
						 
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							that.mohucha(thv, idx, $table);
						}

					});

				});
			},
		}

	}
</script>

<style scoped>
	@import url("../../../../common/css/ckddzhbb/ckddzhbb.css");
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
		background: url(../../../assets/img/gun.png) repeat-x;
	}
	
	div.boxtab {
		float: left;
		display: table;
		height: 40px;
		margin: 0 5px;
		line-height: 40px;
	}
	
	div.boxtab:hover {
		background: #efeeee;
	}
	
	div.but-box ul li {
		display: table;
		float: left;
	}
	
	.curbox {
		display: table;
		margin: 0 auto;
		padding-left: 30px;
		background: url(../../../../common/img/rk/daochu.jpg) no-repeat;
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
	
	.ctys {
		background: url(../../../../common/img/rk/chuangti.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.tc {
		background: url(../../../../common/img/rk/tuichu.png) no-repeat;
		background-position: 5px 10px;
	}
	
	.chaxunkuang {
		width: 100%;
		height: 60px;
		border: 1px solid #999;
		border-left: 0;
		border-right: 0;
	}
	.row-1{
		margin: 15px 0;
	}
	.grid-content button{
		margin-left: 20px!important;
		padding:6px 15px!important;
	}
	.left-1{
		margin-left: 0;
	}
	.searchnav{
		margin: 10px 15px;
	}
</style>