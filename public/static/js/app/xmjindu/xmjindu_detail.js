var xmdm = decodeURI(request("xmdm"));

$(function(){
	loadXmjdDetail();
});

//加载项目进度详情
function loadXmjdDetail(){
	$.postJSON("/xmzhgl_xzb/app/xmjindu/loadXmjdDetail", {"xmdm":xmdm}, function(data) {
		if(data && data[0]=="Y"){
			var yjxx = data[1];
			$("#xmmc").html(getStrNoNull(yjxx[0]));
			$("#xmjd").html(getStrNoNull(yjxx[1]));
			$("#kgsj").html(getFormatDate(yjxx[2]));
			$("#wcsj").html(getFormatDate(yjxx[3]));
			$("#xmzt").html(getStrNoNull(yjxx[4]));
			$("#lxr").html(getStrNoNull(yjxx[5]));
			$("#pup_lxr").html(getStrNoNull(yjxx[5]));
			$("#qymc").html(getStrNoNull(yjxx[6]));
			$("#sshy").html(getStrNoNull(yjxx[7]));
			$("#lxdh").html(getStrNoNull(yjxx[8]));
		}else{
			alert(data[1]);
		}
	});
};