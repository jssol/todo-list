import './style.scss';
import { TaskList } from './taskManager';

const tasksList = document.querySelector('.tasks-list');
const form = document.getElementById('add-book');
const todo = new TaskList();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('book-input');
  todo.addTask(input.value);
  todo.setStore();
  todo.displayTasks(tasksList);
  input.value = '';
})

document.addEventListener('DOMContentLoaded', () => {
  todo.getStore();
  todo.displayTasks(tasksList);
});
