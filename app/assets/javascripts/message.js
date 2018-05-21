$(function(){
  function buildHTML(message){
    var html =`<div class= "message">
                <div class= "upper-message">
                  <div class= "upper-message__user-name">
                    ${message.user_name}
                  </div>
                   <div class= "upper-message__date">
                    ${message.created_at}
                   </div>
                </div>
                <div class= "lower-meesage">
                      <? message.content.present? ?>
                        <p>
                          <div class= lower-message__content>
                            ${message.content}
                          </div>
                        </p>
                    <img scr=${message.image}class="lower-meesage_image"if message.image.present? />
                </div>
              </div>`
    return html;
  };

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages_user').append(html);
      $('.form__message').val('');
      $('.messages_user').animate({scrollTop: $(' .messages_user')[0].scrollHeight},'fast');
    })
    .fail(function(){
      alert('error');
    })
      return false;
  });
});
