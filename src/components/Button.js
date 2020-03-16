import React from 'react';


const Button = props => {

    const action = e => {
        e.preventDefault();
        props.action();
    }

    return(
        <button onClick={e => action(e)} className='standard-button'>{props.title}</button>
    );
}

export default Button;
