const usernames = [];

//These are all the event listeners.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("answer-message").style.display = "none";
    document.getElementById("answer-area").style.display = "none";
    document.getElementById('username-submit').addEventListener('click',
        usernameCollection);
    document.getElementById("submit").addEventListener("click",
        submitButton);
    document.getElementById("next").addEventListener("click",
        nextButton);
    document.getElementById("answer-box").addEventListener("keydown",
        function(event) {
            if (event.key === "Enter") {
                submitButton();
            }
        })
})

/**
 * Triggered by the onclick event on the submit button. It creates a username 
 * array from the usernames object. It then calls check answer, if true it
 * uses the username to search the object and add one to the key:correct value
 * If incorrect, it will all one to the key:incorrect value. 
 * It uses an object this way due to an intention of having multiple local users
 * with different usernames.
 */
function submitButton() {
    //store all of the names from the usernames object into an array
    let usernameArray = usernames.map(function(item) {
        return item['name'];
    })
    checkAnswer();
    //Use the username to search the usernames object so we can adjust the score
    objIndex = usernames.findIndex((obj => obj.name == usernameArray[0]));
    if (checkAnswer() === true) {
        //Adjust the correct score if correct
        usernames[objIndex].correct++;
    } else {
        //Adjust the incorrect score if incorrect
        usernames[objIndex].incorrect++;
    }
};

/**
 * This function is triggered by the onclick event for the next button.
 * It clears the answer box area and stops showing the answer message.
 * Then it calls the writeScoreboard function to update the scores shown.
 * Then it calls the importData function which will provide a random question.
 */
function nextButton() {
    //clear answer box
    document.getElementById("answer-box").value = "";
    //focus pointer into answer box
    document.getElementById("answer-box").focus();
    // clear answer message
    document.getElementById("answer-message").style.display = "none";
    writeScoreboard();
    importData();
}

/**
 * Following "The Coding Train" YouTube tutorial series Working With Data & APIs 
 * in JavaScript. The following function, importData, retrieves a csv and splits
 * it into rows by linebreak and then into columns by comma.
 */
async function importData() {
    // Create an array for each column
    let questionArray = [];
    let answerArray = [];
    //fetch the csv
    const response = await fetch("assets/csv/quiz.csv");
    const data = await response.text();
    //split data by rows
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
    //Declare num as output from randomNumber using the array length as argument
    let num = randomNumber(questionArray.length);
    //Use that random number to get a question out of the array and show it in DOM
    document.getElementById("question").textContent = questionArray[num];
    //Get correlating answer out of the array and store it but don't show it
    document.getElementById("correct-answer").textContent = answerArray[
    num];
    document.getElementById("correct-answer").style.display = "none";
}

/** 
 * Random number generator for question selection
 * Passes in a number as an argument
 * Generates random number, rounds it, times it by the argument in
 * Returns the random number
 */
function randomNumber(x) {
    let num1 = Math.floor(Math.random() * x);
    return num1;
}

/**
 * Checks for the correct answer by taking the user entered value from the DOM
 * makes it lower case and compares it to the answer stored in the DOM also 
 * lowercase. If the answer is correct, call celebrate functon. If the answer is
 * incorrect, call the wrongAnswer function. 
 */
function checkAnswer() {
    //Get the user entered answer and make it lower case
    let userAnswer = document.getElementById("answer-box").value.toLowerCase();
    //Get the correct answer and make it lower case
    let correctAnswer = document.getElementById("correct-answer").textContent
        .toLowerCase();
    //Compare the lower case answers and alert the user of result and answer
    let isCorrect = userAnswer === correctAnswer;
    if (isCorrect) {
        celebrate();
        return true;
    } else {
        wrongAnswer();
        return false;
    }
}

/**
 * This function is to celebrate the user answered correctly. It gets the 
 * correct answer from the DOM. Puts the answer message into the message element
 * Changes CSS to show the message element
 */
function celebrate() {
    //Get correct answer from the dom
    let correctAnswer = document.getElementById("correct-answer").textContent;
    //Write message to element using correct answer and text
    document.getElementById("message").innerText =
        `YAY! You got it right! \r\n\r\n The correct answer is: \r\n ${correctAnswer}`;
    //Show the message to the user
    document.getElementById("answer-message").style.display = "flex";
}

/**
 * This function is to commiserate and correct the user. It gets the user's
 * attempt from the DOM. Gets the correct message from the DOM and puts the
 * message into the message element. It then changes the CSS to show the
 * message element.
 */
function wrongAnswer() {
    //Get user value from DOM
    let userAnswer = document.getElementById("answer-box").value;
    //Get correct answer from DOM
    let correctAnswer = document.getElementById("correct-answer").textContent;
    //Put this message into the DOM
    document.getElementById("message").innerText =
        `Oops... you answered: \r\n ${userAnswer} \r\n\r\n The correct answer is: \r\n ${correctAnswer}`;
    //Display the message
    document.getElementById("answer-message").style.display = "flex";
}

/**
 * This function is for collecting and storing the username
 * It is triggered by an onclick event on submission button. The function
 * suppresses the default behaviour and instead creates an object called username. 
 * It reads in the username from the DOM as entered by the user. It then stores two
 * more keys, correct and incorrect both with a value of 0 for scorekeeping later.
 * It pushes the newly created object to a usernames array of objects declared at
 * the top. It then resets the form and stops showing the input area. It takes the
 * entered username from the object and displays a new message in the inputs place.
 * It then calls the next functions: writeScoreboard and importData.
 */


//Tutorial: https://www.youtube.com/watch?v=NxVCq4p0Kb0&ab_channel=SteveGriffith-Prof3ssorSt3v3
function usernameCollection(event) {
    //stops default form submitting behaviour
    event.preventDefault();
    //create object for storing username and scores
    let username = {
        name: document.getElementById("username").value,
        correct: 0,
        incorrect: 0,
    }
    //push object to const array declared at top of code
    usernames.push(username);
    //clear form contents
    document.querySelector('form').reset();
    //removes the form area so no further username inputs are possible
    document.getElementById("formusername").style.display = "none";
    //stores all the names from the usernames object into an array
    let usernameArray = usernames.map(function(item) {
        return item['name'];
    });
    //Display message greeting the user
    document.getElementById("greeting").innerHTML =
        `<h2>Hi ${usernameArray[0]}! <br> Here are your questions, good luck</h2>`;
    document.getElementById("answer-area").style.display = "flex";
    //Write scoreboard area now we know the username
    writeScoreboard()
    //Show the first question
    importData();
}

/**
 * To write the username and result to the scoreboard area. It reads in array
 * of objects. It then looks specifically for the name key and stores the 
 * values in an array. It uses the username to search the array of objects so we
 * can find the correlating scores and display those in the DOM.
 */
function writeScoreboard() {
    //store all the names from the usernames object into an array
    let usernameArray = usernames.map(function(item) {
        return item['name'];
    });
    //As we currently only have 1 username, it writes that to the DOM
    document.getElementById("name").innerHTML = usernameArray[0];
    //Use the username to search the object for the correct and incorrect keys
    objIndex = usernames.findIndex((obj => obj.name == usernameArray[0]));
    //Write the scores to the DOM
    document.getElementById("correct").innerHTML =
        `Correct: ${usernames[objIndex].correct}`;
    document.getElementById("incorrect").innerHTML =
        `Incorrect: ${usernames[objIndex].incorrect}`;
}