<template>
	<div class='ckzy'>
		<!-- 入库退回商品信息 -->
		<!--商品内部按钮弹窗-->
		<div class="select_box">
			<!-- 这里是导航栏部分 -->
			<!--搜索栏结束-->
		  <el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>装卸开始时间：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-date-picker
								v-model="kssj"
								type="datetime"
								placeholder="装卸开始时间">
							</el-date-picker>
						</div>
					</el-col>
			</el-row>	
			<el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>装卸开始时间：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-date-picker
								v-model="jssj"
								type="datetime"
								placeholder="装卸结束时间">
							</el-date-picker>
						</div>
					</el-col>
			</el-row>	
      <el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>叉车工：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-input class=" blueborder input_width" placeholder="" icon="search" v-model="forklift" @click="forkliftPopup = true"></el-input>
						</div>
					</el-col>
			</el-row>	
			<el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>仓管员：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-input class=" blueborder input_width" placeholder="" icon="search" v-model="warehouseKeeper" @click="warehouseKeeperPopup = true"></el-input>
						</div>
					</el-col>
			</el-row>	
			<el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>司机：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-input class=" blueborder input_width" placeholder="" icon="search" v-model="chauffeur" @click="chauffeurPopup = true"></el-input>
						</div>
					</el-col>
			</el-row>
			<el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>车牌：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-input class=" blueborder input_width" placeholder="" icon="search" v-model="licencePlate" @click="licencePlatePopup = true"></el-input>
						</div>
					</el-col>
			</el-row>
			<el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>司机身份证：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-input class=" blueborder input_width" placeholder=""  v-model="DriverIdCard"></el-input>
						</div>
					</el-col>
			</el-row>
			<el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>司机电话：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-input class=" blueborder input_width" placeholder="" v-model="driverPhone"></el-input>
						</div>
					</el-col>
			</el-row>
			<el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>装卸量：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-input class=" blueborder input_width" placeholder="" v-model="unloadingNum"></el-input>
						</div>
					</el-col>
			</el-row>
			<el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>搬运量：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-input class=" blueborder input_width" placeholder="" v-model="carryingNum"></el-input>
						</div>
					</el-col>
			</el-row>
			<el-row :gutter="10" type="flex">
				 <el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<span>备注：</span>
						</div>
					</el-col>
					<el-col :xs="10" :sm="10" :md="10" :lg="10">
						<div class="grid-content  ">
							<el-input type="textarea" v-model="desc"></el-input>
						</div>
					</el-col>
			</el-row>
		</div>

		<!-- 内部弹窗 -->
		<!--叉车工弹窗-->
		<el-dialog id='ccgtc' title="选择人员" :visible.sync="forkliftPopup" v-if="forkliftPopup">
			<div class='table'>
				<div class="but-box">
				<ul>
					<li>
						<div class="boxtab">
							<div class="curbox bc"  @click='renxuanqr("ccg")' ><span>确定</span></div>
						</div>
					</li>
					<li>
						<div class="boxtab" @click="forkliftPopup = false">
							<div class="curbox bcsh"><span>退出</span></div>
						</div><span class="gun"></span></li>
					</ul>
					</div>
				<el-transfer v-model="ccgxm2" :titles="['预览', '选中']" :props="{key: 'value',label: 'desc'}" :data="ccglb">
					<div>你好</div>
				</el-transfer>
			</div>

		</el-dialog>
			<!--仓管员弹窗-->
		<el-dialog id='cgytc' title="选择人员" :visible.sync="warehouseKeeperPopup" v-if="warehouseKeeperPopup">  
			<div class='table'>
				<div class="but-box">
					<ul>
						<li>
							<div class="boxtab">
								<div class="curbox bc"  @click='renxuanqr("cgy")'><span>确定</span></div>
							</div>
						</li>
						<li>
							<div class="boxtab"  @click="warehouseKeeperPopup = false">
								<div class="curbox bcsh"><span>退出</span></div>
							</div><span class="gun"></span>
						</li>
					</ul>
				</div>
				<div class="table-2">
					<div class="left-table">
             <el-table :data="cgylb" border highlight-current-row @header-click="headercgy" @cell-dblclick="dbCheckcgy" @cell-click="djCheckcgy" style="width:100%" class='spbg' height="360" >
               <el-table-column type="index" width="40">
								 <el-table-column type='index' label="0" width="30" >
								 </el-table-column>
							 </el-table-column>
							 <el-table-column prop="Code" label="编号" width="65">
								 <el-table-column prop='Code' label="" width="65" class-name="mohucha">
								 </el-table-column>
							 </el-table-column>
							 <el-table-column prop="Name" label="姓名" width="65">
								 <el-table-column prop='Name' label="" width="65" class-name="mohucha">
								 </el-table-column>
							 </el-table-column>
							 <el-table-column prop="Department" label="部门" width="65">
								 <el-table-column prop='Department' label="" width="65" class-name="mohucha">
								 </el-table-column>
							 </el-table-column>
							 <el-table-column prop="JobType" label="类型" width="65">
								 <el-table-column prop='JobType' label="" width="65" class-name="mohucha">
								 </el-table-column>
							 </el-table-column>
							 <el-table-column prop="Duty" label="职务" width="65">
								 <el-table-column prop='Duty' label="" width="65" class-name="mohucha">
								 </el-table-column>
							 </el-table-column>
						 </el-table>
					</div>
					<div class="table-btn">
             <div class="top-right" @click="checkConfirm('right')">
							 >>>
						 </div>
             <div class="bottom-left" @click="checkConfirm('left')">
							 <<<
						 </div>
					</div>
					<div class="right-table">
             <el-table :data="checkcgylb" @header-click="headerCheck" @cell-dblclick="dbCheckCheck"  @cell-click="djCheckcgy" border style="width:100%" class='spbg' height="360" @selection-change='drivercollect'>
               <el-table-column type="index" width="40">
								 <el-table-column type='index' label="0" width="30" >
								 </el-table-column>
							 </el-table-column>
							 <el-table-column prop="Name" label="姓名" width="80">
								 <el-table-column prop='Name' label="" width="80" class-name="mohucha">
								 </el-table-column>
							 </el-table-column>
						 </el-table>
					</div>
				</div>
			</div>
			

			
			
			
		</el-dialog>
		<!--司机弹窗-->
		<el-dialog id='sjtc' title="司机档案列表" :visible.sync="chauffeurPopup" v-if="chauffeurPopup">
		<!-- 这里是导航栏部分 -->
			<div class="but-box">
				<ul>
					<li>
						<div class="boxtab">
							<div class="curbox bc" @click='renxuanqr("sj")'><span>确认</span></div>
						</div>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox bcsh"><span>查看</span></div>
						</div><span class="gun"></span></li>
					<li>
						<div class="boxtab">
							<div class="curbox syt"><span>导出</span></div>
						</div>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox xyt"><span>禁用</span></div>
						</div><span class="gun"></span></li>
					<li>
						<div class="boxtab">
							<div class="curbox bz"><span>反禁用</span></div>
						</div><span class="gun"></span></li>
					<li>
						<div class="boxtab">
							<div class="curbox djsz"><span>窗体样式</span></div>
						</div><span class="gun"></span></li>
				
					
					<li>
						<div class="boxtab">
							<div class="curbox tc" @click="chauffeurPopup=false"><span>退出</span></div>
						</div><span class="gun"></span></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->
			<div class='search'>
				<el-row :gutter="10">
          <el-col :span="4">
            <div class="grid-content  ">
              <p>配送中心：</p>

            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content  ">

              <!-- 配送中心列表 -->
              <el-select id="pszx" v-model="peisong" @change="pschange" disabled filterable placeholder="" class=" blueborder input_width">
                <el-option v-for="item in cities" :key="item.DCID"  :label="item.DCName" :value="item.DCID">
                  <span style="float: left">{{ item.DCName }}</span>
                </el-option>
              </el-select>
              <!-- 配送中心列表结束 -->
            </div>
          </el-col>
          <el-col :span="3">
						<div class="grid-content  ">
						  <el-button  class='sjcx' @click='sjclcx("sjcx")'>查询</el-button>
						</div>
          </el-col>
				</el-row>
			</div>
			<div class="table-1">
			<!--司机姓名表格部分-->
			<el-table :data="sjxmlb" border style="width:100%" @header-click="headercx" @cell-dblclick="dbCheck" @row-click="chenkSJ" @row-dblclick="dbclickSJ" class='spbg' height="360" @selection-change='drivercollect'>
				<el-table-column type="index" width="40">
					<el-table-column type='index' label="" width="40" >
				  </el-table-column>
				</el-table-column>
				<el-table-column type="selection" width="40">
					<el-table-column type="selection" label="" width="40">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Name" label="姓名" width="auto">
					<el-table-column prop="Name" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Sex" label="性别" width="auto">
					<el-table-column prop="Sex" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Cellphone" label="手机号码" width="auto">
					<el-table-column prop="Cellphone" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Telephone" label="固定号码" width="auto">
					<el-table-column prop="Telephone" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>		
				<el-table-column prop="IDNumber" label="身份证号" width="auto">
					<el-table-column prop="IDNumber" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="DrivingLicense" label="驾驶证号码" width="auto">
					<el-table-column prop="DrivingLicense" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Address" label="住址" width="auto">
					<el-table-column prop="Address" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="DrivingLicensePeriod" label="驾驶证有效期" width="auto">
					<el-table-column prop="DrivingLicensePeriod" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="TransportCompanyName" label="承运公司" width="auto">
					<el-table-column prop="TransportCompanyName" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="DCName" label="配送中心" width="auto">
					<el-table-column prop="DCName" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Forbidden" label="是否禁用" width="auto">
					<el-table-column prop="Forbidden" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Status" label="司机状态" width="auto">
					<el-table-column prop="Status" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
			</el-table>	
			</div>
		</el-dialog>
		<!--车牌弹窗-->
		<el-dialog id='cltc' title="车辆档案列表" :visible.sync="licencePlatePopup"  v-if="licencePlatePopup">
			<!-- 这里是导航栏部分 -->
			<div class="but-box">
				<ul>
					<li>
						<div class="boxtab">
							<div class="curbox bc" @click='renxuanqr("cl")'><span>确认</span></div>
						</div>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox bcsh"><span>查看</span></div>
						</div><span class="gun"></span></li>
					<li>
						<div class="boxtab">
							<div class="curbox syt"><span>导出</span></div>
						</div>
					</li>
					<li>
						<div class="boxtab">
							<div class="curbox xyt"><span>禁用</span></div>
						</div><span class="gun"></span></li>
					<li>
						<div class="boxtab">
							<div class="curbox bz"><span>反禁用</span></div>
						</div><span class="gun"></span></li>
					<li>
						<div class="boxtab">
							<div class="curbox djsz"><span>窗体样式</span></div>
						</div><span class="gun"></span></li>
				
					
					<li>
						<div class="boxtab">
							<div class="curbox tc" @click="closetag"><span>退出</span></div>
						</div><span class="gun"></span></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->
			<div class='search'>
				<el-row :gutter="10">
          <el-col :span="4">
            <div class="grid-content  ">
              <p>配送中心：</p>

            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content  ">

              <!-- 配送中心列表 -->
              <el-select id="pszx" v-model="peisong" @change="pschange" disabled filterable placeholder="" class=" blueborder input_width">
                <el-option v-for="item in cities" :key="item.DCID"  :label="item.DCName" :value="item.DCID">
                  <span style="float: left">{{ item.DCName }}</span>
                </el-option>
              </el-select>
              <!-- 配送中心列表结束 -->
            </div>
          </el-col>
          <el-col :span="3">
						<div class="grid-content  ">
						  <el-button  class='sjcx' @click='sjclcx("clcx")'>查询</el-button>
						</div>
          </el-col>
				</el-row>
			</div>
			<!--车辆档案表格部分-->
			<div class="table">
			<el-table :data="cldalb" @header-click="headerc"   @cell-dblclick="dbrow" @row-click="chenkCP"  border style="width:100%" class='spbg' height="360" @selection-change='carcollect'>
				<el-table-column type="index" label="0" width="40">
					<el-table-column type="index" label="" width="40">
				  </el-table-column>
				</el-table-column>
				<el-table-column type="selection" width="40">
					<el-table-column type="selection"  width="40">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="PlateNumber" label="车牌号" width="auto">
					<el-table-column prop="PlateNumber" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="CarType" label="车辆分类" width="auto">
					<el-table-column prop="CarType" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="CarModel" label="车型" width="auto">
					<el-table-column prop="CarModel" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="UseType" label="用车类型" width="auto" sortable>
					<el-table-column prop="UseType" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="VehicleLicenseNumber" label="行驶证号" width="auto">
					<el-table-column prop="VehicleLicenseNumber" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="FrameNumber" label="车架号码" width="auto">
					<el-table-column prop="FrameNumber" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="TrailerNumber" label="挂车号码" width="auto">
					<el-table-column prop="TrailerNumber" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="EngineNumber" label="发动机号" width="auto">
					<el-table-column prop="EngineNumber" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="OperationIDNumber" label="营运证号" width="auto">
					<el-table-column prop="OperationIDNumber" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="PolicyNo" label="保险单号" width="auto">
					<el-table-column prop="PolicyNo" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="AdditionalCardNumber" label="附加费证号" width="auto">
					<el-table-column prop="AdditionalCardNumber" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Weight" label="可载重量" width="auto">
					<el-table-column prop="Weight" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Volume" label="可载体积" width="auto">
					<el-table-column prop="Volume" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>	
				<el-table-column prop="Name" label="司机姓名" width="auto">
					<el-table-column prop="Name" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Cellphone" label="司机电话" width="auto">
					<el-table-column prop="Cellphone" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="IDNumber" label="身份证号" width="auto">
					<el-table-column prop="IDNumber" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Telephone" label="家庭电话" width="auto">
					<el-table-column prop="Telephone" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Address" label="司机住址" width="auto">
					<el-table-column prop="Address" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="DrivingLicense" label="驾驶证号" width="auto">
					<el-table-column prop="DrivingLicense" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Remarks" label="备注" width="auto">
					<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="DCName" label="配送中心" width="auto">
					<el-table-column prop="DCName" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="MaintenanceMileage" label="保养公里数" width="auto">
					<el-table-column prop="MaintenanceMileage" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="MaintenanceOfMaturity" label="保养到期日" width="auto">
					<el-table-column prop="MaintenanceOfMaturity" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="ExpirationOfPolicy" label="保险单到期日" width="auto">
					<el-table-column prop="ExpirationOfPolicy" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="RunTheDueDate" label="营运证年审到期日" width="auto">
					<el-table-column prop="RunTheDueDate" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="YearlyCheckDueDate" label="年检到期日" width="auto">
					<el-table-column prop="YearlyCheckDueDate" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Premium" label="保险费" width="auto">
					<el-table-column prop="Premium" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Forbidden" label="是否禁用" width="50">
					<el-table-column type="selection"  :reserve-selection = false label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Status" label="车辆状态" width="auto">
					<el-table-column prop="Status" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
				<el-table-column prop="Equipment" label="设备类型" width="auto">
					<el-table-column prop="Equipment" label="" width="auto" class-name="mohucha">
				  </el-table-column>
				</el-table-column>
			</el-table>	
			</div>
		</el-dialog>
		<el-button type="primary" class="ckzyBtn1"  @click="sendData" >确 定</el-button>
		<div id='theMask'> </div>
	</div>
