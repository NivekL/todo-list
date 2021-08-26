// Selectors
let taskInput = document.querySelector("#addTask");
let taskSubmit = document.querySelector(".submit-task");
let todoList = document.querySelector(".todo-list");
let completedList = document.querySelector(".completed-list");
let emptyInputFieldCheck = document.querySelector(".error-message-container .error-message");

// Event listeners
taskSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    let whitespace = taskInput.value.trim();

    // Checker for empty field when first creating a task
    if(whitespace === "") {
        emptyInputFieldCheck.innerText = "Du måste fylla i en syssla";
        emptyInputFieldCheck.style.display = "block";
    } else {  // Until field has a task nothing will happen
        emptyInputFieldCheck.style.display = "none";
        // Task list-item
        let newTaskItem = document.createElement("li");
        newTaskItem.setAttribute("class", "todo-item");

        // Task input creation
        let newTask = document.createElement("input");
        newTask.setAttribute("type", "text");
        newTask.setAttribute("class", "new-task");
        newTask.setAttribute("value", `${taskInput.value}`);
        newTask.setAttribute("disabled", "true");
        newTask.innerText = taskInput.value;

        // Task edit creation
        let editTask = document.createElement("button");
        editTask.setAttribute("type", "submit");
        editTask.setAttribute("class", "edit-task");
        editTask.innerText = "Redigera";
        // Edit task event
        editTask.addEventListener("click", todo.modifyTask);

        // Task delete creation
        let deleteTask = document.createElement("button");
        deleteTask.setAttribute("type", "submit");
        deleteTask.setAttribute("class", "delete-task");
        deleteTask.innerText = "Radera";
        deleteTask.addEventListener("click", todo.removeTask);

        // Task completed creation
        let completeTask = document.createElement("button");
        completeTask.setAttribute("type", "submit");
        completeTask.setAttribute("class", "complete-task");
        completeTask.innerText = "Färdig";
        completeTask.addEventListener("click", todo.finishTask);

        // Append all parts of the task and the task itself
        newTaskItem.appendChild(newTask);
        newTaskItem.appendChild(editTask);
        newTaskItem.appendChild(deleteTask);
        newTaskItem.appendChild(completeTask);
        todoList.appendChild(newTaskItem);
        taskInput.value = "";
    console.log(newTask);

    }
});

class Todo {
    modifyTask = function() {
        let newTask = this.parentNode.firstChild;

        if(newTask.value.trim() === "") {
            emptyInputFieldCheck.innerText = "Du kan inte spara ett tomt fält";
            emptyInputFieldCheck.style.display = "block";
        } else {
            if(newTask.hasAttribute("disabled")) {
                this.innerText = "Spara";
                newTask.removeAttribute("disabled");
            } else {
                this.innerText = "Redigera";
                newTask.setAttribute("disabled", "true");
                newTask.setAttribute("value", `${newTask.value}`);
                newTask.innerText = newTask.value;
                emptyInputFieldCheck.style.display = "none";
            }
        }
    };
    
    removeTask = function() {
        this.parentNode.remove();
    }
    
    finishTask = function() {
        let newTaskItem = this.parentNode;
        completedList.append(newTaskItem);
        this.remove();
    }
}

let todo = new Todo();
