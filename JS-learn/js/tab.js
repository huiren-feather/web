class Tab {
    constructor(id){
        // 获取元素
        this.main=document.querySelector(id);
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section');
        this.init();
    }
    init(){
        // init初始化操作，让相关的元素绑定完成
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTab;//不加()的原因，阻止他一创建就调用
        }
        
    }
    // 1.切换功能
    toggleTab(){
        // console.log(this.index);
        
    }
    // 2.添加功能
    addTab(){

    }
    // 3.删除功能
    removeTab(){

    }
    // 4.修改功能
    editTab(){}
}
new Tab('#tab');
