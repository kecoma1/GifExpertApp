import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Look for a gif brah');

    // Handling the input
    const handleInputChange = e => setInputValue(e.target.value);

    // Preventing the default behavior of the submit
    const handleSubmit = e => {
        e.preventDefault();
    
        if (inputValue.trim().length > 2) {
            setCategories( c => [inputValue, ...c] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>AddCategory</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
