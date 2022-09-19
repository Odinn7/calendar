import React, { Fragment, useContext, useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Month } from "./components/Month/Month";
import { GlobalContext } from "./Context/GlobalContext";
import { getMonth } from "./utils";


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
