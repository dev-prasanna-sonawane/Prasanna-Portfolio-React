import React from 'react'

function Button(props) {
    return <a href={props.link} className={`btn ${props.className}`}>{props.text}</a>;
}

export default Button