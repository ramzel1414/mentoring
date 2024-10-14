import express from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
app.use(express.json())

// CORS SETUP
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: false,
};

app.use(cors(corsOptions));

// Routes
import studentRoute from './routes/studentRoute.js'

// API's
app.use('/api/student', studentRoute);

const port = process.env.PORT

// Establishing Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB)
  } catch (error) {
    console.log(error);
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB')
})

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
})

app.listen(port, () => {
  connect();
  console.log(`Connected to PORT ${port}`);
})