
quiz = {
    questions: ["1x2", '3x5', '45x2'],
    variants: [[1, 2, 3, 4], [15, 2, 6, 4], [6, 344, 90, 4]],
    answers: ["2", "15", "90"]
}
 
$(document).ready(function() {
    $('#next').click(function() {
        $('#output').text("") // erase error message 
        let index = quiz.questions.indexOf($('#question').text()) // get index of current question in quiz 
        let answeredRight = false // flag will be true if there is checked right answer
        // set flag true if answered correct
        $("[name='group1']").each(function() { if (this.checked && this.value == quiz.answers[index]) answeredRight = true; }) 
        // if test is ended, display message 
        if (answeredRight && index+1 >= quiz.questions.length) $('#question').text(" Congratulations ! ") 
        else if (answeredRight) { // if answered right 
            // move to the next question 
            $('#question').text(quiz.questions[++index]) 
            // update values of radiobuttons 
            $("[name='group1']").each(function(i) { this.value = quiz.variants[index][i]})
            // update labels of radiobuttons 
            $("[for='group1']").each(function(i) { this.innerHTML  = quiz.variants[index][i]}) // update radio labels 
        } 
        else // if error 
            // output right answer 
            $('#output').text(`Помилка, правильна відповідь ${quiz.answers[index]}`)

    });
});

