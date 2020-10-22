// 20.写一个函数，打印九九乘法表
function jj(){
    for(var i=1;i<=9;i++){
        var str=''
        for(var j=1;j<=i;j++){
            str+=j+'x'+i+'='+j*i+' '
        }
        console.log(str);
    }
    
}
jj()