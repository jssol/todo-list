import './style.scss';
import TaskList from './taskManager.js';

const tasksList = document.querySelector('.tasks-list');
const form = document.getElementById('add-book');
const todo = new TaskList();
const clearAllButton = document.querySelector('.reset-icon');
const clearCompletedButton = document.querySelector('.reset-completed');

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

clearCompletedButton.addEventListener('click', () => {
  todo.clearCompleted();
  todo.setStore();
  todo.displayTasks(tasksList);
});

document.addEventListener('DOMContentLoaded', () => {
  todo.getStore();
  todo.displayTasks(tasksList);
});
