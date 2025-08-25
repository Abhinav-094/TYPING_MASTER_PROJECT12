var u_text;
var ipdata;
var words;
var count = 0;
var interval;
function startbtn() 
{
  document.getElementById("u_text").disabled = false;

  ipdata = parseInt(document.getElementById("input").value);

  var str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
  words = "";

  for (var i = 0; i < ipdata; i++) 
  {
    var ab = str.charAt(Math.floor(Math.random() * str.length));
    words += ab;
  }

  var RANDOM_PRINT = document.getElementById("r_text");
  RANDOM_PRINT.innerHTML = "";

  for (var i = 0; i < words.length; i++) {
    RANDOM_PRINT.innerHTML += "<span>" + words[i] + "</span>";
  }

  // var count = 0;
  interval = setInterval(function () 
  {
    count++;
    document.getElementById("timer").innerText = count + " sec";

    if (count == 60) {
      clearInterval(interval);
      alert("Time's up! 60 seconds completed!");
    }
  }, 1000);
}

function Submitbtn() {
  clearInterval(interval);
  document.getElementById("time_show").style.display = "block";
  document.getElementById("second").innerText = " TOTAL SECONDS :- " + count + " sec ";
  var typedText = document.getElementById("u_text").value;
  var totalChars = typedText.length;

  var timeInMinutes = count / 60;
  var wpm = totalChars / 5 / timeInMinutes;
  document.getElementById("speed").innerText = " TYPING SPEED :- " + wpm + " WPM";
}

function user_textarea() {
  var INPUT_VALUE = document.getElementById("u_text").value;
  if (INPUT_VALUE == "") 
{
    document.getElementById("submit_btn").disabled = true;
    document.getElementById("r_text").innerHTML="";
} 
else 
{
    document.getElementById("submit_btn").disabled = false;
}
}

function check_value() {
  var CHECK_VALUE = document.getElementById("input").value;
  if (CHECK_VALUE == "") {
    document.getElementById("start_btn").disabled = true;
    document.getElementById("r_text").innerHTML = "";

  } else if (CHECK_VALUE == 0) {
    document.getElementById("start_btn").disabled = true;
  } else {
    document.getElementById("start_btn").disabled = false;
  }
}

function r_input() 
{
  var USER_INPUT = document.getElementById("u_text").value;
  var spans = document.querySelectorAll("#r_text span");
  var greenCount = 0;
  var redCount = 0;
  for (var i = 0; i < Math.min(USER_INPUT.length, words.length); i++) {
    if (USER_INPUT[i] == words[i]) 
    {
      spans[i].style.color = "green";
      greenCount++;
    } else {
      spans[i].style.color = "red";
      redCount++;
    }
  }
  document.getElementById("green_msg_show").innerText = "TOTAL CORRECT WORD IS -  :- "+ greenCount;
  document.getElementById("red_msg_show").innerText = "TOTAL WRONG WORD  IS :- "+redCount;

}
