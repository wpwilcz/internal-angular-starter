import {Component} from '@angular/core';

@Component({
  template: '<p>Error 404!</p>',
})
export class NotFoundComponent {

  constructor() {
    console.warn('404 activate');
  }
}
