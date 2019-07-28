# Exporting React to web components

This folder is an example of one possible way to convert React components into web components. React does not have an oficial package to export to web comonents. The React opinion on web components can be [read here](https://reactjs.org/docs/web-components.html).

This example uses the `web-react-components` package to wrap the React component with a web component. This package has a specific syntax for how to accomplish this and can be read [at this link](https://github.com/ChristophP/web-react-components).

The [React documentation on web components](https://reactjs.org/docs/web-components.html) goes into some detail on how you would wrap React code in web components. There are several packages out there like [web-react-components](https://github.com/ChristophP/web-react-components), [react-web-component](https://github.com/spring-media/react-web-component) and [skatejs](https://github.com/skatejs/skatejs). Some are not well maintained and have some issues.

## Steps

### 1. Install dependencies

1. `npm install web-react-components --save`: This adds the wrapper function to wrap React components.
1. `npm install parcel --save-dev`: [Parcel](https://parceljs.org/) is a packaging tool to easily package what we need in a single file. It requires minimal config.

### 2. Handle CSS

The `web-react-components` package will wrap the component including a shadow DOM. The shadow DOM will shield anything inside of it from globally defined CSS.

The way React imports CSS files is at a global level, so we need to adjust the CSS strategy. For this example, change the imported CSS files to inlined styles.

1. Copy the contents of each imported `.css` file
1. Replace the import of the `.css` file with a variable containing the contents of the file.

   ```
   const styles = `
       .class-one {
           display: block;
           //
       }
   `;
   ```

1. In the JSX, add a line to include the styles variable.

   `<style type="text/css">{styles}</style>`

### 3. Handle images

When Parcel is run to bundle the files, the location of the imported images (if any) may not work as expected.

This can be handled in a number of ways, for this demo the import of the image is replaced with a base64 version of the image to inline it.

1. Remove `.png` imports
1. Create a new variable with the base64 encoded image.

   `const image = 'data:image/png;base64,<data-goes-here>'`

1. Replace the `src` of the image with the new variable.

   `<img src={image}>`

### 4. Wrap components

For each React component to wrap, do the following:

1. Import `register` function:

   `import { register } from 'web-react-components';`

1. Call `register` function.

   `register(REACT-COMPONENT, 'element-tag', ['prop1', 'prop2']);`

   - _REACT-COMPONENT_: Reference to the component.
   - _element-tag_: HTML tag to map the component to.
   - _prop1_, _prop2_: Props to observe / map to attributes
   - Details on syntax [on the website](https://github.com/ChristophP/web-react-components)

### 5. Create `.js` file to import each component

This `.js` file will be used to create a bundle file with Parcel. The file should contain imports for each compopnent we want to export.

In a production scenario, we may want to have separate bundles with the React runtime separate to reduce how much we load. For this example, we are loading all of them.

Example file:

    import './Title/Title';
    import './AddGrocery/AddGrocery';
    import './GroceryList/GroceryList';

### 6. Build

This example adds scripts to `package.json` to do this.

1. Created new `build:wc` script
1. Script calls `parcel build` and specifies the `.js` file that imports all components
1. Copies all built files to `built-output`
