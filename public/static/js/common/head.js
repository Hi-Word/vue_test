document.writeln("<!doctype html>");
document.writeln("<html>");
document.writeln("<head>");
document.writeln("	<meta charset=\'utf-8\'>");
document.writeln("	<meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0\'>");
document.writeln("	<title>项目综合管理平台</title>");
/*
document.writeln("	<link href=\'/xmzhgl_xzb/css/common/iconfont.css\' rel=\'stylesheet\'/>");
document.writeln("	<link href=\'http://at.alicdn.com/t/font_1202973_68gho6vwhcb.css\' rel=\'stylesheet\'/>");
document.writeln("	<link href=\'/xmzhgl_xzb/css/common/jointRPNew.css\' rel=\'stylesheet\'/>");
document.writeln("	<script src=\'/xmzhgl_xzb/js/common/jquery-1.9.1.min.js\'></script>");
document.writeln("	<script src=\'/xmzhgl_xzb/js/common/jquery.SuperSlide.2.1.1.js\'></script>");
document.writeln("	<script src=\'/xmzhgl_xzb/js/common/js.js\'></script>");
document.writeln("	<script src=\'/xmzhgl_xzb/js/common/common.js\'></script>");
document.writeln("<script type=\'text/javascript\'>");
document.writeln("	$(function(){");
document.writeln("		setMkClass();");
document.writeln("		openChildren();");
document.writeln("	})");
document.writeln("</script>");
*/
document.writeln("<script type=\'text/javascript\'>");
document.writeln("	$(function(){");
document.writeln("		loadXxtxCount();//显示消息提醒数量");
document.writeln("		loadUsername();//获取登录用户名称");
document.writeln("	})");
document.writeln("</script>");

