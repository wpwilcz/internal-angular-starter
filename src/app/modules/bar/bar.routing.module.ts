import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarViewComponent} from '@modules/bar/views/bar-view/bar-view.component';

const barRoutes: Routes = [
  {path: '', component: BarViewComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(barRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BarRoutingModule {
}

export const barRoutingComponents = [BarViewComponent];
