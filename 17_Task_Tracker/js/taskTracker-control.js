//----------------------------------------------//
//                   VARIABLES                  //
//----------------------------------------------//

let tasks = [];

//----------------------------------------------//
//                     DOM                      //
//----------------------------------------------//

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

//----------------------------------------------//
//                   FUNCIONES                  //
//----------------------------------------------//

function makeId() {
    return Date.now().toString() + Math.random().toString(16).slice(2);
}

function renderTasks() {
    list.textContent = "";
    if (tasks.length === 0) {
        const empty = document.createElement("div");
        empty.className = "task";
        empty.innerHTML = '<span class="taskText">No tasks yet</span>';
        list.append(empty);
        return;
    }

    const ordered = [...tasks].sort((a, b) => Number(a.completed) - Number(b.completed));

    ordered.forEach(t => {
        const item = document.createElement("div");
        item.className = "task" + (t.completed ? " completed" : "");
        item.dataset.id = t.id;

        const checkBtn = document.createElement("button");
        checkBtn.type = "button";
        checkBtn.className = "checkBtn";
        checkBtn.innerHTML = '<img src="img/check.svg" class="checkImg" alt="Check">';

        const text = document.createElement("span");
        text.className = "taskText";
        text.textContent = t.description;

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "deleteBtn";
        deleteBtn.innerHTML = '<img src="img/trash.svg" alt="Check">';

        item.append(checkBtn, text, deleteBtn);
        list.append(item);
    });
}

function addTask(description) {
    const task = { id: makeId(), description, completed: false };
    tasks.push(task);
    renderTasks();
}

function toggleTask(id) {
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return;
    tasks[idx].completed = !tasks[idx].completed;
    renderTasks();
}

function deleteTask(id) {
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return;
    tasks.splice(idx, 1);
    renderTasks();
}

//----------------------------------------------//
//                    EVENTOS                   //
//----------------------------------------------//

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const desc = input.value.trim();
    if (!desc) return;
    addTask(desc);
    form.reset();
    input.focus();
})

list.addEventListener("click", (e) => {
    const taskEl = e.target.closest(".task");
    if (!taskEl) return;
    const id = taskEl.dataset.id;

    if (e.target.closest(".checkBtn")) {
        toggleTask(id);
    } else if (e.target.closest(".deleteBtn")) {
        deleteTask(id);
    }
})

//----------------------------------------------//
//                    INICIO                    //
//----------------------------------------------//

renderTasks();