const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection string
const dbUri = "mongodb+srv://IQRA_ZAFAR:1234@cluster0.kwxc3ml.mongodb.net/";
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.status(201).send('User created');
  console.log("User added");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
