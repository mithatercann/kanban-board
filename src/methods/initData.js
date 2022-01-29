import createElement from "./createElement.js";

const initData = () => {
  const todoBoard = document.querySelector(".todo .inner");
  const inProgressBoard = document.querySelector(".in-progress .inner");
  const doneBoard = document.querySelector(".done .inner");

  const localStorageData = JSON.parse(localStorage.getItem("data"));

  if (localStorageData) {
    localStorageData.forEach((task) => {
      const taskElement = createElement("task-component", {
        uid: task.uid,
        heading: task.heading,
        description: task.description,
        priority: task.priority,
        avatar: task.avatar,
        "account-name": task.accountName,
        "account-url": task.accountUrl,
        status: task.status,
      });

      switch (task.status) {
        case "todo":
          todoBoard.appendChild(taskElement);
          break;
        case "in-progress":
          inProgressBoard.appendChild(taskElement);
          break;
        case "done":
          doneBoard.appendChild(taskElement);
          break;
      }
    });
  }
};

export default initData;
