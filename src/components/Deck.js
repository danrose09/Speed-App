import React, { useState } from 'react'
import deck from '../deck'

export default function Deck(props) {

    

    return (
        <div hidden={props.hasStarted ? false : true} className='container card-container'>
        
       <div className='row deck-row'>
        <img className='card' src={props.image}></img>
        </div>
        
        </div>
    )
}