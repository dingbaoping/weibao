<template>
	<div class='feixiangkuang'>
		<el-checkbox-group v-model="checkList">
		<div class="sfx">
			<span class="yingshou">应收</span>
			<span class='yingfu'>应付</span>
			<div class='ys'>
				<div class="title">
					<span>系统</span>
					<span>生成</span>
				</div>	
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>应收卸货费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Receive1" class='input_width' placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="1"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="2"></el-checkbox>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>应收配送搬运费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Receive2" class='input_width' placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
						  <el-checkbox label="3"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="4"></el-checkbox>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>应收配送司机费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Receive3" class='input_width' placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
	            <el-checkbox label="5"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="6"></el-checkbox>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>入库费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Receive4" class='input_width' placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="7"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="8"></el-checkbox>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>打包费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Receive5" class='input_width' placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="9"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="10"></el-checkbox>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>装修费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Receive6" class='input_width' placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="11"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="12"></el-checkbox>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>分拣费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Receive7" class='input_width'placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="13"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="14"></el-checkbox>
						</div>
					</el-col>
				</el-row>
				

			</div>
			<div class="yf">
				<div class="title">
					<span>系统</span>
					<span>生成</span>
					<span>职员</span>
				</div>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>应收装载费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Pay1" class='input_width'paceholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="19"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="20"></el-checkbox>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>应收配送搬运费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Pay2" class='input_width'  placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="21"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="22"></el-checkbox>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>应收卸货费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Pay3" class='input_width'  placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="23"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="24"></el-checkbox>
						</div>
					</el-col>

				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>职员提成计费</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Pay4" class='input_width'  placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="25"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="26"></el-checkbox>
						</div>
					</el-col>
          <el-col :span="2">
						<div class="grid-content ">
							<div class="el-icon-search" @click="clerkTCbilling = true;"></div>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>：</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Pay5" class='input_width'  placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="27"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="28"></el-checkbox>
						</div>
					</el-col>

				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content ">
							<p>：</p>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content ">
							<el-input v-model="fxInfo.Pay6" class='input_width'  placeholder="请输入内容"></el-input>
						</div>
					</el-col>
					<el-col :span="2" :offset="1">
						<div class="grid-content ">
							<el-checkbox label="29"></el-checkbox>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content ">
							<el-checkbox label="30"></el-checkbox>
						</div>
					</el-col>

				</el-row>
				<div class="heji">
					<span>应付合计:</span>
					<span style="color:red" id='jishu'>{{ total }}</span>
				</div>
			</div>
		</div>
		<div class="cl">
			<div class="left">
				<h2>
					计费项以及策略：
				</h2>

			</div>
			<div class="right">
				<el-table ref="multipleTable" :data="checkList" border tooltip-effect="dark" style="width: 100%; max-height: 280px" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column prop="FeeModuleCode" label="费项编号" width="auto">
					</el-table-column>
					<el-table-column prop="FeeModuleName" label="费项名称" width="auto">
					</el-table-column>
					<el-table-column prop="FeeModuleType" label="费用类型" width="auto">
					</el-table-column>
					<el-table-column prop="TacticsCode" label="策略编号" width="auto">
					</el-table-column>
					<el-table-column prop="TacticsName" label="策略编号" width="auto">
					</el-table-column>
					<el-table-column prop="Target" label="结算对象" width="auto">
					</el-table-column>
					<el-table-column prop="" label="选择" width="50">
						<template scope="scope">
						 <span class='blue_button'>选'' </span>
            </template>
					</el-table-column>
				</el-table>

			</div>

		</div>
	</el-checkbox-group>
	<el-dialog id='cgytc' title="选择人员" :visible.sync="clerkTCbilling">  
			<div class='table'>
				<div class="but-box">
					<ul>
						<li>
							<div class="boxtab">
								<div class="curbox bc"  @click='confirmCheck'><span>确定</span></div>
							</div>
						</li>
						<li>
							<div class="boxtab"  @click="clerkTCbilling = false">
								<div class="curbox bcsh"><span>退出</span></div>
							</div><span class="gun"></span>
						</li>
					</ul>
				</div>
				<div class="table-2">
					<div class="left-table">
             <el-table :data="clerklb" border highlight-current-row @header-click="headercgy" @cell-dblclick="dbCheckcgy" @cell-click="djCheckcgy" style="width:100%" class='spbg' height="360" >
               <el-table-column type="index" width="40">
								 <el-table-column type='index' label="0" width="30" >
								 </el-table-column>
							 </el-table-column>
							 <el-table-column prop="Name" label="姓名" width="120">
								 <el-table-column prop='Name' label="" width="120" class-name="mohucha">
								 </el-table-column>
							 </el-table-column>
						 </el-table>
					</div>
					<div class="table-btn">
						 <div class="xuanze">
							  比例分配：
							  <el-select v-model="prorate" placeholder="" class="input_width  blueborder">
									<el-option v-for="item in prorates" :key="item.value" :label="item.label" :value="item.value">
										<span style="float: left">{{ item.label }}</span>
									</el-option>
								</el-select>
						</div>
             <div class="top-right" @click="checkConfirm('right')">
							 >>>
						 </div>
             <div class="bottom-left" @click="checkConfirm('left')">
							 <<<
						 </div>
					</div>
					<div class="right-table">
             <el-table :data="checkclerklb" @header-click="headerCheck" @cell-dblclick="dbCheckCheck"  @cell-click="djCheckcgy" border style="width:100%" class='spbg' height="360">
               <el-table-column type="index" width="40">
								 <el-table-column type='index' label="0" width="30" >
								 </el-table-column>
							 </el-table-column>
							 <el-table-column prop="Name" label="姓名" width="100">
								 <el-table-column prop='Name' label="" width="100" class-name="mohucha">
								 </el-table-column>
							 </el-table-column>
							 <el-table-column prop="Percentage" label="百分比(%)" width="120">
								 <el-table-column prop='Percentage' label="" width="120" class-name="mohucha Percentage">
								 </el-table-column>
							 </el-table-column>
						 </el-table>
					</div>
				</div>
			</div>	
		</el-dialog>
		<el-dialog title="提示" id="isDelect" class="sfsc" :visible.sync="scsb_Click" size="tiny">
		<span class="dialog-footer">
		<p style="color: red;">{{ infoHint }} </p>
			<el-button type="primary" style="margin-right: 0;"  @click="scsb_Click=false" >确 定</el-button>
		</span>
	</el-dialog>
	<el-button type="primary" class="check" @click="sendInfo">确 定</el-button>
	</div>
