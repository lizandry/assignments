const { EventRecommender, User, Event } = require('./EventRecommender.js');
const express = require('express');
const path = require('path');
const pgp = require('pg-promise')
    // const db = pgp('postgres://liz@localhost:5432/eventonica')
const db = pgp('postgres://example@localhost:5432/eventonica')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/"));
const website = new EventRecommender();

// db.one('SELECT $1 FROM $2', [id, users])

// db.one('INSERT INTO users (name) values ($1) RETURNING id, name', [req.body.name])
// .then(data => {
//     # on success, return the user data
//     res.send(data)
// })
// .catch(function(error) {
//     # on failure, send a generic 500 status
//     res.sendStatus(500)
// });


//WORKS
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname + '/index.html'));
});
//WORKS
app.get('/events', (req, res) => {
    console.log("/events get test", website.events)
    res.status(200).send(website.events)
});
//WORKS
app.get('/events/:eventId', (req, res) => {
    console.log("/eventId get test", req.params.eventId);
    res.status(200).send(req.params.eventId);
});
//WORKS
//add event to database
app.post('/events', (req, res) => {
    console.log("/events post test", req.body);
    res.status(200).send(website.addEvent(req.body));
});
//WORKS
app.get('/user', (req, res) => {
    res.status(200).send("user page")
});
//DOESN'T WORK
//add new user to database
app.post('/user', (req, res) => {
    res.status(200).send(website.addUser(req.body))
});
//DOESN'T WORK
app.get('/deleteUser', (req, res) => {
    res.status(200).send(website.deleteUser(req.body))
});
// WORKS
//gotta look up how to incorporate my 'like' button functionality into this
app.get('/addEvent', (req, res) => {
    //get granular with this one
    console.log("/account get test", website.users);
    res.status(200).send(website.events);
});
//DOESN'T WORK
app.post('/addEvent', (req, res) => {
    console.log("/account post test", req.body.title);
    res.status(200).send(website.addEvent(req.body));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))