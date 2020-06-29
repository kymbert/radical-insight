const mongoose = require("mongoose");
const { Schema } = mongoose;

const MedicationSchema = new Schema({
  note: String,
  takenAsDirected: {
    type: Boolean,
    required: true
  }
});

module.exports = MedicationSchema;
