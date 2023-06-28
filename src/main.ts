import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROOT_ROUTES } from './app/routes';
import { APP_INITIALIZER, inject } from '@angular/core';
import { PermissionManagerService } from 'permission-manager';

export function loadUserPermissionsFactory() {
  const manager = inject(PermissionManagerService);

  return () => manager.loadUserPermissions(['CAN_FIX', 'CAN_READ']);
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROOT_ROUTES),
    {
      provide: APP_INITIALIZER,
      useFactory: loadUserPermissionsFactory,
      multi: true,
    },
  ],
});
