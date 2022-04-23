import { fetchSinToken, fetchConToken, fetchImage } from '../helpers/fetch';
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

export const setImage=(image)=>{
    //subirla a cloudinary
    //enviar user con la nueva url a la funcion de arriba
    return async( dispatch ) => {
    console.log(`recibo ${image}`);
    const resp = await fetchImage('edit/photo',image, 'POST' );
    console.log(resp.body);
    }
}
