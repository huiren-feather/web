window.onload=function(){
    // import './匀速切换'

    // 1.获取对应的元素
    var all=document.querySelector('#all');
    var screen=all.children[0];
    // console.log(screen);
    var imgWidth=screen.offsetWidth;
    var ul=screen.firstElementChild||screen.firstChild;
    var ol=screen.children[1];
    var div=screen.lastElementChild||screen.lastChild;
    var spanArr=div.children;

    // 2.复制第一张图片所在的li，添加到ul的最后面
    var ulNewLi=ul.children[0].cloneNode(true);
    ul.appendChild(ulNewLi);

    // 3.给ol中添加li，ul中的个数-1，并点亮第一个按钮
    for(let i=0;i<ul.children.length-1;i++){
        var olNewLi=document.createElement('li');
        olNewLi.innerHTML=i+1;
        ol.appendChild(olNewLi);
    }

    var olLiArr=ol.children;
    olLiArr[0].className="current";



    // 4.鼠标放到ol的li上切换图片
    for(let i=0;i<olLiArr.length;i++){
        olLiArr[i].index=i;
        olLiArr[i].onmouseover=function(){
            // 排他思想
            for(let j=0;j<olLiArr.length;j++){
                olLiArr[j].className='';
            }
            this.className='current';

            key=square=this.index;
            // 移动盒子
            animate(ul,-this.index*imgWidth);
        }
    }

    // 5.定时器实现自动播放
    var timer=setInterval(autoPlay,1000);

    // 固定向右切换图片
    // 定义两个变量，纪录当前图片和小方块的索引
    var key=0;
    var square=0;
    
    function autoPlay(){
        // 通过控制key的自增来模拟图片的索引值，然后移动ul
        key++;
        if (key>olLiArr.length) {
            ul.style.left=0;
            key=1;
        }
        animate(ul,-key*imgWidth);
        // 通过控制square的自增来模拟小方块的索引值，然后点亮盒子
        // 排他思想做小方块
        square++;
        if (square>olLiArr.length-1) {
            square=0;
        }
        for(let i=0;i<olLiArr.length;i++){
            olLiArr[i].className='';
        }
        olLiArr[square].className='current';

    }

    // 鼠标放上去清除定时器，移开后开启定时器
    all.onmouseover=function(){
        div.style.display='block';
        clearInterval(timer);
        
    };

    all.onmouseout=function(){
        div.style.display='none';
        timer=setInterval(autoPlay,5000);
    }

    // 6.左右切换图片
    spanArr[0].onclick=function(){
        key--;
        if (key<0) {
            ul.style.left=-imgWidth*(olLiArr.length)+'px';
            key=olLiArr.length-1;
        }
    }

}