var name3 = "zs";
function f3() {
    var name3 = "ls";
    function f4() {
        name3 = "ww";
    }
    f4();
    console.log(name3);   // ?ww
}
f3();
console.log(name3); // ?zs
//1.首先f3()进入function 中寻找name3=ls ，
//2. 继续向下走name3=ww  把上面的覆盖，得f4=ww
//3. 打印结果是ww
//4.console.log()直接寻找var name=zs 因为function里面的name3已经被占用 
//5.所以 输出结果是zs
