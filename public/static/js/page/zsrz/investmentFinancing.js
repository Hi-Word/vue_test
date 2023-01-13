
	$(function(){
		js();		
	})	
	
	function js(){
		openChildren();
		setMkClass();//设置模块选中	
		//政策文件类型 
		$(".investment-financing .policy-document").slide({titCell:".policy-document-hd li",mainCell:".policy-document-bd",effect:"fold",trigger:"click",delayTime:0});
		// 项目招商-产业龙头项目tab切换
		$(".investment").slide({titCell:".industry-hd li",mainCell:".industry-bd",effect:"fold",trigger:"click",delayTime:0});
		//项目融资 政策文件 tab切换
		$(".investment-financing").slide({trigger:"click"});
		//滚动条
		$('.investment-financing-left-bd,.investment-financing-right ul,.policy-document-left ul,.policy-document-right .ov').perfectScrollbar();
	}
