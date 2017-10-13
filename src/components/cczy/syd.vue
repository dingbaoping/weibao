<template>
<!--报损升溢 -->
	<div class="bssy">
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox bc" @click="saveOrder"><span>保存</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox syt"><span>上一条</span></div></div></li>
					<li><div class="boxtab"><div class="curbox xyt"><span>下一条</span></div></div><span class="gun"></span></li>
					<li>
						<div class="boxtab">
							<div class="curbox djsz" >
								<span>单据设置</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="chaxun">
			<!--<div class="formcx">-->
			<el-form class="demo-ruleForm">
			<!--第一行-->
			<el-form-item required>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>配送中心：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<!-- 配送中心列表 -->
							<el-select v-model="peisong" @change="pschange"  filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
								<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
						</div>
					</el-col>
					<el-col :xs="8" :sm="8" :md="8" :lg="8">
						&nbsp;
					</el-col>	
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>园区：</p>
						</div>
					</el-col>
					<el-col :xs="5" :sm="5" :md="5" :lg="5">
						<div class="grid-content  ">
							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="23132"    class=" blueborder input_width">
								<el-option v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span> 
								</el-option>
							</el-select>
							<!-- 园区列表结束 -->
						</div>
					</el-col>		
			</el-form-item>
			</el-form>
			<!--第二行-->
			<el-row :gutter="10" type="flex">
					<el-col :xs="8" :sm="8" :md="8" :lg="8">
						<div class="grid-content  ">
							<p>&nbsp;</p>
						</div>
					</el-col>
					
					<el-col :xs="8" :sm="8" :md="8" :lg="8">
						<h1 class="bt">报损升溢单</h1>
					</el-col>	
					
			</el-row>
			<!--第三行-->
			<el-form class="demo-ruleForm">
				<el-form-item required>
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content  ">
						<p>合作方（*）：</p>
					</div>
				</el-col>
				<el-col :xs="5" :sm="5" :md="5" :lg="5">
					<div class="grid-content  " @click="hzfclick">
						<!--下拉式合作方-->
						<el-select v-model="hzf"  default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
							<el-option v-for="item in hzflist" :key="item.Code" :label="item.Name" :value="item.InterID">
								<span style="float: left">{{ item.Code }}</span>
								<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
							</el-option>
						</el-select>
						<!--下拉式合作方结束-->
					</div>
				</el-col>
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content ">
						<p>日期（*）：</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content  ">
						<el-form-item prop="date1">
							<el-date-picker type="date" placeholder="选择日期" id="ddrq" v-model="ddrq" style="width: 100%;"></el-date-picker>
						</el-form-item>
					</div>
				</el-col>
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content  ">
						<p>操作类型（*）：</p>
					</div>
				</el-col>
				<el-col :xs="5" :sm="5" :md="5" :lg="5">
					<div class="grid-content  ">
						<!--调拨类型开始-->
						<el-select v-model="czlx" placeholder="" class=" blueborder input_width">
							<el-option v-for="item in czlxlist" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left">{{ item.label }}</span>
								<!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
							</el-option>
						</el-select>
						<!--调拨类型结束-->
					</div>
				</el-col>	
				</el-form-item>
			</el-form>
			<!--第四行-->
			
			<el-form class="demo-ruleForm">
				<el-form-item required>
				
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content  ">
						<p>备注：</p>
					</div>
				</el-col>
				<el-col :xs="5" :sm="5" :md="5" :lg="5">
					<div class="grid-content  ">
						<el-input class=" input_width " size="small" placeholder="" v-model="bz">
						</el-input>
					</div>
				</el-col>
			</el-form-item>
			</el-form>
			<!--第五行-->
			<el-form class="demo-ruleForm">
				<el-form-item required>
				<el-col :xs="3" :sm="3" :md="3" :lg="3">
					<div class="grid-content  ">
						<p>提交状态：</p>
					</div>
				</el-col>
				<el-col :xs="5" :sm="5" :md="5" :lg="5">
					<div class="grid-content  ">
						<!--提交状态开始-->
						<el-select v-model="tjzt" placeholder="" class="input_width">
							<el-option v-for="item in tjztlist" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left">{{ item.label }}</span>
							</el-option>
						</el-select>
						<!--提交状态结束-->
					</div>
				</el-col>
			</el-form-item>
			</el-form>
		</div>
		<!--条件查询结束-->
		<div class='table'>
      <el-table :data="splbs" border style="width:100%" class='spbg' height="305">
        <el-table-column type="index" label="" width="70">
        </el-table-column>
        <el-table-column prop="Code" label="商品编号" width="110" class-name="bianji">
          <!-- <template scope="scope">
            <div v-show="!scope.row.CodeEdit" >{{scope.row.Code}}</div>
            <el-input v-show="scope.row.CodeEdit" v-model="scope.row.Code" @keyup.native.13="callCommodity(scope)" data-index="0"></el-input>
          </template> -->
        </el-table-column>
        <el-table-column prop="111" label="" width="24">
          <template scope="scope">
            <span class='blue_button' @click="hzf?spzl_Click=true:spzl_Click=false"></span>
          </template>
        </el-table-column>
        <el-table-column prop="Name" label="商品名称" width="280">
        </el-table-column>
				<el-table-column prop="Memarks" label="条形码" width="100" >
				</el-table-column>
        <el-table-column prop="Model" label="规格型号" width="144">
        </el-table-column>
        <el-table-column prop="StockName" label="仓位" width="auto" class-name="bianji">
        </el-table-column>
        <el-table-column prop="111" label="" width="24">
          <template scope="scope">
            <span class='blue_button'></span>
          </template>
        </el-table-column>
        <el-table-column prop="Num" label="基本数量" width="auto" class-name="bianji">
          <!-- <template scope="scope">
            <div v-show="!scope.row.NumEdit" >{{scope.row.Num}}</div>
            <el-input v-show="scope.row.NumEdit" v-model="scope.row.Num" @blur="numChange(scope)" data-index="1"></el-input>
          </template> -->
        </el-table-column>
        <el-table-column prop="Unit" label="基本单位" width="auto">
        </el-table-column>
        <el-table-column prop="SupNum" label="辅助数量" width="auto" class-name="bianji">
          <!-- <template scope="scope">
            <div v-show="!scope.row.SupNumEdit">{{scope.row.SupNum}}</div>
            <el-input v-show="scope.row.SupNumEdit" v-model="scope.row.SupNum" @blur="supNumChanger(scope)" data-index="2"></el-input>
          </template> -->
        </el-table-column>
        <el-table-column prop="SupUnit" label="辅助单位" width="auto">
        </el-table-column>
        <el-table-column prop="Price" label="单价" width="auto" class-name="bianji">
           <!-- <template scope="scope">
            <div v-show="!scope.row.PriceEdit" >{{scope.row.Price}}</div>
            <el-input v-show="scope.row.PriceEdit" v-model="scope.row.Price" @blur="priceChanger(scope)" data-index="1"></el-input>
          </template> -->
        </el-table-column>
				<el-table-column prop="Memarks" label="成本价" width="100">
				</el-table-column>
				<el-table-column prop="Memarks" label="金额" width="100" >
				</el-table-column>
				<el-table-column prop="Memarks" label="批次" width="100" >
				</el-table-column>
				<el-table-column prop="Memarks" label="库存描述" width="auto" class-name="bianji">
           <!-- <template scope="scope">
            <div v-show="!scope.row.PriceEdit" >{{scope.row.Price}}</div>
            <el-input v-show="scope.row.PriceEdit" v-model="scope.row.Price" @blur="priceChanger(scope)" data-index="1"></el-input>
          </template> -->
				</el-table-column>

        <el-table-column prop="Total" label="生产日期" class-name="total" width="115">
        </el-table-column>
        <el-table-column prop="Total" label="有效期至" class-name="total" width="115">
        </el-table-column>
        <el-table-column prop="Remarks" label="备注" width="155" class-name="bianji">
           <!-- <template scope="scope">
            <div v-show="!scope.row.RemarksEdit" >{{scope.row.Remarks}}</div>
            <el-input v-show="scope.row.RemarksEdit" v-model="scope.row.Remarks" @blur="disEdit(scope)" data-index="1"></el-input>
          </template> -->
        </el-table-column>
      </el-table>
		</div>
		<!--table完-->
		<ul class='heji_ul'>
			<li><span>合计</span></li>
			<li><span>0.00</span></li>
			<li><span>辅助合计</span></li>
			<li><span>0.00</span></li>
			<li><span>数量合计</span></li>
			<li><span>0.00</span></li>
			<li><span>金额合计</span></li>
			<li><span>0.00</span></li>
		</ul>
		<div class='form-2'>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<el-form-item label="经办人：" class='fl'>
						<el-select v-model="formInline.region" placeholder="" class='fr input_width button_w'>
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<el-form-item label="制单人：" class='fl'>
						<el-select v-model="formInline.region" placeholder="" class='fr input_width button_w'>
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<el-form-item label="审核人：" class='fl'>
						<el-select v-model="formInline.region" placeholder="" class='fr input_width button_w'>
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<el-form-item label="审核日期：" class='fl'>
						<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
					</el-form-item>
				</el-col>
			</el-form>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<el-form-item label="部门：" class='fl'>
						<el-select v-model="formInline.region" placeholder="" class='fr input_width button_w'>
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				
				<el-col :xs="6" :sm="6" :md="6" :lg="6" :offset="12">
					<el-form-item label="创建方式：" class='fl'>
						<el-input v-model="formInline.user" placeholder="" class='fr input_width button_w'></el-input>
					</el-form-item>
				</el-col>
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
	import spzl from "./spzl.vue";
	export default {
		components: {
			"spzl": spzl,
		},
		data() {
			return {
				spzl_Click: false,//商品资料弹窗
				cities:[],//配送中心列表
				splbs:[{Code:''}],//商品列表
				bz:'',//备注
				ruleForm: {
					date1: '',
					date2: '',
					region: '',
				},
				tableData4: [],
				tableData3: [],
				input7: '',
				hzf:'',
				backUpArr:'',
				hzflist:'',// 合作方list
				ddrq:'',// 日期
				czlx:'0',//操作类型
				czlxlist:[
					{label:'报损',value:'0'},
					{label:'升溢',value:'1'},
				],//操作类型列表
				peisong:'',
				pszx: false, //状态
				yqlist:[],
				yuanqu:'',
				bumen:'',
				tjzt:'0',
				tjztlist: [ // 提交状态
					{ value: '1', label: '未提交' },
					{ value: '0', label: '提交' }
				],
				dbnxs: [ // 提交状态
					{ value: '1', label: '同类调拨' },
					{ value: '2', label: '异类调拨' }
				],
				formInline: {
					date1: '',
					date2: '',
					region: '',

				}
			}
		},

		mounted: function() {
			// 请求后台数据
			var that = this;
			//订单日期的默认值
			var myDate = new Date();
			var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
			var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			var d = myDate.getDate(); //获取当前日(1-31)
			var today = y + "-" + m + "-" + d;
			that.ddrq = today;
			// 获取配送中心
			that.getdclist();
		},
		methods: {
			// 关闭确认
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => { });

			},
			// 和作方选中
			hzfclick () {
				// console.log(33333);
				this.pszx = true;
			},
			// 保存单据
			saveOrder () {
				var jsons = {
					DCID: this.peisong, //配送中心id
					ParkID: this.yuanqu,// 园区id
					ParID: this.hzf,//合作方id
					Date: $('#ddrq input').val(),//订单日期
					Desc: this.bz,//备注
					SubmitStatus: this.tjzt,//提交状态
					Type: this.czlx,//操作类型

				}
				console.log(jsons);
				// debugger;
			},
			//表格双击（可编辑表格）
			dbrow: function(row, column, cell, event) {
			},
			//此方法是退出的函数
			closetag:function(){
				$(".is-active .el-icon-close").click();
			},
			// 获取配送中心列表
			getdclist: function() {
				var that = this;
				// console.log(that);
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
					// console.log(888,that.yuanqu);
				});
			},
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				that.getyuanqulist(that.peisong);
				that.gethzflist(that.peisong);
			},
				// 获取合作方
			gethzflist(psid) {
				var that = this;
				that.baseAjax("getlistindc", {
					UserID: window.userid,
					DCID: psid
				}, function(data) {
          			var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.hzflist = data;
					that.backUpArr = data;
					that.hzf = data[0].InterID;//默认一个合作方
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
		}

	}
</script>
<style scoped>
	.el-row{
		padding-right: 20px;
	}
	.el-row p{
		padding-left: 20px;
	}
	.bt{
		text-align: center;
		font-size: 18px;
		color: #000;
		font-weight: 700;
	}
	.el-form{
		margin-right: 20px;
	}
	.el-form-item__content p{
		padding-left: 20px;
	}
	.form-2{
		padding-bottom: 92px;
	}
</style>
