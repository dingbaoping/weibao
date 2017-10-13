<template>
	<div class='employeeAdd'>
		<!--供应商添加弹窗-->

		<el-tabs v-model="activeName2" type="card" >
			<el-tab-pane label="基础信息" name="first">
				<div class='base_info infomation'>
					<div><p class='title'>基本信息</p></div>

					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p  class='fr'>代码</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="spbh" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>名称</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="spName" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
					
					
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>助记码</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="zjm" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>性别</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="sex" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'> 部门名称</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">
								<el-input v-model=" Business_license" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>职员类别</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">
								<el-input v-model="tax_ID" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>员工职务</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">
								<el-input v-model="organization" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						

					</el-row>
					</div>
					<!--第二行-->
					<div class='sup_info infomation'>
				
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'> 合作方</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">
								<el-input v-model=" Business_license" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>配送中心</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">
								<el-input v-model="tax_ID" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						
						

					</el-row>
					<!--第三行-->
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>联系方式</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">
								<el-input v-model="Contact_person" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>移动电话</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">
								<el-input v-model="Fixed" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>出生年月</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">
								<el-input v-model="mobile" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
					</el-row>
					<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>文化程度</p>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">
								<el-input v-model="mobile" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
					</el-row>
					<!--第四排-->
					
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>身份证号</p>
							</div>
						</el-col>
						
						<el-col :span="4">
							<div class="grid-content bg-purple">
								
								<el-input v-model="length" placeholder="请输入内容"  ></el-input>
							</div>
						</el-col>
						
						
						<el-col :span="3">
							<div class="grid-content bg-purple">

								<p class='fr'>店铺</p>
								
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">

								
								<el-input v-model="breadth" placeholder="请输入内容" ></el-input>
							</div>
						</el-col>
						
						
					</el-row>
					
					<el-row :gutter="20">
						
						
						<el-col :span="3">
							<div class="grid-content bg-purple">

								<p  class='fr'>开户银行：</p>
								</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">

								
								<el-input v-model="supVolume" placeholder="请输入内容" ></el-input></div>
						</el-col>
						
						
					</el-row>

					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p class='fr'>银行账号</p>
							</div>
						</el-col>
						
						<el-col :span="4">
							<div class="grid-content bg-purple">

								
								<el-input v-model="salePrice" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						
						
					</el-row>
					<!--辅助第三行-->
					<el-row :gutter="20">
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p class='fr'>住址</p>
								</div>
							</el-col>
							<el-col :span="4">
								<div class="grid-content bg-purple">
									<el-input v-model=" minInventory" placeholder="请输入内容"></el-input>
								</div>
							</el-col>
							
							
						</el-row>
						
						<el-row :gutter="20">
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p class='fr'>电子邮件</p>
								</div>
							</el-col>
							<el-col :span="4">
								<div class="grid-content bg-purple">
									<el-input v-model=" interfaceNumber" placeholder="请输入内容"></el-input>
								</div>
							</el-col>
							
						</el-row>
						<el-row :gutter="20">
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p class='fr'>入职日期</p>
								</div>
							</el-col>
							<el-col :span="4">
								<div class="grid-content bg-purple">
									<div class="grid-content bg-purple">
									<el-input v-model="unitPrice" placeholder="请输入内容"></el-input>
								</div>

								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p class='fr'>离职日期</p>
								</div>
							</el-col>
							<el-col :span="4">
								<div class="grid-content bg-purple">
										<div class="grid-content bg-purple">
									<el-input v-model="unitPrice" placeholder="请输入内容"></el-input>
								</div>

								</div>
							</el-col>
							
						</el-row>
						
						
						<el-row :gutter="20">
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p class='fr'>入职日期</p>
								</div>
							</el-col>
							<el-col :span="4">
								<div class="grid-content bg-purple">
									<div class="grid-content bg-purple">
									<el-input v-model="unitPrice" placeholder="请输入内容"></el-input>
								</div>

								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p class='fr'>备注</p>
								</div>
							</el-col>
							<el-col :span="4">
								<div class="grid-content bg-purple">
										<div class="grid-content bg-purple">
									<el-input v-model="unitPrice" placeholder="请输入内容"></el-input>
								</div>

								</div>
							</el-col>
							
						</el-row>
						</div>
					
					


				

					<!--底部表单-->
					<div class='form3 '>
						<el-form :inline="true" :model="formInline" class="demo-form-inline">
							<el-form-item label="建档人">
								<el-select v-model="bumen" placeholder="" class='fr'>
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
								</el-input>
							</el-form-item>
							<el-form-item label="建档日期" >
								<el-select v-model="bumen" placeholder="" class='fr'>
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
								</el-input>
							</el-form-item>
							<el-form-item label="审批人" >
								<el-select v-model="bumen" placeholder="" class='fr'>
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
								</el-input>
							</el-form-item>
							<el-form-item label="审批日期" >
								<el-select v-model="bumen" placeholder="" class='fr'>
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
								</el-input>
							</el-form-item>
							<el-form-item label="状态" >
								<el-select v-model="bumen" placeholder="" class='fr'>
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
								</el-input>
							</el-form-item>
						</el-form>
						<el-form :inline="true" :model="formInline" class="demo-form-inline">
							<el-form-item label="备注">
								<el-input v-model="caigouyuan" placeholder="" class='fr'></el-input>
							</el-form-item>
							

						</el-form>
					</div>

			
			</el-tab-pane>
			
		</el-tabs>

		<div id="footer">
			

			<el-button>
				保存

			</el-button>

			<el-button>
				退出

			</el-button>

		</div>
			
			
			
			
			
			
			
			
			
	</div>

