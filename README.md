# Simple Logger

A simple logger that write log to the console with time and colors.

## Install

This module is published to [NPM][NPM], you can install it with the following command:

[NPM]: https://www.npmjs.com/package/@john-yuan/dev-simple-logger

```bash
npm i @john-yuan/dev-simple-logger
```

## API

```js
/**
 * Like console.log(), no color and time will be applied
 *
 * @param {string} [message]
 * @returns {this}
 */
logger.log(message);

/**
 * Print the info message with the current time in green color
 *
 * @param {string} [message]
 * @returns {this}
 */
logger.info(message);

/**
 * Print the warning message with the current time in yellow color
 *
 * @param {string} [message]
 * @returns {this}
 */
logger.warn(message);

/**
 * Print the error message in red color. Empty lines will be prepended and appended.
 *
 * @param {string} [message]
 * @returns {this}
 */
logger.error(message);
```
