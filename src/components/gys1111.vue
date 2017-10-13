<template>
	<div class='gystc'>
		<div class='gongyingshang'>
			<span>选择供应商</span>
			<b class='fr' @click=''></b>
		</div>
		<!--搜索-->
		<el-row >
			<el-col :span="24">
				<div class="grid-content "><span >包含文字：</span>
					<el-autocomplete v-model="state4" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect" class='search' ></el-autocomplete>
					<el-button type="primary" >清空</el-button>
					<el-button type="primary" >搜索</el-button>
					<el-button type="primary" >关闭</el-button>
				</div>
			</el-col>
		</el-row>


		<div class="table1">
			<div class='tabletitle'><p>供应商内容</p></div>
		<el-table
    :data="tableData3"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
       </el-table-column>
      <el-table-column
      prop="date"
      label="日期"
      width="180">
     </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
       </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
       </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">

    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>

  <el-row>

  	<el-col :span="24"><span class='number'>共<span>111</span>条</span> </el-col>
		<el-col :span="24">
		<div class="grid-content ">
			<el-button type="primary" class='fr'>搜索</el-button>

		</div>
		</el-col>
	</el-row>
	</div>
	</div>

<!--表格-->


</template>

<script>
	export default {
		data() {
			return {
				restaurants: [],
				state4: '',
				timeout: null,
				tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
			};



		},
		methods: {
			loadAll() {
				return [{
						"value": "三全鲜食（北新泾店）",
						"address": "长宁区新渔路144号"
					},
					{
						"value": "Hot honey 首尔炸鸡（仙霞路）",
						"address": "上海市长宁区淞虹路661号"
					}

				];
			},
			querySearchAsync(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

				clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					cb(results);
				}, 3000 * Math.random());
			},
			createStateFilter(queryString) {
				return(state) => {
					return(state.value.indexOf(queryString.toLowerCase()) === 0);
				};
			},
			handleSelect(item) {
				console.log(item);
			}
		},
		mounted() {
			this.restaurants = this.loadAll();
		}
	};
</script>

<style>
	@import url('../../../common/css/gongyingshang-vue.css');
	.fr{
		float:right;
	}
	.search{
		width: 200px;
		display: inline-block;
	}
	.el-row {
		margin-bottom: 20px;
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
