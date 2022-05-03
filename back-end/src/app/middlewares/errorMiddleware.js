const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  if (err.code && err.status) {
    return res.status(err.status).json({ error: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: err.message,
    });
};
