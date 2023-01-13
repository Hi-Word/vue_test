var yjxx_id = request("id");
$(function(){	
	init();	
	loadAllXmyj();
	loadYjlxSelectList();
	loadYjxjSelectList();
});

function init(){
	//滚动条
	$('.be-overdue .ov,.high-early-warning .ov, .low-early-warning .ov').perfectScrollbar();
	//头部菜单效果
	openChildren();
	setMkClass();//设置模块选中
};

//加载项目预警列表
function loadAllXmyj(){
	$.postFyJSON("/xmzhgl_xzb/xmyj/loadAllXmyj",{
		"yjxx_id":yjxx_id,
		"xmmc":$("#xmmc").val(),
		"yjlx":$("#yjlx").val(),
		"yjxj":$("#yjxj").val()
	},function(data){
		if(data && data[0]=="Y"){
			var bodyList = data[1].bodyList;
			var list = [];
			var index = 0;
			if (bodyList && bodyList.length > 0) {
				for (var i = 0; i < bodyList.length; i++) {
					index = index + 1;
					list.push('<tr><td class="text-center">'+index+'</td>');
					list.push('<td class="text-center"><a>'+getStrNoNull(bodyList[i][1])+'</a></td>');
					list.push('<td class="text-center">'+getStrNoNull(bodyList[i][2])+'</td>');
					
					list.push('<td class="text-center"><em style="color:'+getStrNoNull(bodyList[i][5])+';">'+getYjxjShow(getStrNoNull(bodyList[i][3]))+'</em></td>');
					
					list.push('<td class="text-center">'+getStrNoNull(bodyList[i][6])+'</td>');
					list.push('<td class="text-center">'+getStrNoNull(bodyList[i][7])+'</td>');
					list.push('<td class="text-center">'+getFormatDate(bodyList[i][8])+'</td>');
					list.push('<td class="text-center">'+showGbzt(getStrNoNull(bodyList[i][9]))+'</td>');
//					list.push('<td class="text-center">'+getStrNoNull(bodyList[i][10])+'</td></tr>');
					list.push('<td class="text-center"><input type="button" class="bt01" style="float:none;" value="查看处理过程" onclick="show(\'.clgc_dialog\'),loadYjclgc(\''+bodyList[i][0]+'\')" />');
					list.push('<td class="text-center">'+getStrNoNull(bodyList[i][11])+'</td></tr>');
				}
			} else {
				list.push('<tr><td colspan="9" class="text-center">暂无预警信息</td></tr>');
			}
			$("#show_tbody").html(list.join(""));
			var fenye = [];
			fenye.push(getFenyeBottom(data[1], "loadAllXmyj()", 9));
			$("#yjfenye").html(fenye.join(""));
			yjxx_id = null;
		}else{
			alert(data[1]);
		}
	});
};

function doCheckXmyj(){
	window.location.href='/xmzhgl_xzb/show/xmgl/xmyj/doCheckProjectEarlyWarning?tid='+Math.round(Math.random()*1000000);
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

//得到预警类型下拉列表
function loadYjlxSelectList() {
	$.postJSON("/xmzhgl_xzb/xmyj/loadYjlxSelect", null, function(data) {
		if (data && data.length > 0) {
			//先添加预警类型的下拉
			var yjlxlis = [];
			yjlxlis.push('<option value="">--请选择预警类型--</option>');
			for (var i = 0; i < data.length; i++) {
				yjlxlis.push('<option value=' + data[i].yjlxDm + '>' + data[i].yjlxMc + '</option>');
			}
			//全部预警界面的预警类型下拉
			$("#yjlx").html(yjlxlis.join(""));
		}
	});
};

//得到预警星级下拉列表
function loadYjxjSelectList() {
	$.postJSON("/xmzhgl_xzb/xmyj/loadYjxjSelect", null, function(data) {
		if (data && data.length > 0) {
			//得到预警星级提示
			var yjxjTs=[];
			//添加预警星级的下拉
			var yjxjlis = [];
			yjxjlis.push('<option value="">--请选择预警星级--</option>');
			for (var i = 0; i < data.length; i++) {
				//yjxjlis.push('<option value=' + data[i].yjxjDm + '>' + data[i].yjxjMc + '</option>');
				yjxjlis.push('<option value=' + data[i].yjxjDm + ' style="color:'+getStrNoNull(data[i].ysdm)+';">' + getYjxjShow(data[i].yjxjDm) + '</option>');
				yjxjTs.push('<em style="color:'+data[i].ysdm+';">'+getYjxjShow(data[i].yjxjDm)+'（'+data[i].yjxjMc+'）</em>');
			}
			//全部预警界面的预警星级下拉
			$("#yjxj").html(yjxjlis.join(""));
			$("#yjxjTs").html(yjxjTs.join(""));
		}
	});
};

//查看处理过程
function loadYjclgc(yjxx_id){
	$("#clgc").html("");    //先清空浏览效果好一点
	$.postJSON("/xmzhgl_xzb/xmyj/loadYjclgc", {
		"yjxx_id":yjxx_id
	}, function(data) {
		console.log(data[1]);
		if (data && data.length > 0) {
			$("#clgc").html(getStrNoNull(data[1]));
		}
	});
}