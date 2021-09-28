import ToDoListItem from "./toDoListItem.js";

export default class ToDoList {
  constructor() {
    this.toDoList = document.querySelectorAll(".to-do-list");

    this.init();
  }

  init() {
    if (!this.toDoList.length) return;

    this.toDoList.forEach((item) => {
      this.initToDoList(item);
    });
  }

  initToDoList(item) {
    let countToDo = 0;

    const input = item.querySelector(".input");
    const btn = item.querySelector(".button");
    const count = item.querySelector(".count");
    const list = item.querySelector(".list");
    const toDoListItem = new ToDoListItem(list);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (input.value != "") {
        toDoListItem.createNewItem(input.value);
        input.value = "";
        // this.viewCount(1, count, countToDo);
        countToDo += 1;
        count.innerHTML = `${countToDo}`;
        console.log(countToDo);
      }
    });
    this.changeCount(list, countToDo, count);
  }

  viewCount(number, count, countToDo) {
    countToDo += number;
    count.innerHTML = `${countToDo}`;
  }

  changeCount(list, countToDo, count) {
    list.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      if (target && target.classList.contains("item-btn")) {
        const run = list.querySelectorAll(".run");
        const stop = list.querySelectorAll(".stop");
        run.forEach((item) => {
          if (target == item) {
            // this.viewCount(1, countToDo, count);
            countToDo += 1;
            // count.innerHTML = `${countToDo}`;
            // console.log(1);
            console.log(countToDo);
          }
        });
        stop.forEach((item) => {
          if (target == item) {
            // this.viewCount(-1, countToDo, count);
            countToDo -= 1;
            // count.innerHTML = `${countToDo}`;
            // console.log(-1);
            console.log(countToDo);
          }
        });
      }
    });
  }
}
