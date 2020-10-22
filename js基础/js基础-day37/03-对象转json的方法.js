let obj={
    name:"zs",
    age:18,
    brother:{
        gege:'a',
        didi:'b',
        meimei:'c',
        jiejie:'d'
    }
}

//对象转json
//JSON.stringify(对象或数组)

let objJson=JSON.stringify(obj)
console.log(objJson);

let arr=['a','b','c','d']
console.log(JSON.stringify(arr));