import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  if (!username || !email || !password || username.trim() === '' || email.trim() === '' || password.trim() === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(400, 'Email is already registered'));
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Save new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ success: true, message: "Signup successful" });
  } catch (err) {
    console.error("Error during signup:", err);
    next(err);
  }
};
