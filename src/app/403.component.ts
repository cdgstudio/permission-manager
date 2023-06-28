import { Component } from '@angular/core';

@Component({
  selector: 'no-permission',
  standalone: true,
  template: `
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          You cannot open this page
        </h1>
      </div>
    </section>

    <h1 class="text-9xl font-bold text-red-500 text-center my-10">403</h1>
  `,
})
export default class Page403Component {}
