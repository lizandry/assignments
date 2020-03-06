
// import App from '.src/Components/App';
// const ReactDOMServer = require('react-dom/server');
// import ReactDOMServer from 'react-dom/server';
// const myCom = require('./src/Components/'); 

import express from "express";
const router = express.Router();
router.get("/", async (req, res) => {
res.status(201).send("Hello World");
});

// const reactDOM = require('react-dom/server');
router.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });
// router.get('/', function (req, res) {
//   var mainFile = require('.src/Components/App.js');
//   var output = reactDOM.renderToString(react.createFactory(mainFile)({
//     data: yourInitialData
//   }));
//   res.send(output);
// });

// router.get('/', function (req, res) {
//     console.log('help')
//     var mainFile = require('src/Components/App');
//     var output = ReactDOMServer.renderToString(react.createFactory(mainFile)({
//     //   data: 
//     }));
//     console.log(data)
//     res.send(output);
//   });
  export default router;