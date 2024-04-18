var serverless = require('serverless-http');
var app = require('./app');

const handler = serverless(app);

module.exports = handler;