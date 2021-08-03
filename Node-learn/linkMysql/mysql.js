const mysql=require('mysql');

let options={
    host:'localhost',
    port:"3306",
    user:"root",
    password:"123456",
    database:'db_test'
};

// 创建与数据库进行连接的连接对象
let connection=mysql.createConnection(options);

// 建立连接
connection.connect((err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("数据库连接成功");
    }
});

// 1.新建表
let strSql1='CREATE TABLE qiangu_table1 (id int NOT NULL AUTO_INCREMENT, name varchar(255) DEFAULT NULL,    age int DEFAULT NULL,    PRIMARY KEY (id));'

connection.query(strSql1,(err,result)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('新建表成功：'+JSON.stringify(result));
    }
})

// 2.查询表

let strSql2='select * from qiangu_table5';
connection.query(strSql2,(err,result,fields)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('qiangu_table5 表的查询结果：'+JSON.stringify(result));
        console.log('fields:'+JSON.stringify(fields));
    }
});

// 3.删除表

let strSql3='drop table qiangu_table1';
connection.query(strSql3,(err,result)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('表删除成功：'+result);
    }
});

// 4.插入   同上