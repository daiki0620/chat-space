$(function(){
  function buildHTML(user){
    var html= `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}
                    </p>
                      <a class="user-search-add chat-group-user__btn"
                          data-user-id=${user.user_id}
                            data-user-name=${user.name}><span class="chat-group-user__btn--ad">追加</span></a>
                    </div>`
                    $("#user-search-result").append(html);
                    $('.chat-group-user__btn--ad').on('click',function(){
                    $(this).empty();
                    $('.chat-group-user__name').empty()
                    addhtml_user(user)
                  });
                              }
  function addhtml_user(user){
          var html= `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
            <input name='group[user_ids][]' type='hidden' value=${user.user_id}>
              <p class='chat-group-user__names'>${user.name}</p>
              <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'><span class="destroy-btn">削除</span></a>
              </div>`
              $('.chat-group-user__name').append(html);
         $('.destroy-btn').on('click',function(){
          $(this).empty();
        $('.chat-group-user__name').empty();
      });
     };
  $('.chat-group-form__input').on("keyup", function(){
    var input = $('.chat-group-form__input').val();
    $.ajax({
      type: "GET",
      url:'/users',
      data:{keyword:input},
      dataType:'json'
    })
    .done(function(users){
      $('#user-search-result').empty();
      if (users.length !== 0) {
          users.forEach(function(user){
          buildHTML(user);
          });
          }
       })
      .fail(function(){
        alert('エラー');
      })
      return false;
   });
});
