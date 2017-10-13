<template>
	<div class='hzftc'>
		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<el-breadcrumb separator="|">
						<el-breadcrumb-item>
							<el-input class="hzf-input"  placeholder="" v-model="searchText">
							</el-input>
						</el-breadcrumb-item>
					</el-breadcrumb>
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
						<!-- 添加搜索事件 -->
						<div class="curbox" @click="search"> 
							<i style="" class="el-icon-search"></i>
							<span>搜索</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<slot name="close"></slot>
					<span class="gun"></span>
				</li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->

		<div class="table1">
			<div class='tabletitle'>
				<p>合作方内容</p>
			</div>
			<el-table :data="hzflist" ref="singleTable" tooltip-effect="dark" @row-dblclick="checked" @current-change="handleCurrentChange" height="250" border style="width: 100%"
			highlight-current-row>
				<el-table-column type="index" prop="date" width="60">
				</el-table-column>
				<el-table-column prop="Code"  label="编号" width="80" class-name="mohucha">
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
			</el-table>

			<el-row>

				<el-col :span="24">
					<span class='number'>共
						<span>111</span>条</span>
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
		DCID: "",
		hzfstr:''
	},
	data() {
		return {
			hzf_tc: false,
			options: [], // 合作方list
			bakcUpArr:[],
			hzflist: [],
			searchText:'', // 获取搜索的内容
		};
	},
	mounted: function() {
		window.hzftc = this;
		 this.gethzflist();
		 this.searchText = this.hzfstr;
	},
	watch: {
		
		hzfstr () {
		 var that = this;
		 console.log("1234")
		 console.log(that.hzfstr)
		 that.searchText = that.hzfstr;
		 that.search();
		}
	},
	methods: {
		gethzflist: function() {
			// console.log(this.DCID);
		//  console.log(this.hzfstr);
			var that = this;
			that.baseAjax("getlistindc", {
				UserID: window.userid,
				DCID: that.DCID,
				Value: that.hzfstr
			}, function(result) {
				var obj = eval('(' + result + ')');
				var datas = JSON.parse(obj.Datas);
				var data = datas.Data;
				that.hzflist = data;
				that.search();
				
			})

		},
		handleCurrentChange (val) {
			  //给入库管理组件传递最新选择的值
			this.$emit("checkgethzfInfo", val);
		},
		checked (val) {
			  //给入库管理组件传递最新选择的值
			  // console.log(val);
			this.$emit("gethzfInfo", val);
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
			this.hzfstr = '';	
			this.gethzflist();
		}
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