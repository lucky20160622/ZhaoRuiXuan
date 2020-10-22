// 给后端的数据写成对象  JS处理成key=value&key=value
let $ = {
  param: function (dataobj) {
      let datastr = ''
      for (let k in dataobj) {
          datastr += k + '=' + dataobj[k] + '&'
      }
      datastr = datastr.slice(0, -1)
      return datastr
  },
  /**
   *
   * @param {otions} otions  请求方式|地址|数据|回调函数
   */
  ajax: function (options) {
      // 方式  如过没有传递 默认为get
      let type = options.type || 'get'
      // 地址
      let url = options.url || undefined
      // 数据
      let data = this.param(options.data || {})
      // 回调函数
      let success = options.success

      // 1.实例化对象
      let xhr = new XMLHttpRequest()
      // 2.设置请求行 如果是get
      if (type == 'get') {
          url = url + '?' + data;
          data = null
      }
      // 3发送数据
      xhr.open(type, url)
      if (type == 'post') {
          xhr.setRequestHeader('content-type', 'application/x-www.form-urlencoded')
      }
      xhr.send()
      // 4.监听
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 & xhr.status == 200) {
              success(xhr.responseText)
          }
      }
  }
}
