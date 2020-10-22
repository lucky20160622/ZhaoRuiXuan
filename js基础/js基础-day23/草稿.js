// var arr=[1,2,3,4,5];

// console.log(arr.indexOf(3))



// var arr=[1,2];
// var input =prompt('输入')
// if(arr.indexOf(input)===-1){
//     alert('MO');
// }else{
//     alert('YES')
// }


// var arr = [1, 2];
// var max = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
// } console.log(max);

// var min=arr[0]
// var j=0;
// while(j<arr.length){
//     if(min>arr[i]){
//         min=arr[i];

//     }
//     j++;
// }console.log(min);

// var arr = [1, 2, 3];
// arr.sort(function(a,b){return a-b})
// console.log(arr)


// var arr = [1, 2, 3, 4];
// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j + 1] > arr[j]) {
//             var x = arr[j];
//             x = arr[j + 1];
//             arr[j + 1] = arr[j];
//             arr[j] = x
//         }
//     }
// } console.log(arr)


// 去重1
// var arr = [1, 2, 3, 4, 5, 5, 1];
// var newArr = [];

// for (var i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i] === -1)) {
//         newArr.push(arr[i]);
//     }
// } console.log(newArr)


// var arr = [1, 2, 3, 4, 5, 7];
// for (var i = 0; i < arr.length / 2; i++) {
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i] = temp;
// } console.log(arr)







/*

14.已知数组{"周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"}.
    请查找出数组中是否有孙妍姿、汪菲。
    如果有，请给出索引；
    如果没有给出-1。

15. 有一个数组，var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
要求如下:
   1.从第 0 位开始删除 1 个元素，插入"parrot"、"anemone"和"blue"
   2.从第 2 位开始删除 2 个元素
   3.从第 1 位开始删除 0 个元素，插入“drum” 和 "guitar"

16.某班考试成绩如下，利用二维数组存储这些数据，统计出全班的平均成绩
  第一组： 89，66，54
  第二组： 77，93，68
  第三组： 55,   45,  88
  第四组： 71,   76,  75

17.  如下二维数组：
var arr = [
[23,45,78,98,67,89,100], // 张三
[2,55,77,57,67,89,11],    // 李四
[3,43,78,45,67,99,10],    // 王五
]
  1、获取李四的数学成绩： arr[1][0]
  2、使用二维数组遍历展示所有同学的所有成绩
  3、计算数学平均成绩：(arr[0][0]+ arr[1][0]+ arr[2][0])/3*/
// var arr = [[89, 66, 54], [77, 93, 68], [55, 45, 88], [71, 76, 75]];
// var count = 0;
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//         count++
//     }
// } console.log(sum, sum / count)


// var sum = 0
// var arr = [
//     [23, 45, 78, 98, 67, 89, 100], // 张三
//     [2, 55, 77, 57, 67, 89, 11],    // 李四
//     [3, 43, 78, 45, 67, 99, 10],    // 王五
// ]
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j])
//     }
// }


// var s = (arr[0][0] + arr[1][0] + arr[2][0]) / 3
// console.log(s)




// 23.现有二维数组，var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];                                       
//    1. 遍历打印二维数组的所有元素
//    2. 计算二维数组中所有元素的和
//    3. 求二维数组中所有元素的最大值。

// var sum = 0;
// var arr = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//         sum += arr[i][j];
//         var max = arr[0][0];
//         if (max < arr[i][j]) {
//             max = arr[i][j]
//         }
//     }
// }

// console.log(sum); console.log(max)



// 1. 定义数组 var arr = [11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部打印到控制台


// var arr = [11, 22, 33, 44, 55];
// // for (var i = 0; i < arr.length; i++) {
// //     console.log(arr[i])
// // }


// // 2. 定义数组 var arr = [11,22,33,44,55],要求：求数组中所有的元素的和


// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// } console.log(sum)



// 3. 定义数组 var arr = [11,22,33,44,55],要求：将arr数组中为偶数的元素打印到控制台
// var s = [];
// var arr = [11, 22, 33, 44, 55];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         x.push(arr[i])

//     }
// } console.log(x)32


// 30.左奇右偶
//     10个整数的数组[26,67,49,38,52,66,7,71,56,87],元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。




// var arr = [26, 67, 49, 38, 52, 66, 7, 71, 56, 87];
// var ji = [];
// var ou = [];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         ou.push(arr[i]);
//     } else {
//         ji.push(arr[i])

//     }
// } console.log(ji, ou)



// 22. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]


// var arr = [11, 32, 55, 47, 79, 23];
// var min = arr[0];
// for (var i = 0; i < arr.length; i++) {

//     if (arr[i] < min) {
//         arr[i] = min;
//     }
// } console.log(min);



// var arr = [11, 32, 55, 47, 79, 23];
// var max = arr[0];
// for (var i = 0; i < arr.length; i++) {

