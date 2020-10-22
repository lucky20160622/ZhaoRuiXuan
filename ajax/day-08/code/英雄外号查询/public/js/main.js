$(document).ready(function () {
  // TODO: 显示留言内容
  getGuest();



  // TODO: 添加留言内容
  $('#btn_send').on('click', function () {
    let formData = $('#form').serialize();
    addGuest(formData);
  })
});

// 获取留言
function getGuest() {
  $.ajax({
    type: 'GET',
    url: '/findGuest',
    data: null,
    success: function (data) {
      // console.log(data);
      let str = '';
      for (let i = 0; i < data.length; i++) {
        str += `
        <li class="media" data-time="${data[i].created}">
          <img class="mr-3 " src="./image/avatar.png" alt="张三">
          <div class="media-body">
            <h4>${data[i].name}</h4>
            <p>${data[i].content}</p>
          </div>
        </li> 
        `;
      }

      // console.log(str);
      $('#messages').html(str);

    }
  })
}

// 添加留言
function addGuest(data) {
  $.ajax({
    type: 'POST',
    url: '/addGuest',
    data: data,
    success: function (data) {
      console.log(data);
      if (data.code == 200) {
        getGuest();
      }
    }
  })
}