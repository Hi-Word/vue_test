$(function(){
	
});

//登录
function doLogin(){
	var username =$("#username").val();
	$.postJSON("/xmzhgl_xzb/app/login/doLogin", {"username":username}, function(data) {
		if(data[0]=="Y"){
			window.location.href="/xmzhgl_xzb/show/app/appMain/appMain.html?tid="+Math.round(Math.random()*1000000);//正确登录后页面跳转	
		}else{
			alert(data.msg);
		}
	});

}

