// 分析
// 1.获取元素
// 2.绑定事件
// 3.清除显示和选中的
// 4.添加active 让对应的显示
           900
var that;                            
// 1.声明类
class Tab {                
    //   1.1 声明公共属性          
    constructor(id) {          
        that = this;
        // 1.1.1 获取tab元素
        this.tab = document.querySelector(id);
        // 1.1.4 获取添加按钮
        this.addBtn = this.tab.querySelector(".tabadd");
        // 1.1.5 获取ul
        this.ul = this.tab.querySelector('ul');
        // 1.1.6 获取article  
        this.article = this.tab.querySelector('article');
        // 初始化
        this.init();
    }      
          
    //   1.2 声明方法
    init() {
        this.updateNode();
        // 给添加按钮 绑定点击事件
        this.addBtn.onclick = this.addTab;
        // 给每个li绑定点击事件
        for (let i = 0; i < this.list.length; i++) {
            // 获取每个li的索引
            this.list[i].index = i;
            // 给每个li添加点击事件
            this.list[i].onclick = this.toggleTab;
            // 给每个删除按钮绑定事件
            this.rmBtn[i].onclick = this.removeTab;
        }
    }
   
    // 1.4  当元素变化的时候，重新获取元素
    updateNode() {
        // 1.1.2 获取li
        this.list = this.tab.querySelectorAll("li");
        // 1.1.3 获取section
        this.sections = this.tab.querySelectorAll("section");
        // 1.1.4 获取删除按钮
        this.rmBtn = this.tab.querySelectorAll('.icon-guanbi')
    }

    // 1.3 把li中的liactive类名清除 把section中的conactive类名清除
    clearClass() {
        // console.log(this.list.length);
        for (let j = 0; j < this.list.length; j++) {
            this.list[j].className = "";
            this.sections[j].className = "";
        } 
    }                          
    // 1.2.1 切换选项卡(先清除 后添加)
    toggleTab() {
        // 清除所有类名
        that.clearClass();
        // 点击的元素添加类名
        this.className = "liactive";
        // console.log(this.index);
        // 让li对应的那个section显示出来
        that.sections[this.index].className = "conactive";
    }   
                
    // 1.2.2 添加选项卡
    addTab() {
        let random = Math.random();
        that.init();
        // 1.2.2.0 清除任何一个被选中的类名
        that.clearClass();
        // 1.2.2.1 添加一个li(传统的添加元素 需要创建元素 不能直接添加字符串元素)
        let li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        that.ul.insertAdjacentHTML("beforeend", li);
        // 1.2.2.2 添加一个section
        let section = `<section class="conactive">测试中${random}</section>`;
        that.article.insertAdjacentHTML("beforeend", section);
    }                          
    // 1.2.3 删除选项卡                                                         
    removeTab(e){                             
        let index = e.target.parentNode.index;
        // 因为只想删除选项li 不想让li选中，发生了事件冒泡，因此要阻止事件冒泡                             
        e.stopPropagation();         
        // console.log(11111);
        // 删除父元素                 
        that.list[index].remove();
        that.sections[index].remove();               
        // that.ul.removeChild(that.list[index]);
        // // 获取删除按钮的父元素的索引，为了删除section
        // that.article.removeChild(that.sections[index]);
        // 判断元素是否被选中， 如果没有被选中, 就直接return 阻止后面代码的执行
        if (document.querySelector('.liactive')) return;
        index--; 
        // 如果that.list[index]为false,那么&&后面的代码就不执行了
        that.list[index] && that.list[index].click();
    }
    // 1.2.4 编辑选项卡

}           
// 2.创建对象
new Tab("#tab");
