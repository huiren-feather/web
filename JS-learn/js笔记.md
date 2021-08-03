# js笔记

学习内容：

对象

数组--特殊对象

函数--特殊对象

类

数组类

函数类

日期类

正则类

错误类

垃圾回收机制：

当不在有任何引用指向一个对象时，就可以删除了



## 内置对象

### Array

#### 遍历迭代

##### forEach(callback)

遍历

##### map(callback)

创建一个新数组，其结果是该数组中每个元素都调用一个提供的函数后返回的结果。
即map()方法调用后返回一个新数组，新数组中的元素是callback函数的返回值。

##### some(callback)

满足条件，退出

测试数组中的某些元素是否通过由提供的函数实现的测试。
测试，返回boolean值，每个元素都会调用执行callback函数，当callback函数返回为false时，继续遍历下一个元素，直到遍历结束，最终返回false。如果在遍历到某个元素时，callback返回true则结束遍历，some()返回true的结果。

##### every(callback)

不满足条件，退出

测试数组中的每一个元素是否通过由提供的函数实现的测试必须全部符合条件才会返回true，否则返回false。

##### filter(callback)

过滤，筛选出callback函数返回值为true的对应元素，放到新的数组中。

#### 常用API 

#### 向数组添加元素的方法：

##### Array.push(value1,value2,…）

- 向数组的末尾追加
- 返回值是添加数据后数组的新长度。
- 会改变原有数组

**Array.unshift(value1,value2,…)**

- 向数组的开头添加
- 返回值是添加数据后数组的新长度。
- 会改变原有数组

##### splice(index,0,value1,value2,…)

- 在index位置，删除一定个数的元素，并插入新元素
- 向数组的指定index处插入
- 返回的是被删除的元素，返回的是一个数组,0指的是删除0个元素
- 会改变原有数组
- value可以不写，那就是单纯的删除元素了

#### 向数组删除元素的方法：

**pop()**

- 从尾部删除一个元素
- 返回被删除掉的元素。
- 会改变原有数组

**shift()**

- 从头部删除一个元素
- 返回被删除掉的元素。
- 会改变原有数组

##### splice(index,howmany)

#### 数组排序的方法：

**reverse()**

- 反转，倒置
- 该方法会改变原有数组。

**sort()**

- 按指定规则排序
- 改变原有数组。

arr1.sort((a,b)=>a-b)

 真正的排序；a-b是升序；b-a是降序

#### 数组连接的方法：

**concat()**

- 数组连接
- 返回连接后的新数组

**join()**

- 将数组的每个元素以指定分隔符(默认为“,”)连接成字符
- 返回该连接完成后的字符串

#### 数组截取的方法：

**slice(start,end)**

- 从start起始索引处，截取到end结束索引处

- 返回截取到的元素集合。
  **注意：**

  **end位置的值不会截取**

  **从前往后,数字代表位置**

  如果不传值那么就是直接拷贝了一份数组的值。
  end可以不传值，表示截取到数组的末尾。start与end也可以取负值，取负值表示从后向前计数。

#### 数组转换的方法：

##### toString()

- 转换为字符串，和不传参数的join()一致，还可以使用2，8，16进制转变为不同结果。

##### flat()

**提取数组指定深度的方法**

- 按照指定的深度递归遍历数组
- 返回值是遍历到的所有元素集合。

```javascript
let arr = [1,2,[3,4,[5,6]]],
res = arr.flat(Infinity),  //无限递归，直到最后
res2 = arr.flat();		//如果不传参数那么只递归一次
console.log(arr)   //[1,2,[3,4,[5,6]]]
console.log(res)   //[1, 2, 3, 4, 5, 6]
console.log(res2)	//[1,2,3,4,[5,6]]
```

#### 数组查找的方法

##### indexOf(val[, fromIndex = 0])

数组的indexOf方法用来查找数组中某个val值第一次出现的索引，找不到返回 -1
val表示待查找的值
fromIndex可选参数，表示起始查找位置，默认值是0

##### lastIndexOf(val[, fromIndex = arr.length - 1])

数组的lastIndexOf()方法用来查找数组中的某个val值第一次出现的索引，找不到返回 -1，lastIndexOf是从数组的最后往前找。
val表示待查找的值
fromIndex可选参数，表示起始查找位置,默认值是数组的长度-1

