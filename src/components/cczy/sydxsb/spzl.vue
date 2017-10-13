<template>
	<div class='spzl'>
		<!--商品资料弹窗-->
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
					<div class='ssxx'>
						<!-- <span>搜索结果---------共计  条记录	</span> -->
					</div>
						<el-table :data="splbs" ref="selectData" @row-dblclick="dbHandle" @selection-change="handleSelectionChange"height="340" border style="width: 100%">
							<el-table-column type="selection" label="选" width="55">
							</el-table-column>
							<el-table-column prop="Code" label="编号" width="100" class-name="mohucha">
							</el-table-column>
							<el-table-column prop="Name" label="名称" width="180" class-name="mohucha">
							</el-table-column>
							<el-table-column prop="Model" label="规格" width="100" class-name="mohucha">
							</el-table-column>
							<el-table-column prop="BarCode" label="条形码" width="100" class-name="mohucha">
							</el-table-column>
							<el-table-column prop="Unit" label="仓库编号" width="100" class-name="mohucha">
							</el-table-column>
							<el-table-column prop="SupUnit" label="仓库" width="100" class-name="mohucha">
							</el-table-column>
							<el-table-column prop="ConvRate" label="辅助数量" width="100" class-name="mohucha">
							</el-table-column>
							<el-table-column prop="Manufacturer" label="基本单位" width="100" class-name="mohucha">
							</el-table-column>
							<el-table-column prop="Memarks" label="基本数量" width="100" class-name="mohucha">
							</el-table-column>
							<el-table-column prop="Memarks" label="批次" width="100" class-name="mohucha">
							</el-table-column>
							<el-table-column prop="Memarks" label="库存描述" width="100" class-name="mohucha">
							</el-table-column>
						</el-table>

			</div>

		</div>
	</div>
</template>

<script>
	export default {
		props: {
			sphzf: '',
			sphzfID: '',
			spstr: ''
		},
		data() {
			return {
				searchText: "",
				tongjishuju: '',
				splbs: [], //
				backup: [], //设置备份
				selectData: [],
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
		mounted: function() {
			this.$nextTick(function() {
				this.getProducts();
				this.getTree();
			});
		},
		methods: {
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
			// 清空点击事件
			reset() {
				this.searchText = ""; // 把文字清空
				this.search(); // 重新搜索一下
			},
			handleNodeClick(data) {
				var that = this;
				that.baseAjax("productgetlist", {
					UserID: window.userid,
					ParID: data.PartnerID,
					TreeNumber: data.Number,
					CheckStatus: 2,
					JY: 2
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.splbs = data;
				});
			},
			// 获取商品列表
			getProducts() {
				// console.log(this.sphzf)
				var that = this;
				that.baseAjax("productgetlist", {
					UserID: window.userid,
					ParID: this.sphzfID,
					CheckStatus: 2,
					JY: 2
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.splbs = data;
					that.backup = data;
					// that.search(); //搜索事件
				});
			},
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
					console.log(datas)
				   var data = datas.Data;
				   console.log(data)
					data[0].children = [];
					 for(let j = 1; j < data.length; j++) {
					 	data[0].children.push(data[j]);
					 }
					 that.tree_data[0].children = [];
					 that.tree_data[0].children.push(data[0]);
				});
			},
			// 多选事件
			handleSelectionChange(val) {
				this.selectData = val;
			},
			// 表格双击事件
			dbHandle(row, event) {
				// 如果双击时未勾选,把当前行push进数组
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