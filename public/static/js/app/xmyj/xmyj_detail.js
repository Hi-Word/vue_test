var yjxx_id = request("yjxx_id");

$(function(){
	loadYjxx();
});

//加载预警信息
function loadYjxx(){
	$.postJSON("/xmzhgl_xzb/app/xmyj/loadYjxxById", {"yjxx_id":yjxx_id}, function(data) {
		if(data && data[0]=="Y"){
			var yjxx = data[1];
			$("#xmmc").html(getStrNoNull(yjxx[1]));
			var yjxj = '<em style="color:'+getStrNoNull(yjxx[4])+'">'+getYjxjShow(getStrNoNull(yjxx[2]))+'</em>';
			$("#yjxj").html(yjxj);
			$("#txsx").html(getStrNoNull(yjxx[5]));
			$("#yjxxnr").html(getStrNoNull(yjxx[6]));
			$("#jhkssj").html(getFormatDate(yjxx[7]));
			$("#jhwcsj").html(getFormatDate(yjxx[8]));
			$("#gbzt").html(showGbzt(getStrNoNull(yjxx[9])));
			$("#clgc").html(getStrNoNull(yjxx[10]));
		}else{
			alert(data[1]);
		}
	});
};

//显示关闭状态
function showGbzt(gbzt){
	if(gbzt=="1"){
		return '已关闭';
	}else if(gbzt=="0"){
		return '未关闭';
	}else{
		return '';
	}
}