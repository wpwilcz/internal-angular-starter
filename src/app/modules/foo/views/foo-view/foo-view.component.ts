import {Component} from '@angular/core';
import {TestService} from '../../../../common/services/test-service/test-service';


@Component({
  templateUrl: './foo-view.component.html',
  styleUrls: ['./foo-view.component.scss']
})
export class FooViewComponent {
  data: any;

  constructor(private testService: TestService) {
    this.data = this.testService.getData();
  }
}
