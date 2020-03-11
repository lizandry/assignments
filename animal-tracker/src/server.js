// import path from 'path';
const port = 3000;
import express from 'express';
// import compression from 'compression';
const app = express();
app.use(express.json());
import pgp from 'pg-promise'
const db = pgp('postgres://postgres@localhost:5432/animal-tracker')


app.get('/', (req, res) =>
  res.render('index', {
    title: 'animal tracker'
  })
);

app.get('/sightings', (req, res) => {
    db.any(`SELECT * FROM sightings`)
    .then(data => {
        console.log('/sightings get test', data);
     res.status(200).send(data);
    }).catch(function(error) {
        res.send(error);
      });
});
app.post('/sightings', (req, res) => {
    db.one('INSERT INTO sightings(animal_id, location, healthy, sighter_email) VALUES($1, $2, $3, $4) RETURNING sighter_email', [req.body.animal_id, req.body.location, req.body.healthy, req.body.sighter_email])
    .then(data=> {
        res.status(200).send(data);
    }).catch(function(error) {
        res.send(error);
      });
    
});



app.listen(port, () => console.log(`check out localhost, port ${port}!`));