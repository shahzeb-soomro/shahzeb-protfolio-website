import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log('Starting Angular application bootstrap...');
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => console.log('Angular application bootstrapped successfully'))
  .catch(err => {
    console.error('Bootstrap error occurred:');
    console.error(err);
  });
