var color = "red";
   function outer() {
       var anotherColor = "blue";
       function inner() {
           var tmpColor = color;   
           color = anotherColor; 
           anotherColor = tmpColor;  
           console.log(anotherColor);     // ? red
       }
       inner();
   }
   outer();
   console.log(color);  // ?  blue
//1.outer（）进入function寻找 然后得到  var anotherColor = "blue"; 
//2.继续向下进入function 得到 tmpColor = color;  color=red 
//3.red=tepcolor   anotherColor = tmpColor; 
//4.所以打印anothercolor  得出是red
//5.console.log();进入function寻找得出是 color = anotherColor; 
//  6.var anotherColor = "blue";  输出结果是blue