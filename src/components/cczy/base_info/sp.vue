<template>
	<!-- 商品 -->
	<div class="sp">
		<!-- 这里是导航栏部分结束 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox xz" @click='sptj_Click=true'>
							<span>添加</span>
						</div>
					</div>
				</li>
				<!--一个商品弹窗和一个警告弹窗-->
				<!--反禁用，添加 编辑按钮对应弹窗已做，然后可能弹不出来需要检查下-->
				<li>
					<div class="boxtab">
						<div class="curbox xg" @click='spbj_Click=true'><span>编辑</span></div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sc" ><span>删除</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox sx" ><span>刷新</span></div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<el-input class="inline-input djbh" size="small" placeholder="条件" v-model="djbh">
						</el-input>
					</div>
				</li>
				
					<div class="boxtab">
						<div class="curbox jy" > <span>禁用</span> </div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox fjy" @click='fjy=true'> <span>反禁用</span> </div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox plxg" > <span>批量修改</span> </div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox spflm"   @click='sptree_Click=true'> <span>商品分类码</span> </div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox ctys" >
							<!-- <span>窗体样式</span> -->
							<el-dropdown split-button >
								窗体样式
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>保存样式</el-dropdown-item>
									<el-dropdown-item>恢复样式</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</div><span class="gun"></span></li>
				<li>
					<div class="boxtab">
						<div class="curbox tc" @click="closetag"><span>退出</span></div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->
		<div class="content">
			<div class="distributionCenter">
				<div class="inc">
					<p> 配送中心：</p>
					<el-select v-model="value" placeholder="请选择" @change="change(value)">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="inc">
					<p> 合作方 &nbsp;&nbsp;：</p>
					<el-select v-model="value" placeholder="请选择" @change="change(value)">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<el-table :data="options[value].tableData" @current-change="providerInfo1" :type="index" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
					<el-table-column prop="date" type="index" label="编号" sortable width="60">
					</el-table-column>
					<el-table-column prop="name" label="名称" sortable width="315">
					</el-table-column>
				</el-table>
			</div>

			<div class="providerInfo">
				<p>供应商的内容,共计1条记录</p>
				<el-table :data="options[value].tableData[date].providerInfo" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
					<el-table-column prop="date" label="编号" sortable width="110">
					</el-table-column>
					<el-table-column prop="name" label="名称" sortable width="110">
					</el-table-column>
					<el-table-column prop="due" label="条形码" sortable width="110">
					</el-table-column>
					<el-table-column prop="rental" label="运输货物类型" sortable width="150">
					</el-table-column>
					<el-table-column prop="paid" label="运输货物规格" sortable width="150">
					</el-table-column>
					<el-table-column prop="advance" label="箱条码" sortable width="110">
					</el-table-column>
					<el-table-column prop="advanceBalance" label="助记码" sortable width="110">
					</el-table-column>
					<el-table-column prop="balance" label="规格" sortable width="110">
					</el-table-column>
					<el-table-column prop="date" label="单位" sortable width="110">
					</el-table-column>
					<el-table-column prop="name" label="辅单" sortable width="110">
					</el-table-column>
					<el-table-column prop="due" label="换算率" sortable width="110">
					</el-table-column>
					<el-table-column prop="rental" label="销售价" sortable width="110">
					</el-table-column>
					<el-table-column prop="paid" label="最低限价" sortable width="110">
					</el-table-column>
					<el-table-column prop="advance" label="体积" sortable width="110">
					</el-table-column>
					<el-table-column prop="advanceBalance" label="辅助体积" sortable width="110">
					</el-table-column>
					<el-table-column prop="balance" label="重量" sortable width="110">
					</el-table-column>
					<el-table-column prop="date" label="辅助重量" sortable width="110">
					</el-table-column>
					<el-table-column prop="name" label="生产厂商" sortable width="110">
					</el-table-column>
					<el-table-column prop="due" label="仓储费计算方式" sortable width="150">
					</el-table-column>
					<el-table-column prop="rental" label="计算周期" sortable width="110">
					</el-table-column>
					<el-table-column prop="paid" label="辅单位仓储价" sortable width="150">
					</el-table-column>
					<el-table-column prop="advance" label="基本单位仓储价" sortable width="180">
					</el-table-column>
					<el-table-column prop="advanceBalance" label="应收配送费计算方式" sortable width="200">
					</el-table-column>
					<el-table-column prop="balance" label="辅助单位应收配送价" sortable width="200">
					</el-table-column>
					<el-table-column prop="date" label="基本单位应收配送价" sortable width="200">
					</el-table-column>
					<el-table-column prop="name" label="辅单位应付配送价" sortable width="200">
					</el-table-column>
					<el-table-column prop="due" label="基本单位应付配送价" sortable width="200">
					</el-table-column>
					<el-table-column prop="rental" label="最后进价" sortable width="110">
					</el-table-column>
					<el-table-column prop="paid" label="拆箱费单价" sortable width="150">
					</el-table-column>
					<el-table-column prop="advance" label="辅单位应付配送价" sortable width="200">
					</el-table-column>
					<el-table-column prop="advanceBalance" label="备注" sortable width="110">
					</el-table-column>
					<el-table-column prop="balance" label="府库有效天数" sortable width="200">
					</el-table-column>
					<el-table-column prop="date" label="保质期天数" sortable width="150">
					</el-table-column>
					<el-table-column prop="name" label="效期预警天数" sortable width="150">
					</el-table-column>
					<el-table-column prop="due" label="接口编号" sortable width="110">
					</el-table-column>
					<el-table-column prop="rental" label="采购价类型" sortable width="150">
					</el-table-column>
					<el-table-column prop="paid" label="采购价" sortable width="110">
					</el-table-column>
					<el-table-column prop="advance" label="上" sortable width="110">
					</el-table-column>
					<el-table-column prop="advanceBalance" label="宽" sortable width="110">
					</el-table-column>
					<el-table-column prop="balance" label="高" sortable width="110">
					</el-table-column>
					<el-table-column prop="date" label="堆叠量" sortable width="110">
					</el-table-column>
					<el-table-column prop="name" label="费用单价" sortable width="110">
					</el-table-column>
					<el-table-column prop="due" label="托旁管理" sortable width="110">
					</el-table-column>
					<el-table-column prop="rental" label="批次管理" sortable width="110">
					</el-table-column>
					<el-table-column prop="paid" label="自动生成批次" sortable width="150">
					</el-table-column>
					<el-table-column prop="advance" label="按保质期管理" sortable width="150">
					</el-table-column>
					<el-table-column prop="advanceBalance" label="应收拆箱费计费单价" sortable width="200">
					</el-table-column>
					<el-table-column prop="balance" label="频次" sortable width="110">
					</el-table-column>
					<el-table-column prop="date" label="销售单位" sortable width="110">
					</el-table-column>
					<el-table-column prop="name" label="销售价格" sortable width="110">
					</el-table-column>
					<el-table-column prop="due" label="商品ID" sortable width="110">
					</el-table-column>

				</el-table>
			</div>
		</div>

		<!--商品添加的弹窗-->
		<el-dialog title="商品添加" :visible.sync="sptj_Click" size="tiny" :before-close="handleClose" class='sp_add' >
			<sptjtc ></sptjtc>
   
  			
		</el-dialog>
		<!--商品编辑的弹窗-->
		<el-dialog title="商品编辑" :visible.sync="spbj_Click" size="tiny" :before-close="handleClose" class='sp_add' >
			<spbjtc ></spbjtc>
   
  			
		</el-dialog>
		
		<!--反禁用弹窗-->
			<el-dialog title="反禁用" :visible.sync="fjy" size="tiny" :before-close="handleClose"  >
			<fjytc ></fjytc>
   
  			
		</el-dialog>
		
		
		
		<!--警告类弹窗-->
		
		<el-dialog title="提示" :visible.sync="alert1" size="tiny" :before-close="handleClose"  >
				<p>      </p>	
   
  			
		</el-dialog>
		
		
		<el-dialog title="提示" :visible.sync="sptree_Click" size="tiny" :before-close="handleClose"  >
				<sptree></sptree>
   
  			
		</el-dialog>
		
	</div>
