const express = require('express');
const { handleSuccess, handleError } = require('./utils/responseHandler');
const recipeRoutes = require('./routes/recipeRoute');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    try {
        handleSuccess(res, 'Hello, World!');
    } catch (error) {
        handleError(res, error);
    }
});

app.use('/api', recipeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});