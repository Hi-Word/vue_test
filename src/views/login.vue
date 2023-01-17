<template>
    
        <div class="login-bd" >
            <div class="logo"><img src="../../public/static/images/login-logo.png"></div>
            <div class="bd-inner">
                <div class="inner-wrap">
                    <div class="wrap-lg">
                        <p class="yhzc">用户登录</p>
                        <div class="login">
                            
                            <div class="login_item">
                                <div class="item administrative">
                                    <form action="" method="post" id="longin_form">
                                        <div class="name">
                                            <i class="iconfont icon-yonghu2"></i>
                                            <!-- <el-input v-model="input" id="username" name="username" placeholder="用户名"  onkeyup="loginKeyEvnet(event,this)"/> -->
                                            <input type="text" id="username" name="username" placeholder="用户名" autocomplete="off" onkeyup="loginKeyEvnet(event,this)"/>
                                        </div>
                                        <div class="password">
                                            <i class="iconfont icon-mima"></i>
                                            <input type="password" id="password"  name="password"  placeholder="密码" autocomplete="off" required onkeyup="loginKeyEvnet(event,this)"/>
                                        </div>
                                        <div class="verification_code">
                                            <i class="iconfont icon-zhucedengluyanzhengma"></i>
                                            <input type="text" id="yzm" name="yzm"  value="" placeholder="请输入验证码" onkeyup="loginKeyEvnet(event,this)">
                                            <span class="check-code" style="overflow: hidden;">
                                                <img id="yzmImg" src="" onclick="refreshImage()" style="width:100%;:pointer;text-align:left;" />
                                            </span>
                                        </div>
                                
                                        <div class="submit">
                                            <a class="submit_button" href="main">安装</a>
                                            <el-button type="primary" @onClick="doLogin()">登录</el-button>     
                                            <!-- <input class="submit_button" type="button" onClick="doLogin()" value="登录" /> -->
                                            <a class="registered_button" href="registered">注册</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</template>
  
  <script>
  import '../../public/static/js/common/jquery-1.9.1.min.js'
  import '../../public/static/js/login.js'    
  export default {
    name: 'loginView'
  }
  </script>
  <style scoped>
          
    @import '../../public/static/css/login.css';
    @import '../../public/static/iconfont/iconfont.css';
  </style>
  