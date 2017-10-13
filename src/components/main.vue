<template>
  <div class='demo'>
    <!--<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>-->

    <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">

      <spzl>
        <el-button slot="btnGroup" @click="dialogVisible = false" type="text"><i class='ico5'></i>退出</el-button type="text">
      </spzl>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import spzl from './spzl.vue'


export default {
  components: {
    'spzl': spzl
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }
};




//export default {
//name: 'demo1',
//components:{
//    			'spzl':spzl
//    		},
//data () {
//  return {
//  	  	
//  
// 
////      dialogVisible: false,
//    		
//    	
//  methods: {
//    handleClose(done) {
//      this.$confirm('确认关闭？')
//        .then(_ => {
//          done();
//        })
//        .catch(_ => {});
//    }
//  },
//
//    msg: 'Welcome to Your Vue.js App'
//  }
//}
//}
</script>
 
<style scoped>
.main {
  width: 600px;
  height: 600px;
}

.spzl {
  width: 500px;
  height: 500px;
}
</style>
