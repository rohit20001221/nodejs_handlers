module.exports = (next, message = "404 Not Found") => {
  var err = new Error(message);
  err.status = 404;
  return next(err);
};
