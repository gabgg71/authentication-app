import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import { loadDataS} from '../actions/auth';
import Swal from 'sweetalert2';
import {store} from '../store/store.js';


export const setInfo=(user)=>{
    return async( dispatch ) => {
        const resp = await fetchSinToken('edit', user, 'PUT' );
        const body = await resp.json();
        localStorage.setItem('resp', JSON.stringify(body));
        if( body.ok ) {
        dispatch( loadDataS(user) );
        localStorage.setItem('user', JSON.stringify(store.getState().info));
        window.location.href='/profile';
        }else{
            Swal.fire('Error', body.msg, 'error');
        }


    }
}

export const setImage=()=>{
    //subirla a cloudinary
    //enviar user con la nueva url a la funcion de arriba
}
