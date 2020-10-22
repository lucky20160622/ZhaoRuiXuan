//为什么要使用babel

//1.js的语法版本在不断更新 但是浏览器的支持程度却不一样  为了解决不同浏览器对于js新语法的支持程度不一样的问题  需要使用babel

//2.把新语法转换成老语法

let name="zhangsan"
const AGE=3.14

let fn=function(){
    let fn=()=>{
        console.log("aaaa");
    }
}

let fn1=function(){
    return2
}
let fn1=()=>2