import React, { Fragment, useEffect, useState, useContext } from "react";
import { getMonth } from './utils';
import { Header } from "./components/Header/Header";
import { Month } from "./components/Month/Month";
import { GlobalContext } from "./Context/GlobalContext";


export const App = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { viewDate } = useContext(GlobalContext)
    
    useEffect(() => {
        setCurrentMonth(getMonth(viewDate.getMonth()))
    }, [viewDate])
    
    return (
        <Fragment>
            <Header/>
            <Month month={currentMonth}/>
        </Fragment>
    );
}
