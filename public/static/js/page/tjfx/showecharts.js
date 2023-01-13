/**
 * E-charts图表展示
 * 需 jquery-1.9.1 或以上版本
 */

//根据图表类型展示相应的图表，divId=需要生成图表的目标DIV的id
function genChart(divId,chartDatas){
	if(!divId || "Y" != chartDatas[0] || !chartDatas[1].chartType){
		return;
	}
	
	if(chartDatas[1].height && chartDatas[1].height.length>0){//设置图表高度
		$("#"+divId).css("height",chartDatas[1].height);
	}
	if(chartDatas[1].width && chartDatas[1].width.length>0){//设置图表宽度
		$("#"+divId).css("width",chartDatas[1].width);
	}
	
	var enlarges = $("#"+divId).parent().attr("class");
	if("p20 ov cf" == enlarges ){
		if(chartDatas[1].yAxisLabelFontSize){
			chartDatas[1].yAxisLabelFontSize = Math.floor(chartDatas[1].yAxisLabelFontSize * 1.7);//通用：查看大图时,曲线标识或柱形顶部标注文字大小
		}
		if(chartDatas[1].yAxisBarFontSize){
			chartDatas[1].yAxisBarFontSize = Math.floor(chartDatas[1].yAxisBarFontSize * 1.7);//柱线混合图表：查看大图时,柱形顶部标注文字大小
		}
		if(chartDatas[1].yAxisLineFontSize){
			chartDatas[1].yAxisLineFontSize = Math.floor(chartDatas[1].yAxisLineFontSize * 1.7);//柱线混合图表：查看大图时,折线点标注文字大小
		}
	}
	var chartType = chartDatas[1].chartType;
	if("B1" == chartType){//单曲线(单折线)
		showSingleLine(divId,chartDatas);
	}else if("B2" == chartType){//多曲线(多折线)
		showMultiLine(divId,chartDatas);
	}else if("C1" == chartType){//单柱图 
		showSingleCol(divId,chartDatas);
	}else if("C2" == chartType){//多柱图
		showMultiCol(divId,chartDatas);
	}else if("D" == chartType){//饼状图
		showPie(divId,chartDatas);
	}else if("E" == chartType){//柱形+折线 混合图
		showBarLine(divId,chartDatas);
	}else if("A0" == chartType){//无/单数据 
		console.log("非图表数据，不展示图表");
	}
}

