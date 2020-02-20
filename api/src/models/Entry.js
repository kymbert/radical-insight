const mongoose = require("mongoose");
const { Schema } = mongoose;

const EntrySchema = new Schema({
  createdOn: {
    type: Date,
    required: true,
    default: Date.now()
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  modifiedOn: {
    type: Date,
    required: true,
    default: Date.now()
  },
  note: String,
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  tags: [String]
});

module.exports = EntrySchema;