#### 遍历数组计算总和

**array.reduce((reslute, currentValue, index, array) => {}, initialValue)**
数组的reduce方法适合用来计算数组某一指定内容的累加或者其他运算结果的总结果。

**array.reduceRight((reslute, currentValue, index, array) => {}, initialValue)**
用法与array的reduce方法一致，只是reduceRight的计算过程是从后往前，而reduce是从前往后。

**Array.isArray(param)**
判断参数param是否是Array
是数组返回true
不是数组返回false

### String

#### 查找字符串

indexOf()/lastIndexOf()：获取字符串中指定内容的索引

search()：获取字符串中指定内容的索引（参数里一般是正则）

includes()：字符串中是否包含指定的内容

startsWith()：字符串是否以指定的内容开头

endsWith()：字符串是否以指定的内容结尾

#### 获取指定位置的字符

charAt(index)

str[index]

charCodeAt(index)

#### 字符串截取

slice()

substring()

substr()

#### 连接字符串

concat()   		//拼接字符串，等效于+，+更常用

#### 字符串转为数组

split()

新的数组 = str.split(分隔符);

#### `String.fromCharCode()`：根据字符的 Unicode 编码获取字符。

#### 替换字符串

replace

新的字符串 = str.replace(被替换的字符，新的字符);

**注：**如需全局替换，需要使用正则：     /被替换字符/gi

#### repeat()：重复字符串

newStr = str.repeat(重复的次数);

#### `trim()`：去除字符串前后的空白

#### 大小写转换

to(Locale)UpperCase() 	//转换大写
to(Locale)LowerCase() 	//转换小写

#### html 方法

var str = '你好';

console.log(str.anchor());
console.log(str.big());
console.log(str.sub());
console.log(str.sup());
console.log(str.link('http://www.baidu.com'));
console.log(str.bold());

### Number

#### Number.isInteger() 判断是否为整数

布尔值 = Number.isInteger(数字);

#### toFixed() 小数点后面保留多少位

字符串 = myNum.toFixed(num);

### Math

与众不同，他不是一个构造函数，不需要创建对象，直接使用里面的属性和方法即可

#### Math.PI

| 方法              | 描述                                       | 备注              |
| :---------------- | :----------------------------------------- | :---------------- |
| Math.PI           | 圆周率                                     | Math对象的属性    |
| Math.abs()        | **返回绝对值**                             |                   |
| Math.random()     | 生成0-1之间的**随机浮点数**                | 取值范围是 [0，1) |
| Math.floor()      | **向下取整**（往小取值）                   |                   |
| Math.ceil()       | **向上取整**（往大取值）                   |                   |
| Math.round()      | 四舍五入取整（正数四舍五入，负数五舍六入） |                   |
| Math.max(x, y, z) | 返回多个数中的最大值                       |                   |
| Math.min(x, y, z) | 返回多个数中的最小值                       |                   |
| Math.pow(x,y)     | 乘方：返回 x 的 y 次幂                     |                   |
| Math.sqrt()       | 开方：对一个数进行开方运算                 |                   |

#### 生成 [x, y) 之间的随机数

```javascript
    Math.round(Math.random()*(y-x)+x)
```

#### 【重要】生成 [x, y]之间的随机整数

也就是说：生成两个整数之间的随机整数，**并且要包含这两个整数**。

这个功能很常用，我们可以将其封装成一个方法，代码实现如下：

    /*
    * 生成两个整数之间的随机整数，并且要包含这两个整数
    */
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    console.log(getRandom(1, 10));

### Date

#### 创建对象

##### 写法一：不传递参数时，则获取系统的当前时间对象

var date1 = new Date();
console.log(date1);
console.log(typeof date1);

##### 写法二：传递参数

传递字符串

```javascript
const date11 = new Date('2020/02/17 21:00:00');
console.log(date11); // Mon Feb 17 2020 21:00:00 GMT+0800 (中国标准时间)

const date12 = new Date('2020/04/19'); // 返回的就是四月
console.log(date12); // Sun Apr 19 2020 00:00:00 GMT+0800 (中国标准时间)

const date13 = new Date('2020-05-20');
console.log(date13); // Wed May 20 2020 08:00:00 GMT+0800 (中国标准时间)

const date14 = new Date('Wed Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)');
console.log(date14); // Fri Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)
```