//展示(单折线)单曲线图
function showSingleLine(divId,chartData){
	var seriesData = [];
	var tmpSdata = chartData[1].seriesData;
	for(var i=0;i<tmpSdata.length;i++){
		var tmpSerial = {
				name:tmpSdata[i].name,
				type:'line',
				data:tmpSdata[i].data,
				label: {
					normal: {
						show: chartData[1].showYaxisLabel, //是否在各线折点显示数值
						position: 'top',
						formatter: chartData[1].yAxisLabelFormatter, //在各线折点显示数值的格式
						textStyle: {
							fontSize:chartData[1].yAxisLabelFontSize //在各线折点显示数值的字体大小
						}
					}
				},
				itemStyle:{
					color:tmpSdata[i].color
				}
		};
		seriesData.push(tmpSerial);
	}
	var id =document.getElementById(divId);
	var myChart = echarts.init(id);
	var option = {
			//backgroundColor: '#001F55',
			title : {
				show : chartData[1].showTitle,//是否显示标题
				text: chartData[1].titleText, //图标横轴下方标题内容
				textStyle : {
					color:'#FFFFFF',
					fontSize : '18'
				},
				left : 'center',
				bottom:'5%'
			},
			tooltip : {
				show: chartData[1].showTooltip, //鼠标指向图表时是否显示悬浮提示信息
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
				/*鼠标指向图表时显示的信息*/  
				formatter: function(param) { //单折线(单曲线)时，param中只会有一个对象，即param[0]
					var tmpRets = "";
					var hints = chartData[1].tooltip;
					if(hints && hints.length>0){
						tmpRets = "<div><span style=\"color:"+param[0].color+";font-size:16px\">";
						for(var i=0;i<hints.length;i++){
							var tmps = param[0][hints[i]];
							if(tmps !== null && tmps !== undefined){
								tmpRets += tmps;
							}else{
								tmpRets += hints[i];
							}
						}
						tmpRets += "</span></div>";
					}
					return  tmpRets;
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
				show: false, //显否显图表右上方曲线标识(图例)
				right : '5%',
				data : [], //曲线标识名称
				textStyle:{
					color:'#fff',
					fontSize:12 //图例文字大小
				},
				selectedMode :false
			},
			xAxis : [
				{
					type : 'category',
					data : chartData[1].xAxisData , //X轴坐标
					axisTick: {//坐标轴刻度相关设置。
						alignWithLabel: true	//类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
					},
					axisLine:{//坐标轴轴线相关设置。
						lineStyle:{
							color:'#fff',
							width:1,//x轴线宽
							shadowColor : '#001F55'
						}
					},
					axisLabel: {
						interval : 0, //图表宽度太小时，X轴坐标是否间隔显示，0为不间隔，全部显示
						rotate : chartData[1].xAxisLabelRotate, //-15 : -n度角倾斜显示x轴坐标文字
						fontSize : chartData[1].xAxisFontSize //x轴坐标文字大小
					}
				}
				],
				yAxis : [
					{
						type: 'value',
						name: chartData[1].yAxisName, //Y轴名称
						//min: 0,
						//max: 100,
						//interval: 20,
						axisLabel: {
							formatter: '{value}', 
							fontSize : chartData[1].yAxisFontSize //y轴坐标文字大小
						},
						axisLine:{
							lineStyle:{
								color:'#fff', // y轴颜色
								width:1//y轴线宽
							}
						},
						splitLine:{  
							show:false  //是否显示Y轴的网络线
						}
					}
				],
					series : seriesData,
					dataZoom: [ //图表缩放设置，对折线图和柱状图有效，对饼图使用会出错
					    {   //默认控制x轴
					        show: false, //是否显示滚动条
					        realtime: true,
					        start: 0, // 初始化时滚动条左边在0%的位置
					        end: 100, // 初始化时滚动条右边在100%的位置
						type: 'slider'//启用slider型dataZoom组件，以便在x轴处显示滚动条，需要先设置show为true
					    },
					    {   //默认控制x轴
						type: 'inside' //启用inside型dataZoom组件，此时可在图表中滚动鼠标滚轮进行缩放，图表内部也可左右拖动
					    }
					]
	};
	
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	window.onresize = function(){
		myChart.resize();
	}
	myChart.resize();
}

//展示(多折线)多曲线图
function showMultiLine(divId,chartData){
	var seriesData = [];
	var tmpSdata = chartData[1].seriesData;
	for(var i=0;i<tmpSdata.length;i++){
		var tmpSerial = {
				name:tmpSdata[i].name,
				type:'line',
				data:tmpSdata[i].data,
				label: {
					normal: {
						show: chartData[1].showYaxisLabel, //是否在各线折点显示数值
						position: 'top',
						formatter: chartData[1].yAxisLabelFormatter, //在各线折点显示数值的格式
						textStyle: {
							fontSize:chartData[1].yAxisLabelFontSize //在各线折点显示数值的字体大小
						}
					}
				},
				itemStyle:{
					color:tmpSdata[i].color
				}
		};
		seriesData.push(tmpSerial);
	}
	var id =document.getElementById(divId);
	var myChart = echarts.init(id);
	var option = {
			//backgroundColor: '#001F55',
			title : {
				show : chartData[1].showTitle,//是否显示标题
				text: chartData[1].titleText,//图标横轴下方标题内容
				textStyle : {
					color:'#FFFFFF',
					fontSize : '18'
				},
				left : 'center',
				bottom:'5%'
			},
			tooltip : {
				show: chartData[1].showTooltip, //鼠标指向图表时是否显示悬浮提示信息
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
				/*鼠标指向图表时显示的信息*/  
				formatter: function(param) {
					var tmpRets="";
					var hints = chartData[1].tooltip;
					if(hints && hints.length>0){
						for(var i=0;i<param.length;i++){
							tmpRets += '<span style="color:'+param[i].color+';font-size:16px">';
							for(var j=0;j<hints.length;j++){
								var tmps = param[i][hints[j]];
								if(tmps !== null && tmps !== undefined){
									tmpRets += tmps;
								}else{
									tmpRets += hints[j];
								}
							}
							tmpRets += '</span> </br>';
						}
						tmpRets = "<div style='text-align:left'>"+ tmpRets +"</div>";
					}
					return  tmpRets;
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
				show : chartData[1].showLegend,//是否显示图例
				right : '5%',
				data : chartData[1].legendData,//折线(曲线)标识(图例)
				textStyle:{
					color:'#fff',
					fontSize:chartData[1].legendFontSize //折线(曲线)标识(图例)文字大小
				},
				selectedMode :false		
			},
			xAxis : [
				{
					type : 'category',
					data : chartData[1].xAxisData, //X轴坐标
					axisTick: {//坐标轴刻度相关设置。
						alignWithLabel: true	//类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
					},
					axisLine:{//坐标轴轴线相关设置。
						lineStyle:{
							color:'#fff',
							width:1,//x轴线宽
							shadowColor : '#001F55'
						}
					},
					axisLabel: {
						interval : 0, //图表宽度太小时，X轴坐标是否间隔显示，0为不间隔，全部显示
						rotate : chartData[1].xAxisLabelRotate, //-15 : -n度角倾斜显示x轴坐标文字
						fontSize : chartData[1].xAxisFontSize //x轴坐标文字大小
					}
				}
				],
				yAxis : [
					{
						type: 'value',
						name: chartData[1].yAxisName,
						//min: 0,
						//max: 100,
						//interval: 20,
						axisLabel: {
							formatter: '{value}',
							fontSize : chartData[1].yAxisFontSize //y轴坐标字体大小
						},
						axisLine:{
							lineStyle:{
								color:'#fff', // y轴颜色
								width:1//y轴线宽
							}
						},
						splitLine:{  
							show:false  //去掉Y轴的网络线
						} 
					}
					],
					series : seriesData,
					dataZoom: [ //图表缩放设置，对折线图和柱状图有效，对饼图使用会出错
					    {   //默认控制x轴
					        show: false, //是否显示滚动条
					        realtime: true,
					        start: 0, // 初始化时滚动条左边在0%的位置
					        end: 100, // 初始化时滚动条右边在100%的位置
						type: 'slider'//启用slider型dataZoom组件，以便在x轴处显示滚动条，需要先设置show为true
					    },
					    {   //默认控制x轴
						type: 'inside' //启用inside型dataZoom组件，此时可在图表中滚动鼠标滚轮进行缩放，图表内部也可左右拖动
					    }
					]
	};
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	window.onresize = function(){
		myChart.resize();
	}
	myChart.resize();

}

//展示单柱图
function showSingleCol(divId,chartData){
	var id =document.getElementById(divId);
	var myChart4 = echarts.init(id);
	var option = {
			//backgroundColor: '#001F55',
			title : {
				show : false, //是否显示标题
				//标题相对x、y轴的位置
				x : 'center',
				y : 'top',
				text : '单柱图', //标题内容
				textStyle : {
					color:'#FFFFFF',
					fontSize : '18'
				}
			},
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'cross',        // 默认为直线，可选为：'line' | 'shadow'
					label :{
						textStyle:{
							color:'#ffffff'
						},
						fontSize:12, // 坐标轴指示器动态显示当前坐标时的字体大小
						backgroundColor : '#000000'
					}
				},
				formatter: (chartData[1].tooltip).join(""),//鼠标指向柱子时的提示信息显示格式："{a} <br/>{b}",//{a}（系列名称），{b}（数据项名称），{c}（数值）
				alwaysShowContent:false
			},
			grid: {
				width:'80%',
				height:'60%',
				// top: 25,
				top:'10%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data : chartData[1].xAxisData,
					axisTick: {//坐标轴刻度相关设置。
						alignWithLabel: true	//类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
					},
					axisLine:{//坐标轴轴线相关设置。
						lineStyle:{
							color:'#fff',
							width:1,//x轴线宽
							shadowColor : '#001F55'
						}
					},
					axisLabel:{  
						interval : 0, // 图表宽度太小时，x坐标是否间隔显示，0为全部显示
						rotate: chartData[1].xAxisLabelRotate, //-15 : -n度角倾斜显示
						fontSize : chartData[1].xAxisFontSize //x轴坐标字体大小
//						},
//						axisPointer:{
//		                	type: 'shadow' //鼠标指向柱子时，对应显示阴影块
					}
				}
				],
				yAxis : [
					{
						name:chartData[1].yAxisName, // Y轴名称 (如不要显示则配置其值为空)
						type : 'value',
						axisLine:{
							lineStyle:{
								color:'#fff',
								width:1//y轴线宽
							}
						},
						axisLabel:{
							fontSize : chartData[1].yAxisFontSize //y轴坐标字体大小
						}
					}
					],
					series : [
						{
							name: '', //鼠标指向柱时悬浮框显示: 系列名称( tooltip中的{a} )
							type:'bar',
							barWidth: chartData[1].barWidth, //各柱宽度 '30%'
							label: {
								normal: {
									show: chartData[1].showYaxisLabel, //是否在柱形顶部静态显示柱值
									position: 'top',
									formatter: chartData[1].yAxisLabelFormatter, //柱顶部显示值
									fontSize:chartData[1].yAxisLabelFontSize,//柱顶部显示值字体大小
									textStyle: {
									}
								}
							},
							data:chartData[1].data
						}
						],
						dataZoom: [ //图表缩放设置，对折线图和柱状图有效，对饼图使用会出错
							{   //默认控制x轴
								show: false, //是否显示滚动条
								realtime: true,
								start: 0, // 初始化时滚动条左边在0%的位置
								end: 100, // 初始化时滚动条右边在100%的位置
								type: 'slider'//启用slider型dataZoom组件，以便在x轴处显示滚动条，需要先设置show为true
							},
							{   //默认控制x轴
								type: 'inside' //启用inside型dataZoom组件，此时可在图表中滚动鼠标滚轮进行缩放，图表内部也可左右拖动
							}
							]
	};
	if (option && typeof option === "object") {
		myChart4.setOption(option, true);
	}
	window.onresize = function(){
		myChart4.resize();
	}
	myChart4.resize();
}

