<template>
	<div class='sptjtc'>
		<!--仓储中心的商品的添加弹窗-->

		<el-tabs v-model="activeName2" type="card" >
			<el-tab-pane label="商品信息" name="first">
				<div class='base_info infomation'>
					<div><p class='title'>基本信息</p></div>

					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>编号</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="spbh" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>名称</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="spName" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
					</el-row>
					<!--第一行-->
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>商品类别</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="spType" placeholder="请输入内容" disabled></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>规格型号</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="Specification" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>助记码</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="zjm" placeholder="请输入内容"></el-input>
							</div>
						</el-col>

					</el-row>
					<!--第二行-->
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>基本单位</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model=" basicUnit" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>辅助单位</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="supUnit" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>辅助换算率</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-input v-model="Conversion" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>供应商</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<el-select v-model="suppliers" placeholder="请选择">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>

					</el-row>
					<!--第三行-->
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>生产厂商</p>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<el-input v-model="Manufacturers" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>备注</p>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<el-input v-model="bz" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
					</el-row>
					<!--第四排-->

				</div>
				<div class='sup_info infomation'>
					<!--辅助信息部分-->
					<div><p class='title'>辅助信息</p></div>
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>辅助单位</p>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content bg-purple">
								
								<span class='fl'>长度：</span></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">
								
								<el-input v-model="length" placeholder="请输入内容"  ></el-input>
							</div>
						</el-col>
						<el-col :span="1">
							<div class="grid-content bg-purple">
								
								<span>m</span>
							</div>
						</el-col>
						
						<el-col :span="2">
							<div class="grid-content bg-purple">

								<span>宽度：</span>
								
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">

								
								<el-input v-model="breadth" placeholder="请输入内容" ></el-input>
							</div>
						</el-col>
						<el-col :span="1">
							<div class="grid-content bg-purple">

								<span>m</span>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content bg-purple">

								<span>高度：</span>
								
							</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">

								
								<el-input v-model="height" placeholder="请输入内容" ></el-input>
							</div>
						</el-col>
						<el-col :span="1">
							<div class="grid-content bg-purple">

								<span>m</span>
							</div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>基本单位</p>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content bg-purple">

								<span>体积：</span>
								</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">

								
								<el-input v-model="volume" placeholder="请输入内容" ></el-input>
							</div>
						</el-col>
						<el-col :span="1">
							<div class="grid-content bg-purple">

							<span>m³</span>
							</div>
						</el-col>
						
						<el-col :span="2">
							<div class="grid-content bg-purple">

								<span>重量：</span>
								</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">

								
								<el-input v-model="weight" placeholder="请输入内容" ></el-input>
							</div>
						</el-col>
						<el-col :span="1">
							<div class="grid-content bg-purple">

								<span>Kg</span>
							</div>
						</el-col>
						</el-row>
							<el-row :gutter="20">
						<el-col :span="3">	
							<div class="grid-content bg-purple">
								<p>辅助单位</p>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content bg-purple">

								<span>体积：</span>
								</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">

								
								<el-input v-model="supVolume" placeholder="请输入内容" ></el-input></div>
						</el-col>
						<el-col :span="1">
							<div class="grid-content bg-purple">

								<span>m³</span>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content bg-purple">

								<span>重量：</span>
								</div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content bg-purple">

								
								<el-input v-model="supWeight" placeholder="请输入内容" ></el-input>
							</div>
						</el-col>
						<el-col :span="1">
							<div class="grid-content bg-purple">

								<span>Kg</span>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20">
						<el-col :span="2">
							<div class="grid-content bg-purple">
								<p>销售价</p>
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">

								<el-select v-model="salePriceUnit" placeholder="请选择">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
								
							</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">

								
								<el-input v-model="salePrice" placeholder="请输入内容"></el-input>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content bg-purple">
								<p>采购价</p>
							</div>
						</el-col>
						<el-col :span="3">
						<div class="grid-content bg-purple">

							<el-select v-model="PurPriceUnit" placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						

						</div>
						</el-col>
						<el-col :span="3">
						<div class="grid-content bg-purple">

							
							<el-input v-model="PurPrice" placeholder="请输入内容"></el-input>

						</div>
						</el-col>
						<el-col :span="3">
							<div class="grid-content bg-purple">
								<p>最低限价</p>
							</div>
						</el-col>

						<el-col :span="4">
							<div class="grid-content bg-purple">

								<el-input v-model="rockPrice" placeholder="请输入内容"></el-input>

							</div>
						</el-col>
					</el-row>
					<!--辅助第三行-->
					
						</div>
					
					<div class='qita_info infomation'>

						<div><p class='title'>其他信息</p></div>

						<el-row :gutter="20">
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>最低库存</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-input v-model=" minInventory" placeholder="请输入内容"></el-input>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>最高库存</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-input v-model="maxInventory" placeholder="请输入内容"></el-input>
								</div>
							</el-col>

							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>频次</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-select v-model="frequency" placeholder="请选择">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</div>
							</el-col>
						</el-row>
						<el-row :gutter="20">
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>接口编号</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-input v-model=" interfaceNumber" placeholder="请输入内容"></el-input>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>箱条码</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-input v-model="cartonBarcode" placeholder="请输入内容"></el-input>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>子条码</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-input v-model="childBarcode" placeholder="请输入内容"></el-input>
								</div>
							</el-col>

							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>商品属性</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-select v-model="ComProperty" placeholder="请选择">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</div>
							</el-col>
						</el-row>
						<el-row :gutter="20">
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>运输货物类型</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-select v-model="transType" placeholder="请选择">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>

								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>运输货物规格</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-select v-model="transSpecification" placeholder="请选择">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>费用单价</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-input v-model="unitPrice" placeholder="请输入内容"></el-input>
								</div>
							</el-col>

							<el-col :span="3">
								<div class="grid-content bg-purple">
									<p>拣货属性</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-select v-model="pickProperties" placeholder="请选择">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</div>
							</el-col>
						</el-row>

					</div>

					<div class='zdyinfo infomation'>
						<div >
							<p class='title'>
								自定义信息
							</p>
						</div>
					</div>

					<div class='Commodity_management infomation'>
						<div class='spgl'><p class='title'>商品管理</p></div>
						<el-checkbox-group v-model="checkList">
							<el-checkbox label="批次管理"></el-checkbox>
							<el-checkbox label="自动生成批次 "></el-checkbox>
							<el-checkbox label="按保质期管理"></el-checkbox>
							<el-checkbox label="可组装/拆卸"></el-checkbox>

						</el-checkbox-group>

						<el-row :gutter="20">
							<el-col :span="2">
								<div class="grid-content bg-purple">
									<p>保质期</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-select v-model="shelf" placeholder="请选择">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>

								</div>
							</el-col>
							<el-col :span="2">
								<div class="grid-content bg-purple">
									<p>有效期预警（天）</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-select v-model="earlyWarn" placeholder="请选择">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</div>
							</el-col>
							<el-col :span="2">
								<div class="grid-content bg-purple">
									<p>入库有效（天）</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple">
									<el-input v-model="warehousing" placeholder="请输入内容"></el-input>
								</div>
							</el-col>

							<el-col :span="2">
								<div class="grid-content bg-purple">
									<p>托盘堆叠</p>
								</div>
							</el-col>
							<el-col :span="3">
								<el-input-number v-model="num1"  :min="1" :max="10"></el-input-number>

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
							<el-form-item label="最后修改人">
								<el-input v-model="zhxgr" disabled="" class='fr'></el-input>
							</el-form-item>
							<el-form-item label="最后修改日期" >
								<el-input v-model="zhidanren" disabled="" placeholder="" class='fr'></el-input>
							</el-form-item>

						</el-form>
					</div>

			
			</el-tab-pane>
			<el-tab-pane label="费用计算" name="second"   class='page'>
				<!--这里面真的没东西-->
				<p>没看到东西</p>
			</el-tab-pane>
			<el-tab-pane label="条形码管理" name="third" class='page'>
				<div class='txmgl'>

					<el-checkbox-group v-model="checkList1">
						<el-checkbox  v-model="checkList2"  label="启用条码管理"></el-checkbox>

					</el-checkbox-group>
					<el-row :gutter="20" >
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<p>条码类型：</p>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<el-radio class="radio" v-model="radio" label="1"  :disabled='!checkList2'>公用条码</el-radio>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<el-button :disabled='!checkList2'>打印箱条码</el-button>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<el-button :disabled='!checkList2'>打印条形码</el-button>
							</div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<p>默认数量：</p>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<el-input-number v-model="num2"  :min="1" :max="10" :disabled='!checkList'></el-input-number>

							</div>
						</el-col>
					</el-row>

				</div>

			</el-tab-pane>
			<el-tab-pane label="操作日志" name="fourth" class='page'>
				<div class='czrz'>
					<el-row :gutter="20">
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<el-date-picker v-model="ksrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
								</el-date-picker>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="grid-content bg-purple">
								<p>至</p>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<el-date-picker v-model="jsrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
								</el-date-picker>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple">
								<el-button>
									查询

								</el-button>

							</div>
						</el-col>
					</el-row>

					<div class='table'>
						<el-table :data="tabledata1" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
							<el-table-column prop="date" label="内容" sortable width="110">
								<el-table-column prop="date" label="" sortable width="110">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="name" label="操作人" sortable width="110">
								<el-table-column prop="name" label="" sortable width="110">
								</el-table-column>
							</el-table-column>
							<el-table-column prop="data" label="操作时间" sortable width="110">
								<el-table-column prop="data" label="" sortable width="110">
								</el-table-column>
							</el-table-column>

						</el-table>

					</div>

				</div>

			</el-tab-pane>
		</el-tabs>

		<div id="footer">
			<el-checkbox v-model="checked">连续新增</el-checkbox>

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