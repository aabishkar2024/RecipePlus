const express = require('express');
const { handleSuccess, handleError } = require('./utils/responseHandler');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    try {
        handleSuccess(res, 'Hello, World!');
    } catch (error) {
        handleError(res, error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});