$(function() {
	loadZdxmjdList();
});

//加载重点项目进度列表
function loadZdxmjdList(){
	var xmmc = $("#xmmc").val();
	$.postFyJSON("/xmzhgl_xzb/app/xmjindu/loadZdxmjdList", {"xmmc":xmmc}, function(data) {
		if(data && data[0]=="Y"){
			var bodyList = data[1].bodyList;
			var list = [];
			if (bodyList && bodyList.length > 0 && bodyList[0]!=null) {
				for (var i = 0; i < bodyList.length; i++) {
					list.push('<tr><td style="text-align: left;padding-left: 10px;"><a href="/xmzhgl_xzb/show/app/appMain/main_gtt?xmdm='+bodyList[i][0]+'&tid='+Math.round(Math.random()*1000000)+'">'+bodyList[i][1]+'</a></td>');
					var jd = 0;
					if(bodyList[i][2]){
						jd = bodyList[i][2];
					}
					list.push('<td>'+jd+'%</td></tr>');
				}
				list.push(getFenyeBottom(data[1], "loadZdxmjdList()", 2));
			} else {
				list.push('<td class="text-center" colspan="2">暂无相关数据!</td>');
			}
			$("#show_tbody").html(list.join(""));
		}else{
			alert(data[1]);
		}
	});
};

