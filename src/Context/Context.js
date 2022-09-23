import React, { useEffect, useReducer, useState } from 'react';
import { GlobalContext } from "./GlobalContext";


const savedEventsReducer = (state, { type, payload }) => {
    switch (type) {
        case "PUSH":
            return [...state, payload];
        case "UPDATE":
            return state.map(
                event => event.id === payload.id ? payload : event
            );
        case "DELETE":
            return state.filter(event => event.id !== payload.id);
        default:
            return state;
    }
}

const initEvent = () => {
    const storageEvent = localStorage.getItem('savedEvent')
    return storageEvent ? JSON.parse(storageEvent) : [];
}

export const Context = (props) => {
    const [viewDate, setViewDate] = useState(new Date());
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null)
    const [selectedEvent, setSelectedEvent] = useState(null)
    
    const [savedEvents, dispatchCallEvents] = useReducer(
        savedEventsReducer,
        [],
        initEvent
    )
    
    useEffect(() => {
        localStorage.setItem("savedEvent", JSON.stringify(savedEvents))
    }, [savedEvents])
    return (
        <GlobalContext.Provider value={{
            viewDate,
            setViewDate,
            setShowEventModal,
            showEventModal,
            dispatchCallEvents,
            selectedDay,
            setSelectedDay,
            savedEvents,
            selectedEvent,
            setSelectedEvent,
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
};