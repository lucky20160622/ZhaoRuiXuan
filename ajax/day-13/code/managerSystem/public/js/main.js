$(function () {
  // 显示分页数据
  // 刚进入页面 要显示第一页数据
  showPage();
  // 点击分页按钮 显示对应的页码的数据
  $('.pager').on('click', 'li', function () {
    if (!$(this).hasClass('disabled')) {
      let pagenum = $(this).data('pagenum');
      // console.log(pagenum);
      showPage(pagenum)
    }
  })
  // 删除数据
  $('tbody').on('click', '.delete-btn', function () {
    let userId = $(this).data('id');
    // console.log(111);
    $.ajax({
      type: 'DELETE',
      url: '/api/deleteUser',
      data: {
        id: userId
      },
      beforeSend: function () {
        // return false会阻止请求发送
        if (!confirm("您确定要删除这条数据吗?")) {
          return false;
        }
      },
      success: function (result) {
        // console.log(data)
        if (result.code == 200) {
          // showPage();

          showPage($('html').attr('data-pagenum'));
        }
      }
    })
  })
  // 修改数据
})

/**
 * Name: 分页获取数据
 * @param {Number} pageNum 第几页
 * @param {Number} pageSize 一页显示多少条数据
 */
function showPage(pageNum, pageSize) {
  $.ajax({
    // 请求方式
    type: 'GET',
    // 请求地址
    url: '/api/getPage',
    // 请求数据
    data: {
      pageNum: pageNum || 1,
      pageSize: pageSize || 5
    },
    // 成功时的回调函数
    success: function (result) {
      // console.log(result)
      if (result.code == 200) {
        let pageStr = template('pagenation_templ', {
          pageNum: result.data.pageNum,
          pageSize: result.data.pageSize,
          pageTotal: Math.ceil(result.data.dataTotal / result.data.pageSize)
        })
        $('html').attr('data-pagenum', result.data.pageNum)
        $('.pager').html(pageStr);

        let listStr = template('list_templ', result.data);
        // console.log(listStr);
        $('tbody').html(listStr);
      }
    }
  })
}