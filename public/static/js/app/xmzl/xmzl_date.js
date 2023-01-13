/**
 * 项目详情页项目日志页面js
 */

var myCalendar = new SimpleCalendar('#calendar');
var mark = {};

/**
 * 初始化日期插件
 */
function initDate(markNew){
	myCalendar._defaultOptions.mark=markNew;
			myCalendar.update();
	mark = markNew;
	 //滑动切换
    var myElement = document.getElementById('calendar');
    var hammer = new Hammer(myElement);
    hammer.on("swipeleft", function (ev) {
        myCalendar.addMonth();
    });
    hammer.on("swiperight", function (ev) {
        myCalendar.subMonth();
    });
    //显示当天的活动在初始化mark之后
    //初始化今天的活动
    announceList($('.sc-today'));
    //有标记的日期点击事件
    $('#calendar').on("click", '.sc-selected', function() {
        announceList($(this));
    });
    $('.sc-days .sc-item').click(function(){
    	$('.sc-days .sc-item').removeClass('sc-today');
    	$(this).addClass("sc-today")
    });
}


$(function(){
	var xmdm = request("xmdm");
	loadXmrzByXmdm(xmdm);
    var monthCH = $('.sc-select-month').text();
    $(".sc-mleft").click(function(){
        myCalendar.subMonth();
        var year = $('.sc-select-year').text();
        var monthCH = $('.sc-select-month').text();
        var month = SimpleCalendar.prototype.languageData.months_CH.indexOf(monthCH)+1;
    });
    $(".sc-mright").click(function(){
        myCalendar.addMonth();
        var year = $('.sc-select-year').text();
        var monthCH = $('.sc-select-month').text();
            var month = SimpleCalendar.prototype.languageData.months_CH.indexOf(monthCH)+1;
        });
    });
	
    //显示选择日期当天的活动
function announceList(v){
    if(v.children().hasClass('sc-mark-show')){
        var year = $('.sc-select-year').text();
        var monthCH = $('.sc-select-month').text();
        var day = v.children()[1].innerText;
        var month = SimpleCalendar.prototype.languageData.months_CH.indexOf(monthCH)+1;
        var date = year + '-' + month + '-' + day;
        var content = mark[date];
        var matterHtml='';
        for(var i=0;i<content.length;i++){
            matterHtml +='<li class="announceItem"><div><div class="fl announceImg">'
                +'</div>'
                +'<p class="announceContent">'+content[i].title+'</p>'
                +'</div><div class="announceTime">'+content[i].startTime+' - '+content[i].endTime+'</div></li>';
        }
        $('.matter').html(matterHtml);
    }else{
        var matterHtml=''
        matterHtml +='<li class="announceItem"><div><p class="announceContent">当前日期暂无日志</p></div></li>';
        $('.matter').html(matterHtml);
        }
}

/**
 * 通过项目代码查询项目日志信息
 */
function loadXmrzByXmdm(xmdm){
	$.postJSON("/xmzhgl_xzb/app/xmzl/loadXmrzByXmdm",{
	"xmdm":xmdm
},function(data){
	if(data && data[0]=="Y"){
		//获得项目工程详情
		var xmrzList =  data[1];
		if (xmrzList && xmrzList.length > 0) {
			var index = 1;
			var markNew = {};
			for(var i=0;i<xmrzList.length;i++){
				var sj = new Date(xmrzList[i][0])
				var rzsj =sj.getFullYear() + '-' + (sj.getMonth() + 1) + '-' + sj.getDate();
				var str = getStrNoNull(xmrzList[i][2]);
				var re1 = new RegExp("<.+?>","g");
				str=str.replace(/<\s?img[^>]*>/gi, '【图片】');//图片标签转变
				str=str.replace(re1,'');//提取富文本框中文字
				if(str.length>100){
					str=str.substr(0, 100);
					str+="..."
				}
				//添加标记
			    markNew[rzsj] = [{title:getStrNoNull(xmrzList[i][1]),startTime:getFormatDate(xmrzList[i][0])+'</br>'+str,endTime:'<a  href="javascript:void(0);" class="ckxq_btn" onclick="showRzxq(\''+xmdm+'\',\''+rzsj+'\')" style="float: right">查看详情>></a>'+'</a>'}];
				}
				initDate(markNew);
			}
		}
	});
}

/**
 * 跳转到项目日志详情页面
 */
function showRzxq(xmdm,rzsj){
	window.top.location.href = '/xmzhgl_xzb/show/app/xmzl/xmzl_date_rzxq?xmdm='+xmdm+'&rzsj='+rzsj+'&tid='+Math.round(Math.random()*1000000);
}

