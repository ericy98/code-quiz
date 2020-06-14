var start = document.getElementById("start");
var quizContainer = document.getElementById("questions");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");


var startQuiz = document.querySelector("#start");
, function(){
  alert("you clicked start!");
 });


var lastQuestion = questions.length - 1;
var questionIndex = 0;
var displayQuestion = function(){
    // store HTML output
    // var output = [];

    // // each questions
    // myQuestions.forEach(
    //   (currentQuestion, questionNumber) => {
    //     var answers = [];
    //     for(letter in currentQuestion.answers){
    //       answers.push(
    //         `<label>
    //         <input type="button" name="question${questionNumber}">
    //         ${currentQuestion.answers[letter]}
    //         </label>`
    //       );
    //     }
    //     // add question and answers to output
    //     output.push(
    //       `<div class="question"> ${currentQuestion.question} </div>
    //       <div class="choices"> ${answers.join('')} </div>`
    //     );

    //   }
    // );  
    // quizContainer.innerHTML = output.join('');
  var q = questions[questionIndex];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;


};

var showResults = function(){
    console.log("results");
}

// make every element in array an object
var questions = [
  {
    question: "Which generates a link in HTML?",

      choiceA: "1. class='' ",
      choiceB: "2. href=''",
      choiceC: "3. id=''",
      choiceD: "4. type=''",
      correctAnswer: "B"
  },{
      question: "How can you execute a block of code a certain number of times in JavaScript?",
      
        choiceA: "Math.floor(Math.random());",
        choiceB: "if () ",
        choiceC: "for ()",
        choiceD: "switch statements ",
        correctAnswer: "C"
  },{
      question: "How do you turn a string into a number in JavaScript?",

        choiceA: "parseInt()",
        choiceB: "Math.max()",
        choiceC: "console.log()",
        choiceD: "if()",
        correctAnswer: "A"
      
    }
];
  
  displayQuestion();
  start.addEventListener("click");