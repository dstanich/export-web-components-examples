# vanilla-web-component

## Overview

JavaScript supports components without the need for any framework like React, Angular, or Vue. This standard is called web component. [Most web browsers now support this](https://caniuse.com/#search=web%20component) or a subset of the spec and there are also [polyfills you can use](https://www.npmjs.com/search?q=%40webcomponents).

Web components have lifecycle hooks, attributes, slots/transclusion, properties, and other features just like you would expect from frameworks. [Documentation is here](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

## Example

Included example creates a win/loss web component that is re-used a number of times on the page. Demonstrated pieces of web components:

- Shadow DOM
- Attributes
- Attribute changed event
- Lifecycle hooks
  - Creation
  - Destroy
  - Move
  - Attribute changed
