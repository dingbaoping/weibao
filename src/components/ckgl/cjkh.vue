<template>
	<div class='cjkh'>
		<div class='jbxx'>
			<h2>基本信息</h2>
			<el-row :gutter="10">
				<el-col :span="2">
					<div class="grid-content ">
						<p>编号</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-input v-model="input" placeholder="" class='input_width'></el-input>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">
						<p>名称（*）</p>
					</div>
				</el-col>
				<el-col :span="10">
					<div class="grid-content ">
						<el-input v-model="input" placeholder="" class='input_width'></el-input>
					</div>
				</el-col>
			</el-row>
			<el-row :gutter="10">
				<el-col :span="2">
					<div class="grid-content ">
						<p>助记码</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-input v-model="input" placeholder="" class='input_width'></el-input>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">
						<p>所属类别</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-select v-model="value" placeholder="请选择" class='input_width'>
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">
						<p>客户简称</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content " >
						<el-input v-model="input" placeholder="" class='input_width'></el-input>
					</div>
				</el-col>
			</el-row>
			<el-row :gutter="10">
				<el-col :span="2">
					<div class="grid-content ">
						<p>客户区域</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-select v-model="value" placeholder="请选择" class='input_width'>
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">
						<p>配送线路</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-select v-model="value" placeholder="请选择" class='input_width'>
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">
						<p>配送序号</p>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-select v-model="value" placeholder="请选择" class='input_width'>
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class='fzxx'>
			<div class="form_left">
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content "><p>联系人</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>固定电话</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>手机号码</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content ">qq：</div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content ">电子邮箱：</div>
					</el-col>
					<el-col :span="13">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content "><p>省：</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>市：</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>区：</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content "><p>街道</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>详细地址</p></div>
					</el-col>
					<el-col :span="13">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content "><p>邮编</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>地址</p></div>
					</el-col>
					<el-col :span="13">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content "><p>开户行</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>银行账号</p></div>
					</el-col>
					<el-col :span="13">
						<div class="grid-content ">
							<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3" class='input_width'>
							</el-input>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content "><p>配送距离</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content "><p>备注</p></div>
					</el-col>
					<el-col :span="21">
						<div class="grid-content ">
							<el-input v-model="input" placeholder="" class='input_width'></el-input>
						</div>
					</el-col>

				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content "><p>默认业务员</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3" class='input_width'>
							</el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>应付配送费参数</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3" class='input_width'>
							</el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>应收配送费参数</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" class='input_width' placeholder="请输入内容" v-model="textarea3">
							</el-input>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="10">
					<el-col :span="3">
						<div class="grid-content "><p>客户等级</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" class='input_width' placeholder="请输入内容" v-model="textarea3">
							</el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>应达天数</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" class='input_width' placeholder="请输入内容" v-model="textarea3">
							</el-input>
						</div>
					</el-col>
					<el-col :span="3">
						<div class="grid-content "><p>打单批结</p></div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" class='input_width' placeholder="请输入内容" v-model="textarea3">
							</el-input>
						</div>
					</el-col>
				</el-row>

			</div>
			<div class="form_right">
				<el-row>
					<el-col :span="24">
						<div class="grid-content ">
							<el-button type="primary">多收货地址维护</el-button>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<div class="grid-content "><p>应收配送费策略</p></div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<div class="grid-content ">
							<el-select v-model="value" class='input_width' placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<div class="grid-content "></div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<div class="grid-content ">
							<el-select v-model="value" class='input_width' placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<div class="grid-content">
							<el-select v-model="value" class='input_width' placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<div class="grid-content"><p>位置坐标</p></div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<div class="grid-content ">
							<el-input v-model="input" class='input_width' placeholder="请输入内容"></el-input><i class='map el-icon-view'></i> </div>
					</el-col>
				</el-row>

			</div>
		</div>
		<div class="qtxx">
			<el-row :gutter="20">
				<el-col :span="2">
					<div class="grid-content ">属性1</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-input v-model="input" class='input_width' placeholder=""></el-input>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">属性2</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-input v-model="input" class='input_width' placeholder=""></el-input>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content ">接口编号</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content ">
						<el-input v-model="input" class='input_width' placeholder=""></el-input>
					</div>
				</el-col>
			</el-row>

		</div>
		<div class='tc_footer'>
			<el-row :gutter="20">
				<el-col :span="1">
					<div class="grid-content ">建档人</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<el-input v-model="input" class='input_width' placeholder=""></el-input>
					</div>
				</el-col>
				<el-col :span="1">
					<div class="grid-content ">建档日期</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<el-input v-model="input"  class='input_width' placeholder=""></el-input>
					</div>
				</el-col>
				<el-col :span="1">
					<div class="grid-content ">审批人</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<el-input v-model="input" class='input_width' placeholder=""></el-input>
					</div>
				</el-col>
				<el-col :span="1">
					<div class="grid-content "><p>审批日期</p></div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<el-input v-model="input" class='input_width' placeholder=""></el-input>
					</div>
				</el-col>
				<el-col :span="1">
					<div class="grid-content "><p>审批状态</p></div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content ">
						<el-input v-model="input" class='input_width' placeholder=""></el-input>
					</div>
				</el-col>

			</el-row>

		</div>

	</div>

</template>

<script>
</script>

<style>

</style>