<template>

	<!--头部设置完毕-->
	<div class='all_table'>
		<div class='title_table'>
			<span>单据头设置</span>
		</div>
		<el-table :data="tableData" border style="width: 522;">
			<el-table-column prop="date" label="" width="30px" height='25px'>
			</el-table-column>
			<el-table-column prop="date" label="序号" width="60px" height='25px'>
			</el-table-column>
			<el-table-column prop="name" label="默认标题" width="auto" height='25px'>
			</el-table-column>
			<el-table-column prop="address" label="显示" width="auto" height='25px'>
			</el-table-column>
			<el-table-column prop="address" label="宽度" width="auto" height='25px'>
			</el-table-column>
			<el-table-column prop="address" label="只读" width="auto" height='25px'>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
$(function() {
	$('.ico1').click(function() {
		//			alert('close');
		$('.djtsz').hide();


	});
	$('.cancel').click(function() {
		$('.djtsz').hide();
	})

	$('.djtsz .ok').click(
		function() {
			var Djt = [];
			$("input option:selection").each(function() {
				Djt.push($(this).val());
			});
			$("textarea").each(function() {
				Dizhi.push($(this).val());
			});

			//			$(".dialog_ok").trigger("click")
			return console.log(Djt);
		}
	)






}

)



</script>

<style scoped>
.djtsz {
	width: 545px;
	height: 340px;
	border: #36B4FE solid 1px;
	position: relative;
}

.title {
	height: 40px;
	background: #36B4FE;
	color: white;
	font-size: 16px;
	position: relative;
}

.title span {
	line-height: 40px;
	margin-left: 10px
}

.all_table {
	width: 524px;
	height: 243px;
	margin: 10px auto;
	color: #000;
	text-align: center;
}

.all_table span {}

.el-table {
	height: 215px;
	width: 523px;
	margin: auto;
	border: #36B4FE solid 1px;
	border-collapse: collapse;
}

.djtsz .el-table__header-wrapper {
	height: 25px!important;
}

.djtsz .el-table th>.cell {
	height: 25px;
	background: #CDECFE;
	padding: 0;
	text-align: center;
}

.el-table th {
	height: 25px;
	background: #CDECFE;
	font-size: 12px;
	border: #36B4FE solid 1px;
}

.el-table td {
	border: #36B4FE solid 1px;
	height: 25px;
}

.ico1 {
	height: 12px;
	width: 12px;
	position: absolute;
	top: 15px;
	left: 522px;
	background: url(../../common/img/rk/x.png) no-repeat;
	background-size: 12px 12px;
}

.ico1 button {
	visibility: hidden;
	height: 12px;
	width: 12px;
}

.footer {
	/*background: red;*/
	position: absolute;
	/*background: red;*/
	bottom: 12px;
	width: 100%;
	height: 25px;
}

.footer button {
	width: 80px;
	height: 24px;
	color: #fff;

	border: none;
}

.footer .cancel {
	position: absolute;
	left: 354px;
	background: #fff;
	color: #36B4FE;
	border: #36B4FE solid 1px;
}

.footer .ok {
	position: absolute;
	left: 454px;
	background: #36B4FE;
	color: #fff;
	border: #36B4FE solid 1px;
}

.title_table {
	height: 25px;
	background: url(../../common/img/rk/yeqianxuanfu.png);
}
</style>