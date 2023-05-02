function sumAndSentence(...args) {
    // let obj = {sum:0, sentence:''};
    // args.forEach(arg => {  (typeof arg === 'number') ? obj.sum += arg : obj.sentence += arg  } );
    // return obj;

    return new Object( {
        sum:args.filter(arg => typeof arg === 'number').reduce((a, b) => a + b, 0), 
        sentence:args.filter(arg => typeof arg === 'string').join('')
    });
}

console.log(sumAndSentence(1, 2, 3, 4, ' java', 6, 'script', 8, ' is ', 10, ' a programming language '));

/*
    Створіть функцію, яка приймає скільки завгодно параметрів (числа, слова) і виконує з ними наступне:
    Знаходить максимальне число з переданих чисел або їх суму
    Створює речення з переданих слів
*/