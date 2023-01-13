$(document).ready(function(){
    
});

/**
 * 改变环节内容显示和隐藏
 */
function changeFJ (arg) {
    for(var i=0;i<8;i++){
       $("#fj"+i).css("display","none");  
    }
    $("#fj"+arg).css("display","block");  
}

$(function(){
	var xmdm = request("xmdm");
	loadXmjbxxByXmdm(xmdm);
	loadXmjsByXmdm(xmdm);
	$('#xmrz').attr('src','/xmzhgl_xzb/show/app/xmzl/xmzl_date?xmdm='+xmdm);
});

/**
 * 通过项目代码查询项目基本信息
 */
function loadXmjbxxByXmdm(xmdm){
	$.postJSON("/xmzhgl_xzb/app/xmzl/loadXmjbxxByXmdm",{
		"xmdm":xmdm
	},function(data){
		if(data && data[0]=="Y"){
			//获得项目基本信息
			var xmjbxx = data[1][0];
			$('#xmmc').text(getStrNoNull(xmjbxx.xmmc));
			$('#ztz').text(getMoneyNumber(getStrNoNull(xmjbxx.xmztz)));
			$('#zdmj').text(getStrNoNull(xmjbxx.zdmj));
			$('#kgsj').text(getFormatDateNew(xmjbxx.sjkgsj));
			$('#xmwcd').text(getStrNoNull(xmjbxx.xmssjd));
			$('#ywctz').text(getMoneyNumber(getStrNoNull(xmjbxx.ywctz)));
			$('#jsq').text(getJsq(getStrNoNull(xmjbxx.jsqq),getStrNoNull(xmjbxx.jsqz)));
			$('#xmjs').html(getStrNoNull(xmjbxx.xmjs));
			loadXmjdByXmdm(xmdm,xmjbxx.xmgcId);
		}
	});
}

/**
 * 查询项目介绍信息
 */
function loadXmjsByXmdm(xmdm){
	$.postJSON("/xmzhgl_xzb/app/xmzl/loadXmxqxxByXmdm",{
		"xmdm":xmdm
	},function(data){
		if(data && data[0]=="Y"){
			//获得项目工程详情
			var xmgcxqList =  data[1];
			if (xmgcxqList && xmgcxqList.length > 0) {
				var lis = [];
				var index = 1;
				for(var i=0;i<xmgcxqList.length;i++){
					lis.push('<tr>');
					lis.push('<td width="10%" class="text-center">'+index+'</td>');
					lis.push('<td width="15%" class="text-center">'+getStrNoNull(xmgcxqList[i][2])+'</td>');
					lis.push('<td colspan="5">'+getStrNoNull(xmgcxqList[i][1])+'</td></tr>');
					index++;
				}
				$("#xmgcxq").html(lis.join(""));
			}
		}
	});
}

/**
 * 查询项目进度信息
 */
function loadXmjdByXmdm(xmdm,xmgc_id){
	$.postJSON("/xmzhgl_xzb/app/xmzl/loadXmgcByXmdm",{
		"xmdm":xmdm
	},function(data){
		if(data && data[0]=="Y"){
			var xmgcList =  data[1];
			if (xmgcList && xmgcList.length > 0) {
				
				var lis = []; //进度信息的全部
				var lis2 = []; //项目环节部分
				var index = 1; //循环项目过程的序号
				//true表示等于项目过程或者项目过程之前  false表示在项目过程之后
				var flag = true;
				lis.push('<div class="lf_d"></div>');
				//循环遍历项目过程
				for(var i=0;i<xmgcList.length;i++){
					if(i!=0){
						lis.push('<div class="lf_d" style="top:'+((i-1)*80+10)+'px" ></div>');
						if(flag==true){
							lis.push('<div class="lf_g" style="top:'+((i-1)*80+10)+'px" ></div>');
						}
					}
					if(xmgc_id!=xmgcList[i].xmgc_id){
						if(flag){
							lis.push('<div class="quan bg_g" style="top:'+(i*80)+'px" onclick="changeFJ('+index+')"><p>'+getStrNoNull(xmgcList[i].xmgc_mc).substring(0,1)+'</p></div>');
						}else{
							lis.push('<div class="quan bg_h" style="top:'+(i*80)+'px" onclick="changeFJ('+index+')"><p>'+getStrNoNull(xmgcList[i].xmgc_mc).substring(0,1)+'</p></div>');
						}
						lis2.push('<div class="fj_con" id="fj'+index+'" style="display: none">');
					}else{
						lis.push('<div class="quan bg_c" style="top:'+(i*80)+'px" onclick="changeFJ('+index+')"><p>'+getStrNoNull(xmgcList[i].xmgc_mc).substring(0,1)+'</p></div>');
						lis2.push('<div class="fj_con" id="fj'+index+'" style="display: block">');
						flag = false;
					}
					lis2.push('<div class="fj_tit title01"><span>'+getStrNoNull(xmgcList[i].xmgc_mc)+'</span></div>');
					lis2.push('<div class="con">');
					lis2.push('<div class="con p15">');
					lis2.push('<table class="table01"><tr>');
					lis2.push('<th width="7%" class="text-center">序号</th>');
					lis2.push('<th width="20%" class="text-center">环节名称</th>');
					lis2.push('<th colspan="5" class="text-center">内容</th>');
					lis2.push('</tr>');
					var xhjhList = eval(xmgcList[i].xmhjList);
					
					if (xhjhList && xhjhList.length > 0) {
						var indexXhjh = 1;
						//循环遍历项目计划
						for(var j=0;j<xhjhList.length;j++){
							lis2.push('<tr><td width="7%" class="text-center">'+indexXhjh+'</td>');
							lis2.push('<td width="20%" class="text-center">'+getStrNoNull(xhjhList[j].xmhj_mc)+'</td>');
							lis2.push('<td colspan="5">'+getStrNoNull(xhjhList[j].xmhjnr)+'</td></tr>');
							indexXhjh++;
						}
					}
					lis2.push('</table></div></div></div>');
					index++;
				}
				lis.push(lis2.join(""));//直接把lis2拼接到lis显示到页面上
				$("#xmjd").html(lis.join(""));
			}
		}
	});
}

/**
 * 格式化金额 万元转换为亿元
 */
function getMoneyNumber(money){
	if(money&&money!=""){
		if((money/10000)>1){
			return (money/10000).toFixed(2)+"亿";
		}else{
			return money.toFixed(2)+"万";
		}
	}
	return "";
}

//格式化建设期 date1：建设期起 date2：建设期止
function getJsq(date1,date2) {
	if(date1&&date2&&date1!=null&&date1!=""&&date2!=null&&date2!=""){
		var data = new Date(date2) - new Date(date1);
		var day = parseInt(data / (1000 * 60 * 60 * 24));
		var year = Math.ceil(day/365);
		return  year+"年";
	}else{
		return "";
	}
}

//把时间戳转为普通的日期格式（yy年MM月）
function getFormatDateNew(dates) {
	if(dates){
		if(dates=="null"){
			return "";
		}else{
			var date = new Date(dates);
		    var year = date.getFullYear();
		    var month = date.getMonth() + 1;
		    
		    if (month >= 1 && month <= 9) {
		        month = "0" + month;//如果月份位于1至9月内，则前面加0
		    }
		    var currentdate = year + "年" + month +"月";
		    return  currentdate;
		}
	}else{
		return "";
	}
}

