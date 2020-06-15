var quizStart = document.getElementById("start")
var startBtn = document.getElementById("start-btn");
var quizContainer = document.getElementById("questions");
var scoreTimeContainer = document.getElementById("score-time");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answerButtons = document.getElementById("choices")
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var endQuiz = document.getElementById("end-screen");
var quizResults = document.getElementById("results")


// make every element in array an object
var questions = [
  {
    question: "Which generates a link in HTML?",
    choiceA: "1. class='...'",
    choiceB: "2. href='...'",
    choiceC: "3. id='...'",
    choiceD: "4. type='...'",
    correctAnswer: "B"
  },
  {
    question: "How can you execute a block of code a certain number of times in JavaScript?",
    choiceA: "1. Math.floor(Math.random());",
    choiceB: "2. if () ",
    choiceC: "3. for ()",
    choiceD: "4. switch statements ",
    correctAnswer: "C"
  },
  {
    question: "How do you turn a string into a number in JavaScript?",
    choiceA: "1. parseInt()",
    choiceB: "2. Math.max()",
    choiceC: "3. console.log()",
    choiceD: "4. if()",
    correctAnswer: "A"
  },
  {
    question: "Which terminal command will create a new file?",
    choiceA: "1. cd <name>",
    choiceB: "2. git pull <name>",
    choiceC: "3. rm <name>",
    choiceD: "4. touch <name>",
    correctAnswer: "D"
  },
  {
    question: "Which CSS variable creates a shortcut that replaces a colors #Hex",
    choiceA: "1. background",
    choiceB: "2. var(--'name')",
    choiceC: "3. color",
    choiceD: "4. return",
    correctAnswer: "B"
  }
];

// set variables 
var lastQuestion = questions.length - 1;
var currentQuestion = 0;

var shuffledQuestions, currentQuestion
var setNextQuestion = function(){
  var q = questions[currentQuestion];
  question.innerHTML = "<h3>" + q.question + "</h3>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;

};


var startQuiz = function() {
  
  quizStart.style.display = "none";
  quizContainer.style.display = "block";
  //randomize question order
  shuffledQuestions = questions.sort(() =>Math.random() - .5);
  setNextQuestion();

}





var checkAnswer = function(answer) {
  
  if (answer === questions[currentQuestion].correctAnswer) {
    console.log("correct");
  } else {
    console.log("WRONG");
    timeLeft= timeLeft - 15;
  }
  
  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    setNextQuestion();
  }else {
    clearInterval(timeInterval);
    showResults();
  }
}

// var answerIsCorrect = function() {
//   document.getElementById("answer-result").innerHTML = "CORRECT!"
//   window.setTimeout(answerIsCorrect(), 1000)
// }

var showResults = function(){
    alert("RESULTS");
}



var count = 0;
var timeLeft = 75;
  // create countdown



startBtn.addEventListener("click", startQuiz)


var timeInterval= setInterval(function(){
  timerEl.textContent = "Time: " + timeLeft;
  timerEl.setAttribute("style", "text-align: end");
  timeLeft --;

  if(timeLeft === 0) {
    timerEl.textContent = "";
    showResults();
    clearInterval(timeInterval);
  }

}, 1000);


var stopTimer = function() {
  clearInterval(timeInterval);
}

setNextQuestion();