import { Component, OnInit } from '@angular/core';
import { TodoAlertService } from '../../services/todo-alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private todoAlertService: TodoAlertService) { }

  show = false;

  get messageType(): string {
    return this.todoAlertService.messageType;
  }

  get messageText(): string {
    return this.todoAlertService.messageText;
  }

  get showBox(): boolean {
    return this.todoAlertService.showBox;
  }

  ngOnInit() {
  }

}
