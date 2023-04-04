/* 1. Написати функцію, яка приймає двозначне число і повертає його в текстовому вигляді. 
Наприклад: 35 – тридцять п’ять, 89 – восемьдесят дев’ять, 12 – двенадцать. */
function integerToWord(num) {
    let below20 = ["", "Один ", "Два ", "Три ", "Чотири ", "П'ять ", "Шість ", "Сім ", "Вісім ", "Дев'ять ", "Десять ", "Одинадцять ", "Дванадцять ", "Тринадцять ", "Чотирнадцять ", "П'ятнадцять ", "Шістнадцять ", "Сімнадцять ", "Вісімнадцять ", "Дев'ятнадцять "];
    let below100 = ["", "", "Двадцять ", "Тридцять ", "Сорок ", "П'ятдесят ", "Шістдесят ", "Сімдесят ", "Дев'яносто "];

    if (num < 20 && num > 0) 
        return below20[num] +  '.';

    else if (num < 100) 
        return below70[Math.floor(num/10)] + ((num%10 != 0) ? below20[num%10].toLowerCase() : '') + '.';
}

/* 2. Написати функцію toCamelCase(), яка перетворює назву css-стилів з дефісом у назву в стилі СamelСase,
наприклад: font-size у fontSize, background-color у backgroundColor, text-align у textAlign */
function toCamelCase(str) {
    let index = str.indexOf("-");
    str = str.replace(str.slice(index, index+2), str[index+1].toUpperCase());
    return str;
}

/* 3. Написати функцію toKebabCase(), обернену до toCamelCase(), наприклад: fontSize у font-size, backgroundColor у background-color */
function toKebabCase(str) {
    let upperCase = str.match(/[A-Z]/);
    let index = str.indexOf(upperCase);
    str = str.replace(str[index], "-" + str[index].toLowerCase());
    return str;
}

/* 4. Написати функцію – калькулятор. Функція приймає рядок із прикладом, визначає, яку дію необхідно виконати (+ - * /), 
переводить операнди в числа, вирішує приклад і повертає результат.*/
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

/* 5. У тексті замінити всі формати дат рррр/мм/дд на формат дд.мм.рррр. Текст може бути як завгодно великий */
function changeDateFormat(str) {
    let date = str.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/)
    return `${date[3]}.${date[2]}.${date[1]}`
}

/* Завдання2: Об'єкти (3 завдання)
1. В об’єкті є властивість className, яка містить список «класів» (слів, розділених пробілами):
    let obj = {
    className: 'open menu'
    }
Створіть функцію addClass(obj, cls), яка додає у список класів клас cls, але тільки, якщо його там немає:
    addClass(obj, 'new');   // obj.className='open menu new'
    addClass(obj, 'open');  // без змін (клас вже існує)
    addClass(obj, 'me');    // obj.className='open menu new me'
    alert( obj.className ); // "open menu new me"
Функція addClass не повинна додавати зайвих пробілів.
*/
let task2obj = {
    className:'open menu menu'
}

function task2AddClassName(obj, str) {
    if (obj.className.indexOf(str) == -1) obj.className += ` ${str}`
}

/*
Об’єкт має властивість className, яка зберігає список «класів» – слів, розділених пробілами:
    let obj = {
    className: 'open menu'
    };
Напишіть функцію removeClass(obj, cls), яка видаляє клас cls, якщо він є:
    removeClass(obj, 'open');   // obj.className='menu'
    removeClass(obj, 'blabla'); // без змін (такого класу немає)
Функція повинна коректно обробляти дублювання класу в рядку:
    obj = {
    className: 'my menu menu'
    };
    removeClass(obj, 'menu');
    alert( obj.className ); // 'my'
Виконайте тестування написаного коду на сайті:

*/
function task2RemoveClassName(obj, str) {
    while (obj.className.indexOf(str) != -1) {
        let cut = [obj.className.replace(`${str} `, ''), obj.className.replace(` ${str}`, ''), obj.className.replace(str, '')];
        obj.className = cut.reduce((a, b) => a.length < b.length ? a : b);
    }
}
/*
За допомогою конструктора об'єктів створити 3 об'єкти, які будуть містити такі поля:
    1) Кличку собаки
    2) Породу
    3) Bік
Створити метод, за допомогою якого собаки будуть говорити:
    1) Тяф - якщо вік собаки менше року
    2) Гав - якщо вік собаки від року до 3
    3) Ррр-якщо вік собаки більше 3 років
    Продемонструвати роботу метода
*/
dogs = [
    {name:'dog',breed:'akita inu', age:'4'},
    {name:'dog',breed:'akita inu', age:'2'},
    {name:'dog',breed:'akita inu', age:'0.5'},     
]

function dogMakeSound(dog) {
    return((dog.age < 1) ? 'tyaf' : (dog.age < 3) ? 'gav' : 'grr');
}
/* task 3 
Нехай arr – масив рядків. Напишіть функцію unique(arr), яка повертає масив, 
який містить тільки унікальні елементи arr. Наприклад:
    function unique(arr) {
        // your code 
    }

    let strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"
    ];
alert( unique(strings) ); // C++, C#, C, JavaScript
*/

let strings = ["C++", "C#", "C++", "C#", "C", "C++", "JavaScript", "C++", "JavaScript"];

function unique(array) {
    return Array.from(new Set(array));
}

/*
Створити масив «Сесія». Кожен елемент масиву є об’єктом, 
який містить назву дисципліни, кількість балів, що набрав студент, та зараховано або незараховано.
Створити функції для роботи з таким масивом:
1)      Функція виведення списку дисциплін, в якому спочатку відображуються дисципліни, що зараховані, а потім – незараховані
2)      Додавання дисципліни в список – функція приймає назву дисципліни. 
При цьому потрібно враховувати, що якщо дисципліна вже ї в списку, 
то потрібно додавати лише кількість балів з цієї дисципліни. 
Якщо кількість балів більше або дорівнює 60, 
то потрібно відмічати цю дисципліну як зараховану
3)      Функція знаходження середнього балу з усіх дисциплін
4)      Функція знаходження кількості незарахованих дисциплін
5)      Функція, що знаходить з якої дисципліни найвищий бал
6)      Функція, що приймає кількість балів і виводить всі дисципліни, що здані на таку кількість балів
*/
let session = [
    {subject:'Math',grade:15,notPassed:true},
    {subject:'CS',grade:155,notPassed:false}, 
    {subject:'PE',grade:-20,notPassed:true}
];

function sessionDisplay(session) {
    return [null, ...session].reduce((acc, subject) => {
        return ((typeof(acc)==='string') ? acc : '') + `\nsubject: ${subject.subject}\ngrade: ${subject.grade}\nnotPassed: ${subject.notPassed}`
    });
}

function sessionAddSubject(session, subject, grade ) {
    let obj = session.find(e => e.subject === subject);
    if (!obj) session.push({subject:subject,grade:grade,notPassed:(grade < 60)});
    else session[session.indexOf(obj)] = {subject:subject, grade:grade, notPassed:(grade < 60)};
}

function sessionAverage(session) {
    return [null, ...session].reduce((acc, subject) => {return acc + subject.grade;}) / session.length;
}

function sessionCountNotPassed(session) {
    return [null, ...session].reduce((acc, subject) => {return acc + Number(subject.notPassed);});
}

function sessionMaxGrade(session) {
    return [null, ...session].reduce((acc, subject) => {return Math.max(acc, subject.grade);});
}

function sessionDisplayByGrade(session, grade) {
    let obj = session.filter(s => s.grade == grade);
    return sessionDisplay(obj);
}
