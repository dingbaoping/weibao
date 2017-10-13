<template>
	<div class='dbddxz'>
		<!-- 这里是导航栏部分结束 -->
			<div class="but-box">
				<ul>
					<!--对应部分在dbddxsb文件夹内-->
					<li><div class="boxtab"><div class="curbox bc"><span>保存</span></div></div></li>
					<li><div class="boxtab"><div class="curbox tc"@click="closetag"><span>退出</span></div></div></li>
				</ul>
			</div>
			<!-- 这里是导航栏部分结束 -->
		<div class="form-3">
			
			<!--表单部分-->
			<el-row :gutter="20">
				<el-col :span="2">
					<div class="grid-content bg-purple">
						<p>调拨订单号：</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<el-input v-model="ddbh" placeholder="" disabled></el-input>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<h2>调拨订单</h2></div>
				</el-col>

			</el-row>

			<el-row :gutter="20">
				<el-col :span="2">
					<div class="grid-content bg-purple">
						<p>调出配送中心：</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<!-- 配送中心列表 -->
						<el-select v-model="peisong1"  filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
							<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
								<span style="float: left">{{ item.DCName }}</span>
							</el-option>
						</el-select>
						<!-- 配送中心列表结束    @change="pschange"为对应函数  需要时加上 -->
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content bg-purple">
						<p>调出园区：</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<!-- 园区列表 -->
						<el-select v-model="yuanqu" id="yq" placeholder="" no-data-text="无数据" class=" blueborder input_width">
							<el-option id="yqlb" v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
								<span style="float: left">{{ item.ParkName }}</span>
							</el-option>
						</el-select>
						<!-- 园区列表 -->
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content bg-purple">
						<p>调入配送中心：</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<!-- 配送中心列表 -->
						<el-select v-model="peisong2"  filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
							<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
								<span style="float: left">{{ item.DCName }}</span>
							</el-option>
						</el-select>
						<!-- 配送中心列表结束 -->
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content bg-purple">
						<p>调入园区：</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<!-- 园区列表 -->
						<el-select v-model="yuanqu1" id="yq" placeholder="" no-data-text="无数据" class=" blueborder input_width">
							<el-option id="yqlb" v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
								<span style="float: left">{{ item.ParkName }}</span>
							</el-option>
						</el-select>
						<!-- 园区列表 -->
					</div>
				</el-col>

			</el-row>

			<el-row :gutter="20">
				<el-col :span="2">
					<div class="grid-content bg-purple">
						<p>合作方</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<!--下拉式合作方-->
						<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable  class='hzf  input_width'>
							<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.Code">
								<span style="float: left">{{ item.Code }}</span>
								<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
							</el-option>
						</el-select>
						<!--下拉式合作方结束-->
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content bg-purple">
						<p>调拨类型</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<el-select v-model="dbtype" placeholder="请选择" class='input_width'>
							<el-option v-for="item in dbtypelist" :key="item.value" :label="item.label" :value="item.value">
							<span style="float: left; padding-left: 15px;">{{ item.label }}</span>
							
							
							</el-option>
						</el-select>

					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content bg-purple">
						<p>日期</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<el-date-picker v-model="timeDate" type="date" placeholder="选择日期" :picker-options="pickerOptions0" class='input_width'>
						</el-date-picker>

					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content bg-purple">
						<p>提交状态</p>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">

					<el-select v-model="tjzt" placeholder="请选择" class='input_width'>
						<el-option v-for="item in tjztlist" :key="item.value" :label="item.label" :value="item.value">
								<span style="float: left; padding-left: 15px;">{{ item.label }}</span>
							
							
							
							</el-option>
						</el-select>

					</div>
				</el-col>
			</el-row>

			<el-row :gutter="20">
				<el-col :span="2">
					<div class="grid-content bg-purple">
						<p>备注</p>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple">
						<el-input v-model="bz" placeholder=""></el-input>
					</div>
				</el-col>

			</el-row>
		</div>

		<!--表格部分-->
		<div class='table'>
			<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" >
				<el-table-column type="selection" width="55">
				</el-table-column>

				<el-table-column prop="name" label="商品编号" width="200">
				</el-table-column>

				<el-table-column label="" width="25">
					<template></template>
					<!--插入按钮部分 商品弹窗-->
				</el-table-column>
				<el-table-column prop="name" label="商品名称" width="140">
				</el-table-column>
				<el-table-column prop="name" label="规格型号" width="140">
				</el-table-column>
				<el-table-column prop="name" label="基本单位" width="140">
				</el-table-column>
				<el-table-column prop="address" label="基本数量" width="140">
				</el-table-column>
				<el-table-column prop="address" label="辅助单位" width="140">
				</el-table-column>
				<el-table-column prop="address" label="辅助数量" width="140">
				</el-table-column>
				<el-table-column prop="address" label="基本价格" width="140">
				</el-table-column>
				<el-table-column prop="address" label="辅助价格" width="140">
				</el-table-column>
				<el-table-column prop="address" label="金额" width="140">
				</el-table-column>
				<el-table-column prop="address" label="备注" width="140">
				</el-table-column>
			</el-table>

		</div>
		<!--商品表格部分结束-->
		<ul class='heji_ul'>
			<li>部门</li>
			<li>
				<el-input v-model="bumen" placeholder=""></el-input>
			</li>
			<li>制单人</li>
			<li>
				<el-input v-model="zhidanren" placeholder=""></el-input>
			</li>
			<li>审核人</li>
			<li>
				<el-input v-model="shenheren" placeholder=""></el-input>
			</li>
			<li>审核时间</li>
			<li>
				<el-input v-model="shenhetime" placeholder=""></el-input>
			</li>

		</ul>

	</div>

</template>

<script>
	
	
	
	 export default {
    data () {
      return {
        
        timeDate:'',
        shenhetime:'',
        shenheren:'',
        zhidanren:'',
        bumen:'',
        tableData3:[],
        bz:'',
        tjztlist:[{label:'提交',value:0},{label:'未提交',value:1}],
        tjzt:'',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        dbtype:'',
        options:[],
        dbtypelist:[{label:'同价调拨',value:0},{label:'异价调拨', value:1}],//调拨类型选择 value值以文档为准。
        hzf:'',
        yqlist:[],
        yuanqu:"",
        yuanqu1:'',
        cities:[],
        peisong2:'',
        peisong1:'',
        pszx:false,
        ddbh:'',
      };
    }
  }
	
	
	
</script>

<style scoped>
	
	
	
	.form-3{
		padding:10px;
	}
	.form-3 h2{
		font-size: 20px;
		font-weight: 900;
		color: #000000;
		 text-align: center;
	}	
		
		




</style>