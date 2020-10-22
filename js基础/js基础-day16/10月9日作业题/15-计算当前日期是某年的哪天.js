//输入年月日，获取这个日期是这一年的第几天
//  以3月5日为例，应该先把前两个月的加起来， 然后再加上5天即本月的第几天，特殊情况， 闰年且输入月份大于3时需考虑多加一天
var years = Number(prompt('请输入年'));
var month = Number(prompt('请输入月'));
var day = Number(prompt('请输入日'));

function getDay(years, month, day) {
    //天数
    var days = day;
    if (month == 1) { //如果月份为一月那 直接输出天数 跳出循环
        return days;
    }
    //判断月数
    //不是一月的话累加之前的月数加上当月的天数   months
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (var i = 0; i < month - 1; i++) { //第几天和之前所有天数和
        days += months[i];
    }
    if (isRn(years) && month > 2) { //判断输入的是否是闰年  与大于2月    是的天数加一  否则跳出循环
        days++; //加一天
    }
    return days;
}

function isRn(num) { //判断是否是闰年【能被4整除且不能被100整除，或者能被400整除】
    return num % 4 == 0 && num % 100 != 0 || num % 400 == 0;
}
document.write('今天是今年的第' + getDay(years, month, day) + '天');