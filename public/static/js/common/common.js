/**
 * 鼠标移动到大模块展开模块的子菜单
 */
function openChildren(){
	$(".nav").slide({
		type:"menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
		titCell:".nLi", //鼠标触发对象
		targetCell:".sub", //titCell里面包含的要显示/消失的对象
		effect:"slideDown", //targetCell下拉效果
		delayTime:300 , //效果时间
		triggerTime:0, //鼠标延迟触发时间（默认150）
		defaultPlay:false,
		returnDefault:true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
	});	
}

//控制多行文本超出显示省略号
function setTextLength(element){
	//控制多行文本超出显示省略号
	$(element).each(function(i){
		var divH = $(this).height();
		var $p = $(this).find("span");
		while ($p.outerHeight() > divH) {
			$p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
		};
	});
}

//设置默认选中模块的样式
function setMkClass(){
	var temp=document.URL;
	if (temp.indexOf('show/xmzl/projectOverviewMore')>-1)
		document.getElementById('nav_sy').className='hover nLi';
	else if (temp.indexOf('show/xmzl/projectProgressMore')>-1)
		document.getElementById('nav_sy').className='hover nLi';
	else if (temp.indexOf('show/xmzl/')>-1)
		document.getElementById('xmzl').className='hover nLi';
	else if (temp.indexOf('show/zsrz/')>-1)
		document.getElementById('zsrz').className='hover nLi';
	else if (temp.indexOf('show/zjsb/')>-1)
		document.getElementById('zjsb').className='hover nLi';
	else if (temp.indexOf('show/xmgl/')>-1)
		document.getElementById('xmgl').className='hover nLi';
	else if (temp.indexOf('show/xmxc/')>-1)
		document.getElementById('xmxc').className='hover nLi';
	else if (temp.indexOf('show/tjfx/')>-1)
		document.getElementById('tjfx').className='hover nLi';
	else if (temp.indexOf('show/zqtx/')>-1)
		document.getElementById('zqtx').className='hover nLi';
	else if (temp.indexOf('show/index/')>-1)
		document.getElementById('nav_sy').className='hover nLi';
}

//获取url参数
function request(paras)
{ 
  var url = location.href; 
  var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
  var paraObj = {} 
  for (i=0; j=paraString[i]; i++){ 
 		 paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
  } 
  var returnValue = paraObj[paras.toLowerCase()]; 
  if(typeof(returnValue)=="undefined"){ 
 		 return ""; 
  }else{ 
 		 return returnValue; 
  } 
}

//格式化日期
function formatJsonDate(date) {
	if(date==null || date=="") {
		return "";
	}
	var date = new Date(date);
 var seperator = "-";//年月日间的间隔
 var year = date.getFullYear();
 var month = date.getMonth() + 1;
 var strDate = date.getDate();
 
 var hour = date.getHours();
 var minute = date.getMinutes();
 var second = date.getSeconds();
 
 if (month >= 1 && month <= 9) {
     month = "0" + month;//如果月份位于1至9月内，则前面加0
 }
 if (strDate >= 0 && strDate <= 9) {
     strDate = "0" + strDate;//如果日为1至9日内，则前面加0
 }
 if (hour>=0 && hour <=9){
 	hour = "0" + hour
 }
 if (minute>=0 && minute <=9){
 	minute = "0" + minute
 }
 if (second>=0 && second <=9){
 	second = "0" + second
 }
 var currentdate = year + seperator + month + seperator + strDate + " " + hour + ":" + minute + ":" + second;
 return  currentdate;
}


//格式化日期(年月日)
function formatJsonDateYMD(date) {
 if (date != null && date != "") {
     var month = (date.month + 1) + "";
     var day = date.date + "";
     if (month.length == 1) {
         month = "0" + month;
     }
     if (day.length == 1) {
         day = "0" + day;
     }
     return (date.year + 1900) + "-" + month + "-" + day;
 }
 return "";
}

