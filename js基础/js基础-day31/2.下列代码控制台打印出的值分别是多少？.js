var a = {
    user: '二狗子',
    f1: function () {
      console.log(this.user); // ？二狗子
    }
  }
a.f1();


//a.f1()指向a  a里面user等于赋值是二狗子  然后f1中this指向user  所以输出结果是二狗子；
