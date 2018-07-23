buf=new Buffer(244);
buf.write("hello,world");
var json=buf.toJSON();
console.log(buf.toString("utf8",0,11));
console.log(json)