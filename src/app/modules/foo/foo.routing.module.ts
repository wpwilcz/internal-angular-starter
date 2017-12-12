import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FooViewComponent} from './views/foo-view/foo-view.component';

const fooRoutes: Routes = [
  {path: '', component: FooViewComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(fooRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FooRoutingModule {
}

export const fooRoutingComponents = [FooViewComponent];
