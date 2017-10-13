<template>
	<!--HTML代码写这个标签里面-->
	<div class="rkgl" style="position:relative">
		<form class="page2">
			<!--第二页-->
			<!--<div class=>-->
			<!-- element步骤组件 -->
			<div class="select_box">

				<!-- 这里是导航栏部分 -->
				<div class="but-box">
					<ul>
						<li>
							<div class="boxtab" @click="saveOrder">
								<div class="curbox bc">
									<span>保存并审核</span>
								</div>
							</div>
						</li>
						<li>
							<div class="boxtab" @click="getzyInfo">
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
							<span class="gun"></span>
						</li>
						<li>
							<div class="boxtab">
								<div class="curbox djsz" @click='djt_Click=true'>
									<span>单据设置</span>
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
							<div class="boxtab" @click="getTotal">
								<div class="curbox yl">
									<span>预览</span>
								</div>
							</div>
						</li>

						<li>
							<div class="boxtab">
								<div class="curbox cz">
									<!-- <span>操作</span> -->
									<el-dropdown split-button @command="handleClick">
										操作
										<el-dropdown-menu slot="dropdown">
											<el-dropdown-item command="lrfy">录入其他费用项</el-dropdown-item>
											<el-dropdown-item command="sptm">打印商品条码</el-dropdown-item>
											<el-dropdown-item command="ckzy">录入仓库作业情况</el-dropdown-item>
											<el-dropdown-item command="tccw">批量填充仓位</el-dropdown-item>
										</el-dropdown-menu>
									</el-dropdown>
								</div>
							</div>
							<span class="gun"></span>
						</li>

						<li>
							<div class="boxtab">
								<div class="curbox sh" @click="auditOrder">
									<span >审核</span>
								</div>
							</div>
						</li>
						<li>
							<div class="boxtab">
								<div class="curbox fs" @click="antiOrder">
									<span>反审</span>
								</div>
							</div>
							<span class="gun"></span>
						</li>
						<li>
							<div class="boxtab">
								<slot name="bqytc"></slot>

							</div>
							<span class="gun"></span>
						</li>
					</ul>
				</div>
				<!-- 这里是导航栏部分结束 -->

				<!--分栏布局-->
				<!--标签页标题-->	
					<h1 class="center">入库单修改
						<span class="already">
							<span v-if="judgeTJ" class="ytj">已提交</span>
							<span v-if="judgeSH" class="ysh">已审核</span>
						</span>
						
					</h1>
			
		
				<!--功能选单部分-->
         
				<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>配送中心*：</p>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<!-- 配送中心列表 -->
							<el-select v-model="peisong" disabled @change="pschange" filterable placeholder="" class=" blueborder input_width">
								<el-option id="pszx" v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
						</div>
					</el-col>
					<el-col :xs="2" :sm="2" :md="2" :lg="2">
						<div class="grid-content  ">
							<p>园区*：</p>

						</div>
						<!--<div class="grid-content  ">

						</div>-->
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="23132" class=" blueborder input_width">
								<el-option id="yqlb" v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
							<!-- 园区列表 -->
						</div>
						<!--<div class="grid-content  ">

						</div>-->
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>单据号：</p>

						</div>
					</el-col>
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-input v-model="djh" disabled placeholder="" class=" blueborder yuandanhao input_width"></el-input>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>订单编号：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-input v-model="ddbh" disabled placeholder="" class=" blueborder yuandanhao input_width"></el-input>
						</div>
					</el-col>
					
				</el-row>
				<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p class='hzfvalue'>合作方*：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-input class=" blueborder input_width" disabled id="hzfEnter" placeholder="" icon="search" v-model="hzf" @click="hzf_Click = true">
							</el-input>
						</div>
					</el-col>
					<el-col :xs="2" :sm="2" :md="2" :lg="2">
						<div class="grid-content  ">
							<p>供应商*：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">

							<el-input class=" blueborder input_width" placeholder="" disabled icon="search" v-model="gys" @click="gys_Click = true"></el-input>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>入库类型*：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-select placeholder="" disabled v-model="rklx" class=" blueborder input_width">
								<el-option v-for="item in rklxs" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>订单日期*：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<!-- 订单日期 -->
							<div class=" blueborder input_width">
								<el-date-picker v-model="ddrq" disabled id="ddrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1" class='input_width'>
								</el-date-picker>
							</div>
							<!-- 订单日期结束 -->
						</div>
					</el-col>
					
				</el-row>
				<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>交货方式：</p>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-select v-model="jhfs" placeholder="" class=" blueborder input_width">
								<el-option v-for="item in jhfss" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>

					</el-col>
					<el-col :xs="2" :sm="2" :md="2" :lg="2">
						<div class="grid-content  ">
							<p>源单号：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">

							<el-input v-model="ydh" disabled placeholder="" class=" input_width"></el-input>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>运输方式：</p>

						</div>

					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">

							<el-select v-model="ysfs" placeholder="" class=" blueborder input_width">
								<el-option v-for="item in ysfss" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>

					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">

							<p>预计到货时间：</p>

						</div>

					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<!-- 预计到货时间 -->
							<div class="block  blueborder input_width">
								<el-date-picker id="dhsj" v-model="dhsj" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1" class='input_width'>
								</el-date-picker>
							</div>
							<!-- 预计到货时间结束 -->
						</div>

					</el-col>
					
				</el-row>

				<el-row :gutter="10" type="flex">
						<el-col :span="3">
					<div class="grid-content">
						<p>装卸队 ：</p>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content zxd-dw">
						<el-input v-model="zxdName" icon="caret-bottom" :on-icon-click="handleIconClick"></el-input>
						<div class="zxdtc" v-show="lock">
							<div class="headerTC">
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
          <el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>提交状态：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-select v-model="tjzt" placeholder="" class=" input_width">
								<el-option v-for="item in tjzts" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content  ">
							<p class="left">费项:</p>
							
						</div>
				  </el-col>
					<el-col :span="3">
						<div class="grid-content" >
							<div class='feixiang'  @click='fx_Click=true'>
							
						 </div>
							
						</div>
				  </el-col>
					
				</el-row>
				<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p class="duliw">备注：</p>
						</div>
					</el-col>
					<el-col :xs="8" :sm="8" :md="8" :lg="8">
						<div class="grid-content  ">
							<el-input v-model="bz" placeholder="" class='fr blueborder dizhi input_width'></el-input>
						</div>
					</el-col>
				</el-row>
			</div>
			<!--功能选单部分结束-->

			<!--商品表格部分-->
			<el-table :data="splbs" border  style="width:100%" id="spbg" class='spbg' min-height="300" max-height="310" v-loading.body="loading" @row-click="getRow" @row-contextmenu="rowDelect" @cell-click="tbclick" @cell-dblclick="dbrow" @current-change="dbchange" element-loading-text="玩命加载中">
				<el-table-column prop="index" type="index" class="index" label="序号" width="100" fixed sortable>
				</el-table-column>
				<el-table-column prop="Code" label="商品编码" width="110" class-name="Code bianji" v-model='spbm'>
				</el-table-column>
				<el-table-column prop="" label="" width="24">
					<template scope="scope">
						<span class='blue_button' @click="lookShop"></span>

					</template>
				</el-table-column>
				<el-table-column prop="Name" label="商品名称" width="280">
				</el-table-column>
				<el-table-column prop="BarCode" label="条形码" width="auto">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="Model" label="规格型号" width="144">
				</el-table-column>
				<el-table-column prop="StockName" label="仓位" class-name="bianji StockName" width="auto">
				</el-table-column>
				<el-table-column prop="" label="" width="24">
					<template scope="scope">
						<span class='blue_button' @click="cwzl_Click=true"></span>
					</template>
				</el-table-column>
				<el-table-column prop="" label="订购数量" width="auto">
				</el-table-column>
				<el-table-column prop="Num" class-name="Num bianji" label="基本数量" width="104">
				</el-table-column>
				<el-table-column prop="Unit" label="基本单位" width="104">
				</el-table-column>
				<el-table-column prop="Price" label="价格 " class-name="bianji" width="104" sortable>
				</el-table-column>
				<el-table-column prop="SupNum" class-name="SupNum bianji" label="辅助数量" width="104">
				</el-table-column>
				<el-table-column prop="SupUnit" label="辅助单位" width="104">
				</el-table-column>
				<el-table-column prop="SupPrice" label="辅助价格" class-name="bianji" width="104">
				</el-table-column>
				<el-table-column prop="QtyDes" label="数量描述" width="auto">
				</el-table-column>
				<el-table-column prop="Batch" label="批号" width="auto">
				</el-table-column>
				<el-table-column prop="ProductionDate" label="生产日期" width="auto">
				</el-table-column>
				<el-table-column prop="EffectiveDate" label="有效期至" width="auto">
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
				<el-table-column prop="Total" label="合计" width="118">
				</el-table-column>
				<el-table-column prop="Account3" label="库存描述" width="118">
				</el-table-column>
				<el-table-column prop="Desc" label="备注" class-name="Remarks bianji">
				</el-table-column>
				<el-table-column prop="OrderPNO" label="订单单号" width="auto">
				</el-table-column>
				<el-table-column prop="ShelfLifeManage" label="保质期" width="auto">
				</el-table-column>
				
			</el-table>
			<!--第二表格-->
			<ul class='heji_ul'>
				<li><span>合计</span></li>
				<li><span></span></li>
				<li><span>数量合计</span></li>
				<li><span style="color:red">{{ isNaN(getBasicAmount) ? 0 : getBasicAmount }}</span></li>
				<li><span>辅助合计</span></li>
				<li><span style="color:red">{{ isNaN(getAuxiliaryNumber) ? 0 : getAuxiliaryNumber}}</span></li>
				<li><span>金额合计</span></li>
				<li><span style="color:red">{{ isNaN(getTotalPrice) ? 0 : getTotalPrice}}</span></li>
			</ul>
			<!--第二表单-->
			<div class='form-2'>
				<el-form :inline="true" v-model="formInline" class="demo-form-inline">
					<el-form-item label="部门" class='fl'>
						<el-select v-model="bumen" placeholder="" class='fr input_width button_w'>
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<el-form :inline="true" v-model="formInline" class="demo-form-inline">
					<el-form-item label="采购员" class='fl'>
						<el-input v-model="caigouyuan" placeholder="" class='fr input_width button_w'></el-input>
					</el-form-item>
					<el-form-item label="制单人" class='fl'>
						<el-input v-model="zhidanren" placeholder="" disabled class='fr input_width button_w'></el-input>
					</el-form-item>
					<el-form-item label="审核人" class='fl'>
						<el-input v-model="shenheren" placeholder="" disabled class='fr input_width button_w'></el-input>
					</el-form-item>
					<el-form-item label="审核日期" class='fl'>
						<el-input v-model="shenherq" placeholder="" disabled class='fr input_width button_w'></el-input>
					</el-form-item>
					<el-form-item label="创建方式" class='fl'>
						<el-input v-model="CreationMethod" placeholder="" disabled class='fr input_width button_w'></el-input>
					</el-form-item>
				</el-form>
			</div>
			<div class="blue">
				<div class='fl status-alert'>就绪</div>
			</div>
			<!--下面全是dialog-->

			<el-dialog title="选择合作方" class="hzf" :visible.sync="hzf_Click" size="tiny" :before-close="handleClose">
				<hzftc :DCID="peisong" :hzfstr="hzf" @checkgethzfInfo="checkgethzfInfo" @gethzfInfo="gethzf" ref="hzftcvue">
					<div slot="close" @click="hzf_Click=false" class="boxtab">
						<div class="curbox tc"><span>关闭</span></div>
					</div>
				</hzftc>
				<span slot="footer" class="dialog-footer">
					<el-button @click="hzf_Click = false">取 消</el-button>
					<el-button type="primary"  @click="checkgethzfdizhi(hzfInfo)">确 定</el-button>
				</span>
			</el-dialog>
			<!--合作方弹窗 end-->
			<!--供应商-->
			<el-dialog title="选择供应商" class="gys" :visible.sync="gys_Click" size="tiny" :before-close="handleClose">
				<gystc :ParID="hzfid" :gysstr="gys" @getgysInfo="getgys" @checkgetgysInfo="checkgetgysInfo">
					<div slot="close" @click="gys_Click=false" class="boxtab">
						<div class="curbox tc"><span>关闭</span></div>
					</div>
				</gystc>

				<span slot="footer" class="dialog-footer gys-footer" style=' top:480; left:730'>
					<!--<el-button @click="hzf_Click = false">取 消</el-button>-->
					<el-button @click="gys_Click = false">取 消</el-button>
					<el-button type="primary" @click="checkgetgysdizhi(gysInfo)">确 定</el-button>
				</span>
			</el-dialog>
			<!--供应商弹窗 end-->

			<el-dialog title="" :visible.sync="djt_Click" size="tiny" :before-close="handleClose">
				<djttc></djttc>
				<span slot="footer" class="dialog-footer">
					<el-button @click="djt_Click = false">取 消</el-button>
					<el-button type="primary" @click="djt_Click = false">确 定</el-button>
				</span>
			</el-dialog>
			<!--单据设置 end-->

			<!--地址弹窗-->
			<el-dialog title="选择地址" class="dizhi" :visible.sync="dizhi_Click" size="tiny" :before-close="handleClose">
				<dztc @getAddr="setAddr"></dztc>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dizhi_Click = false">取 消</el-button>
					<el-button type="primary"  @click="addrClick" >确 定</el-button>
				</span>
			</el-dialog>
			<!--地址弹窗 end -->
			
			<el-dialog title="费项" :visible.sync="fx_Click" class="fx-info" size="tiny" :before-close="handleClose">
				<feixiang :saveInfo="JSON.stringify(saveData[0])" @sendfxData="getfxInfo" @sendclData="getclInfo" @sendzyfpData="getclerkInfo">
				</feixiang>
				<span slot="footer" class="dialog-footer">
    			<el-button @click="fx_Click = false">取 消</el-button>
   				 
 			 </span>
			</el-dialog>
			<!-- 费项弹窗 -->

			<!-- 仓位数据弹窗-->
			<el-dialog title="仓位资料" class="cwzl" :visible.sync="cwzl_Click" size="tiny" :before-close="handleClose">
				<cwzl :yqID="yuanqu" @sendCW="getCWInfo">

				</cwzl>
			</el-dialog>
			<!--仓位数据弹窗 end -->
      
				<!-- 仓库作业-->
			<el-dialog title="仓库作业情况"  :visible.sync="ckzy_Click" size="tiny" :before-close="handleclose">
        <ckzy :orderInfo="JSON.stringify(saveData[0])" @receiveData="getCKData">
				   
				</ckzy>		
				<span class="dialog-footer">
						<el-button  class="ckzyBtn2" @click="ckzy_Click = false">取 消</el-button>
				  </span>			
			</el-dialog>
			<!--仓库作业 end -->

			<!-- 删除确认-->
			<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="sfsc_Click" size="tiny" :before-close="handleclose">
				<span class="dialog-footer">
				<p>是否删除当前行</p>
				<el-button type="primary"  @click="isDelect" >确 定</el-button>
				<el-button @click="sfsc_Click = false">取 消</el-button>
				</span>
			</el-dialog>
			<!--删除确认 end -->
      
				<!-- 保存失败-->
				<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="bcsb_Click" size="tiny">
					<span class="dialog-footer">
					<p style="color: red;">{{ infoHint }} </p>
						<el-button type="primary" style="margin-right: 0;"  @click="bcsb_Click=false" >确 定</el-button>
					</span>
				</el-dialog>
	<!--保存失败 end -->
			<!-- 商品资料弹窗-->
			<el-dialog title="商品资料" class="spzl" :visible.sync="spzl_Click" size="tiny" :before-close="handleClose">
				<spzl :spstr="spStr" :sphzf="hzf" :sphzfID="hzfid" @proSelect="setProduct">
					<div slot="close" @click="spzl_Click=false" class="boxtab">
						<div class="curbox tc"><span>退出</span></div>
					</div>
				</spzl>
			</el-dialog>
			<!--商品资料弹窗 end -->

      <!-- 打印商品条码-->
			<el-dialog title="打印商品条码" class="spzl" :visible.sync="sptm_Click" size="tiny" :before-close="handleClose">
				<sptm :spInfo="JSON.stringify(saveData[0])">
					<div slot="close" @click="sptm_Click=false" class="boxtab">
						<div class="curbox tc"><span>退出</span></div>
					</div>
				</sptm>
			</el-dialog>
			<!--打印商品条码 end -->

			<!--成功-->
			<el-dialog style="text-align:center" title="系统提示" :visible.sync="bccg_Click" size="tiny" :before-close="handleClose" class='bccg'>
			  <span class="dialog-footer">
				<p>{{ this.infoHint }}</p>
				<el-button type="primary" style="" class='dialog_ok' @click.native="bccg_Click = false">确 定</el-button>
				<!-- </span> -->
				</span>
			</el-dialog>




			<!--警告2-->
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
					<el-button @click="dytm_Click = false">取 消</el-button>
					<el-button type="primary" class='dialog_ok' @click.native="dytm_Click = false">确 定</el-button>
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

			<router-view class="view"></router-view>
		</form>
	</div>
