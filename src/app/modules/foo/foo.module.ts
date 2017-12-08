import {NgModule} from '@angular/core';
import {fooRoutingComponents, FooRoutingModule} from '@modules/foo/foo.routing.module';
import {SharedModule} from '../../shared.module';


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
