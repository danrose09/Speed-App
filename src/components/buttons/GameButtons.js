import React from 'react'

export default function GameButtons(props) {
    return (
    <div>
    <button className='game-button' onClick={props.generateNewPlayerHand}>Deal To Hand</button>
    <button className='game-button' onClick={props.dealCard} hidden={props.isStuck ? false : true}>Deal To Stack</button>
    <button className='game-button' onClick={props.giveDeckCards} hidden={props.needMoreCards ? false : true}>Deal Five To Stack</button>
    <button className='game-button' onClick={props.resetGame} hidden={props.hasWon ? false : true}>Play Again</button>
    </div>
    )
}