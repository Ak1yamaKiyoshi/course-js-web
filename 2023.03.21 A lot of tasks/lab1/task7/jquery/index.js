$(document).ready(function() {
    $('body button').click(function() {
        let form = $('body form').serializeArray();
        $('#result').text(Math.pow(form[0].value, form[1].value))
    });
});


/*
Ввести число S і цифру К.           2
Звести до ступеня другу цифру заданого числа.
*/