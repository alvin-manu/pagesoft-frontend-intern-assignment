const darkModeToggle = document.getElementById("darkModeToggle")
const menuToggle = document.getElementById("menuToggle")
const navLists = document.getElementById("navLists")
const menuToggleIcon = document.getElementById("menuToggleIcon")

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