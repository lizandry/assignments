const { EventRecommender, User, Event } = require('./EventRecommender.js');
const express = require('express');
const path = require('path');
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/"));
const website = new EventRecommender();




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/events', (req, res) => {
    console.log(website.events);
    res.send(website.events);
});

app.get('/event/:eventId', (req, res) => {
    console.log(req.params.eventId);
    //res.send(TODO);
});

//add event to database
app.post('/events', (req, res) => {
    console.log(req.body.title);
    res.send(website.addEvent(req.body));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))