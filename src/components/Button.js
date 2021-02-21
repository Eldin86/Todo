import React from 'react'

const Button = ({onClick, icon}) => {
    return (
        <button onClick={onClick}><i className={icon}></i></button>
    )
}

export default Button
