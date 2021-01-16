var JsonRespose = require("../response");
var Error404 = require("../errors/404");

const getObjects = (req, res, model, next, projection = "") => {
  return model
    .find({}, projection)
    .then(
      (items) => {
        return JsonRespose(res, items);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

const postObject = (req, res, model, next) => {
  return model
    .create(req.body)
    .then(
      (item) => {
        return JsonRespose(res, item);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

const getObject = (req, res, model, next, projection = "") => {
  return model
    .findById(req.params.id, projection)
    .then(
      (item) => {
        if (item !== null) {
          return JsonRespose(res, item);
        } else {
          return Error404(next);
        }
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

const deleteObject = (req, res, model, next) => {
  return model
    .findByIdAndDelete(req.params.id)
    .then(
      (result) => {
        return JsonRespose(res, result);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

const updateObject = (req, res, model, update, next) => {
  return model
    .findByIdAndUpdate(req.params.id, update, { new: true })
    .then(
      (item) => {
        return JsonRespose(res, item);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

module.exports = {
  getObjects,
  postObject,
  getObject,
  deleteObject,
  updateObject,
};
