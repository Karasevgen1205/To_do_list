import ToDoListItem from "./toDoListItem.js";

export default class ToDoList {
  constructor() {
    this.container = document.querySelector(".container");
    this.addNewList = document.querySelector(".btn-add-new-list");

    this.init();
    this.createNewList();
  }

  init() {
    this.toDoList = document.querySelectorAll(".to-do-list");

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
    const removeBtn = item.querySelector(".btn-remove-list");
    const toDoListItem = new ToDoListItem(list);

    this.container.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      if (target && target.classList.contains("publish")) {
        if (input.value != "") {
          toDoListItem.createNewItem(input.value);
          input.value = "";
          countToDo += 1;
          count.innerHTML = `${countToDo}`;
        }
      }
      if (target && target.classList.contains("btn-remove-list")) {
        target.parentElement.parentElement.remove();
      }
    });

    this.container.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      if (target && target.classList.contains("item-btn")) {
        const run = list.querySelectorAll(".run");
        const stop = list.querySelectorAll(".stop");
        const del = list.querySelectorAll(".del");
        run.forEach((item) => {
          if (target == item) {
            countToDo += 1;
            count.innerHTML = `${countToDo}`;
          }
        });
        stop.forEach((item) => {
          if (target == item) {
            countToDo -= 1;
            count.innerHTML = `${countToDo}`;
          }
        });
        del.forEach((item) => {
          if (target == item) {
            if (!item.parentElement.classList.contains("line-through")) {
              countToDo -= 1;
              count.innerHTML = `${countToDo}`;
            }
            toDoListItem.delItem(item);
          }
        });
      }
    });
  }

  createNewList() {
    this.addNewList.addEventListener("click", () => {
      this.container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="to-do-list">
          <div class="to-do-list__header">
            <h1 class="title">To Do List</h1>
            <button class="btn-remove-list" type="button">Remove List</button>
          </div>
          <from class="form">
              <input class="input" type="text" placeholder="Enter to do item">
              <button class="button publish" type="button">Publish</button>
          </from>
          <ol class="list"></ol>
          <p>Count: <span class="count">0</span></p>
        </div>
        `
      );
      this.init();
    });
  }
}
