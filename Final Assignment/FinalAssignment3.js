var start = new Date();

var todayTime = start.getTime();

function stopTime() {

var finish = new Date();
var todaySeconds = finish.getTime();
var time = (todaySeconds - todayTime) / 1000;

var myAlert = alert("You have been on this page for:" + time + "seconds");
console.log(myAlert);

}
