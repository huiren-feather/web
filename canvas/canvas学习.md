## canvas学习

#### 定义

画布，图形容器

#### 作用

图形绘制，通过JavaScript

#### 代码模板

<canvas id="tutorial" width="300" height="300"></canvas>
<script type="text/javascript">
function draw(){
    var canvas = document.getElementById('tutorial');
    if(!canvas.getContext) return;
      var ctx = canvas.getContext("2d");
      //开始代码
}
draw();
</script>

#### 具体实现布置

##### 1.准备画布

##### 2.准备绘制工具

##### 3.利用绘制工具画图