import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import {Task} from '../../models/task';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  tasks:Task[] = [];

  constructor(private taskService:TaskServiceService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks
  }

}
