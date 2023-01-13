
$(function() {

	showTzedbYdBar();	//加载投资额对比月度柱形图
	showTzedbJdBar();	//加载投资额对比季度柱形图
	showTzedbNdBar();	//加载投资额对比年度柱形图
	showCzBar();		//加载产值柱形图
	showJdxmtjPie();	//加载阶段项目统计饼图
	showTzgmPie();		//加载投资规模饼图
	showYqcylbtzezbBar();//加载园区产业类别投资额占比
	//displayDiv("1");
	//document.getElementById("ydTab").click();
	
})

//加载投资额对比月度
function showTzedbYdBar(divId){
	var defaultdiv="tzedbYd";
	var labelFontSize = 14;
	if(divId){
		 defaultdiv=divId;
		 labelFontSize = 20;
	}
	var id =document.getElementById(defaultdiv);
	var myChart = echarts.init(id);
	var app = {};
	option = null;
	app.title = '坐标轴刻度与标签对齐';
	option = {
		//backgroundColor: '#001F55',
		title : {
			text: '2018年计划投资60亿、实际投资46.6亿，同比（9.12%）、环比（9.12%）。',
			textStyle : {
				color:'#FFFFFF',
				fontSize : '18'
			},
			left : '20%',
			bottom:'5%'
		},
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'cross',        // 默认为直线，可选为：'line' | 'shadow'
				label :{
					textStyle:{
						//color:'#001F55'
					},
					backgroundColor : '#000000'
				}
			},
			/*返回需要的信息*/  
			formatter: function(param) {  
				var tbNum = "";
				var hbNum = "";
				var valueY = param[0].name.substring(0,1);
				if(valueY=='1'){
					tbNum = "同比（56.72%）";
					hbNum = "环比（150.38%）";
				}else if(valueY=='2'){
					tbNum = "同比（85.96%）";
					hbNum = "环比（41.27%）";
				}else if(valueY=='3'){
					tbNum = "同比（182.88%）";
					hbNum = "环比（36.88%）";
				}else if(valueY=='4'){
					tbNum = "同比（71.54%）";
					hbNum = "环比（177.14%）";
				}else if(valueY=='5'){
					tbNum = "同比（28.33%）";
					hbNum = "环比（22.85%）";
				}else if(valueY=='6'){
					tbNum = "同比（0.00%）";
					hbNum = "环比（0.00%）";
				}else if(valueY=='7'){
					tbNum = "同比（7.99%）";
					hbNum = "环比（148.77%）";
				}else if(valueY=='8'){
					tbNum = "同比（101.85%）";
					hbNum = "环比（95.58%）";
				}else if(valueY=='9'){
					tbNum = "同比（105.87%）";
					hbNum = "环比（105.42%）";
				}else if(valueY=='10'){
					tbNum = "同比（10.54%）";
					hbNum = "环比（1581.21%）";
				}else if(valueY=='11'){
					tbNum = "同比（2.94%）";
					hbNum = "环比（26.51%）";
				}else if(valueY=='12'){
					tbNum = "同比（28.81%）";
					hbNum = "环比（26.91%）";
				}
				return '<div> '+
							'<span style="color:rgb(207,135,62);font-size:16px">2014年'+ param[0].name + '：实际投资额（'+ param[0].value +'万元）</span> </br>' + 
							'<span style="color:rgb(239,3,203);font-size:16px">2015年'+ param[0].name + '：实际投资额（'+ param[1].value +'万元）</span>  </br>' +
							'<span style="color:rgb(5,250,97);font-size:16px">2016年'+ param[0].name + '：实际投资额（'+ param[2].value +'万元）</span>   </br>' +
							'<span style="color:rgb(42,173,241);font-size:16px">2017年'+ param[0].name + '：实际投资额（'+ param[3].value +'万元）</span> </br>' +
							'<span style="color:rgb(255,72,72);font-size:16px">2018年'+ param[0].name + '：实际投资额（'+ param[4].value +'万元）、'+tbNum+'、'+hbNum+'</span>  </br>' +
						'</div>';		
				
			}
		},
		grid: {
			width:'90%',
			height:'60%',
			left:'5%',
			top:'20%',
			containLabel: true
		},
		legend: {
			right : '5%',
			data : ['2014年', '2015年', '2016年', '2017年', '2018年'],
			textStyle:{
				color:'#fff',
				fontSize:labelFontSize
			},
			selectedMode :false		
			
		},
		xAxis : [
			{
				type : 'category',
				data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				axisTick: {//坐标轴刻度相关设置。
					alignWithLabel: true	//类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
				},
				axisLine:{//坐标轴轴线相关设置。
					lineStyle:{
						color:'#fff',
						width:1,//这里是为了突出显示加上的
						shadowColor : '#001F55'
					}
				},
				axisLabel: {
					fontSize : labelFontSize
				}
			}
		],
		yAxis : [
			{
				type: 'value',
				name: '金额（万元）',
				//min: 0,
				//max: 100,
				//interval: 20,
				axisLabel: {
					formatter: '{value}',
					fontSize : labelFontSize
				},
				axisLine:{
					lineStyle:{
						color:'#fff',
						width:1//这里是为了突出显示加上的
					}
				},
				splitLine:{  
			　　　　show:false  //去掉Y轴的网络线
			　　} 
			}
			
		],
		series : [
			//2014年
			{
				name:'2014年',
				type:'line',
				data:[0, 5033, 8042, 12023, 13625, 10258, 10659, 12998, 12525, 18215, 18642, 17057],
				label: {
				  normal: {
					  //show: true,
					  position: 'top',
					  //formatter: "{c}万元",
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(207,135,62)'
				}
			},
			//2015年
			{
				name:'2015年',
				type:'line',
				data:[3064, 3889, 7023, 8521, 12053, 13746, 8005, 7820, 5624, 6248, 10556, 10337],
				label: {
				  normal: {
					  //show: true,
					  position: 'top',
					  //formatter: "{c}万元",
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(239,3,203)'
				}
			},
			//2016年
			{
				name:'2016年',
				type:'line',
				data:[8011, 10006, 7759, 12029, 9399, 8535, 1470, 3186, 1482, 9253, 27223, 32671],
				label: {
				  normal: {
					  //show: true,
					  position: 'top',
					  //formatter: "{c}万元",
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(5,250,97)'
				}
			},
			//2017年
			{
				name:'2017年',
				type:'line',
				data:[16166, 19248, 59116, 22031, 36181, 54391, 20970, 21943, 40905, 36501, 49586, 50289],
				label: {
				  normal: {
					  //show: true,
					  position: 'top',
					  //formatter: "{c}万元",
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(42,173,241)'
				}
			},
			//2018年
			{
				name:'2018年',
				type:'line',
				data:[25336, 35793, 48994, 37793, 46430, 46431, 22646, 44291, 2400, 40349, 51044, 64779],
				label: {
				  normal: {
					  //show: true,
					  position: 'top',
					  //formatter: "{c}万元",
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(255,72,72)'
				},
				tooltip: {  
				
				}
			}
		]
	};
	
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}

//加载投资额对比季度
function showTzedbJdBar(divId){
	var defaultdiv="tzedbJd";
	var labelFontSize = 14;
	if(divId){
		 defaultdiv=divId;
		 labelFontSize = 20;
	}
	var id =document.getElementById(defaultdiv);
	var myChart = echarts.init(id);
	var app = {};
	option = null;
	app.title = '坐标轴刻度与标签对齐';
	option = {
		//backgroundColor: '#001F55',
		title : {
			text: '2018年计划投资60亿、实际投资46.6亿，同比（9.12%）、环比（9.12%）。',
			textStyle : {
				color:'#FFFFFF',
				fontSize : '18'
			},
			left : '20%',
			bottom:'5%'
		},
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'cross',        // 默认为直线，可选为：'line' | 'shadow'
				label :{
					textStyle:{
						//color:'#001F55'
					},
					backgroundColor : '#000000'
				}
			},
			/*返回需要的信息*/  
			formatter: function(param) {  
				var tbNum = "";
				var hbNum = "";
				var valueSbu = param[0].name.substring(1,2);
				if(valueSbu=='一'){
					tbNum = "同比（16.50%）";
					hbNum = "环比（180.75%）";
				}else if(valueSbu=='二'){
					tbNum = "同比（16.03%）";
					hbNum = "环比（18.64%）";
				}else if(valueSbu=='三'){
					tbNum = "同比（182.72%）";
					hbNum = "环比（153.07%）";
				}else if(valueSbu=='四'){
					tbNum = "同比（14.51%）";
					hbNum = "环比（125.24%）";
				}
				return '<div> '+
							'<span style="color:rgb(207,135,62);font-size:16px">2014年'+ param[0].name + '：实际投资额（'+ param[0].value +'万元）</span> </br>' + 
							'<span style="color:rgb(239,3,203);font-size:16px">2015年'+ param[0].name + '：实际投资额（'+ param[1].value +'万元）</span>  </br>' +
							'<span style="color:rgb(5,250,97);font-size:16px">2016年'+ param[0].name + '：实际投资额（'+ param[2].value +'万元）</span>   </br>' +
							'<span style="color:rgb(42,173,241);font-size:16px">2017年'+ param[0].name + '：实际投资额（'+ param[3].value +'万元）</span> </br>' +
							'<span style="color:rgb(255,72,72);font-size:16px">2018年'+ param[0].name + '：实际投资额（'+ param[4].value +'万元）、'+tbNum+'、'+hbNum+'</span>  </br>' +              
						'</div>';		
				
			}
			
		},
		legend: {
			right : '5%',
			data:['2014年季度','2015年季度','2016年季度','2017年季度','2018年季度'],
			textStyle:{
				color:'#fff',
				fontSize:labelFontSize
			},
			selectedMode :false	
		},
		grid: {
			width:'90%',
			height:'60%',
			left:'5%',
			top:'20%',
			containLabel: true
		},
		xAxis : [
			{
				type : 'category',
				data : ['第一季度', '第二季度', '第三季度', '第四季度'],
				axisTick: {//坐标轴刻度相关设置。
					alignWithLabel: true	//类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
				},
				axisLine:{//坐标轴轴线相关设置。
					lineStyle:{
						color:'#fff',
						width:1,//这里是为了突出显示加上的
						shadowColor : '#001F55'
					}
				},
				axisLabel:{
					fontSize : labelFontSize
                }
			}
		],
		yAxis : [
			{
				type: 'value',
				name: '金额（万元）',
				//min: 0,
				//max: 100,
				//interval: 20,
				axisLabel: {
					formatter: '{value}',
					fontSize : labelFontSize
				},
				axisLine:{
					lineStyle:{
						color:'#fff',
						width:1//这里是为了突出显示加上的
					}
				},
				splitLine:{  
			　　　　show:false  //去掉Y轴的网络线
			　　} 
			}
		],
		series : [
			//2014年季度
			{
				name:'2014年季度',
				type:'line',
				data:[13075,35906,36182,53914],
				label: {
				  normal: {
					  //show: true,
					  position: 'top',
					  //formatter: "{c}万元",
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(207,135,62)'
				}
			},
			//2015年季度
			{
				name:'2015年季度',
				type:'line',
				data:[13976, 34320, 21449, 27141],
				label: {
				  normal: {
					  //show: true,
					  position: 'top',
					  //formatter: "{c}万元",
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(239,3,203)'
				}
			},
			//2016年季度
			{
				name:'2016年季度',
				type:'line',
				data:[25776, 29963, 6138, 69147],
				label: {
				  normal: {
					  //show: true,
					  position: 'top',
					  //formatter: "{c}万元",
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(5,250,97)'
				}
			},
			//2017年季度
			{
				name:'2017年季度',
				type:'line',
				data:[94530, 112603, 83818, 136376],
				label: {
				  normal: {
					  //show: true,
					  position: 'top',
					  //formatter: "{c}万元",
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(42,173,241)'
				}
			},
			//2018年季度
			{
				name:'2018年季度',
				type:'line',
				data:[110123, 130654, 69337, 156172],
				label: {
				  normal: {
					  //show: true,
					  position: 'top',
					  //formatter: "{c}万元",
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(255,72,72)'
				},
				tooltip: {  
				
				}
			}
		]
	};
	
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}

//加载投资额对比年度
function showTzedbNdBar(divId){
	var defaultdiv="tzedbNd";
	var labelFontSize = 14;
	if(divId){
		 defaultdiv=divId;
		 labelFontSize = 20;
	}
	var id =document.getElementById(defaultdiv);
	var myChart = echarts.init(id);
	var app = {};
	option = null;
	app.title = '坐标轴刻度与标签对齐';
	option = {
		//backgroundColor: '#001F55',
		title : {
			text: '2018年计划投资60亿、实际投资46.6亿，同比（9.12%）、环比（9.12%）。',
			textStyle : {
				color:'#FFFFFF',
				fontSize : '18'
			},
			left : '20%',
			bottom:'5%'
		},
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'cross',        // 默认为直线，可选为：'line' | 'shadow'
				label :{
					textStyle:{
						//color:'#001F55'
					},
					backgroundColor : '#000000'
				}
			}
		},
		legend: {
			right : '5%',
			data:['计划投资额（万元）','实际投资额（万元）'],
			textStyle:{
				color:'#fff',
				fontSize:labelFontSize
			}
		},
		grid: {
			width:'90%',
			height:'60%',
			left:'5%',
			top:'20%',
			containLabel: true
		},
		xAxis : [
			{
				type : 'category',
				data:['2014年','2015年','2016年','2017年','2018年'],
				axisTick: {//坐标轴刻度相关设置。
					alignWithLabel: true	//类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
				},
				axisLine:{//坐标轴轴线相关设置。
					lineStyle:{
						color:'#fff',
						width:1,//这里是为了突出显示加上的
						shadowColor : '#001F55'
					}
				},
				axisLabel:{
					fontSize : labelFontSize
                }
			}
		],
		yAxis : [
			{
				type: 'value',
				name: '金额（万元）',
				//min: 0,
				//max: 100,
				//interval: 20,
				axisLabel: {
					formatter: '{value} ',
					fontSize : labelFontSize
				},
				axisLine:{
					lineStyle:{
						color:'#fff',
						width:1//这里是为了突出显示加上的
					}
				},
				splitLine:{  
			　　　　show:false  //去掉Y轴的网络线
			　　}
			}
		],
		series : [
			{
				name:'计划投资额（万元）',
				type:'bar',
				data:[100000,150000,300000,400000,600000],
				label: {
				  normal: {
					  show: true,
					  position: 'top',
					  formatter: "{c}万元",
					  fontSize:labelFontSize
				  }
				},
				itemStyle:{
					color:'rgb(250,250,80)'
				}
			},
			{
				name:'实际投资额（万元）',
				type:'bar',
				data:[139077,96886,131024,427327,466286],
				label: {
				  normal: {
					  show: true,
					  position: 'top',
					  formatter: "{c}万元",
					  fontSize:labelFontSize
				  }
				},
				itemStyle:{
					color:'rgb(42,174,241)'
				}
			}
			
		]
	};
	
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}

//加载产值柱形图
function showCzBar(divId){
	var defaultdiv="czBar";
	var labelFontSize = 12;
	if(divId){
		 defaultdiv=divId;
		 labelFontSize = 20;
	}
	var id =document.getElementById(defaultdiv);
	var myChart = echarts.init(id);
	var app = {};
	option = null;
	app.title = '坐标轴刻度与标签对齐';
	option = {
		//backgroundColor: '#001F55',
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'cross',        // 默认为直线，可选为：'line' | 'shadow'
				label :{
					textStyle:{
						//color:'#001F55'
					},
					fontSize:labelFontSize,
					backgroundColor : '#000000'
				}
			}
		},
		grid: {
			width:'90%',
			height:'75%',
			left:'5%',
			top:'15%',
			containLabel: true
		},
		legend: {
			right : '5%',
			data:['计划完成','实际'],
			textStyle:{
				color:'#fff'
			}
		},
		xAxis : [
			{
				type : 'category',
				data : ['2016年', '2017年','2018年'],
				axisTick: {//坐标轴刻度相关设置。
					alignWithLabel: true	//类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
				},
				axisLine:{//坐标轴轴线相关设置。
					lineStyle:{
						color:'#fff',
						width:1,//这里是为了突出显示加上的
						shadowColor : '#001F55'
					}
				},
				axisLabel:{
					fontSize : labelFontSize
                }
			}
		],
		yAxis : [
			{
				name:'金额（亿元）',
				type: 'value',
				axisLine:{
					lineStyle:{
						color:'#fff',
						width:1//这里是为了突出显示加上的
					}
				},
				axisLabel:{
					fontSize : labelFontSize
                }
			}
		],
		series : [
			{
				name:'计划完成',
				type:'bar',
				data:[0, 30,40],
				label: {
				  normal: {
					  show: true,
					  position: 'top',
					  formatter: "{c}亿",
					  fontSize : labelFontSize,
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(250,250,80)'
				}
			},
			{
				name:'实际',
				type:'bar',
				data:[20.76, 30,36.04],
				label: {
				  normal: {
					  show: true,
					  position: 'top',
					  formatter: "{c}亿",
					  fontSize : labelFontSize,
					  textStyle: {
						
					  }
				  }
				},
				itemStyle:{
					color:'rgb(42,174,241)'
				}
			}
		]
	};
	
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}

//加载阶段项目统计饼图
function showJdxmtjPie(divId){
	var defaultdiv="jdxmtjPie";
	var pieSize = [20, 75];
	var labelFontSize = 12;
	if(divId){
		 defaultdiv=divId;
		 labelFontSize = 20;
		 pieSize = "70%";
	}
	var id =document.getElementById(defaultdiv);
	var myChart = echarts.init(id);
	option = null;
	option = {
		//backgroundColor: '#001F55',
		title : {
			text: '总数：186个',
			textStyle : {
				color:'#FFFFFF',
				fontSize : '25'
			},
			left : '30%',
			top : '5%'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b}",//{a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
			alwaysShowContent:false
		},
		calculable : true,
		series : [
			{
				name:'阶段项目统计',
				type:'pie',
				radius : pieSize,
				center : ['50%', '50%'],
				roseType : 'area',
				labelLine:{  
					normal:{  
						length: 10,
						length2: 40
					}  
				},
				label: {
					normal: {
						formatter: '{b}\n\n   ({d}%)',
						padding: [0, -50],
						fontSize : labelFontSize
					}
				},
				data:[
					{value:40, name:'前期(40个)',
						itemStyle:{
							color:'rgb(42,173,241)'
						}
					},
					{value:67, name:'已投产(67个)',
						itemStyle:{
							color:'rgb(255,72,72)'
						}
					},
					{value:42, name:'施工(42个)',
						itemStyle:{
							color:'rgb(255,169,6)'
						}
					},
					{value:37, name:'招商(37个)',
						itemStyle:{
							color:'rgb(5,250,97)'
						}
					}
				]
			}
		]
	};
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}

//加载投资规模饼图
function showTzgmPie(divId){
	var defaultdiv="tzgmPie";
	var labelFontSize = 12;
	var pieSize = [20, 75];
	if(divId){
		 defaultdiv=divId;
		 labelFontSize = 20;
		 pieSize = "70%";
		 
	}
	var id =document.getElementById(defaultdiv);
	var myChart = echarts.init(id);
	option = null;
	option = {
		//backgroundColor: '#001F55',
		title : {
			text: '总数：151个',
			textStyle : {
				color:'#FFFFFF',
				fontSize : '25'
			},
			left : '30%',
			top : '5%'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b}",//{a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
			alwaysShowContent:false
		},
		calculable : true,
		series : [
			{
				name:'投资规模',
				type:'pie',
				radius : pieSize,
				center : ['50%', '50%'],
				roseType : 'area',
				labelLine:{  
					normal:{  
						length: 10,
						length2: 40
					}  
				},
				label: {
					normal: {
						formatter: '{b}\n\n   ({d}%)',
						padding: [0, -50],
						fontSize : labelFontSize
					}
				},
				data:[
					//3
					{value:12, name:'10亿-50亿(12个)',
						itemStyle:{
							color:'rgb(255,72,72)'
						}
					},
					//4
					{value:2, name:'100亿以上(2个)',
						itemStyle:{
							color:'rgb(5,250,97)'
						}
					},
					//2
					{value:4, name:'50亿-100亿(4个)',
						itemStyle:{
							color:'rgb(255,169,6)'
						}
					},
					//1
					{value:133, name:'10亿以下(133个)',
						itemStyle:{
							color:'rgb(42,173,241)'
						}
					}
				]
			}
		]
	};
	;
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}

//加载园区产业类别投资额占比
function showYqcylbtzezbBar(divId){
	var defaultdiv="yqcylbtzezbBar";
	var labelFontSize = 12;
	var rotate = -15;
	if(divId){
		 defaultdiv=divId;
		 labelFontSize = 20;
		 rotate = 0;
	}
	var id =document.getElementById(defaultdiv);
	var myChart = echarts.init(id);
	var app = {};
	option = null;
	app.title = '折线图';

	option = {
		//backgroundColor: '#001F55',
		tooltip: {//提示框组件
			trigger: 'axis',//触发类型  'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
			axisPointer: {//坐标轴指示器配置项。
				type: 'cross',//指示器类型   cross 十字准星指示器
				crossStyle: {
					color: '#999'
				},
				label :{
					textStyle:{
						//color:'#001F55'
					},
					backgroundColor : '#000000'
				}
			},
			/*返回需要的信息*/  
			formatter: function(param) {  
				return '<div> '+
							'<span style="">'+ param[0].name + '</span> </br> ' +
							'<span style="color:rgb(42,174,241)">项目数量（'+ param[0].value +'个）</span></br> ' +
							'<span style="color:rgb(5,250,97)">项目比例（'+ param[1].value +'%）</span>' 
						'</div>';		
				
			}
		},
		grid: {//直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。
			width:'90%',
			height:'70%',
			left : '5%',
			containLabel: true  //grid 区域是否包含坐标轴的刻度标签。
		},
		xAxis: [
			{
				type: 'category',
				data: ['电子信息','基础设施','生物医药','食品加工','现代服务业','新能源和新材料','装备制造'],
				axisPointer: {
					type: 'shadow'
				},
				axisLine:{
					lineStyle:{
						color:'#fff',
						width:1//这里是为了突出显示加上的
					}
				},
				axisLabel:{  
					interval:0,//横轴信息全部显示  
					rotate:-15,//-90度角倾斜显示  
					fontSize : labelFontSize
				},
				nameTextStyle :{
					fontSize:labelFontSize
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '项目数（个）',
				//min: 0,
				//max: 100,
				//interval: 20,
				axisLabel: {
					formatter: '{value} 个',
					fontSize : labelFontSize
				},
				axisLine:{
					lineStyle:{
						color:'#fff',
						width:1//这里是为了突出显示加上的
					}
				},
				splitLine:{  
			　　　　//show:false  //去掉Y轴的网络线
			　　}
			},
			{
				type: 'value',
				name: '项目比（%）',
				//min: 0,
				//max: 100,
				//interval: 20,
				axisLabel: {
					formatter: '{value} %',
					fontSize : labelFontSize
				},
				axisLine:{
					lineStyle:{
						color:'#fff',
						width:1//这里是为了突出显示加上的
					}
				},
				splitLine:{  
			　　　　show:false  //去掉Y轴的网络线
			　　} 
			}
		],
		series: [
			{
				name:'数量',
				type:'bar',
				barWidth: '40%',
				label: {
				  normal: {
					  show: true,
					  position: 'insideTop',
					  formatter: "{c}个",
					  fontSize : labelFontSize
				  }
				},
				itemStyle:{
					color:'rgb(42,174,241)'
				},
				data:[10 , 81 , 5 , 19 , 16 , 9 , 9]
			},
			{
				name:'比例',
				type:'line',
				yAxisIndex: 1,
				label: {
				  normal: {
					  show: true,
					  position: 'top',
					  formatter: "{c}%",
					  fontSize : labelFontSize
				  }
				},
				itemStyle:{
					color:'rgb(5,250,97)'
				},
				data:[6.71 , 54.36 , 3.36 , 12.75 , 10.74, 6.04, 6.04]
			}
		]
	};
	;
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}

//显示与隐藏DIV
function displayDiv(ids){
	if(ids=="1"){
		$("#tzedbYd").show();
		$("#tzedbJd").hide();
		$("#tzedbNd").hide();
	}else if(ids=="2"){
		$("#tzedbYd").hide();
		$("#tzedbJd").show();
		$("#tzedbNd").hide();
	}else if(ids=="3"){
		$("#tzedbYd").hide();
		$("#tzedbJd").hide();
		$("#tzedbNd").show();
	}
}