传递多个数字

```javascript
const date21 = new Date(2020, 2, 18); // 注意，第二个参数返回的是三月，不是二月
console.log(date21); // Wed Mar 18 2020 00:00:00 GMT+0800 (中国标准时间)

const date22 = new Date(2020, 3, 18, 22, 59, 58);
console.log(date22); // Sat Apr 18 2020 22:59:58 GMT+0800 (中国标准时间)

const params = [2020, 06, 12, 16, 20, 59];
const date23 = new Date(...params);
console.log(date23); // Sun Jul 12 2020 16:20:59 GMT+0800 (中国标准时间)
```

传递时间戳

```javascript
const date31 = new Date(1591950413388);
console.log(date31); // Fri Jun 12 2020 16:26:53 GMT+0800 (中国标准时间)

// 先把时间对象转换成时间戳，然后把时间戳转换成时间对象
const timestamp = new Date().getTime();
const date32 = new Date(timestamp);
console.log(date32); // Fri Jun 12 2020 16:28:21 GMT+0800 (中国标准时间)
```



#### 对象方法

Date对象 有如下方法，可以获取日期和时间的**指定部分**：

| 方法名            | 含义              | 备注                 |
| ----------------- | ----------------- | -------------------- |
| getFullYear()     | 获取年份          |                      |
| getMonth()        | **获取月： 0-11** | 0代表一月            |
| getDate()         | **获取日：1-31**  | 获取的是几号         |
| getDay()          | **获取星期：0-6** | 0代表周日，1代表周一 |
| getHours()        | 获取小时：0-23    |                      |
| getMinutes()      | 获取分钟：0-59    |                      |
| getSeconds()      | 获取秒：0-59      |                      |
| getMilliseconds() | 获取毫秒          | 1s = 1000ms          |

还有对应的set方法，用来设置时间

#### 格式化日期函数

```javascript
        function formatDate() {
            let date=new Date();

            let year=date.getFullYear(),
                month=date.getMonth()+1,
                day=date.getDate(),
                hour=date.getHours(),
                minute=date.getMinutes(),
                second=date.getSeconds(),
                week=date.getDay();
            let weekArr=['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            month=month<10?'0'+month:month;
            day=day<10?'0'+day:day;
            hour=hour<10?'0'+hour:hour;
            minute=minute<10?'0'+minute:minute;
            second=second<10?'0'+second:second;

            let result="今天是："+year+'年'+month+'月'+day+'日'+hour+':'+minute+':'+second+'  '+weekArr[week];

            return result;

        }
```

#### format()

将时间对象转换为指定格式。

参考链接：<https://www.cnblogs.com/tugenhua0707/p/3776808.html>

#### 获取时间戳

```javascript
// 方式一：获取 Date 对象的时间戳（最常用的写法）
const timestamp1 = +new Date();
console.log(timestamp1); // 打印结果举例：1589448165370

// 方式二：获取 Date 对象的时间戳（较常用的写法）
const timestamp2 = new Date().getTime();
console.log(timestamp2); // 打印结果举例：1589448165370

// 方式三：获取 Date 对象的时间戳
const timestamp3 = new Date().valueOf();
console.log(timestamp3); // 打印结果举例：1589448165370

// 方式4：获取 Date 对象的时间戳
const timestamp4 = new Date() * 1;
console.log(timestamp4); // 打印结果举例：1589448165370

// 方式5：获取 Date 对象的时间戳
const timestamp5 = Number(new Date());
console.log(timestamp5); // 打印结果举例：1589448165370

// 方式6：now()
let ttt=Date.now()	//ES5的方法
console.log(ttt);
```

#### 计算时间差

```javascript
function getInterval(start,end){
    let day,hour,minute,second,millisecond,interval;

    millisecond=(end-start)%1000;
    
    interval=(end-start)/1000;

    day=parseInt(interval/60/60/24);
    hour=parseInt(interval/60/60%24);
    minute=parseInt(interval/60%60);
    second=parseInt(interval%60);

    return {
        day,hour,minute,second,millisecond
    }
    
}
```

#### Moment.js

Moment.js 是一个轻量级的JavaScript时间库，我们可以利用它很方便地进行时间操作，提升开发效率。

- 中文官网：<http://momentjs.cn/>

### JSON

