const express = require('express');
const path = require('path');
const app = express()
const port = 5000

import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './Components/App';

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// app.use(bodyParser.json())
// app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/user', (req, res) => {
    res.send("hello user");
});

app.listen(port, () => console.log(`app is running on port ${port}!`));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));