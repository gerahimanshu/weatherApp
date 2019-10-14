import React from 'react';

const Select = (props) => (
    <select defaultValue={props.value} onChange={props.onChange}>
        {/* <option disabled selected>List of Cities</option> */}
        {
            props.data.map(city => (
                <option 
                    key={city}
                    name={city}
                >{city}</option>
            ))
        }
    </select>
)

export default Select;