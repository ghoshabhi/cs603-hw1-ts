import Task from "./Task";
import Organizer, { Comparator } from "./Organizer";

const task1 = new Task("AATask 2", new Date("06/11/2018 17:00"));
const task2 = new Task("ZTask 3", new Date("08/22/2016 17:00"));
const task3 = new Task("ATask 1", new Date("06/18/2017 17:00"));
const task4 = new Task("GTask 4", new Date("08/22/2017 17:00"));

const organizer = new Organizer();
organizer.addTask(task1);
organizer.addTask(task2);
organizer.addTask(task3);
organizer.addTask(task4);

console.log("Before sorting ");
console.log(organizer.taskList);

const sortByNameDesc: Comparator = (a: Task, b: Task): number =>
  b.taskName < a.taskName ? -1 : b.taskName > a.taskName ? 1 : 0;

const sortByDeadlineDesc: Comparator = (a: Task, b: Task): number =>
  b.taskDeadline < a.taskDeadline
    ? -1
    : b.taskDeadline > a.taskDeadline
      ? 1
      : 0;

console.log("\nAfter sorting by name DESC \n");
organizer.sortTasks(sortByNameDesc);
console.log(organizer.taskList);

console.log("\nAfter sorting by deadlinne DESC \n");
organizer.sortTasks(sortByNameDesc);
console.log(organizer.taskList);
