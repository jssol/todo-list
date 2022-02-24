/**
 * @jest-environment jsdom
 */

import TaskList from './taskManager.js';

document.body.innerHTML = '<div>'
  + '<ul id="list"></ul>'
  + '</div>';
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

describe('adding, deleting or editing li items to the ul in the DOM', () => {
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

  describe('updating items on the list', () => {
    test('change Hello World to Hello on the list', () => {
      taskClass.addTask('Hello World');
      taskClass.displayTasks(itemsList);
      const list = document.querySelectorAll('#list li');
      taskClass.tasks[0].description = 'Hello';
      taskClass.displayTasks(itemsList);
      expect(list[0].textContent).toMatch('Hello');
    });

    test('change Microverse the best to the best on the list', () => {
      taskClass.addTask('Microverse the best');
      taskClass.displayTasks(itemsList);
      const list = document.querySelectorAll('#list li');
      taskClass.tasks[1].description = 'the best';
      taskClass.displayTasks(itemsList);
      expect(list[1].textContent).toMatch('the best');
    });
  });
});

describe('Testing completed tasks', () => {
  test('Checking for completed tasks', () => {
    taskClass.tasks[0].completed = true;
    expect(taskClass.tasks[0].completed).toBeTruthy();
  });
  test('Checking for completed tasks', () => {
    taskClass.tasks[1].completed = true;
    expect(taskClass.tasks[1].completed).toBeTruthy();
  });
  test('Checking for completed tasks', () => {
    taskClass.addTask('New task');
    taskClass.tasks[2].completed = true;
    expect(taskClass.tasks[2].completed).toBeTruthy();
  });
});

describe('Testing for clear All', () => {
  test('Clear all tasks', () => {
    taskClass.clearAll();
    expect(taskClass.tasks.length).toBe(0);
  });
});

describe('Testing for clearing only completed', () => {
  test('Clear all completed tasks', () => {
    taskClass.addTask('Hello World');
    taskClass.addTask('Hello Microverse');
    taskClass.tasks[0].completed = true;
    taskClass.tasks[1].completed = true;
    taskClass.clearCompleted();
    expect(taskClass.tasks.length).toBe(0);
  });
});

describe('Testing for local storage', () => {
  test('Testing for local storage ', () => {
    taskClass.addTask('Hello World');
    taskClass.addTask('Hello Microverse');
    taskClass.setStore();
    expect(localStorage.getItem('todo-list')).not.toBeNull();
  });
});

describe('Testing for removing local storage', () => {
  test('Testing empty local storage', () => {
    taskClass.clearAll();
    taskClass.setStore();
    expect(localStorage.getItem({})).toBeNull();
  });
});