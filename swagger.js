const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Nodejs API',
        description: 'Description',
    },
    host: 'localhost:3000',
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
    require('./index.js'); // Your project's root file
});
