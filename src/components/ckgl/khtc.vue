<template>
	<div class='khtc' style="width: 100%">
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<el-breadcrumb separator="|">
						<el-breadcrumb-item>
							<el-input v-model="searchText" placeholder="">
							</el-input>
						</el-breadcrumb-item>
					</el-breadcrumb>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox" @click="reset"><i style="" class="el-icon-delete"></i><span>清空</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox" @click="search"><i style="" class="el-icon-search"></i><span>搜索</span></div>
					</div><span class="gun"></span></li>
				<li>
					<slot name="close"></slot><span class="gun"></span></li>
			</ul>
		</div>

		<div class="table1">
			<div class='tabletitle'>
				<p>客户内容</p>
			</div>
			<el-table :data="khlist" height="350" @row-dblclick="checked" @current-change="handleCurrentChange" border highlight-current-row style="width: 100%">

				<el-table-column prop="Code" label="编号" width="auto" class-name="mohucha">
				</el-table-column>
				<el-table-column prop="Name" label="名称" width="auto" class-name="mohucha">
				</el-table-column>
				<el-table-column prop="Contact" label="联系人" width="auto" class-name="mohucha">
				</el-table-column>
				<el-table-column prop="MCode" label="助记码" width='auto' class-name="mohucha">

				</el-table-column>
				<el-table-column prop="TelePhone" label="固定电话" width='auto' class-name="mohucha">
				</el-table-column>
				<el-table-column prop="Mobile" label="移动电话" width='auto' class-name="mohucha">
				</el-table-column>
				<el-table-column prop="Address" label="地址" width='auto' class-name="mohucha">
				</el-table-column>
        <el-table-column prop="SalesMan" label="业务员" width='auto' class-name="mohucha">
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
			InterID: '',
			khstr:''
		},
		data() {
			return {
				restaurants: [],
				searchText: '',// 搜索的内容
				state4: '',
				timeout: null,
				khlist: []
			};
		},
		　watch: {//监听ParID值变化,如果变化则重新请求供应商数据
			InterID(curVal, oldVal) {　　　　　
				 　　
			 this.getgyslist();
			},
			　deep: true　　　　　　　　
			}　　　　　　
		,
		mounted: function() {
			  this.getgyslist(); 
				this.searchText = this.khstr;
		},
		updated: function (){
			this.search();
		},
		// 值监听
		watch: {
			khstr () {
				this.searchText = this.khstr;
				this.search();
			}
		},
		methods: {
			// 清空点击事件
			reset () {
				this.searchText = '';// 把文字清空
				this.search(); // 重新搜索一下
				// this.hzfstr = '';	
				// this.gethzflist();
			},
			// 搜索的点击事件
			search (){ 
				console.log('searchText',this.searchText);
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
			// 获取客户的数据
			getgyslist: function() {
				var that = this;

				that.baseAjax("customergetlist", {
					UserID: window.userid,
          ParID: that.InterID,
          CheckStatus: 1,
          JY: 0
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas)
					var data = datas.Data
					console.log(data);
					that.khlist = data;

				});

      },
      checked (val) {
        this.$emit("getkehuInfo", val);
      },
      handleCurrentChange (val) {
        this.$emit("checkgetkehuInfo", val);
      }
		}
	};
</script>

<style scoped>
	@import url('../../../common/css/gystc/gongyingshang-vue.css');
	.fr {
		float: right;
	}
	
	.search {
		width: 200px;
		display: inline-block;
	}
	
	.el-row {
		margin-bottom: 2px;
		&:last-child {
			margin-bottom: 0;
		}
		height: 44px;
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