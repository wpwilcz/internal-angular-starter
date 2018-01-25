import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {fooRoutingComponents, FooRoutingModule} from './foo.routing.module';
import {CommonModule} from '@angular/common';
import {AuMaskDirective} from '../../directives/au-mask/au-mask.directive';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    fooRoutingComponents,
    AuMaskDirective,
  ],
  imports: [
    CommonModule,
    FooRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuMaskDirective
  ]
})
export class FooModule {
}
