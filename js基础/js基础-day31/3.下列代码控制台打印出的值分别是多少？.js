var a = {
    user: '二狗子',
    b: {
      user: '大傻子',
      f1: function () {
        alert(this.user);  // ?  大傻子
      }
    }
  }
  a.b.f1();
  

  //a.b.f1() this指向b. 所以b里面user赋值为大傻子 输出为大傻子  