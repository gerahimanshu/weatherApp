import React from 'react';

const Input = (props) => (
    <div>
        <label><b>{props.name}</b></label>
        <input {...props}/>
    </div>
)

export default Input;