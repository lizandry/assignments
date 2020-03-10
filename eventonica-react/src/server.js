import { EventRecommender, User, Event } from './EventRecommender.js';
import path from 'path';
const port = 3000;
import express from 'express';
import compression from 'compression';
const app = express();
app.use(express.json());
app.use(compression());

app.use(express.static(path.join(__dirname + '/')));
app.set(path.join(__dirname + 'App.js'));
const website = new EventRecommender();



// WORKS, ONLY NECESSARY FOR /:eventId functionality right now  
app.get('/events', (req, res) => {
    console.log(req);
    console.log('/events get test', website.events);
    res.status(200).send(website.events);
});
//CURRENTLY GETTING THIS TO REDIRECT TO A BESPOKE EVENTS PAGE
app.get('/events/:eventId', (req, res) => {
    console.log('/eventId get test', req.params.eventId);
    res.status(200).send(req.params.eventId);
});
// NO LONGER NECESSARY
// app.post('/events', (req, res) => {
//     console.log('/events post test', req.body);
//     res.status(200).send(website.addEvent(res.body));
// });


// /users WORKS, from get to post to delete
app.get('/users', (req, res) => {
    website.getAllUsers()
    .then(data => {
        console.log('/users get test', data);
     res.status(200).send(`the first user in this array is ${data[0].username}, who responds to the name ${data[0].title}`);
    });
});
app.post('/users', (req, res) => {
    // console.log('/user post test', req.body); //-> user object
    res.status(200).send(website.addUser(req.body));
});
app.delete('/users', (req, res) => {
    res.status(200).send(website.deleteUser(req.body));
});

// THESE DON'T WORK, right this moment
// i didn't build my original JS with the idea of add and delete being separate functions
// i'll get around to fixing it later
app.get('/bookmarkedEvents', (req, res) => {
    //get granular with this one
    console.log('/account get test', website.users);
    res.status(200).send(website.users);
});
app.post('/bookmarkedEvents', (req, res) => {
    console.log('/account post test', res.body.id);
    // res.status(200).send(website.addEvent(res.body));
});
app.delete('/bookmarkedEvents', (req, res) => {
    console.log('/account delete test', res.body.id);
    // res.status(200).send(website.addEvent(res.body));
});



app.listen(port, () => console.log(`check out localhost, port ${port}!`));

// app.get('/express_backend', (req, res) => {
//     res.send(JSON.stringify({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }));
//   });