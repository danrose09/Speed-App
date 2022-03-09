import React from 'react'

export default function Deal(props) {
    return (
    <div className='button-container'>
    <div className='row'>
        <button onClick={props.dealCard}>DEAL</button>
        </div>
        </div>
    )
}