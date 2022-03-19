function fun1(d)//回调函数，执行成功后 执行
{
    alert(d);
}
function fun2(_call)//函数体
{
    alert("正在执行fun2里面的程序，成功后返回数据111")
    _call("111")
}

fun2(fun1);//调用回调函数，