$(function(){
	js();
})	

function js(){
	openChildren();
	
	//控制多行文本超出显示省略号
	/*$(".project-overview ul li p").each(function(i){
		var divH = $(this).height();
		var $p = $(this).find("span");
		while ($p.outerHeight() > divH) {
			$p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
		};
	});*/
	setTextLength(".project-overview ul li p");
	setMkClass();
	loadZdxmzsList();
}

//加载重点项目进度列表
function loadZdxmzsList(){
	var xmmc = $("#xmmc").val();
	$.postFyJSON("/xmzhgl_xzb/zdxm/loadZdxmList",{
		"xmmc":xmmc,
	},function(data){
		if(data && data[0]=="Y"){
			var bodyList = data[1].bodyList;
			var list = [];
			var index = 0;
			if (bodyList && bodyList.length > 0) {
				for (var i = 0; i < bodyList.length; i++) {
					index = index + 1;
					list.push('<li><a href="/xmzhgl_xzb/show/xmzl/projectDetails?xmdm='+bodyList[i][0]+'&tid='+Math.round(Math.random()*1000000)+'&xmbz=zd"><img src="/xmzhgl_xzb/xmzl/loadTp?tpid='+getStrNoNull(bodyList[i][3])+'">');
					list.push('<h1>'+getStrNoNull(bodyList[i][1])+'</h1>');
					list.push('<p><span>'+getStrNoNull(bodyList[i][2])+'</span></p></a></li>');
				}
				list.push(getFenyeBottom(data[1], "loadZdxmzsList()", 4));
			} else {
				list.push('<div style="height:50px; font-size:24px" align="center">暂无项目！</div>');
			}
			$("#zdxm_list").html(list.join(""));
		}else{
			alert(data[1]);
		}
	});
};
