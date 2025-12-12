// ---------- state ----------
let tasksdata = {};
const todo = document.querySelector('#to-do');
const progress = document.querySelector('#Progress');
const done = document.querySelector('#done');
// array name 'columns' to avoid shadowing
const columns = [todo, progress, done];

let dragElement = null;

// ---------- helper: attach events for each task element ----------
function attachTaskEvents(taskEl) {
    // set draggable attribute (if not set)
    taskEl.setAttribute("draggable", "true");

    // use dragstart (not 'drag') to mark the dragged element
    taskEl.addEventListener("dragstart", (e) => {
        dragElement = taskEl;
        // optional: e.dataTransfer.setData('text/plain', ''); // for some browsers
    });

    taskEl.addEventListener("dragend", () => {
        dragElement = null;
    });

    // delete button (if exists)
    const deleteBtn = taskEl.querySelector(".delete-btn");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
            const parentCol = taskEl.parentElement;
            if (parentCol) parentCol.removeChild(taskEl);
            saveAndUpdateCounts();
        });
    }
}

// ---------- helper: save to localStorage and update counts ----------
function saveAndUpdateCounts(){
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");
        if (count) count.innerHTML = tasks.length;

        tasksdata[col.id] = Array.from(tasks).map(t => ({
            title: t.querySelector("h2") ? t.querySelector("h2").innerText : "",
            desc: t.querySelector("p") ? t.querySelector("p").innerText : ""
        }));
    });
    localStorage.setItem("tasks", JSON.stringify(tasksdata));
}

// ---------- load existing saved tasks ----------
if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));
    console.log("loaded tasks:", data);

    for (const colId in data) {
        const colEl = document.querySelector(`#${colId}`);
        if (!colEl) continue;
        data[colId].forEach(task => {
            const div = document.createElement("div");
            div.classList.add("task");
            div.innerHTML = `
                <h2>${task.title}</h2>
                <p>${task.desc}</p>
                <button class="delete-btn">Delete</button>
            `;
            colEl.appendChild(div);
            attachTaskEvents(div);
        });
    }
    // update counts after loading
    saveAndUpdateCounts();
}

// ---------- attach dragstart to any pre-existing .task if present in HTML ----------
document.querySelectorAll(".task").forEach(t => attachTaskEvents(t));

// ---------- Add drag/drop listeners to each column ----------
function addDragEventonColumn(colEl){
    colEl.addEventListener("dragenter", (e) => {
        e.preventDefault();
        colEl.classList.add("hover-over");
    });
    colEl.addEventListener("dragleave", (e) => {
        e.preventDefault();
        colEl.classList.remove("hover-over");
    });
    colEl.addEventListener("dragover", (e) => {
        e.preventDefault(); // necessary to allow drop
    });
    colEl.addEventListener("drop", (e) => {
        e.preventDefault();
        if (!dragElement) return; // safety
        colEl.appendChild(dragElement);
        colEl.classList.remove("hover-over");
        saveAndUpdateCounts(); // save state and update counts after drop
    });
}
columns.forEach(col => addDragEventonColumn(col));

// ---------- modal & add-task logic ----------
const toggleModalButton = document.querySelector("#toggle-modal");
const modalbg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const addTaskbutton = document.querySelector("#add-new-task");

toggleModalButton.addEventListener("click", ()=> modal.classList.toggle("active"));
modalbg.addEventListener("click", ()=> modal.classList.remove("active"));

addTaskbutton.addEventListener("click", ()=> {
    const taskTitle = document.querySelector("#task-title-input").value.trim();
    const taskdescr = document.querySelector("#task-descr-input").value.trim();
    if (!taskTitle) {
        alert("Please enter a title");
        return;
    }

    const div = document.createElement("div");
    div.classList.add("task");
    div.innerHTML = `
        <h2>${taskTitle}</h2>
        <p>${taskdescr}</p>
        <button class="delete-btn">Delete</button>
    `;

    // append to todo column (default)
    todo.appendChild(div);
    // attach events (dragstart, delete)
    attachTaskEvents(div);
    // save and update counts
    saveAndUpdateCounts();
    // hide modal
    modal.classList.remove("active");
    // clear inputs (optional)
    document.querySelector("#task-title-input").value = "";
    document.querySelector("#task-descr-input").value = "";
});
