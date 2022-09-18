import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from "../../Context/GlobalContext";
import { EventCard } from "../EventModal/EventModal";
import dayjs from "dayjs";

import './styles.css'


export const Day = ({ day }) => {
    const {
        showEventModal,
        savedEvents,
        setSelectedDay,
        setShowEventModal,
        setSelectedEvent,
    } = useContext(GlobalContext);
    const [dayEvent, setDayEvent] = useState([]);
    
    useEffect(() => {
        const event = savedEvents.filter(
            newEvent =>
                dayjs(newEvent.day).format('DD-MM-YY')
                ===
                day.format('DD-MM-YY'));
        setDayEvent(event)
    }, [savedEvents, day]);
    
    const getCurrDay = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ?
               'currentDay' :
               'day'
    };
    
    return (
        <div className={`${getCurrDay()}`}>
            {showEventModal && <EventCard day={day}/>}
            <div className='dayCardHeader'>
                <p>
                    {day.format('dddd').toUpperCase()}
                </p>
                <p>
                    {day.format('D')}
                </p>
            </div>
            <div
                className='eventsWrapper'
                onClick={() => {
                    setShowEventModal(true)
                    setSelectedDay(day)
                }}
            >
                {
                    dayEvent?.map(
                        (event, index) =>
                            <div
                                className='eventsWrapper-event'
                                onClick={() => setSelectedEvent(event)}
                                key={index}
                            >
                                {event.title}
                            </div>)
                }
            </div>
        </div>
    );
};