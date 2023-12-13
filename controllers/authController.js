// controllers/authController.js
const Regestration = require('../models/regestration');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Regestration.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const isPasswordValid = (password=== user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

      const { _id, firstName, lastName, email:userEmail } = user;
    res.status(200).json({ 
      message: 'Login successful.', 
      user: { _id, firstName, lastName, userEmail } 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
};
