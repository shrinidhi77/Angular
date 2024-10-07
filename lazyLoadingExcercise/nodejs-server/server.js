const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const registrationData = req.body;
  console.log('Server is hitted');
  // Save the data to a file (e.g., registrations.json)
  fs.appendFile('registrations.json', JSON.stringify(registrationData) + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error saving registration data' });
    } else {
      console.log('Registration data saved successfully');
      res.status(200).json({ message: 'Registration successful' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
