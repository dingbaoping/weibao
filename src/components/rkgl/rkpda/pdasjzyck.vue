<template>
	<div class='pdasjzyck'>
		<!--出库管理综合报表-->
		<div class="but-box">
			<ul>
			
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<el-dropdown split-button>
								窗体样式
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>保存样式</el-dropdown-item>
									<el-dropdown-item>恢复样式</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tc" @click="closetag">
							<span>退出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
			</ul>
		</div>
		<div class="searchnav">
			<!--form第一行-->
				
				<div class="basic_info">
					<span>基本信息</span>
				</div>
				<el-row :gutter="10">
					<!--check-->
					<el-col :span="2">
						<div class="grid-content ">
						<p style="text-align:right">上架作业单号：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-input    v-model='djbh'  class='input_width' disabled></el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
						<p style="text-align:right">单据日期：</p> </div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-input    v-model='djrq'  class='input_width' disabled></el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p style="text-align:right">制单人：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
						<el-input v-model='zdr' class='input_width' disabled></el-input>
						</div>
					</el-col>
				</el-row>

				<el-row :gutter="10">
					<!--check-->
					<!-- 仓库放第二行 -->
					<el-col :span="2">
						<div class="grid-content ">
							<p style="text-align:right">仓库：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
						<el-input class='input_width' disabled></el-input>
						</div>
					</el-col>
				</el-row>
			<!--form第二行-->
		</div>

		<!--搜索框完-->
		<!--表格-->
		<div class='table'>
			<div class='button_row'>
				<!--一报表-->
				<el-tabs type="border-card" v-model="activeName" >
					<el-tab-pane label="汇总明细" name='hzmx'>
						<div id="table_ls">
							<div class="table_right">
								<el-table :data="hzmx" height="510" @header-click="headerc" class="table" border style="width: 100%" >
									<el-table-column type='index' prop="" label="" width="50">
									  <el-table-column type='index' prop="" label="" width="50">
									  </el-table-column>
									</el-table-column>
									<el-table-column prop="PlanID" label="收货计划单号" width="auto">
										<el-table-column prop="PlanID" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ProID" label="商品编号" width="auto">
										<el-table-column prop="ProID" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="BillID" label="上架作业单号" width="auto">
										<el-table-column prop="BillID" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ProName" label="商品名称" width="auto">
										<el-table-column prop="ProName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ProModel" label="规格型号" width="220">
										<el-table-column prop="ProModel" label="" width="220"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="Unit" label="基本单位" width="auto">
										<el-table-column prop="Unit" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="SupUnit" label="辅助单位" width="auto">
										<el-table-column prop="SupUnit" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ConvRate" label="换算率" width="auto">
										<el-table-column prop="ConvRate" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="Batch" label="批次" width="auto">
										<el-table-column prop="Batch" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ProductionDate" label="生产日期" width="120">
										<el-table-column prop="ProductionDate" label="" width="120" class-name="mohucha">
										</el-table-column>
									</el-table-column>

									<el-table-column prop="EffectiveDate" label="有效期至" width="150">
										<el-table-column prop="EffectiveDate" label="" width="150" class-name="mohucha">
										</el-table-column>
									</el-table-column>

									<el-table-column prop="Account1" label="托盘号" width="150">
										<el-table-column prop="Account1" label="" width="150" class-name="mohucha">
										</el-table-column>
									</el-table-column>

									<el-table-column prop="SupNum" label="上架基本数量" width="auto">
										<el-table-column prop="SupNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ShelvesNum" label="上架辅助数量" width="auto">
										<el-table-column prop="ShelvesNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
								</el-table>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="订单明细" name='ddmx'>
						<div id='table_hz'>
							<div class="table_right">
								<el-table :data="ddmx" @header-click="headerc1" height="510" class="table1" border style="width: 100%">

									<el-table-column type='index' prop="" label="" width="50">
										<el-table-column type="index" label="" width="auto">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="PlanID" label="收货计划单号" width="auto">
										<el-table-column prop="PlanID" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ProID" label="商品编号" width="auto">
										<el-table-column prop="ProID" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="BillID" label="上架作业单号" width="auto">
										<el-table-column prop="BillID" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="BillEntryID" label="序号" width="auto">
										<el-table-column prop="BillEntryID" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ProCode" label="商品编号" width="220">
										<el-table-column prop="ProCode" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
								
									<el-table-column prop="ProName" label="商品名称" width="220">
										<el-table-column prop="ProName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ProModel" label="规格型号" width="auto">
										<el-table-column prop="ProModel" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="Unit" label="基本单位" width="auto">
										<el-table-column prop="Unit" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="SupUnit" label="辅助单位" width="auto">
										<el-table-column prop="SupUnit" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ConvRate" label="换算率" width="auto">
										<el-table-column prop="ConvRate" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="Batch" label="批次" width="auto">
										<el-table-column prop="Batch" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ProductionDate" label="生产日期" width="120">
										<el-table-column prop="ProductionDate" label="" width="120" class-name="mohucha">
										</el-table-column>
									</el-table-column>

									<el-table-column prop="EffectiveDate" label="有效期至" width="150">
										<el-table-column prop="EffectiveDate" label="" width="150" class-name="mohucha">
										</el-table-column>
									</el-table-column>

									<el-table-column prop="Account1" label="托盘号" width="150">
										<el-table-column prop="Account1" label="" width="150" class-name="mohucha">
										</el-table-column>
									</el-table-column>

									<el-table-column prop="SupNum" label="上架基本数量" width="auto">
										<el-table-column prop="SupNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="ShelvesNum" label="上架辅助数量" width="auto">
										<el-table-column prop="ShelvesNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="StockName" label="仓位" width="auto">
										<el-table-column prop="StockName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

									<el-table-column prop="WarehouseName" label="大仓" width="auto">
										<el-table-column prop="WarehouseName" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>

								</el-table>
							</div>

						</div>
					</el-tab-pane>
				</el-tabs>
			</div>

		</div>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				zdr: '',//制单人
				djrq:'',//单据日期
				activeName: 'hzmx',//
				djbh: '',// 单据编号
				splbs:[], //存放单据
				hzmx:[],//汇总明细
				ddmx:[],//订单明细
			}
		},
		mounted: function() {
			var that = this;
			var getInfo = window.localStorage.getItem("sjzyPickID");
			that.djbh = getInfo;//存放单据
			// 获取数据
			that.lookList(getInfo);
		},
		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => { });

			},
			// 模糊查
			mohucha: function(val, index, $table) {
				var v = val;
				var $trArr = $("tr", $table);
				var trlen = $trArr.length;
				for(var i = 0; i < trlen; i++) {
					var $tr = $($trArr[i]);
					var iv = $($("td .cell", $tr)[index]).html().indexOf(v); //匹配是否含有
					if(iv <= -1) {
						$tr.hide();
					} 
				}
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
			//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加  class-name="mohucha"
			headerc1: function(column, event) {
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".table1")); //匹配行Th
				var $table = $($(".table1 table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

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
			// 修改价格
			editPrice () {
				this.xgjg_Click=true; //显示修改价格弹窗
			},
			// 查看
			lookList (planID){
				var jsons = {
					PlanID: planID,//	作业单号	string
				}
				// debugger;
				var that = this;
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.PDAModule.ReceivePlan.Look"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.splbs = data;
						that.djrq = that.splbs[0].Date; //日期
						that.zdr = that.splbs[0].Poster; //制单人
						that.hzmx = that.splbs[0].SumPro; //汇总明细
						that.ddmx = that.splbs[0].BillPro; //订单明细
						// 把拣货单号与商品单据放进
						that.hzmx.forEach((item,index)=>{
							that.$set(that.hzmx[index],"PlanID",that.djbh);
							that.$set(that.ddmx[index],"PlanID",that.djbh);
						});
						console.log(data);
					}
				})
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			},
		}

	}
</script>
<style scoped>
	.el-row {
		margin: 0 5px;
		margin-top: 5px;
		margin-bottom: 10px;
	}
	
	.rkddzhbb .grid-content {
		text-align: center;
	}
	
	.rkddzhbb .el-button--small {
		width: 80px;
	}
	
	.rkddzhbb .el-form {
		margin-bottom: 5px;
	}
	
	.rkddzhbb .el-table {
		overflow: inherit;
	}
	
	.rkddzhbb .grid-content p {
		min-width: 70px;
	}
	
	.table_left {
		width: 15%;
		float: left;
		max-height: 510px;
		overflow: scroll;
	}
	.basic_info  {
		/* width: 100%-20px; */
		background: #CDECFE;
		color:#000;
		
		padding-left:10px ;
		
	}
	.searchnav {
		border:1px  solid  rgba(53,179,253,0.7);
		border-radius: 2px;
		margin-bottom: 5px;
		margin-right: 12px;
	}
</style>