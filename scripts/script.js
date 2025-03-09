document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  });
});

//Реализация таймера
const timerElement = document.getElementById("timer");
let totalSeconds = 600;

function updateTimer() {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  seconds = ('0' + seconds).slice(-2);       
  minutes = ('0' + minutes).slice(-2);     
  hours = ('0' + hours).slice(-2);   

  timerElement.textContent = `${hours}:${minutes}:${seconds}`;

  if (totalSeconds > 0) {
      totalSeconds--; 
  } else {
      totalSeconds = 600; 
  }

  setTimeout(updateTimer, 1000);
}

updateTimer();

