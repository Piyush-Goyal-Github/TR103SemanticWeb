const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    console.log(`Received data: Name - ${name}, Email - ${email}`);
    res.json({ message: 'Data received successfully', data: req.body });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
