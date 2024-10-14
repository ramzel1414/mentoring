import express from 'express'
import { getStudents, getStudent, postStudent, updateStudent, deleteStudent } from '../controllers/studentController.js'

const router = express.Router();

router.get('/', getStudents);

router.get('/:id', getStudent);

router.post('/', postStudent);

router.put('/:id', updateStudent);

router.delete('/:id', deleteStudent);

export default router;

// CLIENT REQUEST SIMULATION POSTMAN ALTERNATIVE

//sending request / Post method / adding student
// const addStudent = async (student) => {
//   const response = await fetch('http://localhost:8000/api/student', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(student), // Send the post object as JSON
//   });
  
//   console.log(await response.json()); // Parse the response data as JSON

// };
// addStudent({ name: 'rambo afd', gender: 'Male', section: 'BSIT 4a'});   // invoking the addPost function
