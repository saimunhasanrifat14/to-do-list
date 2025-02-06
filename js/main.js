let add = document.querySelector("#push");
let input = document.querySelector("#newtask input");
let tasks = document.querySelector("#tasks");

add.addEventListener("click", () => {
  if (input.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    let div = document.createElement("div");
    div.className = "task";
    let span = document.createElement("span");
    div.id = "taskname";
    let button = document.createElement("button");
    button.className = "delete";
    let i = document.createElement("i");
    i.className = "fa-solid fa-trash";
    span.innerHTML = input.value;
    div.appendChild(span);
    tasks.appendChild(div);
    div.appendChild(button);
    button.appendChild(i);
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    let Alltasks = document.querySelectorAll(".task");
    for (let i = 0; i < Alltasks.length; i++) {
      Alltasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    input.value = "";
  }
});
