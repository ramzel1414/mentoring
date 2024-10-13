const express = require('express');
const router = express.Router();
const { getStudents, getStudent, postStudent } = require('../controllers/studentController.js');

// GET
router.get('/', getStudents);

//GET SPECIFIC
router.get('/:id', getStudent);

//POST
router.post('/', postStudent);

module.exports = router;



// CLIENT REQUEST SIMULATION POSTMAN ALTERNATIVE

//sending request / Post method / adding student
const addStudent = async (student) => {
  const response = await fetch('http://localhost:8000/api/student', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(student), // Send the post object as JSON
  });
  
  console.log(await response.json()); // Parse the response data as JSON


};
addStudent({ name: 'rambo afd', gender: 'Male', section: 'BSIT 4a'});   // invoking the addPost function
