<template>
	<!-- 移仓单列表 -->
	<div class="ycdlb">
		<!-- 这里是导航栏部分结束 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox xz">
							<router-link to='ycd'>
								<div>新增</div>
								<span style="display: none">移仓单-新增</span>
							</router-link>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox xz">
							<router-link to='ycdxg'>
								<span>修改</span>
							</router-link>
						</div>
					</div>
				</li>
				<!--对应移仓单修改页面-->
				<li>
					<div class="boxtab">
						<div class="curbox ck">
							<router-link to='ycdck'>
								<span>查看</span>
							</router-link>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sc">
							<span>作废</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dy">
							<span>打印</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox yl">
							<span>预览</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox fpry">
							<span>审核</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox fpry">
							<span>导出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<!-- <span>窗体样式</span> -->
							<el-dropdown trigger="click">
								<span class="el-dropdown-link">
		                  窗体样式
		                  <i class="el-icon-caret-bottom el-icon--right"></i>
		                </span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>保存样式</el-dropdown-item>
									<el-dropdown-item>恢复样式</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tc" @click="closetag">
							<span>退出</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->
	
		<!--条件查询-->
		<div class="chaxunkuang">
			<div class="formcx ccgl-r">
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-col :span="3">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="seachParams.startDate" :picker-options="pickerOptions" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="line " :span="1">
							<div class="grid-content">
								<p class="ZHI">至</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="date2">
								<el-date-picker type="date" placeholder="选择日期" v-model="seachParams.endDate" :picker-options="pickerOptions" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
	
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>配送中心：</p>
							</div>
						</el-col>
						<el-col :span="2">
							<el-form-item prop="peisong">
								<!-- 配送中心列表 -->
								<el-select v-model="seachParams.distributionCenter" filterable placeholder="请选择" class=" blueborder input_width" value-key="DCID" @change="distributionCenterChange">
									<el-option v-for="item in distributionCenterList" :key="item.DCID" :label="item.DCName" :value="item">
										<span style="float: left">{{ item.DCName }}</span>
									</el-option>
								</el-select>
								<!-- 配送中心列表结束 -->
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content offset-left">
								<p>合作方：</p>
							</div>
						</el-col>
						<el-col :span="2">
							<el-form-item prop="peisong">
								<!--下拉式合作方-->
								<el-select class='hzf  input_width' v-model="seachParams.partner" value-key="InterID" filterable :filter-method="getCode" placeholder="请选择" no-data-text="无数据">
									<el-option v-for="item in partnerList" :key="item.InterID" :label="item.Name" :value="item">
										<span style="float: left">{{ item.Code }}</span>
										<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
									</el-option>
								</el-select>
								<!--下拉式合作方结束-->
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="1">
							<div class="grid-content">
								<p>园区：</p>
							</div>
						</el-col>
						<el-col :span="2">
							<el-form-item prop="peisong">
								<!-- 园区列表 -->
								<el-select class=" blueborder input_width" v-model="seachParams.park" value-key="ParkID" placeholder="请选择" no-data-text="无数据">
									<el-option v-for="item in parkList" :key="item.ParkID" :label="item.ParkName" :value="item">
										<span style="float: left">{{ item.ParkName }}</span>
									</el-option>
								</el-select>
								<!-- 园区列表结束 -->
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="1">
							<div class="grid-content">
								<p>审核：</p>
							</div>
						</el-col>
						<el-col :span="2">
							<el-form-item prop="peisong">
								<!--审核标志-->
								<el-select class="shbz" v-model="seachParams.audit" placeholder="请选择">
									<el-option v-for="item in auditList" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
								<!--审核标志结束-->
							</el-form-item>
						</el-col>
						<el-col :span="2">
							<div class="grid-content btn">
								<el-button type="primary" @click.native="seach">
									<i class="el-icon-search el-icon--left"></i>查询
								</el-button>
								<!--<el-button type="primary"><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>-->
							</div>
						</el-col>
					</el-form-item>
				</el-form>
			</div>
	
		</div>
		<!--条件查询结束-->
		<!--表格开始-->
		<div class="table">
			<el-table :data="tableData3" height="600" border style="width: 100%" highlight-current-row @header-click="headerc">
				<el-table-column type='index' prop="" label=" " width="50">
					<el-table-column prop="index" label="" width="auto">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="审核标志" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="单据编号" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" sortable label="日期" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="调拨类型" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="合作方" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="调出金额" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="调入金额" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="调拨差额" sortable width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="备注" sortable width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="打印次数" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="制单人" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="审核人" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="审核日期" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
	
				<el-table-column prop="name" label="提交状态" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="基本数量" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" sortable label="辅助数量" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="体积" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="重量" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="调出配送中心" width="150">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="调入配送中心" width="150">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="制单日期" sortable width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="装卸开始时间" sortable width="150">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="装卸结束时间" width="150">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="叉车工" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="仓管员" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="司机" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="车牌号" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="司机身份证号码" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" sortable label="司机电话" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="装卸量" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="搬运量" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="作业备注" width="120">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
				<el-table-column prop="address" label="调拨订单号" width="150">
					<el-table-column prop="name" label="" width="auto" class-name="mohucha">
					</el-table-column>
				</el-table-column>
	
			</el-table>
		</div>
		<!--表格完-->
	
	</div>
