const express = require('express');
const lodash = require('lodash');
const app = express();

// Simulated vulnerable route
app.get('/user', (req, res) => {
    let userInput = req.query.name;
    let obj = {};
    lodash.set(obj, userInput, "Injected Value");
    res.send(`User input processed: ${JSON.stringify(obj)}`);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
