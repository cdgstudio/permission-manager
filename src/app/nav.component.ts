import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto p-4">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mb-5 md:mb-0">Some Logo</span>
        <div class="w-auto">
          <ul
            class="font-medium flex border-gray-100 rounded-lg  flex-row space-x-1 mt-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <li>
              <a
                [routerLink]="['/a']"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:bg-transparent"
              >
                Page A
              </a>
            </li>
            <li>
              <a
                [routerLink]="['/b']"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 border-0 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:bg-transparent"
              >
                Page B
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class NavComponent {}
