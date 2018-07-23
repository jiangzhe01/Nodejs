const fs=require("fs");

const data=11439175;
fs.writeFile("txt.txt",data,{flat:"r+"},function(err){
        if(err){
            console.log(err)

        }
        else{
            console.log("OK");
        }
})