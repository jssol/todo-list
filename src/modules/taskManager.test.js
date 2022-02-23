/**
 * @jest-environment jsdom
 */

import TaskList from './taskManager.js';

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
