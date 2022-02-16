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

  displayTasks = (taskslist) => {
    taskslist.innerHTML = '';
    this.tasks.forEach((task) => {
      const li = document.createElement('li');
      const check = document.createElement('button');
      const dots = document.createElement('button');
      const field = document.createElement('p')
      li.id = task.index;
      li.className = 'task';
      field.textContent = task.description;
      field.className = 'task-description';
      dots.classList.add('button', 'dots');
      check.classList.add('button', 'check');
      dots.innerHTML = 
      `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
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

      li.append(check, field, dots);
      taskslist.appendChild(li);
    });
  }

  addTask = (description) => {
    const task = new Task(description, this.tasks);
    this.tasks.push(task);
  }

  // removeTask = () => {

  // }

  // updateTask = () => {

  // }

  // clearAll = () => {

  // }

  // clearComplete = () => {

  // }
}
