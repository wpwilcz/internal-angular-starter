import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '@common/components/components.module';
import { ServicesModule } from '@common/services/services.module';

import { AppComponent } from './app.component';

import { RoutingModule } from '@common/routing/routing.module';

import { FooModule } from '@modules/foo/foo.module';
import { BarModule } from '@modules/bar/bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    ServicesModule,
    FooModule,
    BarModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
