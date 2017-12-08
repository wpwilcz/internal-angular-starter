import { NgModule } from '@angular/core';

import { TestService } from '@common/services/test-service/test-service';

@NgModule({
  providers: [
    TestService
  ],
})
export class ServicesModule { }
