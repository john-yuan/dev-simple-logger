var TimePoint = require('timepoint');
var colors = require('colors');
var logger = {};

var log = console.log.bind(console);
var warn = console.warn.bind(console);
var error = console.error.bind(console);

/**
 * Print the given message
 *
 * @param {string} [message] The message to print
 */
logger.log = function (message) {
    log(message || '');
    return this;
};

/**
 * Print the info message with the current time in green color
 *
 * @param {string} [message] The message to print
 */
logger.info = function (message) {
    var time = TimePoint.parse().toString();
    log(colors.green('[' + time + '] ' + (message || '')));
    return this;
};


/**
 * Print the warning message with the current time in yellow color
 *
 * @param {string} [message] The message to print
 */
logger.warn = function (message) {
    var time = TimePoint.parse().toString();
    warn(colors.yellow('[' + time + '] ' + (message || '')));
    return this;
};

/**
 * Print the error message in red color. Empty lines will be prepended and appended.
 *
 * @param {string} [message] The message to print
 */
logger.error = function (message) {
    log('');
    error(colors.red(message || ''));
    log('');
    return this;
};

module.exports = logger;
