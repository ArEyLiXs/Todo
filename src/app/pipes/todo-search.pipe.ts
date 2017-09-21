import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
  name: 'todoSearch'
})
export class TodoSearchPipe implements PipeTransform {
  transform(todoSearch: Todo[], search: string): Todo[] {
    if (!search) {
      return todoSearch;
    }
    return todoSearch.filter(t => String(t.id) === search || t.label.indexOf(search) >= 0 || t.category.label.indexOf(search) >= 0);
  }

}