//     if (arr[i] > max) {
//         arr[i] = max;
//     }
// } console.log(max);



//重点
// 18.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引

// 创建一个变量来储存最小值
// var arr = [1, 2, 4, 5, 10, 100, 2, -22]
// var min = arr[0];
// // 创建一个变量来记录最小值的索引
// var index = 0;

// for (var i = 0; i < arr.length; i++) {

//     if (arr[i] < min) {

//         min = arr[i]
//         index = i;
//     }
// }

// console.log(index)



// 20.将数组var arr= [1,3,2,8,6,11,9]，采用冒泡排序，按照从小到大排序

// var arr = [1, 3, 2, 8, 6, 11, 9];

// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             var x = 0;
//             x = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = x;
//         }

//     }
// } console.log(arr)


// 3. 定义数组 var arr = [11,22,33,44,55],要求：将arr数组中为偶数的元素打印到控制台

// var arr = [11, 22, 33, 44, 55];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
// } 

// 4. 定义数组 var arr =[11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部倒叙打印到控制台



// var arr = [11, 22, 33, 44, 55];

// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//             var x = 0;
//             x = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = x;
//         }
//     }
// } console.log(arr)



// 33.  有一个从大到小排好序的数组[99，85，82，63，60]，现从页面输入一个数，要求按原来的规律将它插入数组中，
// 要求，假设你输入的80，则应该插入到82和63之间


// var arr = [99, 85, 82, 63, 60];
// arr.splice(3, 0, 80);
// console.log(arr)


// 35.将一个一维数组，var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
//     通过一定方法，转成二维数组 var newarr = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]]


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// var newArr = [];

// for (var i = 0; i < arr.length; i += 6) {
//     newArr.push(arr.slice(i, i + 6));
// }
// console.log(newArr)



// // 5. 分析以下需求并实现
// //    1.定义一个用于存放班级分数的数组var score = [80,90,85,90,78,88,89,93,98,75];
// //    2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
// //    3.求出班级的平均分
// //    4.求出班级的总分数


// var score = [80, 90, 85, 90, 78, 88, 89, 93, 50, , 98, 75];
// var c = 0
// for (var i = 0; i < score.length; i++) {
//     if (score[i] < 60) {
//         c++
//         console.log(c)
//     }
// }






// // 24.10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
// //       1.去除数组中重复的内容，只保留唯一的元素。
// //       2.以下列格式打印数组：[9,10,6,1,3,5,4]


// var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4];

// for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//         if (arr[j] == arr[i]) {
//             arr.splice(j, 1);
//             j--
//         }
//     }
// } console.log(arr)




// // 26.  将下面的数组元素前后互换
// //          [11, 32，55, 47，79，23]	
// //           置换后的数组元素为：
// //           [23, 79, 47, 55, 32, 11]


// var arr = [11, 32, 55, 47, 79, 23];
// console.log(arr.reverse())






// // 8.定义一个整数数组，包含元素[1,3,4,7,8]，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。
// var sum = 0
// var arr = [1, 3, 4, 7, 8];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         sum++;
//     }
// } console.log(sum)



// // 12.var arr = ['张三'，'李四'，‘王五’]
// // 要求，将数组中的每一个数据拼接在一起，每个数据之间用 | 符合拼接。 如：‘张三|李四|王五

// var arr = ['张三', '李四', '王五'];
// console.log(arr.join('|'))



// // 19.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。

// var arr = [10, 5, 34, 59, 98];

// var result = arr.sort(function (a, b) { return b - a })
// console.log(result)



// // 20.将数组var arr= [1,3,2,8,6,11,9]，采用冒泡排序，按照从小到大排序


// var arr = [1, 3, 2, 8, 6, 11, 9];

// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             var x = 0;
//             x = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = x;
//         }
//     }
// } console.log(arr)27





// // 21.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?


// var arr = [10, 5, 34, 59, 98];
// var max = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max)


// var i = 0;
// var min = arr[0]
// while (i < arr.length) {
//     if (arr[i] < min) {
//         min = arr[i];
//     } i++;
// }
// console.log(min)



// 25.已知arr数组内容[1, 3, 5, 8, 10, 11, 16]，编码实现：数组中所有奇数加1，偶数-1,最后打印数组内容


// var arr = [1, 3, 5, 8, 10, 11, 16];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         arr[i] += 1;
//     }
//     else {
//         arr[i] -= 1
//     }
// }
// console.log(arr)





// 9.var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
//     要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
//     var newArr=[1,3,4,5,6,6,5,4,7,6,7,5];




// var newArr = [1, 3, 4, 5, 0, 0, 6, 6, 0, 5, 4, 7, 6, 7, 0, 5];
// var n = []
// for (var a = 0; a < newArr.length; a++) {
//     if (newArr[a] != 0) {
//         n.push(newArr[a])
//     }
// }
// console.log(n);



