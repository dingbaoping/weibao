<template>
	<div class="ckd" style="position:relative">
		<form class="page2">

			<!-- 这里是导航部分  -->
			<div class="but-box">
				<ul>
					<li>
						<div class="boxtab" @click="saveOrder">
							<div class="curbox bc">
								<span>保存</span>
							</div>
						</div>
						<div class="boxtab">
							<div class="curbox bcsh" @click="saveAndAudit">
								<span>保存审核</span>
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
						<div class="boxtab">
							<div class="curbox xyt">
								<span>下一条</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<div class="boxtab" @click="xddyp_Click=true">
							<div class="curbox scdj">
								<span>选订单(预配)</span>
							</div>
						</div>
						<div class="boxtab" @click="ChooseSourceList_Click=true">
							<div class="curbox scdj">
								<span>选订单</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox djsz" @click='djt_Click=true'>
								<span>单据设置</span>
							</div>
						</div>
						<div class="boxtab">
							<div class="curbox cz">
								<el-dropdown split-button @click="handleClick">操作
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item @click='lrfyx_Click=true'>录入费用项</el-dropdown-item>
										<el-dropdown-item @click='ckqk_Click=true'>录入仓库作业情况</el-dropdown-item>

									</el-dropdown-menu>
								</el-dropdown>

							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox yl">
								<span>预览（拣货）</span>
							</div>
						</div>
						<div class="boxtab">
							<div class="curbox yl">
								<span>预览（仓库）</span>
							</div>
						</div>
						<div class="boxtab">
							<div class="curbox sh" @click="auditOrder">
								<span>审核</span>
							</div>
						</div>
						<div class="boxtab">
							<div class="curbox fs" @click="antiOrder">
								<span>反审</span>
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
						<span class="gun"></span>
					</li>
				</ul>
			</div>
			<!-- 导航部分 end -->

			<!--标签页标题-->
			<h1 class="center">出库单</h1>

			<!--功能选单部分-->
			<div class='bd'>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content  ">
							<p>配送中心*：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">

							<!-- 配送中心列表 -->
							<el-select v-model="psData.peisong" id="pszx" @change="pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
								<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>园区：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">

							<!-- 园区列表 -->
							<el-select v-model="psData.yuanqu" placeholder="" id="yqlb" :disabled="pszx" no-data-text="23132" class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<p>订单编号：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-input v-model="ddbh" placeholder="" class="input_width blueborder yuandanhao"></el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>出库单号：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">

							<div class="">
								<el-input v-model="ckdh" disabled placeholder="" class="input_width blueborder yuandanhao"></el-input>

							</div>

						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content  ">
							<p>合作方：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">

							<el-input class="input_width blueborder" :disabled="pszx" placeholder="" icon="search" v-model="hzf" @click="hzf_Click = true" id='hzf' ref='hzf'>

							</el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>客户* ：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-input class="input_width blueborder" placeholder="" icon="search" v-model="kehu" @click="kh_Click = true"></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<p>出库类型：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-select v-model="cklx" placeholder="" disabled class="input_width">
								<el-option v-for="item in cklxs" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>出库日期：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<div id="ckrq">
								<el-date-picker class="input_width" v-model="ckrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
								</el-date-picker>
							</div>

						</div>

					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content  ">
							<p>交货方式：</p>
						</div>

					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-select v-model="jhfs" placeholder="" class="input_width blueborder">
								<el-option v-for="item in jhfss" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>

					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>运输方式：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-select v-model="ysfs" placeholder="" class="input_width blueborder">
								<el-option v-for="item in ysfss" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>

					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<p>客户区域：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-select v-model="khqy" placeholder="" class="input_width">
								<el-option v-for="item in khqylist" :key="item.InterID" :label="item.Name" :value="item.InterID">
									<span style="float: left">{{ item.Name }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>需配送时间：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<div id="ckrq">
								<el-date-picker :disabled="!sfps" v-model="xpssj" type="datetime" placeholder="" align="right" :picker-options="pickerOptions1"> </el-date-picker>
							</div>
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content">
							<el-checkbox v-model="sfps"></el-checkbox>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content">
							<p>送货地址：</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<el-input v-model="shdz" disabled placeholder="" icon="search" class='input_width' @click='dizhi_Click=true'></el-input>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>源单号：</p>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">

							<el-input v-model="ydh" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>是否收现：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-select v-model="sfsx" placeholder="" class="input_width">
								<el-option v-for="item in sfsxs" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content">
							<p>备注：</p>

						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<el-input v-model="bz" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<p>提交状态：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-select v-model="tjzt" placeholder="" class="input_width">
								<el-option v-for="item in tjzts" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>费项</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<span class='feixiang' @click='fx_Click=true'></span>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content  ">
							<p>装卸队：</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content zxd-dw">
							<el-input v-model="zxdName" icon="caret-bottom" :on-icon-click="handleIconClick"></el-input>
							<div class="zxdtc" v-show="lock">
								<div class="headerTC" id="zxd">
									<el-input v-model="search"></el-input>
									<span @click="getSearch(search)"> 搜索</span>
								</div>
								<div>
									<el-table :data="zxdlist" border @row-click="getName" style="width:100%" height="300">
										<el-table-column prop="Name" label="名称" width="auto">
										</el-table-column>
										<el-table-column prop="Contact" label="负责人" width="auto">
										</el-table-column>
										<el-table-column prop="Mobile" label="联系电话" width="auto">
										</el-table-column>
									</el-table>
								</div>
							</div>
						</div>
					</el-col>

					<!-- <el-col :span="5">
					<div class="grid-content  ">
					</div>
				</el-col> -->
					<el-col :span="6">
						<div class="grid-content  ">
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>辅助功能：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<div>
								<span type="primary" class='btnzz' @click="jgfs_Click=true">加工 </span>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<!--功能选单部分结束-->

			<!--商品表格部分-->
			<el-table :data="splbs" height="218" border style="width:100%" class='spbg' @row-contextmenu="rowDelect" @cell-click="tbclick" @cell-dblclick="dbHandle">
				<el-table-column type="index" label="序号" width="70">
				</el-table-column>

				<el-table-column prop="ProCode" label="商品编号" width="110" class-name="Code bianji" v-model='spbm'>
					<!-- 可编辑写法start -->
					<template scope="scope">
						<div v-show="!scope.row.ProCodeEdit">{{scope.row.ProCode}}</div>
						<el-input v-show="scope.row.ProCodeEdit" v-model="scope.row.ProCode" @keyup.native.enter="proCodeEnter(scope)" @blur="proCodeChange(scope)"></el-input>
					</template>
					<!-- 可编辑写法end -->
				</el-table-column>

				<el-table-column prop="111" label="" width="24">
					<template scope="scope">
						<span class='blue_button' @click="lookShop"></span>
					</template>
				</el-table-column>

				<el-table-column prop="ProName" label="商品名称" width="auto">
				</el-table-column>

				<el-table-column prop="BarCode" label="条形码" width="auto">
				</el-table-column>

				<el-table-column prop="Model" label="规格型号" width="auto">
				</el-table-column>

				<el-table-column prop="StockName" class-name="bianji" label="仓位" width="auto">
				</el-table-column>

				<el-table-column prop="111" label="" width="24">
					<template scope="scope">
						<span class='blue_button' @click="lookCW"></span>
					</template>
				</el-table-column>

				<el-table-column prop="OrderNum" label="订购数量" width="104">
				</el-table-column>

				<el-table-column prop="Num" class-name="Num bianji" label="基本数量" width="104">
					<!-- 可编辑写法start -->
					<template scope="scope">
						<div v-show="!scope.row.NumEdit">{{scope.row.Num}}</div>
						<el-input v-show="scope.row.NumEdit" v-model="scope.row.Num" @blur="numChange(scope)"></el-input>
					</template>
					<!-- 可编辑写法end -->
				</el-table-column>

				<el-table-column prop="Unit" label="基本单位" width="104">
				</el-table-column>

				<el-table-column prop="Price" label="价格 " class-name="bianji" width="104" sortable>
					<!-- 可编辑写法start -->
					<template scope="scope">
						<div v-show="!scope.row.PriceEdit">{{scope.row.Price}}</div>
						<el-input v-show="scope.row.PriceEdit" v-model="scope.row.Price" @blur="priceChange(scope)"></el-input>
					</template>
					<!-- 可编辑写法end -->
				</el-table-column>

				<el-table-column prop="SupNum" class-name="SupNum bianji" label="辅助数量" width="104">
					<!-- 可编辑写法start -->
					<template scope="scope">
						<div v-show="!scope.row.SupNumEdit">{{scope.row.SupNum}}</div>
						<el-input v-show="scope.row.SupNumEdit" v-model="scope.row.SupNum" @blur="supNumChange(scope)"></el-input>
					</template>
					<!-- 可编辑写法end -->
				</el-table-column>

				<el-table-column prop="SupUnit" label="辅助单位" width="104">
				</el-table-column>

				<el-table-column prop="SupPrice" label="辅助价格" class-name="bianji" width="104">
					<!-- 可编辑写法start -->
					<template scope="scope">
						<div v-show="!scope.row.SupPriceEdit">{{scope.row.SupPrice}}</div>
						<el-input v-show="scope.row.SupPriceEdit" v-model="scope.row.SupPrice" @blur="supPriceChange(scope)"></el-input>
					</template>
					<!-- 可编辑写法end -->
				</el-table-column>

				<el-table-column prop="Account1" label="数量描述" class-name="bianji" width="104">
				</el-table-column>

				<el-table-column prop="Total" label="金额" width="104">
				</el-table-column>

				<el-table-column prop="Batch" label="批号" width="104">
				</el-table-column>

				<el-table-column prop="Account3" label="库存描述" class-name="bianji" width="104">
				</el-table-column>

				<el-table-column prop="IsFree" label="赠品标志" width="104" class-name="bianji">
					<template scope="scope">
						<el-select v-model="splbs[scope.$index].IsFree" placeholder="请选择">
							<el-option v-for="item in shifouZP" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left">{{ item.label }}</span>
							</el-option>
						</el-select>
					</template>
				</el-table-column>

				<el-table-column prop="Desc" label="备注" class-name="bianji" width="104">
					<!-- 可编辑写法start -->
					<template scope="scope">
						<div v-show="!scope.row.DescEdit">{{scope.row.Desc}}</div>
						<el-input v-show="scope.row.DescEdit" v-model="scope.row.Desc" @blur="descChange(scope)"></el-input>
					</template>
					<!-- 可编辑写法end -->
				</el-table-column>

				<el-table-column prop="ProductionDate" label="生产日期" class-name="bianji" width="104">
				</el-table-column>

				<el-table-column prop="EffectiveDate" label="有效期" class-name="bianji" width="104">
				</el-table-column>

				<el-table-column prop="OrderNum" label="订单编号" class-name="bianji" width="118">
				</el-table-column>

				<el-table-column prop="" label="明细源单号" class-name="bianji">
				</el-table-column>
			</el-table>
			<!-- 商品表格结束 -->

			<!--第二表格-->
			<ul class='heji_ul'>
				<li>
					<span>合计</span>
				</li>
				<li>
					<span></span>
				</li>
				<li>
					<span>数量合计</span>
				</li>
				<li>
					<span style="color: red">{{ isNaN(getBasicAmount) ? 0.00 : getBasicAmount }}</span>
				</li>
				<li>
					<span>辅助合计</span>
				</li>
				<li>
					<span style="color: red">{{ isNaN(getAuxiliaryNumber) ? 0.00 : getAuxiliaryNumber}}</span>
				</li>
				<li>
					<span>金额合计</span>
				</li>
				<li>
					<span style="color: red">{{ isNaN(getTotalPrice) ? 0.00 : getTotalPrice}}</span>
				</li>
			</ul>
			<!--第二表格end-->

			<!--第二表单-->
			<div class='form3'>
				<el-form :inline="true" class="demo-form-inline">
					<el-form-item label="部门" class='fl'>
						<el-select v-model="bumen" placeholder="" class='fr'>
							<el-option label="区域一" value="1"></el-option>
							<el-option label="区域二" value="2"></el-option>
						</el-select>
						</el-input>
					</el-form-item>
				</el-form>
				<el-form :inline="true" class="demo-form-inline">
					<el-form-item label="采购员" class='fl'>
						<el-input v-model="caigouyuan" placeholder="" class='fr'></el-input>
					</el-form-item>
					<el-form-item label="创建方式" class='fl'>
						<el-input v-model="chuangjianfs" disabled class='fr'></el-input>
					</el-form-item>
					<el-form-item label="制单人" class='fl'>
						<el-input v-model="zhidanren" disabled placeholder="" class='fr'></el-input>
					</el-form-item>
					<el-form-item label="审核人" class='fl'>
						<el-input disabled placeholder="" class='fr'></el-input>
					</el-form-item>
					<el-form-item label="审核日期" class='fl'>
						<el-input disabled placeholder="" class='fr'></el-input>
					</el-form-item>
				</el-form>
			</div>
			<!--第二表单 end-->

			<!-- 底部就绪的状态栏 -->
			<div class='blue'>
				<div type="primary" class='fl'>就绪</div>
			</div>
			<!-- 底部就绪的状态栏 end -->

			<!-- 删除确认-->
			<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="sfsc_Click" size="tiny" :before-close="handleClose">
				<span class="dialog-footer">
					<p>是否删除当前行</p>
					<el-button type="primary" @click="isDelect">确 定</el-button>
					<el-button @click="sfsc_Click = false">取 消</el-button>
				</span>
			</el-dialog>
			<!--删除确认 end -->

			<!-- 仓位数据弹窗-->
			<el-dialog title="仓位资料" class="cwzl" :visible.sync="cwzl_Click" size="tiny" :before-close="handleClose">
				<cwzl :yqID="psData.yuanqu" @sendCW="getCWInfo">
				</cwzl>
			</el-dialog>
			<!--仓位数据弹窗 end -->

			<!--合作方弹窗-->
			<el-dialog title="" class="hzftc" :visible.sync="hzf_Click" size="tiny" :before-close="handleClose">
				<hzftc :DCID="psData.peisong" :hzfstr="hzf" @gethzfInfo="gethzfdizhi" @checkgethzfInfo="checkgethzfInfo">
					<div slot="close" @click="hzf_Click=false" class="boxtab">
						<div class="curbox tc">
							<span>关闭</span>
						</div>
					</div>
				</hzftc>
				<span slot="footer" class="dialog-footer">
					<el-button @click="hzf_Click = false">取 消</el-button>
					<el-button type="primary" @click="checkgethzfdizhi(hzfInfo)">确 定</el-button>
				</span>
			</el-dialog>
			<!--合作方弹窗 end-->

			<!-- 商品资料弹窗-->
			<el-dialog title="商品资料" class="spzl" :visible.sync="spzl_Click" size="tiny">
				<spzl :spstr="spStr" :sphzf="hzf" :sphzfID="psData.hzfid" @proSelect="setProduct"></spzl>
			</el-dialog>
			<!--商品资料弹窗 end -->

			<!--客户弹窗-->
			<el-dialog title="" class="kehu" :visible.sync="kh_Click" size="tiny" :before-close="handleClose">
				<khtc :InterID="psData.hzfid" :khstr="kehu" @checkgetkehuInfo="checkgetkehuInfo" @getkehuInfo="getkehuInfo">
					<div slot="close" @click="kh_Click=false" class="boxtab">
						<div class="curbox tc">
							<span>关闭</span>
						</div>
					</div>
				</khtc>
				<span slot="footer" class="dialog-footer gys-footer" style=' top:480; left:730'>
					<el-button @click="kh_Click = false">取 消</el-button>
					<el-button type="primary" @click="confirmkehuInfo(kehuInfo)">确 定</el-button>
				</span>
			</el-dialog>
			<!--客户弹窗 end-->

			<!-- 单据设置 -->
			<el-dialog title="界面自定义" :visible.sync="djt_Click" size="tiny" :before-close="handleClose" class="abc">
				<!-- <!-- <djttc></djttc> -->
				<span slot="footer" class="dialog-footer"> -->
					<el-button @click="djt_Click = false">取 消</el-button>
					<el-button type="primary" @click="djt_Click = false">确 定</el-button>
				</span>
			</el-dialog>
			<!-- 单据设置 end -->

			<!--地址弹窗1-->
			<el-dialog title="" :visible.sync="alert1_Click" size="tiny" :before-close="handleClose" id='alert1'>
				<alert1></alert1>
				<span slot="footer" class="dialog-footer">
					<el-button @click="hzf_Click = false">取 消</el-button>
					<el-button type="primary" class='dialog_ok' @click.native="hzf_Click = false">确 定</el-button>
				</span>
			</el-dialog>
			<!--地址弹窗1 end-->

			<!--地址弹窗2-->
			<el-dialog title="" :visible.sync="alert2_Click" size="tiny" :before-close="handleClose" id='alert2'>
				<alert2></alert2>
				<span slot="footer" class="dialog-footer" style='visibility: hidden;height=0;'>
					<!--<el-button @click="hzf_Click = false">取 消</el-button>-->
					<el-button type="primary" class='dialog_ok' @click.native="hzf_Click = false">确 定</el-button>
				</span>
			</el-dialog>
			<!--地址弹窗2 end-->

			<!-- 打印弹窗 -->
			<el-dialog title="" :visible.sync="dytm_Click" size="tiny" :before-close="handleClose" id='alert1'>
				<div class='tm_body'>
					<nav>
						<button class='dy'>
							<i class='ico12'></i>打印</button>
						<button class='close'>
							<i class="ico13"></i>退出</button>
					</nav>
					<div class="table_dialog">
						<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%">

							<el-table-column prop="name" label="" width="55">
							</el-table-column>
							<el-table-column type="selection" width="55">
							</el-table-column>
							<el-table-column label="编号" width="120">
								<template scope="scope">{{ scope.row.date }}</template>
							</el-table-column>
							<el-table-column prop="name" label="商品名称" width="120">
							</el-table-column>
							<el-table-column prop="address" label="条形码" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="规格型号" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="仓位" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="基本单位" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="基本数量" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="打印数量" width='auto'>
							</el-table-column>
						</el-table>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="hzf_Click = false">取 消</el-button>
					<el-button type="primary" class='dialog_ok' @click.native="hzf_Click = false">确 定</el-button>
				</span>
			</el-dialog>
			<!-- 打印弹窗 end-->

			<!--操作弹框-->
			<el-dialog title="" :visible.sync="yulan_Click" size="tiny" :before-close="handleClose" id='alert1'>
				<div class='tm_body'>
					<nav>
						<button class='dy'>
							<i class='ico12'></i>打印</button>
						<button class='close'>
							<i class="ico13"></i>退出</button>
					</nav>
					<div class="table_dialog">
						<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%">
							<el-table-column prop="name" label="" width="55">
							</el-table-column>
							<el-table-column type="selection" width="55">
							</el-table-column>
							<el-table-column label="编号" width="120">
								<template scope="scope">{{ scope.row.date }}</template>
							</el-table-column>
							<el-table-column prop="name" label="商品名称" width="120">
							</el-table-column>
							<el-table-column prop="address" label="条形码" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="规格型号" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="仓位" width='auto'>
							</el-table-column>
							<el-table-column prop="btn" label="订购数量" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="基本数量" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="基本单位" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="价格" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="辅助数量" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="辅助单位" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="辅助价格" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="数量描述" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="金额" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="批号" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="库存描述" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="赠品标志" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="备注" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="生产日期" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="有效期至" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="订单编号" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="明细原单号" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="订单序号" width='auto'>
							</el-table-column>
						</el-table>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="hzf_Click = false">取 消</el-button>
					<el-button type="primary" class='dialog_ok' @click.native="hzf_Click = false">确 定</el-button>
				</span>
			</el-dialog>
			<!--操作弹框 end-->

			<!--选订单预配弹窗 -->
			<el-dialog title="选择预配订单" class="xddyp" :visible.sync="xddyp_Click" size="tiny" :before-close="handleClose">
				<xddyp :DataID="JSON.stringify(psData)" :rktype="cklxs[cklx - 1].label" @setStorageData="getYPStorageData">
					<div slot="close" @click="xddyp_Click=false" class="boxtab">
						<div class="curbox tc"><span>退出</span></div>
					</div>
				</xddyp>
			</el-dialog>
			<!--选订单预配弹窗 end-->

			<!--选订单弹窗-->
			<el-dialog title="选择出库订单" class="xdd" :visible.sync="ChooseSourceList_Click" size="tiny" v-if="ChooseSourceList_Click" :before-close="handleClose">
				<xdd :DataID="JSON.stringify(psData)" :rktype="cklxs[cklx - 1].label" @setStorageData="getStorageData">
					<div slot="close" @click="ChooseSourceList_Click=false" class="boxtab">
						<div class="curbox tc"><span>退出</span></div>
					</div>
				</xdd>
			</el-dialog>
			<!--选订单弹窗 end-->

			<!--加工弹窗-->
			<el-dialog title="加工方式" :visible.sync="jgfs_Click" size="tiny" :before-close="handleClose">
				<jgfs>
					<div slot="jgfsAdd" class="curbox tj" @click='tj_Click=true'>
						<span>添加</span>
					</div>
					<div slot="jgfsClose" class="curbox tc close" @click="jgfs_Click=false">
						<span>退出</span>
					</div>
				</jgfs>
				<span slot="footer" class="dialog-footer">
					<el-button @click="jgfs_Click = false">取 消</el-button>
					<el-button type="primary" @click="jgfs_Click = false">确 定</el-button>
				</span>
			</el-dialog>
			<!--加工弹窗 end-->

			<!-- 费项弹窗 -->
			<el-dialog title="费项" :visible.sync="fx_Click" size="tiny" :before-close="handleClose">
				<feixiang>
				</feixiang>
				<span slotfeixiang="footer" class="dialog-footer">
					<el-button @click="fx_Click = false">取 消</el-button>
				</span>
			</el-dialog>
			<!-- 费项弹窗 end -->

			<!-- 保存失败-->
			<el-dialog title="系统提示" id="isDelect" class="bcsb"  :visible.sync="bcsb_Click" size="tiny">
					<p style="color: red; text-align: center;">{{ infoHint }} </p>
					<el-button type="primary" style="display: block; margin: 0 auto;" class='dialog_ok' @click="bcsb_Click=false">确 定</el-button>
			
			</el-dialog>
			<!--保存失败 end -->

			<!--成功-->
			<el-dialog style="text-align:center" title="系统提示" :visible.sync="bccg_Click" size="tiny" :before-close="handleClose" class='bccg'>
				<!-- <span slot="footer" class="dialog-footer"> -->
				<!-- 保存信息 -->
				<p>{{ infoHint }}</p>
				<el-button type="primary" style="" class='dialog_ok' @click.native="bccg_Click = false">确 定</el-button>
				<!-- </span> -->
			</el-dialog>

			<!-- <router-view class="view"></router-view> -->
			<!-- 这个是什么弹窗?我也不懂 -->
			<el-dialog title="" :visible.sync="tj_Click" size="tiny" :before-close="handleClose">
				<div class='jg'>
					<div class="but-box">
						<ul>
							<li>
								<div class="boxtab">
									<div class="curbox xz">
										<span>选择</span>
									</div>
								</div>
								<div class="boxtab">
									<div class="curbox tc close" @click="tj_Click=false">
										<span>退出</span>
									</div>
								</div>
								<span class="gun"></span>
							</li>
						</ul>
					</div>
					<div class="tc_table">
						<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
							<el-table-column type="selection" width="55">
							</el-table-column>
							<el-table-column prop="address" label="加工方式" width='120'>
							</el-table-column>
							<el-table-column prop="address" label="规格" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="单位" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="价格" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="备注" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="制单人" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="创建日期" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="配送中心" width='auto'>
							</el-table-column>
							<el-table-column prop="address" label="服务类型" width='auto'>
							</el-table-column>
						</el-table>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="tj_Click = false">取 消</el-button>
					<el-button type="primary" @click="tj_Click = false">确 定</el-button>
				</span>
			</el-dialog>

		</form>
	</div>
</template>
<style rel="stylesheet/stylus" scoped>
.blue {
	height: 36px;
	width: 100%;
	background: #cdecfe;
	position: relative;
	margin-bottom: 10px;
	border: 1px solid #eee;
}

.blue .fl {
	position: absolute;
	left: 20px;
	top: 3px;
	height: 30px;
}

.ckd {
	width: 100%;
	height: 100%;
	padding-left: 5px;
}

.ckd .el-table {
	min-height: 163px;
	max-height: 360px;
}

.ckd .spbg {
	max-height: 700px;
}

.form3 {
	padding-left: 20px;
	height: 40px;
}

.fl {
	float: left
}

.el-table-column {
	height: 50px;
}

.ckd .el-date-editor.el-input {
	width: 100%;
}

.center {
	margin: 0 auto;
}

.fr {
	float: right;
}

.el-row {
	margin-bottom: 2px;
}

.el-row p {
	font-size: 16px;
	line-height: 25px;
	margin-left: 20px;
}

.el-col {
	border-radius: 4px;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
}

.grid-content p {
	line-height: 25px;
	margin-left: 20px;
}

.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}

