const usernames = [];

//These are all the event listeners.
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("answer-message").style.display = "none";
  importData();
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", checkAnswer);
  let nextButton = document.getElementById("next");
  nextButton.addEventListener("click", function () {
    importData();
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-message").style.display = "none";
  })
  document.getElementById('username-submit').addEventListener('click', usernameCollection);
  document.getElementById('end-username').addEventListener('click', endUsernameCollection);
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
  let num = randomNumber(questionArray.length);
  document.getElementById("question").textContent = questionArray[num];
  document.getElementById("correct-answer").textContent = answerArray[num];
  document.getElementById("correct-answer").style.display = "none";
}

//Random number generator for question selection
function randomNumber(x) {
  let num1 = Math.floor(Math.random() * x);
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
    celebrate();
    correctScores();
  } else {
    wrongAnswer();
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

//This function shows the correct answer rather than creating an alert
function celebrate() {
  let correctAnswer = document.getElementById("correct-answer").textContent;
  document.getElementById("message").innerText = `YAY! You got it right! \r\n\r\n The correct answer is: \r\n ${correctAnswer}`;
  document.getElementById("answer-message").style.display = "flex";
}

//This function shows the correct answer rather than creating an alert
function wrongAnswer() {
  let userAnswer = document.getElementById("answer-box").value;
  let correctAnswer = document.getElementById("correct-answer").textContent;
  document.getElementById("message").innerText = `Oops... you answered: \r\n ${userAnswer} \r\n\r\n The correct answer is: \r\n ${correctAnswer}`;
  document.getElementById("answer-message").style.display = "flex";
}

//This function is for collecting and storing the username https://www.youtube.com/watch?v=NxVCq4p0Kb0&ab_channel=SteveGriffith-Prof3ssorSt3v3
function usernameCollection(event) {
  event.preventDefault(); //to stop form submitting
  let username = {
    name: document.getElementById("username").value,
    correct: "",
    incorrect: "",
  }
  usernames.push(username);
  document.querySelector('form').reset();
  alert("Username Added");
}

//This function is for when usernames are all collected and we do not want to allow the user to add anymore names
function endUsernameCollection(event) {
  event.preventDefault(); //to stop form submitting
  document.getElementById("formusername").style.display ="none"; //removes form area so no more names can be added
  writeNameScoreboard();
}

//function to write usernames to the scoreboard
function writeNameScoreboard() {
  let tests = usernames.map(function (item){
    return item['name'];
  });
  for (let i=0; i<tests.length; i++) {
    let newUsername = document.createElement("p");
    newUsername.innerHTML = tests[i];
    document.getElementById("score-board").appendChild(newUsername);
}
}