</template>

<script>
	export default {
		
		
		
  data() {
    return {
    	activeName2:'first',
    	checkList:{},
    	radio:true,
    	ksrq:'',
    	jsrq:'',
    	spbh:'',
    	spName:'',
    	spType:'',
    	Specification:"",
    	zjm:'',
    	basicUnit:'',
    	supUnit:'',
    	Conversion:'',
    	suppliers:'',
    	Manufacturers:'',
    	bz:'',
    	length:'',
    	breadth:'',
    	height:'',
    	volume:'',
    	weight:'',
    	supVolume:'',
    	supWeight:'',
    	salePriceUnit:'',
    	salePrice:'',
    	PurPriceUnit:'',
    	PurPrice:'',
    	minInventory:'',
    	rockPrice:'',
    	maxInventory:'',
    	frequency:'',
    	interfaceNumber:'',
    	cartonBarcode:'',
    	childBarcode:'',
    	ComProperty:'',
    	transType:'',
    	transSpecification:'',
    	unitPrice:'',
    	pickProperties:'',
    	
    	shelf:'',
    	earlyWarn:'',
    	warehousing:'',
    	num1:'',
    	formInline:[],
    	checkList2:false,
    	checkList1:{},
    	num2:'',
    	tabledata1:[],
    	checked:false,
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
        caigouyuan:'',
        zhxgr:'',
        zhidanren:'',
        bumen:'',
        options:'',
    }}}
	
	
	
	
	
</script>

<style  scoped>
	
	.infomation{
		margin:10px 15px;		
		border:1px  solid  rgba(53,179,253,0.7);
		border-radius: 2px;
	}
	.form3{
		margin:10px 15px;		
		border:1px  solid  rgba(53,179,253,0.7);
		border-radius: 2px;
	}
	.infomation .title{
		color:#000;
		font-size: 20px;
		width: 100%;
		/* background: #CDECFE;;*/
	}
	.page{min-height: 400px;
	min-width: 400px;	  }
	
	
	
	#footer{
		margin-top: 15px;
		padding:10px;
	}
	#footer .el-checkbox{
		float: left;
	}
	
	
	
	#footer .el-button{
		
		
		float: right;
		margin-right:5px;
	}
</style>