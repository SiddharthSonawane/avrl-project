var startBtn = document.getElementById("start-btn");
var stopBtn = document.getElementById("stop-btn");

var elements = document.getElementsByClassName("bar");

startBtn.addEventListener("click", function () {
  for (var i = 0, length = elements.length; i < length; i++) {
    elements[i].style.animation = "equalize 7s 0s infinite";
    elements[0].style.animationDelay = "-1.3s";
    elements[1].style.animationDelay = "-2s";
    elements[2].style.animationDelay = "-5.3s";
    elements[3].style.animationDelay = "-2.4s";
    elements[4].style.animationDelay = "-3s";
  }
});

stopBtn.addEventListener("click", function () {
  for (var i = 0, length = elements.length; i < length; i++) {
    elements[i].style.animationPlayState = "paused";
  }
});