</template>

<script>
	
	
	
	import sptjtc from './sptjtc.vue'
	import spbjtc from './spbjtc.vue'
	import fjytc from './fjytc.vue'
	import sptree from './sptree.vue'
	export default {
		components: {
		'sptjtc':sptjtc,
		'spbjtc':spbjtc,
		'fjytc':fjytc,
		'sptree':sptree,
	},
		data() {
			return {
				options: [{
					value: '0',
					label: '广州配送中心',
					tableData: [{
							date: '0',
							name: '广州唐海商贸有限公司',
							providerInfo: [{
								date: '100',
								name: '广州唐海商贸有限公司',
								due: '0.00',
								rental: '164.00',
								paid: '0.00',
								advance: '0.00',
								advanceBalance: '0.00',
								balance: '164.00'
							}]
						},
						{
							date: '1',
							name: '长沙',
							providerInfo: [{
								date: '1000',
								name: '广州唐海商贸有限公司',
								due: '0.00',
								rental: '1640.00',
								paid: '0.00',
								advance: '0.00',
								advanceBalance: '0.00',
								balance: '1640.00'
							}]
						},
						{
							date: '2',
							name: '北京'
						}, {
							date: '3',
							name: '上海'
						}
					]
				}, {
					value: '1',
					label: '长沙配送中心',
					tableData: [{
							date: '1',
							name: '武汉'
						},
						{
							date: '2',
							name: '西安'
						},
						{
							date: '3',
							name: '哈尔滨'
						}, {
							date: '4',
							name: '湘西'
						}
					]
				}, {
					value: '2',
					label: '上海配送中心',
					tableData: [{
							date: '1',
							name: '武汉'
						},
						{
							date: '2',
							name: '西安'
						},
						{
							date: '3',
							name: '哈尔滨'
						},
						{
							date: '4',
							name: '湘西'
						}
					]
				}, {
					value: '3',
					label: '北京配送中心',
				
					tableData: [{
							date: '1',
							name: '武汉'
						},
						{
							date: '2',
							name: '西安'
						},
						{
							date: '3',
							name: '哈尔滨'
						},
						{
							date: '4',
							name: '湘西'
						}
					]
				}, {
					value: '4',
					label: '深圳配送中心',
					tableData: [{
							date: '1',
							name: '武汉'
						},
						{
							date: '2',
							name: '西安'
						},
						{
							date: '3',
							name: '哈尔滨'
						},
						{
							date: '4',
							name: '湘西'
						}
					]
				}],
				value: '0',
				sp_Click:false,
				date: '1',
				//					状态管理区域
					sptj_Click: false,//商品添加
					spbj_Click: false,
					fjy:false,
					alert1:false,
					djbh:'',
					index:'',
					sptree_Click:false,
			}
		},
		methods: {
			change(param) {
				console.log(param);
				this.value = param;
			},
			providerInfo1(val) {
				console.log(val);
				this.date = val.date;
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			},
			// 获取配送中心列表
			getdclist: function() {
				var that = this;
				console.log(that);
				that.baseAjax("getdclist", {
					UserID: window.userid
				}, function(data) {
					var obj = eval('(' + data + ')');

					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.peisong = data[0].DCID;
					that.cities = data;
				});
			},

			// 获取园区列表
			getyuanqulist: function(psid) {
				var that = this;
				that.baseAjax("getparklist", {
					UserID: window.userid,
					DCID: psid
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.yqlist = data;
					that.yuanqu = data[0].ParkID;
					console.log(data);
				});

			},
			 handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
			},
		}
	}
