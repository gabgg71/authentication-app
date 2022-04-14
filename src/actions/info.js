import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';


export const setImage=(img)=>{
    return async( dispatch ) => {
        //subirla a cloudinary
        //subir la url a la base de datos
        //actualizar url en gestor de estado
        const resp = await fetchSinToken('auth', { email, password }, 'POST' );
        const body = await resp.json();
    }
}

export const setName=(name)=>{
    return async( dispatch ) => {
        //subir la url a la base de datos
        //actualizar url en gestor de estado
        const resp = await fetchSinToken('auth', { email, password }, 'POST' );
        const body = await resp.json();
    }
}