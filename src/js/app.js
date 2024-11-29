const taskInput = document.getElementById('task-input');
const taskDescriptionInput = document.getElementById('task-description');
const taskDeadlineInput = document.getElementById('task-deadline');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskName = taskInput.value.trim();
  const taskDescription = taskDescriptionInput.value.trim();
  const taskDeadline = taskDeadlineInput.value.trim(); 

  if (taskName !== '' && taskDeadline !== '') {
    const task = { taskName, taskDescription, taskDeadline };


    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


    tasks.push(task);


    localStorage.setItem('tasks', JSON.stringify(tasks));


    const listItem = document.createElement('li');
    listItem.textContent = taskName;


    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.classList.add('update-btn');


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');


    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Details';
    detailsButton.classList.add('details-btn');


    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');


    buttonsDiv.appendChild(updateButton);
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(detailsButton);


    const timeLeftSpan = document.createElement('span');
    timeLeftSpan.classList.add('time-left');
    listItem.appendChild(timeLeftSpan);


    listItem.appendChild(buttonsDiv);


    taskList.appendChild(listItem);


    taskInput.value = '';
    taskDescriptionInput.value = '';
    taskDeadlineInput.value = '';


    deleteButton.addEventListener('click', function () {

      tasks = tasks.filter(t => t.taskName !== task.taskName);
      localStorage.setItem('tasks', JSON.stringify(tasks));


      taskList.removeChild(listItem);
    });


    updateButton.addEventListener('click', function () {

      localStorage.setItem('taskToEdit', JSON.stringify(task));


      window.location.href = 'update.html';
    });


    detailsButton.addEventListener('click', function () {

      localStorage.setItem('taskDetails', JSON.stringify(task));

      window.location.href = 'task-details.html';
    });

    function updateRemainingTime() {
      const deadline = new Date(task.taskDeadline).getTime();
      const now = new Date().getTime();
      const timeRemaining = deadline - now;

      if (timeRemaining <= 0) {
        timeLeftSpan.textContent = 'Time is up!';
        timeLeftSpan.style.color = 'red';
      } else {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timeLeftSpan.textContent = `Time remaining: ${daysRemaining}d ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`;
      }
    }

    setInterval(updateRemainingTime, 1000);
  } else {
    alert('Please enter both a task name and a deadline!');
  }
}

addTaskBtn.addEventListener('click', addTask);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.textContent = task.taskName;

    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.classList.add('update-btn');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Details';
    detailsButton.classList.add('details-btn');

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    buttonsDiv.appendChild(updateButton);
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(detailsButton);

    const timeLeftSpan = document.createElement('span');
    timeLeftSpan.classList.add('time-left');
    listItem.appendChild(timeLeftSpan);

    listItem.appendChild(buttonsDiv);

    taskList.appendChild(listItem);

    deleteButton.addEventListener('click', function () {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks = tasks.filter(t => t.taskName !== task.taskName);
      localStorage.setItem('tasks', JSON.stringify(tasks));

      taskList.removeChild(listItem);
    });

    updateButton.addEventListener('click', function () {
      localStorage.setItem('taskToEdit', JSON.stringify(task));

      window.location.href = '/update';
    });

    detailsButton.addEventListener('click', function () {
      localStorage.setItem('taskDetails', JSON.stringify(task));

      window.location.href = '/task-details';
    });

    function updateRemainingTime() {
      const deadline = new Date(task.taskDeadline).getTime();
      const now = new Date().getTime();
      const timeRemaining = deadline - now;

      if (timeRemaining <= 0) {
        timeLeftSpan.textContent = 'Time is up!';
        timeLeftSpan.style.color = 'red';
      } else {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timeLeftSpan.textContent = `Time remaining: ${daysRemaining}d ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`;
      }
    }

    setInterval(updateRemainingTime, 1000);
  });
}

window.addEventListener('load', loadTasks);