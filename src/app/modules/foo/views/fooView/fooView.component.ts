import { Component } from '@angular/core';

import { TestService } from '@common/services/TestService/TestService';

@Component({
  templateUrl: './fooView.component.html',
  styleUrls: ['./fooView.component.scss']
})
export class FooViewComponent {
  data: any;

  constructor(private testService: TestService) {
    this.data = this.testService.getData();
  }
}
