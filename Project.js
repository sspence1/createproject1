var playerChoice;

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function playGame(){
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        console.log("tie");
        return 0;
    } else if (playerChoice == 0 && computerChoice == 2) {
        // Rock beats scissors - a win!
        console.log("win");
        return 1;
    } else if (playerChoice == 1 && computerChoice == 0) {
        // Paper beats scissors - a win!
        console.log("win");
        return 1;
    } else if (playerChoice == 2 && computerChoice == 1) {
        // Scissors beats paper - a win!
        console.log("win");
        return 1;
    } else {
        // All other combinations are losses
        console.log("lose");
        return -1;
    }
}

function displayGameResult(resultId){
    // Define an array of text labels for the choices 0, 1, 2;
    var choices = ["Rock", "Paper", "Scissors"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Display that it was a win
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    } else if (result == -1) {
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}

// Variable to store the score
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0,0,0];

function updateScore(val){
    ++score[val];
    console.log("The score is now " + score);
}

function displayGameResult(resultId){
    // Define an array of text labels for the choices 0, 1, 2;
    var choices = ["Rock", "Paper", "Scissors"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Update the score with a win
        updateScore(0);
        // Display that it was a win
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    } else if (result == -1) {
        // Update the score with a loss
        updateScore(2);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    } else {
        // Update the score with a tie
        updateScore(1);
        // Display that it was a tie
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}

function displayScoreBoard(winsId, lossesId, tiesId){
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[2];
    document.getElementById(tiesId).innerHTML = score[1];
}

function validateform() {
  var q1 = gedropdown-menuName('Female'|'Male');
  var q2 = getRBtnName('Age');
  var q3 = getRBtnName('Water');
  var q4 = getRBtnName('Exercise');
  var q5 = getRBtnName('Sleep');
  var qans = q1+q2+q3+q4+q5;
  if (qans.length == 5) { alert('Missing selection'); return; }
}

fill in




var playerChoice;

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function enterGender(){
    // Here is the game ruleset algorithm
    if (playerChoice == Female) {
        console.log("Female");
        return 0;
    } else if (playerChoice == Male) {
        // Rock beats scissors - a win!
        console.log("Male");
        return 1;
}

function displayGameResult(resultId){
    // Define an array of text labels for the choices 0, 1, 2;
    var choices = ["Rock", "Paper", "Scissors"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Display that it was a win
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    } else if (result == -1) {
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}


var q = survey.getQuestionByName('car');
q.choicesOrder = yourvalue;
survey.render();

Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap";
var survey = new Survey.Model({ questions: [
    { type: "dropdown", name: "car", title: "What car are you driving?", isRequired: true, colCount: 0,
        choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"] }
]});

$("#surveyElement").Survey({model:survey});


// The classic way to set the property. The result values are numbers: 1 and 2
choices: [{ value: 1, text: "Value 1" }, { value: 2, text: "Value 2" }]
// The values are: 1 and 'Value 2' and texts are '1' and 'Value 2'
choices: [{ value: 1 }, { value: "Value 2" }]
// The values and texts are same
choices: ["Value 1", "Value 2"]
// The values are '1' and '2' and texts are 'Value 1' and 'Value 2'
choices: ["1|Value 1", "2|Value 2"]


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<title> q1 Site q2 </title>
<script type="text/javascript">
function getRBtnName(GrpName) {
  var sel = document.getElementsByName(GrpName);
  var fnd = -1;
  var str = '';
  for (var i=0; i<sel.length; i++) {
    if (sel[i].checked == true) { str = sel[i].value;  fnd = i; }
  }
//  return fnd;   // return option index of selection
// comment out next line if option index used in line above
  return str;
}

function validateform() {
  var q1 = getRBtnName('q1');
  var q2 = getRBtnName('q2');
  var q3 = getRBtnName('q3');
  var q4 = getRBtnName('q4');
  var qans = q1+q2+q3+q4;
  if (qans.length < 4) { alert('Missing selection'); return; }

  alert(qans+'.html');  // for testing purposes only
//  document.location.href = qans+'.html';
//  window.open(qans+'.html");
}

/*code will be much longer when fully written for every possibility,
 but I'm trying to make it work on a small scale first
*/
</script>
</head>
<body>
<h1>
q1 Site q2
</h1>
<h2>
Title
</h2>
<p>
Each yes/no answer combination produces a different result.
<p>
<form>
<p><label>Question 1</label>
<br>
<input type="radio" name="q1" value="Y" />Yes
<input type="radio" name="q1" value="N" />No
</p>
<p><label>Question 2</label>
<br>
<input type="radio" name="q2" value="Y" />Yes
<input type="radio" name="q2" value="N" />No
</p>
<p><label>Question 3</label>
<br>
<input type="radio" name="q3" value="Y" />Yes
<input type="radio" name="q3" value="N" />No
</p>
<p><label>Question 4</label>
<br>
<input type="radio" name="q4" value="Y" />Yes
<input type="radio" name="q4" value="N" />No
</p>
<p><input type="button" value="Go" onclick="validateform()"></p>
</form>
</body>



function getGender()
    var gender


function getCoCode(phoneNum) {
    var CoCode;
    try {
        CoCode = between(phoneNum, ")", "-");
        CoCode = CoCode.trim();
        if (CoCode.length == 3 && Number(CoCode)) {
            return CoCode;
        }
        else {
            throw new Error("Invalid cocode: " + CoCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
/**
 * Displays the co code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @return {string} output1Id; Displays the co code to user
 */
function displayCoCode(inputId, output1Id) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var CoCode = getCoCode(phoneNum);
        outputText = "Your co code is " + CoCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(output1Id).innerHTML = outputText;
}

function listFactorials(n) {
    //CONTAINS A BUG!!!
    var x;
    var result = [];
    for (var i = 1; i <= n; i++) {
        x = 1;
        for (var j = i; j > 0; j--) {
            x = x * j;
        }
        result.push(x);
    }
    return result;
}
