import React, {useRef, useEffect, useState} from "react";

function TimerComponent({ id, removeTimer,  time }){

    const [isRunning, setIsRunning] = useState(true);
    const [timeRemaining, setTimeRemaining] = useState(Number(time) * 60 * 1000); // *60*1000 converts to miliseconds

    const intervalRef = useRef(null);
    const endTimeRef = useRef(null);
    
    useEffect(() => {
        if(isRunning){
            intervalRef.current = setInterval(() => {
                const newTimeRemaining = endTimeRef.current - Date.now();
                setTimeRemaining(newTimeRemaining > 0 ? newTimeRemaining : 0);
            }, 100);
        }
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isRunning]);

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

    function pause(){
        if(timeRemaining <= 0){
            setTimeRemaining(Number(time) * 60 * 1000);
            endTimeRef.current = Date.now() + Number(time) * 60 * 1000;
        }
        else{
            endTimeRef.current = Date.now() + timeRemaining.current;
        }
        setIsRunning(!isRunning);
    }

    return(
        <div>
           <h4>{timeStart()}</h4> 
           <button onClick={pause} >{isRunning ? "Pause" : "Start"}</button>
        </div>
    );
}

export default TimerComponent;