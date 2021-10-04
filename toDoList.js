import ToDoListItem from "./toDoListItem.js";

export default class ToDoList {
  constructor() {
    this.containerWrapper = document.querySelector(".container__wrapper");
    this.addNewList = document.querySelector(".btn-add-new-list");
    this.toDoList = document.querySelectorAll(".to-do-list");

    this.init();
    this.createNewList();
  }

  init() {
    if (!this.toDoList.length) return;

    this.toDoList.forEach((item) => {
      this.initToDoList(item);
    });
  }

  initToDoList(item) {
    let countTasksAll = 0;
    let countTasksActive = 0;
    let countTasksCompleted = 0;

    const input = item.querySelector(".input");
    const countAll = item.querySelector(".count-all");
    const countActive = item.querySelector(".count-active");
    const countCompleted = item.querySelector(".count-completed");
    const list = item.querySelector(".list");
    const toDoListItem = new ToDoListItem(list);

    this.containerWrapper.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      if (target && target.classList.contains("publish")) {
        if (input.value != "") {
          toDoListItem.createNewItem(input.value);
          input.value = "";
          countTasksAll += 1;
          countTasksActive += 1;
          countAll.innerHTML = `${countTasksAll}`;
          countActive.innerHTML = `${countTasksActive}`;
        }
      }
      if (target && target.classList.contains("btn-remove-list")) {
        target.parentElement.parentElement.remove();
      }
    });

    this.containerWrapper.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      if (target && target.classList.contains("item-btn")) {
        const run = list.querySelectorAll(".run");
        const stop = list.querySelectorAll(".stop");
        const del = list.querySelectorAll(".del");
        run.forEach((item) => {
          if (target == item) {
            countTasksActive += 1;
            countActive.innerHTML = `${countTasksActive}`;
            countTasksCompleted -= 1;
            countCompleted.innerHTML = `${countTasksCompleted}`;
          }
        });
        stop.forEach((item) => {
          if (target == item) {
            countTasksActive -= 1;
            countActive.innerHTML = `${countTasksActive}`;
            countTasksCompleted += 1;
            countCompleted.innerHTML = `${countTasksCompleted}`;
          }
        });
        del.forEach((item) => {
          if (target == item) {
            if (!item.parentElement.classList.contains("line-through")) {
              countTasksActive -= 1;
              countActive.innerHTML = `${countTasksActive}`;
            } else {
              countTasksCompleted -= 1;
              countCompleted.innerHTML = `${countTasksCompleted}`;
            }
            toDoListItem.delItem(item);
            countTasksAll -= 1;
            countAll.innerHTML = `${countTasksAll}`;
          }
        });
      }
    });
  }

  createNewList() {
    this.addNewList.addEventListener("click", () => {
      this.containerWrapper.insertAdjacentHTML(
        "beforeend",
        `
        <div class="to-do-list">
          <div class="to-do-list__header">
            <h1 class="title">To Do List</h1>
            <button class="btn-remove-list" type="button">Remove This List</button>
          </div>
          <from class="form">
              <input class="input" type="text" placeholder="Enter to do item">
              <button class="button publish" type="button">Publish</button>
          </from>
          <ol class="list"></ol>
          <div class="count-block">
            <p>Total number of tasks: <span class="count-all">0</span></p>
            <p>Active tasks: <span class="count-active">0</span></p>
            <p>Completed tasks: <span class="count-completed">0</span></p>
          </div>
        </div>
        `
      );
      const toDoList = document.querySelectorAll(".to-do-list");
      this.initToDoList(toDoList[toDoList.length - 1]);
    });
  }
}
