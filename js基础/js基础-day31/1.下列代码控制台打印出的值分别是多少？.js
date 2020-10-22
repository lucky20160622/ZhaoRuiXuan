function f1(){
    var user = '二狗子';
   console.log(this.user);//undefined
   console.log(this)//[Object Windows]
  }

 f1();
 //因为f1()指向是单纯的函数指向 就指向windows 在Windows里面没有找到user所以 输出是undefined；
 //因为前面没有赋值所以默认输出indows；