<template>
	<div class='bomdck'>
		<!--出库复核作业单-->
		<div class="but-box">
			<ul>
				<li>

					<div class="boxtab">
						<div class="curbox bc" @click="">
							<span>保存</span>
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
		<!--form第一行-->
		<el-form :inline="true" class="demo-form-inline form1">
			<el-row :gutter="10">
				<el-col :span="3">
					<div class="grid-content ">

						<p class=''>配送中心（*）:</p>

					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<!-- 配送中心列表 -->
						<el-select v-model="peisong" @change="pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
							<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
								<span style="float: left">{{ item.DCName }}</span>
							</el-option>
						</el-select>
						<!-- 配送中心列表结束 -->
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content ">
						<h1 class=''>BOM单</h1>
					</div>
				</el-col>
			</el-row>
			<!--第二行-->
			<el-row :gutter="10">
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>合作方（*）:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" size="small" icon="search"  placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>商品编号（*）:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" size="small" icon="search"  placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>商品名称（*）:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" size="small" placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
			</el-row>
			<!--第三行-->
			<el-row :gutter="10">
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>规格型号:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>单位（*）:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>数量（*）:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
			</el-row>
			<!--第四行-->
			<el-row :gutter="10">
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>备注:</p>
					</div>
				</el-col>
				<el-col :span="13">
					<div class="grid-content ">
						<el-input class="inline-input djbh" size="small" placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>总价:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
			</el-row>
		</el-form>

		<!--搜索框完-->
		<!--表格-->
		<el-table :data="splbs" height="640" highlight-current-row border style="width: 100%">

			<el-table-column type='selection' prop="" label="选定框" width="50">
				<el-table-column prop="Date" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="PickID" label="商品编号" width="auto">
				<el-table-column prop="PickID" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="PickOperateID" label="商品名称" width="110">
				<el-table-column prop="PickOperateID" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="Date" label="规格型号" width="auto">
				<el-table-column prop="Date" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="BillID" label="辅助单位" width="auto">
				<el-table-column prop="BillID" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="PickQty" label="辅助数量" width="auto">
				<el-table-column prop="PickQty" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="Status" label="基本单位" width="auto">
				<el-table-column prop="Status" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="Poster" label="基本数量" width="auto">
				<el-table-column prop="Poster" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="CreateDate" label="价格" width="auto">
				<el-table-column prop="CreateDate" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
			<el-table-column prop="CompanyID" label="备注" width="auto">
				<el-table-column prop="CompanyID" label="" width="110" class-name="mohucha"></el-table-column>
			</el-table-column>
		</el-table>
		<!--<div class='tongji'>
			<el-tag class='tag1'>共<span>20</span>条</el-tag>
			<el-tag class='tag2'><span>0</span></el-tag>
		</div>-->
		<!--底部的input框-->
		<!--form第一行-->
		<el-form :inline="true" class="demo-form-inline form2 form1">
			<el-row :gutter="10">
				<el-col :span="3">
					<div class="grid-content">
						<p class=''>建立人员:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>建立日期:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" disabled size="small" placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>最后更新人员:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" size="small" disabled  placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
			</el-row>
			<!--第二行-->
			<el-row :gutter="10">
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>审核人员:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" size="small" disabled placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>审核日期:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" size="small" disabled placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<p class=''>最后更新日期:</p>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="grid-content ">
						<el-input class="inline-input djbh" size="small" disabled placeholder="" v-model="djbh">
							</el-input>
					</div>
				</el-col>
			</el-row>
		</el-form>
		
	</div>

</template>

<script>
	export default {
		data() {
			return {
				backUpArr: [], // 合作方备份
				splbs: [], // 存放表格数据
				checked: true,
				formStacked: {
					name: '',
					region: '',
					type: ''
				},

				pszx: false, //配送中心禁选
				peisong: '',
				cities: [],
				cjrq: '1', //创建日期
				cjrqs: [{
						label: '创建日期',
						value: '1'
					},
					{
						label: '开始与结束日期',
						value: '2'
					},
				],

				djbh: '',
				zdrq: '',

				ksrq: '', //开始日期
				jsrq: '', //结束日期
				options: [{
					label: '全部',
					value: '0'
				}],
				hzf: '0',
				pickerOptions1: '', //日期
				pickerOptions2: '', //日期
				shbz: '',
				tabledata3: [],
				formInline: [],
				activeName: '',
			};
		},
		mounted: function() {
			var that = this;
			var myDate = new Date();
			var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
			var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			var d = myDate.getDate(); //获取当前日(1-31)
			var today = y + "-" + m + "-" + d;
			that.ksrq = today;
			that.jsrq = today;
			// 先获取一次配送列表
			that.getdclist();
		},

		methods: {
			// 让CodeID  也成为搜索内容
			getCode(val) {
				if(val) { //val存在 
					this.options = this.backUpArr.filter((item) => {
						if(!!~item.Name.indexOf(val) || !!~item.Code.indexOf(val)) {
							return true
						}
					})
				} else { //val为空时，还原数组
					this.options = this.backUpArr
				}
			},
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				that.gethzflist(that.peisong);
			},
			// 查询
			search() {
				var jsons = {
					UserID: userid, //	用户ID	int	
					StartDate: $('#ksrq input').val(), //	起始日期
					EndDate: $('#jsrq input').val(), //	截止日期
					ParID: this.hzf || 0, //	合作方ID	string	
					DateType: this.cjrq, //	日期类型	string	创建日期 开始作业时间
					DCID: this.peisong, //	配送中心ID	int	
				}
				// debugger;
				var that = this;
				$.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: jsons,
						method: "CPHH.PC.PDAModule.CheckOperate.GetList"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						that.splbs = data; //单据
					}
				})
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
			// 获取合作方 含全部
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
						that.options = data;
						that.backUpArr = data;
					}
				})
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			}
		}
	}
</script>

<style>
	.bomdck .grid-content p {
		min-width: 60px;
		text-align: center;
	}
	
	.bomdck .el-button {
		height: 32px;
		width: 70px;
	}
	
	.bomdck .el-date-editor--date {
		width: 100%;
	}
	
	.bomdck .el-icon-date {
		top: 0;
	}
		
	.bomdck .form1{
		padding: 0 10px;
	}
	.bomdck .form1 h1{
		text-align: center;
		color: #000;
		font-size: 18px;
	}
	.bomdck .form1 p{
		text-align: left;
		padding-left: 20px;
	}
	.bomdck .form2{
		padding-bottom: 30px;
	}
</style>