import {MEMO_SUCCESS, MEMO_FAILURE, MEMO_PENDING} from "../action/types";

const initialState = {
    success: null,
    failure: null,
    pending: null,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case MEMO_SUCCESS:
            return {
                ...state,
                success: true,
                failure: false,
                pending: false
            };
        case MEMO_FAILURE: 
            return {
                ...state,
                failure: true,
                success: false,
                pending: false,
            };
        case MEMO_PENDING: 
            return {
                ...state,
                pending: true,
                success: false,
                pending: false,
            };
        default: 
            return state;
    }
}

