import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Categories } from '../models/Categories';
import { TodoAlertService } from './todo-alert.service';
import { Router } from '@angular/router';



@Injectable()
export class TodoDataService {

  todos: Todo[] = [];

  constructor(private todoAlertService: TodoAlertService, private router: Router) {
  }

  delete(todo: Todo) {
    this.todos = this.todos.filter(i => i.id !== todo.id);
    this.todoAlertService.display('Delete', 'danger');
  }

  add(todo: Todo) {
    if (todo.category && todo.label) {
      this.todos.push(todo);
      this.router.navigateByUrl('/list');
      this.todoAlertService.display('Success', 'success');
      Todo.id++;
      todo.id = Todo.id;
    } else {
      this.todoAlertService.display('Save Failed', 'danger');
    }
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
  }
}
