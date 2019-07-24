# Using `@angular/elements`

This folder is an example of how to change your Angular app so it exports custom elements/web components using the `@angular/elements` package. There are a variety of ways to do this because it isn't yet officially supported by Angular so you may find alternative approaches on the web.

## Steps

### 1. Install @angular/elements

1. `ng add @angular/elements`
   - This adds the required packages and injects scripts into `angular.json`.

### 2. Updates to `app.module.ts`

1. Remove `bootstrap` property
1. Add `ngDoBootstrap` with nothing in it to override bootstrapping process
1. Add an import: `import { createCustomElement } from '@angular/elements'`
1. Call `createCustomElement()` to get wrapped element
1. Call `customElements.define()` with return value from previous step

### 3. Build

This example adds scripts to `package.json` to do this.

1. Step 1: build app with `angular-cli`
1. Step 2: create single `.js` file with all necessary files
1. Step 3: copy to location used by other parts of this repo
