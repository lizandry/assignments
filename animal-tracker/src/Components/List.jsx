import React from 'react';
// import React, { useState, useEffect } from 'react';
import '../index.css';

//map incoming data onto li elements
async function fetchData(url) {
    fetch(url)
        .then(res => res.json())
        .catch(error => `looks like there was an error`)
    }

const List = (props) => {
    
fetchData('/sightings')
.then(data => console.log('fetch data', data))

return (
    <div>test</div>
)


//     let holdingArr = [];
//     fetch('/sightings')
//     .then(res => {
//         return res.json()
//      })
//      .then(res => {
//          console.log('second res', res)
//          for (let sighting of res) {
//             // data.push(sighting);
//            return (
//            <span key={sighting.id}>
//                {sighting.common_name} - 
//                {sighting.nickname} - 
//                {sighting.ishealthy} - 
//                {sighting.location} - 
//                {sighting.sighter_email}
//                </span>
            
//             )}
        
//         // console.log(holdingArr)
//     }
//     )
//     // data = data.map((sighting) => console.log('sighting', sighting))
//     // console.log('mapped data', data)

// return (
//     <div>
//         {/* {data.forEach(sighting =>{
//             return <div>{sighting.common_name}</div>
//         })} */}
//         {holdingArr}
//      </div>
// )




}

export default List;