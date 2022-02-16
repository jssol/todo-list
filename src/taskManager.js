import { tasksList } from './index.js'

class Task {
  constructor(description, container) {
    this.description = description;
    this.completed = false;
    this.index = container.length + 1;
  }
}

export class TaskList {
  constructor() {
    this.tasks = [];
  }

  setStore = () => {
    localStorage.setItem('todo-list', JSON.stringify(this.tasks));
  }

  getStore = () => {
    if (localStorage.getItem('todo-list')) {
      this.tasks = JSON.parse(localStorage.getItem('todo-list'));
    }
  }

  removeTask = (index) => {
    this.tasks.splice(index, 1);
  }

  displayTasks = (taskslist) => {
    taskslist.innerHTML = '';
    this.tasks.forEach((task, index) => {
      const li = document.createElement('li');
      const check = document.createElement('button');
      const dots = document.createElement('button');
      const del = document.createElement('button');
      const field = document.createElement('p')
      li.id = task.index;
      li.className = 'task';
      field.textContent = task.description;
      field.className = 'task-description';
      dots.classList.add('button', 'dots');
      del.classList.add('button', 'del');
      check.classList.add('button', 'check');
      dots.innerHTML = 
      `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
      </svg>`;
      del.innerHTML = 
      `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>`;
      check.innerHTML = 
      `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>`;

      check.addEventListener('click', () => {
        li.classList.toggle('completed');
        if(li.classList.contains('completed')) {
          check.innerHTML = 
          `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>`;
        }
        else {
          check.innerHTML = 
          `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>`;
        }
      });

      dots.addEventListener('click', () => {
        li.classList.add('edit');
      });

      del.addEventListener('click', () => {
        this.removeTask(index);
        this.tasks.forEach((task, index) => {
          task.index = index + 1;
        })
        this.setStore();
        this.displayTasks(tasksList);
        console.log(this.tasks);
      });

      li.append(check, field, del, dots);
      taskslist.appendChild(li);
    });
  }

  addTask = (description) => {
    const task = new Task(description, this.tasks);
    this.tasks.push(task);
  }

  // updateTask = () => {

  // }

  clearAll = () => {
    this.tasks = [];
  }

  // clearComplete = () => {

  // }
}