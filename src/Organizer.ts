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
    // call custom comparator
    return this._taskList;
  }
}

const task1 = new Task("AATask 2", new Date(2010, 4, 10, 10, 7, 16));
const task2 = new Task("ZTask 3", new Date(2010, 4, 8, 9, 16, 9));
const task3 = new Task("ATask 1", new Date(2017, 6, 18, 17, 15, 0));
const task4 = new Task("GTask 4", new Date(2017, 8, 22, 17, 15, 0));

const organizer = new Organizer();
organizer.addTask(task1);
organizer.addTask(task2);
organizer.addTask(task3);
organizer.addTask(task4);

console.log("Before sorting ");
console.log(organizer.taskList);

console.log("\n====================================");

const sortByNameDesc: Comparator = (a: Task, b: Task): number =>
  b.taskName < a.taskName ? -1 : b.taskName > a.taskName ? 1 : 0;

const sortByDeadlineDesc: Comparator = (a: Task, b: Task): number => {
  let d1: number = a.taskDeadline.getTime(),
    d2: number = b.taskDeadline.getTime();

  if (d1 < d2) return 1;
  if (d1 > d2) return -1;
  return 0;
};

console.log("\nAfter sorting by name DESC \n");
organizer.sortTasks(sortByNameDesc);
console.log(organizer.taskList);

console.log("\n====================================");

console.log("\nAfter sorting by deadline DESC \n");
organizer.sortTasks(sortByDeadlineDesc);
console.log(organizer.taskList);
