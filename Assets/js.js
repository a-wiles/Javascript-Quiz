// Data storage
var score =0;
var count = 90;
var questions = [
    { 
        prompt: "How many Data types are there in Javascript?.",
        answers: {
            a: "4",
            b: "6",
            c: "8",
            d: "infinite"
        },
         correctAnswer: "c"
    },

    { 
        prompt: "What interaction can you do a user input?",
        answers: {
            a: "prompt",
            b: "alert",
            c: "confirm",
            d: "you cannot do a user input in any interaction."
        },
         correctAnswer: "a"
    },

    { 
        prompt: "What would you use to observe a user behavior?",
        answers: {
            a: "EventListener",
            b: ".clickhere",
            c: "button",
            d: "event"
        },
         correctAnswer: "a"
    },

    { 
        prompt: "What do you use to call a function?",
        answers: {
            a: "Square Brackets",
            b: "Quotes",
            c: "Curly Brace",
            d: "Parenthesis"
        },
         correctAnswer: "d"
    },
]

var finalAnswers = [];



//Start functions
document.getElementById("startButton").addEventListener("click", startQuiz);

function startQuiz () {
    startTimer();
};

function getQuestions () {

};

function startTimer() {
    var timeleft = 60;

    var pageTimer = setInterval(function (){
    document.getElementById("countdown").textContent = timeleft + "seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(pageTimer);
    }
    }, 1000);

    console.log(countdown);
};
