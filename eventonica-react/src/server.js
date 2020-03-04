const { EventRecommender, User, Event } = require('./EventRecommender.js');
const express = require('express');
const path = require('path');
const app = express();
const router = express()();
const middleware = require('react-express-middleware');
const port = 3000;
app.use(express.json());
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// app.use(bodyParser.json())
module.exports = function routes (router) {
	// Isomorphic react render middleware
	router.use(middleware());

	router.get('/', require('./index.js'));
// 	router.get('/foo', require('./handlers/foo.jsx'));
// 	router.get('/bar', require('./handlers/bar.jsx'));
};

// router.use(middleware({
//     element: document.getElementById('app'), // The element on the front-end to render into, can be a selector (string) or function
//     renderMethod: ReactDOM.render, // or ReactDOMServer.renderToString on the server
//     template: 'index',  // template passed to express' render
//     key: 'content'
//   }));

//   router.get('/', function (req, res) {
    
//     );
   
//     res.renderReactComponent(RenderComponent);
//   });


// app.use(express.static(path.join(__dirname + "/")));
// const website = new EventRecommender();

// app.set(path.join(__dirname + 'App.js'));

// //
// //something's working. not the right thing tho
// app.get('/', (req, res) => {
//     console.log("work?")
//     // res.setHeader('Content-Type', 'text/html');
//     res.render()
//     // res.sendFile(path.join(__dirname + 'index.html'));
// });
// //WORKS
// app.get('/events', (req, res) => {
//     console.log("/events get test", website.events)
//     res.status(200).send(website.events)
// });
// //WORKS
// app.get('/events/:eventId', (req, res) => {
//     console.log("/eventId get test", req.params.eventId);
//     // res.status(200).send(req.params.eventId);
// });
// //WORKS
// //add event to database
// app.post('/events', (req, res) => {
//     console.log("/events post test", req.body);
//     res.status(200).send(website.addEvent(req.body));
// });
// //WORKS
// app.get('/user', (req, res) => {
//     website.getAllUsers().then(data => {
//         console.log("/user get test", data);
//         res.status(200).send(`the first user in this array is ${data[0].username}, who responds to the name ${data[0].title}`);
//     })
// });
// //DOESN'T WORK
// //add new user to database
// app.post('/user', (req, res) => {

//     res.status(200).send(website.addUser(req.body))
// });
// //DOESN'T WORK
// app.get('/deleteUser', (req, res) => {
//     res.status(200).send(website.deleteUser(req.body))
// });
// // WORKS
// //gotta look up how to incorporate my 'like' button functionality into this
// app.get('/addEvent', (req, res) => {
//     //get granular with this one
//     console.log("/account get test", website.users);
//     res.status(200).send(website.events);
// });
// //DOESN'T WORK
// app.post('/addEvent', (req, res) => {
//     console.log("/account post test", req.body.title);
//     res.status(200).send(website.addEvent(req.body));
// });


app.listen(port, () => console.log(`check out localhost, port ${port}!`))