let uniq=require('uniq');

let module1=require('./modules/module1');
let module2=require('./modules/module2');
let module3=require('./modules/module3');


module1.foo();

// 暴露的是一个匿名函数，所以直接调用
module2();

module3.foo1();
module3.foo2();

uniq(module3.arr);
console.log(module3.arr);