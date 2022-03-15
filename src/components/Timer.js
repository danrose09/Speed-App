import React, { useState, useEffect } from 'react'


export default function Timer(props) {




useEffect(() => {

    function incrementTime() {
       props.setTime(prevTime => {
                return prevTime + 10
            })
    }

    let interval = null
    if (props.isOn) {
        interval = setInterval(incrementTime, 10)
    } else {
        clearInterval(interval)
    }

    return () => clearInterval(interval)
    
}, [props.isOn])






return (
    <div className='timer'>
        <span> {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
        <span> {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
        <span> {("0" + ((props.time / 10) % 100)).slice(-2)}</span>
    </div>
)
}