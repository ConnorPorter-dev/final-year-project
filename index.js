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
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

// Very costly function for larger data sets- should be used sparingly
// TODO: design conditions that this will trigger 
// TODO: Figure out O notation
const updateLines = () => {
    const newRegArr = () => {
        let arr = []
        topicData.map(topic => {
            if (topic.regexkey.length > 0) {
                arr.push({
                    "regexkey": topic.regexkey,
                    "name": topic.name,
                    "id": topic.id
                })
            }
        })
        return arr
    }
    const regexArray = newRegArr()

    const createLinks = (line) => {
        line.links = []
        regexArray.map(topic => {
            topic.regexkey.map(regexStr => {
                exp = new RegExp(regexStr)
                if (exp.test(line.line)) {
                    line.links.push({
                        "name": topic.name,
                        "id": topic.id
                    })
                }
            })
        })
        return line
    }

    // Cycle through loaded data:
    // Every Topic
    // Every Content in Topic where type=code
    // Every Line in Code Content Lines[]
    const newData = topicData.map(topic => {
        topic.content = topic.content.map(content => {
            if (content.type != "code") {
                return content
            }
            let newLines = content.lines.map(line => {
                console.log(line.line);
                line = createLinks(line)
                return line
                // Pass every line to new function that processes line and then returns with new line that includes new line.links
            })
            console.log(newLines);
            return content
        })
        return topic
    })

    

    //Save Data function
}

updateLines()