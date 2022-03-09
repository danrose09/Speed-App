import React from 'react'


export default function StartGame(props) {
    return (
        <button 
        onClick={props.dealCard} 
        className='game-button'
        hidden={props.fullDeck.length < 52 ? true : false}>Start</button>
    )
} 