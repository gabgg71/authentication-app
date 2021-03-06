import { types } from '../types/types';

const initialState = {
    checking: true,
    uid: null
}

export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.authLogin:
            console.log(`se loguea recibo ${action.payload}`);
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        case types.authLogout:
            return {
                checking: false
            }


        default:
            return state;
    }

}