</template>
<script src="../../common/js_nicescroll/jquery.nicescroll.js"></script>
<!--<link rel="stylesheet" href="../../common/jsui/jquery-ui-1.12.1/jquery-ui.css">-->
<script>
</script>
<script>
	import $ from 'jquery'
	import hzftc from './hzftc.vue';
	import gystc from './gystc.vue';
	import djttc from './djtsztc.vue';
	import spzl from './tanchuanghz/spnbtc.vue';
	import sptm from './tanchuanghz/dysptm.vue';
	import dztc from './dztc.vue';
	import alert1 from './alert1.vue'
	import alert2 from './alert2.vue'
	import nicescroll from '../../common/js_nicescroll/jquery.nicescroll.js'
	//	import url('../../common/jsui/jquery-ui-1.12.1/jquery-ui.min.js')
	import printArea from '../../common/js/jsprint.js'
	import feixiang from './ckgl/feixiang.vue'
	import cwzl from './tanchuanghz/cwzl.vue';
	import ckzy from './tanchuanghz/ckzy.vue';
	
	export default {

		components: {
			'hzftc': hzftc,
			'gystc': gystc,
			'djttc': djttc,
			'dztc': dztc,
			'alert1': alert1,
			'alert2': alert2,
			'spzl': spzl,
			'sptm': sptm,
			'feixiang': feixiang,
			'cwzl': cwzl,
			'ckzy': ckzy,
		},
		watch: {},

		data() {
			return {
				//这是内部的参数可以调用
				djt_Click: false,
				spzl_Click: false, //商品资料
				hzf_Click: false,
				bccg_Click: false, //保存成功
				gys_Click: false,
				ckzy_Click: false, // 仓库作业
				fx_Click:  false, // 费项弹窗
				dizhi_Click: false,
				alert1_Click: false,
				alert2_Click: false,
				sptm_Click: false,
				dytm_Click: false,
				cwzl_Click: false,
				yulan_Click: false,
				bcsb_Click: false, // 保存状态
				sfsc_Click: false, // 是否删除
				delIndex: 0,
				cities: [],
				pszx: false,
				judgeTJ: false,  //已提交
				judgeSH: false,	//已审核
				peisong: '',
				infoHint: '',
				hzfInfo: [],
				gysInfo: [], // 供应商组件传过来的数据
				isOnce: true, // 只执行一次
				gys: "", // 供应商
				bcxx: '保存成功', // 保存信息
				spStr: '', //商品编码
				afterStorageID: '', //保存单据编号
				enterFlag: '', // 回车状态
				splbs: [{
					Code: ''
				}, ],
				getBasicAmount: '',
				getAuxiliaryNumber: '',
				getTotalPrice: '',
				yuanqu: '',
				Addr: {
					Province: '',
					City: '',
					Area: '',
					Street: '',
					Detail: ''
				}, // 存放地址信息
				tableData3: "",
				hzfid: "",
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
				Batch: '', // 批次
				yqlist: [],
				loading: false, //表格加载中的变量
				rklxs: [ // 入库类型
					{
						value: '0',
						label: '正常入库'
					},
					{
						value: '1',
						label: '入库退回'
					}
				],
				jhfss: [ // 交货方式
					{
						value: '0',
						label: '到岸'
					},
					{
						value: '1',
						label: '派车'
					}
				],
				tjzts: [ // 提交状态
					{
						value: '0',
						label: '未提交'
					},
					{
						value: '1',
						label: '提交'
					}
				],
				ysfss: [ // 运输方式
					{
						value: '0',
						label: '汽运'
					},
					{
						value: '1',
						label: '铁运'
					},
					{
						value: '2',
						label: '海运'
					},
					{
						value: '3',
						label: '空运'
					}
				],

				types2: [],

				hzf: '', //合作方
				Pr: [], //商品列表
				rklx: "1",
				djh: '', // 单据号
				jhfs: "",
				ysfs: "1",
				ydh: "",
				dz: "",
				bz: "",
				ddrq: "",
				dhsj: "",
				tjzt: "1",
				spbm: '',
				saveData: [], // 数据存档
				caigouyuan: '', // 采购员
				zhidanren: '', // 制单人
				shenheren: '', // 审核人
				shenherq: '', // 审核日期
				bumen: '', // 部门
				CreationMethod: '', // 创建方式
				lookShopNum: "", //记录点击小方块时选中的是第几行
				lookShopCell: "",
				tableData: [],
				lock: false,
				search: '', // 搜索内容
				zxdlist: [], // 装卸队
				zxdName: '', // 装卸队
				zxdID: '', // 装卸队ID
				zxdlistbf: [], // 装卸队北备份
				StockData: [{
					StockID: '',
					StockName: ''
				}],
				formInline: {
					user: '',
					region: ''
				},
				shifouZP: [{
					value: '1',
					label: '赠品'
				}, {
					value: '0',
					label: '非赠品'
				}],
				SFcomplimentary: "",
				WarehouseWork: [], // 职员分配比例
				WorkloadParam: [], // 仓库作业情况
				FeeTacticsParam: [{
          FeeModuleID: "01",
					TacticsID: '',
					TacticsCode: '',
					TacticsName: ''
				}],  // 策略情况
				CostParam: {

				}, // 费项 

			}
		},

		mounted: function() {
			var getInfo = window.localStorage.getItem("rkdDataStorage");
			console.log("得到的信息=》" ,getInfo)
		  this.afterStorageID = getInfo;
			this.djh = getInfo
			this.getshopInfo(getInfo);
			
			//这个方法类似于juqery里面的$(document).ready()
			var that = this;

			that.getdclist();
			
			
			// 回车直接删除商品
			$(window).on("keydown", function(e) {
				// 1.如果是删除商品弹窗
				if(that.sfsc_Click && e.key == "Enter") {
					that.isDelect();
				}
				// 2.如果是备注
				if(that.enterFlag == "Remarks" && e.key == "Enter") {
					console.log("添加一行")
					that.splbs[that.splbs.length - 1].BarCode && that.splbs.push({
						Code: ''
					});
				}
			})

			$("#hzfEnter").on('keydown', function(e) {
				if(e.key == 'Enter') {
					that.hzf_Click = true;
					// 当前状态为回车
				}
			})

			$('html').on('click', '.ok', function() {
				that.djt_Click = false;
				that.hzf_Click = false;
				that.gys_Click = false;
				that.dizhi_Click = false;
				that.alert1_Click = false;
				that.alert2_Click = false;
			});
			$('html').on('click', '.close', function() {
				that.djt_Click = false;
				that.hzf_Click = false;
				that.gys_Click = false;
				that.dizhi_Click = false;
				that.alert1_Click = false;
				that.alert2_Click = false;
			});
			// 打印
			$('html').on('click', '.rkgl .dy', function() {
				$('#spbg').printArea();
			});
			$('html').on('click', '.rkgl .el-breadcrumb-item .close', function() {
				$('.rkgl').hide();

			});

			//没数据的时候加载示意，有数据的时候注释掉
		},
		methods: {
			getshopInfo(StorageID) {
				var that = this;
				var params = {
					StorageID: StorageID
				};
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: "POST",
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: "CPHH.PC.StorageModule.Storage.Look"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						console.log('查看', data)
          	that.saveData = data;
						that.CostParam = data[0].Cost;
						that.Batch = data[0].Batch;
            that.peisong = data[0].DCName;
						that.dz = data[0].Province + data[0].City + data[0].Area + data[0].Street + data[0].Detail;
						that.Addr.Province = data[0].Province;
						that.Addr.City = data[0].City;
						that.Addr.Area = data[0].Area;
						that.Addr.Street = data[0].Street;
						that.Addr.Detail = data[0].Detail;
						that.rklx = data[0].Type;
						that.zxdName = data[0].HandlingTeamName;
						that.zhidanren = data[0].Poster;
						that.shenheren = data[0].Checker;
						that.shenherq = data[0].CheckDate;
						that.CreationMethod = data[0].CreateWay;
						that.ddbh = data[0].StorageID;
						that.ddrq = data[0].StorageDate;
						that.dhsj = data[0].ArrivalTime;
						that.hzf = data[0].ParName;
						that.hzfid = data[0].ParID;
						that.gys = data[0].SupplierName;
						that.bz = data[0].Remarks;
						if (data[0].Transport === "到岸") {
              that.jhfs = '0';
						} else if (data[0].Transport === "派车") {
              that.jhfs = '1';
						}
						//	判断是否提交  审核
						if(data[0].IsCheck === 1){
						  that.judgeSH = true
						} else {
							that.judgeSH = false
						}
						if(data[0].SubmitStatus === "提交"){
						  that.judgeTJ = true
						} else {
							that.judgeSH = false
						}
						
						that.ydh = data[0].BillNum;
						if (data[0].Delivery === "汽运") {
							that.ysfs = "0";
						} else if (data[0].Delivery === "铁运"){
							that.ysfs = "1";
						} else if (data[0].Delivery === "海运"){
							that.ysfs = "2";
						} else if (data[0].Delivery === "空运"){
							that.ysfs = "3";
						}
						
						that.splbs = data[0].Pro;
						that.hzfid = data[0].ParID;
						console.log(that.splbs.length)
						if(that.splbs.length > 0) {
							for(let i = 0; i < that.splbs.length; i++) {
									console.log("进入")
								that.splbs[i].Code = data[0].Pro[i].ProCode;
								that.splbs[i].Name = data[0].Pro[i].ProName;
								that.splbs[i].Model = data[0].Pro[i].ProModel;
					
								if(data[0].Pro[i].IsFree == 0) {
									data[0].Pro[i].IsFree = '非赠品'
								} else {
									data[0].Pro[i].IsFree = '赠品'
								}
							}
						};
						that.getTotal()
					}
				})
			},
			dbchange(val) {
			}, //合作方发生改变时执行该方法
			lookShop() {
				if(!this.hzf) {
					this.infoHint = "请选择合作方";
					this.bcsb_Click = true; // 提示
					return
				} else {
					this.spzl_Click = true;
				}
			},
			// 合作方发生改变时执行该方法
			getgysInfo() {
				var that = this;
				that.baseAjax("suppliergetlist", {
					UserID: window.userid,
					ParID: that.hzfid
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.gys = data[0].Name;
					that.gysid = data[0].InterID;
				});
			},
			getgys(val) {
				this.gys = val.Name;
				this.gysid = val.InterID;
				this.gys_Click = false; //关闭弹出框
			},
			toggleSelection(rows) {
				if(rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			// 双击拿到合作方数据
			gethzf(val) {
				this.pszx = true; // 配送输入框禁用
				this.hzfid = val.InterID;
				this.hzf = val.Name;
				this.hzf_Click = false; //关闭弹出框
				this.getgysInfo();
				// 请求供应商
				this.getgyslist();
			},
			// 获取供应商的数据
			getgyslist: function() {
				var that = this;
				that.baseAjax("suppliergetlist", {
					UserID: window.userid,
					ParID: this.hzfid
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;

					if(data.length) { // 如果有数据
						that.gys = data[0].Name;
					} else {
						that.gys = '';
					}
				});
			},
			// 合作方单选拿到数据，存入数组
			checkgethzfInfo(data) {
				this.hzfInfo = data;
			},
			// 合作方确定调用这个方法，传入存储的数据
			checkgethzfdizhi(info) {
				this.pszx = true; // 配送输入框禁用

				this.hzf = info.Name
				this.hzfid = info.InterID;
				this.hzf_Click = false;
				this.getgysInfo();
			},
			// 发送广播
			getgys() {
				this.$on("gethzfInfo", function(val) {
				})
			},
			// 供应单单选拿到数据，存入数组
			checkgetgysInfo(data) {
				this.gysInfo = data;
			},
			// 供应商确定调用这个方法，传入存储的数据
			checkgetgysdizhi(info) {
				this.gys = info.Name
				this.gysid = info.InterID;
				this.gys_Click = false;
			},
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			// 获取配送中心列表
			getdclist: function() {
				var that = this;
				that.baseAjax("getdclist", {
					UserID: window.userid
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.cities = data;
					that.peisong = data[0].DCID;
				});
			},
			pschange: function() {
				var that = this;
				that.getyuanqulist(that.peisong);
				that.getzxdInfo(that.peisong);
			},
			// 获取园区列表
			getyuanqulist: function() {
				var that = this;
				that.baseAjax("getparklist", {
					UserID: window.userid,
					DCID: that.saveData[0].DCID
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.yqlist = data;
					that.yuanqu = data[0].ParkID;
				});
			},
			getyqTreeCode(yqID) {
				var that = this;
				var params = {
					Level: 5,
					ParkID: yqID
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: 'CPHH.PC.BaseInfo.Stock.GetStockTreeList'
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = JSON.parse(data)
						var result = JSON.parse(obj.Datas)
					}
				})
			},
			// 获取商品的单价
			getGoodPrice(proID, idx, val) {
				var that = this;
				that.baseAjax("productgetpurchaseprice", {
					ProID: proID,
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					var pr = data[0].Price;
					//val[idx].Price = pr;
					that.$set(val[idx], 'Price', pr);
					that.$set(val[idx], 'Num', 0);
					that.$set(val[idx], 'SupNum', 0);
					// 辅助价格显示

					val.forEach((item, index) => {
						var suppr = item.Price;
						var IsFree = "0";
						that.$set(val[index], 'SupPrice', suppr * item.ConvRate);
						that.$set(val[index], 'IsFree', "0");
					});

					that.$set(val[idx], 'Total', 0);
					if(idx == 0) {
							that.splbs.splice(that.lookShopNum, 1, val[idx]);
							var $cellpar = $(that.lookShopCell).parent();
						setTimeout(function(){
							$("td.Code .cell", $cellpar).html(val[idx].Code);
						},50);
						
						$("td.Num .cell", $cellpar).html(val[idx].Num);
						$("td.SupNum .cell", $cellpar).html(val[idx].SupNum);
						$("td.PriceSup .cell", $cellpar).html(val[idx].PriceSup);
						$("td.Price .cell", $cellpar).html(val[idx].Price);
					} else {
							that.splbs.push(val[idx]);
					}
				});
			},

			// 设置商品
			setProduct(val) {
				//this.splbs = val;
				this.spzl_Click = false;
				val.forEach((item, index) => {
					this.getGoodPrice(item.InterID, index, val);
				})
			},
			// 拿到仓位资料
			getCWInfo(val) {
				var that = this;
				console.log(val)
				that.cwzl_Click = false;
				that.$set(that.splbs[that.lookShopNum],'StockName', val.Name)
				that.$set(that.splbs[that.lookShopNum],'StockID' , val.InterID)
			},
			setAddr: function(val) { // 取得地址信息
				this.Addr = val;
			},
			addrClick: function() { // 地址点击事件
				this.dz = this.Addr.Province + this.Addr.City + this.Addr.Area + this.Addr.Street + this.Addr.Detail;
				this.dizhi_Click = false;
			},
			// 操作
			handleClick: function(command) {
				if(command === 'lrfy') { // 录入费用
					this.fx_Click = true;
				} else if (command === 'sptm') { // 商品条码
          this.sptm_Click = true;
				} else if (command === 'tccw') { // 填充仓位
          var getStockID = this.StockData[0].StockID;
					var getStockName = this.StockData[0].StockName;
					for(let i = this.lookShopNum; i < this.splbs.length ; i++) {
            this.$set(this.splbs[i],'StockID' , getStockID);
            this.$set(this.splbs[i],'StockName' , getStockName);
					}
				} else if (command === 'ckzy') {
          this.ckzy_Click = true;
				}
			},
			//表格双击（可编辑表格）
			dbrow: function(row, column, cell, event) {
				if($(cell).html().indexOf("<input") != -1) {
					return false;
				}
				var jname = column.property;

				if(jname != 'Code' && jname != 'Num' && jname != 'Price' &&  jname != 'SupNum' &&  jname != 'SupPrice') {
					//如果当前列不允许编辑.则跳出
					return false;
				}
				var that = this;
				var $inp = $("<input type='text' style='width: 90%; margin-left: 5%;' class='rowinp' />");
				var rows = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标

				var $oldhtml = $($cell.html());
				var val = $oldhtml.html();
				$inp.val(val);
				$cell.html("").append($inp);
				$inp.focus();
				// 回车辅件
				if(jname == "Code") {

					this.delIndex = $(event.target).parent().parent().parent().index(); //获取等坐标
					$inp.keyup(function(event) {
						// 如果是回车
						if(event.key === "Enter") {
							if(that.gys) {
								val = $inp.val();
								that.spStr = val;
								that.spzl_Click = true;
							} else {
								that.bcxx = "请选择供应商";
								that.bcsb_Click = true; // 提示
								return
							}
						}
					});
				}

				// 失去焦点事件
				$inp.blur(function() {

					val = $inp.val();

					$oldhtml.html(val);
					$cell.html("").append($oldhtml);
					
					rows[jname] = val;

          let $parent = $cell.parent();
					// 改基本数量
					if(jname == "Num") {
						rows.SupNum = rows.Num / rows.ConvRate;
						rows.Total = rows.Num * rows.Price;


						$("td.SupNum .cell", $parent).html(rows.SupNum);
					}
					// 改辅助数量
					else if(jname == "SupNum") {
						rows.Num = row.SupNum * rows.ConvRate;
						rows.Total = row.SupNum * rows.SupPrice;
						$("td.Num .cell").html(rows.Num);
					} else if(jname == "Price") {

						rows.SupPrice = row.Price * rows.ConvRate;
						rows.Total = row.Num * rows.Price;

					} else if(jname == "SupPrice") {
					
						rows.Price = rows.SupPrice / rows.ConvRate;
						rows.Total = rows.SupPrice * rows.SupNum;
						
					}
					that.getTotal();
				});
			},
			// 合计 获取基本数量、价格、辅助数量
			getTotal() {
				// 基本数量
				var basicAmount = 0;
				// 辅助数量
				var auxiliaryNumber = 0;
				// 价格合计
				var totalPrice = 0;

				for(let i = 0; i < this.splbs.length; i++) {
					basicAmount += parseInt(this.splbs[i].Num);
					auxiliaryNumber += parseFloat(this.splbs[i].SupNum);
					totalPrice += parseInt(this.splbs[i].Total);
				}
				this.getBasicAmount = basicAmount;
				this.getAuxiliaryNumber = auxiliaryNumber.toFixed(6);
				this.getTotalPrice = totalPrice;
			},
			//表格单击（可弹框）
			tbclick(row, column, cell, event) {
				var jname = column.property;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				console.log("我是第"+index+"行");
        this.StockData[0].StockID = row.StockID;
        this.StockData[0].StockName = row.StockName;
				if(jname == "Code") {
					this.dbrow(row, column, cell, event);
				}
				this.lookShopNum = index;
				this.lookShopCell = cell;
				//单击表格增加颜色
				if(jname == "Price" || jname == "Num" || jname == "SupNum" || jname == "SupPrice" || jname == "Remarks" || jname == "Code" || jname == "StockName") {

					$(".danjixz").removeClass("danjixz");

					$(cell).addClass("danjixz");
				}
				console.log(jname)
				if(jname == "Desc") {
					// 设置回车状态为备注
					this.enterFlag = "Remarks";
				}
				if(jname == 'Code') {
          
				}
			},
			click: function() {

			},
			// 保存订单
			saveOrder() {
				this.addOrder();
			},
			// 获取行坐标
			getRow(row, event) {
			},
			// 行删除
			rowDelect(row, event) {
				event.preventDefault() //阻止默认事件
				for ( let i = 0; i < event.path.length; i++) {
					if(event.path[i]._prevClass == "el-table__row") {
             this.delIndex = event.path[i].rowIndex;
					}
				}
				this.sfsc_Click = true;

			},
			// 是否删除
			isDelect() {
				this.sfsc_Click = false; // 关闭弹窗
				this.splbs.splice(this.delIndex, 1, 'code');
					
				$("#spbg tbody tr").eq(this.delIndex).remove();
				$("#spbg .el-table__fixed-body-wrapper tbody tr").eq(this.delIndex).remove();
			 // 删除数据
			  this.splbs.splice(this.delIndex, 1)
				// this.UpdateCommodity(this.splbs)
				this.getTotal();
				if(this.splbs < 1) { // 如果全部删除
					this.splbs.push({
						Code: ''
					});
				}
			},
			// 删除后更新商品(因为是不同的渲染 只能用JQ)
			UpdateCommodity (params) {
				//this.splbs = val;
				params.forEach((item, index) => {
					this.UpdateCDT(index, params);
				})
			},
			// 更新
			UpdateCDT (idx, val) {
				var that = this;
				var $cellpar = $(that.lookShopCell).parent();
				setTimeout(function(){
					$("td.Code .cell", $cellpar).html(val[idx].Code	);
					$("td.Num .cell", $cellpar).html(val[idx].Num);
					$("td.SupNum .cell", $cellpar).html(val[idx].SupNum);
					$("td.PriceSup .cell", $cellpar).html(val[idx].PriceSup);
					$("td.Price .cell", $cellpar).html(val[idx].Price);
				},50);
				
			},
			// 获取装卸队数据
			getzxdInfo(psid) {
				var that = this;
				that.baseAjax("handlingteamgetlist", {
					DCID: that.saveData[0].DCID
				}, (data) => {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.zxdlist = data;
					that.zxdlistbf = data;
				})
			},
			// 装卸队搜索框
			getSearch(val) {
				if(val) { //val存在 
					this.zxdlist = this.zxdlistbf.filter((item) => {
						if(!!~item.Name.indexOf(val) || !!~item.Contact.indexOf(val) || !!~item.Mobile.indexOf(val)) {
							return true
						}
					})
				} else { //val为空时，还原数组
					this.zxdlist = this.zxdlistbf;
				}
			},
			getName(val) {
				var that = this;
				console.log("当前装卸队数据",val);
				that.zxdName = val.Name;
				that.zxdID = val.InterID;
				that.lock = false;
			},
			handleIconClick() {
				if(!this.lock) {
					this.lock = true;
				} else {
					this.lock = false;
				}
			},
			getCKData (val) {
				console.log("仓库作业情况", val)
				this.ckzy_Click = false;
        this.WorkloadParam = val;
			},
			getfxInfo (val) {
				console.log("费项", val)
				this.CostParam = val;
				this.fx_Click = false;
			},
			getclInfo (val) {
				console.log("策略", val)
        this.FeeTacticsParam = val;
				this.fx_Click = false;
			},
			getclerkInfo(val) {
				console.log("职员分配比例", val)
				this.WarehouseWork = val;
				this.fx_Click = false;
			},
			getzyInfo () {
				var that = this;
				var ywparams = {
					JobType: '业务员',
					ParID: that.saveData[0].ParID,
					DCID: that.saveData[0].DCID
				}
				$.ajax({
          url: 'http://116.62.171.144/post/index.php',
          type: 'POST', //GET
          async: true, //或false,是否异步
          data: {
              datas: ywparams,
              method: "CPHH.PC.BaseInfo.Staff.GetListByJobType"
          },
          timeout: 5000, //超时时间
          success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var result = JSON.parse(obj.Datas)
            console.log('叉车工', result);
          }
        })
			},
			// 保存并审核订单
			addOrder() {
				var that = this;
				console.log(that.splbs);
				var params = [];
				var FeeTacticss = [];
				var WarehouseWorks = [];
				for(let i = 0; i < that.splbs.length; i++) {	
					if (that.splbs[i].IsFree == '非赠品'){
            that.splbs[i].IsFree = '0'
					} else if (that.splbs[i].IsFree == '赠品'){
						that.splbs[i].IsFree = '1'
					}
					var ProParam = {
						ProID: that.splbs[i].ProID || that.splbs[i].InterID,
						Unit: that.splbs[i].Unit,
						StockID: that.splbs[i].StockID,
						Num: that.splbs[i].Num,
						Price: that.splbs[i].Price,
						SupPrice: that.splbs[i].SupPrice,
						SupUnit: that.splbs[i].SupUnit,
						SupNum: that.splbs[i].SupNum,
						ConvRate: that.splbs[i].ConvRate,
						Desc: that.splbs[i].Desc || that.bz,
						BodyProperty1: that.splbs[i].BodyProperty1 || '',
						BodyProperty2: that.splbs[i].BodyProperty2 || '',
						BodyProperty3: that.splbs[i].BodyProperty3 || '',
						BodyProperty4: that.splbs[i].BodyProperty4 || '',
						IsFree: that.splbs[i].IsFree,
						Batch: that.splbs[0].Batch,
						Account3: that.splbs[i].Account4 || '',
						Account4: that.splbs[i].Account4 || '',
						Account5: that.splbs[i].Account5 || '',
						ProductionDate: that.splbs[i].ProductionDate,
						EffectiveDate: that.splbs[i].EffectiveDate,
						OrderPNO: that.splbs[i].OrderPNO,
						OrderNum: that.splbs[i].OrderNum,
						OrderID: that.splbs[i].OrderID,
						Account1: ''
					};
					params.push(ProParam);			
				}
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
						FeeModuleID: parseInt(that.FeeTacticsParam[i].FeeModuleID) || 1,
						TacticsID: that.FeeTacticsParam[i].TacticsID,
						TacticsCode: that.FeeTacticsParam[i].TacticsCode,
						TacticsName: that.FeeTacticsParam[i].TacticsName
					};
					FeeTacticss.push(FeeTacticsParams);
				}
				
			
				var jsons = {
					StorageID: that.afterStorageID,
					Type: that.rklx,
					StorageDate: $('#ddrq input').val(),
					BillNum: that.ydh,
					SalesMan: that.caigouyuan,
					Remarks: that.bz,
					ParID: that.saveData[0].ParID || 0,
					SupplierID: that.saveData[0].SupplierID || 0,
					Delivery: that.jhfss[that.jhfs].label,
					ArrivalTime: $('#dhsj input').val(),
					UserID: userid,
					UserName: userName,
					property1: '',
					property2: '',
					property3: '',
					SubmitStatus: that.tjzt,
					DeptID: 0,
					deptName: '',
					TransportCmpID: 0,
					TransportCmpName: '',
					HandlingTeamID: that.zxdID || that.saveData[0].HandlingTeamID,
					HandlingTeamName: that.zxdName || that.saveData[0].HandlingTeamName,
					Transport: that.ysfss[that.ysfs].label,
					ParkID: that.yuanqu,
					ParkName: $('#yqlb').eq(0).text(),
					DCID: that.saveData[0].DCID,
					OrderID: that.saveData[0].OrderID,
					Pro: params, // OK
					FeeTactics: FeeTacticss, // OK
					Cost: that.CostParam, // OK
					WarehouseWork: WarehouseWorks, // OK
					Workload: that.WorkloadParam, // OK
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.StorageModule.Storage.Edit"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var result = JSON.parse(data)
						console.log(data)
						// 执行审核
						if (result.StateCode == 100) {
              that.auditOrder();
							that.getshopInfo(that.afterStorageID)
						} else {
							 that.bcsb_Click = true;
							 that.infoHint = result.Message;
						}
						
						
					}
				})
			  
		  },
			// 审核订单
			auditOrder() {
        var that = this;
				var jsons = {
					UserID: userid,
					UserName: userName,
					StorageID: that.afterStorageID,
				}

				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.StorageModule.Storage.Audit"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						 var result = JSON.parse(data)
						 console.log("结果为",result)
						 if (result.StateCode == 100) {
               that.bcsb_Click = true;
							 that.infoHint = "审核成功";
							 that.getshopInfo(that.afterStorageID);
						} else if (result.StateCode == 104){
							 that.bcsb_Click = true;
							 that.infoHint ="错误" + result.Message;
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
					StorageID: that.afterStorageID,
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.StorageModule.Storage.Anti"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var result = JSON.parse(data)
						console.log('反审核', result)
						 if (result.StateCode == 100) {
               that.bcsb_Click = true;
							 that.infoHint = "反审核成功";
							 that.getshopInfo(that.afterStorageID);
						} else if (result.StateCode == 104){
							 that.bcsb_Click = true;
							 that.infoHint = result.Message;
						}
					}
				})
			},
			// 处理X关闭 
			handleclose() {

			}
		}

	}
