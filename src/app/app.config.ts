import { APP_INITIALIZER, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ROOT_ROUTES } from './routes';
import { PermissionManagerService } from 'permission-manager';

export function loadUserPermissionsFactory() {
  const manager = inject(PermissionManagerService);

  return () => manager.loadUserPermissions(['CAN_FIX', 'CAN_READ']);
}

export const appConfig = {
  providers: [
    provideRouter(ROOT_ROUTES),
    {
      provide: APP_INITIALIZER,
      useFactory: loadUserPermissionsFactory,
      multi: true,
    },
  ],
};