//把时间戳转为普通的日期格式（yy-MM-dd）
function getFormatDate(dates) {
	if(dates){
		if(dates=="null"){
			return "";
		}else{
			var date = new Date(dates);
		    var seperator = "-";//年月日间的间隔
		    var year = date.getFullYear();
		    var month = date.getMonth() + 1;
		    var strDate = date.getDate();
		    
		    if (month >= 1 && month <= 9) {
		        month = "0" + month;//如果月份位于1至9月内，则前面加0
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;//如果日为1至9日内，则前面加0
		    }
		    var currentdate = year + seperator + month + seperator + strDate;
		    return  currentdate;
		}
	}else{
		return "";
	}
}


//得到不为空的字符串
function getStrNoNull(str){
	if(str){
		if(str=="null"){
			str = "";
		}
		return str;
	}else{
		return "";
	}
}

/**
* 获取复选框的值，多个复选框时用分隔符相连
*/
function getCheckboxValues(name,splitStr){
	var strRet = "";
	if(splitStr==null){splitStr=",";}
	var eles = document.getElementsByName(name);
	if(eles && eles.length>0){
		for(var i=0;i<eles.length;i++){
			if(eles[i].checked==true){
				var valStr = eles[i].value;
				if(strRet.length==0){
					strRet = valStr;
				}else{
					strRet = strRet + splitStr + valStr;
				}
			}
		}
	}
	return strRet;
}

/**
 * 加载未读消息提醒数量
 */
function loadXxtxCount(){
	$.postJSON("/xmzhgl_xzb/xxtx/getXxtxCount", {
		
	}, function(data) {
		if (data && data[0] == "Y") {
			$("#xxnum").html(data[1]);
			if(data[1]!=null && data[1]>0){
				$("#xxnum2").removeClass("xiaoxi1");
				$("#xxnum2").removeClass("xiaoxi");
				$("#xxnum2").addClass("xiaoxi");//添加闪动样式
			}else{
				$("#xxnum2").removeClass("xiaoxi1");
				$("#xxnum2").removeClass("xiaoxi");
				$("#xxnum2").addClass("xiaoxi1");//取消闪动样式
			}
		
		} else {
			alert(data[1]);		
		}
				
	});

}
/**
 * 获取登录用户名称
 */
function loadUsername(){
	$.postJSON("/xmzhgl_xzb/index/getUsername", {
		
	}, function(data) {
		if (data && data[0] == "Y") {
			$("#username").html(data[1]);
		} else {
			alert(data[1]);		
		}
				
	});
}

/** 
 * 为数字加上单位：万或亿 
 * 例如： 
 * 1000.01 => 1000.01 
 * 10000 => 1万 
 * 99000 => 9.9万 
 * 566000 => 56.6万 
 * 5660000 => 566万 
 * 44440000 => 4444万 
 * 11111000 => 1111.1万 
 * 444400000 => 4.44亿 
 * 40000000,00000000,00000000 => 4000万亿亿 
 * 4,00000000,00000000,00000000 => 4亿亿亿 
 * 
 * @param {number} number 输入数字. 
 * @param {number} decimalDigit 小数点后最多位数，默认为2 
 * @return {string} 加上单位后的数字 
 */ 
