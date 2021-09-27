import ToDoListItem from "./toDoListItem.js";

export default class ToDoList {
  constructor() {
    this.countToDo = 0;
    this.input = document.querySelector(".input");
    this.btn = document.querySelector(".button");
    this.list = document.querySelector(".list");
    this.count = document.querySelector(".count");
    this.click();
  }

  click = () => {
    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.input.value != "") {
        const toDoListItem = new ToDoListItem();
        this.viewCount();
        this.allCount();
      }
    });
  };
  viewCount = (number = 1) => {
    this.countToDo += number;
    this.count.innerHTML = `Count: ${this.countToDo}`;
  };

  allCount = () => {
    this.list.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      if (target && target.classList.contains("close")) {
        const close = this.list.querySelectorAll(".close");
        const open = this.list.querySelectorAll(".open");
        close.forEach((item) => {
          if (target == item) {
            item.parentElement.classList.toggle("line-through");
            item.classList.toggle("open");
            this.viewCount(-1);
          }
        });
        open.forEach((item) => {
          if (target == item) {
            this.viewCount(2);
          }
        });
      }
    });
  };
}
