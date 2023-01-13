
$(function() {		
	inputMenu();//调用导航
})

$(window).resize(function(){
});




function getQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return decodeURI(r[2]);
	return $(document).attr("title");
}




/*生成菜单html*/
function inputMenu(){
	var menu="";
	menu +='<div class="title">';
	menu +='<span>导航</span>';
	menu +='<i class="iconfont icon-close" onClick="closeMenu()"></i>';
	menu +='</div>';
	menu +='<dl>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/appMain/appMain?tid='+Math.round(Math.random()*1000000)+'">首页</a></dt>';
	//页面标题自动读取
	menu +='<dt><a href="/xmzhgl_xzb/show/app/xmzl/xmzlIndex?name=%e9%a1%b9%e7%9b%ae%e6%8b%9b%e5%95%86">项目总览</a></dt>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/zsrz/zsrzIndex?name=%e9%a1%b9%e7%9b%ae%e6%8b%9b%e5%95%86">招商融资</a></dt>';
	menu +='<dd><a href="/xmzhgl_xzb/show/app/zsrz/zsrzIndex?name=%e9%a1%b9%e7%9b%ae%e6%8b%9b%e5%95%86">项目招商</a></dd>';
	menu +='<dd><a href="/xmzhgl_xzb/show/app/zsrz/zsrz_xmrz?name=%E9%A1%B9%E7%9B%AE%E8%9E%8D%E8%B5%84">项目融资</a></dd>';
	menu +='<dd><a href="/xmzhgl_xzb/show/app/zsrz/zsrz_zcwj?name=%E6%94%BF%E7%AD%96%E6%96%87%E4%BB%B6">政策文件</a></dd>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/xmjd/xmjd?name=%E9%A1%B9%E7%9B%AE%E9%98%B6%E6%AE%B5">项目阶段</a></dt>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/xmjindu/xmjindu?name=%E9%A1%B9%E7%9B%AE%E8%BF%9B%E5%BA%A6">项目进度</a></dt>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/xmyj/warning?name=%E9%A1%B9%E7%9B%AE%E9%A2%84%E8%AD%A6">项目预警</a></dt>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/xmsp/xmspIndex?name=%E9%A1%B9%E7%9B%AE%E5%AE%A1%E6%89%B9">项目审批</a></dt>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/xmgh/xmghIndex?name=%E9%A1%B9%E7%9B%AE%E8%A7%84%E5%88%92">项目规划</a></dt>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/xmxc/xmxcIndex?name=%E9%A1%B9%E7%9B%AE%E7%8E%B0%E5%9C%BA">项目现场</a></dt>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/tjfx/tjfxIndex?name=%E7%BB%9F%E8%AE%A1%E5%88%86%E6%9E%90">统计分析</a></dt>';
	menu +='<dd><a href="/xmzhgl_xzb/show/app/tjfx/tjfx_scbb?name=%E7%94%9F%E6%88%90%E6%8A%A5%E8%A1%A8">生成报表</a></dd>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/zxdt/zxdt?name=%E6%9C%80%E6%96%B0%E5%8A%A8%E6%80%81">最新动态</a></dt>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/wdly/wdly?name=%E6%88%91%E7%9A%84%E7%95%99%E8%A8%80">我的留言</a></dt>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/wdsc/wdsc?name=%E6%88%91%E7%9A%84%E6%94%B6%E8%97%8F">我的收藏</a></dt>';
	menu +='<dt><a href="/xmzhgl_xzb/show/app/zqtx/zqtx?name=%E6%94%BF%E4%BC%81%E9%80%9A%E8%AE%AF">政企通讯</a></dt>';
	menu +='</dl>';
	$("#nav_list").html(menu);
}



/*显示主菜单*/
function showMenu(){
	$("body").css("overflow","hidden");
	$(".nav_list").show();
}

/*隐藏主菜单*/
function closeMenu(){
	$("body").css("overflow","unset");
	$(".nav_list").hide();
}

/*显示筛选菜单*/
function showSelection(){
	$("body").css("overflow","hidden");
	$(".select_list").show();
}

/*隐藏筛选菜单*/
function closeSelection(){
	$("body").css("overflow","unset");
	$(".select_list").hide();
}
