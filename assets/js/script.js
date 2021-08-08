/* Following "The Coding Train" YouTube tutorial series Working With Data & APIs in JavScript
The following function importData retrieves a csv and splits it into rows by linebreak and then 
into columns by comma
*/

async function importData() {
    const response = await fetch("assets/csv/quiz.csv");
    const data = await response.text();
    let questionArray = [];
    let answerArray = [];
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
console.log(questionArray);
console.log(answerArray);
}
importData();