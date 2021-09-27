import ToDoList from "./toDoList.js";

document.addEventListener("DOMContentLoaded", async () => {
  window.refs = {
    toDoList: {
      init: () => new ToDoList(),
      selectors: [".to-do-list"],
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
