
    function animate(ele, target) {
    // 先清除定时器
    clearInterval(ele.timer);
    // 规定步长
    let speed = target > ele.offsetLeft ? 10 : -10;
    // 设置定时器,间隔为30ms
    ele.timer = setInterval(function () {
        // 计算距离目的地还有多少距离
        let val = target - ele.offsetLeft;

        // 是否到目的地
        if (Math.abs(val) < Math.abs(speed)) {
            ele.style.left = target + 'px';
            clearInterval(ele.timer);
        } else {
            // 走你
            ele.style.left = ele.offsetLeft + speed + 'px';

        }
    }, 30);
}


