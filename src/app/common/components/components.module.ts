import { NgModule } from '@angular/core';

import { ButtonModule } from '@common/components/ButtonComponent/button.module';

@NgModule({
  imports: [
    ButtonModule
  ],
  exports: [
    ButtonModule
  ],
})
export class ComponentsModule { }
