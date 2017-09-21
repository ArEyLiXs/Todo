import { TodoCategoryService } from '../services/todo-category.service';

export class TodoEntry {

    done = false;
    id: number;

    constructor(public label?: string, public category?: TodoCategoryService, public dueDate?: Date, public priority?: number) {
    }
}
