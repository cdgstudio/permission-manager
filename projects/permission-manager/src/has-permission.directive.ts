import { NgIf, NgIfContext } from '@angular/common';
import { Directive, Input, OnDestroy, TemplateRef, inject } from '@angular/core';
import { EMPTY, ReplaySubject, catchError, switchMap, tap } from 'rxjs';
import { PermissionManagerService } from './permission-manager.service';
import { Permission } from 'permission-manager/permissions';

@Directive({
  selector: '[hasPermission]',
  standalone: true,
})
export class HasPermissionDirective extends NgIf<boolean> implements OnDestroy {
  private currentPermission$ = new ReplaySubject<Permission>(1);
  @Input() set hasPermission(permission: Permission) {
    this.currentPermission$.next(permission);
  }
  @Input() set hasPermissionElse(template: TemplateRef<NgIfContext<boolean>>) {
    super.ngIfElse = template;
  }

  private permissionManagerService = inject(PermissionManagerService);

  private currentPermissionSub = this.currentPermission$
    .pipe(
      switchMap((permission) => this.permissionManagerService.hasPermission(permission)),
      tap(() => (this.ngIf = true)),
      catchError(() => {
        this.ngIf = false;
        return EMPTY;
      })
    )
    .subscribe();

  ngOnDestroy(): void {
    this.currentPermission$.complete();
  }
}
