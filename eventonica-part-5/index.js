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



//
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//displays events that have been added to the website
app.get('/admin', (req, res) => {
    console.log(website.events);
    res.send(website.events);
});
//displays users that have been added to the website
app.get('/admin', (req, res) => {
    console.log(website.users);
    res.send(website.users);
});

app.get('/admin/:eventId', (req, res) => {
    console.log(req.params.eventId);
    //res.send(TODO);
});

//add event to database
app.post('/admin', (req, res) => {
    console.log(req.body.title);
    res.send(website.addEvent(req.body));
});

//TODO, will serve a different html file with a signup/login form
app.get('/signup', (req, res) => {
    //this is NOTHING, i copy+pasted it
    console.log(req.params.eventId);
    //res.send(TODO);
});

//add new user to database
app.post('/signup', (req, res) => {
    console.log(req.body.title);
    res.send(website.addUser(req.body));
})

//gotta look up how to incorporate my 'like' button functionality into this
app.get('/account', (req, res) => {
    //get granular with this one
    console.log(website.users);
    res.send(website.events);
});
app.post('/account', (req, res) => {
    console.log(req.body.title);
    res.send(website.addEvent(req.body));
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))