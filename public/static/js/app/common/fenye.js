/**
 * 分页专用脚本
 */
 
var fenyeListCount = 0;		//底部信息出现的序号总值
var currFenyeListCount = 0;	//当前底部信息序号

//设置当前显示所在次数
function setCurrCount(fenyeListCount){
	currFenyeListCount = fenyeListCount;
}

//给“每页显示数”隐藏域赋值
function setPagecount(){
	//我拿我自己的值
	$("#eachpagecount"+currFenyeListCount).val($("#eachpagecount"+currFenyeListCount).val());
	return true;
}

//改变每页显示数
function changeEachPageCount(fenyeListCount){
	setCurrCount(fenyeListCount);
	$("#currpage"+currFenyeListCount).val("1");
	fenyeGoto();
}

//翻页操作
function fenyeGoto(pagenum){
	setPagecount();
	if(pagenum!="" && pagenum !=null){
		$("#currpage"+currFenyeListCount).val(pagenum);
	}
}

//【跳转】操作
function goToPage(){
	var gotopageValue = $("#gotopage"+currFenyeListCount).val();
	if(gotopageValue.length==0){
		window.top.alert('消息',"请输入页数!",'warning');
	}else if(isNumber(gotopageValue)){
		var totalpage = $("#totalpage"+currFenyeListCount).val();
		var intpage = parseInt(gotopageValue,10);
		var inttotalpage = parseInt(totalpage,10);
		if(intpage>inttotalpage){
			window.top.alert('消息',"无此页,请重新输入！",'warning');
		}else if(intpage==0){
			window.top.alert('消息',"页码要大于零！",'warning');
		}else{
			$("#currpage"+currFenyeListCount).val(intpage);
			return true;
		}
	}else{
		window.top.alert('消息',"页码只能为数字！",'warning');
	}
	return false;
}

//获取分页底部信息
function getFenyeBottom(data,method,colspan){
	fenyeListCount = fenyeListCount + 1;
	setCurrCount(fenyeListCount);
	var lis = [];
	lis.push('<tr height="20"><td colspan="'+colspan+'" bgcolor="">');
	lis.push('<table class="bx22" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">');
	lis.push('<tr><td colspan="2"><div id="pagination" class="pagination"><ul><li><a id="test" href="javascript:setCurrCount('+fenyeListCount+');fenyeGoto(1);'+method+';" class="right-font08">首页</a></li>');
	lis.push('<li><a href="javascript:setCurrCount('+fenyeListCount+');fenyeGoto('+data.uppage+');'+method+';" class="right-font08">&lt;</a></li>');
	lis.push('<li><a class="right-font08">'+data.currpage+'</a></li>');
	lis.push('<li><a href="javascript:setCurrCount('+fenyeListCount+');fenyeGoto('+data.nextpage+');'+method+';" class="right-font08">&gt;</a></li>');
	lis.push('<li><a href="javascript:setCurrCount('+fenyeListCount+');fenyeGoto('+data.totalpage+');'+method+';" class="right-font08">末页</a></li></ul></div>');
	lis.push('</td></tr>');
	lis.push('<input type="hidden" value="'+data.currpage+'" id="currpage'+fenyeListCount+'" name="currpage'+fenyeListCount+'"/>');
	lis.push('<input type="hidden" value="'+data.totalrecords+'" id="totalrecords'+fenyeListCount+'" name="totalrecords'+fenyeListCount+'"/>');
	lis.push('<input type="hidden" value="'+data.totalpage+'" id="totalpage'+fenyeListCount+'" name="totalpage'+fenyeListCount+'"/>');
	lis.push('<input type="hidden" value="'+data.eachpagecount+'" id="eachpagecount'+fenyeListCount+'" name="eachpagecount'+fenyeListCount+'"/>');
	lis.push('<input type="hidden" value="'+fenyeListCount+'" id="fenyeListCount'+fenyeListCount+'" name="fenyeListCount'+fenyeListCount+'"/>');
	lis.push('</table>');
	lis.push('<script type="text/javascript">');
	lis.push('$("#pagecount'+fenyeListCount+'").val($("#eachpagecount'+fenyeListCount+'").val());');
	lis.push('function dogoto'+fenyeListCount+'(){');
	lis.push('if(goToPage()){');
	lis.push(method+';');
	lis.push('}');
	lis.push('}');
	lis.push('function gotoKeyEvnet'+fenyeListCount+'(event){');
	lis.push('if(event.keyCode=="13"){');
	lis.push('dogoto'+fenyeListCount+'();');
	lis.push('}');
	lis.push('}');
	lis.push('</script>');
	lis.push('</td>');
	lis.push('</tr>');
	return lis.join("");
}

//判断是否为数字
function isNumber(oNum){
 	if(!oNum) return false;
 	var strP=/^\d+(\d+)?$/;
	 if(!strP.test(oNum)) return false;
		try{
	 		if(parseFloat(oNum)!=oNum) return false;
		 }
 		catch(ex)
 		{
 		 return false;
		 }
	 return true;
}

//扩展JQuery函数
//参数：
//	e:URL地址，一般是action访问地址
//	d:JSON对象，作为访问URL的参数（可选参数）
//	f:回调函数（可选参数）
jQuery.extend(
	{postFyJSON:function(e,d,f)
		{
			if(e.indexOf("?")>=0){
				e = e + "&znjttid="+Math.round(Math.random()*1000000);
			}else{
				e = e + "?znjttid="+Math.round(Math.random()*1000000);
			}
			//定义分页参数Json对象
			var fy = {
					"currpage":$("#currpage"+currFenyeListCount).val(),
					"totalrecords":$("#totalrecords"+currFenyeListCount).val(),
					"totalpage":$("#totalpage"+currFenyeListCount).val(),
					"eachpagecount":$("#eachpagecount"+currFenyeListCount).val()
	 			};
			//如果第二个参数d存在，则重新拼接
			if(f){
				//将业务参数Json和分页参数Json拼接成一个Json对象
				var strD = getMyJsonString(d);
				var strfy = getMyJsonString(fy);
				strD = strD.substring(1,strD.length-1);
				strfy = strfy.substring(1,strfy.length-1);
				var temp = '';
				if(strD.length>0){
					if(strfy.length>0){
						temp = "{"+strD+","+strfy+"}";
					}else{
						temp = "{"+strD+"}";
					}
				}else if(strfy.length>0){
					temp = "{"+strfy+"}";
				}else{
					temp = "{}";
				}
				d = jQuery.parseJSON(temp);
				//执行post请求
				jQuery.post(e,d,f,"json")
			}
			//如果第二个参数d不存在，直接使用分页参数Json作第二参数
			else{
				//执行post请求
				jQuery.post(e,fy,d,"json")
			}
		}
	}
); 