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

        // 横向滚动
        // 控制标签页的标签容器宽度
        var $ulContainer = $(".nav-tabs");
        // 获取所有子元素宽度的和
        var width = 30; //因为原本ul上有padding-left，多加点宽度
        // 遍历子元素
        $ulContainer.children().each(function(index, element) {
            //  
            // console.log($(element).width());
            width += element.clientWidth;
        });
        //判断当前ul的宽度是否超出了屏幕，如果超出，就显示横向滚动条；否则不显示
        // 此时width等于所有li的和
        // 把值给ul
        if (width > $(window).width()) {
            $ulContainer.css('width', width).parent().css('overflow-x', 'scroll');
        } else {
            $ulContainer.css('width', '100%').parent().css('overflow-x', 'hidden');

        }
    }
    // .on('resize', resize) 屏幕变化，执行函数
    // .trigger('resize'); 屏幕加载后立即触发一次事件
    $(window).on('resize', resize).trigger('resize');

    // 工具提示，初始化tooltips插件
    $('[data-toggle="tooltip"]').tooltip()

    // a点击注册事件
    var $newTitle = $('.news-title');
    $('#news .nav-pills a').on('click', function(event) {
        // 获取当前点击的元素
        var $this = $(this);
        // 获取对应的title值
        var title = $this.data('title');
        // 将title设置到相应的位置
        $newTitle.html(title);


    });

});