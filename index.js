import ToDoList from "./toDoList.js";
import Timer from "./timer.js";

document.addEventListener("DOMContentLoaded", async () => {
  window.refs = {
    toDoList: {
      init: () => new ToDoList(),
      selectors: [".to-do-list"],
    },
    timer: {
      init: () => new Timer(),
      selectors: [".timer"],
    },
  };

  Object.keys(window.refs).forEach((ref) => {
    if (
      window.refs[ref].hasOwnProperty("init") &&
      window.refs[ref].selectors.join(",").length > 0
    ) {
      window.refs[ref].class = window.refs[ref].init();
    }
  });
});

// const deadLine = "2022-1-1";

// function getTimeRemaining(endtime){
//   let t = Date.parse(endtime) - Date.parse(new Date());
//   let day = Math.floor(t / (1000 * 60 * 60 * 24));
//   let hour = Math.floor(t / (1000 * 60 * 60) % 24);
//   let minute = Math.floor(t / (1000 * 60) % 60);
//   let second = Math.floor((t / 1000) % 60)

//   return {
//     t,
//     day, 
//     hour, 
//     minute, 
//     second
//   }
// }

// function addZero(num) {
//   if(num >= 0 && num < 10) {
//     return "0" + num
//   } else {
//     return num
//   }
// }

// function setClock(selector, endtime) {

//   const timer = document.querySelector(selector);
//   const dayEl = timer.querySelector("#day");
//   const hoursEl = timer.querySelector("#hour");
//   const minuteEl = timer.querySelector("#minute");
//   const secondEl = timer.querySelector("#second");
//   const timeInterval = setInterval(updateClock, 1000);

//   updateClock();

//   function updateClock() {
//     const t = getTimeRemaining(endtime);
//     dayEl.innerHTML = addZero(t.day)
//     hoursEl.innerHTML = addZero(t.hour);
//     minuteEl.innerHTML = addZero(t.minute);
//     secondEl.innerHTML = addZero(t.second);

//     if(t.t <= 0) {
//       clearInterval(timeInterval)
//     }
//   }
// }
// setClock(".timer", deadLine);