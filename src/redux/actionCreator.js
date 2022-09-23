import axios from 'axios'
import { addEvent } from './slice'

const baseUrl = 'http://localhost:3001/events';

export const addingEvent = (dataToAdd) => async (dispatch) => {
    try {
        const addedData = await axios.post(baseUrl, dataToAdd)
        dispatch(addEvent(addedData.data))

    } catch (error) {
        console.log('ADDING ERROR =>>>>>', error)
    }
}
