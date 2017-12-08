import {NgModule} from '@angular/core';
import {barRoutingComponents, BarRoutingModule} from '@modules/bar/bar.routing.module';
import {SharedModule} from '../../shared.module';


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
