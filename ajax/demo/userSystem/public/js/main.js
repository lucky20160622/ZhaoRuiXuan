// 入口函数
$(function () {
  // 获取第一页数据
  getListData();

  // 获取其他页数据
  $('.page').on('click', 'a', function () {
    // console.log($(this).data('pagenum'));
    let pagenum = $(this).data('pagenum');

    getListData(pagenum);
  })
})

/**
 * 功能: 分页获取数据
 * @param {Number} pagenum 第几页
 * @param {Number} pagesize 每页显示多少条数据
 */
function getListData(pagenum, pagesize) {
  $.ajax({
    type: 'GET',
    url: '/api/article',
    data: {
      pageNum: pagenum || 1,
      pageSize: pagesize || 6
    },
    success: function (result) {
      console.log(result.data);
      // 把时间戳 改成 yyyy-mm-dd
      for (let i = 0; i < result.data.records.length; i++) {
        // console.log(moment(result.data.records[i].publishDate).format('YYYY-MM-DD'))

        result.data.records[i].publishDate = moment(result.data.records[i].publishDate).format('YYYY-MM-DD')
      }
      let listStr = template('list_templ', result.data);

      $('.list').html(listStr)

      // 渲染分页
      let paginationStr = template('page_templ', result.data);
      $('.page').html(paginationStr);
    }
  })
}