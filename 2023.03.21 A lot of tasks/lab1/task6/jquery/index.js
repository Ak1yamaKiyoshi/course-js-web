$(document).ready(function() {
    $('.calculator button').click(function() {
        let text = $('.calculator input').val();
        if (text.match(/[^+\d\s]/ ) == null) 
            $('#result').text( text + ' = ' + eval(text) )
    });
});


/*
Користувач вводить числа з клавіатури. 
Знайти суму введених чисел. Введення чисел закінчується тоді, коли буде введено 0. 
Вивести суму у такому вигляді: 2 + 7 + 10 + 6 + 0 = 25
*/