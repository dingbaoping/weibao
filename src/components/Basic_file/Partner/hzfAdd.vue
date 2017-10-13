<template>
	<div class='hzftc'>
		<!--供应商添加弹窗-->







































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