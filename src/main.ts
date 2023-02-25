import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter, withRouterConfig } from '@angular/router';
import { appMainRoutes } from '@app/app.route';
import { CoreModule } from '@core/core.module';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    importProvidersFrom(CoreModule),

    provideRouter(
      appMainRoutes,
      withRouterConfig({ onSameUrlNavigation: 'ignore' })
    ),
  ],
}).catch((err) => {
  return console.log(err);
});
