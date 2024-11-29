const taskInput = document.getElementById('task-input');
const taskDescriptionInput = document.getElementById('task-description');
const taskDeadlineInput = document.getElementById('task-deadline');
const saveTaskBtn = document.getElementById('save-task-btn');

const taskToEdit = JSON.parse(localStorage.getItem('taskToEdit'));

if (taskToEdit) {
  taskInput.value = taskToEdit.taskName;
  taskDescriptionInput.value = taskToEdit.taskDescription;
  taskDeadlineInput.value = taskToEdit.taskDeadline;
}

saveTaskBtn.addEventListener('click', function () {
  const updatedTaskName = taskInput.value.trim();
  const updatedTaskDescription = taskDescriptionInput.value.trim();
  const updatedTaskDeadline = taskDeadlineInput.value;

  if (updatedTaskName !== '') {
    const updatedTask = {
      taskName: updatedTaskName,
      taskDescription: updatedTaskDescription,
      taskDeadline: updatedTaskDeadline,
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskIndex = tasks.findIndex(t => t.taskName === taskToEdit.taskName);

    if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTask;
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));

    window.location.href = '/';
  } else {
    alert('Please enter a task name!');
  }
});
