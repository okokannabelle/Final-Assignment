//Button at the bottom saying 'Take this survery' and then a popup comes up with a survey. Asking name, age, and concert questions
function Survey() {
  var name = prompt("Name", "First Name and Last Name");
  var age = prompt("Age", "Enter Age");
  var question1 = prompt("Who is your favourite artist or band?", "Your Answer")
  var question2 = prompt("How many concerts have you been too?", "Your Answer")
  var question3 = prompt("What is your favourite concert memory?", "Your Answer")
  document.getElementById("answer").innerHTML =  name + " <br/> " + age + " <br/> " + question1 + " <br/> " + question2 + " <br/> " + question3 + " <br/> ";
}
