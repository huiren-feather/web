const http=require('http');

var server=http.createServer(function(request,response){
    console.log('有人来访问我了1');
    response.write('huiren shuai');
    response.end();
});

server.listen(8080);
