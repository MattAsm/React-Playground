import React, {useState, useEffect, useRef} from 'react';
import './testStyle.css';
function RateDungeon(){
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleReviewChange = (event) => {
        setMessage(event.target.value);
    };

    const isFormComplete = username === '' || message === '';

    function submitForm(event){
        event.preventDefault();
        console.log(username);
        console.log(message);

        setUsername('');
        setMessage('');
    }

    return(
    <div>
        <hr></hr>
        <form  onSubmit={submitForm}>
            <h1>Rate your dungeon experience:</h1>
            <input type="text" id='name' placeholder={"Name"} value={username} onChange={handleUsernameChange}/>
            <br/>
            <textarea name="" id="review" placeholder='Review...' value={message} onChange={handleReviewChange}></textarea>
            <br/>
            <button type="submit" disabled={isFormComplete}>Submit!</button>
        </form>
        <br/>
        <h2>Your message:</h2>
        <h3>{username}</h3>
        <h4>{message}</h4>
    </div>
    );
}

export default RateDungeon;