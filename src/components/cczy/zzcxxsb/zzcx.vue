<template>
<!-- 组装拆卸 -->
	<div class="zzcx">
			<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<li><div class="boxtab"><div class="curbox xz" @click='djt_Click=true'><span>新增</span></div></div></li>
					<li><div class="boxtab"><div class="curbox xg" @click='djt_Click=true'><span>修改</span></div></div></li>
					<li><div class="boxtab"><div class="curbox ck" @click='djt_Click=true'><span>查看</span></div></div></li>
					<li><div class="boxtab"><div class="curbox sc" @click='djt_Click=true'><span>删除</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox sx" @click='djt_Click=true'><span>刷新</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox sh" @click='djt_Click=true'><span>审核</span></div></div><span class="gun"></span></li>
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->

		<!--条件查询-->
		<div class="tjcx">
			<el-row>
			<div >
				
				<el-form class="demo-ruleForm">
					<el-form-item required>
						<el-col :span="2">
							<el-form-item prop="date1" >
								<el-date-picker type="date" placeholder="选择日期" v-model="ksrq" class='input_width' style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="line " :span="1">
							<div class="grid-content">
								<p class="ZHI">至</p>
							</div>
						</el-col>
						<el-col :span="2">
							<el-form-item prop="date2">
								<el-date-picker type="date" placeholder="选择日期" class='input_width' v-model="jsrq" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>合作方:</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="peisong">
								<!--下拉式合作方-->
									<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
										<el-option v-for="item in options" :key="item.value" :label="item.Name" :value="item.value">
											<span style="float: left">{{ item.Code }}</span>
											<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>									
										</el-option>
									</el-select>
									<!--下拉式合作方结束-->
							</el-form-item>
						</el-col>
						<el-col class="lines" :span="2">
							<div class="grid-content">
								<p>审核标志:</p>
							</div>
						</el-col>
						<el-col :span="3">
							<el-form-item prop="peisong">
								<!--审核标志-->
									<el-select v-model="shbz" placeholder="全部" class="shbz">
										<el-option v-for="item in shbzlist" :label="item.label" :key="item.label" :value="item.value">
										</el-option>
									</el-select>
									<!--审核标志结束-->
							</el-form-item>
						</el-col>
							<el-col :span="4">
			<div class="buttondiv">
				<span class="wrapper">
					<el-button type="primary"><i class="el-icon-search el-icon--left"></i>查询</el-button>
					<el-button type="primary"><i class="el-icon-circle-cross el-icon--left"></i>关闭</el-button>
				</span>
			</div>
			</el-col>
					</el-form-item>
				</el-form>
			</div>
			
			</el-row>
			<el-row>  		
				<el-form class="demo-ruleForm">
					<el-form-item required>
			<el-col class="lines" :span="2" offset='5'>
							<div class="grid-content">
								<p>查询条件:</p>
							</div>
						</el-col>  
				<el-col class="lines" :span="3">
							<div class="grid-content">
								<el-input class='input_width'></el-input>
							</div>
						</el-col> 
							</el-form-item>
				</el-form>
		</el-row>
		
		</div>
		<!--条件查询结束-->
		<!--table部分-->
		<div class='table'>
			<el-table :data="tableData3" height="250" border style="width: 100%">
				<el-table-column sortable prop="date" label="审核标志" width="150">
				</el-table-column>
				<el-table-column sortable prop="name" label="单据编号" width="220">
				</el-table-column>
				<el-table-column sortable prop="name" label="商品名称" width="180">
				</el-table-column>
				<el-table-column sortable prop="name" label="规格型号" width="200">
				</el-table-column>
				<el-table-column sortable prop="name" label="数量" width="200">
				</el-table-column>
				<el-table-column sortable prop="name" label="单位" width="200">
				</el-table-column>
				<el-table-column sortable prop="name" label="备注" width="200">
				</el-table-column>
				<el-table-column sortable prop="name" label="合作方" width="200">
				</el-table-column>
				
			</el-table>

		</div>
		
		
		
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'fymxbb',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ruleForm: {
					date1: '',
					date2: '',

				},
				tableData4: [],
				loading: false,
				hzf:'0',
				backUpArr:'',
				options:[{Name:'全部',value:'0'}],
				peisong:'',
				yqlist:'',
				yuanqu:'',
				bumen:'',
				ksrq:'',//开始日期
				jsrq:'',//结束日期
				shbzlist: [ // 审核标志
					{ value: '1', label: '全部' },
					{ value: '2', label: '已审核' },
					{ value: '3', label: '未审核' }
				],
				shbz:'1',//审核标志选择框默认为空

			}
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
			// 获取配送中心
			that.getdclist();
		},
		methods: {
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

			// 获取园区 含全部
			getyuanqulist(psid) {
				var that = this;
			  var params = {
					UserID: window.userid,
					DCID: psid
				};
        $.ajax({
					url: 'http://116.62.171.144/post/index.php',
					type: 'POST', //GET
					async: true, //或false,是否异步
					data: {
						datas: params,
						method: "CPHH.PC.BaseInfo.Stock.GetParkList_All"
					},
					timeout: 5000, //超时时间
					success: function(data, textStatus, jqXHR) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
            that.yqlist = data;
            that.yuanqu = data[0].ParkID;
					}
				})
			},
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				// that.pszx = true; // 配送输入框禁用
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
				that.gethzflist(that.peisong);
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
						that.hzf = data[0].InterID;
						console.log(444,data)

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
		}

	}
</script>
<style>
	.el-row{
		height: 40px;
		line-height: 25px;
		margin-top: 10px;
		padding: 0 5px;
	}
	.el-row p{
		margin-left: 20px;
		line-height: 25px;
	}
	
	.el-table{
		overflow:auto;
	}
	.el-row{
		padding:10px 5px;
	}
	.tjcx{
		height: 100px;
	}
	.buttondiv{
		margin-top:-1px;
	}
</style>