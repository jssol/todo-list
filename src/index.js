import './style.scss';
import TaskList from './taskManager.js';

const tasksList = document.querySelector('.tasks-list');
const form = document.getElementById('add-book');
const todo = new TaskList();
const clearAllButton = document.querySelector('.reset-icon');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('book-input');
  todo.addTask(input.value);
  todo.setStore();
  todo.displayTasks(tasksList);
  input.value = '';
});

clearAllButton.addEventListener('click', () => {
  todo.clearAll();
  todo.setStore();
  todo.displayTasks(tasksList);
});

document.addEventListener('DOMContentLoaded', () => {
  displayTasks(tasks, tasksList);
});
