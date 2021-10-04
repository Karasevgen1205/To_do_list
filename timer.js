export default class Timer {
  constructor() {
    this.timer = document.querySelectorAll(".timer")
    this.init();
  }

  init() {
    if (!this.timer.length) return;

    this.timer.forEach((item) => {
      this.initTimer(item);
    }); 
  }
  initTimer(item) {
    const deadLine = "2022-1-1";

    function getTimeRemaining(endtime){
        
      let total = Date.parse(endtime) - Date.parse(new Date());
      let day = Math.floor(total / (1000 * 60 * 60 * 24));
      let hour = Math.floor(total / (1000 * 60 * 60) % 24);
      let minute = Math.floor(total / (1000 * 60) % 60);
      let second = Math.floor((total / 1000) % 60)

      return {
        total,
        day, 
        hour, 
        minute, 
        second
      }
    }

    function addZero(num) {
        if(num >= 0 && num < 10) {
            return "0" + num
        } else {
            return num
        }
    }

    function setClock(timer, endtime) {
        const dayEl = timer.querySelector("#day");
        const hoursEl = timer.querySelector("#hour");
        const minuteEl = timer.querySelector("#minute");
        const secondEl = timer.querySelector("#second");
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            dayEl.innerHTML = addZero(t.day)
            hoursEl.innerHTML = addZero(t.hour);
            minuteEl.innerHTML = addZero(t.minute);
            secondEl.innerHTML = addZero(t.second);

            if(t.total <= 0) {
            clearInterval(timeInterval)
            }
        }
    }
    setClock(item, deadLine);
  }
}