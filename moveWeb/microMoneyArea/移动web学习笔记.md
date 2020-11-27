#### Bootstrap学习

先熟悉它可以做什么

#### 媒体查询

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