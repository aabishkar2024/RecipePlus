// Structure for a standard response object.
class ApiResponse {
    constructor(statusCode, message, data = null, error = null) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.error = error;
    }
}

module.exports = ApiResponse
