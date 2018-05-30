function buildHTML(message){
  var insertImage = '';
  if (message.image.url){
  insertImage = `<img src="${message.image.url}">`;
  }
  var html = `<div class= "message" data-message-id='${message.id}'>
                <div class= "upper-message">
                  <div class= "upper-message__user-name">
                    ${message.name}
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
                    ${insertImage}
                </div>
              </div>`
              return html
}


//   setInterval(function(){
//    $.ajax({
//   url: location.href,
//   dataType: 'json',
//   })
//   .done(function(data){
//      var insertHTML = '';
//     data.messages.forEach(function(message){
//       console.log(message);
//       insertHTML+= buildHTML(message);
//     });
//     $('.messages_user').html(insertHTML);
//   })
//   .fail(function(data){
//     alert('自動更新に失敗しました')
//   });
// },5000);

