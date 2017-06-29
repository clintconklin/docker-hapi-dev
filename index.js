'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ 'port': 3000, 'host': 'localhost' });

server.route({
    'method': 'GET',
    'path': '/',
    'handler': function (request, reply) {
		console.log('request.info.host -> ' + request.info.host);
        reply('<h1>This Is A Reverse Proxy Situation</h1><p>Greetings. This page is served from node via a reverse-proxied apache.</p>');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
