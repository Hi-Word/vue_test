// 资金申报公共js文件

$(function () {
  js();
})
function js() {
  openChildren();
  setMkClass();
  // 表格数据 和 申报条件 tab切换
  $(".wrapper").slide({titCell: ".tab-hd li", mainCell: ".tab-bd", effect: "fold",trigger: "click",delayTime: 0,});
  
  // 表格滚动条
  $('.tbody').perfectScrollbar();
  $('.policy-document-right').perfectScrollbar();

  //	申报条件
  $(".policy-document").slide({trigger:"click"});
}