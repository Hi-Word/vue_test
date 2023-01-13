$(function() {
//	loadZdxmzsList();
});

//加载重点项目进度列表
function loadZdxmzsList(){
	var xmmc = $('#xmmc').val();
	$.postFyJSON("/xmzhgl_xzb/app/xmzl/loadXmjbxxList",{
		"xmmc":xmmc
	},function(data){
		if(data && data[0]=="Y"){	
			var bodyList = data[1].bodyList;
			var list = [];
			var index = 0; 	
			if (bodyList && bodyList.length > 0) {
				for (var i = 0; i < bodyList.length; i++) {
					index = index + 1;
					list.push('<div class="xmlb box01 clearfix">');
					list.push('<a href="/xmzhgl_xzb/show/app/xmzl/pro_tw?xmdm='+bodyList[i][0]+'">');
					list.push('<img src="/xmzhgl_xzb/images/tw.png" >');
					list.push('<h3>'+getStrNoNull(bodyList[i][1])+'</h3>');
					list.push('<p>'+getStrNoNull(bodyList[i][2])+'</p>');
					list.push('</a></div>');
				}
				list.push(getFenyeBottom(data[1], "loadZdxmzsList()", 4));
			} else {
				list.push('<div style="height:50px;" align="center">暂无项目！</div>');
			}
			$("#zdxm_list").html(list.join(""));
		}else{
			alert(data[1]);
		}
	});
};

