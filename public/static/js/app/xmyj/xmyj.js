var yjxx_id = request("id");
$(function(){
	loadAllXmyj();
	loadYjxjSelect();
});

//加载所有项目预警列表
function loadAllXmyj(){
	var keyword = $("#keyword").val();
	$.postFyJSON("/xmzhgl_xzb/app/xmyj/loadAllXmyj",{
		"keyword":keyword,
		"yjxx_id":yjxx_id
	},function(data){
		if(data && data[0]=="Y"){	
			var resultList = data[1].bodyList;
			var list = [];
			var index = 0;
			if (resultList && resultList.length > 0 && resultList[0][0]!=null) {
				for (var i = 0; i < resultList.length; i++) {
					index = index + 1;
					list.push('<tr>');
					list.push('<td class="text-center" width="10%">'+ index +'</td>');
					list.push('<td width="55%">'+ getStrNoNull(resultList[i][1]) +'</td>');
					list.push('<td class="text-center" width="20%">'+ showGbzt(getStrNoNull(resultList[i][2])) +'</td>');
					list.push('<td class="text-center" width="20%">');
					list.push('<a href="/xmzhgl_xzb/show/app/xmyj/warning_detail?yjxx_id='+ resultList[i][0] +'&xmyjid='+ Math.round(Math.random() * 1000000) +'">查看详情</a>');
					list.push('</td>');
					list.push('</tr>');
				}
				list.push(getFenyeBottom(data[1], "loadAllXmyj()", 4));
			} else {
				list.push('<td class="text-center" colspan="4">暂无相关预警信息!</td>');
			}
			$("#show_tbody").html(list.join(""));
		}else{
			alert(data[1]);
		}
		//从消息提醒跳转过来会带id,第一次加载后赋值为空
		yjxx_id = "";
	});
};

//立即体检,查看未处理的项目预警
function doCheckXmyj(){
	//跳转到预警立即体检页面
	window.location.href="/xmzhgl_xzb/show/app/xmyj/doCheckWarning?tid="+Math.round(Math.random()*1000000);
};

//显示关闭状态
function showGbzt(gbzt){
	if(gbzt=="1"){
		return '已关闭';
	}else if(gbzt=="0"){
		return '未关闭';
	}else{
		return '';
	}
}

//得到预警星级提示
function loadYjxjSelect() {
	$.postJSON("/xmzhgl_xzb/xmyj/loadYjxjSelect", null, function(data) {
		if (data && data.length > 0) {
			//得到预警星级提示
			var yjxjTs=[];
			for (var i = 0; i < data.length; i++) {
				yjxjTs.push('<em style="color:'+data[i].ysdm+';">'+getYjxjShow(data[i].yjxjDm)+'（'+data[i].yjxjMc+'）</em>');
			}
			$("#yjxjTs").html(yjxjTs.join(""));
		}
	});
}