//展示多柱图
function showMultiCol(divId,chartData){
	var id =document.getElementById(divId);
	var myChart = echarts.init(id);
	var option = {
		//backgroundColor: '#001F55',
			title : {
				show : chartData[1].showTitle, //是否显示标题
				//标题相对x、y轴的位置
				x : 'center',
//				y : 'top',
				text : chartData[1].titleText, //标题内容
				textStyle : {
					color:'#FFFFFF',
					fontSize : '18'
				},
//				left : '20%',
				bottom:'5%'
			},
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'cross',        // 默认为直线，可选为：'line' | 'shadow' | 'cross'
				label :{
					textStyle:{
						//color:'#001F55'
					},
					fontSize:12, // 坐标轴指示器动态显示当前坐标时的字体大小
					backgroundColor : '#000000'
				}
			}
		},
		grid: {//图表在DIV容器中的位置和大小
            width:'90%',
            height:'60%',
            top:'20%',
            left:'5%',
            containLabel: true
		},
		legend: { //图表右上角默认显示的各个柱名标识(图例)
			show : chartData[1].showLegend,//是否显示图例
			right : '5%',
			data:chartData[1].legendData,
			textStyle:{
				color:'#fff',
				fontSize:chartData[1].legendFontSize //图例文字大小
			}
		},
		xAxis : [
			{
				type : 'category',
				data : chartData[1].xAxisData,
				axisTick: {//坐标轴刻度相关设置。
					alignWithLabel: true	//类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
				},
				axisLine:{//坐标轴轴线相关设置。
					lineStyle:{
						color:'#fff',
						width:1,//x轴线宽
						shadowColor : '#001F55'
					}
				},
				axisLabel:{
					interval : 0, // 图表宽度太小时，x坐标是否间隔显示，0为全部显示
					rotate: chartData[1].xAxisLabelRotate, //-15 : -n度角倾斜显示
					fontSize : chartData[1].xAxisFontSize //x轴坐标字体大小
                },
                axisPointer:{
                	type: 'line' //鼠标指向柱子时，对应显示十字线或阴影块/柱子遮罩等，可选 'line' | 'cross' | 'shadow' | 'none'(无)
                }
			}
		],
		yAxis : [
			{
				name: chartData[1].yAxisName,
				type: 'value',
				axisLine:{
					lineStyle:{
						color:'#fff',
						width:1//y轴线宽
					}
				},
				axisLabel:{
					fontSize : chartData[1].yAxisFontSize //y轴坐标字体大小
                }
			}
		],
		series : [],
		dataZoom: [ //图表缩放设置，对折线图和柱状图有效，对饼图使用会出错
		    {   //默认控制x轴
		        show: false, //是否显示滚动条
		        realtime: true,
		        start: 0, // 初始化时滚动条左边在0%的位置
		        end: 100, // 初始化时滚动条右边在100%的位置
			type: 'slider'//启用slider型dataZoom组件，以便在x轴处显示滚动条，需要先设置show为true
		    },
		    {   //默认控制x轴
			type: 'inside' //启用inside型dataZoom组件，此时可在图表中滚动鼠标滚轮进行缩放，图表内部也可左右拖动
		    }
		]
	};
	
	var tmpSeries = [];
	for(var i=0;i<chartData[1].series.length;i++){
		var tmpCols = {
				"name":chartData[1].series[i].name, //各柱标识名
				"type":"bar",
				"barWidth":chartData[1].barWidth, //各柱宽度
//				"barGap":"2%", //柱子间隔，可为负值
				"data":chartData[1].series[i].data,
				"label":{
					"normal":{
						"show": chartData[1].showYaxisLabel, //是否在柱形顶部静态显示柱值
						"position":"top",
						"formatter":chartData[1].yAxisLabelFormatter,//柱顶部显示值
						"fontSize":chartData[1].yAxisLabelFontSize,//柱顶部显示值字体大小
						"textStyle":{}
					}
				},
				"itemStyle":chartData[1].series[i].itemStyle
				};
		tmpSeries.push(tmpCols);
	}
	option.series = tmpSeries;
	
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	window.onresize = function(){
		myChart.resize();
	}
	myChart.resize();
}