</template>

<script>
	export default {
		props: {	
			sendDCID:'',
		},
		data() {
			return {
        kssj: '', // 装卸开始时刻
				jssj: '', // 装卸结束时间
				forklift: '', // 叉车工
				forkliftID: '', // 叉车工id
				warehouseKeeper:'', // 仓管员
				warehouseKeeperID: '', // 仓管员ID
				chauffeur: '', // 司机
				licencePlate: '', // 车牌
				DriverIdCard: '', // 司机身份证
				driverPhone: '', // 司机电话
				unloadingNum: '0', // 装卸量
				carryingNum: '0', // 搬运量
				desc: '', // 备注
				forkliftPopup: false, // 叉车工弹窗
				warehouseKeeperPopup: false, // 仓管员弹窗
				chauffeurPopup: false, // 司机弹窗
				licencePlatePopup: false, // 车牌弹窗
				cldalb: [], // 车辆档案列表
				cities: [], // 配送中心列表
				peisong: '', // 配送中心ID
				sjxmlb: [], // 司机姓名列表
				cldalb: [], // 车辆信息
				ccgxm2: [], // 叉车工穿梭框
				ccglb: [], // 叉车工列表
				cgylb: [], // 仓管员列表
				checkcgylb: [], // 选中的仓管员列表
				rowIndex: 0, // 点击单元格获取行坐标
				storageData: [], // 存储接收信息
				selectionChange: [], // 勾选数据存储，用于点击确定按钮调用
				clickData: [], // 单击数据存储，用于点击确定按钮调用
			}
		},
		watch: {
			sendDCID() { // 合作方改变的时候,改变树形数据
				// this.tree_data[0].children[0].label = this.sphzf; 
				this.getDataInfo(this.sendDCID);
			},
		},
		mounted:function (){
			var that = this;
			//订单日期的默认值
			var myDate = new Date();
			var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
			var m = myDate.getMonth() + 1; //获取当前月份(0-10,0代表1月)
			var d = myDate.getDate(); //获取当前日(1-31)
			var s = myDate.getHours(); //获取当前小时(1-23)
			var f = myDate.getMinutes(); //获取当前分钟(1-59)
			var today = y + "-" + m + "-" + d + " " + s + ":" + f;
			that.kssj = today;
			that.jssj = today;
       
      that.storageData = that.sendDCID;
			console.log(that.storageData);
			that.getDataInfo(that.storageData);
		},
		methods: {
			getDataInfo (data) {
        var that = this;
				// 叉车工
				var ccparams = {
					JobType: '叉车工',
					ParID: 0,
					DCID: data
				}
				$.ajax({
          url: 'http://116.62.171.144/post/index.php',
          type: 'POST', //GET
          async: true, //或false,是否异步
          data: {
              datas: ccparams,
              method: "CPHH.PC.BaseInfo.Staff.GetListByJobType"
          },
          timeout: 5000, //超时时间
          success: function(data, textStatus, jqXHR) {
            console.log('叉车工', data);
          }
        })

        // 仓管员
				var cgparams = {
					JobType: '仓管员',
					ParID: 0,
					DCID: data
				}
				$.ajax({
          url: 'http://116.62.171.144/post/index.php',
          type: 'POST', //GET
          async: true, //或false,是否异步
          data: {
              datas: cgparams,
              method: "CPHH.PC.BaseInfo.Staff.GetListByJobType"
          },
          timeout: 5000, //超时时间
          success: function(result, textStatus, jqXHR) {
						var obj = eval('(' + result + ')');
						console.log(result, data )
						if(obj.StateCode == "100") {
							var result = JSON.parse(obj.Datas)
							console.log('仓管员', result);
							that.cgylb = result.Data;
							console.log(that.cgylb)
						}
						
          }
        })

				// 司机
				var sjparams = {
					DCID: data
				}
				$.ajax({
          url: 'http://116.62.171.144/post/index.php',
          type: 'POST', //GET
          async: true, //或false,是否异步
          data: {
              datas: sjparams,
              method: "CPHH.PC.BaseInfo.Driver.GetList"
          },
          timeout: 5000, //超时时间
          success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						if(obj.StateCode == "100") {
							var result = JSON.parse(obj.Datas)
							console.log('司机', result, obj);
							that.sjxmlb = result.Data;
							that.peisong = result.DCName;
						}
          }
        })

				// 车牌
				var cpparams = {
					DCID: data
				}
				$.ajax({
          url: 'http://116.62.171.144/post/index.php',
          type: 'POST', //GET
          async: true, //或false,是否异步
          data: {
              datas: sjparams,
              method: "CPHH.PC.BaseInfo.Car.GetList"
          },
          timeout: 5000, //超时时间
          success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						if(obj.StateCode == "100") {
							var result = JSON.parse(obj.Datas)
							console.log('车辆', result, obj);
							that.cldalb = result.Data;
							that.peisong = result.DCName;
						}
          }
        })
			},
			sendData () {
        var params = {
					HandlingStartDate: this.kssj,
					HandlingEndDate: this.jssj,
					ForkliftWorkerID: this.forkliftID,
					ForkliftWorker: this.forklift,
					StoremanID: this.warehouseKeeperID,
					Storeman: this.warehouseKeeper,
					Driver: this.chauffeur,
					PlateNumber: this.licencePlate,
					DriverPhone: this.driverPhone,
					DriverIDNumber: this.DriverIdCard,
					Remarks: this.desc,
					LoadAndUnLoadWeight: parseFloat(this.unloadingNum),
					CarryWeight: parseFloat(this.carryingNum)
				}
				console.log(params)
				this.$emit("receiveData", params);

			},
			// 选择
      renxuanqr (param) {
        if(param === 'sj') {
          console.log("司机")
					this.chauffeur = this.clickData.Name || this.selectionChange[0].Name;
					this.driverPhone = this.clickData.Cellphone || this.selectionChange[0].Cellphone;
					this.chauffeurPopup = false;
				} else if (param === 'cl') {
					this.licencePlate = this.clickData.PlateNumber || this.selectionChange[0].PlateNumber;
					this.licencePlatePopup = false;
				} else if (param === 'cgy') {
					this.warehouseKeeperID = "";
					this.warehouseKeeper = "";
          for (let i = 0; i < this.checkcgylb.length; i++) {
						this.warehouseKeeperID += (this.checkcgylb[i].InterID) + ','
						this.warehouseKeeper += (this.checkcgylb[i].Name) + ',' 
					}
					this.warehouseKeeperPopup = false;
				}
			},
			// 搜索
			sjclcx (param) {

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
          that.peisong = that.sendDCID;
					console.log(that.peisong)
        });
      },	
			// 配送中心改变
			pschange () {

			},
			chenkCP (val) {
        console.log(val)
				this.clickData = val;
			},
			// 车牌列表勾选时
			carcollect (val) {
        console.log(val)
				this.selectionChange = val
			},
			// 弹窗退出按钮
			closetag() {
        this.licencePlatePopup = false;
			},
			// selection 时 判断是否禁用
			checkSelectable (row,index) {
        console.log(row, index)

			},
			// 司机单击时
			chenkSJ (val) {
        console.log(val)
				this.clickData = val;
			},
			// 司机列表勾选时
			drivercollect(val) {
        console.log(val)
				this.selectionChange = val
			},
			// 双击选择司机
			dbclickSJ (val) {
        console.log(val)
				this.chauffeurPopup = false;
				this.chauffeur = val.Name;
				this.driverPhone = val.Cellphone
			},
			djCheckcgy (row, column, cell, event) {
        var that = this;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
        that.rowIndex = index;
				console.log("行坐标",index)
				console.log("数据",row)
			},
			// 点击左右按钮， 根据传值判断是往左或者右穿梭
			checkConfirm (flag) {
				// 往右表格穿梭数据
        if (flag === 'right') {
					if(this.cgylb.length === 0) {
						return;
					} else {
            this.checkcgylb.push(this.cgylb[this.rowIndex]);
						this.cgylb.splice(this.rowIndex, 1);
						this.rowIndex = '0';
					}
				} else { // 往左
				  if(this.checkcgylb.length === 0) {
						return;
					} else {
            this.cgylb.push(this.checkcgylb[this.rowIndex]);
						this.checkcgylb.splice(this.rowIndex, 1);
						this.rowIndex = '0';
					}
				}
			},
			// 仓管员左边表格双击
			dbCheckcgy: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				that.checkcgylb.push(that.cgylb[index]);
				that.cgylb.splice(index, 1);
				if (index >= 0) {
			    that.licencePlate = row.PlateNumber;
					that.licencePlatePopup = false;
					console.log(index)
					return false
				}
				var jname = column.property;
				var $oldhtml = $($cell.html());
				var val = $oldhtml.html();
				$inp.val(val);
				$cell.html("").append($inp);
				$inp.focus();

				$inp.blur(function() {
					val = $inp.val();
					$oldhtml.html(val);
					$cell.html("").append($oldhtml);
					if(index != 0) {
						eval("that.cgylb[index]." + jname + "=val");
					}
				});
			},
			// 仓管员左边表格
			headercgy: function(column, event) {
			
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".left-table")); //匹配行Th
				var $table = $($(".left-table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)
				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				// console.log("val", index)
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					console.log("v", v)
					$("tr",$table).show();//先全部展示出来
					console.log('$datath', $datath);
					$datath.each(function() {
						var $this = $(this);
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							console.log('thv,idx, $table');
							console.log(thv,idx, $table);
							that.mohucha(thv, idx, $table);
						}
					});
				});
				$inp.blur(function() {
					val = $inp.val(); //离开时在获一次值
					$dom.html(val);
				});
			},
			// 仓管员右边表格双击
			dbCheckCheck: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				that.cgylb.push(that.checkcgylb[index]);
				that.checkcgylb.splice(index, 1);
				if (index >= 0) {
			    that.licencePlate = row.PlateNumber;
					that.licencePlatePopup = false;
					console.log(index)
					return false
				}
				var jname = column.property;
				var $oldhtml = $($cell.html());
				var val = $oldhtml.html();
				$inp.val(val);
				$cell.html("").append($inp);
				$inp.focus();

				$inp.blur(function() {
					val = $inp.val();
					$oldhtml.html(val);
					$cell.html("").append($oldhtml);
					if(index != 0) {
						eval("that.checkcgylb[index]." + jname + "=val");
					}
				});
			},
			// 仓管员右边表格
			headerCheck: function(column, event) {
			
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".right-table")); //匹配行Th
				var $table = $($(".right-table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)
				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				// console.log("val", index)
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					console.log("v", v)
					$("tr",$table).show();//先全部展示出来
					console.log('$datath', $datath);
					$datath.each(function() {
						var $this = $(this);
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							console.log('thv,idx, $table');
							console.log(thv,idx, $table);
							that.mohucha(thv, idx, $table);
						}
					});
				});
				$inp.blur(function() {
					val = $inp.val(); //离开时在获一次值
					$dom.html(val);
				});
			},
			// 司机表格模糊查询
			dbCheck: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				if (index >= 0) {
			    that.licencePlate = row.PlateNumber;
					that.licencePlatePopup = false;
					console.log(index)
					return false
				}
				var jname = column.property;
				var $oldhtml = $($cell.html());
				var val = $oldhtml.html();
				$inp.val(val);
				$cell.html("").append($inp);
				$inp.focus();

				$inp.blur(function() {
					val = $inp.val();
					$oldhtml.html(val);
					$cell.html("").append($oldhtml);
					if(index != 0) {
						eval("that.cgylb[index]." + jname + "=val");
					}
				});
			},
			// 司机表格
			//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加  class-name="mohucha"
			headercx: function(column, event) {
			
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".table-1")); //匹配行Th
				var $table = $($(".table-1 table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)
				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				// console.log("val", index)
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					console.log("v", v)
					$("tr",$table).show();//先全部展示出来
					console.log('$datath', $datath);
					$datath.each(function() {
						var $this = $(this);
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							console.log('thv,idx, $table');
							console.log(thv,idx, $table);
							that.mohucha(thv, idx, $table);
						}
					});
				});
				$inp.blur(function() {
					val = $inp.val(); //离开时在获一次值
					$dom.html(val);
				});
			},
			// 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				if (index >= 0) {
			    that.licencePlate = row.PlateNumber;
					that.licencePlatePopup = false;
					console.log(index)
					return false
				}
				var jname = column.property;
				var $oldhtml = $($cell.html());
				var val = $oldhtml.html();
				$inp.val(val);
				$cell.html("").append($inp);
				$inp.focus();

				$inp.blur(function() {
					val = $inp.val();
					$oldhtml.html(val);
					$cell.html("").append($oldhtml);
					if(index != 0) {
						eval("that.cldalb[index]." + jname + "=val");
					}
				});
			},
			mohucha: function(val, index, $table) {
				var v = val;
				var $trArr = $("tr", $table);
				var trlen = $trArr.length;
				for(var i = 0; i < trlen; i++) {
					var $tr = $($trArr[i]);
					var iv = $($("td .cell", $tr)[index]).html().indexOf(v); //匹配是否含有
					if(iv <= -1) {
						$tr.hide();
					} 
				}
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
				// console.log("val", index)
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					console.log("v", v)
					$("tr",$table).show();//先全部展示出来
					console.log('$datath', $datath);
					$datath.each(function() {
						var $this = $(this);
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							console.log('thv,idx, $table');
							console.log(thv,idx, $table);
							that.mohucha(thv, idx, $table);
						}
					});
				});
				$inp.blur(function() {
					val = $inp.val(); //离开时在获一次值
					$dom.html(val);
				});
			},
		}	
}
</script>

