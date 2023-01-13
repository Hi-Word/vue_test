
$(function(){
	js();
})	

function js(){
	//头部菜单效果
	openChildren();
	setMkClass();//设置模块选中
	$('.project-approval-left ul,.project-approval-right .ov').perfectScrollbar();
	$(".project-approval").slide({trigger:"click"});
}
