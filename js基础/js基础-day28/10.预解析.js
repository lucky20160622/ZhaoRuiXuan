// 10.给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
//  示例:
//  给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
//定义一个数组
var nums=[2,7,11,15]
//定义一个变量值
var target=9  
//定义一个空数组
var arr=[]
//for循环遍历数组(外循环)
for(var i=0;i<nums.length;i++){
    //for循环遍历数组(内循环)))
    for(var j=i+1;j<nums.length;j++){
        //假如数组中的某个元素相加等于变量值
        if(nums[i]+nums[j]==target){
            //则添加元素到新数组
            arr.push(i)
            arr.push(j)
            //结束循环
            break
            
        }
    }
}
//打印新数组
console.log(arr);
