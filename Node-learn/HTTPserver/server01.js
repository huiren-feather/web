const http=require('http');

var server=http.createServer(function(){
    console.log('有人来访问我了');
});

server.listen(8080);