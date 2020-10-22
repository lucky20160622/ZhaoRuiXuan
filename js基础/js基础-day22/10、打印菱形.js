for (var i = 0; i <3; i++) {
  var str = "";
  for (var j = 3; j >= i; j--) {
    str = str + '-';
  }for(var k=0;k<2*i+1;k++){
      str+='*'
  }
  console.log(str);
}
console.log("*******")
for (var s = 0; s < 3; s++) {
    var str = "";
    // i: 1 2 3
    for (var i = 0; i <= s; i++) {
        str += "-"
    }
    // j: 5 3 1
    for (var j = 0; j <= -(2 * s + 1) + 5; j++) {
        str += "*"
    }
    console.log(str);
}