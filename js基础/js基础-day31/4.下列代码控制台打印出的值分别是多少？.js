var a = {
    user: '二狗子',
    b: {
      f1: function () {
        console.log(this.user);  // ?undefined
      }
    }
  }
  a.b.f1(); 
  

  //因为this指向是b 而b中没有user 所以输出undefined；