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

app.get('/express_backend', (req, res) => {
    res.send(JSON.stringify({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }));
  });
// //
// //something's working. not the right thing tho
// app.get('/', (req, res) => {
//     console.log('work?')
//     // res.setHeader('Content-Type', 'text/html');
//     res.render()
// res.sendFile(path.join(__dirname + 'index.js'));
// });
// //WORKS
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
// //WORKS
app.get('/user', (req, res) => {
    website.getAllUsers().then(data => {
        res.status(200).send(`the first user in this array is ${data[0].username}, who responds to the name ${data[0].title}`);
    });
});
app.post('/user', (req, res) => {
    // console.log('/user post test', req.body); //-> user object
    res.status(200).send(website.addUser(req.body));
});
// make delete button next
app.delete('/user', (req, res) => {
    res.status(200).send(website.deleteUser(req.body));
});
// // WORKS
// //gotta look up how to incorporate my 'like' button functionality into this
app.get('/addEvent', (req, res) => {
    //get granular with this one
    console.log('/account get test', website.users);
    res.status(200).send(website.events);
});
// //DOESN'T WORK
app.post('/addEvent', (req, res) => {
    console.log('/account post test', res.body.title);
    res.status(200).send(website.addEvent(res.body));
});


app.listen(port, () => console.log(`check out localhost, port ${port}!`))