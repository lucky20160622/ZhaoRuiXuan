var sum=0
var i=1
while(i<=100){
    if(i%3!=0){
        sum+=i
        if(sum>2000){
          console.log(sum)
          break
        }
    
    }i++
}