<template>
	<div class='supplier'>
		<div class="but-box">
			<ul>
				<li>
					
					<div class="boxtab">
						<div class="curbox xg" @click='gysbj=true'>
							<span>修改</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>

				<li>
					<div class="boxtab">
						<div class="curbox sc">
							<span>删除</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox sx">
							<span>刷新</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox plsz">
							<span>批量设置指引</span>
						</div>
					</div>

					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tj">
							<span>批量变更库区</span>
						</div>
						
					</div>
					<span class="gun"></span>
				</li>

				<li>
					<div class="boxtab">
						<div class="curbox xg">
							<span>批量修改</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox dy" @click='fjy_Click=true'>
							<span>自定义打印</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox dy" @click='fjy_Click=true'>
							<span>打印</span>
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
		<!--按钮行结束-->
		<div class='main_table'>
			<div class='left'>
				<p>  仓库</p>
				
				<!--树形图-->
				<div class='treeArea'>
					<div class='bluetitle'>
						<span>名称</span>
					</div>
					<div class='tree'>
						<el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
					</div>

				</div>

			</div>
			<div class='right'>
				
				
				<div class='searchArea'>
					<el-row>
						<el-col :span="4">
							<div class="grid-content bg-purple-dark">
								<span>配送中心 :</span>
							</div>
						</el-col>
						<el-col :span="5">
							<div class="grid-content bg-purple-dark">
								<!-- 配送中心列表 -->
								<el-select v-model="peisong" @change="pschange" placeholder="" class="fr blueborder">
									<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID">
									</el-option>
								</el-select>
								<!-- 配送中心列表结束 -->
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="4">
							<div class="grid-content bg-purple-dark">
								<span>查询值 :</span>
								<!--选择完合作方直接搜索下面树形图内容-->
							</div>
						</el-col>
						<el-col :span="5">
							<div class="grid-content bg-purple-dark">
							<el-input  placeholder=""  v-model="input2" >
						</el-input>
							</div>
						</el-col>
						<el-col :span="4" :offset='2'>
							<div class="grid-content bg-purple-dark">
								<el-button  @click='searchInfo'  >  查询</el-button>
								<!--选择完合作方直接搜索下面树形图内容-->
							</div>
						</el-col>
					</el-row>

				</div>
				<div class='heji'>
					<span><p>[仓位]</p>的内容，---------共计<p>0</p>条记录</span>
				</div>
				<el-table ref="multipleTable" :data="khlist" @cell-dblclick="dbrow" @header-click="headerc" v-loading.body="loading" element-loading-text="玩命加载中" border tooltip-effect="dark" style="width: 100% " height="700" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
						<el-table-column type="index" label="0" width="55">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Code" label="编号" width="auto">
						<el-table-column prop="Code" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Name" label="名称" width="160">
						<el-table-column prop="Name" label="" width="160" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Name" label="条形码" width="160">
						<el-table-column prop="Name" label="" width="160" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="MCode" label="仓管员" width="100">
						<el-table-column prop="MCode" label="" width="100" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Contact" label="最大体积" width="auto">
						<el-table-column prop="Contact" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="TelePhone" label="最大承重" width="auto">
						<el-table-column prop="TelePhone" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Mobile" label="已用体积" width="auto">
						<el-table-column prop="Mobile" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Bank" label="已用重量" width="auto">
						<el-table-column prop="Bank" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="BankNum" label="标准件数" width="auto">
						<el-table-column prop="BankNum" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="QQ" label="面积" width="auto">
						<el-table-column prop="QQ" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Email" label="是否设置指引" width="auto">
						<el-table-column prop="Email" type="selection"  label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Address" label="仓位类型" width="160">
						<el-table-column prop="Address" label="" width="160" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="ZipCode" label="仓位属性" width="auto">
						<el-table-column prop="ZipCode" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="meiyou-1" label="频次" width="auto">
						<el-table-column prop="meiyou-1" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="Remarks" label="货物类别" width="auto">
						<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="meiyou-2" label="备注" width="auto">
						<el-table-column prop="meiyou-2" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="SalesMan" label="冻结" width="auto">
						<el-table-column prop="SalesMan" type="selection" label="" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					<el-table-column prop="CusArea" label="禁用" width="auto">
						<el-table-column prop="CusArea" label="" type="selection" width="auto" class-name="mohucha">
						</el-table-column>
					</el-table-column>
					
					

				</el-table>

			</div>

		</div>

		<!--以下是弹窗部分-->

		<el-dialog title="提示" :visible.sync="gysAdd"   class='large' size="large" :before-close="handleClose">
			<gysAdd></gysAdd>
			<span slot="footer" class="dialog-footer">
   
  </span>
		</el-dialog>
		<el-dialog title="提示" :visible.sync="gysbj" class='large' size="large" :before-close="handleClose">
			<gysbj></gysbj>
			<span slot="footer" class="dialog-footer">
   
  </span>
		</el-dialog>
	</div>

</template>

<script>
	
