let arr = [1, 3, 4, 5, 3];
//使用for of遍历键的值
for (let key of arr) {
    console.log(key);
//通过for...of遍历arr中所有的键和值
for (let item of arr.entries()) {
    console.log(item);
}
//定义一个对象
let set = new Set(['a', 'b', 'f', 'e']);
//通过for...of遍历set中所有的键和值
for (let item of set.entries()) {
    console.log(item);
}


let map = new Map([
    ['a', 1],
    ['b', 2],
    ['f', 4]
])
//通过for...of遍历Map中所有的键和值
for (let item of map.entries() ){
    console.log(item);
}