var numberFormats = {
		addWan: function(integer, number, mutiple, decimalDigit) {
		    var me = this;
		    var digit = me.getDigit(integer); 
		    if (digit > 3) { 
		        var remainder = digit % 8; 
		            if (remainder >= 5) { // ‘十万’、‘百万’、‘千万’显示为‘万’ 
		            remainder = 4; 
		        } 
		        return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万'; 
		    } else { 
		        return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit); 
		    } 
		}, 
		getDigit: function(integer) { 
		    var digit = -1; 
		    while (integer >= 1) { 
		        digit++; 
		        integer = integer / 10; 
		    } 
		    return digit; 
		},
		addChineseUnit: function(number, decimalDigit) {
		    var me = this;
		    decimalDigit = decimalDigit == null ? 2 : decimalDigit; 
		    var integer = Math.floor(number); 
		    var digit = me.getDigit(integer); 
		    // ['个', '十', '百', '千', '万', '十万', '百万', '千万']; 
		    var unit = []; 
		    if (digit > 3) { 
		        var multiple = Math.floor(digit / 8); 
		        if (multiple >= 1) { 
		            var tmp = Math.round(integer / Math.pow(10, 8 * multiple)); 
		            unit.push(me.addWan(tmp, number, 8 * multiple, decimalDigit)); 
		            for (var i = 0; i < multiple; i++) { 
		                unit.push('亿'); 
		            } 
		            return unit.join(''); 
		        } else { 
		            return me.addWan(integer, number, 0, decimalDigit); 
		        } 
		    } else { 
		        return number; 
		    }
		}
};

/**
 * 通过预警星级代码返回★数量
 */
function getYjxjShow(yjxj_dm){
	if(yjxj_dm&&yjxj_dm!=""){
		var yjxj = "";
		for(var i=0;i<yjxj_dm;i++){
			yjxj+="★";
		}
		return yjxj;
	}
	return "";
}

var unitCN = ["京","","","","万兆","","","","兆","","","","万亿","","","","亿","","","","万","","","",""];

/**
* 把一个double数值转换为带有中文单位的字符串
* @author 雷日初
* @date 2020年1月17日 上午09:56:52
* @param num 待转换的double数值
* @param digit 添加计量单位后要保留的最长小数位数（注：小于一万的数值，原小数部分将全部保留）
* 如：10000.1234转换得“1万”，9999.1234转换得“9999.1234”
* @return 带中文“兆/亿/万”计量单位的字符串,在不超过指定保留的最长小数位数的情况下，再截去结尾连续为0的小数位
*/
function formartNumByCnUnit( num,  digit){
	if(!num){
		return "0";
	}
	if(typeof(num)=="string"){
		num = Number(num);
		if(isNaN(num)){
		    return "0";
		}
	}
	if(!digit || digit<0){
		digit = 2;
	}
	var numberStr = (num + "").split(".");
	var ends = numberStr.length>1 ? numberStr[1].split("") : [];//原始数值的小数部分
	var splits = numberStr[0].split("");//原始数值的整数部分
	for(var i=ends.length-1;i>=0;i--){//清除连续为0的小数位
		if(ends[i] != "0"){
			break;
		}
		ends[i] = "";
	}
	ends = ends.join("");
	var retStr = [];
	var unit = "";
	for(var i=0;i<splits.length;i++){
		if(splits.length>4 && (unitCN.length-splits.length+i)%4==0 && unit.length==0){
			unit = unitCN[unitCN.length-splits.length+i];
			retStr.push(splits[i]);
			var others = (splits.slice(i+1)).join("").substr(0, digit+1);
			if(Number(others)>0){
				if(others.length>0){
					if(others.length > digit){
						var tmps = (Math.round(Number(others)/10))*Math.pow(10,-digit);
						others = (tmps + "").split(".")[1]?(tmps + "").split(".")[1]:"";
						if(tmps >= 1){
							var tmpInt = Number(retStr.join("")) + 1;
							if(tmpInt==10000){
								retStr = ["1"];
								unit = unitCN[unitCN.length-splits.length+i-4];
							}else{
								retStr = [tmpInt+""];
							}
						}
					}
				}
				while(others.endsWith("0")){
					others = others.substring(0, others.length-1);
				}
				others = others.length == 0 ? "" : "." + others;
			}else{
				others = "";
			}
			retStr.push(others + unit);
			break;
		}else{
			retStr.push(splits[i]);
		}
	}
	if(unit.length==0 && ends.length>0){
		retStr.push("." + ends);
	}
	return retStr.join("");
}