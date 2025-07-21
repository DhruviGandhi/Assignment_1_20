const {chatBoatReply}=require("./chatBoatReply.js");
const readline=require("readline");
const r1=readline.createInterface(process.stdin,process.stdout);
r1.setPrompt("You---->");
r1.prompt();
r1.on("close",()=>{});
r1.on("line",(msg)=>{
    console.log("Noddy---->"+chatBoatReply(msg));
    r1.prompt();
}).on("close",()=>{process.exit(0)});