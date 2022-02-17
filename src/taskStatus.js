export default class TaskStatus {
  constructor() {
    this.completed = false;
  }

  updateStatus = (li) => {
    if (li.classList.contains('completed')) {
      return this.completed = true;
    } else {
      return this.completed = false;
    }
  }
}