const mongoose = require('mongoose');
const { Schema } = mongoose;
const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true}
  }
);

BookSchema.methods.toWeb = function toWeb() {
  const json = this.toJSON();
  json.id = this._id;
  return json;
};

// Ensure virtual fields are serialised.
BookSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

const Book = mongoose.model('book', BookSchema);
module.exports = Book;
