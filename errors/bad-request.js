const CustomErrorApi = require("./custom-error/custom-error");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends CustomErrorApi {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
