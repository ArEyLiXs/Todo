import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoDataService } from '../../services/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  searchStr: string;

  constructor(private todoDataService: TodoDataService) { }


  ngOnInit() {
  }

  get todos() {
    return this.todoDataService.todos;
  }

  toggle(todo: Todo) {
    this.todoDataService.toggle(todo);
  }

  delete(todo: Todo) {
    this.todoDataService.delete(todo);
  }

}
