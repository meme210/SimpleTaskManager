export class Task {
  private id: number;
  private title: string;
  private description: string;
  private dueDate: string;
  private completed: boolean;

  constructor(id: number, title: string, description: string, dueDate: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getDueDate(): string {
    return this.dueDate;
  }

  public setDueDate(dueDate: string): void {
    this.dueDate = dueDate;
  }

  public isCompleted(): boolean {
    return this.completed;
  }

  public setCompleted(completed: boolean): void {
    this.completed = completed;
  }

  public markAsCompleted(): void {
    this.completed = true;
  }

  public displayTask(): void {
    console.log(
      `[${this.completed ? "X" : " "}] ${this.title} - Due: ${this.dueDate}`
    );
  }
}