</template>

<script>
export default {
	props: {
		saveInfo: '',
	},
	data() {
		return {
			clerkTCbilling: false, // 职员提成计费弹窗
			scsb_Click: false,
			infoHint: '',  // 提示信息
			clerklb: [], // 职员提成计费左边表格
			checkclerklb: [], // 职员提成计费右边表格
			prorate: '0', // 比例分配
			prorates: [{
        label: '平均分配',
				value: '0'
			},{
				label: '自定义',
				value: '1'
			}], // 比例分配列表
			checkList: [{
        FeeModuleCode: '',
				FeeModuleID: '',
				FeeModuleName: '',
				FeeModuleType: '',
				TacticsCode: '',
				TacticsID: '',
				TacticsName: '',
				Target: ''
			}],
			input: '',
			fxInfo: {
				Pay1: 0,
				Pay2: 0,
				Pay3: 0,
				Pay4: 0,
				Pay5: 0,
				Pay6: 0,
				Pay7: 0,
				Pay8: 0,
				Pay9: 0,
				Pay10: 0,
				Receive1: 0,
				Receive2: 0,
				Receive3: 0,
				Receive4: 0,
				Receive5: 0,
				Receive6: 0,
				Receive7: 0,
				Receive8: 0,
				Receive9: 0,
				Receive10: 0
			},
			total: '', // 合计
			fxData: {}, // Info
			clerkList: [], // 职员分配比例
			rowIndex: '0', // 默认第一个
		}
	},
	mounted: function() {
		console.log(this.saveInfo)
		 this.fxData = JSON.parse(this.saveInfo)
		 console.log(this.fxData)
		 this.getclerkInfo(this.fxData.peisong)
	},
	methods: {
		handleSelectionChange () {

		},
		// 确定选择按钮
		confirmCheck() {
			var that = this;
			var count = 0
			for(let i = 0; i < that.checkclerklb.length; i++) {
			  count += that.checkclerklb[i].Percentage
			}
			if (count != 100) {
        that.scsb_Click = true;
				that.infoHint = "合计百分比值不等于100"
			} else {
			  that.clerkTCbilling = false;
			}
		},
    
		sendInfo () {
			for(var arr in this.fxInfo) {
				console.log(parseFloat(this.fxInfo[arr]));
			}
		  // 费项
			this.$emit("sendfxData", this.fxInfo, )
			// 策略
			this.$emit("sendclData", this.checkList)
			// 职员分配比例
			this.$emit("sendzyfpData", this.checkclerklb)
		},
		djCheckcgy (row, column, cell, event) {
        var that = this;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
        that.rowIndex = index;
				console.log("行坐标",index)
				console.log("数据",row)
		},
		// 点击左右按钮， 根据传值判断是往左或者右穿梭
		checkConfirm (flag) {
			// 往右表格穿梭数据
			if (flag === 'right') {
				if(this.clerklb.length === 0) {
					return;
				} else {

					this.checkclerklb.push(this.clerklb[this.rowIndex]);
					this.clerklb.splice(this.rowIndex, 1);
					this.clerkProrate();
					this.rowIndex = '0';
				}
			} else { // 往左
				if(this.checkclerklb.length === 0) {
					return;
				} else {
					this.clerklb.push(this.checkclerklb[this.rowIndex]);
					this.checkclerklb.splice(this.rowIndex, 1);
					this.clerkProrate();
					this.rowIndex = '0';
				}
			}
		},
		clerkProrate() {
			var that = this;
			if (that.prorate == "0") {
				for(let i = 0; i < that.checkclerklb.length; i++) {
					that.checkclerklb[i].Percentage = parseInt( 100 / that.checkclerklb.length);
				}
			} else {
        that.clerkTCbilling = false;
			}
		},
		getclerkInfo (data) {
			var that = this;
			// 仓管员
			var cgparams = {
				JobType: '仓管员',
				ParID: 0,
				DCID: data
			}
			$.ajax({
				url: 'http://116.62.171.144/post/index.php',
				type: 'POST', //GET
				async: true, //或false,是否异步
				data: {
						datas: cgparams,
						method: "CPHH.PC.BaseInfo.Staff.GetListByJobType"
				},
				timeout: 5000, //超时时间
				success: function(data, textStatus, jqXHR) {
					var obj = eval('(' + data + ')');
					console.log(obj)
					var result = JSON.parse(obj.Datas)
					console.log('职员', result);
					that.clerklb = result.Data;
					console.log(that.clerklb)
				}
			})
		},
		
















			// 仓管员左边表格双击
			dbCheckcgy: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				that.checkclerklb.push(that.clerklb[index]);
				that.clerklb.splice(index, 1);
				that.clerkProrate();
				if (index >= 0) {
					return false
				}
				var jname = column.property;
				var $oldhtml = $($cell.html());
				var val = $oldhtml.html();
				$inp.val(val);
				$cell.html("").append($inp);
				$inp.focus();

				$inp.blur(function() {
					val = $inp.val();
					$oldhtml.html(val);
					$cell.html("").append($oldhtml);
					if(index != 0) {
						eval("that.cherklb[index]." + jname + "=val");
					}
				});
			},
			// 仓管员左边表格
			headercgy: function(column, event) {
			
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".left-table")); //匹配行Th
				var $table = $($(".left-table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)
				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				// console.log("val", index)
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					console.log("v", v)
					$("tr",$table).show();//先全部展示出来
					console.log('$datath', $datath);
					$datath.each(function() {
						var $this = $(this);
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							console.log('thv,idx, $table');
							console.log(thv,idx, $table);
							that.mohucha(thv, idx, $table);
						}
					});
				});
				$inp.blur(function() {
					val = $inp.val(); //离开时在获一次值
					$dom.html(val);
				});
			},
			// 仓管员右边表格双击
			dbCheckCheck: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标
				var jname = column.property;
        if ( jname != 'Percentage') {
					that.clerklb.push(that.checkclerklb[index]);
				  that.checkclerklb.splice(index, 1);
					that.clerkProrate();
					return;
				}
				var $oldhtml = $($cell.html());
				var val = $oldhtml.html();
				$inp.val(val);
				$cell.html("").append($inp);
				$inp.focus();

				$inp.blur(function() {
					val = $inp.val();
					$oldhtml.html(val);
					$cell.html("").append($oldhtml);
					if(index != 0) {
						eval("that.checkcherklb[index]." + jname + "=val");
					}
				});
			},
			// 仓管员右边表格
			headerCheck: function(column, event) {
			
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".right-table")); //匹配行Th
				var $table = $($(".right-table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)
				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				// console.log("val", index)
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					console.log("v", v)
					$("tr",$table).show();//先全部展示出来
					console.log('$datath', $datath);
					$datath.each(function() {
						var $this = $(this);
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							console.log('thv,idx, $table');
							console.log(thv,idx, $table);
							that.mohucha(thv, idx, $table);
						}
					});
				});
				$inp.blur(function() {
					val = $inp.val(); //离开时在获一次值
					$dom.html(val);
				});
			},
			mohucha: function(val, index, $table) {
				var v = val;
				var $trArr = $("tr", $table);
				var trlen = $trArr.length;
				for(var i = 0; i < trlen; i++) {
					var $tr = $($trArr[i]);
					var iv = $($("td .cell", $tr)[index]).html().indexOf(v); //匹配是否含有
					if(iv <= -1) {
						$tr.hide();
					} 
				}
			},
	}
}
</script>

