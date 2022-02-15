import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken('auth', { email, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( login({
                uid: body.uid
            }) );
            window.location.href='/profile';
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        

    }
}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            console.log(body.uid);
            dispatch( login({
                uid: body.uid
            }) )
            window.location.href='/profile';
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        window.location.href='/register';

    }
}

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});
