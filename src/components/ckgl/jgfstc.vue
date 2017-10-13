<template>
	<div class='jgfs'>
		<div class="but-box">
			<ul>

				<li>
					<div class="boxtab">
						<div class="curbox qd ok">
							<span>确定并返回</span>
						</div>
					</div>
					<span class="gun"></span>

				</li>

				<li>

					<div class="boxtab">
						<slot name="jgfsAdd"></slot>
					</div>
				</li>
				<li>	
					<div class="boxtab">
						<div class="curbox yq">
							<span>移除</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<slot name="jgfsClose"></slot>
						
					</div>
					<span class="gun"></span>
				</li>
			</ul>

		</div>

		<div class="jgfs_table">
			<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="加工方式" width="auto">
					<template scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column prop="name" label="规格" width="auto">
				</el-table-column>
				<el-table-column prop="name" label="单位" width="auto">
				</el-table-column>
				<el-table-column prop="address" label="数量" width="auto">
				</el-table-column>
				<el-table-column prop="address" label="价格" width="auto">
				</el-table-column>
				<el-table-column prop="address" label="金额" width="auto">
				</el-table-column>
				<el-table-column prop="address" label="序号" width="auto">
				</el-table-column>

			</el-table>

		

		</div>

	</div>
</template>

<script>

export default {
  data() {
		return {
		  tableData3: [], 
		}
	},
	mounted: function() {
		var that = this;
		$('.jg .tc').click(function() {
			tj_Click = false;
		})
	},
	methods: {
		handleSelectionChange() {

		},
	}
}



</script>

<style>
.jgfs .but-box {
	width: 100%;
	height: 40px;
	background: url(../../assets/img/gun.png) repeat-x;
}

.jgfs .boxtab {
	float: left;
	display: table;
	height: 40px;
	margin: 0 5px;
	line-height: 40px;
}

.jgfs div.boxtab:hover {
	background: #efeeee;
}

.jgfs div.but-box ul li {
	display: table;
	float: left;
}

.jgfs .curbox {
	display: table;
	margin: 0 auto;
	padding-left: 30px;
	background: url(../../../common/img/rk/baocun.png) no-repeat;
	background-position: 5px 10px;
	cursor: pointer;
}

.jgfs .gun {
	height: 20px;
	width: 1px;
	background: #b7b7b7;
	display: block;
	float: right;
	margin-top: 10px;
}

.jgfs .bcsh {
	background: url(../../../common/img/rk/baocunshenhe.png) no-repeat;
	background-position: 5px 10px;
}

.jgfs .syt {
	background: url(../../../common/img/rk/shangyitiao.png) no-repeat;
	background-position: 5px 10px;
}

.jgfs .xyt {
	background: url(../../../common/img/rk/xiayitiao.png) no-repeat;
	background-position: 5px 10px;
}

.jgfs .xddyp {
	background: url(../../../common/img/rk/xuandingdanyp.png) no-repeat;
	background-position: 5px 10px;
}

.jgfs .xdd {
	background: url(../../../common/img/rk/xuandingdan.png) no-repeat;
	background-position: 5px 10px;
}

.jgfs .djsz {
	background: url(../../../common/img/rk/danjushezhi.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .cz {
	background: url(../../../common/img/rk/beizhu.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .cz .el-button {

	background: url(../../assets/img/gun.png) repeat-x;
}

.jgfs .yljh {
	background: url(../../../common/img/rk/yulan.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .ylck {
	background: url(../../../common/img/rk/yulan.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .ylck {
	background: url(../../../common/img/rk/yulan.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .sh {
	background: url(../../../common/img/rk/baocunshenhe.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .fs {
	background: url(../../../common/img/rk/fanshen.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .tc {
	background: url(../../../common/img/rk/tuichu.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .tj {
	background: url(../../../common/img/rk/tianjia.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .qd {
	background: url(../../../common/img/rk/qd.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .yq {
	background: url(../../../common/img/rk/jy.jpg) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.jgfs .jgfs_table {
	height: auto;
}

.jgfs .jgfs_table .el-table {
	height: auto;
}
</style>