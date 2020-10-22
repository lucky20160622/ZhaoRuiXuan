// 需求: 求1!+2!+3!+...+10!的和



// 阶乘
// var jie = 1;
// for (var i = 1; i <= 1; i++) {
//     jie = jie * i;
// }
// console.log(jie);


// var jie = 1;
// for (var i = 1; i <= 2; i++) {
//     jie = jie * i;
// }
// console.log(jie);


// var jie = 1;
// for (var i = 1; i <= 3; i++) {
//     jie = jie * i;
// }
// console.log(jie);


var sum = 0;
for (var j = 1; j <= 10; j++) {
    var jie = 1;
    for (var i = 1; i <= j; i++) {
        jie = jie * i;
    }
    // console.log(jie);
    sum += jie;
}
console.log(sum);