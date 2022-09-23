import { createSlice, isAllOf } from '@reduxjs/toolkit'

const initialState = {
    eventsArray: [
        {
            title: '',
            description: '',
            chosenData: '',
            chosenTime: '',
        },
    ],
}

export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent(state, action) {
            state.eventsArray = state.eventsArray.push(action.payload)
        },
    },
})


export const { addEvent, getEvents } = eventSlice.actions
export default eventSlice.reducer