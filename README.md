## Task Manager Application

This is a simple Task Manager web application built using Node.js and Express.js. The app allows users to create, update, delete, and view tasks, with the ability to store task data in localStorage.

# Features
* Task Creation: Users can add new tasks with a name, description, and deadline.
* Task List: Tasks are displayed with their name and a countdown to the deadline.
* Task Details: Users can view more details about each task.
* Task Update: Users can update the details of an existing task.
* Task Deletion: Users can delete tasks from the list.
* LocalStorage Persistence: Task data is saved locally in the browser's storage, ensuring tasks persist even after the page is reloaded.

# File Structure

* ├── server.js                 # Node.js server configuration
* ├── src/                      # Frontend files
* │   ├── index.html            # Main page with task input form
* │   ├── update.html           # Page for updating existing tasks
* │   ├── task-details.html     # Page for viewing task details
* │   ├── style.css             # Basic styling for the app
* │   └── js/
* │       ├── app.js            # Main JavaScript file for task management
* │       └── update.js         # JavaScript for updating tasks
* └── package.json              # Project dependencies and configuration

## Usage
# Task Management
* Add Task: Enter a task name, description, and deadline, and click the "Add Task" button to add a new task.
* View Task Details: Click the "Details" button next to a task to view its details.
* Update Task: Click the "Update" button next to a task to edit its details.
* Delete Task: Click the "Delete" button next to a task to remove it from the task list.

# Deadline Countdown
The app displays a countdown for each task based on its deadline. The remaining time will be updated every second, and when the time is up, it will display "Time is up!" in red.

# Technologies Used
* Node.js: Backend server and routing.
* Express.js: Web framework for handling HTTP requests.
* HTML: Markup for rendering the web pages.
* JavaScript: Client-side functionality for task management and DOM manipulation.
* localStorage: Storing tasks persistently in the user's browser.

# Dependencies
* express: Web framework for Node.js.
* body-parser: Middleware for parsing incoming request bodies.

# Development Notes
* Tasks are stored in localStorage on the client-side, so the data will persist across page reloads but will be cleared if the browser's storage is cleared.
* The app does not rely on a database or backend storage, making it a simple, client-side application.
* The update and details pages allow users to interact with individual tasks, providing a smooth user experience.

# Future Improvements
* Backend Storage: Transition to a database for persistent task storage.
* Authentication: Add user authentication to allow individual task management.
* Task Sorting: Implement functionality to sort tasks by name, deadline, or priority.
* Task Prioritization: Allow users to set priorities for tasks.