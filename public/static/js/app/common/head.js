document.writeln("<!doctype html>");
document.writeln("<html>");
document.writeln("<head>");
document.writeln("	<meta charset=\'utf-8\'>");
document.writeln("	<meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0\'>");
document.writeln("	<title>项目综合管理平台</title>");
document.writeln("	<link href=\'http://at.alicdn.com/t/font_1202973_68gho6vwhcb.css\' rel=\'stylesheet\'/>");
document.writeln("	<link href=\'/xmzhgl_xzb/css/app/common/main.css\' rel=\'stylesheet\'/>");
document.writeln("</head>");
document.writeln("");
document.writeln("<body>");
document.writeln(" <header>");
document.writeln("            <div class=\'col_title\' id=\'titile_name\'></div>        <!--标题自动读取 -->");
document.writeln("            <div class=\'back\'><a href=\'javascript:history.go(-1);\'><i class=\'iconfont icon-zuo\'></i></a></div>");
document.writeln("            <div class=\'nav\' onClick=\'showMenu()\'>");
document.writeln("            	<i class=\'iconfont icon-xingye\'></i>导航");
document.writeln("            </div>");
document.writeln("        </header>");
document.writeln("</body>");
document.writeln("</html>");
document.writeln("");

$(function(){
    var name =  getQueryString(name);
    $("#titile_name").html(name);
});