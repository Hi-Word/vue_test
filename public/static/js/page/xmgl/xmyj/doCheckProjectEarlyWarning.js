$(function(){	
	init();	
	doCheckXmyj();
	loadYjlxSelectList();
	loadYjxjSelectList();
	physicalEexamination();
});

function init(){
	//滚动条
	$('.be-overdue .ov,.high-early-warning .ov, .low-early-warning .ov').perfectScrollbar();
	//头部菜单效果
	openChildren();
	setMkClass();//设置模块选中
};

//加载未处理的项目预警列表
function doCheckXmyj(){
	$.postFyJSON("/xmzhgl_xzb/xmyj/doCheckXmyj",{
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
					list.push('<td class="text-center"><em style="color:'+getStrNoNull(bodyList[i][5])+';">'+getYjxjShow(getStrNoNull(bodyList[i][3]))+'</td>');
					list.push('<td class="text-center">'+getStrNoNull(bodyList[i][6])+'</td>');
					list.push('<td class="text-center">'+getStrNoNull(bodyList[i][7])+'</td>');
					list.push('<td class="text-center">'+getFormatDate(bodyList[i][8])+'</td>');
					list.push('<td class="text-center">'+getStrNoNull(bodyList[i][10])+'</td></tr>');
					//list.push('<input type="button" class="bt01" value="留言" onclick="show(\'.feedback-opinion\')" /></td></tr>');
				}
			} else {
				list.push('<tr><td colspan="9" class="text-center">暂无预警信息</td></tr>');
			}
			$("#wcl_tbody").html(list.join(""));
			var fenye = [];
			fenye.push(getFenyeBottom(data[1], "doCheckXmyj()", 9));
			$("#tjfenye").html(fenye.join(""));
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

//体检动画
function physicalEexamination(){
	$(".progress-bar").animate({width:'100%'},6000,function(){
		$(".physical-examination-top i").removeClass("icon-animate");
		$(".physical-examination-top .txt h1").html("体检完成");
	});
	$(".physical-examination-con").slideDown(5000);
}

//重新体检动画
function again(){
	$(".progress-bar").stop(true);
	$(".physical-examination-con").stop();
	$(".progress-bar").css("width","0px");	
	$(".physical-examination-con").hide();
	$(".physical-examination-top i").addClass("icon-animate");
	$(".physical-examination-top .txt h1").html("正在进行体检");
	$(".physical-examination-top .txt p").html("项目预警管理体检");
	physicalEexamination();
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