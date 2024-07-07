const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let dataStore = [];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST request to add data
app.post('/submit', (req, res) => {
    const newData = req.body;
    dataStore.push(newData);
    res.status(201).json({ message: 'Data received successfully', data: newData });
});

// GET request to retrieve all data
app.get('/submit', (req, res) => {
    res.status(200).json({ message: 'Data retrieved successfully', data: dataStore });
});

// PUT request to update data by id
app.put('/submit/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    let index = dataStore.findIndex(item => item.id == id);

    if (index !== -1) {
        dataStore[index] = updatedData;
        res.status(200).json({ message: 'Data updated successfully', data: updatedData });
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