</template>

<script>
	export default {
		name: 'fymxbb',
		data() {
			return {
				pickerOptions: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				seachParams: {
					startDate: '',
					endDate: '',
					distributionCenter: null, //配送中心
					partner: null, //合作方
					park: null, //园区
					audit: '1', //审核
				},
				tableData3: [],
				backUpArr: '',
				distributionCenterList: [], //配送中心集合
				partnerList: '', //合作方集合
				parkList: '', //园区集合
				auditList: [ // 审核标志集合
					{
						value: '1',
						label: '全部'
					},
					{
						value: '2',
						label: '已审核'
					},
					{
						value: '3',
						label: '未审核'
					}
				]
			}
		},
		mounted: function() {
			let that = this;
			let date = new Date();
			//初始化日期
			this.seachParams.endDate = this.seachParams.startDate = date.format('yyyy-MM-dd');
			//获取配送中心集合
			this.getDistributionCenterList();
			//选项卡点击
			$(".boxtab a").click(function() {
				window.myEle.OpenTab.call(this, that);
			});
	
		},
		methods: {
			//模糊查询算法
			mohucha: function(val, index, $table) {
				var v = val;
				var $trArr = $("tr", $table);
				var trlen = $trArr.length;
				for (var i = 0; i < trlen; i++) {
					var $tr = $($trArr[i]);
					var iv = $($("td .cell", $tr)[index]).html().indexOf(v); //匹配是否含有
					if (iv <= -1) {
						$tr.hide();
					}
				}
			},
			//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加a"
			headerc: function(column, event) {
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if (!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".table")); //匹配行Th
				var $table = $($(".table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)
	
				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				if (val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					$("tr", $table).show(); //先全部展示出来
					$datath.each(function() {
						var $this = $(this);
						var thv = $("input", $this).val() || $("div.cell", $this).html(); //获取需要匹配th的值
						thv = thv.indexOf("<input") != -1 ? "" : thv;
						var idx = $this.index();
						if (thv != undefined && thv != "") {
							that.mohucha(thv, idx, $table);
						}
	
					});
	
				});
			},
			//查询
			seach() {
				let that = this;
				alert('等待接口中.....');
				return;
				this.ajax({
					type: 'Post',
					data: {
						datas: {},
						method: 'CPHH.PC.PDAModule.SecondPickPlan.GetList'
					},
					success: function(data) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.tableData3 = data; //单据
	
					}
				})
			},
			// 获取配送中心列表
			getDistributionCenterList() {
				let that = this;
				this.ajax({
					type: 'Post',
					data: {
						datas: {
							UserID: window.userid
						},
						method: 'CPHH.PC.BaseInfo.Stock.GetDCList'
					},
					success: function(data) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.distributionCenterList = data;
						that.seachParams.distributionCenter = data[0];
						that.distributionCenterChange();
					}
				});
			},
			/**
			 *   配送中心改变
			 *   联动改变合作方
			 **/
			distributionCenterChange() {
				let dicd = this.seachParams.distributionCenter.DCID;
				this.getPark(dicd);
				this.getPartner(dicd);
			},
			// 获取合作方
			getPartner(dicd) {
				let that = this;
				this.ajax({
					type: 'Post',
					data: {
						datas: {
							UserID: window.userid,
							DCID: dicd
						},
						method: 'CPHH.PC.BaseInfo.Partner.GetListInDC_All'
					},
					success: function(data) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.partnerList = data;
						that.seachParams.partner = data[0];
						that.backUpArr = data;
					}
				});
			},
			// 获取园区列表
			getPark(dicd) {
				let that = this;
				this.ajax({
					type: 'Post',
					data: {
						datas: {
							UserID: window.userid,
							DCID: dicd
						},
						method: 'CPHH.PC.BaseInfo.Stock.GetParkList_All'
					},
					success: function(data) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.parkList = data;
						that.seachParams.park = data[0];
					}
				});
			},
			//合作方过滤筛选算法
			getCode(val) {
				if (val) { //val存在
					this.partnerList = this.backUpArr.filter((item) => {
						if (!!~item.Code.indexOf(val) || !!~item.Name.indexOf(val)) {
							return true
						}
					})
				} else { //val为空时，还原数组
					this.partnerList = this.backUpArr
				}
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			}
		}
	
	}
</script>

<style>
	.offset-left {
		padding-left: 20px !important;
	}
</style>
