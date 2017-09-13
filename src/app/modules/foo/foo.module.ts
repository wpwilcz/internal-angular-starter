import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooViewComponent } from './views/fooView/fooView.component';

const heroesRoutes: Routes = [
  { path: 'foo',  component: FooViewComponent },
];

@NgModule({
  declarations: [
    FooViewComponent,
  ],
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class FooModule { }
