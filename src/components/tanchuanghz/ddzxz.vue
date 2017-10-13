<template>
  	<div class='tm_body'>
					<div class="but-box">
						<ul>
							<li>
								<div class="boxtab">
									<div class="curbox xz">
										<span>选择</span>
									</div>
								</div>
								<span class="gun"></span>
							</li>
							<li>
								<div class="boxtab">
									<div class="curbox tc">
										<span>关闭</span>
									</div>
								</div>
								<span class="gun"></span>
							</li>
						</ul>
					</div>
					<div class="table_dialog">
						<el-table :data="ddlbs" height="250" border style="width: 100%"  @cell-dblclick="dbrow" @header-click="headerc"  v-loading.body="loading"  element-loading-text="玩命加载中">
							<el-table-column label="联系人" width="120">
								<template scope="scope"></template>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="联系方式" width="120">
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="客户区域" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="路线" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="省份" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="btn" label="城市" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="区县" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="街道" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="详细地址" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="收货地址" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							
						</el-table>
					</div>
				</div>
</template>
<script>
export default {
  data () {
    return {
			ddlbs: [],
      loading: false,
    }
  },
  methods: {
    dbrow() {

    },
    headerc () {

    }
  }
}
</script>
<style>

</style>