.el-dialog {
	width: auto;
	height: auto;
}

.input_width {
	width: 100%;
	margin-top: 2px;
}

h1.center {
	color: #000;
	font-size: 30px;
	font-weight: 900;
	font-family: "微软雅黑";
	text-align: center;
}


/* 出库单 加工样式*/

.ckd .btnzz {
	display: inline-block;
	padding: 6px 15px;
	color: white;
	background-color: #20a0ff;
	border-color: #20a0ff;
	font-size: 14px;
	box-sizing: border-box;
	outline: 0;
	text-align: center;
	border-radius: 4px;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
}

.ckd .btnzz:hover {
	background: white;
	color: #20a0ff;
	font-size: 700;
	border: 1px solid #20a0ff
}

.feixiang {
	display: block;
	width: 25px;
	height: 25px;
	background: url(../../../common/img/rk/caiwuguanli.png);
	-webkit-background-size: 25px 25px;
	background-size: 25px 25px;
	border: none;
}


/* 装卸队样式 */

.ckd {
	width: 100%;
	height: 100%;
	padding-left: 5px;
}

.ckd .headerTC span:hover {
	background: white;
	color: #35b3fd;
}

.ckd .headerTC span {
	display: inline-block;
	width: 55px;
	border: 1px solid #35b3fd;
	background: #35b3fd;
	text-align: center;
	border-radius: 5px;
	color: white;
	cursor: pointer;
}

