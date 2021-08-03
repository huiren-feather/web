let fs=require('fs');

function writeFs(path,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,content,{flag:'a',encoding:'utf-8'},function(err){
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        })
    });
}

async function writeList(){
    await writeFs('1.html',"<h1>灰人</h1>");
    await writeFs('2.html',"'<h1>hello world</h1>'");
    await writeFs('1.html',"'<h2>,not stop forever</h2>'");

}

writeList();