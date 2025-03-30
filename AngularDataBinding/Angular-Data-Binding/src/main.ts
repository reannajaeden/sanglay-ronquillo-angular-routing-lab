import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // ✅ This is required
}).catch(err => console.error(err));


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
