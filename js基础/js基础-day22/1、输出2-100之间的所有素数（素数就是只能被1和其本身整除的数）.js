for(var i=2;i<=100;i++){
    var flag=true
    for(var j=2;j<i;j++){
        if(i%j==0){
            flag=false
        }
    }if(flag==true){
        console.log(i);
    }
}
