<template>
  <div class="rkd" style="position:relative">

    <form class="page2">
      <!--第二页-->
      <!-- 这里是导航栏部分 -->
      <div class="but-box">
        <ul>
          <li>
            <div class="boxtab">
              <div class="curbox bc" @click="save">
                <span>保存</span>
              </div>
            </div>
          </li>
          <li>
            <div class="boxtab">
              <div class="curbox bcsh" @click="saveAndAudit">
                <span>保存并审核</span>
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
            <span class="gun"></span>
          </li>
          <li>
            <div class="boxtab" @click="state.ChooseSourceList_Click=true">
              <div class="curbox ck">
                <span>选源单</span>
              </div>
            </div>
            <span class="gun"></span>
          </li>
          <li>
            <div class="boxtab">
              <div class="curbox djsz" @click='state.djt_Click=true'>
                <span>单据设置</span>
              </div>
            </div>
            <span class="gun"></span>
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
              <div class="curbox dy">
                <span>打印(仓库)</span>
              </div>
            </div>
          </li>
          <li>
            <div class="boxtab">
              <div class="curbox sh">
                <span>审核</span>
              </div>
            </div>
          </li>
          <li>
            <div class="boxtab">
              <div class="curbox fs">
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
      <h1 class="center">入库单</h1>
      <!--功能选单部分-->
      <div>
        <el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>配送中心*：</p>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<!-- 配送中心列表 -->
							<el-select v-model="psData.peisong" id="pszx"  @change="pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pslock">
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
							<el-select v-model="psData.yuanqu" id="yq" placeholder="" no-data-text="23132" class=" blueborder input_width">
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
							<el-input class=" blueborder input_width" id="hzfEnter" placeholder="" icon="search" v-model="hzf" @click="state.hzf_Click = true">
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

							<el-input class=" blueborder input_width" placeholder="" icon="search" v-model="gys" @click="state.gys_Click = true"></el-input>

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
								<el-date-picker v-model="ddrq"  id="ddrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1" class='input_width'>
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

							<el-input v-model="ydh" placeholder="" class=" input_width"></el-input>
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
							<div class='feixiang'  @click='state.fx_Click=true'>
							
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
      <el-table :data="splbs" border style="width:100%"  @cell-click="tbCellClick" @row-contextmenu="rowDelect"
      @cell-dblclick="dbHandle" class='spbg' height="305" v-loading.body="state.loading" 
                element-loading-text="玩命加载中">
        <el-table-column type="index" label="序号" width="70">
        </el-table-column>
        <el-table-column prop="ProCode" label="商品编码" width="110" class-name="bianji">
          <template scope="scope">
            <div v-show="!scope.row.ProCodeEdit" >{{scope.row.ProCode}}</div>
            <el-input v-show="scope.row.ProCodeEdit" v-model="scope.row.ProCode" @keyup.native.13="callCommodity(scope)" data-index="0"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="111" label="" width="24">
          <template scope="scope">
            <span class='blue_button' @click="hzf?state.spzl_Click=true:state.spzl_Click=false"></span>
          </template>
        </el-table-column>
        <el-table-column prop="ProName" label="商品名称" width="240">
        </el-table-column>
        <el-table-column prop="ProModel" label="规格型号" width="110">
        </el-table-column>
        <el-table-column prop="StockName" label="仓位" width="auto" class-name="bianji">
        </el-table-column>
        <el-table-column prop="111" label="" width="24">
          <template scope="scope">
            <span class='blue_button' @click="lookCW"></span>
          </template>
        </el-table-column>
				<el-table-column prop="DGSL" label="订购数量" width="auto">
        </el-table-column>
        <el-table-column prop="Num" label="基本数量" width="auto" class-name="bianji">
          <template scope="scope">
            <div v-show="!scope.row.NumEdit" >{{scope.row.Num}}</div>
            <el-input v-show="scope.row.NumEdit" v-model="scope.row.Num" @blur="numChange(scope)" data-index="1"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="Unit" label="基本单位" width="auto">
        </el-table-column>
        <el-table-column prop="Price" label="价格" width="auto" class-name="bianji">
           <template scope="scope">
            <div v-show="!scope.row.PriceEdit" >{{scope.row.Price}}</div>
            <el-input v-show="scope.row.PriceEdit" v-model="scope.row.Price" @blur="priceChanger(scope)" data-index="1"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="SupNum" label="辅助数量" width="auto" class-name="bianji">
          <template scope="scope">
            <div v-show="!scope.row.SupNumEdit">{{scope.row.SupNum}}</div>
            <el-input v-show="scope.row.SupNumEdit" v-model="scope.row.SupNum" @blur="supNumChanger(scope)" data-index="2"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="SupUnit" label="辅助单位" width="auto">
        </el-table-column>
        <el-table-column prop="SupPrice" label="辅助价格" width="auto" class-name="bianji">
           <template scope="scope">
            <div v-show="!scope.row.SupPriceEdit" >{{scope.row.SupPrice}}</div>
            <el-input v-show="scope.row.SupPriceEdit" v-model="scope.row.SupPrice" @blur="supPriceChanger(scope)" data-index="1"></el-input>
          </template>
        </el-table-column>
				<el-table-column prop="SLMS" label="数量描述" width="auto" class-name="bianji">
        </el-table-column>
				<el-table-column prop="Batch" label="批号" width="auto">
        </el-table-column>
				<el-table-column prop="ProductionDate" label="生产日期" width="100">
				</el-table-column>
				<el-table-column prop="EffectiveDate" label="有效期至" width="100">
				</el-table-column>
        <el-table-column prop="IsFree" label="赠品标志" width="120" class-name="bianji">
          <template scope="scope">
						<el-select v-model="splbs[scope.$index].IsFree" placeholder="请选择">
							<el-option v-for="item in shifouZP" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left">{{ item.label }}</span>
							</el-option>
						</el-select>
					</template>
        </el-table-column>
        <el-table-column prop="Total" label="合计" class-name="total" width="115">
        </el-table-column>
				<el-table-column prop="ProductionDate" label="生产日期" width="100">
				</el-table-column>
				<el-table-column prop="EffectiveDate" label="有效期至" width="100">
				</el-table-column>
        <el-table-column prop="Remarks" label="备注" width="155" class-name="bianji">
           <template scope="scope">
            <div v-show="!scope.row.RemarksEdit" >{{scope.row.Remarks}}</div>
            <el-input v-show="scope.row.RemarksEdit" v-model="scope.row.Remarks" @blur="disEdit(scope)" data-index="1"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="ProductionDate" label="订单单号" width="100">
				</el-table-column>
				<el-table-column prop="EffectiveDate" label="保质期" width="100">
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
          <span>辅助合计</span>
        </li>
        <li>
          <span style="color: red">{{ isNaN(getBasicAmount) ? 0.00 : getBasicAmount }}</span>
        </li>
        <li>
          <span>数量合计</span>
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
      <!--第二表单-->
      <el-form :inline="true" :model="formInline" class="demo-form-inline two-form">
        <el-form-item label="部门" class='fl'>
          <el-select v-model="DeptID" placeholder="" class=''>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="采购员" class='fl'>
          <el-input v-model="caigouyuan" placeholder="" class='fr'></el-input>
        </el-form-item>
        <el-form-item label="制单人" class='fl'>
          <el-input v-model="zhidanren" disabled placeholder="" class='fr'></el-input>
        </el-form-item>
        <el-form-item label="审核人" class='fl'>
          <el-input v-model="shenheren" disabled placeholder="" class='fr'></el-input>
        </el-form-item>
        <el-form-item label="审核日期" class='fl'>
          <el-input v-model="shenherq" disabled placeholder="" class='fr'></el-input>
        </el-form-item>
      </el-form>
      <div class='blue'>
        <el-button type="primary" class='fl'>就绪</el-button>
      </div>
      <!--下面全是dialog-->

      <!--合作方弹窗-->
      <el-dialog title="选择合作方" class="hzf" :visible.sync="state.hzf_Click" size="tiny" :before-close="handleClose">
        <hzftc :DCID="psData.peisong" @gethzfInfo="gethzf" @checkgethzfInfo="checkgethzfInfo" ref="hzftcvue">
          <div slot="close" @click="state.hzf_Click=false" class="boxtab">
            <div class="curbox tc">
              <span>关闭</span>
            </div>
          </div>
        </hzftc>
        <span slot="footer" class="dialog-footer">
					<el-button @click="state.hzf_Click = false">取 消</el-button>
					<el-button type="primary" @click="checkgethzfdizhi(hzfInfo)">确 定</el-button>
				</span>
      </el-dialog>
      <!--合作方弹窗 end-->

      <!--供应商-->
      <el-dialog title="选择供应商" class="gys" :visible.sync="state.gys_Click" size="tiny" :before-close="handleClose">
        <gystc :ParID="psData.hzfid" @getgysInfo="getgys" @checkgetgysInfo="checkgetgysInfo">
          <div slot="close" @click="state.gys_Click=false" class="boxtab">
            <div class="curbox tc">
              <span>关闭</span>
            </div>
          </div>
        </gystc>

        <span slot="footer" class="dialog-footer gys-footer" style=' top:480; left:730'>
					<!--<el-button @click="state.hzf_Click = false">取 消</el-button>-->
					<el-button @click="state.gys_Click = false">取 消</el-button>
					<el-button type="primary" @click="checkgetgysdizhi(gysInfo)">确 定</el-button>
				</span>
      </el-dialog>
      <!--供应商弹窗 end-->

      <el-dialog title="" :visible.sync="state.djt_Click" size="tiny" :before-close="handleClose">
        <djttc></djttc>
        <span slot="footer" class="dialog-footer">
					<el-button @click="state.hzf_Click = false">取 消</el-button>
					<el-button type="primary" @click="state.hzf_Click = false">确 定</el-button>
				</span>
      </el-dialog>
      <!--单据设置 end-->

      <el-dialog title="费项" :visible.sync="state.fx_Click" class="fx-info" size="tiny" :before-close="handleClose">
				<feixiang :saveInfo="JSON.stringify(psData)" @sendfxData="getfxInfo" @sendclData="getclInfo" @sendzyfpData="getclerkInfo">
				</feixiang>
				<span slot="footer" class="dialog-footer">
    			<el-button @click="state.fx_Click = false">取 消</el-button>
   				 
 			 </span>
			</el-dialog>
			<!-- 费项弹窗 -->

      <el-dialog title="" :visible.sync="state.alert1_Click" size="tiny" :before-close="handleClose" id='alert1'>
        <alert1></alert1>
        <span slot="footer" class="dialog-footer">
					<el-button @click="state.hzf_Click = false">取 消</el-button>
					<el-button type="primary" class='dialog_ok' @click.native="state.hzf_Click = false">确 定</el-button>
				</span>
      </el-dialog>
      <el-dialog title="" :visible.sync="state.alert2_Click" size="tiny" :before-close="handleClose" id='alert2'>
        <alert2></alert2>
        <span slot="footer" class="dialog-footer" style='visibility: hidden;height=0;'>
					<!--<el-button @click="state.hzf_Click = false">取 消</el-button>-->
					<el-button type="primary" class='dialog_ok' @click.native="state.hzf_Click = false">确 定</el-button>
				</span>
      </el-dialog>
      <!-- 商品资料弹窗-->
      <el-dialog title="商品资料" class="spzl" :visible.sync="state.spzl_Click" size="tiny" :before-close="handleClose">
        <spzl :spstr="spStr" :sphzf="hzf" :sphzfID="psData.hzfid"  @proSelect="setProduct">
          <div slot="close" @click="state.spzl_Click=false" class="boxtab">
            <div class="curbox tc">
              <span>退出</span>
            </div>
          </div>
        </spzl>
      </el-dialog>
      <!--商品资料弹窗 end -->
      
      <!-- 打印商品条码-->
			<el-dialog title="打印商品条码" class="spzl" :visible.sync="state.sptm_Click" size="tiny" :before-close="handleClose">
				<sptm :spInfo="JSON.stringify(splbs)">
					<div slot="close" @click="state.sptm_Click=false" class="boxtab">
						<div class="curbox tc"><span>退出</span></div>
					</div>
				</sptm>
			</el-dialog>
			<!--打印商品条码 end -->
 
      <!-- 选源单-->
			<el-dialog title="采购选源单" class="xyd" :visible.sync="state.ChooseSourceList_Click" size="tiny" v-if="state.ChooseSourceList_Click" :before-close="handleClose">
				<xyd :DataID="JSON.stringify(psData)" :rktype="rklxs[rklx - 1].label" @setStorageData="getStorageData">
					<div slot="close" @click="state.ChooseSourceList_Click=false" class="boxtab">
						<div class="curbox tc"><span>退出</span></div>
					</div>
				</xyd>
			</el-dialog>
			<!--选源单 end -->
      
      <!-- 仓位数据弹窗-->
      <el-dialog title="请选择批号" class="cwzl" :visible.sync="state.cwzl_Click" size="tiny" v-if="state.cwzl_Click" :before-close="handleClose">
        
        <cwzl :ProID="shopProID" :yqID="psData.yuanqu" @sendCW="acceptCW"></cwzl>
        <span slot="footer" class="dialog-footer">
    			<el-button @click="state.cwzl_Click = false">取 消</el-button>
   				 <el-button type="primary" @click="state.cwzl_Click = false">确 定</el-button>
 			 </span>
      </el-dialog>
      <!--仓位数据弹窗 end -->
      
      	<!-- 仓库作业-->
			<el-dialog title="仓库作业情况"  :visible.sync="state.ckzy_Click" size="tiny" :before-close="handleClose">
        <ckzy :sendDCID="psData.peisong" @receiveData="getCKData">
				   
				</ckzy>		
				<span class="dialog-footer">
						<el-button  class="ckzyBtn2" @click="state.ckzy_Click = false">取 消</el-button>
				  </span>			
			</el-dialog>
			<!--仓库作业 end -->

      <el-dialog title="" :visible.sync="state.dytm_Click" size="tiny" :before-close="handleClose" id='alert1'>
        <div class='tm_body'>
          <nav>
            <button class='dy'>
              <i class='ico12'></i>打印
            </button>
            <button class='close'>
              <i class="ico13"></i>退出
            </button>
          </nav>
          <div class="table_dialog">
            <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%">

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
					<el-button @click="state.hzf_Click = false">取 消</el-button>
					<el-button type="primary" class='dialog_ok' @click.native="state.hzf_Click = false">确 定</el-button>
				</span>
      </el-dialog>
      <!--操作弹框-->
      <el-dialog title="" :visible.sync="state.yulan_Click" size="tiny" :before-close="handleClose" id='alert1'>
        <div class='tm_body'>
          <nav>
            <button class='dy'>
              <i class='ico12'></i>打印
            </button>
            <button class='close'>
              <i class="ico13"></i>退出
            </button>
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
					<el-button @click="state.hzf_Click = false">取 消</el-button>
					<el-button type="primary" class='dialog_ok' @click.native="state.hzf_Click = false">确 定</el-button>
				</span>
      </el-dialog>
      <!-- 删除确认-->
			<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="sfsc_Click" size="tiny" >
				<span class="dialog-footer">
				<p>是否删除当前行</p>
				<el-button type="primary"  @click="isDelect" >确 定</el-button>
				<el-button @click="sfsc_Click = false">取 消</el-button>
				</span>
			</el-dialog>
      	<!-- 保存失败或成功-->
			<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="state.bcsb_Click" size="tiny">
				<span class="dialog-footer">
					<p style="color: red;">{{ infoHint }} </p>
						<el-button type="primary" style="margin-right: 0;"  @click="state.bcsb_Click=false" >确 定</el-button>
					</span>
			</el-dialog>
			<!--保存失败或成功 end -->
			<!--删除确认 end -->
      <router-view class="view"></router-view>
    </form>
  </div>
