import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './slice'

export const store = configureStore({
    reducer:{
        events: eventReducer
    }
})