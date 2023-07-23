import React from 'react';
import './App.css';

function Tweet({name,message}){
    return(
        <div className='tweet'>
            <h3>{name}</h3>
            <p style={{padding:20, fontSize:14}}>{message}</p>
            <div className='likes-div'>Tweet</div>
        </div>
    );
}

export default Tweet;