</template>
<script src="../../common/js_nicescroll/jquery.nicescroll.js"></script>
<!--<link rel="stylesheet" href="../../common/jsui/jquery-ui-1.12.1/jquery-ui.css">-->
<script>
  import $ from 'jquery'
  import hzftc from './hzftc.vue';
  import gystc from './gystc.vue';
  import djttc from './djtsztc.vue';
  import dztc from './dztc.vue';
  import alert1 from './alert1.vue'
  import sptm from './tanchuanghz/dysptm.vue';
  import spzl from './tanchuanghz/spzl.vue';
  import alert2 from './alert2.vue'
  import nicescroll from '../../common/js_nicescroll/jquery.nicescroll.js'
  //	import url('../../common/jsui/jquery-ui-1.12.1/jquery-ui.min.js')
  import printArea from '../../common/js/jsprint.js';
  import cwzl from './tanchuanghz/cwzl.vue';
  import feixiang from './tanchuanghz/rkdfeixiang.vue'
  import ckzy from './tanchuanghz/rkckzy.vue';
  import xyd from './rkgl/xydtc.vue';
  export default {
    components: {
      'hzftc': hzftc,
      'gystc': gystc,
      'djttc': djttc,
      'dztc': dztc,
      'alert1': alert1,
      'alert2': alert2,
      'feixiang': feixiang,
      'spzl': spzl,
      'sptm': sptm,
      'cwzl': cwzl,
			'ckzy': ckzy,
			'xyd': xyd
    },
    data() {
      return {
          //状态标识管理类
          state:{
            loading: false,//加载遮罩
            djt_Click: false,//单据设置
            hzf_Click: false,//合作方弹窗
            gys_Click: false,//供应商
            alert1_Click: false,
            alert2_Click: false,
            ckzy_Click: false, // 仓库作业
            sptm_Click: false, // 商品条码
            fx_Click: false, // 费项弹窗
            dytm_Click: false,//打印弹窗
            yulan_Click: false,//操作弹窗
            spzl_Click: false,//商品弹窗
            cwzl_Click: false,//仓位弹窗
						pszx: false, //配送中心禁选
						ChooseSourceList_Click: false, // 选源单
            bcsb_Click: false, // 提示框
          },
          infoHint: '', // 提示信息
          sfsc_Click: false, // 是否删除
          psData: {
						peisong: '',//配送
						yuanqu : '',//园区
						hzfid: "", //合作方id
						gysid: '', // 供应商ID
          },
       
        pslock: false, // 配送中心的锁定
        	WarehouseWork: [], // 职员分配比例
				WorkloadParam: [], // 仓库作业情况
				FeeTacticsParam: [],  // 策略情况
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
        //商品表格数组
        splbs: [{
          ProCode: ''
				},],
				shopProID: '', // 存储当前点击的商品ID
        yqlist: [],//园区数组
        cities: [],//配送中心数组
        supPr: '', // 辅助价格
        ConvRates: '', //换算率
        // 入库类型
        rklxs: [
          {
            value: '1',
            label: '正常入库'
          },
          {
            value: '2',
            label: '入库退回'
          }
        ],
        // 交货方式
        jhfss: [
          {
            value: '1',
            label: '到岸'
          },
          {
            value: '2',
            label: '派车'
          }
        ],
        // 运输方式
        ysfss: [
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
        // 提交状态
        tjzts: [
          {
            value: '0',
            label: '未提交'
          },
          {
            value: '1',
            label: '提交'
          }
        ],
        
        hzf: '',//合作方
        spStr:'',//商品查询key
        lookShopNum: '0',//商品表格当前行
        lookShopCell: '',//商品表格当前单元格
        caigouyuan: '',
        shenheren: '',
        zhidanren: isNaN(window.userName) ? window.userName : "",
        shenherq: '',
        //合作方数组
        hzflist: {
          label: '',
          value: '',
        },
        djh: '', // 单据号
        hzfInfo: [],//合作方信息
        zxdlist: [], // 装卸队
        zxdName: '', // 装卸队
        zxdID: '', // 装卸队ID
        DeptID: '', // 部门ID
        DeptName: '', // 部门 NAme
        zxdlistbf: [], // 装卸队北备份
        gysInfo: [], // 供应商组件传过来的数据
        search: '', // 搜索内容
        StorageID: "", //入库单单号
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
        types: [],
        lock: false,
        gys: "",
        rklx: "2",
        jhfs: "1", //交货方式
        ysfs: "1", //运输方式
        tjzt: "1", //提交状态
        ydh: "",
        dz: "",
        bz: "",
        ddrq: "",
        dhsj: "",
        tableData: [],
        tableData3: [],
        StorageID: '', // 保存之后获取的编号
        getBasicAmount: '', // 辅助合计
				getAuxiliaryNumber: '', // 数量合计
				getTotalPrice: '',  // 金额合计
         xydData: [], // 选源单数据存储
        StockData: [{
					StockID: '',
					StockName: ''
				}],
        formInline: {
          user: '',
          region: ''
        },
        oldCell: {
          cell: {},
          key: ''
        },
        shifouZP:[{
					value: 1,
					label: '赠品'
				}, {
					value: 0,
					label: '非赠品'
				}]
      }
    },

    mounted: function () {
      window.vm = this;
      let that = this;
      that.getTotal();
			// 回车直接删除商品
			$(window).on("keydown", function(e) {
				// 1.如果是删除商品弹窗
				if(that.sfsc_Click && e.key == "Enter") {
					that.isDelect();
				}
				// 2.如果是备注
				else if(that.enterFlag == "Remarks" && e.key == "Enter") {
					that.splbs[that.splbs.length - 1].ProName && that.splbs.push({
						ProCode: ''
					});
				}
				// 3.如果是编码
				else if(that.enterFlag == "ProCode" && e.key == "Enter" && that.hzf != '') {
					that.state.spzl_Click = true; //显示商品框
				} else {
          return;
				}
			});
      that.StorageID = this.$route.query.name || ""; //是否获取到了入库单单号
      if (that.StorageID != "") {
        that.getrkdinfo(that.StorageID);
      }

      //订单日期的默认值
      var today = new Date().format('yyyy-MM-dd');
      that.ddrq = that.dhsj = today;
      // setTimeout(function(){that.state.loading=false;},3000);
      //没数据的时候加载示意，有数据的时候注释掉
      that.getdclist();

      $('html').on('click', '.ok', function () {
        that.state.djt_Click = false;
        that.state.hzf_Click = false;
        that.state.gys_Click = false;
        that.dizhi_Click = false;
        that.state.alert1_Click = false;
        that.state.alert2_Click = false;
      });
      $('html').on('click', '.close', function () {
        that.state.djt_Click = false;
        that.state.hzf_Click = false;
        that.state.gys_Click = false;
        that.dizhi_Click = false;
        that.state.alert1_Click = false;
        that.state.alert2_Click = false;
      });
      $('html').on('click', '.rkgl .dy', function () {
        $('.table_dialog').printArea();
      });
      $('html').on('click', '.rkgl .el-breadcrumb-item .close', function () {
        $('.rkgl').hide();

      });

    },
    methods: {
      /**event   */
      //单元格双击，开启可编辑
      dbHandle(row, column, cell, event){
        let key = column.property+'Edit';
        this.$set(row, key, !row[key]);
        
        setTimeout(()=>{
          try{
            $("input",cell).focus();
          }catch(err){
          }
        },100);
      },
      // 根据选源单的数据得到数据
      getStorageData(data) {
        var that= this;
        that.ddbh = data;
        that.state.ChooseSourceList_Click = false;
        var params = {
          OrderID: data
        }
        $.ajax({
          url: 'http://116.62.171.144/post/index.php',
          type: 'POST', //GET
          async: true, //或false,是否异步
          data: {
            datas: params,
            method: "CPHH.PC.StorageModule.Storage.GetOrder"
          },
          timeout: 5000, //超时时间
          success: function(data, textStatus, jqXHR) {
            console.log(data);
            var obj = eval('(' + data + ')');
            if(obj.StateCode == '100') {
              var datas = JSON.parse(obj.Datas);
              var data = datas.Data;
              that.xydData = data;
              that.hatchData(data[0])
              console.log(data)
              that.getTotal();
            }
          }
        });
      },
      // 填充数据
      hatchData(data) {
        var that = this;
        that.dhsj = data.ArrivalTime;
        that.ydh = data.BillNum;
        that.jhfs = data.Delivery;
        that.DeptID = data.DeptID;
        that.DeptName = data.DeptName;
        that.state.gysid = data.SupplierID;
        that.state.yuanqu = data.parkID;
        that.gys = data.SupplierName;
        that.ysfs = data.Transport;
        that.splbs = data.Pro
        for(let i = 0; i < that.splbs.length; i++) {
          that.splbs[i].OrderPNO = data.Pro[i].OrderPNO;
          that.splbs[i].OrderNum = data.Pro[i].OrderNum;
          that.splbs[i].OrderID = data.Pro[i].OrderID;
        }
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
				this.getTotalPrice = totalPrice;
			},
      // Code 编码 调用商品
      callCommodity(scope) {
        console.log(scope.row.ProCode);
        this.spStr = scope.row.ProCode;
      },
      //改变基本数量
      numChange(scope){
        this.disEdit(scope);
        scope.row.SupNum = scope.row.Num / scope.row.ConvRate;
        scope.row.Total = scope.row.Num * scope.row.Price;
        this.getTotal();
      },
      //改变辅助数量
      supNumChanger(scope){
        this.disEdit(scope);
        scope.row.Num = scope.row.SupNum * scope.row.ConvRate;
        scope.row.Total = scope.row.SupNum * scope.row.SupPrice;
        this.getTotal();
      },
       //改变价格
      priceChanger(scope){
        this.disEdit(scope);
        scope.row.SupPrice = scope.row.Price * scope.row.ConvRate;
        scope.row.Total = scope.row.Num * scope.row.Price;
        this.getTotal();
      },
       //改变辅助价格
      supPriceChanger(scope){
        this.disEdit(scope);
        scope.row.Price = scope.row.SupPrice / scope.row.ConvRate;
        scope.row.Total = scope.row.SupNum * scope.row.SupPrice;
        this.getTotal();
      },

      //关闭单元格编辑
      disEdit(scope){
        let key = scope.column.property+'Edit';
        scope.row[key] = false;
      },

      //关闭弹窗
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      //单元格点击
      tbCellClick(row, column, cell, event){
        var that = this;
				var jname = column.property;
        console.log(jname);
        that.lookShopNum = $(cell).parent().index(); //行坐标
        that.enterFlag = jname;
        console.log(that.lookShopNum)
				that.lookShopCell = cell;
				that.shopProID = row.ProID;
        if (row.StockID) {
          console.log(that.StockData)
          that.StockData[0].StockID = row.StockID;
          that.StockData[0].StockName = row.StockName;
        }
        // 如果是编码
				if(jname == 'ProCode') {
					that.enterFlag = 'ProCode';
					console.log(22222,"22" + $(event.target))
					that.dbHandle(row, column, cell, event); //设置单元格input编辑
				}
      },

      handleIconClick() {
        // console.log("1111");
        if (!this.lock) {
          this.lock = true;
        } else {
          this.lock = false;
        }

      },
      // 仓位点击前判断是否有物料
      lookCW () {
        if( this.splbs[this.lookShopNum].ProName) {
          this.state.cwzl_Click = true;
        } else {
          this.state.bcsb_Click = true;
          this.infoHint = "请选择物料";
        }
      },
      //接受仓位信息
      acceptCW(val){
        let row = this.splbs[this.lookShopNum];
        row.StockID = val.InterID;
        this.$set(row, 'StockName', val.Name);
        this.state.cwzl_Click = false;
      },

      /**ajax */
      //如果传值又入库单单号则请求此处方法
      getrkdinfo (storageid) {
        let that = this;
        var jsons = {
          StorageID: storageid,
        }
        $.ajax({
          url: 'http://116.62.171.144/post/index.php',
          type: 'POST', //GET
          async: true, //或false,是否异步
          data: {
            datas: jsons,
            method: "CPHH.PC.StorageModule.StorageOrder.Look" //CPHH.PC.StorageModule.StorageOrder.Delete
          },
          timeout: 5000, //超时时间
          success: function (data, textStatus, jqXHR) {
            // console.log("988", data);
          }
        })
      },
      // 获取商品的单价
      getGoodPrice( goods ,idx) {
        var that = this;
        that.baseAjax("productgetpurchaseprice", {
          ProID: goods.ProID,
        }, function (data) {
          var obj = eval('(' + data + ')');
          var datas = JSON.parse(obj.Datas);
          var data = datas.Data;
          var pr = data[0].Price;
          let supPr = pr * goods.ConvRate;

          that.$set(goods, 'Price', pr);
          that.$set(goods, 'SupPrice', supPr);
          that.getTotal();
        });

      },
      // 获取配送中心列表
      getdclist () {
        var that = this;
        // console.log(that);
        that.baseAjax("getdclist", {
          UserID: window.userid
        }, function (data) {
          var obj = eval('(' + data + ')');

          var datas = JSON.parse(obj.Datas);
          var data = datas.Data;
          that.cities = data;
          that.psData.peisong = data[0].DCID;
        });
      },
      // 获取园区列表
      getyuanqulist (psid) {
        var that = this;
        that.baseAjax("getparklist", {
          UserID: window.userid,
          DCID: psid
        }, function (data) {
          var obj = eval('(' + data + ')');
          var datas = JSON.parse(obj.Datas);
          var data = datas.Data;
          that.yqlist = data;
          // console.log(data)
          that.psData.yuanqu = data[0].ParkID;
        });
      },
       // 获取装卸队数据
      getzxdInfo(psid) {
        var that = this;
        that.baseAjax("handlingteamgetlist", {
          DCID: psid
        }, function (data) {
          var obj = eval('(' + data + ')');
          var datas = JSON.parse(obj.Datas);
          var data = datas.Data;
          that.zxdlist = data;
          that.zxdlistbf = data;
          // console.log(data);
        })
      },
      getCKData (val) {
				console.log("仓库作业情况", val)
				this.state.ckzy_Click = false;
        this.WorkloadParam = val;
			},
      getfxInfo (val) {
        console.log("费项", val)
        this.CostParam = val;
				this.state.fx_Click = false;
			},
			getclInfo (val) {
				console.log("策略", val)
        this.FeeTacticsParam = val;
				this.state.fx_Click = false;
			},
			getclerkInfo(val) {
				console.log("职员分配比例", val)
				this.WarehouseWork = val;
				this.state.fx_Click = false;
			},
      save(Flag){
        var that = this;
        if(that.zxdID == '' || that.zxdName == '') {
          this.state.bcsb_Click = true;
          this.infoHint = "请选择装卸队,数据不合法";
        } else {
          let prods = []
          var FeeTacticss = [];
          var WarehouseWorks = [];
          that.splbs.forEach((item,index,data)=>{
            console.log(item);
              if(item.IsFree == "非赠品") {
                item.IsFree = "0"
              } else {
                item.IsFree = "1"
              }
              let prod = {
                ProID:item.ProID,//商品ID
                Unit:item.Unit,//单位
                StockID:item.StockID,//仓位ID
                Num:item.Num,//基本数量
                Price:item.Price,//基本单价
                SupPrice:item.SupPrice,//辅助价格
                SupUnit:item.SupUnit,//辅助单位
                SupNum:item.SupNum,//辅助数量
                ConvRate:item.ConvRate,//换算率
                Desc: item.Desc || '',//备注
                BodyProperty1:'',//自定义1
                BodyProperty2:'',//自定义2
                BodyProperty3:'',//自定义3
                BodyProperty4:'',//自定义4
                IsFree:item.IsFree,//是否赠品
                Batch:item.Batch,//批次
                Account3: item.Account3,//库存描述
                Account4: item.Account4,//库存属性1
                Account5: item.Account5,//库存属性2
                ProductionDate:new Date().format('yyyy-MM-dd'),//生产日期
                EffectiveDate:new Date().format('yyyy-MM-dd'),//有效期至
                OrderPNO: item.OrderPNO || -1,//订单行序号
                OrderNum: item.OrderPNO || 0,//订单数量
                OrderID: item.OrderPNO || '123',//订单号
                Account1: item.Account1  
                
              }
              prods.push(prod);
          })
          for(let i = 0; i < that.WarehouseWork.length; i++) {
            var WarehouseWorksParam = {
              StaffID: that.WarehouseWork[i].InterID || '',
              StaffName: that.WarehouseWork[i].Name || '',
              Column: '自定义4',
              FeePercent: that.WarehouseWork[i].Percentage || ''
            };
            WarehouseWorks.push(WarehouseWorksParam);
          }
          for ( let i = 0; i < that.FeeTacticsParam.length; i++) {
            var FeeTacticsParams = {
              FeeModuleID: that.FeeTacticsParam[i].FeeModuleID || 0,
              TacticsID: that.FeeTacticsParam[i].TacticsID || '',
              TacticsCode: that.FeeTacticsParam[i].TacticsCode || '',
              TacticsName: that.FeeTacticsParam[i].TacticsName || ''
            };
            FeeTacticss.push(FeeTacticsParams);
          }
  if (that.jhfs == '派车') {
            that.jhfs = 2;
          } else {
            that.jhfs = 1
          }
          if (that.ysfs == '汽运') {
            that.ysfs = 0;
          } else if(that.ysfs == '铁运'){
            that.ysfs = 1;
          } else if(that.ysfs == '海运'){
            that.ysfs = 2;
          } else if(that.ysfs == '空运'){
            that.ysfs = 3;
          } 
          let sendData = {
            Type:'入库退回',//类型
            StorageDate:new Date().format('yyyy-MM-dd'),//日期
            BillNum: that.ydh,//源单号
            SalesMan: userName,//采购员
            Remarks:that.bz,//备注
            SupplierID: that.gysInfo.InterID || that.psData.gysid ,//供应商ID
            ParID: that.psData.hzfid,//合作方ID
            Delivery: that.jhfss[that.jhfs-1].label ,//交货方式
            ArrivalTime: $('#dhsj input').val(),//预计到货时间
            UserID: userid,//用户ID
            UserName: userName,//用户名
            Property1:'',//自定义1
            Property2:'',//自定义2
            Property3:'',//自定义3
            SubmitStatus: that.tjzt,//提交状态
            DCID: that.psData.peisong,//配送中心ID
            DCName: $('#pszx input').val(),//配送中心名称
            DeptID: 0,//部门ID 
            DeptName:'',//部门名称
            HandlingTeamID: that.zxdID,//装卸队ID
            HandlingTeamName: that.zxdName,//装卸队名称
            Transport: that.ysfss[that.ysfs].label,//运输方式
            ParkID: that.psData.yuanqu,//园区ID
            ParkName: $('#yq input').val(),//园区名称
            OrderID: that.ddbh,//入库订单号
            Pro:prods,
            FeeTactics:FeeTacticss,
            Cost:that.CostParam,
            WarehouseWork: WarehouseWorks,
            Workload:that.WorkloadParam
          }
          console.log(sendData);
          $.ajax({
            url: 'http://116.62.171.144/post/index.php',
            type: 'POST', //GET
            async: true, //或false,是否异步
            data: {
                datas: sendData,
                method: "CPHH.PC.StorageModule.Storage.Add"
            },
            timeout: 5000, //超时时间
            success: function(data, textStatus, jqXHR) {
              console.log('商品', data);
                var obj = eval('(' + data + ')');
                if ( obj.StateCode == "100") {
                  that.state.bcsb_Click = true;
                  that.infoHint = "保存成功"
                  that.StorageID = obj.Datas;
                  // 保存成功后  清空内容
                  that.gys = '';
                  that.dz = '';
                  that.bz = '';
                  that.ydh = '';
                  that.zxdName = '';
                  that.splbs = [];
                  that.getTotal();
                  if(Flag === 'audit') {
                    that.auditOrder();
                  }
                } else {
                  that.state.bcsb_Click = true;
                  that.infoHint = obj.Message
                }
                
              // 审核
            }
          })
        }
      },
      // 保存并审核
      saveAndAudit(){
        this.save('audit'); //保存
      },
      auditOrder() {
        var jsons = {
					UserID: userid,
					UserName: userName,
					StorageID: this.StorageID,
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
						// console.log('审核', data)
					}
				})
      },
      // 行删除
			rowDelect(row, event) {
				console.log(row,event);
				event.preventDefault() //阻止默认事件
				this.sfsc_Click = true;
				// 1.获取tr
				var tbody = $(event.target).parents('tr').index();

				console.log('tr1',tbody);
				// this.delIndex = $(event.target).parent().parent().parent().index(); //获取等坐标
			},
			// 是否删除
			isDelect() {
				// console.log(this.splbs);
				this.sfsc_Click = false; // 关闭弹窗
				console.log('1290:',this.splbs);
				this.splbs.splice(this.delIndex, 1); // 删除数据
				if(this.splbs < 1) { // 如果全部删除
					this.splbs.push({
						ProCode: ''
					});
        }
        this.getTotal();
			},

      /**methods   */
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },

      submit(){

      },

      // 设置商品
      setProduct(val) {
				this.state.spzl_Click = false;
				val.forEach((item, index) => {
					this.$set(item, 'Price', 0); // 基本数量初始值为0
					this.$set(item, 'SupPrice', 0); // 基本数量初始值为0
					this.$set(item, 'Num', 0); // 基本数量初始值为0
					this.$set(item, 'SupNum', 0); // 基本数量初始值为0
					this.$set(item, 'Total', 0); // 基本数量初始值为0
					this.$set(item, 'IsFree', "非赠品"); // 基本数量初始值为0
					if(index == 0) { // 第一个商品总是替换
						this.splbs.splice(this.lookShopNum, 1, item);
					} else {
						this.splbs.push(item); // 第二个商品开始,直接添加
					}
					// 设置单价
					this.getGoodPrice(item, index, val);
        });
      },
    
      
      // 配送与园区数据绑定
      pschange (val) {
        var that = this;
        // that.state.pszx = true; // 配送输入框禁用
        //console.log(that.peisong);
        console.log("改变",val)
        that.getyuanqulist(that.psData.peisong);
        that.getzxdInfo(that.psData.peisong);
      },

      //合作方发生改变时执行该方法
      gethzf(val) {
        this.state.pszx = true; // 配送输入框禁用
        this.psData.hzfid = val.InterID;
        this.hzf = val.Name;
        this.state.hzf_Click = false; //关闭弹出框
        this.pslock = true;
        this.getgysInfo();
      },
      // 单选拿到数据，存入数组
      checkgethzfInfo(data) {
        this.hzfInfo = data;
      },
      
      // 确定调用这个方法，传入存储的数据
      checkgethzfdizhi(info) {
        this.state.pszx = true; // 配送输入框禁用
        // console.log(info);
        this.hzf = info.Name
        this.psData.hzfid = info.InterID;
        this.state.hzf_Click = false;
        this.pslock = true;
        this.getgysInfo();
      },
      // 合作方发生改变时执行该方法
			getgysInfo() {
				var that = this;
				that.baseAjax("suppliergetlist", {
					UserID: window.userid,
					ParID: that.psData.hzfid
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.gys = data[0].Name;
					that.psData.gysid = data[0].InterID;
				});
			},
      //供应商发生改变时执行该方法
      getgys(val) {
        // console.log(val); //想要什么数据都在这个val里面拿
				this.gys = val.Name;
				this.state.gysid = val.InterID;
        this.state.gys_Click = false; //关闭弹出框
      },
      // 供应单单选拿到数据，存入数组
      checkgetgysInfo(data) {
        this.gysInfo = data;
        // console.log('gysInfo',this.gysInfo);
      },
      // 供应商确定调用这个方法，传入存储的数据
      checkgetgysdizhi(info) {
        // console.log(info);
        this.gys = info.Name
        this.gysid = info.InterID;
        this.state.gys_Click = false;
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
      getName(val) {
        console.log(val)
        this.zxdName = val.Name;
        this.zxdID = val.InterID
        this.lock = false;
      },
      setAddr (val) { // 取得地址信息
        this.Addr = val;
      },
      addrClick () { // 地址点击事件
        // console.log(this.Addr);
        this.dz = this.Addr.Province + this.Addr.City + this.Addr.Area + this.Addr.Street + this.Addr.Detail;
        this.dizhi_Click = false;
      },
      //此方法是退出的函数
      closetag () {
        $(".is-active .el-icon-close").click();
      },
      handleClick: function(command){
        var that = this;
        if(command === 'lrfy') { // 录入费用
					that.state.fx_Click = true;
				} else if (command === 'sptm') { // 商品条码
          that.state.sptm_Click = true;
				} else if (command === 'tccw') { // 填充仓位
          console.log("填充仓位")
          var getStockID = that.StockData[0].StockID;
					var getStockName = that.StockData[0].StockName;
					for(let i = that.lookShopNum + 1; i < that.splbs.length; i++ ) {
            console.log("填充仓位遍历", i)
            that.$set(that.splbs[i], 'StockName', getStockName);
            that.splbs[i].StockID = getStockID;

					}
				} else if (command === 'ckzy') {
          that.state.ckzy_Click = true;
				}
      }
    }
  }
