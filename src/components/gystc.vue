<template>
	<div class='gystc' style="width: 100%">
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<el-breadcrumb separator="|">
						<el-breadcrumb-item>
							<el-input placeholder="" v-model="searchText">
							</el-input>
						</el-breadcrumb-item>
					</el-breadcrumb>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox" @click="reset">
							<i style="" class="el-icon-delete"></i>
							<span>清空</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox" @click="search">
							<i style="" class="el-icon-search"></i>
							<span>搜索</span>
						</div>
					</div><span class="gun"></span></li>
				<li>
					<slot name="close"></slot><span class="gun"></span></li>
			</ul>
		</div>

		<div class="table1">
			<div class='tabletitle'>
				<p>供应商内容</p>
			</div>
			<el-table :data="gyslist" height="350" v-loading.body="loading"  @current-change="handleCurrentChange" @row-dblclick="checked" border highlight-current-row style="width: 100%">

				<el-table-column prop="Code" label="编号" width="auto">
				</el-table-column>
				<el-table-column prop="Name" label="名称" width="auto" >
				</el-table-column>
				<el-table-column prop="Contact" label="联系人" width="auto" >
				</el-table-column>
				<el-table-column prop="MCode" label="助记码" width='auto' >

				</el-table-column>
				<el-table-column prop="TelePhone" label="固定电话" width='auto'>
				</el-table-column>
				<el-table-column prop="Mobile" label="移动电话" width='auto'>
				</el-table-column>
				<el-table-column prop="Address" label="地址" width='auto'>
				</el-table-column>
			</el-table>

			<el-row>

				<el-col :span="24">
					<span class='number'>共
						<span></span>条</span>
				</el-col>
				<el-col :span="24">
					<div class="grid-content ">

					</div>
				</el-col>
			</el-row>
		</div>

	</div>

	<!--表格-->
</template>

<script>
	export default {
		props: {
			ParID: '',
			gysstr:''
		},
		data() {
			return {
				restaurants: [],
				state4: '',
				timeout: null,
				gyslist: [],
				searchText: '',
				loading: false
			};
		},
		　watch: { //监听ParID值变化,如果变化则重新请求供应商数据
			ParID(curVal, oldVal) {　　　
				this.getgyslist();
			},
			gysstr(){
				this.searchText = this.gysstr;
			},
			　deep: true　　　　　　　　
		}　　　　　　,
		mounted: function() {
			this.getgyslist();
		 this.searchText = this.hzfstr;
		  
		},
		methods: {
			// 获取供应商的数据 
			getgyslist: function() {
				var that = this;
        that.loading = true;
				that.baseAjax("suppliergetlist", {
					UserID: window.userid,
					ParID: that.ParID
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.gyslist = data;
					that.loading = false;	
				});
			},
			// 搜索的点击事件
			search (){ 
				var $tr = $('tbody .mohucha').parent();	// 缩小范围 
				for(var i=0; i<$tr.length; i++){ //遍历tr
					var $td = $($($tr[i]).children('.mohucha')); 
					for(var j=0; j<$td.length; j++){ // 遍历td
						var idx = $td.text().indexOf(this.searchText) // 判断是否含有关键字
						if(idx == -1)$($tr[i]).hide(); // 如果搜索不到则隐藏
						else $($tr[i]).show();  // 否则显示
					}
				}
			},
			// 清空点击事件
			reset () {
				this.searchText = '';// 把文字清空
				this.search(); // 重新搜索一下
			},
			checked(val) {
				//给入库管理组件传递最新选择的值,双击
				this.$emit("getgysInfo", val);
			},
			handleCurrentChange (val) {
					//给入库管理组件传递最新选择的值,点击确定
				this.$emit("checkgetgysInfo", val);
			},
		}
	};
</script>

<style scoped>
	@import url('../../common/css/gystc/gongyingshang-vue.css');
	.fr {
		float: right;
	}
	
	.search {
		width: 200px;
		display: inline-block;
	}
	
	.el-row {
		margin-bottom: 2px;
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>