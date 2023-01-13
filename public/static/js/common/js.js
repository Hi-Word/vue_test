
$(function() {	
	//时间
	date();
	setInterval("date()",1000);
	add(".choosing-industry","");
	add(".maximum-interest",".maximum-interest");
	add(".providing-risk",".providing-risk");
	add(".project-phase",".project-phase");
	add(".transfer-ratio",".transfer-ratio");
	add(".financing-methods",".financing-methods");
	add(".financing-amount",".financing-amount");
	
	//导航
	$(".nLi").click(function(){
		$(this).addClass("hover").siblings("li").removeClass("hover");
	});
	
	$(".whole-tab").click(function(){
		$(this).addClass("hover").siblings("li").removeClass("hover");
		$(".whole").show().siblings("div").hide();
	});
	
	//效果图
	$(".map01-hd area").mouseover(function(){
		$(".map01-bd > div").eq($(this).index()).show().siblings("div").hide();
	});
	
	$(".map01-hd area").mouseover(function(){
		$(".map01-bd > div").eq($(this).index()).show().siblings("div").hide();
	});
	
	$(".map01-hd area").mouseout(function(){
	  	$(".map01-bd > div").eq($(this).index()).hide();
	});
	
	$(".map01-bd > div").mouseover(function(){
		$(this).show();
	});
	
	$(".map01-bd > div").mouseout(function(){
	   $(this).hide();
	});
	
	//效果图
	$(".map02-hd area").mouseover(function(){
		$(".map02-bd > div").eq($(this).index()).show().siblings("div").hide();
	});
	
	$(".map02-hd area").mouseover(function(){
		$(".map01-bd > div").eq($(this).index()).show().siblings("div").hide();
	});
	
	$(".map02-hd area").mouseout(function(){
	  $(".map01-bd > div").eq($(this).index()).hide();
	});
	
	$(".map02-bd > div").mouseover(function(){
		$(this).show();
	});
	
	$(".map02-bd > div").mouseout(function(){
	  $(this).hide();
	});
	
	//计算高度
	var h=$(window).height();
	$(".project-approval-left,.project-approval-right,.project-approval-left ul").height(h-$(".header").height()-$(".nav").height()-80);
	$(".project-approval-left ul,.generate-reports .list").height(h-$(".header").height()-$(".nav").height()-151);	
	$(".generate-reports .list").height(h-$(".header").height()-$(".nav").height()-165);	
	$(".project-approval-right .ov").height(h-$(".header").height()-$(".nav").height()-235);
	
	//仿下拉菜单
	$(".condition dt").on("click",function(e){
		$(this).addClass("on").parent("dl").siblings().find("dt").removeClass("on");
		$(this).siblings("dd").show().parent("dl").siblings().find("dd").hide();
		//点击其他地方隐藏
		$(document).one("click",function(){
			$(".condition dl dd").hide();
			$(".condition dl dt").removeClass("on");
		})
		e.stopPropagation();/*stopPropagation();方法可以阻止把事件分派到其他节点*/
	});
	$(".condition dd a").on("click",function(e){
		$(this).parent("dd").siblings("dt").find("a").text($(this).text());
		$(this).parent("dd").hide();
		$(this).parent("dd").siblings("dt").removeClass("on");
	});
	
	
	$("#debt-financing").on("click",function(e){
		$(".project-phase,.transfer-ratio,.financing-methods").hide();
		$(".maximum-interest,.providing-risk").show();
	});
	$("#equity-financing").on("click",function(e){
		$(".maximum-interest,.providing-risk,.financing-methods").hide();
		$(".project-phase,.transfer-ratio").show();
	});
		
	$(".investment-financing-left-hd li").on("click",function(e){
		$(this).addClass("on").siblings().removeClass("on");
		$(this).find("i").removeClass("icon-xiangxia").addClass("icon-xiangshang");
		$(this).siblings().find("i").removeClass("icon-xiangshang").addClass("icon-xiangxia");
		$(".investment-financing-left-bd > div").eq($(this).index()).show().siblings().hide();
	});

})


$(window).resize(function(){
	var h=$(window).height();
	$(".project-approval-left,.project-approval-right").height(h-$(".header").height()-$(".nav").height()-80);
	$(".project-approval-left ul").height(h-$(".header").height()-$(".nav").height()-151);		
	$(".generate-reports .list").height(h-$(".header").height()-$(".nav").height()-165);	
	$(".project-approval-right .ov").height(h-$(".header").height()-$(".nav").height()-235);	
	
});

//获取时间
function date(){
	var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var h = myDate.getHours();//获取当前小时数(0-23)
    var m = myDate.getMinutes();//获取当前分钟数(0-59)
    var s = myDate.getSeconds();//获取当前秒
    var week = myDate.getDay();
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
   // console.log(year, mon, date, weeks[week]);
	if(h<10){
		h="0"+h;
	}else{
		h=h;
	}
	if(m<10){
		m="0"+m;
	}else{
		m=m;
	}
	$(".time").html(h+":"+m);
	$(".week").html(weeks[week]);
    $(".specific-date").html(year + "/" + mon + "/" + date);
}

function show(name){
	$(name).show();
}

function hide(name){
	$(name).hide();
}
/**
 * 查询条件选中和取消选中时的样式控制
 */
function add(name01,name02){
	$(name01+" ul li a").on("click",function(e){
		if(!$(this).hasClass("checkCon")){
			   $(this).addClass("checkCon");
			 }else{
			    $(this).removeClass("checkCon");
			 }
	/*	var txt1=$(name01).find(".title01").text();		
		$(name02).hide();
		$(".add-condition").prepend("<a>"+txt1+$(this).text()+"<i>x</i></a>");	
		$(".add-condition a").on("click",function(e){
			$(this).hide();
			$(name02).show(); 
			if($('.financing-methods').is(':visible')){
				  //如果显示时。。。
				$(".project-phase,.transfer-ratio,.maximum-interest,.providing-risk").hide();

			}
		});*/
	});
}

function cancel(){
	$(".progress-bar").stop(true);
	$(".physical-examination-con").stop();
}

function tab(i,name){
	$(name).show().siblings("div").hide();
	$(name).children("div").eq(i).show().siblings("div").hide();
}
