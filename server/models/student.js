const mongoose = require('mongoose');
const {Schema} = mongoose

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  hobby: {
    type: String,
  }
})

const studentModel = mongoose.model("student", studentSchema);
module.exports = studentModel;