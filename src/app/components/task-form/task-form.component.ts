import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import {Status, Task} from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  options:string[];
  myValue: Status;
  // setting typeof Status to enum Status
  Status: typeof Status = Status;


  tasks;
  title: string;
  description: string

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks
    // getting all values of enum Status and storing in option array
    var options = Object.keys(Status)
    this.options = options;
  }

  handleAdd(){
    const newTask:Task = {
      title:this.title,
      description: this.description,
      date: new Date(),
      status: this.myValue
    }

    this.taskService.addTask(newTask)
  }

  parseValue(value : string) {
    console.log(value, "value")
    // setting up the value
    this.myValue = Status[value];
  }

}
