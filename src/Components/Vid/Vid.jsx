import React from 'react'
import './Vid.css'

function Vid(props) {
    return (
        <video src={props.vid} controls="controls"></video>
    )
}

export default Vid