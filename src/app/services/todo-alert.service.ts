import { Injectable } from '@angular/core';

@Injectable()
export class TodoAlertService {

  private boxtext: string;
  private typ = 'success';
  private show = false;

  constructor() { }

  saveTodos(): void {
    this.show = true;

    setTimeout(function () {
      this.show = false;

    }.bind(this), 3000);

  }

  display(text: string, typ?: string) {
    this.saveTodos();
    this.typ = typ;
    return this.boxtext = text;
  }

  get showBox() {
    return this.show;
  }

  get messageType(): string {
    return this.typ;
  }

  get messageText(): string {
    return this.boxtext;
  }

}
