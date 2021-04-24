// 1.引入HTTP模块
var http=require("http");

// 2.创建一个服务器实例
var server= http.createServer();

// 提供服务
// 接收请求，处理请求，发送响应

// 3.收到请求时，
// 回调处理函数，
// 两个参数：Request:请求对象 -->获取客户端的一些请求信息，如请求路径；
//        Response：响应对象 -->给用户发送响应信息
server.on('request',function(request,reponse){
    console.log('收到客户端请求,请求路径是：'+request.url);
    // reponse对象有一个方法：write ，用来给客户端发送响应数据
    // reponse.write('hello');
    // reponse.write('node.js');
    // // 最后一定要使用end方法结束响应
    // reponse.end();
    reponse.end('hello');//响应数据后结束响应
});
// 4.绑定端口号3000(随便写)，启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功，可以通过127.0.0.1:3000进行访问');
});



/*
1. var http=require("http");

2. var server=http.createServer();

3. servre.on(3000,function(){

});

4.server.on('request',function(){

});

*/ 