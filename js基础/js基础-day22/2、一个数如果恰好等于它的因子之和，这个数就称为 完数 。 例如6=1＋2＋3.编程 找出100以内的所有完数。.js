for(var i=1;i<=100;i++){
    var sum=0
    for(var j=1;j<i;j++){
        if(i%j==0){
            sum+=j
        }
    }if(sum==j){
        console.log(i);
    }
}