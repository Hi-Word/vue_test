$(function(){
		js();
	})		
	function js(){
		openChildren();
		initXxtxlxSelect();//加载消息提醒类型列表
		loadXxtxList();//加载消息提醒列表
		$(".messageList").slide({trigger:"click"});
		$('.messageList_content .ov').perfectScrollbar();
	}
/**
 * 初始化消息提醒类型下拉列表
 */
function initXxtxlxSelect(){
	$.postJSON("/xmzhgl_xzb/xxtx/listXxtxlx", {		
	}, function(data) {
		if (data && data[0] == "Y") {
			var list = data[1][0];
			var lis = [];
			lis.push('<option style="background:cadetblue;" value="">全部</option>');
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<option style="background:cadetblue;" value="'+list[i][0]+'">'+list[i][1]+'</option>');
				}
			}
			$("#txlb").html(lis.join(""));
		} else {
			alert(data[1]);		
		}
				
	});
}
/**
 * 加载消息提醒列表
 */
function loadXxtxList(){
	var txlb = $("#txlb").val();//提醒类别
	var ydbz = $("#ydbz").val();//阅读标志
	$.postFyJSON("/xmzhgl_xzb/xxtx/loadXxtxList", {
		"txlb" : txlb,"ydbz" : ydbz,"defaltPageCount":"10"
	}, function(data) {
		if (data && data[0] == "Y") {
			var list = data[1].bodyList;
			//console.log(list);
			var eachpagecount=data[1].eachpagecount;//每页显示记录数
			var currpage=data[1].currpage;//当前页码
			var lis = [];
			var index = 0;
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					index = (currpage-1)*eachpagecount+1+i;
					//index=1;
					lis.push('<tr>');
					/*var wdCss="";//未读记录添加未读样式
					if("N"==list[i][5]){
						wdCss='<i class="iconfont icon-dian"></i>';
					};
					lis.push('<td class="text-center" width="13%">'+wdCss+'</td>');
					lis.push(' <td width="70%"><a href="javascript:void(0);" onclick="view(\''+list[i][0]+'\',\''+list[i][5]+'\')">'+list[i][1]+'</a>	</td>');
					lis.push(' <th class="text-center" width="7%">');
					lis.push('	<input type="checkbox" id="'+list[i][0] +'" class="gcs-radio">');
					lis.push('		<label  for="'+list[i][0]+'"></label>');
					lis.push('</th>');*/
					lis.push('<td class="text-center" width="3%"><input type="checkbox" id="'+list[i][0]+'" class="gcs-radio">'+index+'</td>');
					lis.push('<td width="34%"><a href="javascript:void(0);" onclick="view(\''+list[i][0]+'\',\''+list[i][5]+'\')">'+list[i][1]+'</a></td>');
					lis.push('<td width="4%">'+list[i][2]+'</td>');
					lis.push('<td width="10%">'+list[i][4]+'</td>');
					var ydbz=list[i][5]=="Y"?"是":"否";
					lis.push('<td width="4%">'+ydbz+'</td>');
					lis.push('</tr>');
				}
				//lis.push(getFenyeBottom(data[1], "loadXxtxList()", 5));
				var fenye = [];
				fenye.push(getFenyeBottom(data[1], "loadXxtxList()", 5));
				$("#yjfenye").html(fenye.join(""));
			} else {
				lis.push('<tr height="22"><td colspan="5" style="text-align: center;" align="center">' + '无数据' + '！</td></tr>');
			}
			$("#show_tbody").html(lis.join(""));						
		}
	});
}
/**
 * 标志为已读
 */
function markRead(id){
	var arrayIds = new Array();　
	if(id!=null && ""!=id){
		arrayIds.push(id);
	}else{
		arrayIds=getIds();
	}
	//如果没有选中任何记录则提示
	if(arrayIds.length<1){
		alert("当前未选中任何记录，请先选择记录再进行操作！");
		return;
	}
	$.postJSON("/xmzhgl_xzb/xxtx/updateXxtxYdbz", {
		"ids" : arrayIds.join()
	}, function(data) {
		if (data && data[0] == "Y") {
			if(id==null || ""==id){
				alert(data[1]);
			}
			//刷新页面
			loadXxtxList();
		} else {
			alert(data[1]);		
		}
				
	});
	
	loadXxtxCount();//重新加载未读消息数量
}

/**
 * 删除
 */
function deleteXxtx(){
	var arrayIds=getIds();
	//如果没有选中任何记录则提示
	if(arrayIds.length<1){
		alert("当前未选中任何记录，请先选择记录再进行操作！");
		return;
	}
	$.postJSON("/xmzhgl_xzb/xxtx/deleteXxtx", {
		"ids" : arrayIds.join()
	}, function(data) {
		if (data && data[0] == "Y") {
			//window.top.loadXxtxCount();//重新加载未读消息数量
			//if(id==null || ""==id){
				alert(data[1]);
			//}
			//刷新页面
				loadXxtxList();
		} else {
			alert(data[1]);		
		}
				
	});
	loadXxtxCount();//重新加载未读消息数量
}

/**
 * 获取选中的ID
 */
function getIds(){
	var ids=new Array();
	$("input[type='checkbox']:checked").each(
		function(){
			ids.push($(this).attr("id"));			
		}
	);
	return ids;
}
/**
 * 查看
 */
function view(id,ydbz){		
	//标记为已读
	if("N"==ydbz){
		markRead(id);
	}
	window.location.href="/xmzhgl_xzb/show/xxtx/messageDetail?id="+id+"&"+Math.round(Math.random()*1000000);
}