//加载统计数据
$(function() {
    showCharts('qy_gnsczzBae');
    showCharts('qy_test');
    showCharts('qy_gyzczBae');
    showCharts('qy_xmtjBae');
    showCharts('qy_yqcylbTop5Bae');
    showYqdt();
});

//加载统计图表
function showCharts(tivID, dataId) {
    var qydm = tivID;
    if (dataId) {
        qydm = dataId;
    }
    $.postJSON("/xmzhgl_xzb/xzbChartsAction/getChartsDatas", { "ymqyDm": qydm }, function(retData) {
        if (retData[0] == "Y") {
            genChart(tivID, retData);
        }
    });
}

//园区动态数据加载
function showYqdt() {
    $.postJSON("/xmzhgl_xzb/xzbChartsAction/getChartsDatas", { "tjId": "yqdttj", "ymqyDm": "" }, function(retData) {
        if (retData[0] == "Y" && retData[1].data) {
            var datas = retData[1].data;
            if (datas) {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i][0].indexOf("个数") > -1) {
                        $("#yqxm_dt em").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
                        continue;
                    }
                    if (datas[i][0].indexOf("总投资") > -1) {
                        $("#ztz_dt em").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
                        continue;
                    }
                    if (datas[i][0].indexOf("固定资产") > -1) {
                        $("#gdzc_dt em").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
                        continue;
                    }
                    if (datas[i][0].indexOf("招商引资") > -1) {
                        $("#zsyz_dt em").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
                        continue;
                    }
                    if (datas[i][0].indexOf("工业总产值") > -1) {
                        $("#gyzcz_dt em").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
                        continue;
                    }
                    if (datas[i][0].indexOf("重点企业") > -1) {
                        $("#zdqytz_dt em").text(numberFormats.addChineseUnit(datas[i][1]) + datas[i][2]);
                        continue;
                    }
                }
            }
        }
    });
}

//加载重点项目展示
function loadZdxmzs() {
    $.postJSON("/xmzhgl_xzb/index/loadZdxmzsList", null, function(data) {
        if (data && data[0] == "Y") {
            var xmjdList = data[1];
            var list = [];
            if (xmjdList && xmjdList.length > 0 && xmjdList[0] != null) {
                for (var i = 0; i < xmjdList.length; i++) {
                    list.push('<li><img src="/xmzhgl_xzb/app/xmzl/loadTp?tpid=' + getStrNoNull(xmjdList[i][3]) + '" class="fleft"/>');
                    list.push('<p class="hidden-ellipsis"><span>' + getStrNoNull(xmjdList[i][1]) + '：' + getStrNoNull(xmjdList[i][2]) + '</span>');
                    list.push('</p><a href="/xmzhgl_xzb/show/xmzl/projectDetails?xmdm=' + xmjdList[i][0] + '&tid=' + Math.round(Math.random() * 1000000) + '&xmbz=zd">详情<i class="iconfont icon-youjiantou"></i></a></p></li>');
                }
            }
            $("#zdxmzs").html(list.join(""));
            //控制多行文本超出显示省略号
            setTextLength(".key-projects-con .bd ul li p");
        } else {
            alert(data[1]);
        }
        //轮播切换初始化一定要放在数据加载完后,否则样式会出错
        autoPlay(); // 轮播效果
    });
}

//加载重点项目实施进度
function loadZdxmssjd() {
    $.postJSON("/xmzhgl_xzb/index/loadZdxmssjd", null, function(data) {
        if (data && data[0] == "Y") {
            var list = data[1];
            var lis = [];
            if (list && list.length > 0 && list != null) {
                for (var i = 0; i < list.length; i++) {
                    lis.push('<li>');
                    lis.push('<span style="width:46%;"><a onclick="showGantt(\'' + getStrNoNull(list[i][0]) + '\')">' + getStrNoNull(list[i][1]) + '</a></span>');
                    var jd = 0;
                    if (list[i][2]) {
                        jd = list[i][2];
                    }
                    lis.push('<span style="width:30%;" class="bg"><i class="bg01" style="width:' + jd + '%;">&nbsp;</i></span>');
                    lis.push('<span style="width:10%;" class="text-center">' + jd + '%</span>');
                    lis.push('</li>');
                }
            }
            $("#zdxmssjdUl").html(lis.join(""));
        } else {
            alert(data[1]);
        }
        autoPlay();
    });
}