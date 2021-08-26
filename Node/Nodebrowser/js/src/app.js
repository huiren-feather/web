let module1=require('./module1');
let module2=require('./module2');
let module3=require('./module3');

module1.foo();

module2();

module3.foo1();

module3.foo2();

const process =require('process');
const path=require('path');

// console.log(process);
// console.log(path);
console.log(process.version);
console.log(path.resolve('../'));


// const express=require('express');

// console.log(express);

const fs=require('fs');
fs.readFile('hello.txt',(err,data)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('异步读取数据：'+data);
    }
});


 var fsRead=require('./promise封装fs.readFile');


//  方法1
//  var promise1=fsRead('hello1.txt');
//  promise1.then(res1=>{
//      console.log(res1);
//      return fsRead('hello2.txt');
//  }).then(res2=>{
//      console.log(res2);
//      return fsRead('hello3.txt');
//  }).then(res3=>{
//      console.log(res);
//  })


// 方法2
async function ReadList() {
    var res1= await fsRead('hello1.txt');
    var res2= await fsRead('hello2.txt');
    var res3= await fsRead('hello3.txt');
    
}

ReadList();