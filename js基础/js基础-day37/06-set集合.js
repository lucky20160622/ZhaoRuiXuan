var set=new Set()
set.add(1)
set.add('a')
set.add(null)
set.add(undefined)
set.add(true)
set.add(1); // set不能出现重复元素 就算你加了重复元素 也白加
console.log(set);


//方法：判断有没有该元素has()
console.log(set.has('a'));
//方法：delete()删除
console.log(set.delete(undefined));
console.log(set);

// 方法：清除clear()
console.log(set.clear());
console.log(set);