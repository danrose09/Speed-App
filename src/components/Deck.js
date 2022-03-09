import React, { useState } from 'react'
import deck from '../deck'

export default function Deck(props) {

    

    return (
        <div className='container card-container'>
        
       <div className='row'>
        <img className='card' src={props.image}></img>
        </div>
        
        </div>
    )
}