import { types } from '../types/types';

const userState = {
    img: " ",
    name:"sin definir",
    bio:"sin definir",
    phone: "sin definir",
    email: "sin definir"
}

export const infoReducer = ( state = userState, action ) => {

    switch ( action.type ) {
        
        case types.loadData:
            console.log(`load data ${action.payload.name}`);
            return {
                ...state,
                ...action.payload
            }
        case types.image:
            return {
                ...state,
                img: action.payload
            }

        case types.name:
            return {
                ...state,
                name: action.payload
            }

        case types.bio:
            return {
                ...state,
                bio: action.payload
            }
        case types.phone:
            return {
                ...state,
                phone: action.payload
            }

        case types.email:
            return {
                ...state,
                email: action.payload
            }

        default:
            return state;
    }

}