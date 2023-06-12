
$(document).ready(function() {
    $('textarea').val(document.cookie)
    $('button').click(function() {
        // to_save=132; expires=Tue, 13 Jun 2023 11:12:26 GMT; path=/
        let cookie =`to_save=${$('textarea').val()}; expires=${(new Date(parseInt((new Date()).getTime()) + 86400000)).toUTCString()}; path=/` 
        document.cookie = cookie
    });
})