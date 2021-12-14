# Cypress Forced Colors

> ⚠️ For full forced color emulation, the browser you are testing on must be Chromium > 98.

This library contains helper cypress methods to enable and disable forced colors emulation in chromium borwsers
through the chrome devtools protocol.

The devtools APIs used by this library can be found [on the official chrome devtools protocol docs](https://chromedevtools.github.io/devtools-protocol/tot/Emulation/#method-setEmulatedMedia).

## Why

Forced colors is a browser mode where color CSS properties are overriden. You can find a full list of affected properties on the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors). This browser feature is leveraged notably by Windows High Contrast Mode, which will override all colors with system colors to provide more contrast for users that need it.

Chrome devtools has [media emulation as a stable feature](https://chromedevtools.github.io/devtools-protocol/tot/Emulation/#method-setEmulatedMedia) and in version 98, supports full emulation of forced colors. This plugin can be used to have an easy way of testing acessible high contrast designs without needing a windows machine or enabling a windows os feature.

## Installation

```
npm install --save-dev cypress-forced-colors
```

## Setup

Add the following code to your cypress support file.

```ts
// cypress/support/index.js
// cypress/support/index.ts

import 'cypress-forced-colors';
```

## Usage

Once the custom commands are registered with cypress you can enable or disable forced color mode in your tests.

```ts
it('Test with forced colors mode', () => {
  cy.enableForcedColors('dark');

  // your test code...

  cy.disableForcedColors();
})
```

You can also use this for test suites

```ts
describe('Forced color tests', () => {
  before(() => {
    cy.enableForcedColors('dark');
  });

  after(() => {
    cy.disableForcedColors();
  })
})
```

## Try it out!

> ⚠️ Make sure you use a Chromium browser with version > 98

You can try out this feature from this repository. Simply clone the repo and run the following commands to open cypress
and test to see the example test suite.

```
npm install
npm start
```