</script>

<style rel="stylesheet/stylus" scoped>
  /*@import url("../../common/css/rkd/rkd.css");*/

  .blue {
    height: 36px;
    width: 100%;
    background: #cdecfe;
    position: relative;
    border: 1px solid #eee;
  }

  .rkd {
    width: 100%;
    height: 100%;
    padding-left: 5px;
  }

  .rkd .headerTC span:hover {
    background: white;
    color: #35b3fd;
  }

  .rkd .headerTC span {
    display: inline-block;
    width: 55px;
    border: 1px solid #35b3fd;
    background: #35b3fd;
    text-align: center;
    border-radius: 5px;
    color: black;
    cursor: pointer;
  }

  .rkd .headerTC {
    margin: 10px 0;
  }

  .rkd .zxd-dw {
    position: relative;
    width: 100%;
  }

  .rkd .zxdtc {
    position: absolute;
    top: 40px;
    border: 1px solid #35b3fd;
    padding: 10px;
    width: 100%;
    background: white;
    z-index: 1000;
  }

  .blue .fl {
    position: absolute;
    left: 20px;
    top: 3px;
    height: 30px;
  }

  .el-table-column {
    height: 50px;
  }

  .center {
    margin: 0 auto;
  }

  .fr {
    float: right;
  }
.el-table--enable-row-transition .el-table__body td.bianji {
		background: #fff;
	}
  
  .el-row {
    margin-bottom: 2px;
    margin-left: px;
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

  .rkd .two-form {
    width: 100%;
    height: 40px;
    padding-left: 30px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-dialog {
    width: auto;
    height: auto;
  }
  .ckzyBtn2 {
    float: right;
    margin-right: 90px;
    margin-bottom: 10px;
  }
  .input_width {
    width: 100%;
    margin-top: 2px;
  }
  .feixiang{
		width: 25px;
		height: 25px;
		background:url(../../common/img/rk/caiwuguanli.png);
		-webkit-background-size: 25px 25px;
		background-size: 25px 25px;
		border:none;
	}
  h1.center {
    color: #000;
    font-size: 30px;
    font-weight: 900;
    font-family: "微软雅黑";
    text-align: center;
  }
</style>
