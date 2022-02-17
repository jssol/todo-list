import TaskStatus from "./taskStatus.js";

export const taskStatus = new TaskStatus();

export default class Task {
  constructor(description, container) {
    this.description = description;
    this.completed = taskStatus.completed;
    this.index = container.length + 1;
  }
}