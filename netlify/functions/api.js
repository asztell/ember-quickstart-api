var serverless = require('serverless-http');
var app = require('../../app');
console.log('app', app);
// const handler = serverless(app);

module.exports.handler = serverless(app);
