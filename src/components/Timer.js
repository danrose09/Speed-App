import React, { useState, useEffect } from 'react'


export default function Timer(props) {

    const [time, setTime] = useState(0)  

   const yourTimeElement = <div>
       <h1>Your Time: <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span> {("0" + ((time / 10) % 100)).slice(-2)}</span></h1>
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
        <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span> {("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
    </div>
)
}