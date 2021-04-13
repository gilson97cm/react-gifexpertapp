import React, {useState} from "react";
import PropTypes from 'prop-types';


// const apiKey = 'nVHnCxwuxnycfsHP531XHm89Zk8dztL7';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValye] = useState('');
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValye(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories(cats => [inputValue,...cats]);
            setInputValye('');
        }

    }

    return (
        <>
            {/*<h1>{inputValue}</h1>*/}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired,
}