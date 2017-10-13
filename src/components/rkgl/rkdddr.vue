<template>
	<div class='rkdddr'>
		<div class="but-box">
			<!--导航栏-->
			<ul>
				<li>
					<div class="boxtab">
						<div class="curbox sc">
							<span>移除</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox dc">
							<span>导出日志</span>
						</div>
					</div>
					<span class="gun"></span>
				</li>
				<li>
					<div class="boxtab">
						<div class="curbox xz">
							<span>下载模板</span>
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
		<div class='tabs'>
			<el-tabs type="border-card" v-model="activeName">
				<el-tab-pane label="选择excel文件" name='101' disabled>
					<div class='xzkuang'>
						<el-row>
							<el-col :span="2" :offset="2">
								<div class="grid-content ">
									<p class=''>导入类型:</p>
								</div>
							</el-col>
							<el-col :span="4" :offset="1">
								<div class="grid-content bg-purple-dark">
									<el-select v-model="drlx" placeholder="导入类型">
										<el-option v-for="item in drlxlist" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
										</el-option>
									</el-select>
								</div>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="2" :offset="2">
								<div class="grid-content  ">
									<p>合作方：</p>
								</div>
							</el-col>
							<el-col :span="19" :offset="1">
								<div class="grid-content bg-purple-dark">
									<el-select v-model="drlx" placeholder="合作方">
										<el-option v-for="item in drlxlist" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
										</el-option>
									</el-select>
								</div>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="2" :offset="2">
								<div class="grid-content ">
									<p class=''>供应商:</p>
								</div>
							</el-col>
							<el-col :span="4" :offset="1">
								<div class="grid-content bg-purple-dark">
									<el-select v-model="gys" placeholder="供应商">
										<el-option v-for="item in gyslist" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
										</el-option>
									</el-select>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="grid-content bg-purple-dark">
									<template>
										<el-checkbox v-model="checked">多个供应商</el-checkbox>
									</template>
								</div>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="2" :offset="2">
								<div class="grid-content ">
									<p class=''>配送中心:</p>
								</div>
							</el-col>
							<el-col :span="19" :offset="1">
								<div class="grid-content bg-purple-dark">
									<el-select v-model="peisong" placeholder="配送中心">
										<el-option v-for="item in pslist" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
										</el-option>
									</el-select>
								</div>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="2" :offset="2">
								<div class="grid-content ">
									<p class=''>园区:</p>
								</div>
							</el-col>
							<el-col :span="19" :offset="1">
								<div class="grid-content bg-purple-dark">
									<el-select v-model="yuanqu" placeholder="园区">
										<el-option v-for="item in yqlist" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
										</el-option>
									</el-select>
								</div>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="2" :offset="2">
								<div class="grid-content ">
									<p class=''>部门:</p>
								</div>
							</el-col>
							<el-col :span="19" :offset="1">
								<div class="grid-content bg-purple-dark">
									<el-select v-model="bumen" placeholder="部门">
										<el-option v-for="item in bmlist" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
										</el-option>
									</el-select>
								</div>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="2" :offset="2">
								<div class="grid-content ">
									<p class=''>Excel文件路径:</p>
								</div>
							</el-col>
							<el-col :span="19" :offset="1">
								<el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
									<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
								</el-upload>
							</el-col>
						</el-row>

					</div>

				</el-tab-pane>
				<el-tab-pane label="匹配对应关系" name='102' disabled>
					<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column prop="name" label="源文件列名" width="120">
							
						</el-table-column>
						<el-table-column prop="name" label="对应目标列" width="120">
						</el-table-column>
						
					</el-table>

				</el-tab-pane>
				<el-tab-pane label="验证上传数据" name='103' disabled>
					
					
					
					
				</el-tab-pane>
				<el-tab-pane label="查看导入日志" name='104' disabled>
				</el-tab-pane>

			</el-tabs>
			<div id="button">
				<el-button @click='onSyb' :disabled='first'>
					上一步
				</el-button>
				<el-button @click='onXyb' :disabled='second'>
					下一步
				</el-button>
				<el-button @click='searchInfo'>
					确认
				</el-button>
				<el-button @click='onXyb'>
					取消
				</el-button>
			</div>

		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				checked: true,
				formStacked: {
					name: '',
					region: '',
					type: ''
				},

				pszx: false, //配送中心禁选
				peisong: '',
				yuanqu: '',
				yqlist: [{
					a: "",
					b: ""
				}],
				cities: [],
				ksrq: '', //开始日期
				jsrq: '', //结束日期
				activeName: '101',
				djbh: '',
				zdrq: '',
				rq1: '',
				rq2: '',
				hzf: '',
				shbz: '',
				tabledata3: [],
				formInline: [],
				//				radio: '1',
			};
		},
		mounted: function() {
			var that = this;
			//订单日期的默认值
			var myDate = new Date();
			var y = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
			var m = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			var d = myDate.getDate(); //获取当前日(1-31)
			var today = y + "-" + m + "-" + d;
			that.ksrq = today;
			that.jsrq = today;
			// 先获取一次配送列表
			that.getdclist();
			$('.close').click(function() {
				$('.ddsp').hide();

			});
			$(".ddsp .cx").click(function() {

				var form1_data = [];
				form1_data.push(that.peisong);
				form1_data.push(that.yuanqu);
				form1_data.push(that.djbh);
				form1_data.push(that.hzf);
				form1_data.push(that.zdrq);
				form1_data.push(that.rq1);
				form1_data.push(that.rq2);
				console.log(form1_data);
			});
		},

		methods: {
			onSubmit() {
				console.log('submit!');
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
				var $datath = $("th.mohucha", $(".table")); //匹配行Th
				var $table = $($(".table table")[1]); //表格(表格控件会生成两表格,所以此处要筛选数据的表格是第二个)

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
			//			下一步的函数 阻止下一步的事件根据每个页面另写
			onXyb() {
				var that = this;
				//				console.log(typeof that.activeName);
				//				alert(Number(that.activeName));
				var bsNumber = Number(that.activeName);

				//				console.log(bsNumber);
				if(bsNumber < 104) {
					bsNumber += 1;
					if(bsNumber == 104) {
						that.second = true;
						that.first = false;
					} else {
						that.second = false;
						that.first = false;
					}

				} else if(bsNumber == 104) {
					bsNumber = 104;
					that.second = true;
				} else {
					that.second = true;
				}
				that.activeName = bsNumber.toString();

			},
			//			上一步的函数 阻止下一步的事件根据每个页面另写
			onSyb() {
				var that = this;
				//				console.log(typeof that.activeName);
				//				alert(Number(that.activeName));
				var bsNumber = Number(that.activeName);

				//				console.log(bsNumber);
				if(bsNumber > 101) {
					bsNumber -= 1;

					if(bsNumber == 101) {
						that.second = false;
						that.first = true;
					} else {
						that.second = false;
						that.first = false;
					}
				} else {
					that.second = false;
					bsNumber = 101;
					console.log("控制数字是" + bsNumber)
				}
				that.activeName = bsNumber.toString();

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
					that.cities = data;
					that.peisong = data[0].DCID;
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
				that.pszx = true; // 配送输入框禁用
				//				console.log(that.peisong);
				that.getyuanqulist(that.peisong);
			},
			//此方法是退出的函数
			closetag: function() {
				$(".is-active .el-icon-close").click();
			}
		}
	}
</script>

<style>

</style>