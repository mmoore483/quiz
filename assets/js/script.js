/* Following "The Coding Train" YouTube tutorial series Working With Data & APIs in JavScript
The following function importData retrieves a csv and splits it into rows by linebreak and then 
into columns by comma
*/


async function importData() {
  let questionArray = [];
  let answerArray = [];
  const response = await fetch("assets/csv/quiz.csv");
  const data = await response.text();

  const rows = data.split(/\r?\n|\r/).slice(1);
  for (row of rows){
    const columns = row.split(',');
     
    //Loop to create a question array
    for (let i = 0; i < columns.length; i+=2){
      questionArray.push(columns[i]);
    }
    //Loop to create an answer array
    for (let i = 1; i < columns.length; i+=2){
      answerArray.push(columns[i]);
    }   
}

//Generate the random question
let num = randomNumber();
document.getElementById("question").textContent = questionArray[num];
}


importData();


//Random number generator for question selection
function randomNumber() {
  let num1 = Math.floor(Math.random()* 20);
  return num1;
}


