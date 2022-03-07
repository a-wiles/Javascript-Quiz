// Data storage
var score =0;
var time = 60;
var currentQuestions = 0;

//Question Prompts
var questions = [
    { 
        question: "How many Data Types are there in Javascript?",
        answers: [
            "4",
            "6",
            "8",
            "Infinite"
        ],
         correctAnswer: "8"
    },

    { 
        question: "What interaction can you do a user input?",
        answers: [
            "prompt",
            "alert",
            "confirm",
            "you cannot do a user input in any interaction."
        ],
         correctAnswer: "prompt"
    },

    { 
        question: "What would you use to observe a user behavior?",
        answers: [
            "EventListener",
            ".clickhere",
            "button",
            "event"
        ],
         correctAnswer: "EventListener"
    },

    { 
        question: "What do you use to call a function?",
        answers: [
            "Square Brackets",
            "Quotes",
            "Curly Brace",
            "Parenthesis"
        ],
         correctAnswer: "Parenthesis"
    },
]

//Element ID's from HTML
var welcomeEl = document.getElementById("welcome");
var questionsEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var buttonE1 = document.getElementById("start-button");


//Start functions Event Listener
document.getElementById("start-button").addEventListener("click", startQuiz);

//For loop to cycle through all the questions.
var promptOptions = function() {
    optionsEl.innerHTML = "";
    for (var i = 0; i < questions[currentQuestions].answers.length; i++) {
        var selectedButton = document.createElement("button");
            selectedButton.onclick = answerCheck;
            selectedButton.textContent = questions[currentQuestions].answers[i];
            optionsEl.appendChild(selectedButton);
    }
}

//Checking if the answer to your question is correct or incorrect
function answerCheck () {
    if (this.textContent == questions[currentQuestions].correctAnswer){
        alert("Correct");
        } else {
        alert ("Incorrect, 20 seconds has been deducted from your time!");
        time -= 20;
        }
        nextPrompt();
}

//Function to switch to the next question
 function nextPrompt () {
     currentQuestions++
    if (currentQuestions >= questions.length) {
        quizOver();
    }
    else {
        questionsEl.textContent = questions[currentQuestions].question;
        promptOptions();
    }
}

//If you run out of time or you answer all questions, triggers for local storage.
function quizOver () {
    alert("Your quiz is over!");
    window.prompt("Enter Intials Here for high score!")
    localStorage.setItem(time);
}


// 60 second count down timer.
function startTimer() {
    time--;

    var pageTimer = setInterval(function (){
    document.getElementById("countdown").textContent = time + "seconds remaining";

    time -= 1;
    if(time <= -1){
        clearInterval(pageTimer);
        quizOver ();
    }
    }, 1000);
};

//function to actual begin entire quiz
function startQuiz () {
    startTimer();
    welcomeEl.style.display = "none";
    questionsEl.textContent = questions[currentQuestions].question;
    optionsEl.textContent = "";
    promptOptions ();
};