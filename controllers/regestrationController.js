// controllers/regestrationController.js
const Regestration = require('../models/regestration');

const createRegestration = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await Regestration.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    const newUser = new Regestration({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createRegestration,
};
