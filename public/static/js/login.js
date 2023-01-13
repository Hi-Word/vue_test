$(function(){
	refreshImage();
});
//刷新验证码
function refreshImage(){
	$("#yzmImg").attr("src","/xmzhgl_xzb/imageServlet?"+Math.random());
	$("#yzm").val("");
}

//回车事件
function loginKeyEvnet(event,obj){
	if(event.keyCode=="13"){
		if(obj.id=="username"){
			$("#password").focus();
		}else if(obj.id=="password"){
			$("#yzm").focus();
		}else if(obj.id=="yzm"){
			doLogin();
		}
	}
}

//登录
function doLogin(){
	var username=$("#username").val();//账号
	var password=$("#password").val();//密码
	var yzm=$("#yzm").val();//验证码
	if(null==username ||  ""==username){
		alert("用户名不能为空！");
		return false;
	}
	if(null ==password || ""==password ){
		alert("密码不能为空！");
		return false;
	}
	if( null==yzm ||""==yzm ){
		alert("验证码不能为空！");
		return false;
	}
	$.ajax({
		url:"/xmzhgl_xzb/login/doLogin",
		type:"POST",
		data:{"username":username,"password":password,"yzm":yzm},
		success:function(data, textStatus){
			if(data.status=="Y"){	
				window.location.href="/xmzhgl_xzb/show/index/"+data.page+"?tid="+Math.round(Math.random()*1000000);//正确登录后页面跳转	
			}else{
				alert(data.msg);
			}						
		}
	});
}

