var xmdm;
var xmbz;
var xmmlBox; // 页面左侧 项目目录div元素

$(function() {
    xmdm = request("xmdm");
    xmbz = request("xmbz");
    isFrom(xmbz);
    $('#date').html('<iframe  frameborder="0" width="100%" height="100%"  src="/xmzhgl_xzb/show/xmzl/projectDate?xmdm=' + xmdm + '&xmbz=' + xmbz + '&tid=' + Math.round(Math.random() * 1000000) + '"></iframe>');
    $('#cf_btn').html('<a class="flow-chart" style="margin-right:0.4em" onClick="show(\'.flow-chart-window\')"><i class="iconfont icon-gongzuoliuchengtu"></i>工程流程图</a><a href="javascript:void(0);" class="flow-chart" onClick="showGantt(\'' + xmdm + '\')"><i class="iconfont icon-gongzuoliuchengtu"></i>甘特图</a>');
    loadXmjbxxByXmdm(xmdm);
    loadGcxqByXmdm(xmdm);
    loadXmmlByXmdm(xmdm);
});

/**
 * 判断来自何处，动态显示面包屑
 */
function isFrom(xmbz) {
    switch (xmbz) {
        case 'zl':
            $('#laiyuan').html('<a href="/xmzhgl_xzb/show/xmzl/projectOverview?tid=' + Math.round(Math.random() * 1000000) + '">项目总览</a>');
            break;
        case 'zd':
            $('#laiyuan').html('<a href="/xmzhgl_xzb/show/xmzl/projectOverviewMore?tid=' + Math.round(Math.random() * 1000000) + '">重点项目列表</a>');
            break;
        case 'jd':
            $('#laiyuan').html('<a href="/xmzhgl_xzb/show/xmgl/xmjieduan/projectManagement?tid=' + Math.round(Math.random() * 1000000) + '">项目阶段</a>');
            break;
        default:
            $('#laiyuan').html('<a href="/xmzhgl_xzb/show/xmzl/projectOverview?tid=' + Math.round(Math.random() * 1000000) + '">项目总览</a>');
            break;
    }
}

/**
 * 改变项目过程控制项目环节显示和隐藏
 */
function changeFJ(arg) {
    for (var i = 0; i < 8; i++) {
        $("#fj" + i).css("display", "none");
    }
    $("#fj" + arg).css("display", "block");
}

function initProjetDetails() {
    //项目阶段流程节点切换
    jQuery(".engineering-profile").slide({ trigger: "click" });
    //项目介绍  滚动条
    $('.engineering-profile .ov,.project-introduction .con,.window_main .ov,#xmml').perfectScrollbar();
    //头部菜单效果
    openChildren();
    setMkClass(); //设置模块选中
    //项目目录效果控制
    $(".project-details-left").slide({
        titCell: "h3", //鼠标触发对象
        targetCell: "ul", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
        effect: "slideDown", //targetCell下拉效果
        trigger: "click",
        delayTime: 300, //效果时间
        triggerTime: 150, //鼠标延迟触发时间（默认150）
        defaultPlay: true, //默认是否执行效果（默认true）
        returnDefault: false //鼠标从.sideMen移走后返回默认状态（默认false）
    });
    //项目现场轮播
    $(".scene-pictures-con").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "left", autoPlay: true, vis: 1 });
}

/**
 * 查询项目基本信息
 */
function loadXmjbxxByXmdm(xmdm) {
    $.postJSON("/xmzhgl_xzb/xmzl/loadXmjbxxByXmdm", {
        "xmdm": xmdm
    }, function(data) {
        if (data && data[0] == "Y") {
            var xmjbxx = data[1][0];
            $('#xmmc').text(getStrNoNull(xmjbxx.xmmc));
            $('#ztz').text(getMoneyNumber(getStrNoNull(xmjbxx.xmztz)));
            $('#zdmj').text(getStrNoNull(xmjbxx.zdmj));
            $('#kgsj').text(getFormatDateNew(xmjbxx.sjkgsj));
            $('#xmwcd').text(getStrNoNull(xmjbxx.xmssjd));
            $('#ywctz').text(getMoneyNumber(getStrNoNull(xmjbxx.ywctz)));
            $('#jsq').text(getJsq(getStrNoNull(xmjbxx.jsqq), getStrNoNull(xmjbxx.jsqz)));
            $('#xmjs').html(getStrNoNull(xmjbxx.xmjs));
            loadXmgcByXmdm(xmdm, xmjbxx.xmgcId);
        }
    });
}

/**
 * 查询项目目录
 */
