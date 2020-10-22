// 需求: 鸡兔同笼：鸡和兔子一共35只，笼子里一共有94只脚，用程序计算出鸡和兔子分别多少只
var ji = 2
var tu = 4
for (j = 1; j <= 35; j++) {
    for (t = 1; t <= 35; t++) {
        if (ji * j + t * tu == 94 && j + t == 35) {
            console.log(j, t)
        }
    }
}