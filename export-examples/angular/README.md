# TODO

1. Install @angular/elements
2. Install document-register-element
3. Updates to `app.module.ts`:
   a. Remove `bootstrap` property
   b. Add `ngDoBootstrap` with nothing in it to override bootstrapping process
   c. Add an import: `import { createCustomElement } from '@angular/elements'`
   d. Call `createCustomElement()` to get wrapped element
   e. Call `customElements.define()`
