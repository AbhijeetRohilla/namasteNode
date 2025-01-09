const express =require('express');

const app = express();

app.get('/test',(req,res)=>{
    res.send("Hello Test")
})


app.post('/test:id',(req,res)=>{
    console.log(req.params);    
    res.send("Hello About")
})

app.delete('/test',(req,res)=>{
    console.log(req);
    res.send("Deleted Succesfully")
    
})


app.listen(3000,()=>{
    console.log("Server Running ....");
    
})