import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from '../../models/task'

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  open: Task[];
  in_progress:Task[];
  completed:Task[];

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.open = this.taskService.open;
    this.in_progress = this.taskService.in_progress;
    this.completed = this.taskService.complete;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // console.log(event.container.data,event.previousIndex, event.currentIndex )
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        this.taskService.changeStatus()
    }
    console.log("Open array = ", this.open, " In-progress array = ",this.in_progress," Completed array = ", this.completed, " whole tasks array = ", this.taskService.tasks)
  }

}
