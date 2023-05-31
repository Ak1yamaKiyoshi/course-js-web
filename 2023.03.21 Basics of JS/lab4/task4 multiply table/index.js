quiz = {
    questions: ["1x2", '3x5', '45x2'],
    answers: ["2", "15", "90"],
    correct: 0
}


$(document).ready(function() {
    $('#next').click(function() {
        let index = quiz.questions.indexOf($('#example').text())
        $('#example').text(() => {
            if (quiz.answers[index] == $('#userInput').val()) 
                quiz.correct++;
            let output;
            if (index+1 < quiz.questions.length) 
                output = quiz.questions[index+1];
            else {
                output = ` correct: ${Math.ceil((quiz.correct/quiz.answers.length)*100)}% ${quiz.correct}/${quiz.answers.length}` 
                quiz.correct = 0; 
            }
            return output
        });
    });
});