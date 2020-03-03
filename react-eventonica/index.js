const { EventRecommender, User, Event } = require('./Components/EventRecommender.js');
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
app.use(express.json());
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// app.use(bodyParser.json())
app.use(express.static(path.join(__dirname + "/")));
const website = new EventRecommender();


// JENN'S ATTEMPT TO GET REACT PULLED IN

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// const React = require('react');
// const ReactDom = require('react-dom');



//
//something's working. not the right thing tho
app.get('/', (req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname + '/Components/App.jsx'));
    // res.sendFile(path.join(__dirname + 'index.html'));
});
//WORKS
app.get('/events', (req, res) => {
    console.log("/events get test", website.events)
    res.status(200).send(website.events)
});
//WORKS
app.get('/events/:eventId', (req, res) => {
    console.log("/eventId get test", req.params.eventId);
    // res.status(200).send(req.params.eventId);
});
//WORKS
//add event to database
app.post('/events', (req, res) => {
    console.log("/events post test", req.body);
    res.status(200).send(website.addEvent(req.body));
});
//WORKS
app.get('/user', (req, res) => {
    website.getAllUsers().then(data => {
        console.log("/user get test", data);
        res.status(200).send(`the first user in this array is ${data[0].username}, who responds to the name ${data[0].title}`);
    })
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


app.listen(port, () => console.log(`check out localhost, port ${port}!`))