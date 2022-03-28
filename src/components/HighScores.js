import React from 'react'

function HighScores(props) {

   const highScoreElements = (typeof props.backendApi.highScores === 'undefined') ? (
    <p>Loading...</p>) : (
        props.backendApi.highScores.map((score, i) => {
            return <h3 key={i}>{score}</h3>
        })
)
   

  return (
      <div className='row'>
    <div className='col-lg-12 highScores-container' hidden={props.hasWon ? false : true}>
    {highScoreElements} 
    </div>
    </div>
  )
}

export default HighScores