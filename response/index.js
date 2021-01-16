module.exports = (res, data) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  return res.json(data);
};
