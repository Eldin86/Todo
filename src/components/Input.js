import React from 'react'

const Input = ({ todoBlurAction, val }) => {
    return (
        <input type="text" onBlur={todoBlurAction}/>
    )
}

export default Input