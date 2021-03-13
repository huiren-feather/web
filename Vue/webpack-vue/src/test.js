// 这是Node中向外暴露成员的方式
// module.exports={}
// 在ES6中，也通过规范的形式，规定了ES6中如何导入和导出模块
// ES6中导入模块，使用import模块名称 from '模块标志符' import '表示路径'

// 在ES6中，使用export default 和export 往外暴露成员：
var info={
    name:'zs',
    age:20
};
export default info

// export default {
//     area:'北京'
// }


// 注：export default 向外暴露的成员，可以使用任意的变量来接收
// 注：在一个模块中，export default 只允许向外暴露1次
// 


export var title='小星星';
export var content='亮晶晶';
// 注：使用export向外暴露的成员，只能使用{}的形式来接收，这种形式，叫做【按需导出】
// 注：export可以向外暴露多个成员，同时，如果某些成员不需要import，我们不在{}中定义即可
// 注：使用export导出的成员，必须严格按照导出的名称，来使用{}按需接收
// 注：使用export导出的成员，如果想换个名称来接收，可以用as来起别名 ：import m1,{title as ttt,content} from './test.js'
// 注：起了别名，原来的名字就不能用了

// 在node中，使用var 名称=require('模块标志符')
// module.exports 和exports 来暴露成员