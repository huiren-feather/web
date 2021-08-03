const path=require('path');

// 获取文件/路径的扩展名
console.log(path.extname('2')); 
console.log(path.extname('2.html')); 

//生成完成的绝对路径,没啥用，必须中间不能有断开
let arr1=['d','web','2.html'];
let result1=path.resolve(...arr1);
console.log(result1);


// - `__dirname`：这是一个常量，表示：当前执行文件所在**完整目录**。

// - `__filename`：这是一个常量。表示：当前执行文件的**完整目录 + 文件名**。

// - `process.cwd`：获取当前执行 Node命令 时的目录名。
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

// path.join() 将多个路径进行拼接

console.log(path.join(__dirname,'index.html')); 
;