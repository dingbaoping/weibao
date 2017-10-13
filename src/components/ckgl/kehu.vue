<template>
	<div class='khdangan'>
		<!-- 客户档案 -->
		<div class="but-box">
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox tianjia">
							<span>添加</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox bj">
							<span>编辑</span>
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
						<div class="curbox shuaxin">
							<span>刷新</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dc">
							<span>导出</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox dzdc">
							<span>地址导出</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox tj">
							<span>条件</span>
						</div>
						<el-input class='tjsearch' placeholder="" icon="search" v-model="input2" :on-icon-click="handleIconClick">
						</el-input>
					</div>
					<span class="gun"></span>
				</li>

				<li>
					<div class="boxtab">
						<div class="curbox jy">
							<span>禁用</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox fjy">
							<span>反禁用</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox plxg">
							<span>批量修改</span>
						</div>
					</div>
					<div class="boxtab">
						<div class="curbox sp">
							<span>审批</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox ctys">
							<span>窗体样式
								<el-dropdown trigger="click">
									<span class="el-dropdown-link">
										<i class="el-icon-caret-bottom el-icon--right"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item>1</el-dropdown-item>
										<el-dropdown-item>2</el-dropdown-item>
										<el-dropdown-item>3</el-dropdown-item>
										<el-dropdown-item>4</el-dropdown-item>
										<el-dropdown-item>5</el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown>
							</span>
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
		<!--按钮行-->
		<div class="main_table">
			<div class="left">
				<!--版头查询区域-->
				<div class='searchArea'>
					<el-row>
						<el-col :span="8">
							<div class="grid-content bg-purple-dark">
								<span>配送中心 :</span>
							</div>
						</el-col>
						<el-col :span="16">
							<div class="grid-content bg-purple-dark">
							<!-- 配送中心列表 -->
							<el-select v-model="peisong" @change="pschange" placeholder="" class="fr blueborder">
							<el-option v-for="item in cities" :key="item.DCID" :label="item.DCName" :value="item.DCID" >
							</el-option>
						</el-select>
							<!-- 配送中心列表结束 -->
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="8">
							<div class="grid-content bg-purple-dark">
								<span>合作方 :</span>

							</div>
						</el-col>
						<el-col :span="16">
							<div class="grid-content bg-purple-dark">
								<!-- 合作方列表 -->
						<el-select v-model="hzf" default-first-option no-data-text="无数据" filterable :filter-method="getCode" class='hzf  input_width'>
							<el-option v-for="item in options" :key="item.Code" :label="item.Name" :value="item.Code">
								<span style="float: left">{{ item.Code }}</span>
								<span style="float: left; padding-left: 15px;">{{ item.Name }}</span>
							</el-option>
						</el-select>
						<!-- 合作方列表结束 -->
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24">
							<div class="grid-content bg-purple-dark">
								<el-input placeholder="" id="search" icon="search" v-model="input2" :on-icon-click="handleIconClick" class='leftsearch'>
								</el-input>

							</div>
						</el-col>
					</el-row>
				</div>
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
			<div class="right">
				
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
		<el-table-column prop="MCode" label="助记码" width="100">
			<el-table-column prop="MCode" label="" width="100" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="Contact" label="联系人" width="auto">
			<el-table-column prop="Contact" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="TelePhone" label="电话号码" width="auto">
			<el-table-column prop="TelePhone" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="Mobile" label="手机号码" width="auto">
			<el-table-column prop="Mobile" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="Bank" label="银行" width="auto">
			<el-table-column prop="Bank" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="BankNum" label="银行账号" width="auto">
			<el-table-column prop="BankNum" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="QQ" label="QQ" width="auto">
			<el-table-column prop="QQ" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="Email" label="Email" width="auto">
			<el-table-column prop="Email" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="Address" label="地址" width="160">
			<el-table-column prop="Address" label="" width="160" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="ZipCode" label="邮编" width="auto">
			<el-table-column prop="ZipCode" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-1" label="配送距离" width="auto">
			<el-table-column prop="meiyou-1" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="Remarks" label="备注" width="auto">
			<el-table-column prop="Remarks" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-2" label="期初应收" width="auto">
			<el-table-column prop="meiyou-2" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="SalesMan" label="业务员" width="auto">
			<el-table-column prop="SalesMan" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="CusArea" label="客户区域" width="auto">
			<el-table-column prop="CusArea" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-3" label="配送路线" width="auto">
			<el-table-column prop="meiyou-3" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-4" label="配送序号" width="auto">
			<el-table-column prop="meiyou-4" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-5" label="属性1" width="auto">
			<el-table-column prop="meiyou-5" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-6" label="属性2" width="auto">
			<el-table-column prop="meiyou-6" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-7" label="打单批结" width="auto">
			<el-table-column prop="meiyou-7" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="InterfaceID" label="接口编号" width="auto">
			<el-table-column prop="InterfaceID" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-8" label="位置坐标" width="auto">
			<el-table-column prop="meiyou-8" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="Province" label="省" width="auto">
			<el-table-column prop="Province" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="City" label="市" width="auto">
			<el-table-column prop="City" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="Area" label="区" width="auto">
			<el-table-column prop="Area" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="Street" label="街道" width="auto">
			<el-table-column prop="Street" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="Detail" label="详细地址" width="auto">
			<el-table-column prop="Detail" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-9" label="商品效期要求" width="auto">
			<el-table-column prop="meiyou-9" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-10" label="审核状态" width="auto">
			<el-table-column prop="meiyou-10" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>
		<el-table-column prop="meiyou-11" label="效期格式" width="auto">
			<el-table-column prop="meiyou-11" label="" width="auto" class-name="mohucha">
			</el-table-column>
		</el-table-column>

	</el-table>


			</div>

		</div>

	</div>