</script>
<style>
	.searchnav {
		height: 60px;
	}
	
	.el-col-offset-2 {
		margin-left: 2%;
	}
	
	.sp .title {
		float: left;
		height: 60px;
		line-height: 60px;
		padding-left: 40px;
		font-size: 20px;
		font-weight: blod;
		color: #000;
	}
	
	.sp .el-table__empty-block {
		min-height: 340px;
	}
	
	.sp .el-table__body-wrapper {
		min-height: 592px;
	}
	
	.sp .providerInfo .el-table__body-wrapper {
		min-height: 595px;
	}
	
	/*.sp button {
		padding: 6px 15px;
	}*/
	
	form.form1 {
		float: right;
		width: 600px;
		height: 60px;
		line-height: 50px;
	}
	
	form.form1 .el-col-2 {
		float: left;
		width: 112px;
	}
	
	form.form1 .el-col-4 {
		float: left;
		width: 140px;
	}
	
	form.form1 .el-col-6 {
		float: left;
		width: 200px;
	}
	
	form.form1 div.djbj {
		width: 140px;
	}
	
	form.form1 p {
		width: 112px;
		text-align: center;
	}
	
	.distributionCenter {
		float: left;
		width: 20%;
		border: 1px solid #35b3fd;
	}
	
	.providerInfo {
		float: right;
		width: 79%;
		border: 1px solid #35b3fd;
	}
	
	.sp .el-table {
		height: 635px !important;
	}
	
	.sp .providerInfo .el-table {
		height: 638px !important;
	}
	
	.sp .content {
		margin-top: 10px;
	}
	
	.sp .inc {
		margin: 10px 0;
	}
	
	.sp .inc p {
		float: left;
	}
	
	
	
</style>