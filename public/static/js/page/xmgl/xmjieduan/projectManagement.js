$(function(){
	js();
	loadXmjd();
});

function js(){
	openChildren();	
	setMkClass();//设置模块选中
	jQuery(".management").slide({trigger:"click"});
};

//加载项目过程
function loadXmjd(){
	$.postJSON("/xmzhgl_xzb/xmjieduan/loadAllXmgc", null, function(data) {
		if(data && data[0]=="Y"){
			var xmjdList = data[1];
			var list = [];
			if (xmjdList && xmjdList.length > 0 && xmjdList[0]!=null) {
				for (var i = 0; i < xmjdList.length; i++) {
					if(xmjdList[i].jd_mc=="发承包阶段"){    //页面不需要展示发承包阶段
						continue;
					}
					list.push('<li><a herf="javascript:void(0);" onclick="viewContent(\''+xmjdList[i].jd_id+'\',this)">'+xmjdList[i].jd_mc+'（'+xmjdList[i].jd_xm_count+'）</a></li>');
				}
			}
			$("#xmjd_list").html(list.join(""));
			//默认加载第一个阶段的数据
			viewContent(xmjdList[0].jd_id);
			//将默认排序第一个,招商阶段的过程id放到页面隐藏input里
			//值用于判断获取在招商阶段的项目列表
			$("#xmgc_id").val(xmjdList[0].jd_id);
		}else{
			alert(data[1]);
		}
	});
}

//点击项目阶段,查看对于的参与部门、项目列表、阶段文件
function viewContent(xmgcId,obj){
	$(".bd").hide();
	loadCybmList(xmgcId);
	loadXmList(xmgcId);
	loadJdwjList(xmgcId);
	$(".bd").fadeIn();
	//如果非点击调用,obj为空,默认第一个阶段加上选中样式
	if(obj==null){
		$("#xmjd_list li").eq(0).addClass("on");
	}else{
		$("#xmjd_list li").removeClass("on");
		$(obj).parent().addClass("on");
	}
};

//加载参与部门
function loadCybmList(xmgcId){
	$.postJSON("/xmzhgl_xzb/xmjieduan/loadCybmListByXmgcId", {"xmgcId":xmgcId}, function(data) {
		if(data && data[0]=="Y"){
			var cybmList = data[1];
			var list = [];
			if (cybmList && cybmList.length > 0 && cybmList[0]!=null) {
				var index = 1;
				for (var i = 0; i < cybmList.length; i++) {
					list.push('<tr><td width="6%" class="text-center">'+index+'</td>');
					list.push('<td width="30%" class="text-center">'+getStrNoNull(cybmList[i][0])+'</td>');
					list.push('<td colspan="5" class="text-center">'+getStrNoNull(cybmList[i][1])+'</td></tr>');
					index++;
				}
			} else {
				list.push('<tr><td width="6%" colspan="7" class="text-center">该阶段暂无相关参与部门!</td></tr>');
			}
			$("#cybm_tbody").html(list.join(""));
		}else{
			alert(data[1]);
		}
	});
};

//加载项目列表
function loadXmList(xmgcId){
	$.postFyJSON("/xmzhgl_xzb/xmjieduan/loadXmListByXmgcId", {"xmgcId":xmgcId}, function(data) {
		if(data && data[0]=="Y"){
			var bodyList = data[1].bodyList;
			var list = [];
			var fenye = [];
			if (bodyList && bodyList.length > 0 && bodyList[0]!=null) {
				var index = 1;
				for (var i = 0; i < bodyList.length; i++) {
					list.push('<tr><td width="8%" class="text-center">'+index+'</td>');
					//获取在页面预存的项目过程id,判断点击的获取的是否是招商阶段的项目列表
					//if($("#xmgc_id").val==xmgcId){    //跳转到招商项目详情
						//list.push('<td width="42%" ><a href="javascript:void(0);" onclick="show(\'.investment-project-details\')">'+getStrNoNull(bodyList[i][1])+'</a></td>');
					//}else{    //跳转到项目详情
						list.push('<td width="42%" class="text-center project_name"><a href="javascript:void(0);" onclick="toXmxq(\''+bodyList[i][0]+'\')">'+getStrNoNull(bodyList[i][1])+'</a></td>');
					//}
					list.push('<td colspan="5" class="text-center">'+getStrNoNull(bodyList[i][3])+'</td></tr>');
					index++;
				}
				//分页要带项目过程id
				fenye.push(getFenyeBottom(data[1], "loadXmList('"+xmgcId+"')", 7));
			} else {
				list.push('<td class="text-center" colspan="7">该阶段暂无相关项目!</td>');
			}
			$("#xm_tbody").html(list.join(""));
			$("#fenye").html(fenye.join(""));
		}else{
			alert(data[1]);
		}
	});
};

//加载阶段文件
function loadJdwjList(xmgcId){
	$.postJSON("/xmzhgl_xzb/xmjieduan/loadGcwjListByXmgcId", {"xmgcId":xmgcId}, function(data) {
		if(data && data[0]=="Y"){
			var fileList = data[1];
			var list = [];
			if (fileList && fileList.length > 0 && fileList[0]!=null) {
				var index = 1;
				for (var i = 0; i < fileList.length; i++) {
					list.push('<li><a>'+index+'、'+fileList[i].wjMc+'；</a></li>');
					index++;
				}
			} else {
				list.push('<li><a>该阶段暂无相关文件!</a></li>');
			}
			$("#XmjdFileList").html(list.join(""));
		}else{
			alert(data[1]);
		}
	});
};

//跳转项目详情
function toXmxq(xmdm){
	window.location.href="/xmzhgl_xzb/show/xmzl/projectDetails?xmdm="+ xmdm +"&tid="+Math.round(Math.random()*1000000)+"&xmbz=jd";
}