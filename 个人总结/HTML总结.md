## what：

语言，超文本标签语言，用于搭建结构

## how：

<HTML>   
    <head>     
        <title></title>
    </head>
​    <body>
​    </body>
</HTML>

### 字符集

<meta charset="UTF-8">

### 标签

p:

hr

br

div

span

image

 <a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>

注释：    <!-- 注释语句 -->

#### 列表：

- 无序列表

- 有序列表

- 自定义列表

    <dl>
      <dt>名词1</dt>
      <dd>名词1解释1</dd>
      <dd>名词1解释2</dd>
      ...
      <dt>名词2</dt>
      <dd>名词2解释1</dd>
      <dd>名词2解释2</dd>
      ...
    </dl>

#### 表格table

<table>
     <caption>我是表格标题</caption>
    <thead>
     <th>
        <td>单元格内的文字</td>
        ...
      </th>
    </thead>
    <tbody>
      <tr>
        <td>单元格内的文字</td>
        ...
      </tr>
      ...
    </tbody>
</table>
#### 表单

##### 表单控件（主要内容）

<input type=''> 

<textarea cols="每行中的字符数" rows="显示的行数">
  文本内容
</textarea>

<select>
  <option>选项1</option>
  <option>选项2</option>
  <option>选项3</option>
  ...
</select>

注意：

1. &lt;select&gt;</select&gt;中至少应包含一对&lt;option></option&gt;。
2. 在option 中定义selected =" selected "时，当前项即为默认选中项。

##### 提示信息（说明性文字）

<label for="表单控件的id"></label>//为了和控件绑定

##### 表单域（一个容器）

<form action="url地址" method="提交方式" name="表单名称">
  各种表单控件
</form>

#### 文档类型

HTML5    <!DOCTYPE html>

#### 字符集

<meta charset="utf-8">
    
</meta>

<header> 语义 :定义页面的头部  页眉</header>
<nav>  语义 :定义导航栏 </nav> 
<footer> 语义: 定义 页面底部 页脚</footer>
<article> 语义:  定义文章</article>
<section> 语义： 定义区域</section>
<aside> 语义： 定义其所处内容之外的内容 侧边</aside>

datalist   标签定义选项列表。请与 input 元素配合使用该元素

<input type="text" value="输入明星" list="star"/> <!--  input里面用 list -->

<datalist id="star">   <!-- datalist 里面用 id  来实现和 input 链接 -->  
    		<option>刘德华</option>
    		<option>刘若英</option>
    		<option>刘晓庆</option>
    		<option>郭富城</option>
    		<option>张学友</option>
    		<option>郭郭</option>
</datalist>

fieldset 元素可将表单内的相关元素分组，打包 ,legend 搭配使用

<fieldset>
    		<legend>用户登录</legend>  标题
    		用户名: <input type="text"><br /><br />
    		密　码: <input type="password">
</fieldset>

#### 多媒体标签

- embed：标签定义嵌入的内容

embed可以用来插入各种多媒体，格式可以是 Midi、Wav、AIFF、AU、MP3等等。url为音频或视频文件及其路径，可以是相对路径或绝对路径。

因为兼容性问题，我们这里只讲解 插入网络视频， 后面H5会讲解 audio 和video 视频多媒体。 

<embed src="http://player.youku.com/player.php/sid/XMTI4MzM2MDIwOA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>

- audio：播放音频

并且可以通过附加属性可以更友好控制音频的播放，如：

autoplay 自动播放

controls 是否显不默认播放控件

loop 循环播放   loop = 2 就是循环2次   loop  或者  loop = "-1"   无限循环

- video：播放视频

  autoplay 自动播放

  controls 是否显示默认播放控件

  loop 循环播放

  width 设置播放窗口宽度

  height 设置播放窗口的高度

  由于版权等原因，不同的浏览器可支持播放的格式是不一样的，如下图供参考

### 标签属性

src:路径：绝对与相对

width

height

href：指定链接目标的url地址

target：用于指定链接页面的打开方式，其取值有_self和_blank两种，其中_self为默认值，_blank为在新窗口中打开方式。

base:设置整体链接的打开状态   <base target="_blank" />

合并单元格：跨行合并：rowspan    跨列合并：colspan

​     公式：  删除的个数  =  合并的个数  - 1   

​     合并的顺序 先上   先左 

input type属性值

| **类型******     | **使用示例******        | **含义******         |
| ---------------- | ----------------------- | -------------------- |
| **email******    | <input type="email">    | 输入邮箱格式         |
| **tel******      | <input type="tel">      | 输入手机号码格式     |
| **url******      | <input type="url">      | 输入url格式          |
| **number******   | <input type="number">   | 输入数字格式         |
| **search******   | <input type="search">   | 搜索框（体现语义化） |
| **range******    | <input type="range">    | 自由拖动滑块         |
| **time******     | <input type="time">     | 小时分钟             |
| **date******     | <input type="date">     | 年月日               |
| **datetime****** | <input type="datetime"> | 时间                 |
| **month******    | <input type="month">    | 月年                 |
| **week******     | <input type="week">     | 星期 年              |

input属性

| **属性******         | **用法******                                   | **含义******                                                 |
| -------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| **placeholder******  | <input type="text" placeholder="请输入用户名"> | 占位符  当用户输入的时候 里面的文字消失  删除所有文字，自动返回 |
| **autofocus******    | <input type="text" autofocus>                  | 规定当页面加载时 input 元素应该自动获得焦点                  |
| **multiple******     | <input type="file" multiple>                   | 多文件上传                                                   |
| **autocomplete****** | <input type="text" autocomplete="off">         | 规定表单是否应该启用自动完成功能  有2个值，一个是on 一个是off      on 代表记录已经输入的值  1.autocomplete 首先需要提交按钮 <br/>2.这个表单您必须给他名字 |
| **required******     | <input type="text" required>                   | 必填项  内容不能为空                                         |
| **accesskey******    | <input type="text" accesskey="s">              | 规定激活（使元素获得焦点）元素的快捷键   采用 alt + s的形式  |

### 作业：

做一个学生信息表单

