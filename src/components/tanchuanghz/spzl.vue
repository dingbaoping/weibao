<template>
	<div class='spzl spnbtc'>
		<!-- 入库退回商品信息 -->
		<!--商品内部按钮弹窗-->
		<div class="select_box">
			<!-- 这里是导航栏部分 -->
			<div class="but-box">
				<ul>
					<li>
						<div class="boxtab">
							<div class="curbox djsz" @click='djt_Click=true'>
								<span>单据设置</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
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
						<div class="curbox" @click="search(searchText)"> 
							<i style="" class="el-icon-search"></i>
							<span>搜索</span>
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
				<div class="left">
					<div class='title'><span>商品档案</span></div>
					<div class='tree'>
						<el-tree :data="tree_data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
					</div>
				</div>

				<div class="right">
					<div class='ssxx'>
					<span>搜索结果---------共计<button  v-model='tongjishuju'>0</button>条记录	</span>

					</div>
					<div class='table-header'>
						<el-table :data="splbs" ref="selectData" @row-dblclick="dbHandle" @selection-change="handleSelectionChange" v-loading.body="loading" element-loading-text="玩命加载中" height="340" border style="width: 100%">
							<el-table-column type="selection" width="55">
							</el-table-column>
							<el-table-column prop="ProCode" label="编号" width="100">
							</el-table-column>
							
							<el-table-column prop="ProName" label="名称" width="180">
							</el-table-column>
							<el-table-column prop="BarCode" label="条形码" width="100">
							</el-table-column>
							<el-table-column prop="Model" label="规格" width="100">
							</el-table-column>
							<el-table-column prop="StockName" label="仓库" width="100">
							</el-table-column>
							<el-table-column prop="Unit" label="基单" width="100">
							</el-table-column>
							<el-table-column prop="AccountNum" label="基本数量" width="100">
							</el-table-column>
							<el-table-column prop="Batch" label="批次" width="100">
							</el-table-column>
							<el-table-column prop="SPBZ" label="商品备注" width="100">
							</el-table-column>
							<el-table-column prop="ProductionDate" label="生产日期" width="100">
							</el-table-column>
							<el-table-column prop="EffectiveDate" label="有效期至" width="100">
							</el-table-column>
							<el-table-column prop="Account3" label="库存描述" width="100">
							</el-table-column>
							<el-table-column prop="Price" label="成本价" width="100">
							</el-table-column>
							<el-table-column prop="SupUnit" label="最后进价" width="100">
							</el-table-column>
							<el-table-column prop="Manufacturer" label="生产厂家" width="100">
							</el-table-column>
							<el-table-column prop="ConvRate" label="换算率" width="100">
							</el-table-column>
							<el-table-column prop="SL" label="税率" width="100">
							</el-table-column>
							<el-table-column prop="BM" label="部门" width="100">
							</el-table-column>
						</el-table>
						
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		props: {
			spyqID:'',
			sphzfID:'',
			spstr: '',
		},
		data() {
			return {
				searchText: '',
				tongjishuju: '',
				searchText:'',// 搜索字段
				splbs:[],
				backup:[], //设置备份
				selectData: [],
				loading: false,
				tree_data: [{ 
					Name: '所有商品',
          children: []
				}],
				defaultProps: {
					children: 'children',
					label: 'Name'
				},
				tableData3: [],
			}
		},
		// 监听变化
		watch: {
			sphzf() { // 合作方改变的时候,改变树形数据
				// this.tree_data[0].children[0].label = this.sphzf; 
				// console.log('sphzf', this.sphzf);
				this.getProducts();
				this.getTree();
			},
			// 
			spstr() {
				this.searchText = this.spstr;
				this.search(); //搜索事件
			},
			searchText () {
				this.search(); //搜索事件
			}
		},
		mounted:function (){
			this.getTree(); 
			this.getProducts();
		},
		methods: {
			// 清空点击事件
			reset() {
				this.searchText = ""; // 把文字清空
				this.search(); // 重新搜索一下
			},
			// 搜索的点击事件
			search() {
				// 从备份读取数据
				this.splbs = this.backup; 
				// ES6字符串过滤
				this.splbs  = this.splbs.filter((item)=>{
					for(var k in item){
						if(item[k].toString().indexOf(this.searchText) > -1){
							return true;
						}
					}
				});
			},
			// 获取出库商品
			getProducts(TreeNumber) {
				var that = this;
				var jsons = {
					ParID: that.sphzfID,
					Value: "",
					TreeNumber:TreeNumber || '', //	树形结构编号	string
					Freeze: 2,
					LockMark: 2,
					ParkID: that.spyqID,
					DeptID: 0
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.BaseInfo.Product.GetStocksList"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.splbs = data;
						that.backup = data;
					}
				})
			}, 
			// 结构树点击事件
			handleNodeClick(data) {
				this.getProducts(data.Number);
			},
			// 获取树形结构资料
			getTree() {
				var that = this;
				// console.log(that.sphzfID);
				that.baseAjax("itemgetlist", {
					UserID: window.userid,
					ParID: that.sphzfID,
					Class: '商品'
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					// console.log(datas)
				   var data = datas.Data;
				  //  console.log(data)
					// if(data[0].children){
						// if(!data[0].children){
						// 	return false
						// }
						data[0].children  = [];
						for(let j = 1; j < data.length; j++) {
							data[0].children.push(data[j]);
						}
					// } 					 
					 that.tree_data[0].children = [];
					 that.tree_data[0].children.push(data[0]);
				});
			},
			handleSelectionChange (val) {
				this.selectData = val;
			},
			dbHandle (row, event) {
				// 如果双击时未勾选,把当前行push进数组
				if(!this.selectData.length) {
					this.selectData.push(row);
				}
				this.$emit("proSelect", this.selectData);
				this.selectData = []; //清空数组,否则不勾选双击后,会有初会,this.selectData.length不为0
				// 去除勾选
				this.$refs.selectData.clearSelection();
			}
		}
}
</script>

<style>
.spnbtc .right {
	left: 0;
}
</style>
