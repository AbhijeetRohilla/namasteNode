const express =require('express');

const app = express();

app.use('/test',(req,res)=>{
    res.send("Hello Test")
})


app.use('/about',(req,res)=>{
    res.send("Hello About")
})

app.use('/',(req,res)=>{
    res.send("Hello Home")
})

app.listen(3000,()=>{
    console.log("Server Running ....");
    
})