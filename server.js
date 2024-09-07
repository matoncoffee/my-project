const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

const uri = "mongodb://localhost:27017/exemplodb"

// Conect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error', err));

// Middleware 
app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running: PORT ${PORT}`);
});
