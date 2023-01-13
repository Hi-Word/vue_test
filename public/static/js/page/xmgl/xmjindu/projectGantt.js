$(function(){
	openChildren();
	xmdm = decodeURI(request("xmdm"));
	ganttInit();
	loadXmganttList();
})

//甘特图初始
function ganttInit(){
	gantt.config.readonly=true;
	gantt.config.grid_width = 300;//左侧表宽
	gantt.config.task_height = 15;//任务高度
	gantt.config.row_height = 25;//表格行高
	//gantt.config.date_scale = "%Y年%M%d日"; 
	gantt.config.min_column_width = 70;//表头宽
	gantt.config.scale_unit = "month"; 
	gantt.config.date_scale = "%Y年%M"; 
	gantt.config.date_grid = "%Y/%M/%d";
	gantt.config.scale_height = 30;
	gantt.config.columns=[
		{name:"name", label:"项目名称", tree:true, align:"center", width:"*" }
	];
	gantt.init("gantt_here");
	
//	gantt.config.subscales = [
//			{unit:"month", step:1, date:"%d日"}
//	];
	gantt.addTaskLayer(function draw_planned(task) {
		if (task.planned_start && task.planned_end) {
			var sizes = gantt.getTaskPosition(task, task.planned_start, task.planned_end);
			var el = document.createElement('div');
			el.className = 'baseline';
			el.style.left = sizes.left + 'px';
			el.style.width = sizes.width + 'px';
			el.style.top = sizes.top + gantt.config.task_height + 13 + 'px';
			return el;
		}
		return false;
	});
	$.postJSON("/xmzhgl_xzb/xmjindu/loadXmGantt", {"xmdm":xmdm},function (data, textStatus) {
		if(data[0].length>0){
			var p = "";
			if(data[0].length>0){
				var list = data[0];
				for (var i = 0; i < list.length; i++) {
					if(p==""){
						p = '{"data":[{"open": true,"id":"'+getStrNoNull(list[i][0])+'", "name":"'+getStrNoNull(list[i][1])+'", "start_date":"'+getStrNoNull(list[i][2])+'", "text":"'+getStrNoNull(list[i][3])+'日", "duration":"'+getStrNoNull(list[i][3])+'"}';
					}else{
						p+=',{"open": true,"id":"'+getStrNoNull(list[i][0])+'", "name":"'+getStrNoNull(list[i][1])+'", "start_date":"'+getStrNoNull(list[i][2])+'", "text":"'+getStrNoNull(list[i][3])+'日", "duration":"'+getStrNoNull(list[i][3])+'"}';
					}
				}
			}
			if(data[1].length>0){
				var list1 = data[1];
				for (var i = 0; i < list1.length; i++) {
					if(p==""){
						p = '{"data":[{"id":"'+getStrNoNull(list1[i][0])+'", "name":"'+getStrNoNull(list1[i][1])+'", "start_date":"'+getStrNoNull(list1[i][2])+'", "text":"'+getStrNoNull(list1[i][3])+'日", "duration":"'+getStrNoNull(list1[i][3])+'", "parent":"'+getStrNoNull(list1[i][4])+'"}';
					}else{
						p+=',{"id":"'+getStrNoNull(list1[i][0])+'", "name":"'+getStrNoNull(list1[i][1])+'", "start_date":"'+getStrNoNull(list1[i][2])+'", "text":"'+getStrNoNull(list1[i][3])+'日", "duration":"'+getStrNoNull(list1[i][3])+'", "parent":"'+getStrNoNull(list1[i][4])+'"}';
					}
				}
			}
			p+=']}';
			var tasks = JSON.parse(p);
			gantt.parse(tasks);
		}
		
	});
}

//甘特图列表
function loadXmganttList() {
	$.postJSON("/xmzhgl_xzb/xmjindu/loadXmganttList", {"xmdm":xmdm},function (data, textStatus) {
		if(data){
			var list=data[0];
			var lis = [];
			lis.push('<tr style="border: 1px dashed #2e5280;height: 50px;line-height: 50px;">');
			lis.push('<th style="width: 70px;text-align:center">序号</th>');
			lis.push('<th style="width: 200px;text-align:center">任务名称</th>');
			lis.push('<th style="width: 100px;text-align:center">开始时间</th>');
			lis.push('<th style="width: 100px;text-align:center">结束时间</th>');
			lis.push('<th style="width: 70px;text-align:center">耗时</th>');
			lis.push('<th style="width: 150px;text-align:center">主要负责人</th>');
			lis.push('<th style="width: 400px;text-align:center">进度</th>');
			lis.push('<th style="text-align:center">存在问题</th>');
			lis.push('<th style="width: 160px;text-align:center">需要协调的经办人</th>');
			lis.push('<th style="text-align:center">建议</th>');
			lis.push('<th style="text-align:center">备注</th>');
			lis.push('</tr>');
			if (list && list.length > 0) {
				for (var i = 0; i < list.length; i++) {
					lis.push('<tr style="border: 1px dashed #2e5280;height: 50px;line-height: 50px;">');
					lis.push('<td style="text-align:center">' + getStrNoNull(list[i][0]) + '</td>');
					lis.push('<td style="text-align:center">' + getStrNoNull(list[i][1]) + '</td>');
					lis.push('<td style="text-align:center">' + getFormatDate(list[i][2]) + '</td>');
					lis.push('<td style="text-align:center">' + getFormatDate(list[i][3]) + '</td>');
					lis.push('<td style="text-align:center">' + getStrNoNull(list[i][4]) + '日</td>');
					lis.push('<td style="text-align:center">' + getStrNoNull(list[i][5]) + '</td>');
					lis.push('<td style="text-align:center">' + getStrNoNull(list[i][6]) + '</td>');
					lis.push('<td style="text-align:center">' + getStrNoNull(list[i][7]) + '</td>');
					lis.push('<td style="text-align:center">' + getStrNoNull(list[i][8]) + '</td>');
					lis.push('<td style="text-align:center"">' + getStrNoNull(list[i][9]) + '</td>');
					lis.push('<td style="text-align:center">' + getStrNoNull(list[i][10]) + '</td>');
					lis.push('</td></tr>');
				}
			}else{
				lis.push('<tr><td colspan="11" align="center">无数据</td></tr>');
			}
			$("#xmganttTable").html(lis.join(""));
		}
	});
	
}