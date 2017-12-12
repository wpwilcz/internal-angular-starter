import { NgModule } from '@angular/core';
import {TestService} from './test-service/test-service';


@NgModule({
  providers: [
    TestService
  ],
})
export class ServicesModule { }
