var startBtn = document.getElementById("start-btn");
var stopBtn = document.getElementById("stop-btn");

var barStyle = {
  height: "100%",
  transitionProperty: "height",
  transitionDuration: "2s",
};

var elements = document.getElementsByClassName("bar");

startBtn.addEventListener("click", function () {
  for (var i = 0, length = elements.length; i < length; i++) {
    Object.assign(elements[i].style, barStyle);
  }
});

stopBtn.addEventListener("click", function () {
  for (var i = 0, length = elements.length; i < length; i++) {
    elements[i].style.height = "1%";
    elements[i].style.transitionProperty = "height";
    elements[i].style.transitionDuration = "2s";
  }
});

//document.getElementById("myDIV").style.animationIterationCount = "infinite";
