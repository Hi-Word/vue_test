	$(function(){
		js();
	})	
		
	function js(){	
		//滚动条
		$('.generate-reports .list').perfectScrollbar();		
		openChildren();
		setMkClass();//设置模块选中
	}
