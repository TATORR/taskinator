var buttonEL=document.querySelector("#save-task"); console.log(buttonEL);
var taskstodoEL=document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };
  
  buttonEl.addEventListener("click", createTaskHandler);