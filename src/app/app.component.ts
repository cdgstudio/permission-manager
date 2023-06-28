import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  template: `
    <app-nav />
    <router-outlet />
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  standalone: true,
  imports: [RouterOutlet, NavComponent],
})
export class AppComponent {}
