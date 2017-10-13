<template>
	<div class='rkddlb'>
		<!--入库订单俩表-->

		<!-- 这里是导航栏部分 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<router-link to="rkgl">
							<div class="curbox xz">新增</div>
							<span style="display: none">入库订单</span>
						</router-link>
						
					</div>
				</li>
				<li>
					<div class="boxtab">
						<router-link to="rkddxg">
							<div class="curbox xg">修改</div>
							<span style="display: none">订单修改</span>
						</router-link>
						
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<router-link to="rkddck" class="watch">
						  <div class="curbox ck">查看</div>
						  <span style="display: none">订单修改</span>
						</router-link>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox sc" @click="delect"><span>删除</span></div>
					</div><span class="gun"></span></li>
				<li>
					<li>
					<div class="boxtab">
						<div class="curbox dy"><span>打印</span></div>
					</div><span class="gun"></span></li>
				<li>
					<li>
					<div class="boxtab">
						<div class="curbox yl"><span>预览</span></div>
					</div><span class="gun"></span></li>
				<li>
					<li>
					<div class="boxtab">
						<div class="curbox dy"><span>打印2</span></div>
					</div><span class="gun"></span></li>
				<li>
					<li>
					<div class="boxtab">
						<div class="curbox yl"><span>预览2</span></div>
					</div><span class="gun"></span></li>
				<li>
					<li>
					<div class="boxtab" >
						<div class="curbox sh" @click="checkInfo"><span>审核</span></div>
					</div><span class="gun"></span></li>
				<li>
					<li>
					<div class="boxtab">
						<div class="curbox plsh" @click="plCheck"><span>批量审核</span></div>
					</div><span class="gun"></span></li>
				<li>
					<li>
					<div class="boxtab">
						<div class="curbox bz" @click="remarksClick"><span>备注</span></div>
					</div><span class="gun"></span></li>
				<li>
					
					<div class="boxtab">
						<div class="curbox ctys">
							<!-- <span>窗体样式</span> -->
							<el-dropdown split-button @click="handleClick">
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
					</div><span class="gun"></span></li>
			</ul>
		</div>
		<!-- 这里是导航栏部分结束 -->

		<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">
							<el-select v-model="zdrq" placeholder="出库日期" class='zdrq input_width'>
								<el-option v-for="item in zdrqlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<!--check-->
					<el-col :span="3">
						<div class="grid-content ">
							<el-date-picker v-model="ksrq" id="ksrq" align="right" type="date" class='input_width' placeholder="选择日期" :picker-options="pickerOptions1">
							</el-date-picker>
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content ">
							<p class=''>至</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-date-picker v-model="jsrq" id="jsrq" align="right" class='input_width' type="date" placeholder="选择日期" :picker-options="pickerOptions2">
							</el-date-picker>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">

							<p class=''>合作方(*):</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-select v-model="hzf" default-first-option no-data-text="无数据" @change="gethzfID" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
								</el-option>
							</el-select>

						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>审核标志:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<el-select v-model="shbz" placeholder="全部" class="input_width shbz">
								<el-option v-for="item in shbzlist" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>

				</el-row>

			</el-form>
			<!--form第二行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :span="2">
						<div class="grid-content ">

							<p class=''>配送中心*:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<!-- 配送中心列表 -->
							<el-select v-model="peisong" @change="pschange" filterable placeholder="" v-loading.body="loading"  element-loading-text="玩命加载中" class=" blueborder input_width" :disabled="pszx">
								<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
						</div>
					</el-col>
					<el-col :span="1">
						<div class="grid-content yqbj">

							<p class=''>园区 ：</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content yqbj">

							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="23132" class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">

							<p class=''>订单号:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">
							<el-input class=" input_width " size="small" placeholder="" v-model="ddh">
							</el-input>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<p>&nbsp;</p>

						</div>
					</el-col>
					<el-col :span="2" class="bt">
						<div class="grid-content fr bt" >
							<el-button type="primary" size="small" @click="searchInfo" class='cx'><i class='el-icon-search'></i>查询</el-button>
							<!--<el-button type="primary" size="small" @click.native='' class='close'>关闭</el-button>-->
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content fl">
							<el-button type="primary" size="small"  class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>
			</el-form>
		</div>

		<!--搜索框完-->
		<!--表格-->
		<div class="table">	
		<el-table :data="rkddlist" height="600" border style="width: 100%" el-table-column highlight-current-row  @row-click="rowClick" @selection-change="handleSelectionChange" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中" >
			<el-table-column type='index'  label="" width="50">
				<el-table-column  type="index" label="0" width="50">
				</el-table-column>
			</el-table-column>	
			<el-table-column type='selection' prop="" label="选定框" width="50">	
				<el-table-column  type="selection" label="" width="50">
				</el-table-column>	
			</el-table-column>
			<el-table-column prop="CheckMark" label="审核标志" width="auto">
				<el-table-column  prop="CheckMark" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CloseMark" label="状态" width="auto">
				<el-table-column  prop="CloseMark" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="StorageDate" label="订单日期" width="auto">
				<el-table-column  prop="StorageDate" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="StorageID" label="单据编号" width="auto">
				<el-table-column  prop="StorageID" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Type" label="入库类型" width="auto">
				<el-table-column  prop="Type" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="SupplierName" label="供应商" width="auto">
				<el-table-column  prop="SupplierName" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Total" label="单据金额" width="auto">
				<el-table-column  prop="Total" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="BillNum" label="源单号" width="auto">
				<el-table-column  prop="BillNum" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="SalesMan" label="业务员" width="auto">
				<el-table-column  prop="SalesMan" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Remarks" label="备注" width="auto">
				<el-table-column  prop="Remarks" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Delivery" label="交货方式" width="auto">
				<el-table-column  prop="Delivery" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Transport" label="运输方式" width="auto">
				<el-table-column  prop="Transport" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="ArrivalTime" label="预计到达时间" width="auto">
				<el-table-column  prop="ArrivalTime" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Poster" label="制单人" width="auto">
				<el-table-column  prop="Poster" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Checker" label="审核人" width="auto">
				<el-table-column  prop="Checker" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CheckDate" label="审核日期" width="auto">
				<el-table-column  prop="CheckDate" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="ParName" label="合作方" width="auto">
				<el-table-column  prop="ParName" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="RMark" label="引用说明" width="auto">
				<el-table-column  prop="RMark" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="SubmitStatus" label="提交状态" width="auto">
				<el-table-column  prop="SubmitStatus" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CloseReason" label="关闭原因" width="auto">
				<el-table-column  prop="CloseReason" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Volume" label="体积" width="auto">
				<el-table-column  prop="Volume" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Weight" label="重量" width="auto">
				<el-table-column  prop="Weight" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="PrintNum" label="打印次数" width="auto">
				<el-table-column  prop="PrintNum" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="DCName" label="配送中心" width="auto">
				<el-table-column  prop="DCName" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Property1" label="自定义1：" width="auto">
				<el-table-column  prop="Property1" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Property2" label="自定义2：" width="auto">
				<el-table-column  prop="Property2" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Property3" label="自定义3：" width="auto">
				<el-table-column  prop="Property3" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CreateDate" label="制单日期" width="auto">
				<el-table-column  prop="CreateDate" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="DeptName" label="部门" width="auto">
				<el-table-column  prop="DeptName" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="TransportCmpName" label="承运公司" width="auto">
				<el-table-column  prop="TransportCmpName" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CreateWay" label="创建方式" width="auto">
				<el-table-column  prop="CreateWay" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Num" label="基本数量" width="auto">
				<el-table-column  prop="Num" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="SupportNum" label="辅助数量" width="auto">
				<el-table-column  prop="SupportNum" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CloseOperator" label="关闭人" width="auto">
				<el-table-column  prop="CloseOperator" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="CloseOperatorDate" label="关闭时间" width="auto">
				<el-table-column  prop="CloseOperatorDate" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="Address" label="地址" width="auto">
				<el-table-column  prop="Address" label="" width="auto" class-name="mohucha">
				</el-table-column>
			</el-table-column>
			

		</el-table>
		</div>

		<!-- 删除确认-->
		<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="sfsc_Click" size="tiny">
			<span class="dialog-footer">
			<p>{{infoHint}}</p>
			<el-button type="primary"  @click="isDelect" >确 定</el-button>
			<el-button @click="sfsc_Click = false">取 消</el-button>
			</span>
		</el-dialog>
	<!--删除确认 end -->


		<!-- 审核确认-->
		<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="plsh_Click" size="tiny">
			<span class="dialog-footer">
			<p>{{infoHint}}</p>
			<el-button type="primary"  @click="batchCheck" >确 定</el-button>
			<el-button @click="plsh_Click = false">取 消</el-button>
			</span>
		</el-dialog>
	<!--审核确认 end -->

	<!-- 删除成功-->
	<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="sccg_Click" size="tiny">
		<span class="dialog-footer">
		  <p style="color: #82bc06">{{infoHint}}</p>
		  <el-button type="primary" style="margin-right: 0;" @click="sccg_Click=false" >确 定</el-button>
		</span>
	</el-dialog>
	<!--删除成功 end -->

  	<!-- 删除失败-->
	<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="scsb_Click" size="tiny">
		<span class="dialog-footer">
		<p style="color: red;">{{ infoHint }} </p>
			<el-button type="primary" style="margin-right: 0;"  @click="scsb_Click=false" >确 定</el-button>
		</span>
	</el-dialog>
	<!--删除失败 end -->

  <!-- 设置备注-->
		<el-dialog title="设置备注" id="szbz" class="szbz" :visible.sync="szbz_Click" size="tiny">
			<div class="dialog-boddy">
				<el-row>
					<!-- 这里是空白栏 -->
					<el-col :span="4"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">入库订单:</div></el-col>
					<el-col :span="12"><div class="grid-content"><el-input disabled v-model="StorageID"></el-input></div></el-col>
				</el-row>
				<el-row>
					<!-- 这里是空白栏 -->
					<el-col :span="4"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">备注:</div></el-col>
					<el-col :span="12"><div class="grid-content"><el-input type="textarea" :rows="6" v-model="Remarks" ></el-input></div>
					</el-col>
				</el-row>
			</div>
				<el-row>
					<el-col :span="4"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">
				<el-button type="primary"  @click="setRemarks" >确 定</el-button>
					</div></el-col>
					<el-col :span="8"><div class="grid-content"></div></el-col>
					<el-col :span="4"><div class="grid-content">
				<el-button type="primary"  @click="szbz_Click=false" >取消</el-button>
						</div></el-col>
				</el-row>
			<!-- </p> -->
		</el-dialog>
		<!--设置备注 end -->

		<!-- 成功-->
	<el-dialog title="警告信息" id="szcg" class="szcg" :visible.sync="szcg_Click" size="tiny">
		<span class="dialog-footer">
		<p>备注设置成功!</p>
			<el-button type="primary"  @click="szcg_Click=false" >确 定</el-button>
		</span>
	</el-dialog>

		<div class='tongji'>
			<el-tag class='tag1'>共<span>{{ rkddlist.length}}</span>条</el-tag>
			<el-tag class='tag2'>金额合计:<span>{{ SumTotal }}</span></el-tag>
			<el-tag class='tag2'>体积合计:<span>{{ VolumeTotal }}</span></el-tag>
			<el-tag class='tag2'>重量合计:<span>{{ WeightTotal }}</span></el-tag>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				name: 'rkddlb	',
				formStacked: {
					name: '',
					region: '',
					type: ''
				},
				StorageInfo: [], // 单选存储
				batchInfo: [], // 批量审核数据
				sfsc_Click: false, // 显示是否删除订单
				sccg_Click: false, //删除成功
				scsb_Click: false, //删除成功
				plsh_Click: false, //批量审核
				szbz_Click: false, //设置备注
				szcg_Click: false, // 设置成功
				infoHint: '', // 弹窗提示信息
				pszx: false, //配送中心禁选
				peisong: '',
				yuanqu: '',
				StorageID: '', // 存放订单
				ddh:'',
				Remarks: '', // 备注
				yqlist: [],
				cities: [],
				options:[],
				backUpArr: [],
				hzf:'',
				SumTotal: '0.00', 
        VolumeTotal: '0.0000',
        WeightTotal: '0.00',
				zdrq: '1',
				zdrqlist: [{
					label: "订单日期",
					value: '1'
				}, {
					label: "审核日期",
					value: '2'
				}, {
					label: "制单日期",
					value: '3'
				}],
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
         pickerOptions2: {
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
				djbh: '',
				hzfID: "", //合作方id
				ksrq: '',
				jsrq: '',
				hzf: '全部',
				hzflist:{ label:'', value:'0', },
				shbz: '2',
				shbzlist:[
					{label:'全部',value:'2'},
					{label:'审核',value:'1'},
					{label:'未审核',value:'0'}],
				rkddlist: [],
				formInline: [],
				activeName: '',
				loading: false
			};
		},
		mounted: function() {
			var that = this;
			
			//$(".当前vue文件的最外层div的calss名 a")
			$(".rkddlb a").click(function() {
				var $this = $(this);
				var txt = $("span", $this).html();
            
				var tabarr = that.$parent.editableTabs2;
				var indexof = -1;
				for(var i = 0; i < tabarr.length; i++) {
					console.log(tabarr[i].title + "---" + txt);
					if(tabarr[i].title == txt) {
						indexof = tabarr[i].name;
					}
				}
				if(indexof == -1) {
					let newTabName = ++that.$parent.tabIndex + '';
					var cont = $this.attr("href");
					cont = cont.substring(2, cont.length);
					that.$parent.editableTabs2.push({
						title: txt,
						name: newTabName,
						content: cont
					});
					that.$parent.editableTabsValue2 = newTabName;
				} else {
					that.$parent.editableTabsValue2 = indexof;
				}
			});

			//订单日期的默认值
			var myDate = new Date();
			var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
			var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			var d = myDate.getDate(); //获取当前日(1-31)
			var today = y + "-" + m + "-" + d;
			that.ksrq = today;
			that.jsrq = today;
			that.getdclist();

		},

		methods: {
			// 设置备注 
			remarksClick () {
				if (this.StorageID) {
					this.szbz_Click = true;
				} else {
					this.sccg_Click = true;
					this.infoHint = "请选择单据号"
				}
			},
			setRemarks () {
				this.szbz_Click = false; // 弹窗隐藏
				var that = this;
				var jsons = {
					UserID: userid,
					UserName: userName,
					Remarks: that.Remarks,
					StorageID: that.StorageID,
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.StorageModule.StorageOrder.SetRemarks"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var data = eval('(' + data + ')');
						console.log('备注', data)
						if(data.StateCode == 100) that.szcg_Click = true;
						that.searchInfo();
					}
				})
			},
			// 审核订单
			checkInfo() {
				var that = this;
				var jsons = {
					UserID: userid,
					UserName: userName,
					StorageID: that.StorageID,
				}
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.StorageModule.StorageOrder.Audit"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var data = eval('(' + data + ')');
						console.log('审核', data)
						// 如果审核成功
						if(data.StateCode == 100) {
							that.searchInfo();
						}
					}
				})
			},
			// 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
				// }				 // 保存当前的订单号
				localStorage.setItem("dataStorage", row.StorageID);
				//跳转出库订单查看
				this.$router.replace({ path: '/rkddck'});
				// 定义标签的名字
				let txt = "入库订单查看"
				// 取得标签内容
				let tabarr = that.$parent.editableTabs2;
				// 定义一个是查看是否重复的信号量,
				var indexof = -1;
				tabarr.forEach((item,index)=>{
					if(item.title == txt) { // 6.如果当前标签存在,则加到信号量
						indexof = item.name;
					}
				})
				// 如果不存在
				if(indexof == -1) {
					// 设置name的值,把数字++然后转字符串,不让它重复,
					let newTabName = ++that.$parent.tabIndex + '';
					// 取得content内容 #/ckddck
					let cnt = $('.watch').attr("href");// 注意:要手动添加class,要不然找不到
					// 把前面的两个符号去掉 ckddck
					cnt = cnt.substring(2,cnt.length);
					// 新增一个添加
					that.$parent.editableTabs2.push({
						title: txt,
						name: newTabName,
						content: cnt
					});
					that.$parent.editableTabsValue2 = newTabName;
				} else {
					that.$parent.editableTabsValue2 = indexof;
				}
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
			//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加a"
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
						if(thv != undefined && thv!="") {
							that.mohucha(thv, idx, $table);
						}

					});

				});
			},
			onSubmit() {
				console.log('submit!');
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
					that.cities = data;
					that.peisong = data[0].DCID;
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
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				// that.pszx = true; // 配送输入框禁用
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
				that.gethzflist(that.peisong);
			},
			// 获取合作方
			gethzflist(psid) {
				var that = this;
			  var params = {
					UserID: window.userid,
					DCID: psid,
					Value: ''
				};
        $.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: "CPHH.PC.BaseInfo.Partner.GetListInDC_All"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						// console.log("全部合作方",data);
						that.options = data;
						that.backUpArr = data;
					}
				})
			},
			getCode (val) {
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
			gethzfID() {

			},
			handleClick () {

			},
				// 是否删除商品
			delect () {
				if(this.StorageInfo.StorageID || this.rkds[0].StorageID) {
					this.sfsc_Click = true;
					this.infoHint = '你真的要删除所选的单据吗?';
				}
			},
			plCheck () {
				if(this.batchInfo[0]) {
					this.plsh_Click = true;
					this.infoHint = '你真的要审核所选的单据吗?';
				} else {
					this.scsb_Click = true;
					this.infoHint = "未选择单据"
				}
			},
			// 搜索信息
			searchInfo () {
				var that = this;
				var ksrq = $("#ksrq input").val();
				var jsrq = $("#jsrq input").val();
				if (that.hzf == "全部") {
					that.hzf = 0;
				}
				var params = {
					UserID: window.userid,
					StartDate: ksrq,
					EndDate: jsrq,
					Check: that.shbz,
					ParID: that.hzf || 0,
					Type: 1,
					DateType: that.ddrq,
					DCID: that.peisong,
					OrderID: that.ddh,
					ParkID: that.yuanqu
				};
				$.ajax({
					url: "http://116.62.171.144/post/index.php",
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: "CPHH.PC.StorageModule.StorageOrder.GetList"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.rkddlist = data;
						that.getTotal();
					}
				})
			},
			getTotal () {
				var that = this;
				var sumTotal = 0;
				var volumeTotal = 0;
				var weightTotal = 0;
        for( let i = 0; i < that.rkddlist.length; i++ ) {
           sumTotal += parseFloat(that.rkddlist[i].Total);
           volumeTotal += that.rkddlist[i].Volume;
           weightTotal += parseFloat(that.rkddlist[i].Weight);
				} 
        that.SumTotal = sumTotal;
        that.VolumeTotal = volumeTotal.toFixed(6);
        that.WeightTotal = weightTotal.toFixed(2);
			},
			// 当当前行改变时
			rowClick (val) {
				console.log("当前改变的数据为===",val)
				this.StorageInfo = val;
				this.StorageID = val.StorageID;
				localStorage.setItem("dataStorage", val.StorageID);
			},
			// 多选审核
			handleSelectionChange (val) {
				console.log("勾选数据为 ===",val)
				this.batchInfo = val;
			},
			// 删除商品
			isDelect () {
				if (this.StorageInfo.CheckMark === "Y") {
					this.sfsc_Click = false;
					this.scsb_Click = true;
					this.infoHint = "删除失败 ！单据已审核";
					return
				} else if(this.StorageInfo.SubmitStatus === "提交") {
					this.sfsc_Click = false;
					this.scsb_Click = true;
					this.infoHint = "删除失败 ！单据已提交";
					return
				} else {
					var that = this;
					that.sfsc_Click = false;
					var jsons = {
						UserID: userid,
						UserName:userName,
						StorageID: that.StorageInfo.StorageID || that.rkds[0].StorageID,
					}
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.StorageOrder.Delete"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var data = eval('(' + data + ')');
							console.log('删除',data)
							if(data.StateCode == 100) {
								that.sccg_Click = true;
								that.searchInfo();
								that.infoHint = "单据删除成功"
							} else {
								
							}
							
						}
					})
				}	
			},
			checkInfo() {
				var that = this;
				
				if (that.StorageInfo.CheckMark === 'Y') {
					// console.log(696,that.StorageInfo);
					that.scsb_Click = true;
					that.infoHint = "审核失败 ！单据已审核";
					return
				} else {
					var jsons = {
						UserID: userid,
						UserName: userName || '',
						StorageID: that.StorageInfo.StorageID,
					}
					$.ajax({
						url: 'http://116.62.171.144/post/index.php',
						type: 'POST', //GET
						async: true, //或false,是否异步
						data: {
							datas: jsons,
							method: "CPHH.PC.StorageModule.StorageOrder.Audit"
						},
						timeout: 5000, //超时时间
						success: function(data, textStatus, jqXHR) {
							var result = JSON.parse(data)
							if(result.StateCode === 100) {
								console.log('审核', result)
								
								that.sccg_Click = true;
								that.infoHint = "单据审核成功";
								that.searchInfo();
								setTimeout( function(){
										that.sccg_Click=false
									} ,2000);
							}	else if(result.StateCode === 104) {
								that.scsb_Click = true;
								that.infoHint = result.Message;
								setTimeout( function(){
									that.scsb_Click=false
								} ,4000);
							}				
						}
					})
				}
			},
			batchCheck () {
				var that = this;
				
				for(let i = 0; i < that.batchInfo.length; i++) {
					if (that.batchInfo[i].CheckMark === "Y") {
						that.plsh_Click = false;
						that.scsb_Click = true;
						that.infoHint = "审核失败 ！第" + (i + 1) + "行单据已审核";
						
						return false
					} else {
						var jsons = {
							UserID: userid,
							UserName: userName || '',
							StorageID: that.batchInfo[i].StorageID,
						}
						$.ajax({
							url: 'http://116.62.171.144/post/index.php',
							type: 'POST', //GET
							async: true, //或false,是否异步
							data: {
								datas: jsons,
								method: "CPHH.PC.StorageModule.StorageOrder.Audit"
							},
							timeout: 5000, //超时时间
							success: function(data, textStatus, jqXHR) {
								var result = JSON.parse(data)
								that.scsb_Click = false;
								// that.	scsb_Click = false;
								that.plsh_Click = false;
								if(result.StateCode === 100) {
									console.log('审核', result)
									
									that.sccg_Click = true;
									that.infoHint = "单据审核成功";
									that.searchInfo();
									setTimeout( function(){
										that.sccg_Click=false
									} ,3000);
								}	else if(result.StateCode === 104) {
									that.scsb_Click = true;
									that.infoHint = result.Message;
									return
								}					
							}
						})
					}
				}
			}, 
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			}
		},	
	}

</script>

<style>
	/*@import url("../../../common/css/rkddlb/rkddlb.css");*/
	
	.rkddlb .grid-content {
		text-align: center;
	}
	
	.rkddlb .el-button--small {
		width: 80px;
	}
	
	.rkddlb .el-form {
		margin-bottom: 5px;
	}
	
	.rkddlb .el-table {
		overflow: inherit;
	}
	.rkddlb .bt{
		width: 80px;
		margin-left: 10px;
	}
	.rkddlb .el-date-editor{
		width: 100%;
	}
	.rkddlb .el-input__icon{
		top: 1px;
	}
</style>