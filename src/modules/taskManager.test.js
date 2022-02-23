/**
 * @jest-environment jsdom
 */

import TaskList from './taskManager.js';

document.body.innerHTML =
      '<div>' +
      '  <ul id="list"></li>' +
      '</div>';
const itemsList = document.querySelector('#list');

const taskClass = new TaskList();

describe('testing adding ', () => {
  test('adding the task', () => {
    taskClass.addTask('Hello');
    expect(taskClass.tasks[0].description).toEqual('Hello');
  });
  test('adding the task', () => {
    taskClass.addTask('world');
    expect(taskClass.tasks[1].description).toEqual('world');
  });
  test('adding the task', () => {
    taskClass.addTask('Microverse');
    expect(taskClass.tasks[2].description).toEqual('Microverse');
  });
});

describe('testing deleting ', () => {
  test('deleting the task', () => {
    taskClass.removeTask(0);
    expect(taskClass.tasks.length).toBe(2);
  });
  test('deleting the task', () => {
    taskClass.removeTask(1);
    expect(taskClass.tasks.length).toBe(1);
  });
  test('deleting the task', () => {
    taskClass.removeTask(0);
    expect(taskClass.tasks.length).toBe(0);
  });
});

describe('adding or deleting li items to the ul in the DOM', () => {
  describe('adding items to the list', () => {
    test('Add Hello to the list', () => {
      taskClass.addTask('Hello');
      taskClass.displayTasks(itemsList);
      const list = document.querySelectorAll('#list li');
      expect(list).toHaveLength(1);
    });
    test('Add World to the list', () => {
      taskClass.addTask('World');
      taskClass.displayTasks(itemsList);
      const list = document.querySelectorAll('#list li');
      expect(list).toHaveLength(2);
    });
  });

  describe('deleting items from the list', () => {
    test('Remove Hello from the list', () => {
      taskClass.removeTask(0);
      taskClass.displayTasks(itemsList);
      const list = document.querySelectorAll('#list li');
      expect(list).toHaveLength(1);
    });
    test('Remove World from the list', () => {
      taskClass.removeTask(0);
      taskClass.displayTasks(itemsList);
      const list = document.querySelectorAll('#list li');
      expect(list).toHaveLength(0);
    });
  });
});
