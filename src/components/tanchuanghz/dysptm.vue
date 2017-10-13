<template>
	<div class='dysptm'>
		<!--商品内部按钮弹窗-->
		<div class="select_box">
			<!-- 这里是导航栏部分 -->
			<div class="but-box">
				<ul>

					<li>
						<div class="boxtab">
							<div class="curbox djsz" @click="print">
								<span>打印</span>
							</div>
						</div>
						<span class="gun"></span>
					</li>
					<li>
						<slot name="close"></slot>
					</li>
				</ul>
			</div>
			<!--搜索栏结束-->
			<div class='table'>
				<div class="right">
					<div class='table-header'>
						<el-table :data="splbs" ref="selectData" @selection-change="handleSelectionChange" @cell-dblclick="redact" v-loading.body="loading" element-loading-text="玩命加载中" height="340" border style="width: 100%">
							<el-table-column type="index" width="53">
							</el-table-column>
							<el-table-column type="selection" width="53">
							</el-table-column>
							<el-table-column prop="ProCode" label="商品编号" width="90">
							</el-table-column>
							<el-table-column prop="ProName" label="商品名称" width="180">
							</el-table-column>
							<el-table-column prop="BarCode" label="条形码" width="90" >
							</el-table-column>
							<el-table-column prop="ProModel" label="规格型号" width="80">
							</el-table-column>
							<el-table-column prop="StockName" label="仓位" width="150" >
							</el-table-column>
							<el-table-column prop="SupUnit" label="基本单位" width="80" >
							</el-table-column>
							<el-table-column prop="Num" label="基本数量" width="80" >
							</el-table-column>
							<el-table-column prop="PrintNum" label="打印数量" width="100" class-name="PrintNum">
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		props: {
			spInfo: ''
		},
		data() {
			return {
				splbs: [], // 商品信息
				loading: false,
			}
		},
		watch: {
			spInfo() { // 合作方改变的时候,改变树形数据
				// this.tree_data[0].children[0].label = this.sphzf; 
				this.upInfo();
			},
		},
		mounted: function() {
			var Data = JSON.parse(this.spInfo)
			console.log("Data",Data)
			if(Data.Pro) {
				this.splbs = Data.Pro;
				console.log("1")
			} else {
				console.log("2	")
				this.splbs = Data;
				for (let i = 0; i < this.splbs.length; i++) {
					this.splbs[i].ProCode = Data[i].Code;
					this.splbs[i].ProName = Data[i].Name;
					this.splbs[i].ProModel = Data[i].Model;
				}
			}
			for (let i = 0; i < this.splbs.length; i++) {
				this.splbs[i].PrintNum = this.splbs[i].Num
			}
			console.log(this.splbs)
		},
		methods: {
      upInfo () {
        var Data = JSON.parse(this.spInfo)
				if(Data.Pro) {
					this.splbs = Data.Pro;
				} else {
					this.splbs = Data;
					for (let i = 0; i < this.splbs.length; i++) {
						this.splbs[i].ProCode = Data[i].Code;
						this.splbs[i].ProName = Data[i].Name;
						this.splbs[i].ProModel = Data[i].Model;
					}
				}
				for (let i = 0; i < this.splbs.length; i++) {
					this.splbs[i].PrintNum = this.splbs[i].Num
				}
			},
			
			handleSelectionChange (val) {
				console.log(val)
			},
			print () {
				alert("暂时做不了")
			},
			redact (row, column, cell, event) {
				console.log(row, column, cell, event)
				if($(cell).html().indexOf("<input") != -1) {
					return false;
				}
				var jname = column.property;
				if(jname != 'Print') {
					//如果当前列不允许编辑.则跳出
					return false;
				}
				var that = this;
				var $inp = $("<input type='text' style='width: 90%; margin-left: 5%;' class='rowinp' />");
				var rows = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				//console.log(row);

				var $oldhtml = $($cell.html());
				var val = $oldhtml.html();
				$inp.val(val);
				$cell.html("").append($inp);
				$inp.focus();
			}
		}
	}
</script>

<style>

</style>