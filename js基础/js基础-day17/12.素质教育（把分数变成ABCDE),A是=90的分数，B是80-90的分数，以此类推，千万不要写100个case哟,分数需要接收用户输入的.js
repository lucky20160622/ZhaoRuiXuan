// 12.素质教育（把分数变成ABCDE), A是 >= 90的分数，B是80 - 90的分数，以此类推，千万不要写100个case哟, 分数需要接收用户输入的
var a=+prompt('请输入分数')
if(a>=90){
    alert('A')
}else if(a>=80){
    alert('B')
}else if(a>=70){
    alert('C')
}else if(a>=60){
    alert('D')
}else if(a<60){
    alert('E')
}