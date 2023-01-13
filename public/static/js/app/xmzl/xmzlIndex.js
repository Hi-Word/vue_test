/**
 * 项目总览页面js
 */

$(function(){
	lodeXmzlList();
	loadAllSxXmjd();
	loadAllSxYqcy();
	loadAllSxTzgm();
});

/**
 * 查询项目总览列表
 */
function lodeXmzlList(){
	var xmmc = $("#xmmc").val();
	var xmjd = getCheckboxValues('xmjd');
	var yqcy = getCheckboxValues('yqcy');
	var tzgm = getCheckboxValues('tzgm');
	$.postFyJSON("/xmzhgl_xzb/app/xmzl/loadXmjbxxList",{
		"xmmc":xmmc,
		"xmjd":xmjd,
		"yqcy":yqcy,
		"tzgm":tzgm
	},function(data){
		if(data && data[0]=="Y"){	
			var list = data[1].bodyList;
			var lis = [];
			//遍历全部的项目列表
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<div class="xmlb box01 clearfix">');
					lis.push('<a href="/xmzhgl_xzb/show/app/xmzl/pro_tw?xmdm='+list[i][0]+'&tid='+Math.round(Math.random()*1000000)+'">');
					lis.push('<img src="/xmzhgl_xzb/app/xmzl/loadTp?tpid='+getStrNoNull(list[i][3])+'" >');
					lis.push('<h3>'+getStrNoNull(list[i][1])+'</h3>');
					lis.push('<p>'+getStrNoNull(list[i][2])+'</p>');
					lis.push('</a></div>');
				}
				lis.push(getFenyeBottom(data[1], "doCheck()", 4));
			} else {
				lis.push('<div style="height:50px;" align="center">暂无项目！</div>');
			}
			$("#xmzl_list").html(lis.join(""));
		}else{
			alert(data[1]);
		}
	});
}

//选中筛选条件
function getTypeId(obj){
	//无样式的话就加上
	if($(obj).parent().hasClass("select_list_on")){
		$(obj).parent().removeClass("select_list_on");
	}else{
		$(obj).parent().addClass("select_list_on");
	}
	$(obj).next().prop("checked",!$(obj).next().prop("checked"));
}

/**
 * 查询筛选中的项目阶段信息
 */
function loadAllSxXmjd(){
	$.postFyJSON("/xmzhgl_xzb/app/xmzl/loadAllXmjd",{},function(data){
		if(data && data[0]=="Y"){
			var list = data[1];
			var lis = [];
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<li><a href="javascript:void(0);" onclick="getTypeId(this)">'+getStrNoNull(list[i].sx_mc)+'（'+getStrNoNull(list[i].sx_count)+'个）</a>');
					lis.push('<input type="checkbox" style="display:none;" name="xmjd" value="'+getStrNoNull(list[i].sx_id)+'"/></li>');
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
	$.postFyJSON("/xmzhgl_xzb/app/xmzl/loadAllYqcy",{},function(data){
		if(data && data[0]=="Y"){
			var list = data[1];
			var lis = [];
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<li><a href="javascript:void(0);" onclick="getTypeId(this)">'+getStrNoNull(list[i].sx_mc)+'（'+getStrNoNull(list[i].sx_count)+'个）</a>');
					lis.push('<input type="checkbox" style="display:none;" name="yqcy" value="'+getStrNoNull(list[i].sx_id)+'"/></li>');
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
	$.postFyJSON("/xmzhgl_xzb/app/xmzl/loadAllTzgm",{},function(data){
		if(data && data[0]=="Y"){
			var list = data[1];
			var lis = [];
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<li><a href="javascript:void(0);" onclick="getTypeId(this)">'+getStrNoNull(list[i].sx_mc)+'（'+getStrNoNull(list[i].sx_count)+'个）</a>');
					lis.push('<input type="checkbox" style="display:none;" name="tzgm" value="'+getStrNoNull(list[i].sx_id)+'"/></li>');
				}
			}
			$("#tzgm_ul").html(lis.join(""));
		}	
	});
}