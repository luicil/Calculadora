/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Button.css'

export default props =>
    <button>{props.label ? props.label : "?"}</button>
