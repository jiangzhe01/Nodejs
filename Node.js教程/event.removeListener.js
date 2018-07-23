var event=require("events");
var eventEmitter=new event.EventEmitter();

eventEmitter.addListener("data",function(){
    console.log("注册一个监听器");
})
eventEmitter.removeListener("data",function(){
    console.log("删除监听器data");
})
eventEmitter.emit("data");