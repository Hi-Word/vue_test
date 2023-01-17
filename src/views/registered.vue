<template>

<body>
		<div class="registered-bd">
			<div class="logo"><img src="../../public/static/images/login-logo.png"></div>
			<div class="bd-inner">
				<div class="inner-wrap">
					<div class="wrap-lg">
						<div class="registered">
							<a href="login" class="login_back">
								登录
								<i class="iconfont icon-fanhui1-copy" style="font-size: 1vw !important;"></i>
							</a>
							<p class="yhzc">用户注册</p>
							<div class="registered_item">
								<div class="item">
									<form action="javascript:onSubmit = submitZcxx()" method="post" id="registered_form" >
										<div class="name">
											<i class="iconfont icon-xinxi1"></i>
											<input type="text" name="shxydm" placeholder="统一用社会信用代码" autocomplete="off" required />
										</div>
										<div class="password">
											<i class="iconfont icon-mima1"></i>
											<input type="password" name="mm" placeholder="密码" autocomplete="off" required />
										</div>
										<div class="unit_name">
											<i class="iconfont icon-tongxunlu-"></i>
											<input type="text" name="dwmc" placeholder="单位名称" autocomplete="off" required />
										</div>
										<div class="unit_address">
											<i class="iconfont icon-dingwei001"></i>
											<input type="text" name="dwdz" placeholder="单位地址" autocomplete="off" required />
										</div>
										<div class="legal_representative">
											<i class="iconfont icon-farendaibiao"></i>
											<input type="text" name="frdb" placeholder="法人代表" autocomplete="off" required />
										</div>
										<div class="legal_phone_number">
											<i class="iconfont icon-shouji"></i>
											<input type="text" name="frsjh" placeholder="法人代表手机号码" autocomplete="off" required />
										</div>
										<div class="enterprise_email">
											<i class="iconfont icon-youxiang"></i>
											<input type="text" name="qyyx" placeholder="企业邮箱" autocomplete="off" required />
										</div>
										<input class="registered_button" type="submit" value="注册" />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</template>
  
  <script> 
  import '../../public/static/js/common/jquery-1.9.1.min.js'
  import '../../public/static/js/registered.js'    
  export default {
    name: 'registeredView'
  }
  </script>
  <style scoped>
    @import '../../public/static/css/registered.css';
    @import '../../public/static/iconfont/iconfont.css';
  </style>