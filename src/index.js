import './style.scss';

const tasksList = document.querySelector('.tasks-list');
const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete the To Do project',
    completed: false,
    index: 1,
  },
  {
    description: 'eat, code, sleep',
    completed: false,
    index: 2,
  },
];

const displayTasks = (tasks, tasksList) => {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.id = task.index;
    li.className = 'task';
    li.textContent = task.description;

    tasksList.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  displayTasks(tasks, tasksList);
});
