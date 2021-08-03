let mysql=require('mysql');

let options={
    host:'localhost',
    user:'root',
    password:'123456',

}

let connection =mysql.createConnection(options);

connection.connect((err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('数据库连接成功');
    }
});

//创建新的数据库
const strSql1='create database nodelink';
connection.query(strSql1,(err,result)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('新建数据库成功：'+JSON.stringify(result));
    }
}) 
