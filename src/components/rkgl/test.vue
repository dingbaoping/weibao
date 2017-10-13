<template>
	<div class='rkddzhbb' id='rkddzhbb'>
		<!--出库管理综合报表-->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox dc">
							<span>导出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<span>窗体样式</span>
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
		 <div class="app-container calendar-list-container">
	<div class="searchnav">
			<!--form第一行-->
			<el-form :inline="true" v-model="formInline" class="demo-form-inline form1">
				<el-row :gutter="14" type="flex">
					<!--check-->
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content ">
							<el-date-picker id="ksrq" v-model="ksrq" align="left" type="date" placeholder="选择日期">
							</el-date-picker>
						</div>
					</el-col>
					<el-col :xs="1" :sm="1" :md="1" :lg="1">
						<div class="grid-content ">
							<p>至</p>
						</div>
					</el-col>
					<el-col :xs="4" :sm="4" :md="4" :lg="3">
						<div class="grid-content ">
							<el-date-picker id="jsrq" v-model="jsrq" align="right" type="date" placeholder="选择日期">
							</el-date-picker>
						</div>
					</el-col>
					<el-col :xs="2" :sm="2" :md="2" :lg="2">
						<div class="grid-content ">
							<p>配送中心:</p>
						</div>
					</el-col>
					<el-col :span="3">
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
					<el-col :span="2">
						<div class="grid-content ">
							<p>合作方:</p>

						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">

							<!-- 合作方列表 -->
							<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
								<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.InterID">
									<span style="float: left">{{ item.Code }}</span>
									<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
								</el-option>
							</el-select>
							<!-- 合作方列表结束 -->
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content ">
							<el-button type="primary" @click.native='search' class='cx'><i class='el-icon-search'></i>查询</el-button>
							<el-button type="primary" @click.native='' class='close'><i class='el-icon-circle-cross'></i>关闭</el-button>
						</div>
					</el-col>
				</el-row>

			</el-form>


			<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content ">
							<el-date-picker id="ksrq" v-model="ksrq" align="left" type="date" placeholder="选择日期">
							</el-date-picker>
						</div>
					</el-col>
					<el-col :xs="1" :sm="1" :md="1" :lg="1">
						<div class="grid-content ">
							<p>至</p>
						</div>
					</el-col>
					<el-col :xs="4" :sm="4" :md="4" :lg="3">
						<div class="grid-content ">
							<el-date-picker id="jsrq" v-model="jsrq" align="right" type="date" placeholder="选择日期">
							</el-date-picker>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>配送中心*：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<!-- 配送中心列表 -->
							<el-select v-model="peisong" @change="data.pschange" filterable placeholder="" class=" blueborder input_width" :disabled="pszx">
								<el-option id="pszx" v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									<span style="float: left">{{ item.DCName }}</span>
								</el-option>
							</el-select>
							<!-- 配送中心列表结束 -->
						</div>
					</el-col>
					<el-col :xs="2" :sm="2" :md="2" :lg="2">
						<div class="grid-content  ">
							<p>园区*：</p>

						</div>
						<!--<div class="grid-content  ">

						</div>-->
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<!-- 园区列表 -->
							<el-select v-model="yuanqu" placeholder="" no-data-text="23132" class=" blueborder input_width">
								<el-option id="yqlb" v-for="item in yqlist" :key="item.ParkID" :label="item.ParkName" :value="item.ParkID">
									<span style="float: left">{{ item.ParkName }}</span>
								</el-option>
							</el-select>
							<!-- 园区列表 -->
						</div>
						<!--<div class="grid-content  ">

						</div>-->
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>订单编号：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-input v-model="ddbh" placeholder="" class=" blueborder yuandanhao input_width"></el-input>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>订单日期*：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<!-- 订单日期 -->
							<div class=" blueborder input_width">
								<el-date-picker v-model="ddrq" id="ddrq" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1" class='input_width'>
								</el-date-picker>
							</div>
							<!-- 订单日期结束 -->
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p class='hzfvalue'>合作方*：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-input class=" blueborder input_width" id="hzfEnter" placeholder="" icon="search" v-model="hzf" @click="hzf_Click = true">
							</el-input>
						</div>
					</el-col>
					<el-col :xs="2" :sm="2" :md="2" :lg="2">
						<div class="grid-content  ">
							<p>供应商*：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">

							<el-input class=" blueborder input_width" placeholder="" icon="search" v-model="gys" @click="gys_Click = true"></el-input>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>入库类型*：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-select placeholder="" v-model="rklx" class=" blueborder input_width">
								<el-option v-for="item in rklxs" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">

							<p>预计到货时间：</p>

						</div>

					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<!-- 预计到货时间 -->
							<div class="block  blueborder input_width">
								<el-date-picker id="dhsj" v-model="dhsj" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1" class='input_width'>
								</el-date-picker>
							</div>
							<!-- 预计到货时间结束 -->
						</div>

					</el-col>
				</el-row>
				<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>交货方式：</p>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-select v-model="jhfs" placeholder="" class=" blueborder input_width">
								<el-option v-for="item in jhfss" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>

					</el-col>
					<el-col :xs="2" :sm="2" :md="2" :lg="2">
						<div class="grid-content  ">
							<p>源单号：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">

							<el-input v-model="ydh" placeholder="" class=" input_width"></el-input>
						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>运输方式：</p>

						</div>

					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">

							<el-select v-model="ysfs" placeholder="" class=" blueborder input_width">
								<el-option v-for="item in ysfss" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>
						</div>

					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p>提交状态：</p>

						</div>
					</el-col>
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<el-select v-model="tjzt" placeholder="" class=" input_width">
								<el-option v-for="item in tjzts" :key="item.value" :label="item.label" :value="item.value">
									<span style="float: left">{{ item.label }}</span>
								</el-option>
							</el-select>

						</div>
					</el-col>
				</el-row>

				<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content ">
							<p class="duliw">地址：</p>

						</div>
					</el-col>
					<el-col :xs="8" :sm="8" :md="8" :lg="8">
						<div class="grid-content ">

							<el-input v-model="dz" disabled placeholder="" icon="search" class='fr blueborder dizhi input_width' @click='dizhi_Click=true'></el-input>
						</div>
					</el-col>

				</el-row>
				<el-row :gutter="10" type="flex">
					<el-col :xs="3" :sm="3" :md="3" :lg="3">
						<div class="grid-content  ">
							<p class="duliw">备注：</p>
						</div>
					</el-col>
					<el-col :xs="8" :sm="8" :md="8" :lg="8">
						<div class="grid-content  ">
							<el-input v-model="bz" placeholder="" class='fr blueborder dizhi input_width'></el-input>
						</div>
					</el-col>
				</el-row>
			</div>
			<!--功能选单部分结束-->

		</div>
		<!--搜索框完-->

    <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%" class="table">
      
      <el-table-column width="110px" align="center" label="ID">
        <template scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column width="140px" align="center" label="注册时间">
        <template scope="scope">
          <span>{{scope.row.register_time}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" width="100" label="手机账号">
        <template scope="scope">
          <span>{{scope.row.account}}</span>
        </template>
      </el-table-column>

       <el-table-column align="center" width="80" label="姓名">
        <template scope="scope">
          <span>{{scope.row.username}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="140px" align="center" label="总店名称">
        <template scope="scope">
          <span class="name">{{scope.row.headquarter}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="140px" align="center" label="分店名称">
        <template scope="scope">
          <span class="name">{{scope.row.branch_pharmacy}}</span>
        </template>
      </el-table-column>

       <el-table-column width="60px" align="center" label="会员数">
        <template scope="scope">
          <span>{{scope.row.about.members_count}}</span>
        </template>
      </el-table-column>

       <el-table-column width="70px" align="center" label="血压条数">
        <template scope="scope">
          <span>{{scope.row.about.xueyas_count}}</span>
        </template>
      </el-table-column>

       <el-table-column width="70px" align="center" label="血糖条数">
        <template scope="scope">
          <span>{{scope.row.about.xuetangs_count}}</span>
        </template>
      </el-table-column>

      <el-table-column width="70px" align="center" label="血脂条数">
        <template scope="scope">
          <span>{{scope.row.about.bloodfats_count}}</span>
        </template>
      </el-table-column>

      <el-table-column width="70px" align="center" label="体脂条数">
        <template scope="scope">
          <span>{{scope.row.about.bodyparams_count}}</span>
        </template>
      </el-table-column>

      <el-table-column width="140px" align="center" label="最近登录日期">
        <template scope="scope">
          <span>{{scope.row.last_login_time}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="最近登录地区" min-width="100">
        <template scope="scope">
          <span class="name">{{scope.row.login_address}}</span>
        </template>
      </el-table-column>


      <el-table-column width="100px" align="center" label="累计登录次数">
        <template scope="scope">
          <span>{{scope.row.login_frequency}}</span>
        </template>
      </el-table-column>

      <el-table-column width="90px" align="center" label="版本号">
        <template scope="scope">
          <span>{{scope.row.version}}</span>
        </template>
      </el-table-column>

    </el-table>

     <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="data.page"
        :page-sizes="[10,20,30, 50]" :page-size="data.per_page" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>
  </div>
</template>

<script>
     import { getTest } from 'api/test';

    export default {
      name: 'test',
      data() {
        return {
          list: null,
          total: null,
          listLoading: true,    
          data: {
            type:1,
            page: 0,
            per_page: 10,           
            register_date:'',
            pschange:1,
            phone:'',
            name:'',
            headquarter:'',
            branch_pharmacy:'',
            last_login_area:'',
            version:''
          },
          cities:[
	          {
	          	DCID:1,
				DCName:"西安配送中心"
	          },
	          {
	          	DCID:2,
				DCName:"广州配送中心"
	          },
	          {
	          	DCID:3,
				DCName:"兰州配送中心"
	          },
	          {
	          	DCID:4,
				DCName:"长沙配送中心"
	          },
	          {
	          	DCID:5,
				DCName:"合肥配送中心"
	          },
	          {
	          	DCID:6,
				DCName:"长沙友阿配送中心"
	          },
	          {
	          	DCID:7,
				DCName:"温州配送中心"
	          }
          ],
          tableKey: 0
        }
      },
      created() {
        this.getTest();
      },
      methods: {
        dateChange(val) {
          console.log(val)
          this.data.register_date=val
      },
      timeChange(val) {
          console.log(val)
          this.data.last_login_date=val
      },
        getTest() {
          this.listLoading = true;
          getTest(this.data).then(response => {
            this.list = response.data.items;
            this.total = response.data.total;
            this.listLoading = false;
          })
        },
       
        handleFilter() {
          this.getTest();
        },
        handleSizeChange(val) {
          this.data.per_page = val;
          this.getTest();
        },
        handleCurrentChange(val) {
          this.data.page = val;
          this.getTest();
        }
      }
    }
</script>
<style type="text/css" scopep>
/*.el-table th>.cell {
    word-wrap: normal;
    text-overflow: ellipsis;
    line-height: 30px;
    width: 100%;
    box-sizing: border-box;
    background: #009ff3;
    color: #fff;
}
 .el-table th.is-leaf {
    background: #009ff3;
    text-align: center;
}*/
.el-pagination{
  text-align: right;
}
.el-pagination .el-select .el-input {
    width: 90px;
}
.el-table span.name{
      padding-left: 4px;
       padding-right: 4px;      
      white-space:nowrap; 
      text-overflow:ellipsis; /*文字溢出的部分隐藏并用省略号代替*/
      -o-text-overflow:ellipsis; 
      -o-text-overflow:ellipsis; 
      overflow: hidden;
    }
.el-table .cell, .el-table th>div {
    padding-left: 2px;
    padding-right: 2px;
    box-sizing: border-box;
    text-overflow: ellipsis;
}

.el-row {
		margin: 0 5px;
		margin-top: 5px;
		margin-bottom: 10px;
	}
	
	.rkddzhbb .grid-content {
		text-align: center;
	}
	
	.rkddzhbb .el-button--small {
		width: 80px;
	}
	
	.rkddzhbb .el-form {
		margin-bottom: 5px;
	}
	
	.rkddzhbb .el-table {
		overflow: inherit;
	}
	
	.rkddzhbb .grid-content p {
		min-width: 70px;
	}
	
	.table_left {
		width: 15%;
		float: left;
		max-height: 510px;
		overflow: scroll;
	}
	
	.table_right {
		width: 84%;
		float: right;
		overflow: hidden;
	}
	.el-tree{
		width: 220px;
	}
</style>