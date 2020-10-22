// 2.下列代码控制台打印出的值是多少？写出执行过程
function fn(){
    console.log("我们是全局的fn");
}
function fn2(){
    console.log(fn);  // ？
    fn = 3;
    return ;
    function fn(){
        console.log("我是fn2里面的");
    }
}
fn2();  


执行时的代码

function fn() {
    console.log("我们是全局的fn");
}
function fn2() {
    function fn() {
        console.log("我是fn2里面的");
    }
    console.log(fn);  // ？ function fn() { console.log("我是fn2里面的" ) ;  }
    fn = 3;
    return;

}
fn2();  

// 第一步先将fn2中的fn函数移到作用域的最上面  在调用fn2函数  打印的结果就是 fn2中的fn函数