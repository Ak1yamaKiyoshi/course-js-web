$(document).ready(function() {
    $('#button').click(function() {
        let stringsArr = $('#strings').val().split('\n');
        process(stringsArr);
    });
});


function process(stringsArr) {
    $('#tables').append(`<table>\n${['', ...stringsArr].reduce((prev, curr) => {return prev + `\t<tr> ${curr} </tr>\n`})}</table>`);
}

/*
    Створити функцію, яка приймає текстові рядки, а виводить html-код таблиці, де кожен із вихідних рядків розташований в окремій комірці. 
    Використовуйте теги для оформлення таблиць: table, tr, td.
*/