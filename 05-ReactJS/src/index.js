import React from 'react'
import {render} from 'react-dom'
import './index.css';
import App from './App'
import { Provider } from 'react-redux'
import storeFactory from './store'

const store = storeFactory()

window.React = React
render(
    
        <App store={store} />
    ,
    document.getElementById("react-container")
)