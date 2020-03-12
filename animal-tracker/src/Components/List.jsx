import React from 'react';
// import React, { useState, useEffect } from 'react';
import '../index.css';

//map incoming data onto li elements
const List = () => {
    let data = [];
    fetch('/sightings')
    .then(res => {
        return res.json()
     })
     .then(res => {
         console.log('second res', res)
         for (let sighting of res) {
            // data.push(sighting);
           return <li>{sighting.nickname}</li>
                    }
        console.log(data)
    }
    )
    // data = data.map((sighting) => console.log('sighting', sighting))
    // console.log('mapped data', data)
return (
    <div>
        {/* {data.forEach(sighting =>{
            return <div>{sighting.common_name}</div>
        })} */}
        {data}
     </div>
)

     

}

export default List;