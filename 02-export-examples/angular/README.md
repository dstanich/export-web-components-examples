# Using `@angular/elements`

This folder is an example of how to change your Angular app so it exports custom elements/web components using the `@angular/elements` and `ngx-build-plus` packages. Combining these two packages is the most reliable way to use Elements right now since Angular and the official CLI don't yet support it.

**Note**: If you try to create a production build just using `@angular/elements` and apply the built files to another framework like React that is also using Webpack you will likely get errors at runtime. This happens because both frameworks are trying to write to the same webpack variable. For now, using `ngx-build-plus` is an easy way to get around this until the Angular team supports external elements. [More details here](https://github.com/angular/angular/issues/28267).

## Steps

Steps are based on the content located on the [ngx-build-plus readme docs](https://github.com/manfredsteyer/ngx-build-plus).

### 1. Install dependencies

1. `ng add @angular/elements`: This adds the required packages and injects scripts into `angular.json`.
1. `npm install @webcomponents/custom-elements --save`: Polyfills to enable custom elements.
1. `ng add ngx-build-plus`: Add `ngx-build-plus` and update `angular.json` to use the new builder.

### 2. Create `webpack.extra.js` file

Create a webpack file to specify which dependencies to treat as external and not package in the bundle.

```
module.exports = {
    "externals": {
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/elements": "ng.elements"
    }
}
```

### 3. Updates to `app.module.ts`

1. Remove `bootstrap` property
1. Add `ngDoBootstrap` with nothing in it to override bootstrapping process
1. Add an import: `import { createCustomElement } from '@angular/elements'`
1. Call `createCustomElement()` to get wrapped element
1. Call `customElements.define()` with return value from previous step

### 4. Update ViewEncapsulation

For each component you want to have a shadow DOM, update the `encapsulation` property in the component metadata.

Example:

```
@Component({
  // Other values
  encapsulation: ViewEncapsulation.ShadowDom
})
```

### 5. Build

This example adds scripts to `package.json` to do this.

1. Created new `build:wc` script
1. Script uses `angular-cli` builds with two new flagsß

   - `--extraWebpackConfig webpack.extra.js`: to pull in external packages list
   - `--single-bundle true`: Output a single file instead of the usual 3/4
   - `--output-hashing none`: Remove the hash that gets appended to end of the filenames

1. Copy all dependency files using `copy-bundles.js`
1. Copy built Angular to `built-output`
