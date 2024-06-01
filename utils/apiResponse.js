class ApiResponse {
    constructor(status, statusCode, message, data = null, error = null) {
        this.status = status;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.error = error;
    }
}

module.exports = ApiResponse
