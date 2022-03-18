import React, { useState } from 'react'

export default function PlayerCard(props) {

    const [key, setKey] = useState('')

    function handleKey(event) {
        setKey(event.key)
        if (key === 'q') {
            console.log(key)
        }
          
    }

    return (
        <div className='container card-container'>
        
        <div className='row'>
        <div className='col-lg'>
        <div className='container-fluid'>
         <img onClick={props.playCard} className='card img-fluid' src={props.image}></img>
         </div>
         </div>
         </div>
         <button id={props.id} className='game-button'>Play Card {props.id}</button>
         <input type='text' hidden={true} onChange={handleKey}></input>
         </div>
    )
}