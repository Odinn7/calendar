import React, { Fragment } from "react";
import { Header } from "./components/Header/Header";
import { Month } from "./components/Month/Month";


export const App = () => {
    
    return (
        <Fragment>
            <Header/>
            <Month/>
        </Fragment>
    );
}
