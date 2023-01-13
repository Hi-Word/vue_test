$(function(){
	doCheckXmyj();
	loadYjxjSelect();
});

//立即体检,查看未处理的项目预警
function doCheckXmyj(){
	var keyword = $("#keyword").val();
	$.postFyJSON("/xmzhgl_xzb/app/xmyj/doCheckXmyj",{
		"keyword":keyword
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
					list.push('<td class="text-center" width="20%">');
					list.push('<em style="color:'+getStrNoNull(resultList[i][4])+';">'+getYjxjShow(getStrNoNull(resultList[i][2]))+'</em>');
					list.push('</td>');
					list.push('<td class="text-center" width="20%">');
					list.push('<a href="/xmzhgl_xzb/show/app/xmyj/warning_detail?yjxx_id='+ resultList[i][0] +'&xmyjid='+ Math.round(Math.random() * 1000000) +'">查看详情</a>');
					list.push('</td>');
					list.push('</tr>');
				}
				list.push(getFenyeBottom(data[1], "doCheckXmyj()", 4));
			} else {
				list.push('<td class="text-center" colspan="4">暂无预警!</td>');
			}
			$("#show_tbody").html(list.join(""));
		}else{
			alert(data[1]);
		}
	});
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
