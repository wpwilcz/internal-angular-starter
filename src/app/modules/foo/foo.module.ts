import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {fooRoutingComponents, FooRoutingModule} from './foo.routing.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    fooRoutingComponents
  ],
  imports: [
    CommonModule,
    FooRoutingModule,
    SharedModule,
  ],
  exports: []
})
export class FooModule {
}
