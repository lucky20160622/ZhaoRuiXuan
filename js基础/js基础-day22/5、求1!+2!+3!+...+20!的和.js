var sum = 0;
for (var j = 1; j <= 20; j++) {
    var jie = 1;
    for (var i = 1; i <= j; i++) {
        jie = jie * i;
    }
    // console.log(jie);
    sum += jie;
}
console.log(sum)

