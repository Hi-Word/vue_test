$(function() {
	loadData();
});

function loadData(){
	loadZdxmzsList();
	loadAllSxXmjd();
	loadAllSxYqcy();
	loadAllSxTzgm();
};

//加载重点项目进度列表
function loadZdxmzsList(){
	var xmmc = $("#xmmc").val();
	var xmjd = getCheckboxValues('xmjd');
	var yqcy = getCheckboxValues('yqcy');
	var tzgm = getCheckboxValues('tzgm');
	$.postFyJSON("/xmzhgl_xzb/app/zdxmzs/loadZdxmzsList",{
		"xmmc":xmmc,
		"xmjd":xmjd,
		"yqcy":yqcy,
		"tzgm":tzgm
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
					list.push('<img src="/xmzhgl_xzb/app/xmzl/loadTp?tpid='+getStrNoNull(bodyList[i][3])+'" >');
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
	$.postFyJSON("/xmzhgl_xzb/app/zdxmzs/loadAllXmjd",{},function(data){
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
	$.postFyJSON("/xmzhgl_xzb/app/zdxmzs/loadAllYqcy",{},function(data){
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
	$.postFyJSON("/xmzhgl_xzb/app/zdxmzs/loadAllTzgm",{},function(data){
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