import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDataService } from './services/todo-data.service';
import { TodoCategoryService } from './services/todo-category.service';
import { TodoAlertService } from './services/todo-alert.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import { TodoSearchPipe } from './pipes/todo-search.pipe';
import { PriorityChooserComponent } from './components/priority-chooser/priority-chooser.component';

const appRoutes: Routes = [
  { path: 'list', component: TodoListComponent },
  { path: '', component: TodoListComponent },
  { path: 'new', component: TodoFormComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    NavbarComponent,
    AlertComponent,
    TodoSearchPipe,
    PriorityChooserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [TodoDataService, TodoCategoryService, TodoAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
