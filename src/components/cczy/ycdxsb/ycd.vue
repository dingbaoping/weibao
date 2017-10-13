<template>
	<!-- 移仓单-新增 -->
	<div class="ycd">
		<!-- 这里是导航栏部分结束 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox bc" @click="saveBill">
							<span>保存</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox ck">
							<span>选订单</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox syt">
							<span>上一条</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox xyt">
							<span>下一条</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox djsz">
							<span>单据设置</span>
						</div>
					</div>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox cz">
							<!-- <span>操作</span> -->
							<el-dropdown trigger="click">
								<span class="el-dropdown-link">
	  									操作<i class="el-icon-caret-bottom el-icon--right"></i>
	  								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>录入仓库作业情况</el-dropdown-item>
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
		<div class="chaxun">
			<!--第一行-->
			<el-row :gutter="10" type="flex">
				<el-col :span="2">
					<div class="grid-content">
						<p>配送中心：</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content">
						<!-- 配送中心列表 -->
						<el-select v-model="formData.distributionCenter" filterable placeholder="请选择" class=" blueborder input_width" value-key="DCID" @change="distributionCenterChange">
							<el-option v-for="item in distributionCenterList" :key="item.DCID" :label="item.DCName" :value="item">
								<span style="float: left">{{ item.DCName }}</span>
							</el-option>
						</el-select>
						<!-- 配送中心列表结束 -->
					</div>
				</el-col>
				<el-col :span="10">
					&nbsp;
				</el-col>
				<el-col :span="2">
					<div class="grid-content  ">
						<p>调出园区：</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content  ">
						<!-- 园区列表 -->
						<el-select class=" blueborder input_width" v-model="formData.parkOut" value-key="ParkID" placeholder="请选择" no-data-text="无数据">
							<el-option v-for="item in parkList" :key="item.ParkID" :label="item.ParkName" :value="item">
								<span style="float: left">{{ item.ParkName }}</span>
							</el-option>
						</el-select>
						<!-- 园区列表结束 -->
					</div>
				</el-col>
			</el-row>
			<!--第二行-->
			<el-row :gutter="10" type="flex">
				<el-col :offset="8" :span="9">
					<h1 class="bt">移仓单</h1>
				</el-col>
				<el-col :span="2">
					<div class="grid-content  ">
						<p>调入园区：</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content  ">
						<!-- 园区列表 -->
						<el-select class=" blueborder input_width" v-model="formData.parkIn" value-key="ParkID" placeholder="请选择" no-data-text="无数据">
							<el-option v-for="item in parkList" :key="item.ParkID" :label="item.ParkName" :value="item">
								<span style="float: left">{{ item.ParkName }}</span>
							</el-option>
						</el-select>
						<!-- 园区列表结束 -->
					</div>
				</el-col>
			</el-row>
			<!--第三行-->
			<el-form class="demo-ruleForm el-row">
				<el-form-item required>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>合作方（*）：</p>
						</div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content  one">
							<!--下拉式合作方-->
							<el-select class='hzf  input_width' v-model="formData.partner" value-key="InterID" filterable :filter-method="getCode" placeholder="请选择" no-data-text="无数据">
								<el-option v-for="item in partnerList" :key="item.InterID" :label="item.Name" :value="item">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
								</el-option>
							</el-select>
							<!--下拉式合作方结束-->
						</div>
					</el-col>
					<el-col :offset="1" :span="2">
						<div class="grid-content">
							<p>日期（*）：</p>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content two">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="formData.date" format="yyyy年MM月dd日" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</div>
					</el-col>
					<el-col :offset="1" :span="2">
						<div class="grid-content three">
							<p>调拨类型（*）：</p>
						</div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content three">
							<el-select v-model="dbnx" placeholder="" class=" blueborder input_width">
								<el-option v-for="item in dbnxs" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
									<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
				</el-form-item>
			</el-form>
			<!--第四行-->
			<el-row :gutter="10" type="flex">
				<el-col :span="2">
					<div class="grid-content  ">
						<p>备注：</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content  ">
						<el-input class=" input_width " size="small" placeholder="" v-model="djbh">
						</el-input>
					</div>
				</el-col>
			</el-row>
			<!--第五行-->
			<el-row :gutter="10" type="flex">
				<el-col :span="2">
					<div class="grid-content  ">
						<p>提交状态：</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content  ">
						<!--提交状态开始-->
						<el-select v-model="tjzt" placeholder="" class="input_width">
							<el-option v-for="item in tjzts" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left">{{ item.label }}</span>
							</el-option>
						</el-select>
						<!--提交状态结束-->
					</div>
				</el-col>
				<el-col :offset="1" :span="2">
					<div class="grid-content  ">
						<p>调拨订单号：</p>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content  ">
						<el-input disabled class=" input_width " size="small" placeholder="" v-model="djbh">
						</el-input>
					</div>
				</el-col>
			</el-row>
		</div>
		<!--条件查询结束-->
		<div class='table'>
			<div class='button_row'>
				<!--一报表-->
				<el-tabs type="border-card">
					<div id='table_dj'>
						<el-table :data="ddlbs" height="250" border style="width: 100%" v-loading.body="loading" element-loading-text="玩命加载中"
						@row-contextmenu="rowDelect" @cell-click="tbclick" @cell-dblclick="dbHandle" >
							<el-table-column type='selection' prop="" label="选定框" width="50">
							
							</el-table-column>
							<el-table-column prop="name" label="商品编号" width="110" class-name="bianji">
								<!-- 可编辑写法start -->
								<template scope="scope">
									<div v-show="!scope.row.ProCodeEdit">{{scope.row.ProCode}}</div>
									<el-input v-show="scope.row.ProCodeEdit" v-model="scope.row.ProCode" @keyup.native.enter="proCodeEnter(scope)" @blur="proCodeChange(scope)"></el-input>
								</template>
							</el-table-column>
							<el-table-column prop="111" label="" width="24">
								<template scope="scope">
									<span class='blue_button' @click="hzf?spzl_Click=true:spzl_Click=false"></span>
								</template>
							</el-table-column>
							<el-table-column prop="name" label="商品名称" width="160">
							</el-table-column>
							<el-table-column prop="name" label="条形码" width="140">
							</el-table-column>
							<el-table-column prop="name" label="规格型号" width="110">
							</el-table-column>
							<el-table-column prop="address" label="调出仓位" width="110">
							</el-table-column>
							<el-table-column prop="address" label="调入仓位" width="110" class-name="bianji">
								<template scope="scope">
									<div v-show="!scope.row.ProCodeEdit">{{scope.row.ProCode}}</div>
									<el-input v-show="scope.row.ProCodeEdit" v-model="scope.row.ProCode" @keyup.native.enter="proCodeEnter(scope)" @blur="proCodeChange(scope)"></el-input>
								</template>
							</el-table-column>
							<el-table-column prop="address" label="" width="24">
								<template scope="scope">
									<span class='blue_button' @click="hzf?spzl_Click=true:spzl_Click=false"></span>
								</template>
							</el-table-column>
							<!--仓位的按钮部分-->
							<el-table-column prop="address" label="辅助单位" width="110">
							</el-table-column>
							<el-table-column prop="address" label="辅助数量" width="110" class-name="bianji">
								<template scope="scope">
									<div v-show="!scope.row.ProCodeEdit">{{scope.row.ProCode}}</div>
									<el-input v-show="scope.row.ProCodeEdit" v-model="scope.row.ProCode" @keyup.native.enter="proCodeEnter(scope)" @blur="proCodeChange(scope)"></el-input>
								</template>
							</el-table-column>
							<el-table-column prop="address" label="基本单位" width="110">
							</el-table-column>
							<el-table-column prop="address" label="基本数量" width="110" class-name="bianji">
								<template scope="scope">
									<div v-show="!scope.row.ProCodeEdit">{{scope.row.ProCode}}</div>
									<el-input v-show="scope.row.ProCodeEdit" v-model="scope.row.ProCode" @keyup.native.enter="proCodeEnter(scope)" @blur="proCodeChange(scope)"></el-input>
								</template>
							</el-table-column>
							<el-table-column prop="address" label="调出单价" width="110">
							</el-table-column>
							<el-table-column prop="address" label="调出金额" width="110">
							</el-table-column>
							<el-table-column prop="address" label="调拨差额" width="110">
							</el-table-column>
							<el-table-column prop="address" label="备注" width="110" class-name="bianji">
								<template scope="scope">
									<div v-show="!scope.row.ProCodeEdit">{{scope.row.ProCode}}</div>
									<el-input v-show="scope.row.ProCodeEdit" v-model="scope.row.ProCode" @keyup.native.enter="proCodeEnter(scope)" @blur="proCodeChange(scope)"></el-input>
								</template>
							</el-table-column>
							<el-table-column prop="address" label="批次" width="110">
							</el-table-column>
							<el-table-column prop="address" label="库存描述" width="110" class-name="bianji">
								<template scope="scope">
									<div v-show="!scope.row.ProCodeEdit">{{scope.row.ProCode}}</div>
									<el-input v-show="scope.row.ProCodeEdit" v-model="scope.row.ProCode" @keyup.native.enter="proCodeEnter(scope)" @blur="proCodeChange(scope)"></el-input>
								</template>
							</el-table-column>
							<el-table-column prop="address" label="生产日期" width="110">
							</el-table-column>
							<el-table-column prop="address" label="有效期至" width="200">
							</el-table-column>
	
						</el-table>
					</div>
				</el-tabs>
			</div>
		</div>
		<!--table完-->
		<!--table完-->
		<ul class='heji_ul'>
			<li>
				<span>合计</span>
			</li>
			<li>
				<span>0.00</span>
			</li>
			<li>
				<span>辅助合计</span>
			</li>
			<li>
				<span>0.00</span>
			</li>
			<li>
				<span>数量合计</span>
			</li>
			<li>
				<span>0.00</span>
			</li>
			<li>
				<span>金额合计</span>
			</li>
			<li>
				<span>0.00</span>
			</li>
		</ul>
		<div class='form-2'>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="经办人：" class='fl'>
					<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
				</el-form-item>
				<el-form-item label="制单人：" class='fl'>
					<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
				</el-form-item>
				<el-form-item label="审核人：" class='fl'>
					<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
				</el-form-item>
				<el-form-item label="审核日期：" class='fl'>
					<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
				</el-form-item>
				<el-form-item label="部门：" class='fl'>
					<el-select v-model="formInline.region" placeholder="" class='fr input_width button_w'>
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</div>
	<!-- 商品资料弹窗-->
      <el-dialog title="商品资料" class="spzl" :visible.sync="spzl_Click" size="tiny" :before-close="handleClose">
        <!-- <spzl :spstr="spStr" :sphzf="hzf" :sphzfID="psData.hzfid"  @proSelect="setProduct"> -->
					<spzl>
          <div slot="close" @click="state.spzl_Click=false" class="boxtab">
            <div class="curbox tc">
              <span>退出</span>
            </div>
          </div>
        </spzl>
      </el-dialog>
      <!--商品资料弹窗 end -->
	</div>
