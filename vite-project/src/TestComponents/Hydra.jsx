import React, { useRef, useEffect, useState } from 'react';
import TimerComponent from './timerComponent';
import './testStyle.css';


function HydraTimer(){

    const [timerArray, setTimeArray] = useState([]);

    function submitForm(event){
        event.preventDefault();
        let newTimer = {
            duration: Number(event.target.elements.addTime.value),
            id:Date.now()
        }
        if(newTimer.duration <=0 ){
            newTimer.duration = 5;
        }
        setTimeArray([...timerArray, newTimer]);
    }

    function removeTimer(id){
        setTimeArray(prev => prev.filter(timer => timer.id !== id));
    }

    return(
        <div>
            <h1>Choose length of timer (in minutes): </h1>
            <form onSubmit={submitForm}>
                <input type="number" id="addTime" placeholder='5'/>
                <button type='submit'>Add Timer</button>
            </form>

            {timerArray.map((time, index) => (
                <TimerComponent key={time.id} time={time.duration} id={time.id} removeTimer={removeTimer}/>
            ))}

        </div>
    );
}

export default HydraTimer;

/**
    {Array.from(timerArray).map(element => {
            <TimerComponent time={element}/>
            console.log(element + ": element");
    })} 
*/