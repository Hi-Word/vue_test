	$(function(){
		js();
		$('.collection_con').perfectScrollbar();
	})	
	function js(){
		openChildren();
		$(".investment-financing .policy-document").slide({titCell:".policy-document-hd li",mainCell:".policy-document-bd",effect:"fold",trigger:"click",delayTime:0});
		$(".investment-financing").slide({trigger:"click"});
	}
