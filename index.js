var startBtn = document.getElementById("start-btn");
var stopBtn = document.getElementById("stop-btn");

var elements = document.getElementsByClassName("bar");

startBtn.addEventListener("click", function () {
  for (var i = 0, length = elements.length; i < length; i++) {
    elements[i].style.animation = "equalize 10s 0s infinite";
    elements[0].style.animationDelay = "-1.9s";
    elements[1].style.animationDelay = "-2s";
    elements[2].style.animationDelay = "-2.3s";
    elements[3].style.animationDelay = "-2.4s";
    elements[4].style.animationDelay = "-2.1s";
    elements[0].style.transform = "translate(0,0)";
  }
});

stopBtn.addEventListener("click", function () {
  for (var i = 0, length = elements.length; i < length; i++) {
    elements[i].style.animationPlayState = "paused";
  }
});
