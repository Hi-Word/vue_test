$(function(){
	setMkClass();
	openChildren();
	setTextLength(".project-overview ul li p");
	
	lodeXmzlList();
	loadAllSxXmjd();
	loadAllSxYqcy();
	loadAllSxTzgm();
});

/**
 * 查询项目总览列表
 */
function lodeXmzlList(){
	var xmmc = $('#xmmc').val();
	var xmjd = getCheckboxValues('xmjd');
	var yqcy = getCheckboxValues('yqcy');
	var tzgm = getCheckboxValues('tzgm');
	$.postFyJSON("/xmzhgl_xzb/xmzl/loadXmjbxxList",{
		"xmmc":xmmc,
		"xmjd":xmjd,
		"yqcy":yqcy,
		"tzgm":tzgm
	},function(data){
		if(data && data[0]=="Y"){	
			var list = data[1].bodyList;
			var lis = [];
			//遍历全部项目列表
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<li><a href="/xmzhgl_xzb/show/xmzl/projectDetails?xmdm='+list[i][0]+'&xmbz=zl&tid='+Math.round(Math.random()*1000000)+'">');
					lis.push('<img  src="/xmzhgl_xzb/xmzl/loadTp?tpid='+getStrNoNull(list[i][3])+'">');
					lis.push('<h1>'+getStrNoNull(list[i][1])+'</h1>');
					lis.push('<p><span>'+getStrNoNull(list[i][2])+'</span></p>');
					lis.push('</a></li>')
				}
				lis.push(getFenyeBottom(data[1], "lodeXmzlList()", 4));
			} else {
				lis.push('<div style="height:50px;" align="center">暂无项目！</div>');
			}
			$("#xmzl_list").html(lis.join(""));
		}else{
			alert(data[1]);
		}
	});
}

/**
 * 查询筛选中的项目阶段信息
 */
function loadAllSxXmjd(){
	$.postFyJSON("/xmzhgl_xzb/xmzl/loadAllXmjd",{},function(data){
		if(data && data[0]=="Y"){
			var list = data[1];
			var lis = [];
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<li><a href="javascript:void(0);" onclick="getTypeId(this)">'+list[i].sx_mc+'（'+list[i].sx_count+'个）</a>');
					lis.push('<input type="checkbox" style="display:none;" name="xmjd" value="'+list[i].sx_id+'"/></li>');
				}
			}
			$("#xmjd_ul").html(lis.join(""));
		}	
	});
}

/**
 * 查询筛选中的园区产业信息
 */
function loadAllSxYqcy(){
	$.postFyJSON("/xmzhgl_xzb/xmzl/loadAllYqcy",{},function(data){
		if(data && data[0]=="Y"){
			var list = data[1];
			var lis = [];
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<li><a href="javascript:void(0);" onclick="getTypeId(this)">'+list[i].sx_mc+'（'+list[i].sx_count+'个）</a>');
					lis.push('<input type="checkbox" style="display:none;" name="yqcy" value="'+list[i].sx_id+'"/></li>');
				}
			}
			$("#yqcy_ul").html(lis.join(""));
		}	
	});
}

/**
 * 查询筛选中的投资规模信息
 */
function loadAllSxTzgm(){
	$.postFyJSON("/xmzhgl_xzb/xmzl/loadAllTzgm",{},function(data){
		if(data && data[0]=="Y"){
			var list = data[1];
			var lis = [];
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<li><a href="javascript:void(0);" onclick="getTypeId(this)">'+list[i].sx_mc+'（'+list[i].sx_count+'个）</a>');
					lis.push('<input type="checkbox" style="display:none;" name="tzgm" value="'+list[i].sx_id+'"/></li>');
				}
			}
			$("#tzgm_ul").html(lis.join(""));
		}	
	});
}				
//选中筛选条件
function getTypeId(obj){
	//无样式的话就加上
	if($(obj).hasClass("checkCon")){
		$(obj).removeClass("checkCon");
	}else{
		$(obj).addClass("checkCon");
	}
	$(obj).next().prop("checked",!$(obj).next().prop("checked"));
}
