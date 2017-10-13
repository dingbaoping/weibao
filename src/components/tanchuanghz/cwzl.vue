<template>
	<div class='cwzl'>
		<!-- 入库退回商品信息 -->
		<!--商品内部按钮弹窗-->
		<div class="select_box">
			<!-- 这里是导航栏部分 -->
			<div class="but-box">
				<ul>
					<li>
						<div class="boxtab">
							<div class="curbox" style="padding-left:0">
								<el-input v-model="searchText" placeholder="请输入内容"></el-input>
							</div>
						</div>
					</li>
					<li>
						<div class="boxtab">
							<!-- 添加搜索事件 -->
							<div class="curbox" id='searchbox' @click="search(searchText)">
								<i style="" class="el-icon-search"></i>
								<span></span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<div class="boxtab">
							<!-- 添加搜索事件 -->
							<div class="curbox fs" id='searchbox' @click="refresh">
								<i style="" class="el-icon-"></i>
								<span>刷新</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<div class="boxtab" @click="reset">
							<div class="curbox">
								<i style="" class="el-icon-delete"></i>
								<span>清空</span>
							</div>
						</div>
					</li>
					<li>
						<slot name="close"></slot>
					</li>
				</ul>
			</div>
			<!--搜索栏结束-->
			<div class='table'>
				<!--表格所在盒子-->
				
				<div class="main">
				 	<el-tabs type="border-card" v-model="activeName">
						<el-tab-pane label="指引" name='guide'>
							<div class='table-header'>
								<el-table :data="cwlbs" @row-dblclick="dbHandle" height="340" border style="width: 100%">
									<el-table-column type="selection" label="" width="auto">
									</el-table-column>
									<el-table-column prop="StockCode" label="编号" width="auto">
									</el-table-column>
									<el-table-column prop="StockName" label="名称" width="auto">
									</el-table-column>
									<el-table-column prop="WareHouseName" label="仓库" width="auto">
									</el-table-column>
									<el-table-column prop="AreaName" label="库区" width="auto">
									</el-table-column>
									<el-table-column prop="Volume" label="体积" width="auto">
									</el-table-column>
									<el-table-column prop="UseVolume" label="已用体积" width="auto">
									</el-table-column>
									<el-table-column prop="VolumePercent" label="体积百分比" width="auto">
									</el-table-column>
									<el-table-column prop="Weight" label="重量" width="auto">
									</el-table-column>
									<el-table-column prop="UseWeight" label="已用重量" width="auto">
									</el-table-column>
									<el-table-column prop="WeightPercent" label="重量百分比" width="auto">
									</el-table-column>
								</el-table>								
							</div>
						</el-tab-pane>

						<el-tab-pane label="全部" name='all'>
							<div class='table_left'>
								<el-tree :data="warehouseTree" :props="defaultCW" @node-click="handleNodeClick"></el-tree>
							</div>
							<div class='table_right'>
								<el-table :data="cwlbs" @row-dblclick="dbHandle"   height="340" border style="width: 100%">
									
									<el-table-column prop="Code" label="仓库" width="auto">
									</el-table-column>
									<el-table-column prop="Name" label="仓库" width="auto">
									</el-table-column>
									<el-table-column prop="Volume" label="体积" width="auto">
									</el-table-column>
									<el-table-column prop="Weight" label="承重" width="auto">
									</el-table-column>
									<el-table-column prop="Desc" label="备注" width="auto">
									</el-table-column>
								</el-table>								
							</div>
						</el-tab-pane>

						<el-tab-pane label="库存分布" name='inventory'>
							<div class='table-header'>
								<el-table :data="cwlbs"  @row-dblclick="dbHandle"  height="340" border style="width: 100%">
									<el-table-column type="selection" label="" width="auto">
									</el-table-column>
									<el-table-column prop="ProCode" label="仓位名称" width="auto">
									</el-table-column>
									<el-table-column prop="ProCode" label="帐存数量" width="auto">
									</el-table-column>
									<el-table-column prop="ProCode" label="仓存数量" width="auto">
									</el-table-column>
									<el-table-column prop="ProCode" label="帐存辅助数量" width="auto">
									</el-table-column>
									<el-table-column prop="ProCode" label="仓存辅助数量" width="auto">
									</el-table-column>
									<el-table-column prop="BarCode" label="体积百分比" width="auto">
									</el-table-column>
									<el-table-column prop="Unit" label="重量百分比" width="auto">
									</el-table-column>
								</el-table>								
							</div>
						</el-tab-pane>
					</el-tabs>	
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		props: {
			yqID:'',
			ProID: ''
		},
		data() {
			return {
				searchText: '',
				tongjishuju: '',
				cwlbs:[],
				activeName: 'guide',
				backUpArr: [], // 存放订单顶级为5的数据
				warehouseTree: [{  // 树形结构 信息
					Name: '仓库',
					children: []
				}],
				defaultCW: {  // 绑定渲染
          label: "Name",
					children: "children"
				},
				backUpCwlbs:[],
				
				tree_data: [{ 
					Name: '所有商品',
          children: []
				}],
				defaultProps: {
					children: 'children',
					label: 'Name'
				},
			}
		},
		watch: {
			yqID() { // 合作方改变的时候,改变树形数据
				// this.tree_data[0].children[0].label = this.sphzf; 
				this.getyqTreeCode();
			},
			ParID() {
			  this.getguide();
			}
		},
		mounted:function (){
			// this.tree_data[0].children[0].label = this.sphzf;
			this.getyqTreeCode();
			if(this.ProID) {
				this.getguide();
			}
		},
		methods: {
			// 搜索的点击事件
			search (val){ 
				console.log(val);
				console.log(this.backUpCwlbs, this.cwlbs)
				if (val) {
          this.cwlbs = this.backUpCwlbs.filter((item) => {
						if (!!~item.Code.indexOf(val) || !!~item.Name.indexOf(val)) {
							return true
						}
					})
				} else {
          this.cwlbs = this.backUpCwlbs;
				} 
			},
			// 清空点击事件
			reset () {
				this.searchText = '';// 把文字清空
				this.search(); // 重新搜索一下
			},
			// 获取商品指引
			getguide () {
				console.log("获取商品指引")
				var that = this;
				var params = {
					ParkID: that.yqID,
					ProID: that.ProID
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: 'CPHH.PC.BaseInfo.Product.GetGuideStockList',
						test: 'test'
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = JSON.parse(data)
						var result = JSON.parse(obj.Datas)
						console.log("获取单个商品仓位指引",result);
					}
				})	
			},
			// 获取仓库树形图
			getyqTreeCode() {
				var that = this;
				var params = {
					Level: 5,
					ParkID: that.yqID
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: 'CPHH.PC.BaseInfo.Stock.GetStockTreeList'
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = JSON.parse(data)
						var result = JSON.parse(obj.Datas)
						
						console.log("获取编号",result);
						for(let i = 0; i < result.Data.length; i++) {
							if(result.Data[i].Level == 4) {
								that.warehouseTree[0].children.push(result.Data[i]);
								result.Data[i].children = [];
							} else {
                that.backUpArr.push(result.Data[i]);
							}
						}
            for(let i = 0; i < that.warehouseTree[0].children.length; i++) {
							for(let j = 0; j < that.backUpArr.length; j++) {
                if(that.warehouseTree[0].children[i].InterID == that.backUpArr[j].ParentID) {
									that.warehouseTree[0].children[i].children.push(that.backUpArr[j]);
								}
							}
						}
					}
				})
			}, 
			handleNodeClick (val) {
				console.log("11",val)
				var that = this;
				var params = {
					ParkID: that.yqID,
					Value: that.searchText,
					TreeNumber: val.TreeNumber
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: 'CPHH.PC.BaseInfo.Stock.GetStockList'
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = JSON.parse(data)
						var result = JSON.parse(obj.Datas)
						var data = result.Data;
						that.cwlbs = data; 
						that.backUpcwlbs = data; 
						console.log("获取数据",data);
					}
				})
			},
			refresh () {

			},
			dbHandle (val) {
				console.log("发送",val)
				this.$emit("sendCW",val);
			}
		}
	
}
</script>

<style>
.cwzl .but-box {
	width: calc(100% - 20px);
}
.cwzl .but-box {
  padding: 0 10px;
}
.cwzl .but-box ul li {
	line-height: 40px;
}
.el-dialog__body {
	padding:0 15px;
}
.table_right {
	float: right;
	width: 69%;
}
.table_left .el-tree {
  height: 100%;
}
.table_left {
	float: left;
	width: 30%;
	height: 340px;
}
</style>
