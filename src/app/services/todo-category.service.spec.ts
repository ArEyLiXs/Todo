import { TestBed, inject } from '@angular/core/testing';

import { TodoCategoryService } from './todo-category.service';

describe('TodoCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoCategoryService]
    });
  });

  it('should be created', inject([TodoCategoryService], (service: TodoCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
