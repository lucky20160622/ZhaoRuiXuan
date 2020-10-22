window.onload = function () {
  //  正确弹出的提示 提示应在input标签之后
  // <i class="success_icon"></i> 恭喜您输入正确
  // 添加给<span>class success
  // 错误弹出的提示 提示应在input标签之后
  // <i class="error_icon"></i> 格式不正确，请从新输入
  // 添加给<span>class error

  // 二次确认密码正确提示
  // this.nextElementSibling.innerHTML = `<i class="success_icon"></i> 恭喜您输入正确`;
  // 添加给<span> class success
  // 二次确认密码错误提示
  // <i class="error_icon"></i> 两次输入的密码不一样请重新输入
  // 添加给<span>class error
  var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
  var regqq = /^[1-9]\d{4,}$/; // 10000
  var regnc = /^[\u4e00-\u9fa5]{2,8}$/; //中文
  var regmsg = /^\d{6}$/; //短信验证码
  var regpwd = /^[a-zA-Z0-9_-]{6,16}$/; // 密码
  //获取元素
  // 手机号:
  var tel = document.querySelector("#tel");
  // QQ:
  var qq = document.querySelector("#qq");
  // 昵称:
  var nc = document.querySelector("#nc");
  // 短信验证码:
  var msg = document.querySelector("#msg");
  // 登陆密码:
  var pwd = document.querySelector("#pwd");
  // 确认密码:
  var surepwd = document.querySelector("#surepwd");
  regexp(tel, regtel); // 手机号码
  regexp(qq, regqq); // qq号码
  regexp(nc, regnc); // 昵称
  regexp(msg, regmsg); // 短信验证
  regexp(pwd, regpwd); // 密码框
  // 表单验证的函数
  /**
   *
   * @param {object} ele  传入节点
   * @param {object} reg  传入正则
   */
  function regexp(ele, reg) {
    ele.addEventListener("blur", function () {
      let value = this.value;
      // 判断输入的文字是否符合正则要求
      let flag = reg.test(value);
      if (flag) {
        console.log(this.nextElementSibling);
        this.nextElementSibling.className = "success";
        this.nextElementSibling.innerHTML = `<i class="success_icon"></i> 恭喜您输入正确`;
      } else {
        this.nextElementSibling.className = "error";
        this.nextElementSibling.innerHTML = `<i class="error_icon"></i> 格式不正确，请从新输入`;
      }
    });
  }
  //二次确认密码
  surepwd.addEventListener("blur", function () {
    if (pwd.value == surepwd.value) {
      this.nextElementSibling.className = "success";
      this.nextElementSibling.innerHTML = `<i class="success_icon"></i> 恭喜您输入正确`;
    } else {
      this.nextElementSibling.className = "error";
      this.nextElementSibling.innerHTML = `<i class="error_icon"></i> 两次输入的密码不一样请重新输入`;
    }
  });
};
