/*
Завдання1: Рядки (5 завдань)
1. Написати функцію, яка приймає двозначне число і повертає його в текстовому вигляді.
Наприклад: 35 – тридцять п’ять, 89 – восемьдесят дев’ять, 12 – двенадцать.
2. Написати функцію toCamelCase(), яка перетворює назву css-стилів з дефісом у назву в стилі СamelСase, наприклад: font-size у fontSize, background-color у backgroundColor, text-align у textAlign
3. Написати функцію toKebabCase(), обернену до toCamelCase(), наприклад: fontSize у font-size, backgroundColor у background-color
4. Написати функцію – калькулятор. Функція приймає рядок із прикладом, визначає, яку дію необхідно виконати (+ - * /), переводить операнди в числа, вирішує приклад і повертає результат.
5. У тексті замінити всі формати дат рррр/мм/дд на формат дд.мм.рррр. Текст може бути як завгодно великий
*/

function integerToWord(num) {
    let below20 = ["", "Один ", "Два ", "Три ", "Чотири ", "П'ять ", "Шість ", "Сім ", "Вісім ", "Дев'ять ", "Десять ", "Одинадцять ", "Дванадцять ", "Тринадцять ", "Чотирнадцять ", "П'ятнадцять ", "Шістнадцять ", "Сімнадцять ", "Вісімнадцять ", "Дев'ятнадцять "];
    let below100 = ["", "", "Двадцять ", "Тридцять ", "Сорок ", "П'ятдесят ", "Шістдесят ", "Сімдесят ", "Дев'яносто "];

    if (num < 20 && num > 0) 
        return below20[num] +  '.';

    else if (num < 100) 
        return below70[Math.floor(num/10)] + ((num%10 != 0) ? below20[num%10].toLowerCase() : '') + '.';
}


function toCamelCase(str) {
    let index = str.indexOf("-");
    str = str.replace(str.slice(index, index+2), str[index+1].toUpperCase());
    return str;
}


function toKebabCase(str) {
    let upperCase = str.match(/[A-Z]/);
    let index = str.indexOf(upperCase);
    str = str.replace(str[index], "-" + str[index].toLowerCase());
    return str;
}


function calculator(str) {
    stack = str.match(/[-+*/]|\d+/g);
    operators= str.match(/[/*]/g);
    operators = operators.concat(str.match(/[+-]/g));
    operators.forEach(o => {
        let i = stack.indexOf(o);
        let op1 = parseInt(stack[i-1]);
        let op2 = parseInt(stack[i+1]);
        stack.splice(i-1, 1); stack.splice(i, 1);
        let result = ((o == '*') ? op1 * op2 : (o == '/') ? op1 / op2 : (o == '+') ? op1 + op2 : op1 - op2);
        stack[i-1] = result;
    });
    return stack;
}   

function changeDateFormat(str) {
    let date = str.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/)
    return `${date[3]}.${date[2]}.${date[1]}`
}
