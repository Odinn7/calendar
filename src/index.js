import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Context } from './Context/Context'
import { Provider } from 'react-redux'
import { store } from './redux/store'


import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context>
        <Provider store={store}>
            <App />
        </Provider>
    </Context>,
)