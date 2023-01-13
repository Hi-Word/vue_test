$(function(){
	loadData();
});

function loadData(){
	loadZdxmssjdList();    //加载重点项目实施进度模块
	loadZdxmzsList();    ////加载重点项目展示模块
	loadXxtxCount();//显示消息提醒数量
	showYqdt();//园区动态
	showCharts('qy_gnsczzBae','gnsczzBae');//加载 各年生产总值 柱形图
	showCharts('qy_gyzczBae','sbxmgkBae');//加载  工业总产值 柱形图
	showCharts('qy_xmtjBae','spjdPie');//加载 项目统计 饼图
	showCharts('qy_yqcylbTop5Bae','yqcylbTop5Bae');//加载  园区产业类别  饼图
};


//加载首页重点项目实施进度模块的列表
function loadZdxmssjdList(){
	$.postJSON("/xmzhgl_xzb/app/index/loadZdxmssjdList", null, function(data) {
		if(data && data[0]=="Y"){
			var xmjdList = data[1];
			var list = [];
			if (xmjdList && xmjdList.length > 0 && xmjdList[0]!=null) {
				for (var i = 0; i < xmjdList.length; i++) {
					list.push('<tr><td><a href="/xmzhgl_xzb/show/app/appMain/main_gtt?xmdm='+xmjdList[i][0]+'&tid='+Math.round(Math.random()*1000000)+'">'+xmjdList[i][1]+'</a></td>');
					var jd = 0;
					if(xmjdList[i][2]){
						jd = xmjdList[i][2];
					}
					list.push('<td>'+jd+'%</td>');
				}
			}
			$("#zdxmjd_tbody").html(list.join(""));
		}else{
			alert(data[1]);
		}
	});
}

//加载首页重点项目展示模块
function loadZdxmzsList(){
	$.postJSON("/xmzhgl_xzb/app/index/loadZdxmzsList", null, function(data) {
		if(data && data[0]=="Y"){
			var xmjdList = data[1];
			var list = [];
			if (xmjdList && xmjdList.length > 0 && xmjdList[0]!=null) {
				for (var i = 0; i < xmjdList.length; i++) {
					list.push('<div><img style="width:40%;" src="/xmzhgl_xzb/app/xmzl/loadTp?tpid='+getStrNoNull(xmjdList[i][3])+'" >');
					list.push('<p><span>'+getStrNoNull(xmjdList[i][1])+'：'+getStrNoNull(xmjdList[i][2])+'</span>');
					list.push('<p class="more01"><a href="/xmzhgl_xzb/show/app/xmzl/pro_tw?xmdm='+xmjdList[i][0]+'&tid='+Math.round(Math.random()*1000000)+'">详情<i class="iconfont icon-youjiantou"></i></a></p>');
					list.push('</p></div>');
				}
			}
			$("#zdxmzs").html(list.join(""));
		}else{
			alert(data[1]);
		}
		//轮播切换初始化一定要放在数据加载完后,否则样式会出错
		slide();
	});
}

//首页轮播切换
function slide() {
	jQuery(".tzgg").slide({mainCell: "ul", autoPlay: true, effect: "leftMarquee", vis: 1, interTime: 50});
	jQuery(".banner").slide({mainCell: "ul", autoPlay: true});
	$(".zdzssm").slide({autoPage: true, effect: "left", autoPlay: false, vis: 1});
	$(".zdxmzs").slide({autoPage: true, effect: "left", autoPlay: false, vis: 1});
}

//园区动态数据加载
function showYqdt(){
	$.postJSON("/xmzhgl_xzb/xzbChartsAction/getChartsDatas",{"tjId":"yqdttj","ymqyDm":""},function(retData){
		if(retData[0]=="Y" && retData[1].data){
			var datas = retData[1].data;
			if(datas){
				for(var i=0;i<datas.length;i++){
					if(datas[i][0].indexOf("个数")>-1){
						$("#yqxm_dt").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
						continue;
					}
					if(datas[i][0].indexOf("总投资")>-1){
						$("#ztz_dt").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
						continue;
					}
					if(datas[i][0].indexOf("固定资产")>-1){
						$("#gdzc_dt").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
						continue;
					}
					if(datas[i][0].indexOf("招商引资")>-1){
						$("#zsyz_dt").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
						continue;
					}
					if(datas[i][0].indexOf("工业总产值")>-1){
						$("#gyzcz_dt").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
						continue;
					}
					if(datas[i][0].indexOf("重点企业")>-1){
						$("#zdqytz_dt").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
						continue;
					}
				}
			}
		}
	});
}

//加载统计图表
function showCharts(ymqydm,divId){
	$.postJSON("/xmzhgl_xzb/xzbChartsAction/getChartsDatas",{"ymqyDm":ymqydm},function(retData){
		if(retData[0]=="Y"){
			genChart(divId, retData);
		}
	});
}