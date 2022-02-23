import './style.scss';
import TaskList from './modules/taskManager.js';
import { updateAppState, getAppState } from './modules/toggleDark.js';

const tasksList = document.querySelector('.tasks-list');
const form = document.getElementById('add-book');
const todo = new TaskList();
const clearAllButton = document.querySelector('.reset-icon');
const clearCompletedButton = document.querySelector('.reset-completed');
const themeToggle = document.querySelector('.dark-mode-toggle');

themeToggle.addEventListener('click', () => {
  updateAppState(document.documentElement, themeToggle);
});

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
  getAppState(document.documentElement, themeToggle);
  todo.getStore();
  todo.displayTasks(tasksList);
});
