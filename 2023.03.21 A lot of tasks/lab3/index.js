function process() {
    outputStringWithDifferentFont($('#str').val(), $('#fontSize').val())
}


function outputStringWithDifferentFont(str, fontSize) {
    $('#output').css({'font-size': `${fontSize}px`});
    $('#output').text(str);
}


/*
    1. Створити функцію, яка виводить текст із різним розміром шрифту. 
    Функція має два аргументи: текстовий рядок та розмір шрифту. 
    Використовуйте style-властивість font-size
*/