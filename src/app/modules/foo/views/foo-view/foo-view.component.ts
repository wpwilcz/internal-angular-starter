import {Component, OnInit} from '@angular/core';
import {TestService} from '../../../../common/services/test-service/test-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  templateUrl: './foo-view.component.html',
  styleUrls: ['./foo-view.component.scss']
})
export class FooViewComponent implements OnInit {
  data: any;
  signupForm: FormGroup;

  constructor(private testService: TestService) {
    this.data = this.testService.getData();
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.simpleValidator.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
    });

    this.patch();
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  simpleValidator(control: FormControl): {[s: string]: boolean} {
    return {'nameIsForbidden': true};
  }

  patch() {
    this.signupForm.patchValue({
      'userData': {
        'username': 'Joe'
      }
    });
  }
}
