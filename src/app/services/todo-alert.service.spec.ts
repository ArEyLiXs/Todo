import { TestBed, inject } from '@angular/core/testing';

import { TodoAlertService } from './todo-alert.service';

describe('TodoAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoAlertService]
    });
  });

  it('should be created', inject([TodoAlertService], (service: TodoAlertService) => {
    expect(service).toBeTruthy();
  }));
});
