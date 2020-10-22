// 将一个一维数组，var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
// 通过一定方法，转成二维数组 var newarr = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]]

// 分析:
//  循环遍历arr  每次步进为6
// 使用splice(0,6) (6,6)  (12,6) 添加到一个新数组

// 步骤:
// 1.创建一个新数组
// var newarr = [];
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
// // 2.循环遍历旧数组 每次步进为6
// for (var i = 0; i < arr.length; i++) {
//     // i = 0;
//     // 3.使用arr.splice来截取对应的区间 0 -6 7-12 13-18
//     var c = arr.splice(0, 6);
//     // console.log(arr);
//     // console.log(c);
//     // 4.把截取出来的区间元素添加到新数组中
//     newarr.push(c);
// }

// console.log(newarr)

// 方法2
// 2.循环遍历旧数组 每次步进为6
// for (var i = 0; i < arr.length; i + 6) {
//     // i = 0;
//     // 3.使用arr.splice来截取对应的区间 0 -6 7-12 13-18
//     var c = arr.splice(i, 6);
//     // console.log(arr);
//     // console.log(c);
//     // 4.把截取出来的区间元素添加到新数组中
//     newarr.push(c);
// }

// console.log(newarr)


// 方法三:
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// var result = [];
// for (var i = 0; i < arr.length; i += 6) {

//     result.push(arr.slice(i, i + 6));
// }
// console.log(result);


// 方法四:
// var newArr = [];
// var arr1 = [];
// for (var i = 0; i < arr.length; i++) {
//     // 将数据添加到数组arr1
//     arr1.push(arr[i])
//     if (arr1.length === 6) {
//         newArr.push(arr1)
//         arr1 = []
//     }

// }
// console.log(newArr)