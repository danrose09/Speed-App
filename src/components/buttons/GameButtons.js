import React, { useState, useRef } from 'react'

export default function GameButtons(props) {


    return (
    <div className='container'>

        <div hidden={props.hasWon ? true : false} className='row start-button-row'>
        <div className='col-lg'>
    <button 
        onClick={props.dealCard}
        className='game-button'
        hidden={!props.hasStarted ? false : true}>Start
        </button>
        </div>

        </div>


    <div className='row'>

    

    <div hidden={props.hasWon ? true : false} className='col-sm-3'>
    <button className='game-button' 
    hidden={props.hasStarted ? false : true}
    onClick={props.generateNewPlayerHand}>Deal To Hand</button>
    </div>
    
    
    <div hidden={props.hasWon ? true : false} className='col-sm-3'>
    <button className='game-button' onClick={props.dealCard} hidden={props.isStuck ? false : true}>Deal To Stack</button>
    </div>
    
    
    <div hidden={props.hasWon ? true : false} className='col-sm-3'>
    <button className='game-button' onClick={props.giveDeckCards} hidden={props.needMoreCards ? false : true}>Deal Random Card</button>
    </div>
    
    
    <div className='col-sm-3'>
    <button className='game-button' onClick={props.resetGame} hidden={props.hasWon ? false : true}>Play Again</button>
    </div>
    </div>
    </div>
    )
}