// 7.   已有数组var nums = [5,10,15],要求创建一个新数组
//     1.新数组的长度和已知数组相同
//     2.新数组每个元素的值，是已知对应位置元素的2倍
//     3.在控制台中打印新数组的所有元素


// var nums = [5, 10, 15]
// var nume1 = []
// for (var a = 0; a < nums.length; a++) {

//     nume1.push(nums[a] * 2)
// }
// console.log(nume1);





// 27.将下面的数组元素前后互换，不能定义新的数组，在原数组上面操作，需要第一个元素和最后一个元素互换位置，第二个元素和倒数第二个元素互换位置，依次类推
//                   [11, 32，66, 47，79，23，89]	
//                 置换后的数组元素为：
//                   [89, 23, 79, 47, 66, 32, 11]




// var arr = [11, 32, 66, 47, 79, 23, 89];




// console.log(arr.reverse());28




// 10.定义一个长度为10的数组，在每一个元素存放一个单词，然后用户输入单词进行匹配，通过程序判断数组是否包含有这个单词，包含这个单词打印"YES",否则就是"NO"


// var arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

// var input = prompt("请输入您想要输入的单词");
// if (arr.indexOf(input) === -1) {
//     alert("NO");
// } else {
//     alert("YES");
// }


// 34.请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，
// 然后打印数组内容, var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]

// var arr = [1, 2, 4, 5, 7, 7, 666, 0, -1, -2, -3]
// var max = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }

// }
// var p = arr.indexOf(max)
// var temp = 0
// temp = arr[0]
// arr[0] = arr[p]
// arr[p] = temp

// var min = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i]
//     }

// }
// var p = arr.indexOf(min)
// var temp = 0
// temp == arr.length - 1
// arr.length - 1 == arr[p]
// arr[p] == temp
// console.log(arr)


// // 13.定义2个长度为5的字符串数组arrA和arrB，arrA包含元素["a","b","c","d","e"];
// // 遍历arrA中的所有元素并按逆序存储在数组arrB中，并按arrB下标增长的顺序在控制台打印输出arrB数组中所有元素，arrB的结果如下，var arrB = ["e","d","c","b","a"]

// var arr = ["a", "b", "c", "d", "e"];
// var narr = []

// for (var i = arr.length - 1; i >= 0; i--) {
//     narr.push(arr[i])
// }
// console.log(narr)



// // 6.  var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。

// var obj = {};
// var arr = [1, 1, 2, 2, 3, 4, 5, 4, 3, 2, 1];
// for (var i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//         obj[arr[i]]++
//     }
//     else {
//         obj[arr[i]] = 1
//     }
// } console.log(obj)



// 35.找出一个数 组中有哪些重复元素，并且这些元素各重复了几次,var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]


// var obj = {};
// var arr = [0, 1, 3, 1, 1, 5, 5, 8, 8, 8, 0, 9, 5];
// for (var i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//         obj[arr[i]]++
//     } else {
//         obj[arr[i]] = 1
//     }
// } console.log(obj)





// 32.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
// var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列

// var arr1 = [1, 7, 9, 11, 8, 15, 10, 19];
// var arr2 = [2, 1, 6, 8, 10];

// var arr3 = arr1.concat(arr2);
// console.log(arr3);.36






// 28. 在数组中 查询数据第二次55出现的位置,打印第二次出现的索引（索引指从0开始）[11, 32，55, 47，55, 79，23]



// var arr = [11, 32, 55, 47, 55, 79, 23];
// var b = 0;
// var conut = 0;


// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 55) {
//         b = i;
//         conut++;    36
//     }
// }
// if (conut == 2) {
//     console.log(b);
// }29





// 32.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
// var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列

// var arr1 = [1, 7, 9, 11, 8, 15, 10, 19];
// var arr2 = [2, 1, 6, 8, 10];
// var arr3 = arr1.concat(arr2);

// for (var i = 0; i < arr3.length; i++) {
//     for (var j = i + 1; j < arr3.length; j++) {
//         if (arr3[j] == arr3[i]) {
//             arr3.splice(j, 1);
//             j--;
//         }

//     }
// }
// console.log(arr3);
// var result = arr3.sort(function (a, b) { return b - a })
// console.log(result)






// 11.  var arr = [1,888,4,66,7,8]
// 要求，可以把数组中的下标为 3 的元素移到数组的开头  

// var arr = [1, 888, 4, 66, 7, 8]
// for (var i = 0; i < arr.length; i++) {
//     if (i == 3) {
//         arr.unshift(arr[i]);//移动之后数组长度加+，别忘记unshift向数组添加元素的时候会增加数组的长度
//         arr.splice(i + 1, 1);
//     }
// }
// console.log(arr)





// 29. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
//       var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// 要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组


// var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
// var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// var arr3=[].concat(arr1+arr2);
// console.log(arr3);30


