const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs'); // read files

// look in this folder for file
app.use(express.static(path.join(__dirname)));

// reads the JSON file and sends the data.
app.get('/api/projects', (req, res) => {
    // Read the projects.json file
    const rawData = fs.readFileSync('projects.json');
    const projects = JSON.parse(rawData);
    
    // send the data back to the browser
    res.json(projects);
});

// start the Server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});