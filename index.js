'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ 'port': 3000, 'host': 'localhost' });

server.route({
    'method': 'GET',
    'path': '/',
    'handler': function (request, reply) {
        reply('<h1>Hi from node</h1><p>Reverse-proxied from apache, and oh btw THRU FRICKIN\' DOCKER YO!!!</p>');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
