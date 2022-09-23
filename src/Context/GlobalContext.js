import { createContext } from 'react';


export const GlobalContext = createContext({
    viewDate: new Date(),
    setViewDate: () => {},
    showEventModal: false,
    setShowEventModal: () => {},
    dispatchCallEvents: () => {},
    selectedDay: null,
    setSelectedDay: () => {},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: () => {},
})