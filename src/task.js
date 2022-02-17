export default class Task {
  constructor(description, container) {
    this.description = description;
    this.completed = false;
    this.index = container.length + 1;
  }
}