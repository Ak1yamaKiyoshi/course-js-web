$(document).ready(function() {
    $('body button').click(function() {
        num = parseInt($('#number').val())

        buffer = num%10
        num -= buffer
        num /= 10
        num += buffer * 10000
        $('#result').text(num)
    });
});
//Запитайте у користувача п'ятизначне число і перемістіть останню цифру на початок (з числа 12345 має вийти число 51234).