
const categories = [
    {
        id: 1,
        name: "School",
    },
    {
        id: 2,
        name: "Leisure"
    },
    {
        id: 3,
        name: "Work"
    }
]

const tasks = JSON.parse(localStorage.getItem("tasks"));

const populateTask = () => {
    const taskContainer = document.querySelector("#task-con");
    tasks.forEach(t => {
        taxkContainer.tasks = "";
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.style.backgroundColor = t.displayColor;
        console.log(taskItem)
        const item = `
        <div class="content">
            <div class="categories">
            ${t.categories.map(c => `<div>${categories.find(f=> f.id == c).name}</div>`)
            }
            </div>
            <div class="task-title">
                ${t.title}
            </div>
            <div class="date-time">
                <div class="date">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>${t.date}</span>
                </div>
                <div class="time">
                    <i class="fa-regular fa-clock"></i>
                    <span>${t.time}</span>
                </div>
            </div>
        </div>
        <div class="icons">
            <div class="pen">
                <i class="fa-solid fa-pen"></i>
            </div>
            <i class="fa-regular fa-circle circle"></i>
            <i id="hidden" class="fa-solid fa-circle-check circle"></i>
        </div>
    `
        taskItem.innerHTML += item;
        taskContainer.appendChild(taskItem)

        
    })
}



populateTask()