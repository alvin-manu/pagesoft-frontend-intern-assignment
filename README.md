# Alvin Manu Wilson Portfolio Website
A responsive personal portfolio website built using HTML, CSS, and JavaScript. It showcases my profile, projects, a digital clock, and a To-Do List with local storage functionality.

## How to Run

1. Download or clone the repository
2. Open `index.html` in your browser

## Live Link
https://alvin-manu.github.io/pagesoft-frontend-intern-assignment/

## Development Decisions

### 1. To-Do List with Local Storage

I implemented the To-Do List feature using JavaScript arrays to manage task data and synchronized it with the browser's localStorage. Each task is stored as an object with properties like `todo` and `completed`.
To ensure persistence, I created helper functions to save and retrieve tasks from localStorage.

### 2. Dark/Light Theme Toggle

The theme toggle feature was implemented using a CSS class-based approach. A `dark` class is added or removed from the `<body>` element to switch between themes.
The selected theme is stored in localStorage so that user preference persists across sessions. On page load, a function checks the saved theme and applies it automatically.