.ckd .headerTC {
	margin: 10px 0;
}

.ckd .zxd-dw {
	position: relative;
	width: 100%;
}

.ckd .zxdtc {
	position: absolute;
	top: 40px;
	border: 1px solid #35b3fd;
	padding: 10px;
	width: 100%;
	background: white;
	z-index: 1000;
}

/* 装卸队样式 end */

.abc {
	width: 114% !important;
	text-align: center;
}

.abc .all_table[data-v-788f9538] {
	margin: 0 auto;
	text-align: left;
}

.abc .all_table .title_table span {
	display: inline-block;
	border: 1px solid #35b3fd;
}

.headerTC .el-input {
	width: 88%;
}
</style>
<script src="../../common/js_nicescroll/jquery.nicescroll.js"></script>

<script>
import $ from 'jquery'
import hzftc from '../hzftc.vue';
import khtc from './khtc.vue';
import djttc from '../djtsztc.vue';
import dztc from '../dztc.vue';
import alert1 from '../alert1.vue'
import alert2 from '../alert2.vue';
import jgfs from './jgfstc.vue';
import nicescroll from '../../../common/js_nicescroll/jquery.nicescroll.js'
import printArea from '../../../common/js/jsprint.js'
import feixiang from './feixiang.vue'
import spzl from '../tanchuanghz/spzl'; // 这个是商品资料弹窗
import cwzl from '../tanchuanghz/cwzl.vue'; //仓位信息
import xdd from './xdd.vue';
import xddyp from './xddyp.vue';
export default {
	components: {
		'hzftc': hzftc,
		'khtc': khtc,
		'djttc': djttc,
		'dztc': dztc,
		'alert1': alert1,
		'alert2': alert2,
		'jgfs': jgfs,
		'feixiang': feixiang,
		'spzl': spzl, // 商品资料
		'cwzl': cwzl,//仓位资料
		'xdd': xdd,
		'xddyp': xddyp
	},

	data() {
		return {
			xddyp_Click: false,
			djt_Click: false,
			hzf_Click: false,
			kh_Click: false,
			dizhi_Click: false,
			alert1_Click: false,
			alert2_Click: false,
			dytm_Click: false,
			yulan_Click: false,
			fx_Click: false,
			jgfs_Click: false,
			zxdName: '', // 装卸队
			ChooseSourceList_Click: false, // 选订单弹窗
			tj_Click: false,
			spzl_Click: false,// 商品资料 
			sfsc_Click: false,// 是否删除弹窗
			cwzl_Click: false, //仓位选择
			bcsb_Click: false, //保存失败
			bccg_Click: false, //保存成功
			infoHint: '',// 提示信息
			sfsx: '1', // 是否收现
			
			sfps: false,
			psData: {
        peisong: '', // 配送ID
			  yuanqu: '', // 园区
				hzfid: '', //合作方id
        kehuid: '',
			},
			spStr: '',//编码的搜索字段
			delIndex: '', //存放当前要删除行坐标
			spbm: '',//商品编码
			lock: false, //装卸队是否显示
			zxdlist: [], // 装卸队
			zxdlistbf: [], // 装卸队北备份
			search: '',//
			CusAreaID: '', //客户区域id
			 //客户id	
			sfps: '', // 是否配送
			lookShopNum: '0', // 当前点击行的下标
			shifouZP: [{ //是否是赠品
				value: '1',
				label: '赠品'
			}, {
				value: '0',
				label: '非赠品'
			}],
			tree_data: [{  // 商品结构树
				Name: '所有商品',
				children: []
			}],
			defaultProps: {
				children: 'children',
				label: 'Name'
			},

			jhfss: [ // 交货方式
				{ value: '1', label: '送货' },
				{ value: '2', label: '自提' }
			],
			ysfss: [ // 运输方式
				{ value: '1', label: '陆运' },
				{ value: '2', label: '快递' },
				{ value: '3', label: '空运' }
			],
			tjzts: [ // 提交状态
				{ value: '0', label: '未提交' },
				{ value: '1', label: '提交' }
			],
			sfsxs: [ // 是否收现
				{ value: '1', label: '是' },
				{ value: '2', label: '否' }
			],
			cities: [],

			pszx: false, //配送中心禁选
			splbs: [
				{ ProName: '' }
			], //商品列表
			yqlist: [], // 园区列表
			hzfInfo: [], // 合作方信息
			kehuInfo: [], // 客户信息
			OutID: '', //保存单据编号
			pickerOptions0: {
				disabledDate(time) {
					return time.getTime() < Date.now() - 8.64e7;
				}
			},
			pickerOptions1: {
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
			ckrq: '', // 出库日期	
			xpssj: '', // 需配送时间
			ckdh: '', // 出库单号
			ddbh: '', // 订单编号
			cklx: '1', // 出库类型
			cklxs: [{ // 出库类型
				value: '1',
				label: '正常出库'
			}],
			ydh: '', // 源单号
			zdy1: '', // 自定义-1
			zdy2: '', // 自定义-2
			zdy3: '', // 自定义-3
			zdy4: '', // 自定义-4
			zxd: '', // 装卸队
			hzf: '', // 合作方
			kehu: "", // 客户 
			khqy: '', // 客户区域
			jhfs: "1", // 交货方式
			ysfs: "2", // 运输方式
			yqlist: [],
			caigouyuan: '', // 采购员
			chuangjianfs: '', // 创建方式
			zhidanren: window.userName || '', // 制单人
			shenheren: '', // 审核人
			shenherq: '', // 审核日期
			bumen: '1', // 部门
			getBasicAmount: '', // 辅助合计
		  getAuxiliaryNumber: '', // 数量合计
			getTotalPrice: '',  // 金额合计
			bz: "", // 备注
			shdz: '', // 送货地址
			tjzt: "1", // 提交状态
			khqylist: [],
			tableData: [{
				date: '1',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄',
				nomber: ''
			}],
			tableData3: [{
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}],

			formInline: '',
			WarehouseWork: [], // 职员分配比例
			WorkloadParam: [], // 仓库作业情况
			FeeTacticsParam: [{
		    FeeModuleID: 0,
				TacticsID: '',
				TacticsCode: '',
				TacticsName: ''
			}],  // 策略情况
			CostParam: {
				Pay1: 0,
				Pay2: 0,
				Pay3: 0,
				Pay4: 0,
				Pay5: 0,
				Pay6: 0,
				Pay7: 0,
				Pay8: 0,
				Pay9: 0,
				Pay10: 0,
				Receive1: 0,
				Receive2: 0,
				Receive3: 0,
				Receive4: 0,
				Receive5: 0,
				Receive6: 0,
				Receive7: 0,
				Receive8: 0,
				Receive9: 0,
				Receive10: 0
			}, // 费项 
		}
	},

	mounted: function() {
		var that = this;

		// 回车直接删除商品
		$(window).on("keydown", function(e) {
			// 1.如果是删除商品弹窗
			if (that.sfsc_Click && e.key == "Enter") {
				that.isDelect();
			}
			// 2.如果是备注
			else if (that.enterFlag == "Desc" && e.key == "Enter") {
				that.splbs[that.splbs.length - 1].ProName && that.splbs.push({ ProCode: '' });
			}
			// 3.如果是编码
			else if (that.enterFlag == "ProCode" && e.key == "Enter" && that.hzf != '') {
				that.spzl_Click = true; //显示商品框
			}
			// 其它
			else {
				return
			}
		});

		//订单日期的默认值
		var myDate = new Date();
		var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
		var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
		var d = myDate.getDate(); //获取当前日(1-31)
		var today = y + "-" + m + "-" + d;
		that.ckrq = today;

		that.getdclist();


	},
	methods: {
		// 拿到仓位资料
		getCWInfo(val) {
			this.cwzl_Click = false;
			this.splbs[this.lookShopNum].StockName = val.Name;
			this.splbs[this.lookShopNum].StockID = val.InterID;
		},
		//获取装卸队名字
		getName(val) {
			console.log(1288, val)
			// debugger
			this.zxdName = val.Name;
			this.zxd = val.InterID;
			this.lock = false;
		},
		// 获取装卸队数据
		getzxdInfo(psid) {
			var that = this;
			that.baseAjax("handlingteamgetlist", {
				DCID: psid
			}, function(data) {
				var obj = eval('(' + data + ')');
				var datas = JSON.parse(obj.Datas);
				var data = datas.Data;
				that.zxdlist = data;
				that.zxdlistbf = data;
				// console.log(data);
			})
		},
		// 装卸队搜索框
		getSearch(val) {
			// console.log(val)
			if (val) { //val存在
				this.zxdlist = this.zxdlistbf.filter((item) => {
					if (!!~item.Name.indexOf(val) || !!~item.Contact.indexOf(val) || !!~item.Mobile.indexOf(val)) {
						return true
					}
				})
			} else { //val为空时，还原数组
				this.zxdlist = this.zxdlistbf;
			}
		},
		// 装卸队的点击事件
		handleIconClick() {
			// console.log("1111");
			if (!this.lock) {
				this.lock = true;
			} else {
				this.lock = false;
			}

		},
		// 新增出库单
		saveOrder(isAudit) {
			var that = this;

		
			
			if(that.zxdID == '' || that.zxdName == '') {
          this.bcsb_Click = true;
          this.infoHint = "请选择装卸队,数据不合法";
      } else {
        var FeeTacticss = [];
        var WarehouseWorks = [];
	      var Pros = []; //商品数组
						// 计费策略
				var FeeTacticss = [{
					FeeModuleID: 0, //	费用ID	int	
					TacticsID: "", //	策略ID	string	
					TacticsCode: "",//	策略编号	string	
					TacticsName: "",//	策略名称	string	
				}];
        //仓库作业人员
				for(let i = 0; i < that.WarehouseWork.length; i++) {
					var WarehouseWorksParam = {
						StaffID: that.WarehouseWork[i].InterID,
						StaffName: that.WarehouseWork[i].Name,
						Column: '自定义4',
						FeePercent: that.WarehouseWork[i].Percentage
					};
					WarehouseWorks.push(WarehouseWorksParam);
				}
				
				for ( let i = 0; i < that.FeeTacticsParam.length; i++) {
					var FeeTacticsParams = {
						FeeModuleID: that.FeeTacticsParam[i].FeeModuleID || 0,
						TacticsID: that.FeeTacticsParam[i].TacticsID,
						TacticsCode: that.FeeTacticsParam[i].TacticsCode,
						TacticsName: that.FeeTacticsParam[i].TacticsName
					};
					FeeTacticss.push(FeeTacticsParams);
				}
				//商品数组
			
				for (let i = 0; i < that.splbs.length; i++) {
					var sp = that.splbs[i]; //当前商品
					//是否是赠品
					sp.IsFree == "非赠品" ? 0 : 1;
					//单个商品
					var Pro = {
						ProID: sp.ProID,//	
						Unit: sp.Unit,//	单位
						StockID: sp.StockID,//	仓位ID	int	
						Num: sp.Num,//	基本数量	decimal	
						Price: sp.Price,//	基本单价	decimal	
						SupPrice: sp.SupPrice,//	辅助价格	decimal	
						SupUnit: sp.SupUnit,//	辅助单位	string	
						SupNum: sp.SupNum,//	辅助数量	decimal	
						ConvRate: sp.ConvRate,//	换算率	decimal	
						TaxPrice: 0,//	折前单价	decimal	
						TaxRate: 0,//	折扣率	decimal	
						Desc: sp.Desc || "",//	备注	string	
						BodyProperty1: sp.BodyProperty1 || '',//	自定义1	string	
						BodyProperty2: sp.BodyProperty2 || '',//	自定义2	string	
						BodyProperty3: sp.BodyProperty3 || '',//	自定义3	string	
						BodyProperty4: sp.BodyProperty4 || '',//	自定义4	string	
						IsFree: sp.IsFree,//	是否赠品	int	0 非赠品 1 赠品
						Batch: sp.Batch,//	批次	string	
						Account1: sp.Account1,//	托盘	string	
						Account2: sp.Account1,//	库存锁定	string	
						Account3: sp.Account1,//	库存描述	string	
						Account4: sp.Account1,//	库存属性1	string	
						Account5: sp.Account1,//	库存属性2	string	
						ProductionDate: sp.ProductionData || "",//	生产日期	string	yyyy-MM-dd
						EffectiveDate: sp.EffectiveData || "",//	有效期至	string	yyyy-mm-dd
						OrderEntryID: sp.OrderEntryID || -1,//	订单行序号	int	非订单引用为-1
						OrderNum: sp.OrderNum || 0,//	订单数量	decimal	非订单引用为0
						OrderID: sp.OrderID || '',//	订单号	string	
					};
					Pros.push(Pro);
				}
         
          
				var jsons = {
					Type: that.cklxs[that.cklx - 1].label,//	类型
					OutDate: $('#ckrq input').val(), //	日期
					CusID: that.psData.kehuid, //	客户ID
					SalesMan: userName,//	业务员
					Delivery: that.jhfss[that.jhfs - 1].label, //	交货方式
					DeliveryAddress: that.shdz,//	交货地址
					Remarks: that.bz,//	备注
					ParID: that.psData.hzfid,//	合作方ID
					UserID: userid,//	用户ID
					UserName: userName,//	用户名
					OrderID: that.ddbh,//	订单号
					Property1: '',//	自定义1
					Property2: '',//	自定义2
					Property3: '',//	自定义3
					Property4: '',//	自定义4
					SubmitStatus: that.tjzt,//	提交状态
					BillNum: that.ydh,//	源单号
					IsJM: that.sfsx,//	是否收现
					PrepareSendNo: '',//	预配单号
					DCID: that.psData.peisong,//	配送中心ID
					DCName: $('#pszx input').val(),//	配送中心名称
					DeptID: 0,//	部门ID 
					DeptName: '',//	部门名称
					HandlingTeamID: that.zxd,//	装卸队ID
					HandlingTeamName: that.zxdName,//	装卸队名称
					Transport: that.ysfss[that.ysfs - 1].label,//	运输方式
					ParkID: that.psData.yuanqu,//	园区ID
					ParkName: $('#yqlb input').val(),//	园区名称
					CusAreaID: that.CusAreaID,//	客户区域ID
					CusAreaName: that.khqy,//	客户区域
					ProcessMark: 1,//	加工标志
					Pro: Pros, //	商品 List<Pro>
					FeeTactics: FeeTacticss,//	计费策略 List<FeeTactics>
					Cost: that.CostParam,//	费项 json
					WarehouseWork: WarehouseWorks,//	仓库人员作业 List<WarehouseWork>
					Workload: that.WorkloadParam,//	仓库作业情况 json
				}
				// debugger;
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.OutModule.Out.Add"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {

						var obj = eval('(' + data + ')');
						if (obj.StateCode == 100) {
							that.bccg_Click = true;
							that.infoHint = "保存成功";
							if (isAudit == true) {  //如果Flag为真,则审核,isAudit不传值时,会默认有鼠标事件
								that.auditOrder();
							}
						} else {
							that.bcsb_Click = true;
							that.infoHint = obj.Message;
						}
					}
				})
			}
		},
		// 需在保存成功后,再执行审核
		saveAndAudit() {
			// 传入true才会执行审核
			this.saveOrder(true);
		},
		// 审核订单
		auditOrder() {
			var that = this;
			var jsons = {
				UserID: userid,
				UserName: userName,
				OutID: that.OutID,
			}

			$.ajax({
				url: 'http://116.62.171.144/post/index.php',
				type: 'POST', //GET
				async: true, //或false,是否异步
				data: {
					datas: jsons,
					method: "CPHH.PC.OutModule.Out.Audit"
				},
				timeout: 5000, //超时时间
				success: function(data, textStatus, jqXHR) {
					var result = JSON.parse(data)
					if (result.StateCode == 100) {
						that.bcsb_Click = true;
						that.infoHint = "审核成功";
					} else if (result.StateCode == 104) {
						that.bcsb_Click = true;
						that.infoHint = "错误" + result.Message;
					}
				}
			})
		},
		// 反审核订单
		antiOrder() {
			var that = this;
			var jsons = {
				UserID: userid,
				UserName: userName,
				OutID: that.OutID,
			}
			$.ajax({
				url: 'http://116.62.171.144/post/index.php',
				type: 'POST', //GEj
				async: true, //或false,是否异步
				data: {
					datas: jsons,
					method: "CPHH.PC.OutModule.Out.Anti"
				},
				timeout: 5000, //超时时间
				success: function(data, textStatus, jqXHR) {
					var result = JSON.parse(data)
					console.log('反审核', result)
					if (result.StateCode == 100) {
						that.bcsb_Click = true;
						that.infoHint = "反审核成功";
					} else if (result.StateCode == 104) {
						that.bcsb_Click = true;
						that.infoHint = result.Message;
					}
				}
			})
		},
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
		// 是否删除
		isDelect() {
			this.sfsc_Click = false; // 关闭弹窗
			this.splbs.length > 1 && this.splbs.splice(this.delIndex, 1); // 删除数据
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
		getTotal() {
				console.log('总计')
				// 基本数量
				var basicAmount = 0.00;
				// 辅助数量
				var auxiliaryNumber = 0.00;
				// 价格合计
				var totalPrice = 0.00;

				for(let i = 0; i < this.splbs.length; i++) {
					basicAmount += parseInt(this.splbs[i].Num);
					auxiliaryNumber += parseFloat(this.splbs[i].SupNum);
					totalPrice += parseInt(this.splbs[i].Total);
				}
				this.getBasicAmount = basicAmount;
				this.getAuxiliaryNumber = auxiliaryNumber.toFixed(6);
				this.getTotalPrice = totalPrice.toFixed(2);
			},
		// 编码输入回车事件
		proCodeEnter(scope) {
			this.spStr = scope.row.ProCode;
			console.log(1447, this.spStr);
		},
		// 商品编码改变时
		proCodeChange(scope) {
			scope.row.ProCodeEdit = false;
			this.spStr = this.splbs[this.lookShopNum].ProCode; //设置搜索字段
		},
		// 基本数量改变时
		numChange(scope) {
			scope.row.NumEdit = false;
			// 更新辅助数量
			scope.row.SupNum = scope.row.Num / scope.row.ConvRate || 0;
			scope.row.Total = scope.row.Num * scope.row.Price || 0; //更新总价
			this.getTotal();
		},
		// 基本价格改变时
		priceChange(scope) {
			scope.row.PriceEdit = false;
			scope.row.SupPrice = scope.row.Price * scope.row.ConvRate || 0;
			scope.row.Total = scope.row.Num * scope.row.Price || 0; //更新总价
			this.getTotal();
		},
		// 辅助数量改变时
		supNumChange(scope) {
			scope.row.SupNumEdit = false;
			//  改变基本数量
			scope.row.Num = scope.row.SupNum * scope.row.ConvRate || 0;
			scope.row.Total = scope.row.Num * scope.row.Price || 0; //更新总价
			this.getTotal();
		},
		// 辅助价格改变时
		supPriceChange(scope) {
			// debugger;
			scope.row.SupPriceEdit = false;
			// 改变基本价格
			scope.row.Price = scope.row.SupPrice / scope.row.ConvRate || 0;
			scope.row.Total = scope.row.Num * scope.row.Price || 0; //更新总价
			this.getTotal();
		},
		// 备注变时
		descChange(scope) {
			scope.row.DescEdit = false;
		},
		// 取得商品资料后在这里设置
		setProduct(val) {
			var that = this;
			this.spzl_Click = false;
			// 商品添加, lookShopNum 表格单击的时候获取
			val.forEach((item, index) => {
				that.$set(item, 'Num', 0); // 基本数量初始值为0
				that.$set(item, 'SupNum', 0); //辅助数量初始值为0
				that.$set(item, 'SupPrice', item.ConvRate * item.Price); //辅助价格初始值
				that.$set(item, 'Total', 0); //总价初始值为0
				this.$set(item, 'IsFree', "0"); // 基本数量初始值为0
				// console.log(1197,item,index);
				if (index == 0) { // 第一个商品总是替换
					that.splbs.splice(that.lookShopNum, 1, item);
				} else {
					that.splbs.push(item); // 第二个商品开始,直接添加
				}
				that.getTotal();
			});
		},
		//商品栏的按钮点击事件
		lookShop() {
			if (!this.hzf) {
				this.infoHint = "请选择合作方";
				this.bcsb_Click = true; // 提示
				return
			} else {
				this.spzl_Click = true;
			}
		},
		submit () {
		},
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleClose(done) {
			this.$confirm('确认关闭？')
				.then(_ => {
					done();
				})
				.catch(_ => { });

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
				that.psData.peisong = data[0].DCID;
				that.cities = data;
				that.getzxdInfo(that.psData.peisong); //获取装卸队
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
				that.psData.yuanqu = data[0].ParkID;
				console.log(data);
			});

		},

		// 合作方数据
		// 接受子组件的定义方法
		gethzfdizhi(data) {
			this.pszx = true;
			console.log(data);
			this.hzf = data.Name;
			this.psData.hzfid = data.InterID;
			this.hzf_Click = false;
		},
		// 单选拿到数据，存入数组
		checkgethzfInfo(data) {
			this.hzfInfo = data;
		},
		// 确定调用这个方法，传入存储的数据
		checkgethzfdizhi(info) {
			this.pszx = true;
			console.log(info);
			this.hzf = info.Name;
			this.psData.hzfid = info.InterID;
			this.hzf_Click = false;
		},

		// 获取客户区域列表
		getkehuquyulist(psid) {
			var that = this;
			that.baseAjax("dictionarygetlistindc", {
				DCID: psid,
				Type: '客户区域'
			}, function(result) {
				var obj = eval('(' + result + ')');
				var datas = JSON.parse(obj.Datas);
				var data = datas.Data;
				that.khqylist = data;
			})
		},

		// 客户信息
		getkehuInfo(data) {
			console.log(data);
			this.kehu = data.Name;
			this.shdz = data.Address;
			// this.shr = data.Contact;
			this.khqy = data.CusArea;
			// this.lxdh = data.Mobile;
			this.CusAreaID = data.CusAreaID; //客户区域id
			this.psData.kehuid = data.InterID; //客户id
			this.kh_Click = false;
		},
		// 单选
		checkgetkehuInfo(data) {
			this.kehuInfo = data;
		},
		// 点击确定
		confirmkehuInfo(data) {
			this.kehu = data.Name;
			this.shdz = data.Address;
			// 	this.shr = data.Contact;
			this.khqy = data.CusArea;
			// 	this.lxdh = data.Mobile;
			this.kh_Click = false;
		},

		// 配送与园区数据绑定
		pschange: function() {
			var that = this;
			that.getyuanqulist(that.psData.peisong);
			that.getkehuquyulist(that.psData.peisong);
		},
		//此方法是退出的函数
		closetag: function() {
			$(".is-active .el-icon-close").click();
		},
		handleSelectionChange() {

		},
		handleClick() {

		},
		onSubmit() {
			console.log('submit!');
		},
		 // 仓位点击前判断是否有物料
		lookCW () {
			var that = this;
				if( that.splbs[that.lookShopNum].ProName) {
					that.cwzl_Click = true;
				} else {
					that.bcsb_Click = true;
					that.infoHint = "请选择物料";
				}
			
		},
		getStorageData (data) {
      var that= this;
      that.ddbh = data;
			that.ChooseSourceList_Click = false;
			// 接口没写 待续......
		},
		getYPStorageData (data) {
      var that= this;
      that.ddbh = data;
			that.xddyp_Click = false;
			// 接口没写 待续......
		}
	},

}
</script>