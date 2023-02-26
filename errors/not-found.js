const CustomErrorApi = require("./custom-error/custom-error");
const { StatusCodes } = require("http-status-codes");

class NotFound extends CustomErrorApi {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFound;
