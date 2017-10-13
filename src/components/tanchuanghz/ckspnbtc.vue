<template>
	<div class='spnbtc'>
		<!--商品内部按钮弹窗-->
		<div class="select_box">
			<!-- 这里是导航栏部分 -->
			<div class="but-box">
				<ul>
					<li>
						<div class="boxtab">
							<div class="curbox sx">
								<span>刷新</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
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
							<div class="curbox" id='searchbox' @click="search">
								<i style="" class="el-icon-search"></i>
								<span>搜索</span>
							</div>
						</div>
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
						<div class="boxtab">
							<div class="curbox ck">
								<span>查看库存</span>
							</div>
						</div>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox" >
								<i style="" class="el-icon-search"></i>
								<span>指定批次</span>
							</div>
						</div>
						<span class="gun"></span>
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
						<span>搜索结果---------共计0条记录	</span> 
					</div>
					<div class='table-header'>
						<el-table :data="splbs" ref="selectData" @row-dblclick="dbHandle" @row-click="getNum" @selection-change="handleSelectionChange" height="340" border style="width: 100%">
							<el-table-column type="selection" width="55"> </el-table-column>
							<el-table-column prop="ProCode" label="编号" width="100" class-name="mohucha"> </el-table-column>
							<el-table-column prop="ProName" label="名称" width="180" class-name="mohucha"> </el-table-column>
							<el-table-column prop="BarCode" label="条形码" width="100" class-name="mohucha"> </el-table-column>
							<el-table-column prop="Model" label="规格" width="100" class-name="mohucha"> </el-table-column>
							<el-table-column prop="SupUnit" label="辅助单位" width="100" class-name="mohucha"> </el-table-column>
							<el-table-column prop="AccountSupportNum" label="辅助数量" width="100" class-name="mohucha"> </el-table-column>
							<el-table-column prop="Unit" label="基本单位" width="100" class-name="mohucha"> </el-table-column>
							<el-table-column prop="AccountNum" label="基本数量" width="100" class-name="mohucha"> </el-table-column>
							<el-table-column prop="ConvRate" label="换算率" width="100" class-name="mohucha"> </el-table-column>
							<el-table-column prop="SalePrice" label="销售价" width="100" class-name="mohucha"> </el-table-column>
							<el-table-column prop="FloorPrice" label="最低限价" width="100" class-name="mohucha"></el-table-column>
							<el-table-column prop="Manufacturer" label="生产厂商" width="100" class-name="mohucha"> </el-table-column>
							<el-table-column prop="Unit" label="销售价单位" width="100" class-name="mohucha"> </el-table-column>
						</el-table>
						<ul class='r1'>
							<li>
								<p>未执行数：</p>
								<ul class='r2'>
									<li>辅助数量：<span>0</span></li>
									<li>基本数量：<span>0</span></li>
								</ul>
							</li>
							<li>
								<p>可用数：</p>
								<ul class='r2'>
									<li>辅助数量：<span>0</span></li>
									<li>基本数量：<span>0</span></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		props: {
			sphzf: '',
			sphzfID: '', //合作方id
			spstr: '',
			DCID:'', //配送中心id
			ParkID: '', //园区id
		},
		data() {
			return {
				searchText: '',
				tongjishuju: '',
				splbs: [{  // 存放商品数据
					Code: '',
					}], 
				backup: [], //设置备份
				selectData: [],
				tree_data: [{ //树形结构
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
			sphzf() { // 合作方改变的时候,改变树形数据
				// this.tree_data[0].children[0].label = this.sphzf; 
				this.getProducts();
				this.getTree();
			},
			// 
			spstr() { // 监听搜索字段
				this.searchText = this.spstr;
				this.getProducts();
				this.search(); //搜索事件
			},
			searchText () {
				this.search();
			}
		},
mounted: function() {
	this.$nextTick(function() {
		// this.tree_data[0].children[0].label = this.sphzf;
		this.getProducts();
		this.getTree();
		this.searchText = this.spstr;
	});
},
methods: {
	// 获取出库商品列表
	getProducts() {
		var that = this;
		var jsons = {
					ParID: that.sphzfID,	//合作方ID
					TreeNumber:'' ,	//树形结构编号
					Value:'',	//查询条件
					DCID: that.DCID,	//配送中心ID
					ParkID:that.ParkID , //	园区ID
					DeptID: 0,	//部门ID
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.BaseInfo.Product.GetSumStocksList"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.splbs = data;
						that.backup = data;

						console.log('商品', data);
					}
				})
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

				console.log(216,this.splbs);
			},
			// 清空点击事件
			reset() {
				this.searchText = ''; // 把文字清空
				this.search(); // 重新搜索一下
			},
			handleNodeClick(data) {
				var that = this;
				if (!data.PartnerID) {
          return;
				}
				var params = {
					ParID: data.PartnerID,
					TreeNumber: data.Number,
					Value:'',	//查询条件
					DCID: that.DCID,	//配送中心ID
					ParkID:that.ParkID , //	园区ID
					DeptID: 0,	//部门ID
				}
        $.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: "CPHH.PC.BaseInfo.Product.GetSumStocksList"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
	          that.splbs = data;
						console.log('商品', data);
					}
				
				});
			},
			// 获取树形结构
			getTree() {
				var that = this;
				that.loading = true;
				// console.log(that.sphzfID);
				that.baseAjax("itemgetlist", {
					UserID: window.userid,
					ParID: that.sphzfID,
					Class: '商品'
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					data[0].children = [];
					for(let j = 1; j < data.length; j++) {
						data[0].children.push(data[j]);
					}
					that.tree_data[0].children = [];
					that.tree_data[0].children.push(data[0]);
					// console.log(data);
					that.loading = false;
				});
			},
			getNum (val) {
				console.log(val)
				var that = this;
				var params = {
					Type: '正常出库',
					ProID: val.ProID,
					DCID: that.DCID,
					DeptID: 0,
					ParkID: that.ParkID,
					Batch: ''
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: "CPHH.PC.BaseInfo.Product.GetOutOrderNoExecQtyAndCanUseQty"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						if(obj.StateCode == '100') {
							var datas = JSON.parse(obj.Datas);
							var data = datas.Data;
							console.log('执行数量', data);
						}
						
					}
				
				});

			},
			// 勾选事件
			handleSelectionChange(val) {
				this.selectData = val;
			},
			// 表格双击事件
			dbHandle(row, event) {
				// 如果双击时未勾选,把当前行push进数组
				console.log('row',row);
				if(!this.selectData.length) {
					this.selectData.push(row);
				}
				this.$emit("proSelect", this.selectData);
				this.selectData = []; //清空数组,否则不勾选双击后,会有初会,this.selectData.length不为0
				// 去除勾选
				this.$refs.selectData.clearSelection();
			},
		}
	}
</script>

<style>

</style>