
$(document).ready(function() {
    console.log(document.cookie)
    $('textarea').val(document.cookie)
    $('button').click(function() {

        // expires=${(new Date(parseInt((new Date()).getTime()) + 86400000)).toUTCString()};
        //  path=/
        console.log($('textarea').val())
        let cookie =`to_save=${$('textarea').val()};` 
        document.cookie = cookie
        console.log(document.cookie)
    });
})