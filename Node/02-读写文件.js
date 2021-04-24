// 1.加载文件模块
var fs =require("fs");
// 2.读取文件
//          路径        回调函数
fs.readFile("./node.md",function(error,data){
    
    if (error) {
        console.log("读取文件失败");
    } else {
        console.log(data.toString());
    }
});

fs.readFile('./1.txt',function(error,data){
    if (error) {
        console.log("读取文件失败");
    } else {
        console.log(data);
    }
});
//               路径       写入的内容         回调函数
fs.writeFile('./read.txt',"i'm writen input",function(error){
    if (error) {
        console.log("fail to write");
    } else {
        console.log("success");
    }
});

fs.stat('./node.md',function(error,stat){
    if (error) {
        console.log("读取文件属性失败");
    } else {
        console.log("ifFile:"+stat.isFile());
        console.log("isDirectory:"+stat.isDirectory());
        console.log("size:"+stat.size );
        console.log("birthTime:"+stat.birthtime);
        console.log("modefyTime:"+stat.mtime);

    }
});