//	
//	import gysAdd from './gysAdd.vue'
//	import gysbj from './gysbj.vue'
	export default {
	 components: {
//   	'gysbj':gysbj,
//    'gysAdd':gysAdd
    },
		
		
		
		data() {
			return {
				input2: '',
				khlist: [],
				tree: [],
				peisong: '',
				cities: [],
				pszx: '', // 配送中心
				hzf: '全部',
				options: [], // 合作方列表
				backUpArr: [], // 合作方列表备份
				defaultProps: {
					label: "Name",
					children: "children"
				},
				
				hzfIDList: [],
				gysAdd: false,
				gysbj: false,
			}
		},
		mounted: function() {
			var that = this;
			// 先获取一次配送列表
			that.getdclist();
			$('html').on('click', '.khdangan  .tc', function() {
				$('.khdangan').hide();

			});
			$('html').on('click', '.dzdc', function() {
				console.log(that.address);
			});
			$("#search").on("keydown", function(e) {
				if(e.key == "Enter") {
					that.handleIconClick();
				}
			})
		},
		methods: {
			// 表格双击 (可编辑表格)
			dbrow: function(row, column, cell, event) {
				var that = this;
				var $inp = $("<input type='text' class='rowinp'/>");
				var row = row;
				var $cell = $(cell);
				var index = $cell.parent().index(); //行坐标

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
						eval("that.khlist[index]." + jname + "=val");
					}
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
			//此段JS为了模糊匹配数据用的请给需要模糊查询的el-table-column 标签添加  class-name="mohucha"
			headerc: function(column, event) {
				var $dom = $("div", event.currentTarget); //当前点击的元素
				if(!$(event.currentTarget).hasClass("mohucha")) {
					return false;
				}
				var data = column.property; //需要匹配的标识
				var index = $dom.parent().index(); //列坐标,用来匹配用
				var $datath = $("th.mohucha", $(".right")); //匹配行Th
				var $table = $($(".right table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

				var that = this;
				var $inp = $("<input type='text' class='rowinp' />");
				var val = $dom.html(); //当前val
				if(val.indexOf("<input") != -1) {
					return false;
				}
				$inp.val(val); //赋值给文本框
				$dom.html("").append($inp); //将文本框放进去
				$inp.focus(); //让文本框获得焦点
				//当输入的时候开始进行匹配
				$inp.keyup(function() {
					var v = $inp.val();
					$("tr", $table).show(); //先全部展示出来
					$datath.each(function() {
						var $this = $(this);

						var thv = $("input", $this).val() || $("div.cell", $this).html(); //获取需要匹配th的值
						thv = thv.indexOf("<input") != -1 ? "" : thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined && thv != "") {
							that.mohucha(thv, idx, $table);
						}

					});

				});
			},
			// 获取配送中心列表
			getdclist() {
				var that = this;
				// console.log(that);
				that.baseAjax("getdclist", {
					UserID: window.userid
				}, function(data) {
					var obj = eval('(' + data + ')');

					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.cities = data;
					that.peisong = data[0].DCID;
				});
			},
			// 获取合作方列表
			gethzflist: function(psid) {
				var that = this;
				that.baseAjax("getlistindc", {
					UserID: window.userid,
					DCID: psid
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas);
					var data = datas.Data;
					that.options = data;
					that.backUpArr = data;
					that.hzfIDList = [];
					that.tree = [];
					for(let i = 0; i < data.length; i++) {
						that.hzfIDList.push(data[i].InterID);
					}
					console.log(that.hzfIDList)
					that.getTree(that.hzfIDList);
				});
			},
			// 配送与园区数据绑定
			pschange: function() {
				var that = this;
				that.gethzflist(that.peisong);
			},
			// 客户 树形结构图
			getTree(hzfID) {
				var that = this;
				console.log(hzfID)
				for(let i = 0; i < hzfID.length; i++) {
					that.baseAjax("itemgetlist", {
						UserID: window.userid,
						ParID: hzfID[i],
						Class: '客户'
					}, function(data) {
						var obj = eval('(' + data + ')');
						var datas = JSON.parse(obj.Datas);
						var data = datas.Data;
						data[0].children = [data[1]]
						that.tree.push(data[0]);
						// console.log(data[0])
					});
				}

			},
			// 点击得到客户信息
			handleNodeClick(data) {
				var that = this;
				console.log(data)
				that.loading = true;
				that.baseAjax("customergetlist", {
					UserID: window.userid,
					ParID: data.PartnerID,
					CheckStatus: '1',
					JY: '0'
				}, function(data) {
					var obj = eval('(' + data + ')');
					var datas = JSON.parse(obj.Datas)
					var data = datas.Data
					that.khlist = data;
					that.loading = false;
				});
			},
			// 让CodeID  也成为搜索内容
			getCode(val) {
				if(val) { //val存在 
					this.options = this.tree = this.backUpArr.filter((item) => {
						if(!!~item.Name.indexOf(val) || !!~item.Code.indexOf(val)) {
							return true
						}
					})
					if(val == "全部") {
						this.options = this.backUpArr;
						this.tree = this.backUpArr;
					}
				} else { //val为空时，还原数组
					this.hzf = "全部";
					this.options = this.backUpArr;
					this.tree = this.backUpArr;
				}
			},
			handleIconClick: function() {
				if(this.input2) {
					this.getCode(this.input2);
				} else {
					this.tree = this.backUpArr;
				}
			},

			handleSelectionChange() {},
			
//			搜索函数
			searchInfo(){},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			}
		}

	}
</script>

<style scoped>
	.supplier {
		color: #000000;
	}
	
	.tjsearch {
		width: 70%;
		margin-left: 5px;
		float: right;
	}
	
	.tj {
		float: right;
	}
	
	.main_table .left {
		float: left;
		width: 15%;
	}
	
	.main_table .right {
		float: right;
		width: 84%;
		overflow-x: auto;
	}
	
	.heji p {
		display: inline-block;
	}
	
	.main_table {
		margin: 10px;
	}
	
	.el-select {
		width: 100%;
	}
	
	.treeArea .el-tree {
		min-height: 510px;
		max-height: 510px;
		overflow: scroll;
	}
	
	.el-tree-node__expand-icon.is-leaf {
		border-color: transparent transparent transparent #36b4fd;
	}
	
	.right .el-table th {
		background: white;
	}
	
	.treeArea {
		padding: 5px;
	}
	
	.searchArea {
		padding: 5px;
	}
   
</style>