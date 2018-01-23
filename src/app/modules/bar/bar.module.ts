import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {barRoutingComponents, BarRoutingModule} from './bar.routing.module';


@NgModule({
  declarations: [
    barRoutingComponents
  ],
  imports: [
    BarRoutingModule,
    SharedModule
  ],
  exports: []
})
export class BarModule {
}
