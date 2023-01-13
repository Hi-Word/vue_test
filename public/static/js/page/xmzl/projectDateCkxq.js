$(function(){
	var xmdm = request("xmdm");
	var rzsj = request("rzsj");
	var xmbz = request("xmbz");
	isFrom(xmbz);
	$('#xmdm').html('<a href="/xmzhgl_xzb/show/xmzl/projectDetails?xmdm='+xmdm+'&xmbz='+xmbz+'&tid='+Math.round(Math.random()*1000000)+'">项目详情</a>')
	loadXmrzxqByXmdmRzsj(xmdm,rzsj);
});

/**
 * 判断来自何处，动态显示面包屑
 */
function isFrom (xmbz) {
	switch(xmbz){
		case 'zl':
			$('#laiyuan').html('<a href="/xmzhgl_xzb/show/xmzl/projectOverview?tid='+Math.round(Math.random()*1000000)+'">项目总览</a>');
			break;
		case 'zd':
			$('#laiyuan').html('<a href="/xmzhgl_xzb/show/xmzl/projectOverviewMore?tid='+Math.round(Math.random()*1000000)+'">重点项目列表</a>');
			break;
		case 'jd':
			$('#laiyuan').html('<a href="/xmzhgl_xzb/show/xmgl/xmjieduan/projectManagement?tid='+Math.round(Math.random()*1000000)+'">项目阶段</a>');
			break;
		default:
			$('#laiyuan').html('<a href="/xmzhgl_xzb/show/xmzl/projectOverview?tid='+Math.round(Math.random()*1000000)+'">项目总览</a>');
			break;
	}
}
/**
 * 通过项目代码和日志时间查询项目详情
 */
function loadXmrzxqByXmdmRzsj(xmdm,rzsj){
	$.postJSON("/xmzhgl_xzb/xmzl/loadXmrzxqByXmdmRzsj", {
			"xmdm":xmdm,
			"rzsj":rzsj
	},function (data, textStatus) {
		if(data && data[0]=="Y"){
			$("#article_body").html(getStrNoNull(data[1][0]));
		}
	});
}