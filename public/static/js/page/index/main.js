$(function(){
	openChildren();
	autoPlay();// 轮播效果
	//控制多行文本超出显示省略号
	setTextLength(".key-projects-con .bd ul li p");	
	setMkClass();
	loadZdxmzs();
	loadZdxmssjd();
});

/**
 * 轮播效果
 */
function autoPlay(){
	$(".message-reminder").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:3,interTime:50});
	$(".key-projects-con,.investment-financing-con").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:1});
	$(".key-progress-con").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:2,interTime:50,trigger:"click"});
	$(".slideGroup .slideBox").slide({ mainCell:"ul",vis:3,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop"});	
	$(".design-sketch .whole").slide({titCell:".whole-hd li",mainCell:".whole-bd",prevCell:".whole-prev",nextCell:".whole-next",effect:"left",trigger:"click",delayTime:0});		
}

//打开甘特图
function showGantt(xmdm){
	window.location.href = '/xmzhgl_xzb/show/xmgl/xmjindu/projectGantt?xmdm='+xmdm+'&tid='+Math.round(Math.random()*1000000);
}

//转换小数为最多两位，小数尾数位为0的截去
function numFixed(num){
	var retNum = num.toFixed(2);
	if(retNum.substr(retNum.indexOf(".")+2)=="0"){
		retNum = num.toFixed(1);
		if(retNum.substr(retNum.indexOf(".")+1)=="0"){
			retNum = num.toFixed(0);
		}
	}
	return retNum;
}