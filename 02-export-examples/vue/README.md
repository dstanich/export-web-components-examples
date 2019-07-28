# Exporting Vue to web components

This folder is an example of how to use the `vue-cli` and related packages to export Vue components as web components with minimal or no changes. This is an officially supported feature of the CLI tools and is extremely simple to do.

## Steps

### 1. Install @vue/cli-service-global

Necessary to get the feature enabled to export to web component.

1. `npm install @vue/cli-service-global --save-dev`

### 2. Run CLI to export

#### Export single component

`npx vue-cli-service build --target wc --name my-element [entry]`

- `--name my-element` is the element tag
- `[entry]` is the path to the `.vue` file

#### Export multiple components

`npx vue-cli-service build --target wc --name prefix './src/location/*.vue`

- `--name prefix` is the prefix to apply to each component element tag
- `./src/location/*.vue` wildcard path to all `.vue` files to export

### 3. Build

This example adds scripts to `package.json` to do this.

1. Builds all components in `./src/components` directory
1. Prefix is `vue-wc` so result will be like this: `<vue-wc-title>`
1. Copies Vue runtime as a dependency
