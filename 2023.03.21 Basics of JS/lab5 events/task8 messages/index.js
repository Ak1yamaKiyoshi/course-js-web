
$(document).ready(function() {
    $('.message button').click(function() {
        $('.comments_section').append(`<div class="comment"> <div class="comment_info"><p>${$('.message input').val()}</p><p>${((new Date()).toLocaleString('default', { month: 'long', day:'2-digit', hour:'2-digit',minute:"2-digit" }))}</p></div><p>${$('.message textarea').val()}</p></div>`)
    })

});
//
