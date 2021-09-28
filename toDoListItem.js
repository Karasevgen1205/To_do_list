export default class ToDoListItem {
  constructor(list) {
    this.list = list;
    this.init();
  }
  init() {
    this.lineThrough();
  }

  createNewItem(text) {
    this.list.innerHTML += `<li class="item">${text}<button class="item-btn run" type="button"></button></li>`;
  }

  lineThrough() {
    this.list.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      if (target && target.classList.contains("item-btn")) {
        const run = this.list.querySelectorAll(".run");
        const stop = this.list.querySelectorAll(".stop");
        run.forEach((item) => {
          if (target == item) {
            item.parentElement.classList.toggle("line-through");
            item.classList.remove("run");
            item.classList.add("stop");
          }
        });
        stop.forEach((item) => {
          if (target == item) {
            item.parentElement.classList.toggle("line-through");
            item.classList.remove("stop");
            item.classList.add("run");
          }
        });
      }
    });
  }
}
