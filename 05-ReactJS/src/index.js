import React from 'react'
import {render} from 'react-dom'
import './index.css';
import App from './App'

window.React = React
render(
    <App></App>,
    document.getElementById("react-container")
)