// 需求: 发起ajax请求其实是非常简单而又麻烦的 有些重复代码不用写，只写变化的值

/**
 * 
 * @param {String} type 请求方式(GET、POST、PUT、DELETE)
 * @param {String} url  请求地址 
 * @param {String} data 请求数据
 * @param {function} success 请求成功后的回调函数
 */
function ajax(type, url, data, success) {
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