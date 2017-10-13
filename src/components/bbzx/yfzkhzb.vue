 <template>
  <!-- 应付账款汇总表 -->
  <div class="yfzkhzb">
    <div class="pszhbb">
      <!--操作按鈕i   -->
      <div class="but-box">
        <ul>
          <li>
            <div class="boxtab">
              <div class="curbox">
                <span>导出</span>
              </div>
            </div>
            <span class="gun"></span>
          </li>
          <li>
            <div class="boxtab">
              <div class="curbox sx">
                <span>刷新</span>
              </div>
            </div>
            <span class="gun"></span>
          </li>
          <li>
            <div class="boxtab">
              <div class="curbox tc"@click="closetag">
                <span>退出</span>
              </div>
            </div>
            <span class="gun"></span>
          </li>
        </ul>
      </div>
      <!--操作按鈕結束-->
    </div>
    <div class="searchnav">
      <div class="title">应付账款汇总表</div>
      <div class="search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline form1">
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="grid-content djbj">
                <p class=''>查询 :</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content djbj">
                <el-input v-model="input" placeholder="请输入内容" class='input_width'></el-input>
              </div>
            </el-col>
            <el-col :span="6" offset='2'>
              <div class="grid-content chaxun">
                <el-button type="primary" @click.native='' class='cx el-icon-search '>查询</el-button>
                <el-button type="primary" @click.native='' class='close el-icon-circle-close'>关闭</el-button>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="distributionCenter">
          配送中心:
      <el-select v-model="value" placeholder="请选择" @change="change(value)">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-table :data="options[value].tableData" @current-change="providerInfo1" :type="index" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column prop="date" type="index" label="编号" sortable width="60">
        </el-table-column>
        <el-table-column prop="name" label="名称" sortable width="315">
        </el-table-column>
      </el-table>
    </div>
    <div class="providerInfo">
     <p>供应商的内容,共计1条记录</p>
      <el-table :data="options[value].tableData[date].providerInfo" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column prop="date" label="编号" sortable width="80">
        </el-table-column>
        <el-table-column prop="name" label="名称" sortable width="270">
        </el-table-column>
        <el-table-column prop="due" label="期初应付" sortable width="190">
        </el-table-column>
        <el-table-column prop="rental" label="总额" sortable width="190">
        </el-table-column>
        <el-table-column prop="paid" label="已付" sortable width="190">
        </el-table-column>
        <el-table-column prop="advance" label="预付款" sortable width="190">
        </el-table-column>
        <el-table-column prop="advanceBalance" label="预付款余额" sortable width="190">
        </el-table-column>
        <el-table-column prop="balance" label="余额" sortable width="190">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      options: [{
        value: '0',
        label: '广州配送中心',
        tableData: [{
          date: '0',
          name: '广州唐海商贸有限公司',
          providerInfo: [
            {
              date: '100',
              name: '广州唐海商贸有限公司',
              due: '0.00',
              rental: '164.00',
              paid: '0.00',
              advance: '0.00',
              advanceBalance: '0.00',
              balance: '164.00'
            }
          ]
        },
        {
          date: '1',
          name: '长沙',
          providerInfo: [
            {
              date: '1000',
              name: '广州唐海商贸有限公司',
              due: '0.00',
              rental: '1640.00',
              paid: '0.00',
              advance: '0.00',
              advanceBalance: '0.00',
              balance: '1640.00'
            }
          ]
        },
        {
          date: '2',
          name: '北京'
        }, {
          date: '3',
          name: '上海'
        }
        ]
      }, {
        value: '1',
        label: '长沙配送中心',
        tableData: [{
          date: '1',
          name: '武汉'
        },
        {
          date: '2',
          name: '西安'
        },
        {
          date: '3',
          name: '哈尔滨'
        }, {
          date: '4',
          name: '湘西'
        }
        ]
      }, {
        value: '2',
        label: '上海配送中心',
        tableData: [
						{
					    date: '1',
					    name: '武汉'
				    },
			  	  {
					    date: '2',
					    name: '西安'
				    },
				    {
					    date: '3',
					    name: '哈尔滨'
					  },
					  {
					    date: '4',
					    name: '湘西'
				    }
				  ]
      }, {
        value: '3',
        label: '北京配送中心',
        tableData: [
						{
					    date: '1',
					    name: '武汉'
				    },
			  	  {
					    date: '2',
					    name: '西安'
				    },
				    {
					    date: '3',
					    name: '哈尔滨'
					  },
					  {
					    date: '4',
					    name: '湘西'
				    }
				  ]
      }, {
        value: '4',
        label: '深圳配送中心',
        tableData: [
						{
					    date: '1',
					    name: '武汉'
				    },
			  	  {
					    date: '2',
					    name: '西安'
				    },
				    {
					    date: '3',
					    name: '哈尔滨'
					  },
					  {
					    date: '4',
					    name: '湘西'
				    }
				  ]
      }],
      value: '0',

      date:'1'
    }
  },
  methods: {
    change(param) {
      console.log(param);
      this.value = param;
    },
    providerInfo1(val) {
      console.log(val);
      this.date = val.date;
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
					that.peisong = data[0].DCID;
					that.cities = data;
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
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
			},
  }
}
</script>
<style>
.searchnav {
  height: 60px;
}

.el-col-offset-2 {
  margin-left: 2%;
}

.yfzkhzb .title {
  float: left;
  height: 60px;
  line-height: 60px;
  padding-left: 40px;
  font-size: 20px;
  font-weight: blod;
  color: #000;
}
.yfzkhzb .el-table__empty-block {
  min-height: 340px;
}
.yfzkhzb .el-table__body-wrapper {
  min-height: 592px;;
}
.yfzkhzb .providerInfo .el-table__body-wrapper {
  min-height: 595px;;
}
.yfzkhzb button{
	padding: 6px 15px;
}
form.form1 {
  float: right;
  width: 600px;
  height: 60px;
  line-height: 50px;
}

form.form1 .el-col-2 {
  float: left;
  width: 112px;
}

form.form1 .el-col-4 {
  float: left;
  width: 140px;
}

form.form1 .el-col-6 {
  float: left;
  width: 200px;
}

form.form1 div.djbj {
  width: 140px;
}

form.form1 p {
  width: 112px;
  text-align: center;
}

.distributionCenter {
  float: left;
  width: 20%;
  border: 1px solid #35b3fd;
}
.providerInfo {
  float: right;
  width: 79%;
  border: 1px solid #35b3fd;
}
.yfzkhzb .el-table {
  height: 635px !important;
}
.yfzkhzb .providerInfo .el-table {
  height: 638px !important;
}
</style>
  