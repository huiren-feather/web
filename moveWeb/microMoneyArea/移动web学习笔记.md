#### Bootstrap学习

先熟悉它可以做什么

基础CSS：这块只是将我们以前常用的一些界面元素做了样式美化，如果需要使用，找到响应类名，加到元素上即可

组件：就是讲日常使用的一些功能块例如下拉菜单提前写好，我们使用时直接找到对应的DEMO，做相应的调整即可

js插件：

#### 实战：

##### 1.搭建Bootstrap页面骨架及项目目录结构

├─ /weijinsuo/ ··················· 项目所在目录
└─┬─ /css/ ······················· 我们自己的CSS文件
  ├─ /font/ ······················ 使用到的字体文件
  ├─ /img/ ······················· 使用到的图片文件
  ├─ /js/ ························ 自己写的JS脚步
  ├─ /lib/ ······················· 从第三方下载回来的库【只用不改】
  ├─ /favicon.ico ················ 站点图标
  └─ /index.html ················· 入口文件

##### 2.约定编码规范（遇到在做）

###### 2.1 HTML约定

在head中引入必要的CSS文件，优先引入第三方的CSS，方便自己的样式做覆盖；

在body末尾引入必要的js文件，优先引入第三方的JS，注意文件之间的依赖关系，比如Bootstrap.js依赖jQuery，那就先引入jquery.js，再引入Bootstrap.js

###### 2.2 CSS约定

除了公共级别样式，其余样式都有模块前缀（公司一般会把他的祖辈全部放进去）

尽量使用直接子代选择器，少用后代选择器

##### 3.页面结构

<!DOCTYPE html>

<html lang="zh-CN">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Document</title>

</head>

<body>

顶部栏

topbar

导航栏

navbar





</body>

</html>

##### 4.Viewport设置

视口的作用：在移动浏览器中，当页面宽度超出设备，浏览器内部虚拟的一个页面容器，将页面容器缩放到设备这么大，然后展示
- 目前大多数手机浏览器的视口（承载页面的容器）宽度都是980；
- 视口的宽度可以通过meta标签设置
- 此属性为移动端页面视口设置，当前值表示在移动端页面的宽度为设备的宽度，并且不缩放（缩放级别为1）
  + width:视口的宽度
  + initial-scale：初始化缩放
  + user-scalable:是否允许用户自行缩放（值：yes/no; 1/0）
  + minimum-scale:最小缩放，一般设置了用户不允许缩放，就没必要设置最小和最大缩放
  + maximum-scale:最大缩放

   <meta name="viewport" content="width=device-width, initial-scale=1.0">

快捷方式：meta：vp

##### 5.站点图标

  <link rel="shortcut icon" href="img/c_06.jpg">

##### 6.在小屏幕上展示宽图，并居中显示

a.背景图

  background-repeat: no-repeat;

  background-position: center center;

b.使img元素绝对定位，left:50%，margin-left: -width/2

##### 7.$element.data()

一个函数，专门用于取元素上的自定义属性data-xxx

函数参数：我们要取的属性名称，即xxx

##### 8.左边自适应宽度右边固定宽度

右边元素浮动，左边的margin-right的值为左边元素的宽，

##### 9.移动端横向滚动

​       1.要给ul加一个容器，这个容器有横向滚动条

​             overflow-x: scroll;

​        2.动态设置ul的宽度，宽度是根据内容大小决定的

​            把ul 中内容 的宽度都加起来，比总宽度更宽一点，防止意外

##### 10.tab页切换

##### 11.pageX和clientX的区别

#### 媒体查询

根据判断条件，决定一段js代码是否被执行

@media (min-width: 768px)  and（） or（） {}

#### 网页制作

1.划分块

#### 加号选择器

​    /* 选择第n个li后面的那一个li ;所以只有第一个不会起作用 */

​    ul li+li {

​      color: red;

​    }

注：可以用于n-1的边框设置

#### 链接伪类选择器的并列使用

用逗号隔开即可

header .problems:link,

:visited,

:hover {

  text-decoration: none;

  color: #888888;

}

#### icomoon的使用：生成字体图标

import icons---选择做好的svg---在Untitled Set下，选择你想要的图标---点击右下角的GenerateFont---【修改字体名字和类名前缀：点击Preferences--在里面修改】---点击download---



谷歌中修改源代码，同步到本地文件中：

F12 ----sources----filesystem----+-----右键----add folder to workspace----同意

![image-20201207202759827](C:\Users\yuan-honghui\AppData\Roaming\Typora\typora-user-images\image-20201207202759827.png)



#### less学习

就是一个预处理css

目的：方便维护

功能：添加变量，嵌套语法，混合语法（Mixin）

#### less安装

1.去官网下载Node.js,并安装

2.配置环境变量到安装目录

3.重启Windows资源管理器（重启电脑也可）

4.在安装目录下运行终端，输入命令：npm install -g less

5.能在C:\Users\yuan-honghui\AppData\Roaming\npm下看的三个文件：node_modules文件夹，lessc，lessc.cmd

6.成功标志：在终端输入：lessc -version 能看到版本

##### 切换盘符

 D:

##### 自定义Bootstrap

修改less文件，生成css文件。