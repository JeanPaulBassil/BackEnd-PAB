const jwt = require('jsonwebtoken');
const { Admin } = require('../models');
const env = require('dotenv').config().parsed


const secretKey = env.SECRET_KEY; 

exports.register = async (req, res) => {
  console.log("Here")
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json({ message: 'Admin registered successfully', admin });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isValidPassword = await admin.isValidPassword(password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: admin.id }, secretKey);
    res.json({ message: 'Logged in successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
