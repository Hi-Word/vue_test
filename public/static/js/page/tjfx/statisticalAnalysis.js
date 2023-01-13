$(function() {
    $(".contrast-of-investment .con .hd li").on("click", function(e) {
        $(this).addClass("on").siblings("li").removeClass();
        $(".contrast-of-investment .con .bd > div").eq($(this).index()).show().siblings("div").hide();
    });

    showCharts("qy_czBar"); //加载产值柱形图
    showCharts("qy_test"); //加载十四五规划产值柱形图
    showCharts("qy_jdxmtjPie"); //加载阶段项目统计饼图
    showCharts("qy_tzgmPie"); //加载投资规模饼图
    showCharts("qy_yqcylbtzezb"); //加载园区产业类别投资额占比
    openChildren(); //头部菜单效果
    setMkClass(); //设置模块选中
    //消息提醒
    //$(".message-reminder").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:3,interTime:50});
    //$(".key-projects-con").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:1});
    document.getElementById("ydTab").click(); //加载投资额对比月度图表
    $(".iconfont.icon-search").parent().css("z-index", "1"); //把图表右上角的“放大”按钮上浮到图表之上，避免被图表遮挡影响点击
});

//投资额对比统计图表切换
function displayDiv(ids) {
    if (ids == "1") {
        $("#tzedbYd").show();
        $("#tzedbJd").hide();
        $("#tzedbNd").hide();
        showCharts("qy_tzedbYd");
    } else if (ids == "2") {
        $("#tzedbYd").hide();
        $("#tzedbJd").show();
        $("#tzedbNd").hide();
        showCharts("qy_tzedbJd");
    } else if (ids == "3") {
        $("#tzedbYd").hide();
        $("#tzedbJd").hide();
        $("#tzedbNd").show();
        showCharts("qy_tzedbNd");
    }
}

//加载统计图表数据
function showCharts(divID, ymqyId) {
    var qydm = divID;
    if (ymqyId) {
        qydm = ymqyId;
    }
    $.postJSON("/xmzhgl_xzb/xzbChartsAction/getChartsDatas", { "ymqyDm": qydm }, function(retData) {
        if (retData[0] == "Y") {
            genChart(divID, retData);
        }
    });
}

//显示弹出窗：投资完成度分析
function showTzwcdfx(divId) {
    var vh = $(window).height() - 130; //浏览器BODY可见区域（不包括未滚动出来部分）的高度
    $(".analysis-window").find(".p20.cf").empty().append("<div style='text-align:center;height:" + vh + "px'><h2>正在统计分析……</h2></div>");
    $.postJSON("/xmzhgl_xzb/xzbChartsAction/getChartsDatas", { "ymqyDm": divId }, function(retData) {
        if (retData[0] == "Y") {
            var nowYear = (new Date()).getFullYear();
            var tabData = retData[1].data;
            var tbstr = "<div style='height:" + vh + "px'>";
            tbstr += "<table class='table01'>";
            tbstr += "<tr><td class='text-center' width='5%' style='padding:1px 1px !important;'></td><td width='46%' style='padding:1px 1px !important;'></td><td class='text-center' width='10%' style='padding:1px 1px !important;'></td><td class='text-center' width='15%' style='padding:1px 1px !important;'></td><td class='text-center' width='10%' style='padding:1px 1px !important;'></td><td class='text-center' width='10%' style='padding:1px 1px !important;'></td><td class='text-center' width='6%' style='padding:1px 1px !important;'></td></tr>";
            for (var i = 0; i < tabData.length; i++) {
                tbstr += "<tr><td class='text-center'>" + (i + 1) + "</td>";
                for (var j = 0; j < tabData[i].length; j++) {
                    tbstr += "<td";
                    if (j > 0) {
                        tbstr += " class='text-center'";
                    }
                    tbstr += ">" + getStrNoNull(tabData[i][j]) + "</td>";
                }
                tbstr += "</tr>";
            }
            tbstr += "</table></div>";
            $('.analysis-window .p20.cf').empty().append(tbstr);
            $('.analysis-window .p20.cf').perfectScrollbar(); //使表格可上下滚动
        }
    });
    show('.analysis-window');
}