const Student = require('../models/student.js');

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.send(student);
  } catch (error) {
    console.log(error);
  }
};

const postStudent = async (req, res, next) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch(error) {
    console.log(error);
  }
};

module.exports = {
  getStudents,
  getStudent,
  postStudent
}