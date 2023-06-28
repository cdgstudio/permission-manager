import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HasPermissionDirective } from 'permission-manager';

@Component({
  selector: 'page-a',
  standalone: true,
  template: `
    <section class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        You are on page A
      </h1>
    </section>

    <section class="mx-auto max-w-screen-xl">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of data" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ item.name }}
              </th>
              <td class="px-6 py-4">{{ item.color }}</td>
              <td class="px-6 py-4">{{ item.type }}</td>
              <td class="px-6 py-4 min-w-[150px]">
                <ng-container *hasPermission="'CAN_WRITE'; else noPermission">I am</ng-container>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <ng-template #noPermission>You do not have permission to see the price</ng-template>
  `,
  imports: [HasPermissionDirective, NgFor],
})
export default class PageAComponent {
  protected readonly data = [
    { name: 'Apple MacBook Pro 17"', color: 'Silver', type: 'Laptop' },
    { name: 'Microsoft Surface Pro', color: 'White', type: 'Laptop PC' },
    { name: 'Magic Mouse 2', color: 'Black', type: 'Accessories' },
  ];
}
