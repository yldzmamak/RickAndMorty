// netlify/functions/json-server.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const request = JSON.parse(event.body);
  const LOGIN_API_ENDPOINT = `https://64c246a73d697400086cf332--fastidious-bombolone-a9ae5a.netlify.app/.netlify/functions/json-server/users?username=${request.CLIENT_USERNAME}&password=${request.CLIENT_PASSWORD}`;

  try {
    const response = await fetch(LOGIN_API_ENDPOINT, {
      headers: {
        'Access-Control-Allow-Origin': '64c246a73d697400086cf332--fastidious-bombolone-a9ae5a.netlify.app',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: 'Login failed' }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error' }),
    };
  }
};

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('path/to/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

exports.handler = server.createHandler({
  path: '/.netlify/functions/json-server',
});