<style>
.ckzy {
	position: relative;	
	width: 100%;
	height: 540px;
}
.ckzy .grid-content span {
	display: inline-block;
	width: 100%;
	text-align: center;
}
.ckzy .el-date-editor.el-input {
  width: 100%;
}

.table-2 {
	width: 100%;
	height: 360px;
}	
.left-table {
	float: left;
	width: 45%;
	height: 100%;
	background: gray;
}
.right-table {
	float: right;
	width: 45%;
	height: 100%;
	background: gray;
}
.table-btn {
	position: relative;
	float: left;
	width: 10%;
	height: 100%;
  background: #e1e1e1;
}
.table-btn .top-right {
	position: absolute;
	top: 100px;
	left: 16px;
	width: 50px;
	height: 30px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 14px;
	text-align: center;
	line-height: 30px;
	color: white;
	box-shadow: 3px 3px #000;
	background: #36b4fe;
}
.table-btn .bottom-left {
	position: absolute;
	bottom: 100px;
	left: 16px;
	width: 50px;
	height: 30px;
	border-radius: 5px;
	cursor: pointer;
	color: white;
	font-size: 14px;
	text-align: center;
	line-height: 30px;
	box-shadow: 3px 3px #000;
	background: #36b4fe;
}
.top-right:hover , .bottom-left:hover {
	background: white;
	color: #36b4fe;
	box-shadow: 3px 3px #36b4fe;
}
	.grid-content button {
		padding: 6px 15px;
	}
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	.grid-content p {
		text-align: center;
	}
	
  #ccgtc {
		width: 200%;
		left: -50%;
	}	
	#cgytc {
		width: 200%;
		left: -50%;
	}
	#sjtc {
		width: 200%;
		left: -50%;
		overflow: inherit;
	}
	#cltc {
		width: 200%;
		left: -50%;
		overflow: inherit;
	}
	#cltc .el-dialog--small {
    width: 100%;
 }
	.el-dialog--small {
    width: 70%;
 }
 .el-transfer-panel {
	 width: 45%;
 }
	.v-modal {
		z-index: 2001 !important;
	}
	.ckzyBtn1 {
    position: absolute;
		bottom: -36px ;
		right: 170px;
	}
</style>
