$(function(){
		js();
	})		
	function js(){
		openChildren();
		loadXxtxInfo();//加载消息提醒
	}

/**
 * 加载消息提醒列表
 */
function loadXxtxInfo(){
	var id = request("id");
	$.postJSON("/xmzhgl_xzb/xxtx/loadXxtxInfo", {
		"id" : id
	}, function(data) {
		if (data && data[0] == "Y") {
			$("#xxnr").html(data[1][1] );
			$("#xxlx").html(data[1][2] );
			$("#yjsj").html(data[1][4] );//预警时间
			$("#ydbz").html(data[1][5]=='Y'?"是":"否" );//阅读标志
			
			var href="javascript:void(0);";	
			if("A"==data[1][7]){//预警类跳转到项目预警模块处理
				href="/xmzhgl_xzb/show/xmgl/xmyj/projectEarlyWarning?id="+data[1][6]+"&tid="+Math.round(Math.random()*1000000);	
			}
			/*else if("B"==data[1][7]){//留言类跳转到我的留言模块
				
			}*/
			$("#xq").attr("href",href );//阅读标志
			//console.log(data[1]);
		} else {
			alert(data[1]);		
		}
				
	});
}