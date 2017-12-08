import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ComponentsModule} from '@common/components/components.module';
import {ServicesModule} from '@common/services/services.module';

import {AppComponent} from './app.component';

import {appRoutingComponents, AppRoutingModule} from './app.routing.module';
import {CoreModule} from './core.module';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    appRoutingComponents,
    BrowserModule,
    ComponentsModule,
    ServicesModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
