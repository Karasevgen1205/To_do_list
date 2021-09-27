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
    this.countToDo = 0;
    this.input = item.querySelector(".input");
    this.btn = item.querySelector(".button");
    this.count = item.querySelector(".count");
    this.list = item.querySelector(".list");
    this.toDoListItem = new ToDoListItem(this.list);

    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.input.value != "") {
        this.toDoListItem.createNewItem(this.input.value);
        this.input.value = "";
        this.viewCount();
      }
    });
    this.changeCount();
  }

  viewCount(number = 1) {
    this.countToDo += number;
    this.count.innerHTML = `${this.countToDo}`;
  }

  changeCount() {
    this.list.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      if (target && target.classList.contains("close")) {
        const close = this.list.querySelectorAll(".close");
        const open = this.list.querySelectorAll(".open");
        close.forEach((item) => {
          if (target == item) {
            this.viewCount(1);
          }
        });
        open.forEach((item) => {
          if (target == item) {
            this.viewCount(-2);
          }
        });
      }
    });
  }
}
