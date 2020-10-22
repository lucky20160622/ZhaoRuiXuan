function f1(){
    this.user = "二狗子";
  }
  var a = new f1();
  console.log(a.user);  // ?二狗子
//this指向a  a=new f1() f1中user赋值为二狗子  所以输出为二狗子；