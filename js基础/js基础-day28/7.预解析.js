function a(b) {
    console.log(b);  //?
    var s = b();
    console.log(s)  // ?
  }
a(c);
function c() { return 123 }
