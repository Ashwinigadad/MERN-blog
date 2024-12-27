import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS middleware
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

console.log(process.env.MONGO);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

const app = express();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from frontend
  credentials: true,              // Allow credentials like cookies
}));

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

// Routes
app.use('/api', userRoutes);
app.use('/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || 'Internal server error';

  console.error("Error details:", err); // Log the error details
  res.status(statuscode).json({
    success: false,
    statuscode,
    message,
  });
});
