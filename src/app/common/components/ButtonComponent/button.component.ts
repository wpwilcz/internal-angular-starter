import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  clicked() {
    this.onClick.emit();
  }
}