</script>
<style>
	.hzftc .el-table__body tr.current-row>td {
		background: #CDECFE;
	}
	
	.el-table--enable-row-transition .el-table__body td {
		background: #f7e5e5
	}
	
	.el-table--enable-row-transition .el-table__body td.bianji {
		background: #fff
	}
	
	.el-table--enable-row-transition .el-table__body td.danjixz {
		background: #d9def3;
	}
</style>
<style rel="stylesheet/stylus" scoped>
	/*@import url("../../common/css/rkgl/rkgl_vue.css");*/
	/*@import url("../../common/css/rkgl/rkgl_vue.css") print;*/
	/**上面是引用的css。下面是直接写的css*/
	
	.blue {
		height: 36px;
		width: 100%;
		background: #cdecfe;
		position: relative;
		margin-bottom: 10px;
		border: 1px solid #eee;
	}
	
	.rkgl {
		width: 100%;
		height: 100%;
		padding-left: 5px;
	}
	.grid-content p {
	  text-align: center;
	}

	.rkgl .el-table--fit {
		height: 400px !important;
	}

	.rkgl .headerTC .el-input {
		width: 87%;
	}	
	.blue .fl {
		position: absolute;
		left: 20px;
		top: 3px;
		height: 30px;
	}
	.rkgl .headerTC span:hover {
		background: white;
		color: #35b3fd;
	}
	
	.rkgl .headerTC span {
		display: inline-block;
		width: 55px;
		border: 1px solid #35b3fd;
		background: #35b3fd;
		text-align: center;
		border-radius: 5px;
		color: black;
		cursor: pointer;
	}
	.feixiang{
		width: 25px;
		height: 25px;
		background:url(../../common/img/rk/caiwuguanli.png);
		-webkit-background-size: 25px 25px;
		background-size: 25px 25px;
		border:none;
	}
	.rkgl .headerTC {
		margin: 10px 0;
	}
	.rkgl .zxd-dw {
		position: relative;
		width: 100%;
	}
	.status-alert {
		width: 60px;
		height: 38px;
		line-height: 38px;
		text-align: center;
	}
	.rkgl .zxdtc {
		position: absolute;
		top: 40px;
		border: 1px solid #35b3fd;
		padding: 10px;
		width: 100%;
		background: white;
		z-index: 1000;
	}
	.el-table-column {
		height: 50px;
	}
	
	.rkgl .form-2 {
		width: 100%;
		height: 40px;
		padding-left: 30px;
	}
	
	.center {
		margin: 0 auto;
	}
	.fr {
		float: right;
	}
	
	.el-row {
		margin-bottom: 2px;
		margin-left: px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-row p {
		font-size: 16px;
		line-height: 25px;
		margin-left: 20px;
	}
	.ckzyBtn2 {
		float: right;
		margin-right: 95px;
		margin-bottom: 20px;
	}
	.el-col {
		border-radius: 4px;
	}
	
	. -dark {
		background: #99a9bf;
	}
	
	. {
		background: #d3dce6;
	}
	
	. -light {
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
	
	.rkgl .form-2 {
		padding-left: 20px;
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
		position: relative;
	}
	
	.already{
		position: absolute;
		font-weight: 400;
		font-size: 18px;
		right: 5%;
		bottom:0;
	}
	.already span{
		color: red;
		border: 1px solid red;
		padding:2px 6px;
	}
</style>