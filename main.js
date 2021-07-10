const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#increase");

let count = 0;
document.getElementById("numdisplay").innerHTML = count;

decreaseBtn.addEventListener("click", function () {
  count--;
  document.getElementById("numdisplay").innerHTML = count;

  if (count > 0) {
    document.getElementById("numdisplay").style.color = "green";
  } else if (count < 0) {
    document.getElementById("numdisplay").style.color = "red";
  } else {
    document.getElementById("numdisplay").style.color = "black";
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  document.getElementById("numdisplay").innerHTML = count;

  if (count === 0) {
    document.getElementById("numdisplay").style.color = "black";
  }
});

increaseBtn.addEventListener("click", function () {
  count++;
  document.getElementById("numdisplay").innerHTML = count;

  if (count > 0) {
    document.getElementById("numdisplay").style.color = "green";
  } else if (count < 0) {
    document.getElementById("numdisplay").style.color = "red";
  } else {
    document.getElementById("numdisplay").style.color = "black";
  }
});
