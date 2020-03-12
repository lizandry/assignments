// import path from 'path';
const port = 3000;
// import express from 'express';
const express = require('express');
// import compression from 'compression';
const app = express();
app.use(express.json());
const pgp = require('pg-promise')
// import pgp from 'pg-promise'
const db = pgp('postgres://postgres@localhost:5432/animal-tracker')


app.get('/', (req, res) =>
  res.render('index', {
    title: 'animal tracker'
  })
);

app.get('/sightings', (req, res) => {
    // db.any(`SELECT * FROM sightings`)
    db.any('SELECT individuals.id, individuals.species, sightings.common_name, individuals.nickname, sightings.location, sightings.healthy, sightings.sighter_email, sightings.record_timestamp FROM individuals INNER JOIN sightings ON individuals.id = sightings.animal_id')
    .then(data => {
        console.log('/sightings get test', data);
     res.status(200).send(data);
    }).catch(function(error) {
        res.send(error);
      });
});
// Show a list of all sightings, including the nickname of the individual sighted at each one (using a JOIN query).
// Form to add a new sighting record
app.post('/sightings', (req, res) => {
    db.one('INSERT INTO sightings(common_name, location, healthy, sighter_email) VALUES($1, $2, $3, $4) RETURNING sighter_email', [req.body.common_name, req.body.location, req.body.healthy, req.body.sighter_email])
    .then(data=> {
        res.status(200).send(data);
    }).catch(function(error) {
        res.send(error);
      });
    
});



app.listen(port, () => console.log(`check out localhost, port ${port}!`));