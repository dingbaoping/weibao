<template>
	<div class='rkddzhbb' id='rkddzhbb'>
		<!--修改价格弹窗对应汇总明细-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox xg" @click="isEdit">
							<span>修改</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
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
						<slot name="xgjgClose"></slot>
					</div>
					<span class="gun"></span>
				</li>
			</ul>
		</div>
		<div class="searchnav">
			<!--form第一行-->
			
				
				<div class="basic_info jbxx">
					<span>基本信息</span>
				</div>
				<el-row :gutter="10">

					<el-col :span="3">
						<div class="grid-content ">

						<p>单据编号:</p>

						</div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">

							<el-input    v-model='planid'  class='input_width' disabled></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

						<p>单据日期:</p>

						</div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">

							<el-input v-model="djrq" id='jsrq'   disabled  class='input_width'>
							</el-input>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<p>制单人:</p>

						</div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">

						<el-input  v-model='zdr'  class='input_width' disabled></el-input>

						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content ">
							
						<p>仓库:</p>
						</div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
						<el-input  class='input_width' disabled></el-input>
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
				<el-tabs type="border-card" >
						<div id="table_ls">
							<div class="table_right">
								<el-table :data="ddmx" height="510"  @header-click="headerc" class="xgtable" border style="width: 100%" @cell-dblclick="dbHandle">
									<el-table-column type='index' prop="" label="选定框" width="50">
									  <el-table-column type='index' prop="" label="" width="50">
									  </el-table-column>
									</el-table-column>
									<el-table-column prop="PlanID" label="拣货单号" width="auto">
										<el-table-column prop="PlanID" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="BillID" label="商品编号" width="auto">
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
									<el-table-column prop="Num" label="应收基本数量" width="auto">
										<el-table-column prop="Num" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="SupUnit" label="辅助单位" width="auto">
										<el-table-column prop="SupUnit" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="SupNum" label="应收辅助数量" width="auto">
										<el-table-column prop="SupNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ConvRate" label="换算率" width="auto">
										<el-table-column prop="ConvRate" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="Price" label="单价" width="auto" >
										<el-table-column prop="Price" label="" width="auto"  class-name="mohucha bianji">
										<!-- 可编辑写法start -->
										<template scope="scope">
											<div v-show="!scope.row.PriceEdit">{{scope.row.Price}}</div>
											<el-input v-show="scope.row.PriceEdit" v-model="scope.row.Price" @blur="priceChange(scope)"></el-input>
										</template>
										<!-- 可编辑写法end -->
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ReceiveNum" label="收货基本数量" width="auto">
										<el-table-column prop="ReceiveNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ReceiveSupNum" label="收货辅助数量" width="auto">
										<el-table-column prop="ReceiveSupNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ShelvesNum" label="上架基本数量" width="auto">
										<el-table-column prop="ShelvesNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
									<el-table-column prop="ShelvesSupNum" label="上架辅助数量" width="auto">
										<el-table-column prop="ShelvesSupNum" label="" width="auto"  class-name="mohucha">
								    </el-table-column>
									</el-table-column>
								</el-table>
							</div>
						</div>
				</el-tabs>

			</div>

		</div>
		
	</div>

</template>

<script>
	export default {
		props: {
			djrq:'',//商品详情 
			planid:'',//订单
			ddmx:'',//订单明细
			zdr:'',//制单人
		},
		data() {
			return {
				ddrq:'',//单据日期
			}
		},
		mounted: function() {
			var that = this;
		},
		methods: {
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
				var $datath = $("th.mohucha", $(".xgtable")); //匹配行Th
				var $table = $($(".xgtable table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

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
						// console.log(thv);
						if(thv != undefined&&thv!="") {
							that.mohucha(thv, idx, $table);
						}
					});
				});
			},
			// 基本价格改变时
			priceChange(scope) {
				scope.row.PriceEdit = false;
			},
			//单元格双击，开启可编辑
			dbHandle (row, column, cell, event) {
				let key = column.property + 'Edit';
				this.$set(row, key, !row[key]);
				setTimeout(() => {
					try {
						$("input", cell).focus();
					} catch (err) {
					}
				}, 100);
			},
			// 价格修改函数
			isEdit () {
				var billPros = [] 
				this.ddmx.forEach((item)=>{
					let idx = {InterID:'',Price:''};
					idx.InterID = item.InterID;
					idx.Price = item.Price;
					billPros.push(idx);
				});
				// console.log(666,this.ddmx,idx,billPros);
				var jsons = {
					PlanID: this.planid,//	计划单号	string	
					UserID: userid,//	用户ID	int	
					UserName: userName,//	用户名	string	
					BillPro: billPros,//	汇总明细	List<SumPro>	多行
				}
				// debugger;
				var that = this;
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.PDAModule.ReceivePlan.EditPrice",
						// test:'test'
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						console.log(data);
						var obj = eval('(' + data + ')');
						if(obj.StateCode == 100) {
							that.openAlert("修改成功", '提示：', "success")
						} else {
							that.openAlert(obj.Message, '提示：')
						}
					}
				})
			}
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
	
	.searchnav{
		margin:5px 12px;	
		
		
		border:1px  solid  rgba(53,179,253,0.7);
	}
	
	.basic_info{
		background:#CDECFE ;
	}
	.el-row,
	.jbxx{
		padding: 0 15px;
	}
</style>