<template>
  <div class='zhcx'>
    <!--查询功能部分-->
    <div class="cxgn">
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-select v-model="riqi1" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <span>至</span>
            <el-select v-model="riqi2" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple">
            <button class='cx'>
              <span>查询</span>
            </button>
            <button class='cancel'>
              <span>取消</span>
            </button>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <span>配送中心</span>
            <el-select v-model="peisong" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <span>合作方</span>
            <el-select v-model="hzf" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <span>单号类型</span>
            <el-select v-model="dhlx" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <span>业务单号</span>
            <el-select v-model="ywdh" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>

    </div>
    <!--表格部分-->
    <div class="table">
      <div class="table_title">
        <span>操作记录</span>
      </div>
      <el-table ref="multipleTable" :data="table_czjl" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop='number' label="订单号" width="auto">
          <template scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="number2" label="出库单号" width="auto">
        </el-table-column>
        <el-table-column prop="number3" label="其他单号" width="auto">
        </el-table-column>
        <el-table-column prop="miaoshu" label="描述" width="auto">
        </el-table-column>
        <el-table-column prop="caozuoren" label="操作人" width="auto">
        </el-table-column>
        <el-table-column prop="date" label="操作日期" width="auto">
        </el-table-column>
      </el-table>
      <div class="table_footer">
        <button class='tablehide'>隐藏列表</button>
        <button class='tableshow'>显示列表</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'zhcxtc',
  data() {
    return {
      data: {},
      methods: {
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
      }
    },
		
	},
  mounted: function() {
    //判断标签的js代码，每个需要新建标签页的vue文件都需要加这段			
    var that = this;
    $('html').on('click', '.cx', function() {
      console.log('submit');
    });
    $('html').on('click', 'tablehide', function() {
      $('.table .el-table').hide();
    });
    $('html').on('click', 'tableshow', function() {
      $('.table .el-table').show();
    })


  }
}



</script>

<style>

</style>