const express = require('express');
const path = require('path');
const helmet = require("helmet");
const fs = require('fs')
const topicDataStoreName = "topic-data"
let topicData = require(`./data/${topicDataStoreName}.json`)

const morgan = require('morgan')

const app = express();
app.use(helmet());
app.use(morgan('dev')) // Logging
app.use(express.json())

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Adds a topic. This is a HIGH security risk currently as there is no authentication
app.post('/api/addtopic', (req, res) => {
    console.log(req.body);
    const topic = req.body
    topicData.push({
        "id": Math.floor(Math.random() * Math.floor(20000)),
        "critical": 3,
        "name": topic.name,
        "description": "",
        "next": topic.next,
        "regexkey": [topic.regex], // NEEDS TO BE ARRAY
        "content": topic.content
    })
    updateLines()
    saveData()
    res.sendStatus(200)
})

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

const saveData = () => {
    let json = JSON.stringify(topicData);
    fs.writeFile(`./data/${topicDataStoreName}.json`, json, 'utf8', ()=> console.log("Saved"))
}


// Very costly function for larger data sets- should be used sparingly
// TODO: design conditions that this will trigger 
// TODO: Figure out O notation
const updateLines = () => {
    // Creates array of regex references ready for comparison
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

    // Takes a line and adds in links based on regex for each topic
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
    const createLines = (code) => {
        console.log(code);
        const allLines = code.data.split("\n")
        let lineNum = 0
        const lines = allLines.map(line => {
            const pos = lineNum
            lineNum++
            return ({
                linenumber: pos,
                line: line,
            })
        })
        return lines
    }

    // Cycle through loaded data:
    // Every Topic
    // Every Content in Topic where type=code
    // Every Line passed to createLinks()
    const newData = JSON.parse(JSON.stringify(topicData)).map(topic => {
        
        // DIRECTLY AFFECTS LOADED DATA, NEED TO CHANGE TO NOT DO THAT
        topic.content = topic.content.map(content => {
            if (content.type != "code") {
                return content
            }
            content.lines = createLines(content)
            let newLines = content.lines.map(line => {
                console.log(line.line);
                line = createLinks(line)
                return line
            })
            console.log(newLines);
            return content
        })
        return topic
    })

    // TODO: Add Validate Data function
    // TODO: Add Save Data function
    topicData = newData
}

updateLines() // Delete eventually, this is for testing purposes