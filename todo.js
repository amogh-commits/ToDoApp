const inputTask = document.getElementById("inputTask");
const ul = document.getElementById("pendingTasks");
const btn = document.getElementById("btn");
const completedTask = document.getElementById("completedTask");
const tasks = [];

btn.addEventListener("click", () => {
    if (tasks.indexOf(inputTask.value) === -1 && inputTask.value !== "") {
        tasks.push(inputTask.value);
        console.log(tasks);
    } else {
        alert("Already Present or Empty");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const taskSpan = document.createElement("span");
    taskSpan.innerText = inputTask.value;
    li.appendChild(taskSpan);

    const tickIcon = document.createElement("i");
    tickIcon.classList.add("fas", "fa-check", "icon");
    tickIcon.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");

        if (taskSpan.classList.contains("completed")) {
            
            const completedLi = document.createElement("li");
            completedLi.innerText = taskSpan.innerText;
            completedLi.classList.add("list-group-item");
            completedTask.appendChild(completedLi);

            const taskText = taskSpan.innerText;
            const taskIndex = tasks.indexOf(taskText);
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
                console.log("After completion:", tasks); 
            }

            li.remove(); 
        }
    });
    li.appendChild(tickIcon);

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash", "icon");
    deleteIcon.addEventListener("click", () => {
        const taskText = taskSpan.innerText;
        const taskIndex = tasks.indexOf(taskText);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
        }
        li.remove();
        console.log(tasks);
    });
    li.appendChild(deleteIcon);

    ul.appendChild(li);
    inputTask.value = "";
});
