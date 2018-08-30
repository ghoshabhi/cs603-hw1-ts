import Task from "./Task";

export interface Comparator {
  (a: Task, b: Task): number;
}

type TaskList = Array<Task>;

export default class Organizer {
  private _taskList: TaskList = new Array<Task>();

  get taskList(): TaskList {
    return this._taskList;
  }

  set taskList(newTaskList: TaskList) {
    this._taskList = newTaskList;
  }

  public addTask(newTask: Task): void {
    this._taskList.push(newTask);
  }

  public sortTasks(comparator: Comparator): void {
    this._taskList.sort(comparator);
  }

  public mySortTasks(comparator: Comparator): TaskList {
    // call custom algorithm
    return this._taskList;
  }
}
