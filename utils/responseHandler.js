const ApiResponse = require('./apiResponse');

const handleSuccess = (res, data) => {
    const response = new ApiResponse(200, 'Request was successful', data);
    res.status(200).json(response);
};

const handleError = (res, error) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'An error occurred';
    const response = new ApiResponse(statusCode, message, null, error);

    res.status(statusCode).json(response);
};

module.exports = {
    handleSuccess,
    handleError
};