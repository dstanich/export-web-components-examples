// Based on ngx-build-plus copy-bundles.js
// https://github.com/manfredsteyer/ngx-build-plus/blob/master/sample/copy-bundles.js
//
// Copy UMD or other dependencies from node_modules to build output.

const copy = require('copy');

console.log('Copy dependency bundles ...');
const dest = 'dist/groceries/bundles';

copy(
  'node_modules/@webcomponents/custom-elements/src/native-shim.js',
  dest,
  { srcBase: 'node_modules/@webcomponents/custom-elements/src' },
  _ => {}
);
copy(
  'node_modules/zone.js/dist/zone.min.js',
  dest,
  { srcBase: 'node_modules/zone.js/dist' },
  _ => {}
);
copy(
  'node_modules/rxjs/bundles/rxjs.umd.min.js',
  dest,
  { srcBase: 'node_modules/rxjs/bundles' },
  _ => {}
);
copy(
  'node_modules/@angular/core/bundles/core.umd.js',
  dest,
  { srcBase: 'node_modules/@angular/core/bundles' },
  _ => {}
);
copy(
  'node_modules/@angular/common/bundles/common.umd.js',
  dest,
  { srcBase: 'node_modules/@angular/common/bundles' },
  _ => {}
);
copy(
  'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
  dest,
  { srcBase: 'node_modules/@angular/platform-browser/bundles' },
  _ => {}
);
copy(
  'node_modules/@angular/elements/bundles/elements.umd.js',
  dest,
  { srcBase: 'node_modules/@angular/elements/bundles' },
  _ => {}
);
