//初始化加载
$(function(){
	var xmdm = request("xmdm");
	var rzsj = request("rzsj");
	$('#rzsj').text(rzsj);
	loadXmrzxqByXmdmRzsj(xmdm,rzsj);
	loadXmjbxxByXmdm(xmdm);
});

/**
 * 加载项目日志详情
 */
function loadXmrzxqByXmdmRzsj(xmdm,rzsj){
	$.postJSON("/xmzhgl_xzb/app/xmzl/loadXmrzxqByXmdmRzsj", {
			"xmdm":xmdm,
			"rzsj":rzsj
	},function (data, textStatus) {
		if(data && data[0]=="Y"){
			$("#article_body").html(getStrNoNull(data[1][0]));
		}
	});
}

