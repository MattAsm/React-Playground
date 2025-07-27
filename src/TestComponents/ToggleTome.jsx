import React, {useRef, useState, useEffect} from "react";

function ToggleTome(){
    const [isVisible, setIsVisible] = useState(true);
    const counter = useRef(0);
    const tomeTextRef = useRef(null);//document.getElementById("tome");

    useEffect(() => {

     if(isVisible){
            tomeTextRef.current.style.visibility = "visible";
            counter.current++;
        }
        else{
            tomeTextRef.current.style.visibility = "hidden";
        }

    }, [isVisible]);

    return(
        <>
        <h1>Tome vanished {counter.current} times!</h1>
        <h1 id="tome" ref={tomeTextRef} style={{fontSize: 100}}>📜</h1>
        <button onClick={() => {setIsVisible(!isVisible)}}>{isVisible ? "Vanish" : "Appear"}</button>
        </>
    );
}

export default ToggleTome;