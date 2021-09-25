#  HTML

## 定义

语言

## 作用

创建网页

## 内容

一个个标签

### 块级元素

div,h1~h6,ul,li,dl,dt,p

#### 特点

独占一行

属性都能设置

### 行内元素

span,a,i,em,b,strong,del

#### 特点

横向的内外边距可设置

相邻元素有空白

--原因：代码中的换行引起的

--解决：1.代码中去除空间       

​			  2.只写< span>,不写</ span>

​			  3.把父级的font-size设置为0

​			  4.转为块级，浮动

### 行内块元素

input，img，td

#### 特点

相邻元素有空白

高度，行高，内外边距可设置

### 空元素

br,hr,img,link,meta

#### 特点

本身没有内容

## 一个页面结构

<! DOCTYPE html>     		<!-- 声明为HTML5文档，让浏览器进入标准模式，使用最新的 `HTML5`标准来解析渲染页面；如果不写，浏览器就会进入混杂模式，我们需要避免此类情况发生。**严格模式**： 又称为标准模式，指浏览器按照`W3C`标准解析代码；-->

<html lang="en">        <!-- 声明语言，该搜索引擎看的-->

<head>       

  <meta charset="UTF-8">     <!--声明字符集为UTF-8，支持中文的编码-->

  <meta http-equiv="X-UA-Compatible" content="IE=edge">   <!--IE8/9及以后的版本都会以最高版本IE来渲染页面。 -->

  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!--适配不同设备-->

 <title>Document</title>          <!--标签页名称-->

</head>

<body>

<!--内容主体-->

</body>

</html>

## HTML5

### 标签语义化

#### 定义

标签的名字是能读懂的，但本身没有什么功能，类似div

#### 内容

![page](HTML学习.assets/page-16307364846333-16309256808863.png)

````<header>：页眉通常包括网站标志、主导航、全站链接以及搜索框。
<nav>：标记导航，仅对文档中重要的链接群使用。
<main>：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。
<article>：定义外部的内容，其中的内容独立于文档的其余部分。
<section>：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。
<aside>：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。
<footer>：页脚，只有当父级是body时，才是整个页面的页脚。
<small>：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。
<strong>：和 em 标签一样，用于强调文本，但它强调的程度更强一些。
<em>：将其中的文本表示为强调的内容，表现为斜体。
<mark>：使用黄色突出显示部分文本。
<figure>：规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。
<figcaption>：定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置。
<cite>：表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。
<blockquoto>：定义块引用，块引用拥有它们自己的空间。
<q>：短的引述（跨浏览器问题，尽量避免使用）。
<time>：datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。
<abbr>：简称或缩写。
<dfn>：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。
<address>：作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。
<del>：移除的内容。
<ins>：添加的内容。
<code>：标记代码。
<meter>：定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）
<progress>：定义运行中的进度（进程）。
```
````

#### 作用

1. 易阅读，易修改
2. 搜索引擎友好，利于SEO
3. 方便设备解析，比如盲人阅读，语义化标签比 div 标签要好很多

### 表单功能增强

 ```
<form action="" method="get">
    <p>邮箱标签: <input type="email"></p>
    <p>数字标签: <input type="number"></p>
    <p>滑动条标签: <input type="range"></p>
    <p>搜索框标签: <input type="search"></p>
    <p>日期框: <input type="date"></p>
    <p>星期框: <input type="week"></p>
    <p>月份框: <input type="month"></p>
    <p>颜色框: <input type="color"></p>
    <p>网址框: <input type="url"></p>
    <div>
      <input type="submit">
      <input type="reset">
    </div>
</form>
 ```



### Canvas

#### 定义

画布，用JavaScript来画图

#### 内容

```
<canvas id="myCanvas" width="100" height="100"> </canvas>
```

### video/audio

```
<audio src="./media/luffy.mp3" controls="controls">
    本网页不支持媒体标签
</audio>
```

```
<audio controls="controls">
    <source src="./media/luffy.ogg"></source>
    <source src="./media/luffy.mp3"></source>
    本网页不支持媒体标签
</audio>
```

### 拖放

选中 --->  拖动  ---> 释放

#### 选中

在HTML5标准中，为了使元素可拖动，把draggable属性设置为true。
文本、图片和链接是默认可以拖放的，它们的draggable属性自动被设置成了true。
图片和链接按住鼠标左键选中，就可以拖放。
文本只有在被选中的情况下才能拖放。如果显示设置文本的draggable属性为true，按住鼠标左键也可以直接拖放。

draggable属性：设置元素是否可拖动。语法：`<element draggable="true | false | auto" >`

- true: 可以拖动
- false: 禁止拖动
- auto: 跟随浏览器定义是否可以拖动

#### 拖动

每一个可拖动的元素，在拖动过程中，都会经历三个过程，`拖动开始`-->`拖动过程中`--> `拖动结束`。

| 针对对象     | 事件名称  | 说明                                             |
| ------------ | --------- | ------------------------------------------------ |
| 被拖动的元素 | dragstart | 在元素开始被拖动时候触发                         |
|              | drag      | 在元素被拖动时反复触发                           |
|              | dragend   | 在拖动操作完成时触发                             |
|              |           |                                                  |
| 目的地对象   | dragenter | 当被拖动元素进入目的地元素所占据的屏幕空间时触发 |
|              | dragover  | 当被拖动元素在目的地元素内时触发                 |
|              | dragleave | 当被拖动元素没有放下就离开目的地元素时触发       |

dragenter和dragover事件的默认行为是拒绝接受任何被拖放的元素。因此，我们必须阻止浏览器这种默认行为。e.preventDefault();

#### 释放

到达目的地之后，释放元素事件

| 针对对象   | 事件名称 | 说明                                                         |
| ---------- | -------- | ------------------------------------------------------------ |
| 目的地对象 | drop     | 当被拖动元素在目的地元素里放下时触发，一般需要取消浏览器的默认行为。 |

### 本地存储

#### Storage

分为 LocalStorage 和 SessionStorage

### Web Worker

### 地理定位

### datalist

```
<input id="myCar" list="cars" />
<datalist id="cars">
    <option value="BMW">
    <option value="Ford">
    <option value="Volvo">
</datalist>

```

### 可编辑内容

```
<div class="edit" contenteditable='true'></div>
```

### 跨域

