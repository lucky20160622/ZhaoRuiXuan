// let obj={
//     1:'a',
//     2:'b',
//     ture:'c',
//     undefined:'d',
//     null:'e'
// }
//  console.log(obj);
//  for(var key in obj){
//      console.log(typeof key);
//  }

//  map的语法
//  let map=new Map([
//      [键,值]
//      [键,值]
//  ])
// let map=new Map([
//     ['name','zs']
//     ['age',18]
//     [true,Boolean]
// ])
// console.log(map);
// console.log(map.size);

let map=new Map()
map.set('name',1)
map.set('married',false)
map.set('name','jack')
console.log(map);

// 字典名.has(key) 判断某一个键在不在map中  如果在 返回true 如果不在 返回false

console.log(map.has('name'));
// 字典名.get(key) 通过key获取map中的key对应的值
console.log(map.get('name'));
// 字典名.delete(key) 通过key删除整条数据
console.log(map.delete('name'));
// 字典名.clear() 清除所有成员数据
console.log(map.clear());

// 通过for...of遍历map中的所有的键
map.keys()
for(let key of map.keys()){
    console.log(key);
}
console.log(map.keys());

//通过for...of遍历map中的所有的值
for(let value of map.values){
    console.log(value);
}
//通过for...of遍历map中所有的键和值
for(let item of map.entries()){
    console.log(item[0]+'*******'+item[1]);

}
//通过foreach遍历map中所有的键和值
map.forEach(function(value,key){
    console.log(key+'******'+value);
})
