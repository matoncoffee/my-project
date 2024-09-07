const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Create
router.post('/users', async (req, res) => {
  const { name, email, age } = req.body;
  const user =  new User({ name, email, age });
  try {
    await user.save();
    res.status(201).send(user);
  } catch(error) {
    res.status(400).send(error);
  }
});

// Read
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Update
router.patch('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try{
    await User.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
