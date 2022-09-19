import React, { Fragment, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { getMonth } from '../../utils';
import { Day } from "../Day/Day";

import './styles.css'


export const Month = ({month}) => {
    return (
        <div className='monthWrapper'>
            {month.map((row, index) => {
                return <Fragment key={index}>
                    {row.map((day, i) => {
                        return <Day day={day} key={i}/>
                    })}
                </Fragment>
            })}
        </div>
    );
};