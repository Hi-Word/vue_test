	$(function(){
		//滚动条
		$('.video ul').perfectScrollbar();
		openChildren();
		setMkClass();//设置模块选中
		$(".picture-display").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:6});
		//大图切换
		$(".more-images-con").slide({ titCell:".smallImg li", mainCell:".bigImg", effect:"fold", autoPlay:true,delayTime:200,
			startFun:function(i,p){
				//控制小图自动翻页
				if(i==0){ jQuery(".smallScroll .sPrev").click() } else if( i%1==0 ){ jQuery(".smallScroll .sNext").click()}
			}
		});

		//小图左滚动切换
		$(".more-images-con .smallScroll").slide({ mainCell:"ul",delayTime:100,vis:6,scroll:1,effect:"left",autoPage:true,prevCell:".sPrev",nextCell:".sNext",pnLoop:false });
		
		//开始直播视频
		$('#init').click(function () {
	          var player = new EZUIKit.EZUIPlayer('myPlayer');
		  
	          $("#stop").click(function () {
	             player.stop();
	          });

                  $("#init").hide();

	        });

		$(".bigImg").height(6600);
	});