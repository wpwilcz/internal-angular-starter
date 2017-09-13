import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { E404Component } from './views/E404/E404.component';

import { environment } from '../../../environments/environment.dev';

const appRoutes: Routes = [
  { path: '**',  component: E404Component },
];

@NgModule({
  declarations: [
    E404Component,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: !environment.production, useHash: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
