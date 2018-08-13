import FETCH_WEATHER from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        console.log(action.type);
            console.log(action.payload.data);
            return [action.payload.data, ...state];
            //same as state.concat([action.payload.data])
            // never do state.push(action.payload.data) - not pure function
    }
    return state;
}