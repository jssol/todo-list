export default class TaskStatus {
  constructor() {
    this.completed = false;
  }

  updateStatus = (li) => {
    if (li.classList.contains('completed')) {
      this.completed = true;
    } else {
      this.completed = false;
    }
    return this.completed;
  }
}