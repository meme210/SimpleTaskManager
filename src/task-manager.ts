import { Task } from "./task";

export class TaskManager {
  private taskList: Task[] = [];

  public addTask(task: Task): void {
    this.taskList.push(task);
    console.log("Task added");
  }

  public removeTask(taskId: number): void {
    this.taskList = this.taskList.filter((task) => task.getId() !== taskId);
    console.log("Task removed");
  }

  public listAllTasks(): void {
    for (const task of this.taskList) {
      task.displayTask();
    }
  }

  public markTaskAsCompleted(taskId: number): void {
    for (const task of this.taskList) {
      if (task.getId() === taskId) {
        task.markAsCompleted();
        break;
      }
    }
  }
}
