var n = 0;
function a(){
    var n = 10;
    function b(){
        n++;
        console.log();(n);//11
    }
    b();
    return b;
}
var c = a();   //?
c(); //?
alert(n); // ?