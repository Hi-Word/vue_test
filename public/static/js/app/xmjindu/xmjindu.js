
$(function() {
	showXmjdPie("qy_appXmjdPie");
	loadXmjdList();
});

//加载项目进度饼图
function showXmjdPie(divId){
	$.postJSON("/xmzhgl_xzb/xzbChartsAction/getChartsDatas",{"ymqyDm":divId},function(retData){
		if(retData[0]=="Y"){
			genChart(divId, retData);
		}
	});
};

//加载项目进度列表
function loadXmjdList(){
	var xmmc = $("#xmmc").val();
	$.postFyJSON("/xmzhgl_xzb/app/xmjindu/loadXmjdList", {"xmmc":xmmc}, function(data) {
		if(data && data[0]=="Y"){
			var bodyList = data[1].bodyList;
			var list = [];
			if (bodyList && bodyList.length > 0 && bodyList[0]!=null) {
				var index = 1;
				for (var i = 0; i < bodyList.length; i++) {
					list.push('<tr><td width="10%"  style="text-align: center">'+index+'</td>');
					list.push('<td width="60%"><a href="/xmzhgl_xzb/show/app/appMain/main_gtt?xmdm='+bodyList[i][0]+'&tid='+Math.round(Math.random()*1000000)+'">'+getStrNoNull(bodyList[i][1])+'</a></td>');
					list.push('<td width="15%">'+getStrNoNull(bodyList[i][2])+'</td>');
					list.push('<td width="15%"><a href="/xmzhgl_xzb/show/app/xmjindu/xmjindu_detail?xmdm='+bodyList[i][0]+'&tid='+Math.round(Math.random()*1000000)+'">查看详情</a></td></tr>');
					index++;
				}
				list.push(getFenyeBottom(data[1], "loadXmjdList()", 4));
			} else {
				list.push('<td class="text-center" colspan="4">暂无相关数据!</td>');
			}
			$("#show_tbody").html(list.join(""));
		}else{
			alert(data[1]);
		}
	});
};