</template>

<script>
	import spzl from "../sydxsb/spzl.vue";
	export default {
		components: {
			"spzl": spzl,
		},
		data() {
			return {
				formData: {
					date: '',
					distributionCenter: null, //配送中心
					partner: null, //合作方
					parkOut: null, //园区调出
					parkIn: null //园区调入
				},
				distributionCenterList: [], //配送中心集合
				partnerList: '', //合作方集合
				parkList: '', //园区集合


				formInline:{
					user:''
				},
				tableData4: [],
				loading: false,
				pszx: false,
				hzf: '',
				backUpArr: '',
				options: '',
				peisong: '',
				yqlist: '',
				yuanqu: '',
				bumen: '',
				tjzt: '2',
				dbnx: '1',
				ddlbs: [{Code:''}],
				djbh: '',
				cities: [],
				tableData3: [],
				input7: '',
				tjzts: [ // 提交状态
					{
						value: '1',
						label: '未提交'
					},
					{
						value: '2',
						label: '提交'
					}
				],
				dbnxs: [ // 提交状态
					{
						value: '1',
						label: '同类调拨'
					},
					{
						value: '2',
						label: '异类调拨'
					}
				]
			}
		},
	
		mounted: function() {
			var that = this;
			let date = new Date();
			//初始化日期
			this.formData.date = date.format('yyyy-MM-dd');
			that.getDistributionCenterList();
	
		},
		methods: {
			//表格单击（可弹框）
			tbclick(row, column, cell, event) {
				var jname = column.property;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				this.lookShopNum = index;  //设置全局行坐标
				console.log(index)
				this.lookShopCell = cell;
				// console.log(jname);
				//单击表格增加颜色
				this.enterFlag = jname;
				// debugger;
				if (jname == "SalePrice" || jname == "Num" || jname == "SupNum" || jname == "SupPrice" || jname == "Desc" || jname == "ProCode") {

					$(".danjixz").removeClass("danjixz"); // 把class移除,再添加

					$(cell).addClass("danjixz");
				}
				// 如果单击备注
				if (jname == "Desc") {
				}
				// 如果单击编码
				if (jname == 'ProCode') {
					this.dbHandle(row, column, cell, event); //设置单元格input编辑
				}
			},
			// 行删除
			rowDelect(row, event) {
				event.preventDefault() //阻止默认事件
				this.sfsc_Click = true;
				this.delIndex = $(event.target).parents('tr').index(); //获取行坐标
			},
			//单元格双击，开启可编辑
			dbHandle: function(row, column, cell, event) {
				let key = column.property + 'Edit';
				this.$set(row, key, !row[key]);
				setTimeout(() => {
					try {
						$("input", cell).focus();
					} catch (err) {
					}
				}, 100);
			},
			//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加  class-name="mohucha"
			headerc(column, event) {
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
						console.log(thv);
						if (thv != undefined && thv != "") {
							that.mohucha(thv, idx, $table);
						}
	
					});
	
				});
			},
			saveBill() {
	
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
						that.formData.distributionCenter = data[0];
						that.distributionCenterChange();
					}
				});
			},
			/**
			 *   配送中心改变
			 *   联动改变合作方
			 **/
			distributionCenterChange() {
				let dicd = this.formData.distributionCenter.DCID;
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
						method: 'CPHH.PC.BaseInfo.Partner.GetListInDC'
					},
					success: function(data) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.partnerList = data;
						that.formData.partner = data[0];
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
						method: 'CPHH.PC.BaseInfo.Stock.GetParkList'
					},
					success: function(data) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.parkList = data;
						that.formData.park = data[0];
					}
				});
			},
			getCode(val) {
				if (val) { //val存在
					this.options = this.backUpArr.filter((item) => {
						if (!!~item.Name.indexOf(val) || !!~item.Code.indexOf(val)) {
							return true
						}
					})
				} else { //val为空时，还原数组
					this.options = this.backUpArr
				}
			},
			//此方法是退出的函数
			closetag() {
				$(".is-active .el-icon-close").click();
			}
		}
	
	}
</script>

<style scoped>
	.boxtab {
		color: #48576a !important;
	}
	
	.ycd .el-row {
		padding-right: 20px;
	}
	
	.ycd .el-row p {
		padding-left: 20px;
	}
	
	.ycd .bt {
		text-align: center;
		font-size: 18px;
		color: #000;
		font-weight: 700;
	}
	
	.form-2 {
		padding-bottom: 55px;
	}
	
	.one {
		padding-right: 5px;
	}
	
	.two {
		padding: 0 5px;
	}
	
	.three {
		padding-left: 8px;
	}
</style>
