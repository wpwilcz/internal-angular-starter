import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {fooRoutingComponents, FooRoutingModule} from './foo.routing.module';


@NgModule({
  declarations: [
    fooRoutingComponents
  ],
  imports: [
    FooRoutingModule,
    SharedModule
  ],
  exports: []
})
export class FooModule {
}
