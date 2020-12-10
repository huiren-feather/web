$(function() {
    // 当文档加载完成才执行


    function resize() {
        // 获取浏览器屏幕的宽度
        var windowWidth = $(window).width();
        //    判断屏幕是大还是小
        var isSmallScreen = windowWidth < 768;
        // 获取到的是dom数组，=需要遍历
        $('#main_ad>.carousel-inner>.item').each(function(i, item) {
            //dom对象转换成jQuery对象

            var $item = $(item);
            $item.css('backgroundImage', 'url("' + $item.data(isSmallScreen ? 'image-xs' : 'image-lg') + '")');
            //    我们需要小图时等比例变化，小图时使用img方式，大图使用背景图片
            var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '">');
            } else {
                // 清除img
                $item.html('');
                // $item.css('backgroundImage', 'url("' + $item.data(isSmallScreen ? 'image-xs' : 'image-lg') + '")');
            }
        })

        // 根据大小为轮播图设置不同的背景图片
    }
    // .on('resize', resize) 屏幕变化，执行函数
    // .trigger('resize'); 屏幕加载后立即触发一次事件
    $(window).on('resize', resize).trigger('resize');

});