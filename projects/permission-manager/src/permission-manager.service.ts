import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map } from 'rxjs';
import { Permission } from 'permission-manager/permissions';

export class NoPermissionError {}

function throwNoPermission(): never {
  throw new NoPermissionError();
}

@Injectable({
  providedIn: 'root',
})
export class PermissionManagerService {
  permissions$ = new ReplaySubject<Permission[]>(1);

  hasPermission(permission: Permission): Observable<void> {
    return this.permissions$.pipe(
      map((permissions) => permissions.includes(permission)),
      map((has) => (has ? void 0 : throwNoPermission()))
    );
  }

  loadUserPermissions(permission: Permission[]): void {
    this.permissions$.next(permission);
  }
}
