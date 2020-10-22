$(function () {
  // 添加数据
  $('#add-btn').on('click', function () {
    // console.log(111)
    let formdata = $('form').serialize();
    // console.log(formdata);
    $.ajax({
      // 请求方式
      type: 'POST',
      // 请求地址
      url: '/api/add',
      // 请求数据
      data: formdata,
      // 成功时的回调函数
      success: function (result) {
        // console.log(result);
        if (result.code == 200) {
          alert(`用户: ${result.data.username}添加成功`);
          location.href = '/'
        }
      }
    })
  })
})