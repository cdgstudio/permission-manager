import { Component } from '@angular/core';

@Component({
  selector: 'page-B',
  standalone: true,
  template: `
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          You are on page B
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis mattis velit. Vestibulum sed tempus
          lectus. Aliquam sagittis sagittis ultrices.
        </p>
      </div>
    </section>
  `,
})
export default class PageBComponent {}