//展示饼图
function showPie(divId,chartData){
	var id =document.getElementById(divId);
	var myChart3 = echarts.init(id);
	var option = {
			//backgroundColor: '#001F55',
			title : {
				show: chartData[1].showTitle, //是否显示标题:true/false
				text: chartData[1].titleText, //图表主标题
				subtext: chartData[1].subTitleText, //图表副标题
				x:chartData[1].titleOfset[0], //图表标题 x偏移值:可为数值或'center'
				y:chartData[1].titleOfset[1], //图表标题 y偏移值:可为数值或'top'或'bottom'
				textStyle : {
					color : '#fff'
				}
			},
			tooltip : {
				trigger: 'item',
				formatter: (chartData[1].tooltip).join(""),//"{a} <br/>{b}",//{a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
				alwaysShowContent:false
			},
			calculable : true,
			series : [
			          {
			        	  name:chartData[1].seriesName,
			        	  type:'pie',
			        	  radius : chartData[1].seriesRadius,//["10","80"],//内外圆半径，也支持百分比 ['10%', '70%']
			        	  center : chartData[1].seriesCenter,//['50%', '50%'],
			        	  roseType : chartData[1].roseType ,// 删除该属性默认值为false，不显示南丁格尔图。通过半径区分数据大小。可选择两种模式：'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
			        	  labelLine:{
			        		  normal:{  
			        			  length: 10,
			        			  length2: 40
			        		  }  
			        	  },
			        	  label: {
			        		  normal: {
			        			  "formatter": chartData[1].yAxisLabelFormatter.replace(/\\n/g,"\n"),//块区外面显示的标注信息
			        			  "padding": [0,-50],
			        			  "fontSize": chartData[1].yAxisLabelFontSize
			        			  }
			        	  },
			        	  data:chartData[1].seriesData
			          }
			          ]
	};
	var enlarges = $("#"+divId).parent().attr("class");//查看大图时显示90%
	if("p20 ov cf" == enlarges && option && typeof option === "object"){
		option.series[0].minAngle = "0";
		option.series[0].radius = [0, "75%"];
		option.series[0].labelLine.normal.length = 20;
		option.series[0].labelLine.normal.length2 = 50;
	}
	if (option && typeof option === "object") {
		myChart3.setOption(option, true);
	}
	window.onresize = function(){
		myChart3.resize();
	}
	myChart3.resize();
}