```javascript
    // js对象
        let a={
            id:1,
            name1:'小商品',
            img:'./a.jpg'
        };
        console.log(a);
        // 转化成json对象
        let b=JSON.stringify(a);
        console.log(b);
        // 转化为js对象
        console.log(JSON.parse(b));
```

JSON 是轻量级的数据交换格式 (纯文本)

**数据在键值对中(键名即属性名必须加双引号)**
数据由逗号分隔
花括号保存对象
方括号保存数组
JSON 可通过 JavaScript 进行解析
JSON 值可以是：数字、字符串、逻辑值、数组(在中括号中)、
对象(在大括号中)、null
注意JSON不能存储Date对象，如果需要则用字符串表示

## 函数

所有全局变量和函数都会作为window的属性和方法

## 事件

### 事件三要素

#### 事件源

引发后续事件的HTML标签

#### 事件

JS已经定义好了

![](js笔记.assets/20180126_1553.png)

#### 事件驱动程序

对样式和HTML的操作，也就是DOM

#### 代码书写步骤

1. 获取事件源：document.getElementById("");
2. 绑定事件：事件源.事件=function(){事件驱动程序};或者在标签内部引用：事件=“程序”
3. 书写事件驱动程序：关于dom的操作

## DOM

文档对象模型

DOM就是由节点组成的。

**解析过程**：
HTML加载完毕，渲染引擎会在内存中把HTML文档，生成一个DOM树，getElementById是获取内中DOM上的元素节点。然后操作的时候修改的是该元素的**属性**。

**在HTML当中，一切都是节点**

### 可以做什么

- 找对象（元素节点）

- 设置元素的属性值
- 设置元素的样式
- 动态创建和删除元素
- 事件的触发响应：事件源、事件、事件的驱动程序

#### 访问关系的获取

节点的访问关系，是以**属性**的方式存在的

![](js笔记.assets/20180126_2145.png)

#### 节点的操作

节点的**操作**都是**函数**

##### 创建节点

```javascript
新的标签(元素节点) = document.createElement("标签名");
```

## JS动画

主要内容：

### 1、三大家族和一个事件对象

offset、scroll、client；

事件对象：event （事件被触动时，鼠标和键盘的状态）

#### offset

获取元素尺寸，实现匀速动画，只读的

包括内容：

- offsetWidth
- offsetHeight

获取元素的宽高+padding+border，这两个属性是绑定在所有节点元素上的

- offsetLeft
- offsetRight

当前元素相对于其定位父元素的水平偏移量，从padding开始

- offsetTop

当前元素相对于其定位父元素的垂直偏移量，从padding开始

**一般用法**：用于获取值

- offsetParent

获取当前元素的定位父元素，如果没有就是body

#### scroll

当我们用鼠标滚轮，滚动网页的时候，会触发 window.onscroll() 方法

##### scrollWidth 和 scrollHeight

获取元素整个滚动区域的宽和高，包括width和padding

**注：** 如果内容超出盒子，就是内容的高；不超出，就是盒子本身的高度

##### scrollTop和scrollLeft

获取垂直、水平滚动条滚动的距离

#### 实战经验

当某个元素满足`scrollHeight - scrollTop == clientHeight`时，说明垂直滚动条滚动到底了。

当某个元素满足`scrollWidth - scrollLeft == clientWidth`时，说明水平滚动条滚动到底了。

这个实战经验非常有用，可以用来判断用户是否已经将内容滑动到底了。比如说，有些场景下，希望用户能够看完“长长的活动规则”，才允许触发接下来的表单操作。



### 2、动画

闪现，匀速，缓动

### 3、冒泡、兼容、封装



## babel

### 作用

将ES6语法转为ES5语法，支持低端浏览器

## 严格模式

### 使用

- 针对整个脚本文件：将`use strict`放在脚本文件的第一行，则整个脚本文件将以严格模式运行。

- 针对单个函数：将`use strict`放在函数体的第一行，则整个函数以严格模式运行。

PS：如果浏览器不支持，则这句话只解析为一条简单的语句, 没有任何副作用。

脚本文件的变通写法：因为第一种调用方法不利于文件合并，所以更好的做法是，借用第二种方法，将整个脚本文件放在一个立即执行的匿名函数之中。

### 语法和行为改变

- 必须用var声明变量

