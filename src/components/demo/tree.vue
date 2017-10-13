<template>
  <div>
123
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
      dbHandle:function(event, scope){
        let key = scope.column.property+'Edit';
        this.$set(scope.row, key, !scope.row[key]);
        console.log(event.target.parentNode);
        setTimeout(()=>{
          try{
            event.target.parentNode.querySelector('input').focus()
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
