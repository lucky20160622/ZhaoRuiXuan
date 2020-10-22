var num = 12332;
if(num>9999&&num<99999){
    var ge = num % 10;
    var shi = parseInt(num / 10 % 10)
    var bai = parseInt(num / 100 % 10)
    var qian = parseInt(num / 1000 % 10)
    var wan = parseInt(num / 10000)
    if (ge == wan && shi == qian) {
        console.log(num + '是为回文数');
    }

}