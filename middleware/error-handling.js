const ErrorHandling = (err, req, res, next) => {
  res.status(err.statusCode).json({
    status: err.statusCode,
    msg: err.message,
  });
};

module.exports = ErrorHandling;
