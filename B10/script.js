const duration = 20; // Set countdown duration here (in seconds)
let timeLeft = duration;
const countdownElement = document.getElementById('time');
const progressCircle = document.getElementById('progress');
const circumference = 2 * Math.PI * 50; // circumference of the circle (2πr)

progressCircle.style.strokeDasharray = circumference;
progressCircle.style.strokeDashoffset = 0;

function updateCountdown() {
  countdownElement.textContent = timeLeft;
  const offset = (timeLeft / duration) * circumference;
  progressCircle.style.strokeDashoffset = circumference - offset;

  // Change color based on remaining time
  if (timeLeft <= 5) {
    progressCircle.style.stroke = 'red';
  } else if (timeLeft <= 10) {
    progressCircle.style.stroke = 'orange';
  } else {
    progressCircle.style.stroke = 'green';
  }

  // Decrement time and stop at zero
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    clearInterval(timerInterval);
  }
}

const timerInterval = setInterval(updateCountdown, 1000);
