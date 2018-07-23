const event=require("events");
const fs=require("fs");
const eventEmitter=new event.EventEmitter();

// const connectHandler=function connected(){
//     console.log("ok");
//     eventEmitter.emit("data_received")
// }
//
// eventEmitter.on("connection",connectHandler);
// eventEmitter.on("data_received",function(){
//     fs.readFile("./demo.txt",function(err,data){
//         if(err)
//             console.log(err)
//         console.log(data.toString());
//     })
//     console.log("it's so fun!");
// })

var handle=function(){
    fs.readFile("./demo.txt",function(err,data){
        if(err){
            console.log(err);
        }
        console.log(data+" "+data.length);
        var buf=new Buffer(data.length);
        buf.write(data.toString());
        if(buf.length>10){
            eventEmitter.removeListener("data_received",function(){
                console.log("移除事件data_received")
            })
            eventEmitter.emit("data_received")
        }
    })
}
var hello=function hello(){
    console.log("hello, i am fun");
}
eventEmitter.on("connection",handle);
eventEmitter.on("data_received",hello)


eventEmitter.emit("connection");
eventEmitter.emit("data_received");