const express = require('express');

const app = express();


app.get('/', (req, res)=>{

    res.send("你好")
})

app.get('/list', (req, res)=>{

   setTimeout(() => {
    res.send("列表")
   }, 3000);
})


app.listen(80, ()=>{
    console.log("请打开 http://localhost")
})