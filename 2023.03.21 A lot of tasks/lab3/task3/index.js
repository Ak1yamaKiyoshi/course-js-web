
$(document).ready(function() {
    $('#button').click(function() {
        $('body').append(Array.from({length: $('#count').val()}, (_, i) => `\t<h2> Header ${i+1} </h2>\n`).join(''));
    });
});



/*
    Cтворіть функцію createHeaders(N),
     яка створить на сторінці N заголовків другого рівня (<h2>) з написами Header1, Header2 … HeaderN.
*/
