"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, description, dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getDueDate() {
        return this.dueDate;
    }
    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
    isCompleted() {
        return this.completed;
    }
    setCompleted(completed) {
        this.completed = completed;
    }
    markAsCompleted() {
        this.completed = true;
    }
    displayTask() {
        console.log(`[${this.completed ? "X" : " "}] ${this.title} - Due: ${this.dueDate}`);
    }
}
exports.Task = Task;
