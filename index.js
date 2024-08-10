const express = require('express');
const colors = require('colors');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const userRoute = require('./user.route');
const swaggerDocument = require('./swagger-output.json');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello from root!',
    });
});

app.get('/hello', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello from path!',
    });
});

app.use('/api', userRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
    return res.status(404).json({
        error: 'Not Found',
    });
});

app.listen(port, function () {
    console.log(colors.green(`Server listening on http://localhost:${port}`));
}).on('error', function (err) {
    console.log(colors.red(err.message));
});
