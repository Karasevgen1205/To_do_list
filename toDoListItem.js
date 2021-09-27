export default class ToDoListItem {
  constructor() {
    this.list = document.querySelector(".list");
    this.input = document.querySelector(".input");
    this.createItem();
  }
  createItem = () => {
    this.list.innerHTML += `<li class="item">${this.input.value}<button class="close" type="button"></button></li>`;
    this.input.value = "";
  };
}
