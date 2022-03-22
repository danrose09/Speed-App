import React, { useState, useEffect } from 'react'


export default function Timer(props) {

    const [time, setTime] = useState(0) 

    useEffect(() => {
        setTime(0)
    }, [props.reset])
    
    const timer = {
        'minutes': ("0" + Math.floor((time / 60000) % 60)).slice(-2),
        'seconds': ("0" + Math.floor((time / 1000) % 60)).slice(-2),
        'miliseconds': ("0" + ((time / 10) % 100)).slice(-2)
    }

   const yourTimeElement = <div>
       <h1>Your Time: <span> {timer.minutes}:</span>
        <span> {timer.seconds}:</span>
        <span> {timer.miliseconds}</span></h1>
   </div>



    useEffect(() => {
    
    function incrementTime() {
        
            setTime(prevTime => {
                return prevTime + 10
            })
    }

    let interval = null
    if (props.hasStarted && !props.hasWon) {
        interval = setInterval(incrementTime, 10)
    } else if (props.hasWon) {
        clearInterval(interval)
    }else {
        clearInterval(interval)
    }

    return () => clearInterval(interval)
    
}, [props.hasStarted])



return (
    <div className='timer'>
        {props.hasWon ? yourTimeElement : null}
        <div hidden={props.hasWon ? true : false}>
        <span> {timer.minutes}:</span>
        <span> {timer.seconds}:</span>
        <span> {timer.miliseconds}</span>
        </div>
    </div>
)
}