document.writeln("</head>");
document.writeln("<body>");
document.writeln("<div class=\'header\'>");
document.writeln("	<div class=\'left\'><span class=\'time\'>11:05</span><span><em class=\'week\'>星期四</em><br/><em class=\'specific-date\'>2019/5/10</em></span>");
document.writeln("		<!--消息提醒star-->");
document.writeln("		<span class=\'display\'  style=\'margin-left: 30px;\'>");
document.writeln("				<a href=\'/xmzhgl_xzb/show/xxtx/messageList?tid="+Math.round(Math.random()*1000000)+"\' data-toggle=\'tooltip\' data-placement=\'top\' title=\'消息提示\' style=\'color: #deff00;\'>");
document.writeln("				<span class=\'iconfont icon-xiaoxi\' aria-hidden=\'true\' style=\'font-size:25px;position:relative;\'></span>");
document.writeln("				<span class=\'xiaoxi\' id=\"xxnum2\">");
document.writeln("				<span class=\'xiaoxi_r\' id=\"xxnum\"></span>");
document.writeln("            	</span>");
document.writeln("				</a>");
document.writeln("				</span>");
document.writeln("		<!--消息提醒end-->");
document.writeln("	</div>");
document.writeln("	<div class=\'logo\'><img src=\'/xmzhgl_xzb/images/logo.png\'/></div>");
document.writeln("	<div class=\'right\'>");
document.writeln("		<a target=\'_blank\' href=\'http://zmqzcyyq.gxzf.gov.cn/\'><i class=\'iconfont icon-youjiantou\'></i>园区网站</a><a target=\'_blank\' href=\'\'><i class=\'iconfont icon-jichushuju\'></i>园区OA</a><a href=\'/xmzhgl_xzb/show/ly/message?tid="+Math.round(Math.random()*1000000)+"\'><i class=\'iconfont icon-fabuxiangmu\'></i>我的留言</a><a href=\'/xmzhgl_xzb/show/sc/collection?tid="+Math.round(Math.random()*1000000)+"\'><i class=\'iconfont icon-shoucang\'></i>我的收藏</a>");
document.writeln("		<a><i class=\'iconfont icon-yonghu\'></i><span id=\'username\'></span></a><a href=\'/xmzhgl_xzb/login.html\'><i class=\'iconfont icon-tuichu\'></i>退出</a>");
document.writeln("	</div>");
document.writeln("</div>");
document.writeln("<div class=\'h20\'></div>");
document.writeln("<div class=\'nav\'>");
document.writeln("	<ul class=\'cf\'>");
document.writeln("		<li id=\'nav_sy\' class=\'nLi\'><h3><a href=\'/xmzhgl_xzb/show/index/main?tid="+Math.round(Math.random()*1000000)+"\'>首页</a></h3></li>");
document.writeln("		<li id=\'xmzl\' class=\'nLi\'><h3><a href=\'/xmzhgl_xzb/show/xmzl/projectOverview?tid="+Math.round(Math.random()*1000000)+"\'>项目总览</a></h3></li>");
document.writeln("		<li id=\'zsrz\' class=\'nLi\'><h3><a href=\'/xmzhgl_xzb/show/zsrz/investmentFinancing?tid="+Math.round(Math.random()*1000000)+"\'>招商融资</a></h3></li>");
// 资金申报start--------
// document.writeln("		<li id=\'zjsb\' class=\'nLi\'><h3><a href=\'/xmzhgl_xzb/show/zjsb/index?tid="+Math.round(Math.random()*1000000)+"\'>资金申报</a></h3></li>");
document.writeln("		<li id=\'zjsb\' class=\'nLi\'><h3><a>资金申报</a></h3>");
document.writeln("			<ul class=\'sub\'>");
document.writeln("				<li><a href=\'/xmzhgl_xzb/show/zjsb/zyysn?tid="+Math.round(Math.random()*1000000)+"\'>中央预算</a></li>");
document.writeln("				<li><a href=\'/xmzhgl_xzb/show/zjsb/bbwb?tid="+Math.round(Math.random()*1000000)+"\'>北部湾办</a></li>");
document.writeln("				<li><a href=\'/xmzhgl_xzb/show/zjsb/zxz?tid="+Math.round(Math.random()*1000000)+"\'>专项债</a></li>");
document.writeln("			</ul>");
document.writeln("		</li>");
// 资金申报end--------
document.writeln("		<li id=\'xmgl\' class=\'nLi\'><h3><a>项目管理</a></h3>");
document.writeln("			<ul class=\'sub\'>");
document.writeln("				<li><a href=\'/xmzhgl_xzb/show/xmgl/xmjieduan/projectManagement?tid="+Math.round(Math.random()*1000000)+"\'>项目阶段</a></li>");
document.writeln("				<li><a href=\'/xmzhgl_xzb/show/xmgl/xmjindu/projectProgress?tid="+Math.round(Math.random()*1000000)+"\'>项目进度</a></li>");
document.writeln("				<li><a href=\'/xmzhgl_xzb/show/xmgl/xmyj/projectEarlyWarning?tid="+Math.round(Math.random()*1000000)+"\'>项目预警</a></li>");
document.writeln("				<li><a href=\'/xmzhgl_xzb/show/xmgl/xmsp/projectApproval?tid="+Math.round(Math.random()*1000000)+"\'>项目审批</a></li>");
document.writeln("				<li><a href=\'/xmzhgl_xzb/show/xmgl/xmgh/projectPlan?tid="+Math.round(Math.random()*1000000)+"\'>项目规划</a></li>");
document.writeln("			</ul>");
document.writeln("		</li>");
document.writeln("		<li id=\'xmxc\' class=\'nLi\'><h3><a href=\'/xmzhgl_xzb/show/xmxc/liveVideo?tid="+Math.round(Math.random()*1000000)+"\'>项目现场</a></h3></li>");
document.writeln("		<li id=\'tjfx\' class=\'nLi\'><h3><a href=\'/xmzhgl_xzb/show/tjfx/statisticalAnalysis?tid="+Math.round(Math.random()*1000000)+"\'>统计分析</a></h3>");
document.writeln("			<ul class=\'sub\'>");
document.writeln("				<li><a href=\'/xmzhgl_xzb/show/tjfx/generateReports?tid="+Math.round(Math.random()*1000000)+"\'>生成报表</a></li>");
document.writeln("			</ul>");
document.writeln("		</li>");
document.writeln("		<li id=\'zqtx\' class=\'nLi\'><h3><a href=\'/xmzhgl_xzb/show/zqtx/phonebook?tid="+Math.round(Math.random()*1000000)+"\'>政企通讯</a></h3></li>");
document.writeln("	</ul>");
document.writeln("</div>");
document.writeln("</body>");
document.writeln("</html>");