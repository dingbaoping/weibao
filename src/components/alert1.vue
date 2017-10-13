<template>
	<div class='alert1'>
		<div class='title'>
			<span>系统提示</span>
			<b class='ico1'><button class='close'></button></b>
		</div>
		<i class='ico2'>
		</i>
		<p>请输入物料</p>
		<div class='footer'> <button>确认</button></div>
	</div>




</template>

<script>



</script>

<style   rel="stylesheet/stylus" scoped>
	.alert1{width: 150px;
	height: 130px;
	position:relative;
	border:1px  solid #000

	}
	.title{
		height: 25px;
		background: #36B4FE;
		color:white;
		font-size: 16px;
		position:relative;

	}
	.title span{
		line-height: 25px;
		margin-left:10px
	}
	.ico1{
		height: 12px;
		width: 12px;
		position: absolute;
		top: 5px; left:130px;
		background: url(../../common/img/rk/x.png) no-repeat;
		background-size: 12px 12px;
	}
	.ico1 button{
		visibility: hidden;
		height: 12px;
		width: 12px;
	}
	.ico2{
		height: 48px;
		width: 48px;
		background: url(../../common/img/rk/惊叹号.png) ;
		position: absolute;
		top: 35px;left:10px;

	}
	.alert1 p{
		margin-left:68px;
		font-size: 14px;
		line-height: 80px;
		color:#36B4FE;

	}
	.footer{
		background: red;
		position:absolute;
		bottom: 10px;
		width: 100%;
	}
	.footer button{
		width: 80px;
		height: 24px;
		color:#fff;
		background:#36B4FE;
		border:none;
		position: absolute;
		left:50%;
		margin-left:-40px;
		top:-24px;
	}
</style>
