// import path from 'path';
const port = 3005;
// import express from 'express';
const express = require('express');
// import compression from 'compression';
const app = express();
app.use(express.json());
const pgp = require('pg-promise')();
// import pgp from 'pg-promise'
const db = pgp('postgres://postgres@localhost:5432/animal-tracker')


app.get('/sightings', (req, res) => {
    db.any('SELECT individuals.id, individuals.species, sightings.common_name, individuals.nickname, sightings.location, sightings.ishealthy, sightings.sighter_email, sightings.record_timestamp FROM individuals INNER JOIN sightings ON individuals.id = sightings.animal_id')
    .then(data => {
     res.status(200).send(data);
    }).catch(function(error) {
        res.send(error);
      });
});
// Show a list of all sightings, including the nickname of the individual sighted at each one (using a JOIN query).
// Form to add a new sighting record
app.post('/sightings', (req, res) => {
    const sighting = {
        common_name: req.body.common_name,
        location: req.body.location,
        ishealthy: req.body.ishealthy,
        sighter_email: req.body.sighter_email
      };

    db.one('INSERT INTO sightings(common_name, location, ishealthy, sighter_email) VALUES($1, $2, $3, $4) RETURNING sighter_email', [sighting.common_name, sighting.location, sighting.ishealthy, sighting.sighter_email])
    .then(data=> {
        console.log('is this anything?', sighting)
        console.log('/sightings post test', data)
        
        // res.status(200).send(req.body);
    }).catch(function(error) {
        res.send(error);
      });
    
});



app.listen(port, () => console.log(`check out localhost, port ${port}!`));