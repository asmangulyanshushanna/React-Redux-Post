import {FETCH_POST, NEW_POST} from '../actions/constants';

const initialState = {
    items: [],
}

export default function postReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_POST:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
        return state
    }
}