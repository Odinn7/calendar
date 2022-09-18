import React, { useCallback, useContext } from 'react';
import { GlobalContext } from "../../Context/GlobalContext";
import dayjs from "dayjs";

import './styles.css'


export const Header = () => {
    const {
        viewDate,
        setViewDate,
        setShowEventModal
    } = useContext(GlobalContext);
    
    const prevMonthHandler = () => {
        const prevMonth = viewDate.getMonth();
        const newDate = new Date(viewDate)
        newDate.setMonth(prevMonth - 1)
        setViewDate(newDate)
    };
    
    const nextMonthHandler = () => {
        const prevMonth = viewDate.getMonth();
        const newDate = new Date(viewDate)
        newDate.setMonth(prevMonth + 1)
        setViewDate(newDate)
    };
    
    const datePickerHandler = useCallback((event) => {
        const dateString = event.target.value;
        const newDate = dayjs(dateString, "YYYY-M").toDate();
        setViewDate(newDate)
    }, []);
    
    return (
        <header className='header'>
            <button className='header__addEventBtn'>
                <img
                    onClick={() => setShowEventModal(true)}
                    src='https://cdn-icons-png.flaticon.com/512/1004/1004733.png'
                    alt='addEvent'
                />
            </button>
            <div className='header__rightSideWrapper'>
                <button className='header__rightSideWrapper-prevArr'>
                    <img
                        onClick={prevMonthHandler}
                        alt='arrow'
                        src='https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-left-icon.svg'
                    />
                </button>
                <div className='header__rightSideWrapper-month'>
                    {dayjs(viewDate).format("YYYY-MM")}
                </div>
                <button className='header__rightSideWrapper-nextArr'>
                    <img
                        onClick={nextMonthHandler}
                        alt='arrow'
                        src='https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-right-icon.svg'
                    />
                </button>
                <span className="datepicker-toggle">
                        <span className="datepicker-toggle-button"/>
                        <input
                            min="1980-01-01" max="2050-12-31"
                            type="month" className="datepicker-input"
                            onChange={(event) => datePickerHandler(event)}
                        />
                </span>
            </div>
        </header>
    );
};