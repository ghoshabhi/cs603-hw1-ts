export default class Task {
  private _taskName: String;
  private _taskDeadline: Date;

  constructor(taskName: String, taskDeadline: Date) {
    this._taskName = taskName;
    this._taskDeadline = taskDeadline;
  }

  get taskName(): String {
    return this._taskName;
  }

  get taskDeadline(): Date {
    return this._taskDeadline;
  }

  toString() {
    return `${this._taskName}`; // - ${this._taskDeadline.getMonth()}/${this._taskDeadline.getDay()}/${this._taskDeadline.getFullYear()}
  }
}
