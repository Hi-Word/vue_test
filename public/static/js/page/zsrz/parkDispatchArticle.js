    $(function(){
        js();
    })
    function js(){
        openChildren();
        setMkClass();
        $(".investment-financing .policy-document").slide({titCell:".policy-document-hd li",mainCell:".policy-document-bd",effect:"fold",trigger:"click",delayTime:0});
        $(".investment-financing").slide({trigger:"click"});
        
        $('.investment-financing-left-bd,.investment-financing-right ul,.policy-document-left ul,.policy-document-right .ov').perfectScrollbar();
    }
