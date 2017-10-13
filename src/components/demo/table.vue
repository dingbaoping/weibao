<template>
  <div>

    <el-table :data="splbs" ref="selectData" @cell-dblclick="dbHandle"   element-loading-text="玩命加载中" height="340" border style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="Code" label="编号" width="100" class-name="mohucha">
      </el-table-column>
      <el-table-column prop="BarCode" label="条形码" width="100" class-name="mohucha">
      </el-table-column>
      <el-table-column prop="Name" label="数量1" width="180" class-name="mohucha">
        <!-- 可编辑写法start -->
        <template scope="scope">
          <div v-show="!scope.row.NameEdit" >{{scope.row.Name}}</div>
          <el-input v-show="scope.row.NameEdit" v-model="scope.row.Name" @blur="nameChange(scope)"></el-input>
        </template>
        <!-- 可编辑写法end -->
      </el-table-column>

      <el-table-column prop="ConvRate" label="数量2" width="100" class-name="mohucha">
        <template scope="scope">
          <div v-show="!scope.row.ConvRateEdit" >{{scope.row.ConvRate}}</div>
          <el-input ref="ConvRate" v-show="scope.row.ConvRateEdit" v-model="scope.row.ConvRate" @blur="convRateChange(scope)"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="Memarks" label="价格" width="100" class-name="mohucha">
        <template scope="scope">
          <div v-show="!scope.row.MemarksEdit">{{scope.row.Memarks}}</div>
          <el-input v-show="scope.row.MemarksEdit" v-model="scope.row.Memarks" @blur="memarksChange(scope)"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="Manufacturer" label="总价" width="100" class-name="mohucha">
      </el-table-column>
      <el-table-column prop="Model" label="规格" width="100" class-name="mohucha">
      </el-table-column>
      <el-table-column prop="Unit" label="单位" width="100" class-name="mohucha">
      </el-table-column>
      <el-table-column prop="SupUnit" label="辅助单位" width="100" class-name="mohucha">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        splbs: []
      }
    },
    created() {
      this.get();
    },
    methods: {
      //参数改变时
      nameChange(scope){
        scope.row.NameEdit=false;
        scope.row.ConvRate = scope.row.Name*6;
        scope.row.Manufacturer = scope.row.Name * scope.row.Memarks;
      },
      convRateChange(scope){
        scope.row.ConvRateEdit=false;
        scope.row.Name = scope.row.ConvRate / 6;
        scope.row.Manufacturer = scope.row.Name * scope.row.Memarks;
      },
      memarksChange(scope){
        scope.row.MemarksEdit=false;
        scope.row.Manufacturer = scope.row.Name * scope.row.Memarks;
      },
      //单元格双击，开启可编辑
      dbHandle:function(row, column, cell, event){
        let key = column.property+'Edit';
        this.$set(row, key, !row[key]);
        setTimeout(()=>{
          try{
            $("input",cell).focus();
          }catch(err){
          }
        },100);
      },
      get: function() {
        var that = this;
        var data = [{
          "InterID": "G16042100001",
          "Code": "3701001",
          "Name": 2,
          "BarCode": "3701001",
          "Model": "1*6",
          "Unit": "瓶",
          "SupUnit": "箱",
          "ConvRate": 1,
          "Manufacturer": "",
          "Remarks": "",
          "ShelfLifeDays": 0,
          "name": 1,
          "ShelfLifeManage": 0,
          "AutoCreateBatch": 0,
          "Memarks":2
        },
          {
            "InterID": "G16042100001",
            "Code": "3701001",
            "Name": 3,
            "BarCode": "3701001",
            "Model": "1*6",
            "Unit": "瓶",
            "SupUnit": "箱",
            "ConvRate": 2,
            "Manufacturer": "",
            "Remarks": "",
            "ShelfLifeDays": 0,
            "name": 1,
            "ShelfLifeManage": 0,
            "AutoCreateBatch": 0,
            "Memarks":3
          }];

        that.splbs = data;
      }
    }
  }
</script>
