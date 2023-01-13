$(function(){
	openChildren();
	setMkClass();//设置模块选中
	//showXmjdPie();//加载预警信息饼图
	$('.con .ov').perfectScrollbar();
	loadXmList();
	showXmjdPie();
})			
						
//加载项目进度饼图
function showXmjdPie(){
	$.postJSON("/xmzhgl_xzb/xzbChartsAction/getChartsDatas",{"ymqyDm":"qy_xmjdPie"},function(retData){
		if(retData[0]=="Y"){
			genChart("qy_xmjdPie", retData);
		}
	});
}

//加载项目列表
function loadXmList(){
	var xmmc = $("#xmmc").val();
	$.postFyJSON("/xmzhgl_xzb/xmjindu/loadXmList", {
		"xmmc" : xmmc
	}, function(data) {
		if (data && data[0] == "Y") {
			var list = data[1].bodyList;
			var lis = [];
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<tr>');
					lis.push('<td width="30%" align="center" ><a href="#" onclick="showGantt(\'' + getStrNoNull(list[i][0]) + '\')">'+getStrNoNull(list[i][1])+'</a></td>');
					lis.push('<td width="10%" align="center" >' + getStrNoNull(list[i][2]) + '</td>');
					lis.push('<td width="15%" align="center" >' + getFormatDate(list[i][3]) + '</td>');
					lis.push('<td width="15%" align="center" >' + getFormatDate(list[i][4]) + '</td>');
					lis.push('<td width="15%" align="center" >' + getStrNoNull(list[i][5]) + '</td>');
					lis.push('<td width="10%" align="center" ><a href="#" onclick="showFzr(\'' + getStrNoNull(list[i][6]) + '\')">'+getStrNoNull(list[i][7])+'</a></td>');
					lis.push('</tr>');
				}
			} else {
				lis.push('<tr height="22"><td colspan="7" bgcolor="#f5f5f5" align="center">' + '无数据' + '！</td></tr>');
			}
			$("#xmTable").html(lis.join(""));
			var fenye = [];
			fenye.push(getFenyeBottom(data[1], "loadXmList()", 10));
			$("#jindufenye").html(fenye.join(""));
		}
	});
}

//查看负责人
function showFzr(fzrid){
	$.postJSON("/xmzhgl_xzb/xmjindu/showFzr",{"fzrid":fzrid},function(data){
		if(data[0]=="Y"){
			var ryxx = data[1][0];
			$("#qymc").html("企业名称："+ryxx[0]);
			$("#rymc").html(ryxx[1]);
			$("#lxdh").html("联系电话："+ryxx[2]);
			$("#dzyx").html("电子邮箱："+ryxx[3]);
			show('.project-replicator-window');
		}
	});
}

//打开甘特图
function showGantt(xmdm){
	window.location.href = '/xmzhgl_xzb/show/xmgl/xmjindu/projectGantt?xmdm='+xmdm+'&tid='+Math.round(Math.random()*1000000);
}
