const userState = {
    img: '',
    name:'',
    bio:'',
    phone: '',
    email: '',
}

export const authReducer = ( state = userState, action ) => {

    switch ( action.type ) {
        
        case 'edit-photo':
            return {
                ...state,
                img: action.payload
            }

        case 'edit-name':
            return {
                ...state,
                name: action.payload
            }

        case 'edit-bio':
            return {
                ...state,
                bio: action.payload
            }
        case 'edit-phone':
            return {
                ...state,
                phone: action.payload
            }

        case 'edit-email':
            return {
                ...state,
                email: action.payload
            }

        default:
            return state;
    }

}