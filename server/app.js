const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
dotenv.config();

const port  = process.env.PORT;

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
app.use(cors(corsOptions));

// Routes
const studentRoute = require('./routes/studentRoute.js');

// API's
app.use('/api/student', studentRoute);

//MongoDB Database Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch(error) {
    console.error('MongoDB Connection Error');
    process.exit(1);
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected to MongoDB');
})

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
})

connect();

app.listen(port, () => {
  console.log(`Connected to Port: ${port}`)
})