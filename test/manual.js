var logger = require('../index');

// string arg
logger.log('log test');

// empty arg
logger.log();

// string arg
logger.info('info test');

// empty arg
logger.info();

// string arg
logger.warn('warn test');

// empty arg
logger.warn();

// string arg
logger.error('error test');

// empty arg
logger.error();

// return this
logger.log('log').info('info').warn('warn').error('error').log('end');

// return this
logger.log().info().warn().error().log();