- 禁止自定义的函数中的this指向window

- 创建eval作用域

- 对象不能有重名的属性

## JSON对象

## 对象中的get和set

## 解构赋值

## 箭头函数

ES6 之前的普通函数中：this 指向的是函数被调用的对象（也就是说，谁调用了函数，this 就指向谁）。

而 ES6 的箭头函数中：**箭头函数本身不绑定 this**，this 指向的是**箭头函数定义位置的 this**（也就是说，箭头函数在哪个位置定义的，this 就跟这个位置的 this 指向相同）。

this是继承父执行上下文的

## 剩余参数与扩展运算符

## Set数据结构

Set 类似于**数组**，但成员的值都是**唯一**的，没有重复的值。

Set 本身就是一个构造函数，可通过 `new Set()` 生成一个 Set 的实例。

## Promise

### 常见的异步模式

- 定时器
- 接口调用
- 事件函数

#### 接口调用

- 原生 ajax
- 基于 jQuery 的 ajax
- Fetch
- Promise
- axios

#### 问题

多层嵌套回调时，代码层次过多，很难进行维护和二次开发；

会导致回调地狱的问题

ES6 中的 Promise 是异步编程的一种方案。从语法上讲，Promise 是一个对象，它可以获取异步操作的消息。

Promise 对象, 可以**用同步的表现形式来书写异步代码**（也就是说，代码看起来是同步的，但本质上的运行过程是异步的）。使用 Promise 主要有以下好处：

- 可以很好地解决**回调地狱**的问题（避免了层层嵌套的回调函数）。

- 语法非常简洁、可读性强。Promise 对象提供了简洁的 API，使得控制异步操作更加容易。

### Promise 的基本用法

（1）使用 new 实例化一个 Promise 对象，Promise 的构造函数中传递一个参数。这个参数是一个函数，该函数用于处理异步任务。

（2）并且传入两个参数：resolve 和 reject，分别表示异步执行成功后的回调函数和异步执行失败后的回调函数；

（3）通过 promise.then() 处理返回结果。这里的 `promise` 指的是 Promise 实例。

### 基于 Promise 处理多次 Ajax 请求（链式调用）【重要】

### async/await （异步函数）

## 执行上下文

### 全局代码：

一段script标签中，有一个全局的执行上下文；

#### 作用：

变量定义、函数声明

#### 具体过程：

在执行全局代码前，将window确定为全局执行上下文。

1. 对全局数据进行预处理：（并没有赋值）
   - var定义的全局变量==>undefined，添加为window的属性
   - function声明的全局函数==>赋值（fun），添加为window的方法
   - this==>赋值（window）
2. 开始执行全局代码

### 函数代码：

每个函数中有一个执行上下文；

#### 作用：

变量定义、函数声明、this、arguments

#### 具体过程：

在调用函数，准备执行函数体之前，创建对应的函数执行上下文对象（虚拟的，存在于栈中）

1. 对局部数据进行预处理：
   - 形参变量==>赋值（实参）==>添加为执行上下文的属性
   - arguments==>赋值（实参列表），添加为执行上下文的属性
   - var定义的局部变量==>undefined，添加为执行上下文的属性
   - function声明的函数==>赋值（fun），添加为执行上下文的方法
   - this==>赋值（调用函数的对象）
2. 开始执行函数体代码

### 执行上下文栈

1. 在全局代码执行前，JS引擎就会创建一个栈来存储管理所有的执行上下文对象
2. 在全局执行上下文（window）确定后，将其添加到栈中（压栈）
3. 在函数执行上下文创建后，将其添加到栈中（压栈）
4. 在当前函数执行完后，将栈顶的对象移除(出栈)
5. 当所有代码执行完后，栈中只剩window

## this

this指的是，**调用函数的那个对象**。this永远指向函数运行时所在的对象。

解析器在调用函数时，每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this

根据函数的调用方式的不同，this会指向不同的对象：

1. 以函数的形式调用时，this永远都是window。
2. 以方法的形式调用时，this是调用方法的那个对象
3. 以构造函数的形式调用时，this是新创建的那个对象
4. 使用call和apply调用时，this是指定的那个对象

## 作用域

### 作用

隔离变量，不同作用域下同名变量不会有冲突

### 全局作用域



### 函数作用域

**调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁。**

