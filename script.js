const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const buttons = document.querySelectorAll(".btn");

function show_answer(el){
    el.hidden = !el.hidden;
}

answers.forEach((answer) => answer.hidden = true);
buttons.forEach((button) => button.style.backgroundImage = "url('assets/images/icon-plus.svg')");

questions.forEach((question) => {
    question.addEventListener('click', function(){
        show_answer(question.nextElementSibling);
    });
});



buttons.forEach((button) =>{
    let checkUp = true;
    button.addEventListener('click', function(){
        if(checkUp){
            button.style.backgroundImage = "url('assets/images/icon-minus.svg')";
        }
        else {
            button.style.backgroundImage = "url('assets/images/icon-plus.svg')";
        }
        checkUp = !checkUp;
        show_answer(button.previousElementSibling);
        
    });
});