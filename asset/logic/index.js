var currentDate = document.querySelector("#currentDay");
var timeBlock = $(".time");
var currentHour = moment().format("H");

var secureDate = function () {
  currentDate.textContent = moment().format("dddd, MMMM Do YYYY, h:mm");
};
setInterval(secureDate, 1000);

var excuteTask = function () {
  var texNine = localStorage.getItem(9);
  var textTen = localStorage.getItem(10);
  var textEleven = localStorage.getItem(11);
  var textTwelve = localStorage.getItem(12);
  var textThirteen = localStorage.getItem(13);
  var textFourteen = localStorage.getItem(14);
  var textFifteen = localStorage.getItem(15);
  var textSixteen = localStorage.getItem(16);
  var textSeventeen = localStorage.getItem(17);