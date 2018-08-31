import Task from "./Task";
import Comparator from "./Comparator";
import { Utils } from "./utils/utils";

type TaskList = Array<Task>;

export default class Organizer {
  private _taskList: TaskList = new Array<Task>();
  private _utils: Utils<Task>;

  constructor() {
    this._utils = new Utils();
  }

  get taskList(): TaskList {
    return this._taskList;
  }

  set taskList(newTaskList: TaskList) {
    this._taskList = newTaskList;
  }

  public addTask(newTask: Task): void {
    this._taskList.push(newTask);
  }

  public sortTasks(comparator: Comparator<Task>): void {
    this._taskList.sort(comparator);
  }

  public mySortTasks(comparator: Comparator<Task>): TaskList {
    this._taskList = this._utils.sort(this._taskList, comparator);
    return (this.taskList = this._taskList);
  }
}