在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量。


在函数中要访问全局变量可以使用window对象。（比如说，全局作用域和函数作用域都定义了变量a，如果想访问全局变量，可以使用`window.a`）

### 块级作用域

### 作用域与执行上下文的区别

区别1：

- 全局作用域之外，每个函数都会创建自己的作用域，作用域在函数定义时就已经确定了。而不是在函数调用时

- 全局执行上下文环境是在全局作用域确定之后, js代码马上执行之前创建

- 函数执行上下文是在调用函数时, 函数体代码执行之前创建

区别2：

- 作用域是静态的, 只要函数定义好了就一直存在, 且不会再变化

- 执行上下文是动态的, 调用函数时创建, 函数调用结束时就会自动释放

联系：

  * 执行上下文(对象)是从属于所在的作用域
  * 全局上下文环境==>全局作用域
  * 函数上下文环境==>对应的函数使用域

### 作用域链


当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用（**就近原则**）。如果没有则向上一级作用域中寻找，直到找到全局作用域；如果全局作用域中依然没有找到，则会报错ReferenceError。


外部函数定义的变量可以被内部函数所使用，反之则不行。



## 闭包

**闭包就是**能够读取其他函数内部数据（变量、函数）的**函数**

只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。

### 如何产生闭包

**当一个嵌套的内部(子)函数引用了嵌套的外部(父)函数的变量或函数时, 就产生了闭包。**

### 闭包到底是什么?


- 理解一: 闭包是嵌套的内部函数(绝大部分人)

- 理解二: 包含被引用变量 or 函数的对象(极少数人)

### 产生闭包的条件

- 1.函数嵌套

- 2.内部函数引用了外部函数的数据(变量/函数)。

还有一个条件是**外部函数被调用，内部函数被声明**。

### 常见的闭包

- 1. 将一个函数作为另一个函数的返回值

- 2. 将函数作为实参传递给另一个函数调用。

### 闭包的作用

- 作用1. 使用函数内部的变量在函数执行完后, 仍然存活在内存中(延长了局部变量的生命周期)

- 作用2. 让函数外部可以操作(读写)到函数内部的数据(变量/函数)

### 闭包的生命周期

1. 产生: 嵌套内部函数fn2被声明时就产生了(不是在调用)

2. 死亡: 嵌套的内部函数成为垃圾对象时。（比如f = null，就可以让f成为垃圾对象。意思是，此时f不再引用闭包这个对象了）

### 闭包的应用：定义具有特定功能的js模块

- 将所有的数据和功能都封装在一个函数内部(私有的)，只向外暴露一个包含n个方法的对象或函数。

- 模块的使用者, 只需要通过模块暴露的对象调用方法来实现对应的功能。

### 闭包的缺点及解决

缺点：函数执行完后, 函数内的局部变量没有释放，占用内存时间会变长，容易造成内存泄露。


解决：能不用闭包就不用，及时释放。比如：

​    f = null;  // 让内部函数成为垃圾对象 -->回收闭包

## 内存溢出

**内存溢出**：一种程序运行出现的错误。当程序运行**需要的内存**超过了剩余的内存时, 就出抛出内存溢出的错误。

## 内存泄漏

**内存泄漏**：**占用的内存**没有及时释放。

注意，内存泄露的次数积累多了，就容易导致内存溢出。

**常见的内存泄露**：

- 1.意外的全局变量

- 2.没有及时清理的计时器或回调函数

- 3.闭包

## var、let、const

## Ajax

### HTTP请求

### 跨域

## 同步和异步

在JS中，因为是单线程，所以，同步和异步都是一条流水线

**同步和异步的差别，就在于，这条流水线上各个流程的执行顺序不同**

简单来看：

**可以改变程序正常执行顺序的操作就可以看成是异步操作**

例如：定时器

### 位置：

#### 主线程：同步任务-----执行栈

#### 任务队列：异步任务

**主线程任务执行完成后，才会执行任务队列中的任务**

### 运行机制：

1.所有同步任务都在主线程上执行，形成一个执行栈

2.主线程之外，还存在一个“任务队列”。只要异步任务有了运行结果，就在“任务队列”之中放置一个事件

3.一旦“执行栈”中的所有同步任务执行完毕，系统就会读取“任务队列”，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

4.主线程不断重复上面的第三步

