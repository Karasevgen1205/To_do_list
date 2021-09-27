export default class ToDoListItem {
  constructor(list) {
    this.list = list;
    this.init();
  }
  init() {
    this.lineThrough();
  }

  createNewItem(text) {
    this.list.innerHTML += `<li class="item">${text}<button class="close" type="button"></button></li>`;
  }

  lineThrough() {
    this.list.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      if (target && target.classList.contains("close")) {
        const close = this.list.querySelectorAll(".close");
        close.forEach((item) => {
          if (target == item) {
            item.parentElement.classList.toggle("line-through");
            item.classList.toggle("open");
          }
        });
      }
    });
  }
}
