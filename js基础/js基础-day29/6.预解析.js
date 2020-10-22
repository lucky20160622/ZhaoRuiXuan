// function test(){
//  let x = 31;
//  if(true){
//    let x = 71;
//    console.log(x) // ?
// }
//  console.log(x) // ? 
// }
// test()


// 执行时的代码

// function test() {
//     let x = 31;
//     if (true) {
//         let x = 71;
//         console.log(x) //71  就近原则 
//     }
//     console.log(x) //31   外面的不能访问块级作用域内的变量  所以找同一作用域内的元素  31 
// }
// test()
