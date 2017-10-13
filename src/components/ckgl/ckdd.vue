<template>
	<div class="ckdd" style="position:relative">

		<form class="page2">
			<!--第二页-->
			<!--出库单-->
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
								<span>保存并审核</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<div class="boxtab" @click='cjkh_Click=true'>
							<div class="curbox fpry">
								<span>创建客户</span>
							</div>
						</div>
						<div class="boxtab">
							<div class="curbox ck">
								<span>选源单</span>
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

						<div class="boxtab ">
							<div class="curbox xyt ">
								<span>下一条</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>

					<li>
						<div class="boxtab">
							<div class="curbox djsz" @click="djt_Click=true">
								<span>单据设置</span>
							</div>
						</div>
						<div class="boxtab">
							<div class="curbox cz">
								<span>打印</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox yljh">
								<span>预览（拣货）</span>
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

			<!--分栏布局-->
			<!--标签页标题-->
			<h1 class="center">出库订单</h1>
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

							<el-select id="pszx" v-model="peisong" @change="pschange" placeholder="" class="fr blueborder" :disabled="pszx">
								<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>园区：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">

							<el-select id="yqlb" v-model="yuanqu" placeholder="" class="fr blueborder">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
						</div>

					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<p>订单级别：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<div>
								<el-input-number v-model="num" :min="1" :max="3"></el-input-number>
							</div>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>单据号：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">

							<div class="">
								<el-input placeholder="" disabled class="fr blueborder yuandanhao"></el-input>
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
							<el-input class="fr blueborder" placeholder="" icon="search" v-model="hzf" @click="hzf_Click = true" id='hzf' ref='hzf'>
							</el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>客户*：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-input class="fr blueborder" placeholder="" icon="search" v-model="kehu" @click="kh_Click = true"></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<p>出库类型：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-select v-model="cklx" placeholder="" class="input_width">
								<el-option v-for="item in cktypes" :key="item.date" :label="item.name" :value="item.date">
									<span style="float: left">{{ item.name }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">

							<p>订单日期：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<div class="">
								<el-date-picker id="ddrq" v-model="ddrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
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
							<el-select v-model="jhfs" placeholder="" class="input_width">
								<el-option v-for="item in jhfslist" :key="item.date" :label="item.label" :value="item.date">
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
							<el-select v-model="ysfs" placeholder="" class="input_width">
								<el-option v-for="item in ysfslist" :key="item.date" :label="item.label" :value="item.date">
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
							<p>需配送时间 ：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<div class="xpssj">
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
							<el-input v-model="shdz" placeholder="" icon="search" class='fr blueborder dizhiw' @click='dizhi_Click=true'></el-input>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>源单号：</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">

							<el-input v-model="ydh" placeholder=""></el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>收货人：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-input v-model="shr" placeholder=""></el-input>
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
							<el-input v-model="bz" placeholder="" class='fr blueborder dizhiw'></el-input>
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
								<el-option v-for="item in tjztlist" :key="item.date" :label="item.label" :value="item.date">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>联系电话</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-input v-model="lxdh" placeholder="" class='fr blueborder dizhiw'></el-input>
						</div>
					</el-col>
				</el-row>

				<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>自定义1</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-input v-model="zdy1" placeholder="" class='fr blueborder dizhiw'></el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content  ">
							<p>自定义2</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-input v-model="zdy2" placeholder="" class='fr blueborder dizhiw'></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<p>自定义3</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-input v-model="zdy3" placeholder="" class='fr blueborder dizhiw'></el-input>
						</div>
					</el-col>
					<el-col :xs="2" :sm="2" :md="2" :lg="2">
						<div class="grid-content  ">
							<p>自定义4</p>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<el-input v-model="zdy4" placeholder="" class='fr blueborder dizhiw'></el-input>
						</div>
					</el-col>
				</el-row>
				<div class='fuzhu'>
					<div class='ltz'></div>
					<el-row :gutter="10">

						<el-col :span="2">
							<div class="grid-content  ">
								<p>辅助功能：</p>
							</div>
						</el-col>
						<!--<el-col :span="2">
					<div class="grid-content  ">
						<div><el-button  type="primary" class='btnzz' @click="jgfs_Click=true">加工 </el-button> </div>
					</div>
				</el-col>-->
						<!--// offset='3'  -->
						<el-col :span="2">
							<div class="grid-content  ">
								<p>提货密码</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content  ">

								<el-input v-model="thPwd" type="password" placeholder="" class='fr blueborder dizhiw'></el-input>

							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content  ">
								<p>代收货款</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content  ">
								<el-input v-model="dshk" type="number" placeholder="" class='fr blueborder dizhiw'></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content  ">
								<p>是否提现</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content  ">
								<el-select v-model="shifou" placeholder="" class="input_width">
									<el-option v-for="item in shifoulist" :key="item.date" :label="item.label" :value="item.date">
										<span style="float: left">{{ item.label }}</span>
									</el-option>
								</el-select>
							</div>
						</el-col>
					</el-row>
				</div>

			</div>
			<!--功能选单部分结束-->

			<!--商品表格部分-->
			<el-table :data="splbs" border style="width:100%" id="spbg" class='spbg' min-height="300" max-height="310" @row-contextmenu="rowDelect" @cell-click="tbclick" @cell-dblclick="dbHandle" @current-change="dbchange">

				<el-table-column type="index" class="index" label="序号" width="100" fixed sortable>
				</el-table-column>

				<el-table-column prop="ProCode" label="商品编号" width="110" class-name="Code bianji" v-model='spbm'>
					<!-- 可编辑写法start -->
					<template scope="scope">
						<div v-show="!scope.row.ProCodeEdit">{{scope.row.ProCode}}</div>
						<el-input v-show="scope.row.ProCodeEdit" v-model="scope.row.ProCode" @keyup.native.enter="proCodeEnter(scope)" @blur="proCodeChange(scope)"></el-input>
					</template>
					<!-- 可编辑写法end -->
				</el-table-column>

				<el-table-column prop="" label="" width="24">
					<template scope="scope">
						<span class='blue_button' @click="lookShop"></span>
					</template>
				</el-table-column>

				<el-table-column prop="ProName" label="商品名称" width="280">
				</el-table-column>

				<el-table-column prop="Model" label="规格型号" width="144">
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

				<el-table-column prop="SalePrice" label="价格 " class-name="bianji" width="104" sortable>
					<!-- 可编辑写法start -->
					<template scope="scope">
						<div v-show="!scope.row.SalePriceEdit">{{scope.row.SalePrice}}</div>
						<el-input v-show="scope.row.SalePriceEdit" v-model="scope.row.SalePrice" @blur="priceChange(scope)"></el-input>
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

				<el-table-column prop="Total" label="金额" width="104">
				</el-table-column>

				<el-table-column prop="Desc" label="备注" class-name="bianji" width="104">
					<!-- 可编辑写法start -->
					<template scope="scope">
						<div v-show="!scope.row.DescEdit">{{scope.row.Desc}}</div>
						<el-input v-show="scope.row.DescEdit" v-model="scope.row.Desc" @blur="descChange(scope)"></el-input>
					</template>
					<!-- 可编辑写法end -->
				</el-table-column>

				<el-table-column prop="IsFree" label="赠品标志" width="104">
					<template scope="scope">
						<el-select v-model="splbs[scope.$index].IsFree" placeholder="请选择">
							<el-option v-for="item in shifouZP" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left">{{ item.label }}</span>
							</el-option>
						</el-select>
					</template>
				</el-table-column>

				<el-table-column prop="" label="是否指定批次" width="118">
				</el-table-column>

				<el-table-column prop="" label="明细源单号">
				</el-table-column>

			</el-table>

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
					<span style="color:red">{{ isNaN(getBasicAmount) ? 0.00 : getBasicAmount }}</span>
				</li>
				<li>
					<span>辅助合计</span>
				</li>
				<li>
					<span style="color:red">{{ isNaN(getAuxiliaryNumber) ? 0.00 : getAuxiliaryNumber}}</span>
				</li>
				<li>
					<span>金额合计</span>
				</li>
				<li>
					<span style="color:red">{{ isNaN(getTotalPrice) ? 0.00 : getTotalPrice}}</span>
				</li>
			</ul>
			<!--第二表单-->
			<div class='form3'>
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="部门" class='fl'>
						<el-select v-model="bumen" placeholder="" class='fr'>
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
						</el-input>
					</el-form-item>
				</el-form>
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="采购员" class='fl'>
						<el-input v-model="caigouyuan" placeholder="" class='fr'></el-input>
					</el-form-item>
					<el-form-item label="创建方式" class='fl'>
						<el-input v-model="chuangjianfs" disabled="" class='fr'></el-input>
					</el-form-item>
					<el-form-item label="制单人" class='fl'>
						<el-input v-model="zhidanren" disabled="" placeholder="" class='fr'></el-input>
					</el-form-item>
					<el-form-item label="审核人" class='fl'>
						<el-input v-model="shenheren" disabled="" placeholder="" class='fr'></el-input>
					</el-form-item>
					<el-form-item label="审核日期" class='fl'>
						<el-input v-model="shenherq" disabled="" placeholder="" class='fr'></el-input>
					</el-form-item>
				</el-form>
			</div>
			<div class='blue'>
				<el-button type="primary" class='fl'>就绪</el-button>
			</div>
			<!--下面全是dialog-->
			<el-dialog title="选择合作方" class="ckhzf" :visible.sync="hzf_Click" size="tiny" :before-close="handleClose">

				<hzftc :DCID="peisong" :hzfstr="hzf" @checkgethzfInfo="checkgethzfInfo" @gethzfInfo="gethzf" ref="hzftcvue">
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

			<el-dialog title="选择客户" class="kehu" :visible.sync="kh_Click" size="tiny" :before-close="handleClose">
				<khtc :InterID="hzfid" :khstr="kehu" @checkgetkehuInfo="checkgetkehuInfo" @getkehuInfo="getkehuInfo">
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

			<!-- 商品资料弹窗-->
			<el-dialog title="商品资料" class="spzl" :visible.sync="spzl_Click" size="tiny" :before-close="handleClose">
				<spzl :spstr="spStr" :DCID="peisong" :sphzf="hzf" :ParkID="yuanqu" :sphzfID="hzfid" @proSelect="setProduct">
					<div slot="close" @click="spzl_Click=false" class="boxtab">
						<div class="curbox tc">
							<span>退出</span>
						</div>
					</div>
				</spzl>
			</el-dialog>
			<!--商品资料弹窗 end -->

			<el-dialog title="多地址选择" class="dizhi" :visible.sync="dizhi_Click" size="tiny" :before-close="handleClose">
       			<dztc>

				</dztc>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dizhi_Click = false">取 消</el-button>
					<el-button type="primary" @click="checkgetdz(dzInfo)">确 定</el-button>
				</span>
			
			</el-dialog>
			<!--地址弹窗-->

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
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column type="selection" width="55">
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column label="编号" width="120">
								<template scope="scope">{{ scope.row.date }}</template>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="商品名称" width="120">
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="条形码" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="规格型号" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="仓位" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="基本单位" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="基本数量" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="打印数量" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
						</el-table>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="hzf_Click = false">取 消</el-button>
					<el-button type="primary" class='dialog_ok' @click.native="hzf_Click = false">确 定</el-button>
				</span>
			</el-dialog>
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
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column type="selection" width="55">
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column label="编号" width="120">
								<template scope="scope">{{ scope.row.date }}</template>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="商品名称" width="120">
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="条形码" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="规格型号" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="仓位" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="btn" label="订购数量" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="基本数量" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="基本单位" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="价格" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="辅助数量" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="辅助单位" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="辅助价格" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="数量描述" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="金额" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="批号" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="库存描述" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="赠品标志" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="备注" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="生产日期" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="有效期至" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="订单编号" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="明细原单号" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="address" label="订单序号" width='auto'>
								<el-table-column prop="name" label="" width="auto">
								</el-table-column>
							</el-table-column>

						</el-table>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="hzf_Click = false">取 消</el-button>
					<el-button type="primary" class='dialog_ok' @click.native="hzf_Click = false">确 定</el-button>
				</span>
			</el-dialog>
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
			<!--加工弹窗-->
			<!--成功-->
			<el-dialog style="text-align:center" title="系统提示" :visible.sync="bccg_Click" size="tiny" :before-close="handleClose" class='bccg'>
				<!-- <span slot="footer" class="dialog-footer"> -->
				<!-- 保存信息 -->
				<p>{{ this.bcxx }}</p>
				<el-button type="primary" style="" class='dialog_ok' @click.native="bccg_Click = false">确 定</el-button>
				<!-- </span> -->
			</el-dialog>
			<!--失败-->
			<el-dialog style="text-align:center" title="系统提示" :visible.sync="bcsb_Click" size="tiny" :before-close="handleClose" class='bcsb'>
				<!-- <span slot="footer" class="dialog-footer"> -->
				<!-- 保存信息 -->
				<p>{{ this.bcxx }}</p>
				<el-button type="primary" style="" class='dialog_ok' @click.native="bcsb_Click = false">确 定</el-button>
				<!-- </span> -->
			</el-dialog>
			<!--创建客户-->
			<el-dialog title="创建客户" :visible.sync="cjkh_Click">
				<cjkh></cjkh>

				<el-button @click="jgfs_Click = false">取 消</el-button>
				<el-button type="primary" @click="jgfs_Click = false">保存</el-button>
			</el-dialog>
			<!--创建客户弹窗-->
			<router-view class="view"></router-view>
		</form>
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
							<el-table-column prop="name" label="" width="auto">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="加工方式" width='120'>
							<el-table-column prop="name" label="" width="auto">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="规格" width='auto'>
							<el-table-column prop="name" label="" width="auto">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="单位" width='auto'>
							<el-table-column prop="name" label="" width="auto">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="价格" width='auto'>
							<el-table-column prop="name" label="" width="auto">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="备注" width='auto'>
							<el-table-column prop="name" label="" width="auto">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="制单人" width='auto'>
							<el-table-column prop="name" label="" width="auto">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="创建日期" width='auto'>
							<el-table-column prop="name" label="" width="auto">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="配送中心" width='auto'>
							<el-table-column prop="name" label="" width="auto">
							</el-table-column>
						</el-table-column>
						<el-table-column prop="address" label="服务类型" width='auto'>
							<el-table-column prop="name" label="" width="auto">
							</el-table-column>
						</el-table-column>
					</el-table>
				</div>

			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="tj_Click = false">取 消</el-button>
				<el-button type="primary" @click="tj_Click = false">确 定</el-button>
			</span>
		</el-dialog>

		<!-- 删除确认-->
		<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="sfsc_Click" size="tiny" :before-close="handleClose">
			<span class="dialog-footer">
				<p>是否删除当前行</p>
				<el-button type="primary" @click="isDelect">确 定</el-button>
				<el-button @click="sfsc_Click = false">取 消</el-button>
			</span>
		</el-dialog>
		<!--删除确认 end -->
	</div>
</template>
<style rel="stylesheet/stylus" scoped>
/*@import url("../../common/css/ckdd/rkgl_vue.css");
	@import url("../../common/css/ckdd/rkgl_vue.css") print;*/


/* @import url("../../../common/css/ckddlb/ckddlb.css") */

.blue {
	height: 40px;
	width: 100%;
	background: #cdecfd;
	margin-bottom: 15px;
}

.fl {
	float: left
}

.el-table-column {
	height: 50px;
}

.center {
	text-align: center;
}

.fr {
	float: right;
}

.el-row {
	margin-bottom: 2px;
	margin-left: -5px;
}

.el-row p {
	font-size: 16px;
	line-height: 36px;
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

.ckdd {
	width: 100%;
	height: 100%;
}

.ckdd .but-box {
	width: 100%;
	height: 40px;
	background: url(../../assets/img/gun.png) repeat-x;
}

.ckdd .boxtab {
	float: left;
	display: table;
	height: 40px;
	margin: 0 5px;
	line-height: 40px;
}

.ckdd div.boxtab:hover {
	background: #efeeee;
}

.ckdd div.but-box ul li {
	display: table;
	float: left;
}

.ckdd .curbox {
	display: table;
	margin: 0 auto;
	padding-left: 30px;
	/* background: url(../../../common/img/rk/baocun.png) no-repeat; */
	background-position: 5px 10px;
	cursor: pointer;
}

.ckdd .gun {
	height: 20px;
	width: 1px;
	background: #b7b7b7;
	display: block;
	float: right;
	margin-top: 10px;
}

.ckdd .bcsh {
	background: url(../../../common/img/rk/baocunshenhe.png) no-repeat;
	background-position: 5px 10px;
}

.ckdd .syt {
	background: url(../../../common/img/rk/shangyitiao.png) no-repeat;
	background-position: 5px 10px;
}

.ckdd .xyt {
	background: url(../../../common/img/rk/xiayitiao.png) no-repeat;
	background-position: 5px 10px;
	float: left;
}

.ckdd .xddyp {
	background: url(../../../common/img/rk/xuandingdanyp.png) no-repeat;
	background-position: 5px 10px;
}

.ckdd .xdd {
	background: url(../../../common/img/rk/xuandingdan.png) no-repeat;
	background-position: 5px 10px;
}

.ckdd .djsz {
	background: url(../../../common/img/rk/danjushezhi.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ckdd .cz {
	background: url(../../../common/img/rk/beizhu.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ckdd .cz .el-button {
	background: url(../../assets/img/gun.png) repeat-x;
}

.ckdd .yljh {
	background: url(../../../common/img/rk/yulan.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ckdd .ylck {
	background: url(../../../common/img/rk/yulan.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ckdd .ylck {
	background: url(../../../common/img/rk/yulan.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ckdd .sh {
	background: url(../../../common/img/rk/baocunshenhe.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ckdd .fs {
	background: url(../../../common/img/rk/fanshen.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ckdd .tc {
	background: url(../../../common/img/rk/tuichu.png) no-repeat;
	background-position: 5px 10px;
	background-size: 20px 20px;
}

.ckdd h1 {
	position: relative;
	height: 50px;
	font-size: 40px;
	font-weight: 900;
	color: #000;
	font-family: "微软雅黑";
}

.ckdd .bd {
	margin-top: 20px;
	width: 100%-20px;
	padding: 10px;
	color: #000;
}

.ckdd .bd .el-select {
	width: 100%;
}

.ckdd .bd .el-input {
	width: 100%;
}

.ckdd .el-row {
	padding-bottom: 10px;
}

.ckdd .spbg {
	margin-bottom: 20px;
}

.ckdd .fzbg {
	max-height: 80px;
	margin-bottom: 10px;
}

.ckdd .blue {
	height: 40px;
	width: 100%;
	position: relative;
}

.ckdd .blue .el-button {
	float: left;
	position: absolute;
	left: 10px;
	top: 3px;
}

.ckdd .form3 {
	width: 100%;
	height: 40px;
	margin-left: 20px;
}

.ckdd .ltz {
	height: 20px;
	width: 100%;
	background: #36B4FE;
	margin: 5px 0 5px 0;
	padding: 0 -20px 0 -20px;
}

.ckdd .el-dialog {
	width: auto;
	height: auto;
}

.ckdd .el-dialog .el-dialog__footer {
	height: auto;
	display: block;
	position: static;
}

.ckdd .grid-content .el-input input {
	border: 1px solid #6BC8FE
}

.ckdd .grid-content .el-input .el-input__inner {
	border: none
}

.ckdd .el-table th {
	border: 1px solid #6BC8FE;
	background: #cdecfd;
}

.ckdd .el-table th>.cell {
	background: #cdecfd;
}

.ckdd .el-table td {
	border: 1px solid #6BC8FE;
	background: #F8F8F8;
}

.fuz {
	margin-left: 0px!important;
}
.sitemore{
	width: 100%;
	height: 40px;
	background: #eee;
}
</style>
<script src="../../common/js_nicescroll/jquery.nicescroll.js"></script>
<!--<link rel="stylesheet" href="../../common/jsui/jquery-ui-1.12.1/jquery-ui.css">-->

<script>
import $ from 'jquery'
import hzftc from '../hzftc.vue';
import khtc from './khtc.vue';
import djttc from '../djtsztc.vue';
import dztc from '../tanchuanghz/ddzxz.vue';
import alert1 from '../alert1.vue'
import alert2 from '../alert2.vue';
import spzl from '../tanchuanghz/ckspnbtc.vue';

//	import xddyp from './xddyp.vue';
import cjkh from './cjkh.vue';
import jgfs from './jgfstc.vue';
import nicescroll from '../../../common/js_nicescroll/jquery.nicescroll.js'
//	import url('../../common/jsui/jquery-ui-1.12.1/jquery-ui.min.js')
import printArea from '../../../common/js/jsprint.js'
export default {
	components: {
		'hzftc': hzftc,
		'khtc': khtc,
		'djttc': djttc,
		'dztc': dztc,
		'alert1': alert1,
		'alert2': alert2,
		'spzl': spzl,
		'jgfs': jgfs,
		'cjkh': cjkh,
		//			'feixiang': feixiang,
	},

	data() {
		return {
			xddyp_Click: false,
			sfsc_Click: false, //商品行删除弹窗
			kehuid: 0, //存放客户id
			CusAreaID: '', //客户区域
			enterFlag: '', // 回车状态
			splbs: [{ // 存放商品
				ProCode: "",
			}],
			shifouZP: [{ //是否赠品
				value: '1',
				label: '赠品'
			}, {
				value: '0',
				label: '非赠品'
			}],
			ddrq: '', // 设置订单日期
			sfps: '', // 是否配送
			hzfid: "", //合作方id
			OutID: "", //保存出库单号
			spStr: '',
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
			cjkh_Click: false,
			spzl_Click: false,
			tj_Click: false,
			pszx: false,
			bcsb_Click: false, //保存失败
			bccg_Click: false, //保存成功
			bcxx: '', // 保存信息
			tableData3: [],
			cities: [],
			peisong: '',
			yuanqu: '',
			getBasicAmount: '0.00',
			getAuxiliaryNumber: '0.00',
			getTotalPrice: '0.00',
			spbm: '',
			cklx: '1', // 出库类型
			dzinfo: '', // 地址信息
			num: '3', // 订单级别
			InterID: '', // 合作方ID
			cygs: '', // 承运公司
			cygss: [], // 承运公司 列表
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
			ddbh: '',
			yqlist: [], // 园区列表
			hzfdizhi: '', // 合作方地址信息
			loading: false,
			hzf: '', // 合作方
			kehu: "", // 客户
			kehuInfo: [],
			thPwd: '', // 提货密码
			dshk: '0', // 代收货款
			shifou: '1', // 是否收现
			shifoulist: [{ // 是否收现list
				date: '1',
				label: '是'
			}, {
				date: '2',
				label: '否'
			}],
			yunfei: '', //运费
			chengyungs: '', // 承运公司
			shr: '', // 收货人
			lxdh: '', // 联系电话
			tjzt: '1', // 提交状态
			tjztlist: [{ // 提交状态list
				date: '0',
				label: '未提交'
			}, {
				date: '1',
				label: '提交'
			}],
			xpssj: '', // 需配送时间
			jhfs: "1", // 交货方式
			ysfs: "1", // 运输方式
			ysfslist: [{ // 运输方式
				date: '1',
				label: '陆运'
			}, {
				date: '2',
				label: '快递'
			}, {
				date: '3',
				label: '空运'
			}],
			ydh: "", // 源单号
			shdz: "", // 送货地址
			bz: "", // 备注
			zdy1: '', // 自定义 -1
			zdy2: '', // 自定义 -2
			zdy3: '', // 自定义 -3
			zdy4: '', // 自定义 -4
			caigouyuan: '', // 采购员
			chuangjianfs: '', // 创建方式
			zhidanren: isNaN(window.userName) ? window.userName : "", // 制单人
			shenheren: '', // 审核人
			shenherq: '', // 审核日期
			bumen: '', // 部门
			hzfInfo: [], // 合作方信息
			dzinfo: '', // 地址信息
			khqy: '', // 客户区域
			khqylist: [], // 客户区域列表
			jhfslist: [{ // 交货方式
				date: '1',
				label: '送货'
			}, {
				date: '2',
				label: '自提'
			}],
			cktypes: [{ // 出库方式
				date: '1',
				name: '正常出库'
			}, {
				date: '2',
				name: '出库退回'
			}],
			tableData: [],
			formInline: {
				user: '',
				region: ''
			}
		}
	},

	mounted: function() {
		var that = this;
		//订单日期的默认值
		var myDate = new Date();
		var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
		var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
		var d = myDate.getDate(); //获取当前日(1-31)
		var today = y + "-" + m + "-" + d;
		that.ddrq = today;
		that.getdclist();

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
			else if (that.enterFlag == "ProCode" && e.key == "Enter") {
				that.spzl_Click = true; //显示商品框
			}
			// 其它
			else {
			}

		});
	},

	methods: {
		// 编码输入回车事件
		proCodeEnter(scope) {
			this.spStr = scope.row.ProCode;
			console.log(1447, this.spStr);
		},
		//单元格双击，开启可编辑
		dbHandle: function(row, column, cell, event) {
			let key = column.property + 'Edit';
			this.$set(row, key, !row[key]);
			// console.log('row',row,column,cell,event);
			setTimeout(() => {
				try {
					$("input", cell).focus();
				} catch (err) {
				}
			}, 100);
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
			scope.row.Total = scope.row.Num * scope.row.SalePrice; //更新总价
			this.getTotal()
		},
		// 基本价格改变时
		priceChange(scope) {
			scope.row.SalePriceEdit = false;
			scope.row.SupPrice = scope.row.SalePrice * scope.row.ConvRate || 0;
			scope.row.Total = scope.row.Num * scope.row.SalePrice; //更新总价
			this.getTotal()
		},
		// 辅助数量改变时
		supNumChange(scope) {
			scope.row.SupNumEdit = false;
			// console.log(1435,scope)
			//  改变基本数量
			scope.row.Num = scope.row.SupNum * scope.row.ConvRate || 0;
			scope.row.Total = scope.row.Num * scope.row.SalePrice; //更新总价
			this.getTotal()
		},
		// 辅助价格改变时
		supPriceChange(scope) {
			// debugger;
			scope.row.SupPriceEdit = false;
			// 改变基本价格
			scope.row.SalePrice = scope.row.SupPrice / scope.row.ConvRate || 0;
			scope.row.Total = scope.row.Num * scope.row.SalePrice; //更新总价
			this.getTotal()
		},
		// 备注变时
		descChange(scope) {
			scope.row.DescEdit = false;
		},
		getTotal() {
			// 基本数量
			var basicAmount = 0;
			// 辅助数量
			var auxiliaryNumber = 0;
			// 价格合计
			var totalPrice = 0;

			for (let i = 0; i < this.splbs.length; i++) {
				basicAmount += parseInt(this.splbs[i].Num);
				auxiliaryNumber += parseFloat(this.splbs[i].SupNum);
				totalPrice += parseInt(this.splbs[i].Total);
			}
			this.getBasicAmount = basicAmount;
			this.getAuxiliaryNumber = auxiliaryNumber.toFixed(6);
			this.getTotalPrice = totalPrice;
		},
		// 设置商品
		setProduct(val) {
			var that = this;
			this.spzl_Click = false;
			// 商品添加, lookShopNum 表格单击的时候获取
			val.forEach((item, index) => {
				that.$set(item, 'Num', 0); // 基本数量初始值为0
				that.$set(item, 'SupNum', 0); //辅助数量初始值为0
				that.$set(item, 'SupPrice', item.ConvRate * item.SalePrice); //辅助价格初始值
				that.$set(item, 'Total', 0); //总价初始值为0
				this.$set(item, 'IsFree', "0"); // 基本数量初始值为0
				console.log(item, index);
				if (index == 0) { // 第一个商品总是替换
					that.splbs.splice(that.lookShopNum, 1, item);
				} else {
					that.splbs.push(item); // 第二个商品开始,直接添加
				}
				that.getTotal()
			});
		},
		setAddr: function(val) { // 取得地址信息
			this.Addr = val;
			console.log(val);
		},

		// 商品蓝色按钮点击事件
		lookShop() {
			if (!this.hzf) {
				this.bcxx = "请选择合作方";
				this.bcsb_Click = true; // 提示
				return
			} else {
				this.spzl_Click = true;
			}
		},
		// 表格的change事件
		dbchange(val) {
			// console.log(val);
		},

		//表格单击（可弹框）
		tbclick(row, column, cell, event) {
			var jname = column.property;
			var $cell = $(cell);
			var index = $cell.parent().index(); //行坐标
			this.lookShopNum = index;  //设置全局行坐标
			this.lookShopCell = cell;
			// console.log(jname);
			//单击表格增加颜色
			// debugger;
			if (jname == "SalePrice" || jname == "Num" || jname == "SupNum" || jname == "SupPrice" || jname == "Desc" || jname == "ProCode") {

				$(".danjixz").removeClass("danjixz"); // 把class移除,再添加

				$(cell).addClass("danjixz");
			}
			// 如果单击备注
			if (jname == "Desc") {
				// console.log('回车换行')
				this.enterFlag = "Desc";
			}
			// 如果单击编码
			if (jname == 'ProCode') {
				this.dbHandle(row, column, cell, event); //设置单元格input编辑
				this.enterFlag = "ProCode";
			}
		},
		click: function() { },
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

		// 获取配送中心数据
		getdclist() {
			let that = this;
			that.baseAjax("getdclist", {
				UserID: window.userid
			}, function(result) {
				var obj = eval('(' + result + ')');
				var datas = JSON.parse(obj.Datas);
				var data = datas.Data;
				// console.log(data);
				that.cities = data;
				that.peisong = data[0].DCID;
				that.getTransports();
			})
		},
		// 获取承运公司列表,当配送中心改变时,运行一下
		getTransports(dcid) {
			let that = this;
			that.baseAjax("transportcompanygetlist", {
				DCID: that.peisong | 17
			}, function(result) {
				var obj = eval('(' + result + ')');
				var datas = JSON.parse(obj.Datas);
				var data = datas.Data;
				that.cygss = data;
			})
		},
		// 当配送中心选择发生变化自动获取所在中心第一个园区,
		pschange() {
			var that = this;
			// 调用获取园区请求
			// console.log(this.peisong);
			that.getyuanqulist(that.peisong);
			that.getkehuquyulist(that.peisong);
			that.getTransports();
		},
		// 获取园区列表数据，并自己调取第一个数据
		getyuanqulist(psid) {
			var that = this;
			that.baseAjax("getparklist", {
				UserID: window.userid,
				DCID: psid
			}, function(result) {
				var obj = eval('(' + result + ')');
				var datas = JSON.parse(obj.Datas);
				var data = datas.Data;
				that.yqlist = data;
				that.yuanqu = data[0].ParkID;

			})
		},
		handleSelectionChange() {

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
		//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加  class-name="mohucha"
			headerc: function(column, event) {
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".table")); //匹配行Th
				var $table = $($(".table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					$("tr",$table).show();//先全部展示出来
					$datath.each(function() {
						var $this = $(this);
						 
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							that.mohucha(thv, idx, $table);
						}

					});

				});
			},
		// 保存订单
		saveOrder(isAudit) {
			let that = this;
			//商品数组
			var Pros = []; //商品数组
			for (let i = 0; i < that.splbs.length; i++) {
				var sp = that.splbs[i]; //当前商品
				//是否是赠品
				sp.IsFree == "非赠品" ? 0 : 1;
				//单个商品
				var Pro = {
					ProID: sp.ProID,
					Unit: sp.Unit,
					Num: sp.Num,
					Price: sp.SalePrice,
					SupPrice: sp.SupPrice,
					SupUnit: sp.SupUnit,
					SupNum: sp.SupNum,
					ConvRate: sp.ConvRate,
					TaxPrice: 0,
					TaxRate: 0,
					Batch: sp.Batch || "0",
					ProductionDate: sp.ProductionData || "",
					Desc: sp.Desc || "",
					IsFree: sp.IsFree,
					IsAppointBatch: sp.IsAppointBatch || 0,
				};
				Pros.push(Pro);
			}
			var jsons = {
				Type: that.cktypes[that.cklx - 1].name, // 出库类型
				OutDate: $('#ddrq input').val(),
				CusID: that.kehuid, //客户id
				SalesMan: userName,
				Delivery: that.jhfslist[that.jhfs - 1].label, //交货方式
				DeliveryAddress: that.shdz, //送货地址
				Remarks: "",
				ParID: that.hzfid,
				UserID: userid,
				UserName: userName,
				AmountCollected: that.dshk, //代收货款
				Property1: that.zdy1,
				Property2: that.zdy2,
				Property3: that.zdy3,
				Property4: that.zdy4,
				Property5: "",
				DeliveryPerson: that.kehu, //收货人
				DeliveryPassword: that.thPwd,//提货密码
				BillNum: "",
				IsJM: "1", // 是否收现
				SubmitStatus: that.tjzt, //提交状态
				Level: that.num, //级别
				DCID: that.peisong,
				DCName: $('#pszx input').val(),
				DeptID: 0,
				DeptName: "",
				Transport: that.ysfslist[that.ysfs - 1].label, //运输方式
				DeliveryCost: 20,
				CusAreaID: that.CusAreaID, //客户区域id
				CusAreaName: that.khqy, //客户区域
				NeedDeliveryDateMark: 1,
				NeedDeliveryDate: "2017-9-15",
				TransportCmpID: 0,
				TransportCmpName: '', //承运公司
				ProcessMark: 1,
				ContactMobile: that.lxdh,
				ParkID: that.yuanqu,
				ParkName: $('#yqlb input').val(),
				TranType: 1,
				Pro: Pros,
			}
			$.ajax({
				url: 'http://116.62.171.144/post/index.php',
				type: 'POST', //GET
				async: true, //或false,是否异步
				data: {
					datas: jsons,
					method: "CPHH.PC.OutModule.OutOrder.Add"
				},
				timeout: 5000, //超时时间
				success: function(data, textStatus, jqXHR) {
					var obj = eval('(' + data + ')');
					if (obj.StateCode == 100) {
           that.bccg_Click = true;
								that.bcxx = "保存成功"
						that.OutID = obj.Datas;
            // 保存成功后  清空内容
						that.kehu = '';
						that.shdz = '';
						that.bz = '';
						that.ydh = '';
						that.xpssj = '';
						that.dshk = '';
						that.splbs = [{
							"Code": ''
						}];
						that.getTotal();
						if (isAudit == "sh") {  //如果Flag为真,则审核
							that.auditOrder();
						}
					}  else {
						that.bcsb_Click = true;
						that.bcxx = "保存失败:" + obj.Message;
					}
				}
			})
		},
		// 需在保存成功后,再执行审核
		saveAndAudit() {
			// 传入true才会执行审核
			this.saveOrder("sh");
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
					method: "CPHH.PC.OutModule.OutOrder.Audit"
				},
				timeout: 5000, //超时时间
				success: function(data, textStatus, jqXHR) {
					console.log('审核', data)
				}
			})
		},
		// 反审核订单
		antiOrder() {
			var jsons = {
				UserID: userid,
				UserName: userName,
				OutID: this.OutID,
			}
			$.ajax({
				url: 'http://116.62.171.144/post/index.php',
				type: 'POST', //GET
				async: true, //或false,是否异步
				data: {
					datas: jsons,
					method: "CPHH.PC.OutModule.OutOrder.Anti"
				},
				timeout: 5000, //超时时间
				success: function(data, textStatus, jqXHR) {
					// console.log('反审核', data)
				}
			})
		},
		// 拿到合作方数据
		gethzf(val) {
			this.pszx = true; // 配送输入框禁用
			this.hzfid = val.InterID;
			this.hzf = val.Name;
			this.hzf_Click = false; //关闭弹出框
			// this.getgysInfo();
			// 请求供应商
			// this.getgyslist();
		},
		// 接受子组件的定义方法
		gethzfdizhi(data) {
			console.log(data);
			this.hzf = data.Name;
			this.InterID = data.InterID;
			this.hzfid = data.InterID;
			this.hzf_Click = false;
			this.pszx = true;
		},
		// 单选拿到数据，存入数组
		checkgethzfInfo(data) {
			this.hzfInfo = data;
		},
		// 确定调用这个方法，传入存储的数据
		checkgethzfdizhi(info) {
			console.log(info);
			this.hzf = info.Name;
			this.InterID = info.InterID;
			this.hzf_Click = false;
			this.pszx = true;
		},

		// 客户信息
		getkehuInfo(data) {
			console.log(data);
			this.kehu = data.Name;
			this.shdz = data.Address;
			this.shr = data.Contact;
			this.khqy = data.CusArea;
			this.lxdh = data.Mobile;
			this.CusAreaID = data.CusAreaID; //客户区域id
			// console.log('双击', data);
			this.kehuid = data.InterID; //客户id
			this.kh_Click = false;
		},
		// 单选
		checkgetkehuInfo(data) {
			// console.log('单选',data)
			this.kehuInfo = data;
			this.kehuid = data.InterID; //客户id
		},
		// 点击确定
		confirmkehuInfo(data) {
			this.kehu = data.Name;
			// console.log('单选', data)
			this.kehuid = data.InterID; //客户id
			this.shdz = data.Address;
			this.shr = data.Contact;
			this.khqy = data.CusArea;
			this.lxdh = data.Mobile;
			this.kh_Click = false;
		},

		checkgetdz(info) {
			console.log(info);
			this.hzf_Click = false;
		},
		handleClose(done) {
			this.$confirm('确认关闭？')
				.then(_ => {
					done();
				})
				.catch(_ => { })
		},
		checkgetdz() {

		},
		dizhiinfo() {

		},
		//此方法是退出的函数
		closetag: function() {
			$(".is-active .el-icon-close").click();
		}
	}
}
</script>