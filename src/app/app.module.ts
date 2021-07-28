import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ShowTasksComponent } from './components/show-tasks/show-tasks.component';
import { ShowAllComponent } from './components/show-all/show-all.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    ShowTasksComponent,
    ShowAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
