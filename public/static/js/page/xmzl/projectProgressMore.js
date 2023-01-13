$(function(){
	openChildren();
	$('.con .ov').perfectScrollbar();
	setMkClass();
	loadZdxmssjdList();
})

function loadZdxmssjdList(){
	$.postFyJSON("/xmzhgl_xzb/xmjindu/loadZdxmssjdList",{
		"xmmc":$("#xmmc").val()
	},function(data){
		if(data && data[0]=="Y"){
			var list = data[1].bodyList;
			var lis = [];
			if (list && list.length > 0 && list!=null) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<li>');
					lis.push('<span style="width:46%;"><a onclick="showGantt(\'' + getStrNoNull(list[i][0]) + '\')">'+getStrNoNull(list[i][1])+'</a></span>');
					var jd = 0;
					if(list[i][2]){
						jd = list[i][2];
					}
					lis.push('<span style="width:30%;" class="bg"><i class="bg01" style="width:'+jd+'%;">&nbsp;</i></span>');
					lis.push('<span style="width:10%;" class="text-center">'+jd+'%</span>');
					lis.push('</li>');
				}
			} else {
				lis.push('<li><span style="width:100%;" class="text-center">无数据</span></li>');
			}
			$("#zdxmssjdUl").html(lis.join(""));
			var fenye = [];
			fenye.push(getFenyeBottom(data[1], "loadZdxmssjdList()", 9));
			$("#fenye").html(fenye.join(""));
		}else{
			alert(data[1]);
		}
	});
};

//打开甘特图
function showGantt(xmdm){
	window.location.href = '/xmzhgl_xzb/show/xmgl/xmjindu/projectGantt?xmdm='+xmdm+'&tid='+Math.round(Math.random()*1000000);
}
