document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll(".square");
  const timeLeft = document.getElementById("time-left");
  const score = document.getElementById("score");
  const button = document.querySelector(".start-button");

  let result = 0;
  let hitPosition;
  let currentTime = 30;
  let countDownTimeID;

  function randomSquare() {
    squares.forEach((square) => {
      square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");
    hitPosition = randomSquare.id;
  }

  squares.forEach((square) => {
    square.addEventListener("click", () => {
      if (square.id === hitPosition) {
        result++;
        score.textContent = result;
        hitPosition = null;
      }
    });
  });

  function moveMole() {
    countDownTimeID = setInterval(randomSquare, 1000);
  }

  button.addEventListener("click", () => {
    moveMole();
    button.disabled = true;
    startTimer(); // Start the timer when the button is clicked
  });

  function startTimer() {
    countDownTimeID = setInterval(countDown, 1000);
  }

  function countDown() {
    if (currentTime > 0) {
      currentTime--;
      timeLeft.textContent = currentTime;
    } else {
      clearInterval(countDownTimeID);
      alert("Game Over! Your final Score is " + result);
      button.disabled = false;
      resetGame();
    }
  }

  function resetGame() {
    result = 0;
    currentTime = 30;
    score.textContent = result;
    timeLeft.textContent = currentTime;
  }
});
