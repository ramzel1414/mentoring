import Student from '../models/student.js'

const getStudents = async (req, res) => {
  try {
    const student = await Student.find();
    res.send(student);
  } catch (error) {
    console.log(error)
  }
}

const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
    res.send(student);
  } catch (error) {
    console.log(error)
  }
}

const postStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(200).json(savedStudent);
  } catch (error) {
    console.log(error);
  }
};

const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(updatedStudent);
  } catch (error) {
    console.log(error)
  }
}

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id)
    res.status(200).json(`Student has been deleted`)
  } catch (error) {
    console.log(error)
  }
}
export { getStudents, getStudent, postStudent, updateStudent, deleteStudent };