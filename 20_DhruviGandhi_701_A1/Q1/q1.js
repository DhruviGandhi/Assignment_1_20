const express=require("express");
const app=express();

app.get("/getHello",(req,res)=>{
    res.sendFile(__dirname+"/hello.html");
})

app.listen(3000,()=>{console.log("Server is running on port 3000");
});