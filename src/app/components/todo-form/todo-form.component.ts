import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../services/todo-data.service';
import { Todo } from '../../models/todo';
import { TodoCategoryService } from '../../services/todo-category.service';
import { TodoAlertService } from '../../services/todo-alert.service';
import { TodoEntry } from '../../models/TodoEntry';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = new Todo();
  catblur = false;
  labelblur = false;

  newTodo: TodoEntry = new TodoEntry();


  constructor(
    private todoDataService: TodoDataService,
    private todoCategoryService: TodoCategoryService,
    private todoAlertService: TodoAlertService) { }

  ngOnInit() {
  }

  save(todo: Todo) {
    this.catblur = true;
    this.labelblur = true;
    if (!this.checkcat() && !this.checklabel()) {
      this.todoDataService.add(todo);
      this.todo = new Todo();
      this.newTodo = new TodoEntry();
    } else {
      this.todoAlertService.display('Missing informations', 'danger');
    }

  }

  get category() {
    return this.todoCategoryService.categories;
  }

  checkcat(): boolean {
    if (this.catblur && !this.todo.category) {
      return true;
    }
    return false;
  }
  checklabel() {
    if (this.labelblur && !this.todo.label) {
      return true;
    }
    return false;
  }

  setPriority(prio: number) {
    this.newTodo.priority = prio;
  }
}
