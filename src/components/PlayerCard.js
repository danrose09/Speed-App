import React from 'react'


export default function PlayerCard(props) {

    return (
        <div id='playercardscontainer' className='container card-container'>
        
        <div className='row'>
        <div className='col-lg'>
        <div className='container-fluid'>
         <img onClick={props.playCard} className='player-card img-fluid' src={props.image}></img>
         </div>
         </div>
         </div>
         <button id={props.id} hidden='true' onClick={props.playCard} className='game-button'>Play Card {props.id}</button>
         </div>
    )
}