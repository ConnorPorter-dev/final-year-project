const express = require('express');
const path = require('path');
const helmet = require("helmet");
const topicData = require('./new-data-structure.json')

const morgan = require('morgan')

const app = express();
app.use(helmet());
app.use(morgan('dev'))

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Obtain an topic by topic ID
app.get('/api/topic/:uid', (req, res) => {
    res.json(topicData.find(topic => topic.id == req.params.uid))
})

// Obtain all data from the server in one request 
app.get('/api/getData', (req, res) => {
    console.log(topicData);
    res.json(topicData)
    console.log("Test Data Sent");
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);