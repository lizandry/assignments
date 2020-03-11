// const pgp = require('pg-promise')()
import pgp from 'pg-promise'
const db = pgp('postgres://postgres@localhost:5432/animal-tracker')

class Tracker {
    constructor()   {
        
    }
getAll(table) {
    return db.any(`SELECT * FROM ${table}`)
        .then(data => {
            // console.log('inside getAllUsers function', data);
            return data;
        });
}
addSighting(params) {
    db.one('INSERT INTO sightings(animal_id, location, healthy, sighter_email) VALUES($1, $2, $3, $4) RETURNING sighter_email', [params.animal_id, params.location, params.healthy, params.sighter_email])
        .then(data => {
            console.log(`sighting by ${data.sighter_email} added to database`);
            return data;
        });
}
}
export default Tracker;