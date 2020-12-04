const express = require('express');
const path = require('path');
const helmet = require("helmet");
const testData = require('./data-structure.json')
const morgan = require('morgan')

const app = express();
app.use(helmet());
app.use(morgan('dev'))

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/topic/:uid', (req, res) => {
    res.json(testData.filter(topic => topic.id == req.params.uid)[0])
})

app.get('/api/getData', (req, res) => {
    console.log(testData);
    res.json(testData)
    console.log("Test Data Sent");
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);