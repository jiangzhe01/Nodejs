const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:"search>>>"
})

rl.prompt()
rl.on("line",(line)=>{
    console.log(line);
    rl.prompt();
}).on("close",()=>{
    console.log("再见！");
    process.exit(0);
})