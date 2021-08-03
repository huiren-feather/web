let fs=require('fs');

fs.unlink('1.html',(err)=>{
    if (err) {
        throw err;
    }
    console.log('文件删除成功');
})