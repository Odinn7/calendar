import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

import './styles.css'
import { useDispatch } from 'react-redux'
import { addingEvent } from '../../redux/actionCreator'


export const EventCard = () => {
    const {
        setShowEventModal,
        dispatchCallEvents,
        selectedEvent,
        selectedDay,
        setSelectedEvent,
        setSelectedDay,
    } = useContext(GlobalContext)

    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '')
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : '')
    const [chosenDate, setChosenDate] = useState(
        selectedEvent ? selectedEvent.day : '')
    const [chosenTime, setChosenTime] = useState(
        selectedEvent ? selectedEvent.time : '')

    const dispatch = useDispatch()

    const dispatchArrayHandler = (event) => {
        event.preventDefault()
        const calendarEvent = {
            title,
            description,
            id: selectedEvent ? selectedEvent.id : Date.now(),
            day: chosenDate,
            time: chosenTime,
        }
        if (selectedEvent) {
            dispatchCallEvents({ type: 'UPDATE', payload: calendarEvent })
        } else {
            dispatchCallEvents({ type: 'PUSH', payload: calendarEvent })
        }
        setShowEventModal(false)

        dispatch(addingEvent(calendarEvent))

    }

    const closeModalHandler = () => {
        setShowEventModal(false)
        setSelectedEvent(null)
        setSelectedDay(null)
    }

    const deleteEventHandler = () => {
        dispatchCallEvents({ type: 'DELETE', payload: selectedEvent })
        setShowEventModal(false)
        setSelectedEvent(null)
        setSelectedDay(null)
    }


    return (
        <div className='eventCard'>
            <div className='eventCard__eventHeader'>
                <h2 className='eventCard__eventHeader-title'>
                    {selectedDay ? 'Edit event' : 'Add new event'}
                </h2>
                <div className='eventCard__eventHeader__icons'>
                    {
                        selectedEvent &&
                        <button
                            className='eventCard__eventHeader__icons-deleteButton'
                            onClick={deleteEventHandler}>
                            DELETE
                        </button>
                    }
                    <img
                        onClick={closeModalHandler}
                        className='eventCard__eventHeader__icons-closeIcon'
                        alt='close'
                        src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-icon.png'
                    />
                </div>
            </div>
            <div className='eventCard__eventBody'>
                <div className='eventCard__eventBody__inputs'>
                    <input
                        className='eventCard__eventBody__inputs-input'
                        placeholder='Title'
                        onChange={event => setTitle(event.target.value)}
                        value={title}
                        required
                        autoFocus
                    />
                    <textarea
                        className='eventCard__eventBody__inputs-description'
                        placeholder='Description'
                        onChange={event => setDescription(event.target.value)}
                        value={description}
                        rows='9'
                    />
                </div>
                <div className='eventCard__eventBody__timeDate'>
                    <input
                        type='date'
                        className='eventCard__eventBody__timeDate-date'
                        onChange={(event) => setChosenDate(event.target.value)}
                        value={chosenDate}
                    />
                    <input
                        type='time'
                        value={chosenTime}
                        className='eventCard__eventBody__timeDate-time'
                        onChange={(event) => setChosenTime(event.target.value)}
                    />
                </div>
                <div className='eventCard__buttonWrapper'>
                    <button
                        onClick={dispatchArrayHandler}
                        disabled={!title || !chosenDate || !chosenTime}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}
