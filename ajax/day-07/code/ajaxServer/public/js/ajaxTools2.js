// 需求: 发起ajax请求其实是非常简单而又麻烦的 有些重复代码不用写，只写变化的值
// 问题: 上一个版本 ajaxTools.js使用函数封装 如果用户不知道这个函数的参数
// 函数的参数必须是有序的 且是正确 
// 能不能改成无序的 这四个参数 顺序无所谓 只要传了就行

/**
 * 
 * @param {Object} options ajax请求的请求方式|请求地址|请求数据|回调函数
 */
function ajax(options) {
  // 定义ajax的具体的四个参数
  // 请求方式
  let type = options.type;
  // 请求地址
  let url = options.url;
  // 请求数据
  let data = options.data;
  // 成功时的回调函数
  let success = options.success;
  // 发起ajax请求
  // 1.实例化xhr对象
  let xhr = new XMLHttpRequest();
  // 2.设置请求行 如果是get请求 url+'?'+data 如果不是 就是url
  if (type == 'GET') {
    url = url + '?' + data;
    data = null;
  }
  xhr.open(type, url);
  // 如果是POST那么要设置请求头
  if (type == 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  // 3.发送请求数据
  xhr.send(data);
  // 4.监听并处理响应
  xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      success(xhr.responseText);
    }
  }
}