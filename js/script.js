const darkModeToggle = document.getElementById("darkModeToggle")
const menuToggle = document.getElementById("menuToggle")
const navLists = document.getElementById("navLists")
const menuToggleIcon = document.getElementById("menuToggleIcon")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const timeSection = document.getElementById("timeSection")
const todoInput = document.getElementById("todoInput")
const todoBtn = document.getElementById("todoBtn")
let todoList = document.getElementById("todoList")
const task = JSON.parse(localStorage.getItem("tasks")) || []

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark")
        darkModeToggle.classList.replace('fa-moon', 'fa-sun')
    }
    else {
        localStorage.setItem("theme", "light")
        darkModeToggle.classList.replace('fa-sun', 'fa-moon')
    }
})

function setTheme() {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
        document.body.classList.toggle("dark");
        darkModeToggle.classList.replace('fa-moon', 'fa-sun')
    }else{
        darkModeToggle.classList.replace('fa-sun', 'fa-moon')

    }
}
setTheme()

menuToggle.addEventListener("click", () => {
    navLists.classList.toggle("active")
})

setInterval(() => {
    const date = new Date();
    const hours = formatTime(date.getHours())
    const minutes = formatTime(date.getMinutes())
    const seconds = formatTime(date.getSeconds())
    const ampm = hours >= 12 ? "PM" : "AM"
    timeSection.innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm}`
}, 1000)

const formatTime = (val) => {
    const time = val < 10 ? '0' + val : val
    return time
}

todoBtn.addEventListener("click", () => {
    const todo = todoInput.value.trim()
    if (!todo) {
        return alert("Enter Some Todo Item")
    }
    else {
        task.push({ text: todo, completed: false })
        saveTask()
        renderTask()
        todoInput.value = ""
    }
})

const saveTask = () => {
    localStorage.setItem("tasks", JSON.stringify(task))
}

const renderTask = () => {
    todoList.innerHTML = ""
    task.forEach((item, index) => {
        const li = document.createElement("li")
        const span = document.createElement("span")
        span.textContent = item.text

        const icon = document.createElement("i")
        icon.className = item.completed ? "fa-solid fa-check" : "fa-regular fa-circle"

        icon.addEventListener("click", () => {
            task[index].completed = !task[index].completed
            saveTask()
            renderTask()
        })
        const deletebutton = document.createElement("button")
        deletebutton.innerText = "DELETE"

        deletebutton.addEventListener("click", () => {
            task.splice(index, 1);
            saveTask();
            renderTask()
        })

        li.appendChild(icon)
        li.appendChild(span)
        li.appendChild(deletebutton)
        todoList.appendChild(li)
    });
}

renderTask()
