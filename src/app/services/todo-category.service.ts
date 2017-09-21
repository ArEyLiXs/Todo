import { Injectable } from '@angular/core';
import { Categories } from '../models/Categories';

@Injectable()
export class TodoCategoryService {

  categories: Categories[] = [];

  constructor() {
    this.categories.push(new Categories(1, 'Arbeit')),
      this.categories.push(new Categories(2, 'Schule')),
      this.categories.push(new Categories(3, 'Verein'));
  }

}
