import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment.dev';

import { hmrBootstrap } from './hmr';

const regularBootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.production) {
  enableProdMode();
}

if (!environment.production && module['hot']) {
  hmrBootstrap(module, regularBootstrap);
} else {
  regularBootstrap();
}
