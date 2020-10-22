// 获取元素
// 绑定事件
// 清除
// 添加
// 删除
var that;
// 声明公共属性
class Tab {
  constructor(id) {
    that = this;
    // 获取tab
    this.tab = document.querySelector(id);
    // 获取li
    this.list = this.tab.querySelectorAll("li");
    // 获取section
    this.sections = this.tab.querySelectorAll("section");
    // 获取ul
    this.ul = this.tab.querySelector("ul");
    // 获取article
    this.article = this.tab.querySelector("article");
    // 获取添加按钮
    this.addBtn = this.tab.querySelector(".tabadd");
    // 获取删除按钮
    this.reBtn = this.tab.querySelectorAll(".icon-guanbi");

    this.init();
  }
  // 重置
  init() {
    this.updateNode();
    // 给添加按钮绑定事件
    this.addBtn.onclick = this.addTab;
    for (let i = 0; i < this.list.length; i++) {
      // 获取每个li的索引
      this.list[i].index = i;
      // 给每个li绑定点击事件
      this.list[i].onclick = this.toggleTab;
      // 给删除按钮添加绑定事件
      this.reBtn[i].onclick = this.removeTab;
      // 给编辑绑定双击事件
      this.spans[i].ondblclick = this.editTab;
      this.sections[i].ondblclick = this.editTab;
    }
  }
  // 清除
  clearClass() {
    for (let j = 0; j < this.list.length; j++) {
      this.list[j].className = "";
      this.sections[j].className = "";
    }
  }
  // 更新   
  updateNode() {
    // 获取li
    this.list = this.tab.querySelectorAll("li");
    // 获取section
    this.sections = this.tab.querySelectorAll("section");
    this.spans = this.tab.querySelectorAll(".fisrstnav li span:first-child");
  }
  //切换 
  toggleTab() {
    // 清除所有的元素    
    that.clearClass();
    // 添加类名
    this.className = "liactive";
    that.sections[this.index].className = "conactive";
  }
  // 添加
  addTab() {
    that.init();
    that.clearClass();
    let random = Math.random();
    let li =
      '<li class="liactive"><span>测试6666</span><span class="iconfont icon-guanbi"></span></li>';
    that.ul.insertAdjacentHTML("beforeend", li);
    let section = `<section class="conactive">测试${random}</section>`;
    that.article.insertAdjacentHTML("beforeend", section);
  }
  // 删除
  removeTab(e) {
    e.stopPropagation();
    let index = this.parentNode.index;
    that.list[index].remove();
    that.sections[index].remove();
    index--;
    that.list[index] && that.list[index].click();
  }
  // 编辑
  editTab() {
    //  创建一个变量
    var str = this.innerHTML;
    // 双击禁选文字
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.getSelection.empty();
    // 添加一个input输入框
    this.innerHTML='<input "type=text"/>'
    // 输入框等于span的子元素
    var input=this.children[0]
    // 输入框里面的内容等于变量
    input.value=str
    // 让输入框处于选中状态
    input.select()
    // 输入框失去焦点则保存
    input.onblur=function(){
      this.parentNode.innerHTML=this.value
    }
    // 回车键也可以保存
    input.onkeyup=function(e){
      if(e.keyCode===13){
        this.blur()
      }
    }
  }
}
new Tab("#tab");
