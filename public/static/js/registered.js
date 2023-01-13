/*注册账号页面*/
function submitZcxx(){
	var valList = $("form").serializeArray();
	var mapData = {};
	for(var i=0;i<valList.length;i++){
		mapData[valList[i].name] = valList[i].value;
	}
	var jsonStr = JSON.stringify(mapData);
	$.postJSON("/xmzhgl_xzb/login/doRegistered", {"zcxx":jsonStr}, function(data) {
		if(data){
			if(data[0]=="Y"){
				alert("注册信息已经成功提交，请等待管理员审核！");
				window.location.href = "/xmzhgl_xzb/login.html";
			}else{
				alert(data[1]);
			}
		}
	});
}