//柱形+折线 混合图
function showBarLine(divId,chartData){
	var id =document.getElementById(divId);
	var myChart = echarts.init(id);
	var option = {
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
				var tmpRets = '<div><span>'+ param[0].name + '</span> </br> <span style="color:'+chartData[1].colors[0]+'">'+param[0].seriesName+'（'+ param[0].value +'个）</span></br> <span style="color:'+chartData[1].colors[1]+'">'+param[1].seriesName+'（'+ param[1].value +'%）</span></div>';
				return  tmpRets;
			}
		},
		grid: chartData[1].grid, //图表在DIV容器中的位置
		xAxis: [
			{
				type: 'category',
				data: chartData[1].xAxisData, //['电子信息','基础设施','生物医药','食品加工','现代服务业','新能源和新材料','装备制造']
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
					rotate: chartData[1].xAxisLabelRotate,//x轴坐标倾斜度
					fontSize : chartData[1].xAxisLabelFontSize//x轴字体大小
				},
				nameTextStyle :{
					fontSize:12
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: chartData[1].yAxisBarName, //'项目数（个）',//柱形的y轴名称（左边）
				//min: 0,
				//max: 100,
				//interval: 20,
				axisLabel: {
					formatter: '{value}', //'{value} 个' 柱形y轴刻度显示格式（左边）
					fontSize : chartData[1].yAxisBarFontSize,//y轴坐标字体大小
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
				name: chartData[1].yAxisLineName, //'项目比（%）', //折线的y轴名称（右边）
				//min: 0,
				//max: 100,
				//interval: 20,
				axisLabel: {
					formatter: '{value}', //'{value} %' 折线y轴刻度显示格式（右边）
					fontSize : chartData[1].yAxisBarFontSize //y轴坐标字体大小
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
				name: chartData[1].seriesName[0], //'数量',
				type:'bar',
				barWidth: '40%',
				label: {
				  normal: {
					  show: chartData[1].showBarVal, //是否显示柱值
					  position: 'insideTop',
					  formatter: chartData[1].yAxisBarFormatter,// "{c}个", //柱值显示格式
					  fontSize : chartData[1].yAxisBarFontSize //柱值字体大小
				  }
				},
				itemStyle:{
					color: chartData[1].colors[0]
				},
				data: (chartData[1].seriesData)[0] //[10 , 81 , 5 , 19 , 16 , 9 , 9]
			},
			{
				name: chartData[1].seriesName[1], //'比例',
				type:'line',
				yAxisIndex: 1,
				label: {
				  normal: {
					  show: chartData[1].showLineVal, //是否显示折线的折点值
					  position: 'top',
					  formatter: chartData[1].yAxisLineFormatter, //"{c}%", //折点值显示格式
					  fontSize : chartData[1].yAxisLineFontSize //折线的折点值字体大小
				  }
				},
				itemStyle:{
					color: chartData[1].colors[1]
				},
				data: (chartData[1].seriesData)[1] //[6.71 , 54.36 , 3.36 , 12.75 , 10.74, 6.04, 6.04]
			}
		],
		dataZoom: [ //图表缩放设置，对折线图和柱状图有效，对饼图使用会出错
		    {   //默认控制x轴
		        show: false, //是否显示滚动条
		        realtime: true,
		        start: 0, // 初始化时滚动条左边在0%的位置
		        end: 100, // 初始化时滚动条右边在100%的位置
			type: 'slider'//启用slider型dataZoom组件，以便在x轴处显示滚动条，需要先设置show为true
		    },
		    {   //默认控制x轴
			type: 'inside' //启用inside型dataZoom组件，此时可在图表中滚动鼠标滚轮进行缩放，图表内部也可左右拖动
		    }
		]
	};
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	window.onresize = function(){
		myChart.resize();
	}
	myChart.resize();
}