function loadXmmlByXmdm(xmdm) {
    $.postJSON("/xmzhgl_xzb/xmzl/loadXmml", {}, function(data) {
        if (data && data[0] == "Y") {
            var xmxxModelList = data[1];
            if (xmxxModelList && xmxxModelList.length > 0) {
                var lis = []; //存放项目目录全部的列表
                //遍历父项目列表
                for (var i = 0; i < xmxxModelList.length; i++) {
                    var xmxxModel = xmxxModelList[i];
                    var lis2 = []; //存放ui底下的li的列表
                    var flag = false; //true表示在此父项目下 false表示不是
                    var xmxxModelListNew = xmxxModel.xmxxModel;
                    if (xmxxModelListNew && xmxxModelListNew.length > 0) {
                        //遍历子项目列表
                        lis2 = [];
                        for (var j = 0; j < xmxxModelListNew.length; j++) {
                            var xmxxModelNew = xmxxModelListNew[j];
                            if (xmdm == xmxxModelNew.xmdm) { //如果当前页面的项目代码等于子项目的项目代码
                                flag = true;
                            }
                            lis2.push('<li><a href="javascript:void(0);" onclick="xmmlOnclick(\'' + xmxxModelNew.xmdm + '\')">' + xmxxModelNew.xmmc + '</a></li>');
                        }
                    }
                    lis.push('<h3 class="' + getOnClass(xmdm, xmxxModel.xmdm, flag) + '"><i class="iconfont icon-xiangshang"></i><i class="iconfont icon-xiangxia"></i>');
                    lis.push('<a href="javascript:void(0);" onclick="xmmlOnclick(\'' + xmxxModel.xmdm + '\')">' + xmxxModel.xmmc + '</a></h3>');
                    lis.push('<ul>');
                    lis.push(lis2.join(""));
                    lis.push('</ul>');
                }
                $('#xmml').html(lis.join(""));
                scrollToSelected();
            }
        }
    });
}

/**
 * 左侧项目目录渲染完后，滚动到已选中的项目位置
 */
function scrollToSelected() {
    xmmlBox = $('#xmml'); // 目录盒子box
    var onH3 = $('#xmml .on'); // 选中的item
    var boxScrollVal = sessionStorage.getItem("xmml_scrollTop") ? parseInt(sessionStorage.getItem("xmml_scrollTop")) : 0; // 获取保存的scorllTop值
    var itemScrollVal = onH3.offset().top - xmmlBox.offset().top; // 选中的item在目录盒子里的滚动值
    var boxHeight = xmmlBox[0].offsetHeight; // 获取 目录盒子的 高度。

    if (itemScrollVal < boxScrollVal || itemScrollVal > boxScrollVal + boxHeight) { // 如果选中的item不在 目录盒子box 的范围内，则scroll到item所在位置
        xmmlBox.animate({ scrollTop: itemScrollVal }, 0);
    } else { // 选中的item 在 目录盒子box 的范围内，保持滚动位置不变
        xmmlBox.animate({ scrollTop: boxScrollVal }, 0);
    }
}

/**
 * 项目目录点击事件
 */
function xmmlOnclick(xmdm) {
    sessionStorage.setItem("xmml_scrollTop", xmmlBox.scrollTop()); // 使用sessionStorage记录下此时项目目录盒子的滚动条位置
    window.location.href = "/xmzhgl_xzb/show/xmzl/projectDetails?xmdm=" + xmdm + "&xmbz=" + xmbz + "&tid=" + Math.round(Math.random() * 1000000);
}

/**
 * 查询工程详情信息
 */
function loadGcxqByXmdm(xmdm) {
    $.postJSON("/xmzhgl_xzb/xmzl/loadGcxqByXmdm", {
        "xmdm": xmdm
    }, function(data) {
        if (data && data[0] == "Y") {
            //获得项目工程详情
            var xmgcxqList = data[1];
            if (xmgcxqList && xmgcxqList.length > 0) {
                var lis = [];
                var index = 1;
                for (var i = 0; i < xmgcxqList.length; i++) {
                    lis.push('<tr>');
                    lis.push('<td width="10%" class="text-center">' + index + '</td>');
                    lis.push('<td width="15%" class="text-center">' + getStrNoNull(xmgcxqList[i][2]) + '</td>');
                    lis.push('<td colspan="5">' + getStrNoNull(xmgcxqList[i][1]) + '</td></tr>');
                    index++;
                }
                $("#gcxq").html(lis.join(""));
            }
        }
    });
}

/**
 * 查询项目过程信息
 */
