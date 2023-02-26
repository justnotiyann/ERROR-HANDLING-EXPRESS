const CustomErrorApi = require("./custom-error/custom-error");
const { StatusCodes } = require("http-status-codes");

class Unauthorized extends CustomErrorApi {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = Unauthorized;
