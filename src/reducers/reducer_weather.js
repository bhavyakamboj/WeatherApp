import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    if(action.payload){
        console.log('Action received1st',action.payload.data);
    }
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
            //same as state.concat([action.payload.data])
            // never do state.push(action.payload.data) - not pure function
    }
    return state;
}