const { rejects } = require('assert');
const fs =require('fs');
const { resolve } = require('path');

function fsRead(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,{flag:'r',encoding:'utf-8'},(err,data)=>{
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

module.exports=fsRead;