</template>

<script>
export default {
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
			loading: false,
			hzfIDList: []
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
					$("tr",$table).show();//先全部展示出来
					$datath.each(function() {
						var $this = $(this);
						 
						var thv = $("input", $this).val()|| $("div.cell", $this).html(); //获取需要匹配th的值
						    thv= thv.indexOf("<input")!=-1?"":thv;
						var idx = $this.index();
						console.log(thv);
						if(thv != undefined&&thv!="") {
							that.mohucha(thv, idx, $table);
						}

					});

				});
			},
			// 获取配送中心列表
			getdclist () {
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
		getTree (hzfID) {
			var that = this;
			console.log(hzfID)
			for (let i = 0; i < hzfID.length; i++) {
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
			if (val) { //val存在 
				this.options = this.tree = this.backUpArr.filter((item) => {
					if (!!~item.Name.indexOf(val) || !!~item.Code.indexOf(val)) {
						return true
					} 
				})
				if (val == "全部") {
					this.options = this.backUpArr;
					this.tree = this.backUpArr;
				}
			} else { //val为空时，还原数组
		   	this.hzf = "全部";
				this.options = this.backUpArr;
				this.tree = this.backUpArr;
			}
		},
		handleIconClick: function () {
			if (this.input2) {
        this.getCode(this.input2);
			} else {
        this.tree = this.backUpArr;
			}
		},
		
		handleSelectionChange () {},
		//此方法是退出的函数
		closetag:function(){
			$(".is-active .el-icon-close").click();
		}		
	}

}
</script>

<style>
@import url("../../../common/css/khdangan/khdangan.css");
.khdangan .el-select {
	width: 100%;
}
.khdangan .treeArea .el-tree {
	min-height: 510px;
	max-height: 510px;
	overflow: scroll;
}
.khdangan .el-tree-node__expand-icon.is-leaf {
	border-color: transparent transparent transparent #36b4fd;
}
.khdangan .right .el-table th {
	background: white;
}
.khdangan .treeArea {
	padding: 5px;
}
.khdangan .searchArea {
	padding: 5px;
}
</style>