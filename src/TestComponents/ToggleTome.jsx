import React, {useRef, useState, useEffect} from "react";

function ToggleTome(){
    const [isVisible, setIsVisible] = useState(true);
    const counter = useRef(0);
    
    let tomeText = isVisible ? "📜" : " ";

    useEffect(() => {
        if(isVisible){
            tomeText = " ";
            counter.current++;
        }
        else{
            tomeText = "📜";    
        }

      
    }, [isVisible]);

    return(
        <>
        <h1>Tome vanished {counter.current} times!</h1>
        <h1 id="tome" style={{fontSize: 100}}>{tomeText}</h1>
        <button onClick={() => {setIsVisible(!isVisible)}}>Vanish</button>
        </>
    );
}

export default ToggleTome;