import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {environment} from '../environments/environment.dev';

const appRoutes: Routes = [
  {path: 'foo', loadChildren: 'app/modules/foo/foo.module#FooModule'},
  {path: 'bar/:id', loadChildren: 'app/modules/bar/bar.module#BarModule'},
  {path: '404', loadChildren: 'app/modules/not-found/not-found.module#NotFoundModule'},
  {path: '', redirectTo: '/foo', pathMatch: 'full'},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: !environment.production, useHash: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

export const appRoutingComponents = [];
