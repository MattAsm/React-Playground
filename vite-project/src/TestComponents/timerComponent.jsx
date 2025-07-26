import React, {useRef, useEffect, useState} from "react";

function TimerComponent({ id, removeTimer,  time }){

    const [timeRemaining, setTimeRemaining] = useState(Number(time) * 60 * 1000); // *60*1000 converts to miliseconds

    const intervalRef = useRef(null);
    const endTimeRef = useRef(null);
    
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const newTimeRemaining = endTimeRef.current - Date.now();
            setTimeRemaining(newTimeRemaining > 0 ? newTimeRemaining : 0);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    });

    useEffect(() => {
        if(timeRemaining <= 0){
            removeTimer(id);
        }
    }, [timeRemaining, id, removeTimer]);

    function timeStart(){
        endTimeRef.current = Date.now() + timeRemaining;

        let minutes = Math.floor(timeRemaining / (60 * 1000));
        let seconds = Math.floor((timeRemaining /  1000) % 60);

        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        return `${minutes}:${seconds}`;
    }

    return(
        <div>
           <h4>{timeStart()}</h4> 
           <button>Pause</button>
        </div>
    );
}

export default TimerComponent;