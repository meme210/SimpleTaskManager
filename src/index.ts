import { Task } from "./task";
import { TaskManager } from "./task-manager";

const manager = new TaskManager();

const task1 = new Task(1, "Buy groceries", "Milk, eggs, bread", "2025-05-23");
const task2 = new Task(
  2,
  "Finish report",
  "Complete project report",
  "2025-05-24"
);

manager.addTask(task1);
manager.addTask(task2);

manager.listAllTasks();

manager.markTaskAsCompleted(2);

manager.listAllTasks();
