const fs=require("fs");

let options={
    src:"./txt.txt",
    dist:"./out.txt"
}

let readstream=fs.createReadStream(options.src);
let writestream=fs.createWriteStream(options.dist);

readstream.pipe(writestream);
writestream.on("finish",()=>{
    console.log("完成");
})