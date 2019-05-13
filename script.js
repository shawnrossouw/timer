const clock = document.querySelector('.clock');
  let min = document.querySelector('.clock-minutes');
  let sec = document.querySelector('.clock-seconds');
  let minutes = 0;
  let seconds = 0;
  let running;
  let runClock = false;

  function start(){
    runClock = true;
    running = setInterval(function(){
      seconds++;
          if(seconds < 60){
            if(seconds <= 9){
              sec.innerHTML = '0' + seconds;
            }else{
              sec.innerHTML = seconds;
            }
          }
          if(seconds >= 60){
            minutes++;
            if(minutes <= 9){
              min.innerHTML = '0' + seconds;
            }else{
              min.innerHTML = seconds;
            }
            seconds = 00;
            sec.innerHTML = "0" + 0;
            min.innerHTML = '0' + minutes;
          }
    },1000);
  }

  function reset(){
    runClock = false;
    clearInterval(running);
    seconds = 0;
    minutes = 0;
    sec.innerHTML = '0' + seconds;
    min.innerHTML = '0' + minutes;
  }

  clock.addEventListener('click', function(){
    if(!runClock){
      runClock = true;
      start();
    }else{
      runClock = false;
      reset();
    }
  });
  