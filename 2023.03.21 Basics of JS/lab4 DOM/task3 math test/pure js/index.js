
quiz = {
    questions: ["1x2", '3x5', '45x2'],
    variants: [[1, 2, 3, 4], [15, 2, 6, 4], [6, 344, 90, 4]],
    answers: ["2", "15", "90"]
}
 

function handleNextButtonClick() {
    let outputObj = document.getElementById("output")
    questionObj = document.getElementById("question")
    // erase error message 
    outputObj.textContent = ""; 
    // get index of current question in quiz 
    let index = quiz.questions.indexOf(questionObj.textContent) 
    let answeredRight = false // flag will be true if there is checked right answer
    // set flag true if answered correct
    document.getElementsByName("group1").forEach(elem => { 
        if (elem.checked && elem.value == quiz.answers[index]) 
            answeredRight = true; 
    }); 
    // if test is ended, display message 
    if (answeredRight && index+1 >= quiz.questions.length) {
        questionObj.textContent = " Congratulations ! " 
        i = 0;
        document.querySelectorAll(".answer-labels")
        .forEach(elem => { elem.textContent  = "" });
    }
    else if (answeredRight) { // if answered right 
        // move to the next question 
        questionObj.textContent  = quiz.questions[++index]; 
        // update values of radiobuttons 
        let i = 0;
        document.getElementsByName("group1")
        .forEach(elem => {  elem.value = quiz.variants[index][i++] })
        // update labels of radiobuttons 
        i = 0;
        document.querySelectorAll(".answer-labels")
        .forEach(elem => { elem.textContent  = quiz.variants[index][i++] });
    } 
    else // if error 
        // output right answer 
        outputObj.textContent = `Помилка, правильна відповідь ${quiz.answers[index]}`; 
}
 