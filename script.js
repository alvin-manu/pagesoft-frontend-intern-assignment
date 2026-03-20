const darkModeToggle = document.getElementById("darkModeToggle")
const menuToggle = document.getElementById("menuToggle")
const navLists = document.getElementById("navLists")
const menuToggleIcon = document.getElementById("menuToggleIcon")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const timeSection = document.getElementById("timeSection")

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

menuToggle.addEventListener("click", () => {
    navLists.classList.toggle("active")
})

setInterval(() => {
    const date = new Date();
    const hours = formatTime(date.getHours())
    const minutes = formatTime(date.getMinutes())
    const seconds = formatTime(date.getSeconds())
    const ampm = hours>=12 ? "PM": "AM"
    timeSection.innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm}`
}, 1000)

const formatTime = (val) => {
    const time = val < 10 ? '0' + val : val
    return time
}