<style scoped>
.feixiangkuang {
	width: 900px;
	height: 750px;
	position: relative;
}
.blue_button {
	width: 40px;
	line-height: 30px;
}
.check {
	position: absolute;
	bottom: -46px;
	right: 90px;
}
.ys {
	float: left;
	width: 409px;
	height: 355px;
	border-right: 1px solid #36B4FD;
	border-bottom: 1px solid #36B4FD;
	padding: 55px 20px 20px 20px;
}
.el-icon-search {
  width: 20px;
	height: 16px;
	padding-left: 4px;
	cursor: pointer; 
	background: #bae1f8;
}
.yf {
	float: right;
	width: 410px;
	height: 355px;
	border-bottom: 1px solid #36B4FD;
	padding: 55px 20px 20px 20px;
}

.cl {
	float: left;
	height: 163px;
	width: 895px;
	margin-top: 10px;
	margin-left: 2px;
}

.yingshou {
	color: #000;
	font-size: 18px;
	font-weight: bold;
	position: absolute;
	top: 15px;
	left: 10px;
}

.yingfu {
	color: #000;
	font-size: 18px;
	font-weight: bold;
	position: absolute;
	top: 15px;
	left: 460px;
}
.title {
  padding-left: 270px;
}
.title span {
	padding-left: 7px;
}
.heji {
	padding-top: 50px; 
	float: right;
}
.heji span {
	margin-right: 20px;
}
.el-row {
	margin-top: 8px;
}
.cl .left h2 {
	font-size: 16px;
	color: #000;
	font-weight: bold;
}
.feixiangkuang .el-dialog--small {
    width: 70%;
}
.xuanze {
	padding-top: 20px;
	text-align: center;
}

.table-2 {
	width: 100%;
	height: 360px;
}	
.left-table {
	float: left;
	width: 40%;
	height: 100%;
	background: gray;
}
.right-table {
	float: right;
	width: 40%;
	height: 100%;
	background: gray;
}
.table-btn {
	position: relative;
	float: left;
	width: 20%;
	height: 100%;
  background: #fcfcfc;
}
.table-btn .top-right {
	position: absolute;
	top: 150px;
	left: 40px;
	width: 50px;
	height: 30px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 14px;
	text-align: center;
	line-height: 30px;
	color: white;
	box-shadow: 3px 3px #000;
	background: #36b4fe;
}
.table-btn .bottom-left {
	position: absolute;
	bottom: 100px;
	left: 40px;
	width: 50px;
	height: 30px;
	border-radius: 5px;
	cursor: pointer;
	color: white;
	font-size: 14px;
	text-align: center;
	line-height: 30px;
	box-shadow: 3px 3px #000;
	background: #36b4fe;
}
.top-right:hover , .bottom-left:hover {
	background: white;
	color: #36b4fe;
	box-shadow: 3px 3px #36b4fe;
}
.v-modal {
	z-index: 2000 !important;
}
</style>