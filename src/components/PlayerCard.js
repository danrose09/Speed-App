import React from 'react'

export default function PlayerCard(props) {
    return (
        <div className='container card-container'>
        
        <div className='row'>
         <img onClick={props.playCard} className='card' src={props.image}></img>
         </div>
         
         </div>
    )
}