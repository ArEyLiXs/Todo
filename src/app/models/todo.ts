import { Categories } from './categories';
export class Todo {

    public static id = 0;

    constructor(
        public id?: number,
        public label?: string,
        public category?: Categories,
        public done: boolean = false) {
    }
}
