//These are all the event listeners.
document.addEventListener("DOMContentLoaded", function () {
  importData();
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", function () {
    checkAnswer();
  });
  let nextButton = document.getElementById("next");
  nextButton.addEventListener("click", function () {
    importData();
    document.getElementById("answer-box").value = "";
  })
})

/* Following "The Coding Train" YouTube tutorial series Working With Data & APIs in JavaScript
The following function importData retrieves a csv and splits it into rows by linebreak and then 
into columns by comma
*/
async function importData() {
  let questionArray = [];
  let answerArray = [];
  const response = await fetch("assets/csv/quiz.csv");
  const data = await response.text();

  const rows = data.split(/\r?\n|\r/).slice(1);
  for (row of rows) {
    const columns = row.split(',');

    //Loop to create a question array
    for (let i = 0; i < columns.length; i += 2) {
      questionArray.push(columns[i]);
    }
    //Loop to create an answer array
    for (let i = 1; i < columns.length; i += 2) {
      answerArray.push(columns[i]);
    }
  }

  //Generate the random question
  let num = randomNumber();
  document.getElementById("question").textContent = questionArray[num];
  document.getElementById("correct-answer").textContent = answerArray[num];
  document.getElementById("correct-answer").style.display = "none";
}

//Random number generator for question selection
function randomNumber() {
  let num1 = Math.floor(Math.random() * 20);
  return num1;
}

//This function checks for the correct answer and has been adapted from the Code Institute Love Maths Walkthrough Project
function checkAnswer() {
  //Get the entered answer and make it lower case
  let userAnswer = document.getElementById("answer-box").value.toLowerCase();
  //Get the correct answer and make it lower case
  let correctAnswer = document.getElementById("correct-answer").textContent.toLowerCase();
  //Compare the lower case answers and alert the user of whether they got it correct and what the answer is
  let isCorrect = userAnswer === correctAnswer;
  if (isCorrect) {
    alert("YAY! You got it right!");
    correctScores();
  } else {
    alert(`Oops... you answered ${userAnswer}. The correct answer is ${correctAnswer}!`);
    inCorrectScores();
  }
}

//This function tracks the number of correct answers and has been adapted from the Code Institute Love Maths Walkthrough Project
function correctScores() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

//This function tracks the number of incorrect answers and has been adapted from the Code Institute Love Maths Walkthrough Project
function inCorrectScores() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore; 
}