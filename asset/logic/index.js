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
  
  $("#9").val(texNine);
  $("#10").val(textTen);
  $("#11").val(textEleven);
  $("#12").val(textTwelve);
  $("#13").val(textThirteen);
  $("#14").val(textFourteen);
  $("#15").val(textFifteen);
  $("#16").val(textSixteen);
  $("#17").val(textSeventeen);

  $(".detail").each(function (i) {
    var hour = i + 9;

    if (hour < currentHour) {
      $(this).addClass("past");
    }
    if (hour == currentHour) {
      $(this).addClass("present");
    }
    if (hour > currentHour) {
      $(this).addClass("future");
    }
  });
};

$(".row").on("click", ".saveBtn", function () {
  var tasktext = $(this).parent().find(".detail").val().trim();
  var time = $(this).parent().find(".detail").attr("id");
  localStorage.setItem(time, tasktext);
});

excuteTask();
