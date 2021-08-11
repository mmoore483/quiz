const usernames = [];


//These are all the event listeners.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("answer-message").style.display = "none";
    document.getElementById('username-submit').addEventListener('click', usernameCollection);
    document.getElementById("submit").addEventListener("click", submitButton);        
    document.getElementById("next").addEventListener("click", nextButton);
})
        
function submitButton() {
    let usernameArray = usernames.map(function(item) { //store all of the names from the usernames object into an array
        return item['name'];
    })
    checkAnswer();
    objIndex = usernames.findIndex((obj => obj.name == usernameArray[0])); //Use the username to search the usernames object so we can adjust the score
    if (checkAnswer() === true) {
        usernames[objIndex].correct++; //Adjust the correct score if correct
    } else {
        usernames[objIndex].incorrect++; //Adjust the incorrect score if incorrect
    } 
};

function nextButton() {
    document.getElementById("answer-box").value = ""; //clear answer box
    document.getElementById("answer-message").style.display = "none"; // clear showing the answer
    importData();
}
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
    console.log(questionArray[num]);
    document.getElementById("correct-answer").textContent = answerArray[num];
    document.getElementById("correct-answer").style.display = "none";
}

//Random number generator for question selection
function randomNumber(x) {
    let num1 = Math.floor(Math.random() * x);
    return num1;
}

//This function checks for the correct answer
function checkAnswer() {
    //Get the entered answer and make it lower case
    let userAnswer = document.getElementById("answer-box").value.toLowerCase();
    //Get the correct answer and make it lower case
    let correctAnswer = document.getElementById("correct-answer").textContent.toLowerCase();
    //Compare the lower case answers and alert the user of whether they got it correct and what the answer is
    let isCorrect = userAnswer === correctAnswer;
    if (isCorrect) {
        celebrate();
        return true;
    } else {
        wrongAnswer();
        return false;
    }
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
        correct: 0,
        incorrect: 0,
    }
    usernames.push(username);
    document.querySelector('form').reset();
    document.getElementById("formusername").style.display = "none"; //removes form area so no more names can be added
    let usernameArray = usernames.map(function(item) { //store all of the names from the usernames object into an array
        return item['name'];
    });
    document.getElementById("greeting").innerHTML = `Hi ${usernameArray[0]}, here are your questions, good luck! `;
    writeNameScoreboard();
    console.log(usernames);

    importData();
}

//function to write usernames to the scoreboard
function writeNameScoreboard() {
    let usernameArray = usernames.map(function(item) { //store all of the names from the usernames object into an array
        return item['name'];
    });
    for (let i = 0; i < usernameArray.length; i++) {
        let newUsername = document.createElement("p"); //create a new element to hold username
        newUsername.innerHTML = usernameArray[i];
        document.getElementById("score-board").appendChild(newUsername); //write the current username to the new element created above
        // objIndex = usernames.findIndex((obj => obj.name == usernameArray[i])); //Use the username to search the usernames object so we can adjust the score
        // console.log("Before update: ", usernames[objIndex]);
        // usernames[objIndex].correct = "2"; //Adjust the score
        // console.log("After update: ", usernames[objIndex]);
    }
}