const ObjectId = require('mongodb').ObjectID;
const Book = require('../models/book');
const {
  ResponseError,
  ResponseSuccess,
} = require('../services/util.service');

const get = function get(req, res) {

  Book.find({}, function(err, data) {
    if (err) ResponseError(res, err.message);
    return ResponseSuccess(res, { data: data });
  })
};

module.exports.get = get;

const create = function create(req, res) {
  const { body } = req;
  Book.create(body, function(err, data) {
    if (err) ResponseError(res, err.message);
    
    return ResponseSuccess(res, { data: data });
  })
};
module.exports.create = create;

const remove = function remove(req, res) {
  const { id } = req.params;
  Book.findByIdAndDelete(new ObjectId(id), function(err, data) {
    if (err) ResponseError(res, err.message);
    
    return ResponseSuccess(res, { data: data });
  })
};
module.exports.remove = remove;

const getCategory = function getCategory(req, res) {
  const data = [
    { id: "1", name: 'Drama'},
    { id: "2", name: 'Comedy'},
    { id: "3", name: 'Sport'},
  ]
  return ResponseSuccess(res, { data: data});
}
module.exports.getCategory = getCategory;
