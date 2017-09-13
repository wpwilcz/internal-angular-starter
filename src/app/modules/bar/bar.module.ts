import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarViewComponent } from './views/barView/barView.component';

const heroesRoutes: Routes = [
  { path: 'bar/:id',  component: BarViewComponent },
];

@NgModule({
  declarations: [
    BarViewComponent,
  ],
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class BarModule { }
