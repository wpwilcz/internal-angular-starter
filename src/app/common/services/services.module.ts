import { NgModule } from '@angular/core';

import { TestService } from '@common/services/TestService/TestService';

@NgModule({
  providers: [
    TestService
  ],
})
export class ServicesModule { }
