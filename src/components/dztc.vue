<template>
	<div class="dztc">
		<el-form on-change='handleCurrentChange'>
		<el-row >
			
			<div  class='dizhixzk'> 
				<!--地址的选择框-->
				<span class='province  sheng'>省：</span>
					<span class='city'>市：</span>
					<span class='area'>区：</span>
				<v-distpicker wrapper='address' selected='Onselect'  @selected="onSelected">
				
			</v-distpicker>
			</div>
		
				</el-row>
				
				
				<el-row>
			<el-col :span="24">
				<div class="grid-content ">
					<span class='jiedao'>街道：</span>
					<el-input v-model="Street" @blur="getStreet" placeholder="" class='jdao'></el-input>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24" class='textarea_row'>
				<div class="grid-content ">
					<span>详细地址：</span>
					<el-input type="textarea" :rows="2" placeholder="请输入内容" @blur="getDetail" v-model="Detail" class='fr'>
					</el-input>
				</div>
			</el-col>
		</el-row>
		</el-form>
		</div>
</template>

<script>

import VDistpicker from 'v-distpicker'
export default {
	components: { VDistpicker },
	data() {
		return {
			Addr: {  // 存放地址详细信息
				Province:'',
				City:'',
				Area:'',
				Street:'',
				Detail:'',
			},
			dizhi_Click: false,
			value:{
			},
			option:{
				value:'',
				label:'',
			},
			Street:'',
			Detail:"",
		}
	}, mounted: function() {
		var that = this;
		$('.tc_title b').click(function() {
			$('.el-dialog__headerbtn').click();

		})
		function saveInput(obj1, Obj2, Arr, ) {
			var Arr = [];
			obj1.each(function() {
				Arr.push($(this).val());
			});
			Obj2.each(function() {
				Arr.push($(this).val());
			});
			return console.log(Arr);
		}
	},
	methods:{
		handleCurrentChange (val) {
			console.log("单击");
			this.$emit("checkgetdzInfo", val);
		},
		onSelected(val){ // 显示数据
			this.Addr.Province = val.province.value;
			this.Addr.City = val.city.value;
			this.Addr.Area = val.area.value;
			this.$emit("getAddr", this.Addr); // 把数据传到子组件
			// console.log(this.Addr);
		},
		getStreet(){ //获取街道信息
			this.Addr.Street = this.Street;
			this.$emit("getAddr", this.Addr); // 把数据传到子组件
		},
		getDetail(){ // 获取详细信息
			this.Addr.Detail = this.Detail;
			// console.log(this.Addr);
			this.$emit("getAddr", this.Addr); // 把数据传到子组件
		},
	}
}
</script>
<link rel="stylesheet" type="text/css" href="../../common/css/dztc/dztc.css"/>
<style  scoped>
.dztc {
	margin: 0 auto;
	padding-top: 30px;
}

.address select{
	width: 220px;
	height: 25px;
}

.dztc .el-row {
	margin-bottom: 2px;
	margin-left: 50px;
	margin-right: 50px;
	&:last-child {
		margin-bottom: 0;
	}
}

.dztc .el-col {
	border-radius: 4px;
}

.dztc .bg-purple-dark {
	background: #99a9bf;
}

.dztc .bg-purple {
	background: #d3dce6;
}

.dztc .bg-purple-light {
	background: #e5e9f2;
}

.dztc .grid-content {
	border-radius: 4px;
	min-height: 36px;
}

.dztc .row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}

@import url('../../common/css/dztc/dztc.css') .dztc .fr {
	float: right;
}

.dztc {
	width: 390px;
	height: 337px;
	
}

.dztc .tc_title {
	height: 30px;
	background: #36B4FD;
	color: #fff;
	padding: 0 15px 0 15px;
	margin-bottom: 10px;
	position: relative;
}

.dztc .tc_title .fr {
	position: absolute;
	left: 355px;
	top: 5px;
	width: 15px;
	height: 15px;
	background-image: url(../../common/img/rk/guanbi.png);
	background-size: 15px 15px;
}

.dztc .tc_title .fl {
	float: left;
	color: #FFFFFF;
	background: transparent;
}

.dztc .el-button {
	padding-top: 5px;
	padding-bottom: 5px;
	height: 24px;
	width: 80px;
	border-radius: 0;
	text-align: center;
	border: 1px solid #36B4FD;
}

.dztc .button_row {
	text-align: center;
}

.dztc .ok {
	background: #36B4FD;
	color: #fff;
}

.dztc .textarea_row {
	margin-bottom: 50px;
}

.dztc .jdao{
	width: 200px;
	height: 28px;
	float:right;
}
/*.dztc .el-row {
	color:#36B4FD;
}
.dztc .el-row .el-select{
	border:#36B4FD 1px solid;
	height: 25px;
}
.dztc .el-row .el-input input{
	height: 25px;
}
 .dztc .el-input .el-input__inner{
	border:#36B4FD 1px solid;
	height: 25px!important;
}*/
.dizhixzk{
	position: relative;
	
	min-width: 215px ;
	min-height: 116px;
}
.province{
	position: absolute;
	top:0px; left:-10px;
}
.city{  position: absolute;
	top:42px; left:-10px;  }
.area{
		position: absolute;
	top:80px; left:-10px;
	}
.dztc .cancel {
	color: #36B4FD;
}
.dztc .jiedao{
	margin-left:-10px;
}
</style>