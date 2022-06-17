let startDiv = document.querySelector('.button')
let stopDiv = document.querySelector('.button-2')
let start = document.querySelector('.button .start')
let stopBtn = document.querySelector('.button-2 .stop')
let reset1 = document.querySelector('.button .reset')
let reset2 = document.querySelector('.button-2 .reset')
let min =sec = ms = "0"+ 0,
  startTimer;

  start.addEventListener('click',startEvent)
  stopBtn.addEventListener('click',stopEvent)
  reset1.addEventListener('click',resetEvent)
  reset2.addEventListener('click',resetEvent)

function startEvent () {
  startDiv.removeAttribute('id','active')
  stopDiv.setAttribute('id','active')

  startTimer = setInterval(()=>{
    ms++
    ms = ms < 10 ? "0"+ ms : ms ;
    if(ms == 100) {
      sec++
      sec = sec < 10 ? "0"+ sec : sec ;
      ms = "0"+0
    }
    if(sec == 60){
      min++
      sec = "0"+0
    }

    changingTime()
  },10)
}

function stopEvent ()  {
  stopDiv.removeAttribute('id','active')
  startDiv.setAttribute('id','active')
  clearInterval(startTimer)
}

function resetEvent (){
  stopDiv.removeAttribute('id','active')
  startDiv.setAttribute('id','active')
  clearInterval(startTimer)
   min = sec =ms = "0" + 0
   changingTime()
}

function changingTime() {
  document.querySelector('.mil').innerText = ms;
  document.querySelector('.sec').innerText = sec
  document.querySelector('.min').innerText = min
}