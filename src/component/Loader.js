import React from 'react';
//Gif
import spinner from '../gif/Spin.gif';

const loader = () => {
    return (
        <div style={{backgroundColor:"#F1F3F4", width:"100%", height:"100vh"}}>
           <img src={spinner} alt='loading' />
           <h1>Loading ...</h1>
        </div>
    );
};

export default loader;