import { Injectable } from '@angular/core';
import { Status, Task } from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  // Example of tasks
  tasks: Task[] = [];
  open: Task[] = [];
  in_progress: any[] = [];
  complete: any[] = [];


  constructor() {}

  // add task to tasks array
  addTask(task: Task) {
    this.tasks.push(task)

    if (task.status == Status.open) {
      this.open.push(task)
      console.log(this.open)
    } else if (task.status == Status.in_progress) {
      this.in_progress.push(task)
      console.log(this.in_progress)
    } else if (task.status == Status.completed) {
      this.complete.push(task)
      console.log(this.complete)
    }
  }

  // return all tasks from tasks array
  getAllTask() {
    return this.tasks
  }

  // change status of tasks after drag and drop
  changeStatus() {
    this.open.map((item, index) => {
      if (item.status != Status.open) {
        item.status = Status.open
        this.tasks.map((task, index) => {
          if(item.title === task.title){
            task.status = Status.open
          }
        })
      }
    })
    this.in_progress.map((item, index) => {
      if (item.status != Status.in_progress) {
        item.status = Status.in_progress
        this.tasks.map((task, index) => {
          if(item.title === task.title){
            task.status = Status.in_progress
          }
        })
      }
    })
    this.complete.map((item, index) => {
      if (item.status != Status.completed) {
        item.status = Status.completed
        this.tasks.map((task, index) => {
          if(item.title === task.title){
            task.status = Status.completed
          }
        })
      }
    })
  }
}
