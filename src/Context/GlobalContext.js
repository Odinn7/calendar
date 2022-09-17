import React, { createContext } from 'react';


export const GlobalContext = createContext({
    viewDate: new Date(),
    setViewDate: () => {},
    showEventModal: false,
    setShowEventModal: () => {},
    dispatchCallEvents: ({type, payload}) => {},
    selectedDay: null,
    setSelectedDay: (day) => {},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: (event) => {}
})