import { inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { PermissionManagerService } from './permission-manager.service';
import { Permission } from 'permission-manager/permissions';

export function provideGuardForPermission(permission: Permission): () => Observable<boolean> {
  return function () {
    const manager = inject(PermissionManagerService);
    return manager.hasPermission(permission).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  };
}
