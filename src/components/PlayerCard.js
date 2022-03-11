import React from 'react'

export default function PlayerCard(props) {
    return (
        <div className='container card-container'>
        
        <div className='row'>
        <div className='col-lg'>
        <div className='container-fluid'>
         <img onClick={props.playCard} className='card img-fluid' src={props.image}></img>
         </div>
         </div>
         </div>
         </div>
    )
}