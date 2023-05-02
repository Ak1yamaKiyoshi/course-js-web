$(document).ready(function() {
    $('#stop').click(function() {$('.calculator').hide()});
    $('#next').click(function() {
        let a = $('#form').serializeArray();
        $('.calculator p').text(eval(a[0].value+ a[1].value + a[2].value))
    });
    
});


/*
  Зацикліть калькулятор. 
  Запитати у користувача 2 числа та знак,
  вирішити приклад, вивести результат і запитати,
  чи хоче він вирішити ще один приклад. 
  І так доти, доки користувач не відмовиться.
*/