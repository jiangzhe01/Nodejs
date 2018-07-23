module.exports=hello;
function hello(){
    var name;
    this.setName=function(thyName){
        name=thyName;
    }
    this.sayHello=function(){
        console.log("Hello "+name)
    }
}