function loadXmgcByXmdm(xmdm, xmgc_id) {
    $.postJSON("/xmzhgl_xzb/xmzl/loadXmgcByXmdm", {
        "xmdm": xmdm
    }, function(data) {
        if (data && data[0] == "Y") {
            var xmgcList = data[1];
            if (xmgcList && xmgcList.length > 0) {
                var lis = []; //进度信息的全部
                var lis2 = []; //项目环节部分
                var index = 1; //循环项目过程的序号
                //true表示等于项目过程或者项目过程之前  false表示在项目过程之后
                var flag = true;
                lis.push('<div class="hd" style="margin: 20px;padding-left: 100px;width: 100%;height:80px;">');
                //循环遍历项目过程
                for (var i = 0; i < xmgcList.length; i++) {

                    if (i != 0) {
                        lis.push('<span style="width: 12%;" class="' + getLineClass(flag) + '"></span>');
                    }
                    if (xmgc_id != xmgcList[i].xmgc_id) {
                        lis.push('<li onclick="changeFJ(' + index + ')"><i class="' + getIClass(flag) + '"></i></br><a>' + getStrNoNull(xmgcList[i].xmgc_mc) + '</a></li>');
                        lis2.push('<div class="con p15" id="fj' + index + '" style="display: none" >');
                    } else {
                        lis.push('<li onclick="changeFJ(' + index + ')"><i class="on"></i></br><a>' + getStrNoNull(xmgcList[i].xmgc_mc) + '</a></li>');
                        lis2.push('<div class="con p15" id="fj' + index + '" style="display: block" >');
                        flag = false;
                    }
                    var xhjhList = xmgcList[i].xmhjList;
                    lis2.push('<table class="table01"><tr>')
                    lis2.push('<th width="7%" class="text-center">序号</th>');
                    lis2.push('<th width="20%" class="text-center">' + xmgcList[i].xmgc_mc + '</th>');
                    lis2.push('<th colspan="5" class="text-center">内容</th>');
                    lis2.push('</tr></table><div class="ov"><table class="table01">');
                    if (xhjhList && xhjhList.length > 0) {
                        var indexXhjh = 1;
                        //循环遍历项目计划
                        for (var j = 0; j < xhjhList.length; j++) {
                            lis2.push('<tr><td width="7%" class="text-center">' + indexXhjh + '</td>');
                            lis2.push('<td width="20%" class="text-center">' + getStrNoNull(xhjhList[j].xmhj_mc) + '</td>');
                            lis2.push('<td colspan="5">' + getStrNoNull(xhjhList[j].xmhjnr) + '</td></tr>');
                            indexXhjh++;
                        }
                    }
                    lis2.push('</table></div></div>');
                    index++;
                }
                lis.push('</div>');
                lis.push(lis2.join("")); //直接把lis2拼接到lis显示到页面上
                $("#xmgc").html(lis.join(""));
            } else {
                $("#xmgc").html('<h2>暂无项目过程记录</h2>');
            }
        }
    });
}

//打开甘特图
function showGantt(xmdm) {
    window.location.href = '/xmzhgl_xzb/show/xmgl/xmjindu/projectGantt?xmdm=' + xmdm + '&tid=' + Math.round(Math.random() * 1000000);
}

/**
 * 格式化on的class
 */
function getOnClass(xmdm, xmdmNew, flag) {
    if ((xmdm && xmdmNew && xmdm == xmdmNew) || flag == true) {
        return "on";
    } else {
        return "";
    }
}

/**
 * 格式化line的class
 */
function getLineClass(flag) {
    if (flag == true) {
        return 'line1';
    } else {
        return 'line3';
    }
}

/**
 * 格式化i的class
 */
function getIClass(flag) {
    if (flag == true) {
        return 'bg01';
    } else {
        return 'bg02';
    }
}

/**
 * 格式化金额 万元转换为亿元
 */
function getMoneyNumber(money) {
    if (money && money != "") {
        if ((money / 10000) > 1) {
            return (money / 10000).toFixed(2) + "亿";
        } else {
            return money.toFixed(2) + "万";
        }
    }
    return "";
}

//格式化建设期 date1：建设期起 date2：建设期止
function getJsq(date1, date2) {
    if (date1 && date2 && date1 != null && date1 != "" && date2 != null && date2 != "") {
        var data = new Date(date2) - new Date(date1);
        var day = parseInt(data / (1000 * 60 * 60 * 24));
        var year = Math.ceil(day / 365);
        return year + "年";
    } else {
        return "";
    }
}

//把时间戳转为普通的日期格式（yy年M月d日）
function getFormatDateNew(dates) {
    if (dates) {
        if (dates == "null") {
            return "";
        } else {
            var date = new Date(dates);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var currentdate = year + "年" + month + "月" + strDate + "日";
            return currentdate;
        }
    } else {
        return "";
    }
}