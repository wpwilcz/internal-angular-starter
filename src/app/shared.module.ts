import {NgModule} from '@angular/core';
import {HasAccessDirective} from '@common/directives/has-access.directive';

@NgModule({
  declarations: [HasAccessDirective],
  imports: [],
  providers: [],
  bootstrap: [],
  exports: [HasAccessDirective]
})
export class SharedModule {
}
